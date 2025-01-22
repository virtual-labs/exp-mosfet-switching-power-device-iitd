const Formulas = {  
    usingMeters:{
        iD(values,colIdx,vDS_idx){
            
            const 
            Kn_values = [3,0.64,0.425,0.3188,0.2119],
            lambda_values = [0.0138,0.25,0.1765,0.0858,0.0259],
            Mn_values = [3,1.0827,0.7111,0.3607,0.1681],
            gama_values = [0.0138,0.0087,0.025,0.0592,0.0543]
            
            colIdx = colIdx - 1
            let Kn = Kn_values[colIdx],
            lambda = lambda_values[colIdx],
            Mn = Mn_values[colIdx],
            gama = gama_values[colIdx],
            vT = 3,
            vGS = values.vGS,
            vDS = this.vDS(vDS_idx)
            
            let ans = 0
            if(0 <= vDS && vDS <= (vGS - vT)){
                let a = Kn * ( 2*(vGS - vT) * vDS - Math.pow(vDS,2))
                let b = (1 + lambda * vDS)
                ans = a * b 
            }else
            if( vDS >= (vGS - vT)){
                let a = Mn * Math.pow((vGS - vT),2)
                let b = (1 + gama * vDS)
                ans = a * b
            }
            return Number(ans.toFixed(2))
        },
        vDS(vDS_idx){
            const vDS_values = [0,10,20,30,40,50]
            return vDS_values[vDS_idx]
        },
    },
    usingOscilloscope:{
        iD(values,colIdx,vDS_idx){
            const 
            Kn_values = [3,0.64,0.425,0.3188,0.2119],
            lambda_values = [0.0138,0.25,0.1765,0.0858,0.0259],
            Mn_values = [3,1.0827,0.7111,0.3607,0.1681],
            gama_values = [0.0138,0.0087,0.025,0.0592,0.0543]
            
            colIdx = colIdx - 1
            let Kn = Kn_values[colIdx],
            lambda = lambda_values[colIdx],
            Mn = Mn_values[colIdx],
            gama = gama_values[colIdx],
            vT = 3,
            vGS = values.vGS,
            vDS = this.vDS(vDS_idx)
            
            let ans = 0
            if(0 <= vDS && vDS <= (vGS - vT)){
                let a = Kn * ( 2*(vGS - vT) * vDS - Math.pow(vDS,2))
                let b = (1 + lambda * vDS)
                ans = a * b 
            }else
            if( vDS >= (vGS - vT)){
                let a = Mn * Math.pow((vGS - vT),2)
                let b = (1 + gama * vDS)
                ans = a * b
            }
            console.log("ID: ",colIdx,vDS_idx,ans)
            return Number(ans.toFixed(2))
        },
        vDS(vDS_idx){
            const vDS_values = [0,10,20,30,40,50,60]
            return vDS_values[vDS_idx]
        },
    },
    transferCharacteristics:{
        iD(values,vDS_idx){
            
            let vT = 3,             
            vGS = values.vGS,
            vDS = this.vDS(vDS_idx)
            
            let ans = 0
            if(0 <= vDS && vDS <= 3){
                ans = 0
            }else
            if(3 <= vDS && vDS <= 4){
                ans = 0.7 * Math.pow((vGS - vT),2)
            }else{
                ans = 3.3 * ( Math.pow((vGS-vT), 2) - 0.79)
            }   
            return Number(ans.toFixed(2))
        },
        vDS(vDS_idx){
            const vDS_values = [0,2,4,6,8,10]
            return vDS_values[vDS_idx]
        },
    }
}

let values = {
    vIn:0,
    vGS:0,
    R:0,
}

function updateValues(vIn,vGS,R){
    values = {
        vIn:vIn,
        vGS:vGS,
        R:R,
    }
}