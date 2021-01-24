import React, { useContext } from 'react';
import './Home.css';
import {Button, Table} from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';
import { Link } from "react-router-dom";
const Home = () => {
    const [users, setUsers] = useContext(UserContext);
    
    return (
        <div className="container">
            <Link to = "/create">
                <Button className="float-left mt-2" variant="primary">Create User</Button>
            </Link>
            <br />
            <br />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.position}</td>
                                <td>{user.salary}</td>
                                <td>
                                    <Link to ={"/read/"+user.id}>
                                        <Button className="action-btn" variant="success">Read</Button>
                                    </Link>
                                    <Link to ={"/edit/"+user.id}>
                                        <Button className="action-btn" variant="info">Edit</Button>
                                    </Link>
                                    
                                    <Link to ={"/delete/"+user.id}>
                                        <Button className="action-btn" variant="danger">Delete</Button>
                                    </Link>
                                </td>
                            </tr>
                         )
                    }
                    
                </tbody>
            </Table>
        </div>
    );
};

export default Home;