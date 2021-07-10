import Table from 'react-bootstrap/Table'
import { TiTimes } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import React, { useState } from "react";
function Inbox(){
    const [style, setStyle] = useState({display: 'none'});
    const [style1, setStyle1] = useState({display: 'block'});
    return(
        <div class="inbx-tbl">
            <h2 className="heading"><font face="Times New Roman">INBOX</font></h2>
            <br></br><br></br>
        <Table responsive="md">
        <tbody>
            
          <tr class="inbx-tr">
            <td>1</td>
            <td>Rahul</td>
            <td>Table cell</td>
            <td >Table cell</td>
            <td width="50px"  ><TiTimes  className="cross-icn icn" size="28px" color="red"/></td>
            <td width="50px" ><TiTick  className="tick-icn icn" size="28px" color="green"/></td>
            <td width="50px"><div className="time">08:33</div></td>
          </tr>
          <tr class="inbx-tr">
          <td>2</td>
            <td>Abhay</td>
            <td>Table cell</td>
            <td >Table cell</td>
            <td width="50px"  ><TiTimes  className="cross-icn icn" size="28px" color="red"/></td>
            <td width="50px" ><TiTick  className="tick-icn icn" size="28px" color="green"/></td>
            <td width="50px"><div className="time">08:33</div></td>
          </tr>
          <tr class="inbx-tr">
            <td>3</td>
            <td>Jain</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td width="50px"  ><TiTimes  className="cross-icn icn" size="28px" color="red"/></td>
            <td width="50px" ><TiTick  className="tick-icn icn" size="28px" color="green"/></td>
            <td width="50px"><div className="time">08:33</div></td>
          </tr>
          <tr class="inbx-tr">
            <td>4</td>
            <td>Jain</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td width="50px"  ><TiTimes  className="cross-icn icn" size="28px" color="red"/></td>
            <td width="50px" ><TiTick  className="tick-icn icn" size="28px" color="green"/></td>
            <td width="50px"><div className="time">08:33</div></td>
          </tr>
          <tr class="inbx-tr">
            <td>5</td>
            <td>Jain</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td width="50px"  ><TiTimes  className="cross-icn icn" size="28px" color="red"/></td>
            <td width="50px" ><TiTick  className="tick-icn icn" size="28px" color="green"/></td>
            <td width="50px"><div className="time">08:33</div></td>
          </tr>
          <tr class="inbx-tr">
            <td>6</td>
            <td>Jain</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td width="50px"  ><TiTimes  className="cross-icn icn" size="28px" color="red"/></td>
            <td width="50px" ><TiTick  className="tick-icn icn" size="28px" color="green"/></td>
            <td width="50px"><div className="time">08:33</div></td>
          </tr>
        </tbody>
      </Table></div>
    );
}
export default Inbox;