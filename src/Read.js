import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import EmployeeService from './services/EmployeeService'
import { useNavigate } from "react-router-dom";

export default function Read() {
    let navigate = useNavigate(); 
    const [APIData, setAPIData] = useState([]);
    const onBack=()=>{
        navigate('/create')
    }
    useEffect(() => {
        EmployeeService.getEmployees().then(res => {
            console.log(res);
            setAPIData(res.data)
        })
    }, [])

    return (
        <div>
            <h2 className="main-header"> Employee List</h2>
            <Table singleLine className='table table-bordered'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Telephone</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.tel}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <button  className="btn btn-primary" onClick={onBack} > BACK</button>
        </div>
    )
}

