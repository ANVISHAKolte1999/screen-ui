import React,{useState} from 'react';
import {Row,Col,Table,Card,Dropdown,ButtonGroup,Breadcrumb,Button } from 'react-bootstrap';
import { MdModeEditOutline } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { AiFillCopy } from "react-icons/ai";
import { ImBin} from "react-icons/im";

function Screen() {


  return (
    <div >
<Breadcrumb>
  <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    Both
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">All</Breadcrumb.Item>
</Breadcrumb>
<br></br>

      <h6 style={{marginRight:"990px"}} ><b>Events</b></h6>
      <Button style={{marginLeft:"900px"}} variant="primary">+ New Event</Button>{' '}
<br></br>
      <Card>
       <Card.Body>
         <h6 style={{marginRight:'950px'}}><b>Activity</b></h6>
<Table striped bordered hover>
  <thead>
    <tr>
    <th> <AiFillCalendar size="40px" color="blue"/>3  </th>
      <th><AiFillCamera size="40px" color="blue" /> 18</th>
      
      <th>< AiOutlineShareAlt size="40px" color="blue"/>Share</th>
    </tr>
  </thead>
  <tbody>
  
   
  </tbody>
</Table>

       </Card.Body></Card>
       <br></br>
       <Card>
         <Card.Body>
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Slug</th>
      <th>Event Star Date</th>
      <th>Photos</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>777777</td>
      <td>777777</td>
      <td>14/29/212.09.36 PM</td>
      <td>6</td>
      <td> <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle id="dropdown-custom-1">De-Active</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Active Item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>{' '}

 

 </td>
      <td><th>< MdModeEditOutline size="20px" color="black"/>
      < AiFillCopy style={{marginLeft:"8px"}} size="20px" color="black"/>
      < ImBin style={{marginLeft:"8px"}} size="20px" color="black"/></th></td>
    </tr>
    <tr>
      <td>Biz-Demo-Selfi</td>
      <td>777777</td>
      <td>14/29/212.09.36 PM</td>
      <td>6</td>
      <td> <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle id="dropdown-custom-1">De-Active</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Active Item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>{' '}

 

 </td>
      <td><th>< MdModeEditOutline size="20px" color="black"/>
      < AiFillCopy style={{marginLeft:"8px"}} size="20px" color="black"/>
      < ImBin style={{marginLeft:"8px"}} size="20px" color="black"/></th></td>
    </tr>
    <tr>
      <td>Biz-Demo-Selfi</td>
      <td>777777</td>
      <td>14/29/212.09.36 PM</td>
      <td>6</td>
      <td> <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle id="dropdown-custom-1">De-Active</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Active Item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>{' '}

 

 </td>
      <td><th>< MdModeEditOutline size="20px" color="black"/>
      < AiFillCopy style={{marginLeft:"8px"}} size="20px" color="black"/>
      < ImBin style={{marginLeft:"8px"}} size="20px" color="black"/></th></td>
    </tr>
  
   
  </tbody>
</Table>
           </Card.Body>
       </Card>
    </div>
  );
}

export default Screen;