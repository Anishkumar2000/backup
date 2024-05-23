import React, { useEffect, useState } from 'react'
import "./HomeTabel.css";
import Employee_deatils from './Employee_details';


function HomeTabel() {



  const [Num,setNum] = useState(0);

  useEffect( () =>{
      // setNum(0);
      console.log(Num);
      // setNum((n)=>n+1);
      },[Num]); 

  return (
    
      <div className='container'>
        <div className='hmhead'>
          <h1>Employee Details</h1>
        </div>
        <div className='thead'>
          <div className='hid'><h2>Emp Id</h2></div>
          <div className='hname'><h2>Name</h2></div>
          <div className='hmail'><h2>E-mail Id</h2></div>
          <div className='hmobile'><h2>Mobile No</h2></div>
          <div className='hposition'><h2>Position</h2></div>
          <div className='hsalary'><h2>Salary / Hour</h2></div>
          <div className='haction'><h2>Action</h2></div>
        </div>
        <div className='tbody'>
          {
            Employee_deatils.map((Emp) => {
              return (
                <div className='tbody1'>
                  <div className='bid'><input type='text' id='bid' defaultValue={Emp.Id} /></div>
                  <div className='bname'><input type='text' defaultValue={Emp.Name} readOnly /></div>
                  <div className='bmail'><input type='text' defaultValue={Emp.E_mail_id} readOnly /></div>
                  <div className='bmobile'><input type='text' defaultValue={Emp.Mobile_no} readOnly /></div>
                  <div className='bposition'><input type='text' defaultValue={Emp.Position} readOnly /></div>
                  <div className='bsalary'><input type='text' defaultValue={Emp.Hour} readOnly/></div>
                  <div className='baction'><button className='edit_save'>Edit</button><button className='delete'>Delete</button></div>
                  
                </div>
                
              )
              
            }

            )
            
          }
          <div className='edit'>
            <div className='eid'><input type='text' id='eid' placeholder='Enter Id' /></div>
            <div className='ename'><input type='text' id='ename' placeholder='Enter Name' /></div>
            <div className='email'><input type='text' id='email' placeholder='Enter Mail Id' /></div>
            <div className='emobile'><input type='text' id='emobile' placeholder='Enter Mobile No' /></div>
            <div className='eposition'><input type='text' id='eposition' placeholder='Enter Position' /></div>
            <div className='esalary'><input type='text' id='esalary' placeholder='Enter Salary / Hour' /></div>
            <div className='eaction'><button className='add' onClick={Addemp} Reset Input>Add</button><button className='clear'>Clear</button></div>
          </div>

        </div>
        
        <footer><h2>Footer</h2></footer>
      </div>
  
  )

}

export default HomeTabel;




function Addemp() {
  
  var eid = document.getElementById("eid").value;
  var ename = document.getElementById("ename").value;
  var email = document.getElementById("email").value;
  var emobile = document.getElementById("emobile").value;
  var eposition = document.getElementById("emobile").value;
  var esalary = document.getElementById("esalary").value;
    var a = {
      Id:`${eid}`,
      Name: `${ename}`,
      E_mail_id: `${email}`,
      Mobile_no: `${emobile}`,
      Position: `${eposition}`,
      Hour: `${esalary}` 
    }
    let added = Employee_deatils.push(a);
  
    added=Employee_deatils;
    // console.log(Employee_deatils);

    if (!eid=="") {
      console.log("yes");
    }
    else{
      console.log("no");
    }
  

}