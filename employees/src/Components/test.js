import React, { useEffect, useState } from 'react'
import Employee_deatils from './Employee_details';

function Test() {
  
    const [a,seta] = useState("");

    useEffect( () =>{
        Employee_deatils.map(
            (emp) =>{
                seta(emp.Id);
            } 
        )
        
    }

    )
  return (
    
    
    <h1>{a}</h1>
  )
}

export default Test;