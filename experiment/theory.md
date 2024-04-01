### Theory


**Representation of MOSFET:**

Fig. 1(a) and 1(b) show the symbolic representation of MOSFET and a typical MOSFET package available in market.

<br>

<table border="0" align="center" style="width:100%; border:none;">
  <tr>
<td style="width:50%">
<center>

<br>
<img src="images/th1.png">
<br><br>
Fig. 1(a). Symbolic representation of MOSFET
<br><br>
</center>
</td>
<td style="width:50%">
  
<center>

<br>
<img src="images/th2.png">
<br><br>
Fig. 1(b). A typical MOSFET package
<br><br>
</center> 
    </td>
  </tr>
</table>
<br>

<br>
<div style="float: left; width:100%;"><br>
  
**Introduction to MOSFET:**

Fig. 2 shows the internal structure of MOSFET. Some of the key features of MOSFET are compiled and given below.

</div>

<center>
<img src="images/th3.png" height="350px">

<br>
Fig. 2. Internal structure of MOSFET.
<br>
</center>
<br>

1.	It is a three-terminal majority carrier device. It exhibits high switching speed, low rise and fall time. It is suitable for low-power, high-frequency switching applications such as DC-DC converters.<br>

2.	It is a voltage-controlled device and the ‘Gate circuit’ requires only a small amount of current for it to start conducting (ON-State).<br>

3.	There are two types of MOSFETs: a) Depletion type, b) Enhancement type. Both have three terminals: Drain (D), Source (S) and Gate (G).<br>

4.  Enhancement-type MOSFET works in two modes: ON-state (conducting) and OFF-state (blocking), controlled by the PWM signal given to the Gate terminal.<br>

5.  For gate-to-source voltage more than threshold (VT), Enhancement-type MOSFET conducts. At zero gate voltage, it remains in OFF-state. Hence, it is generally used as switching device in  power converters/ power conversion applications.<br>	  


**Operating modes of MOSFET switching device:**
<br>

1.	Forward Blocking State (vDS > 0, vGS = 0): A MOSFET is a voltage controlled device. When Drain-to-Source voltage (vDS ) is positive, both the junctions remain reverse biased. MOSFET doesn’t conduct.

2.	Forward Conducting State (vDS > 0, vGS ≥ VT ): When Drain-to-Source voltage (vDS ) is positive, with Gate-to-Source voltage (vGS) more than threshold voltage, the MOSFET starts conducting and hence current flows from drain to source. 
During forward conduction, the MOSFET will operate in any one of the following states, depending on the values of drain-to-source voltage (VDS) and the Gate voltage (VGS) values: Cut-off region, linear region and Saturation region.<sub>1</sub>
  
3.	Reverse Blocking State (vDS < 0):  When the drain-to-source voltage (VDS) is negative the junctions become reverse biased and MOSFET stops conducting.<br><br>

**Characteristics of the MOSFET:**

There are two important characteristics defined for an MOSFET:

1.	Output Characteristics: It is the plot between the Drain-to-Source voltage (VDS) and the Drain current (ID) for a fixed Gate-to-Source voltage (VGS). The circuit diagram to plot these characteristics is given in Fig. 3. Voltage ‘VDS’ is measured by the voltmeter while the ammeter measures the current ‘ID’.<br><br>

<center>
<img src="images/th4.png" height="350px">

<br>
Fig. 3. Circuit diagram for output characteristics.
<br>
</center>
<br> 

3.	The 'v-i' characteristics of SCR is shown in Fig. 4.

<center>
<img src="images/th5.png" height="350px">

<br>
Fig. 4. v-i  characteristics of SCR.
<br>
</center>
<br> 

4.	SCR has three operating modes: Forward Blocking, Forward Conduction and Reverse Blocking as shown in Fig. 4. 'I<sub>H</sub>' is the holding current and 'I<sub>L</sub>' is the latching current. The Forward breakover voltages 'V<sub>BO1</sub> , V<sub>BO2</sub> and V<sub>BO3</sub>' (V<sub>BO1</sub> <V<sub>BO2</sub> <V<sub>BO3</sub>) correspond to the Gate currents 'I<sub>g1</sub>, I<sub>g2</sub>  and I<sub>g3</sub>'  (I<sub>g1</sub> > I<sub>g2</sub> > I<sub>g3</sub>) respectively.



<div style="float: left; width:100%;"><br>
  
**Circuit Diagram to plot 'v-i' Characteristics**

The v-i characteristics of SCR can be obtained using the circuit diagram given in Fig. 3. AC supply is connected in series with SCR and a resistive load. In order to obtain the v-i characteristics, the Anode-to-Cathode voltage (v<sub>AK</sub>) and Anode current (i<sub>A</sub>) are to be recorded using any one of the following methods:

1.	Using Analog measuring instruments: Voltmeters and Ammeters
2.	Using Digital Storage Oscilloscope

**•	Method-1: Using Analog measuring instruments: Voltmeters and Ammeters**
</div>

<center>
<img src="images/th6.png" height="350px">

<br>
Fig. 5. Circuit Diagram using meters.
<br>
</center>
<br>

Steps for experimentation (Refer Fig. 5): 

  1.	Ammeter to measure the anode current and Voltmeter to measure the anode-to-cathode voltage (v<sub>AK</sub>) are to be connected in series and parallel respectively to the SCR.

  2.	The gate supply circuit consists of a battery in series with the  rheostat and an Ammeter. The rheostat (R<sub>g</sub>) limits the gate current (I<sub>g</sub>) magnitude since only a very small amount of gate current is required to trigger the SCR into ON-state.

  3.	The input supply voltage is increased in steps and the corresponding Voltmeter and Ammeter readings are to be tabulated. The data points indicate the v-i characteristics.<br><br>


**Instruments required for the above method:**


<table border="0" align="center" style="width:100%; border:none;">
  <tr>
<td style="width:50%">
<center>
  
**Instrument**
</center>
</td>
<td style="width:50%">
  
<center>
  
**Quantity**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
  
SCR mounted on a heat sink
</center>
</td>
<td style="width:50%">
   
<center>
  
**1**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
Variable AC supply (autotransformer)
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
Rheostats (Rating: 1 KΩ, 100 KΩ)
</center>
</td>
<td style="width:50%">
  
<center>
  
**2**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
Multi-meter
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
AC- Voltmeter
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
AC-Ammeter
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
DC-Ammeter
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
</table>



**•	Method-2: Using Digital Oscilloscope (DSO)**


<center>
<img src="images/th7.png" height="350px">

<br>
Fig. 6. Circuit Diagram using probes.
<br>
</center>
<br>

Steps for experimentation (Refer Fig. 6): 

  1.	A hall effect current probe is used to measure the anode current (i<sub>A</sub>) and a differential voltage probe (DVP) to is used to measure the anode-to-cathode voltage (v<sub>AK</sub>).<br>
  2.	Measure the anode current using the hall effect current probe (connect this probe to channel-2 of DSO which displays on y-axis). The voltage probe is connected across the SCR to measure the anode-to-cathode voltage (connect this probe to channel-1 of DSO which displays on x-axis).<br>
  3.	The gate supply circuit consists of a battery in series with a rheostat and a DC ammeter. The rheostat (R<sub>g</sub>) limits the gate current (I<sub>g</sub>) magnitude since only a very small amount of gate current is required to trigger the SCR into ON-state.<br>
  4.	Increase the input supply voltage (v<sub>in</sub>) gradually and observe the current-vs-voltage profile simultaneously on the DSO screen. This trace is the v-i characteristics of the SCR.<br<br>
  


**Instruments required for the above method:**


<table border="0" align="center" style="width:100%; border:none;">
  <tr>
<td style="width:50%">
<center>
  
**Instrument**
</center>
</td>
<td style="width:50%">
  
<center>
  
**Quantity**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
  
SCR mounted on a heat sink
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
Variable AC supply (autotransformer)
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
Rheostats (Rating: 1 KΩ, 100 KΩ)
</center>
</td>
<td style="width:50%">
  
<center>
  
**2**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
Multi-meter
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
Digital Oscilloscope (DSO)
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
Differential Voltage Probe
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
Current Probe
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
</table>

