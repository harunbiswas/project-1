import React, { useContext, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { UserContext } from '../UserContext/UserContext';
import {Button, Form} from 'react-bootstrap';
import './Edit.css'

const Edit = () => {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();

    const user = users.filter((user) => user.id == id);

    const [name, setName] = useState(user[0].name);
    const [position, setPosition] = useState(user[0].position);
    const [salary, setSalary] = useState(user[0].salary);


    const editName = (e) => {
        setName(e.target.value);
        const edit_neme = name;
        user[0].name = edit_neme;
    };
    const editPosition = (e) => {
        setPosition(e.target.value);
        const edit_position = position;
        user[0].position = edit_position;
    };
    const editSalary = (e) => {
        setSalary(e.target.value);
        const edit_salary = salary;
        user[0].name = edit_salary;
    };

    const editUser = (e) => {
        e.preventDefault();
        setUsers([...users])
    }


    return (
         <div className="container">
            <Form className="text-left" onSubmit={editUser}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        <h1> ID NO: {user[0].id}</h1>
                    </Form.Label>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text" 
                        name="name"
                        value={name}
                        onChange={editName}
                        placeholder="Enter Name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Position</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="position"
                        value={position}
                        onChange={editPosition}
                        placeholder="Enter Position"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="salary"
                        value={salary}
                        onChange={editSalary}
                        placeholder="Enter Salary"
                    />
                </Form.Group>
                <Link to="/">
                <Button className="action-btn" variant="primary" type="submit">
                    Edit User
                </Button>
                
                    <Button className="action-btn" variant="info">
                        Back to Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default Edit;