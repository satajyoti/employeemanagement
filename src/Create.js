import React, { useState } from 'react'

import { Button, Form } from 'semantic-ui-react'
import EmployeeService from './services/EmployeeService'
import { useNavigate } from "react-router-dom";

const Create = () =>{
    let navigate = useNavigate(); 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const postData = () => {
        const emp={
            firstName:firstName,
            lastName:lastName,
            tel:tel,
            email:email
        }
        EmployeeService.createEmployee(emp).then(res=>{
            console.log(res)
            navigate('/read')
        })
        
}
    return (
    <Form className="create-form">
        <h2 className="main-header">Create Employee</h2>

        <div className='row'>
          <div className='col-md-4'>First Name </div>
          <div className='col-md-8'> <input class="form-control" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} /></div>
        </div>
       
        <br></br>
        <div className='row'>
          <div className='col-md-4'>Last Name </div>
          <div className='col-md-8'>  <input className='form-control' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} /></div>
        </div>

       <br></br>

       <div className='row'>
          <div className='col-md-4'>Telephone </div>
          <div className='col-md-8'>  <input className='form-control' placeholder='Tele Phone' onChange={(e) => setTel(e.target.value)} /></div>
        </div>
       
        <br></br>
        <div className='row'>
          <div className='col-md-4'>Email </div>
          <div className='col-md-8'>  <input className='form-control' placeholder='Email'  onChange={(e) => setEmail(e.target.value)} /></div>
        </div>
        
        <br></br>

        <Button type='submit' onClick={postData} className='btn btn-primary'>Submit</Button>
    </Form>
)
}

export default Create;