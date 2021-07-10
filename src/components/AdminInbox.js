import Table from 'react-bootstrap/Table'
function AdminInbox()
{
    return(
        <div class="inbx-tbl ">
      <br></br>
    <Table responsive="md">
    <tbody>
        
      <tr class="inbx-tr">
        <td>1</td>
        <td>Rahul</td>
        <td>Table cell</td>
        <td >Table cell</td>
     
        <td width="50px"><div>08:33</div></td>
      </tr>
      <tr class="inbx-tr">
      <td>2</td>
        <td>Abhay</td>
        <td>Table cell</td>
        <td >Table cell</td>
       
        <td width="50px"><div>08:33</div></td>
      </tr>
      <tr class="inbx-tr">
        <td>3</td>
        <td>Jain</td>
        <td>Table cell</td>
        <td>Table cell</td>
    
        <td width="50px"><div className="time">08:33</div></td>
      </tr>
      <tr class="inbx-tr">
        <td>4</td>
        <td>Jain</td>
        <td>Table cell</td>
        <td>Table cell</td>

        <td width="50px"><div className="time">08:33</div></td>
      </tr>
      <tr class="inbx-tr">
        <td>5</td>
        <td>Jain</td>
        <td>Table cell</td>
        <td>Table cell</td>
        
        <td width="50px"><div className="time">08:33</div></td>
      </tr>
      <tr class="inbx-tr">
        <td>6</td>
        <td>Jain</td>
        <td>Table cell</td>
        <td>Table cell</td>
      
        <td width="50px"><div className="time">08:33</div></td>
      </tr>
    </tbody>
  </Table></div>
    )
}
export default AdminInbox;