import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Employee() {

    //
    const[allemployees, updateAllEmployees]=  useState([])

    //use useEffect hook whenever you want to call 
    //remote REST API
    //useEffect takes 2 parameters
    //useEffect(callbackfunction, array) => useEffect(()=>{//apicall},[])
    useEffect(()=>{
        callRestApi()
    }, [])

    const callRestApi=()=>{
        axios.get("https://dummy.restapiexample.com/api/v1/employees")
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                console.log(response.data.data)
                //update allemployees state with the data 
                //received in response i.e. response.data.data
                updateAllEmployees(response.data.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    const renderEmployees = ()=>{
     return allemployees.map((employee, index)=>{
        //console.log(employee)
        //console.log(employee.employee_name)
        return(
            <li key={index}>
                {employee.employee_name}
                
            </li>
        )
     })
    }

    return (  
        <div>
            <h1>Remote Employee Data</h1>
            Count of employees:{allemployees.length}
            <br />
            <ol>
                {renderEmployees()}
            </ol>
        </div>
    );
}

export default Employee;