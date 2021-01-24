import React, { useContext } from 'react';
import { useParams, Link } from "react-router-dom";
import { UserContext } from '../UserContext/UserContext';
import './Delete.css';
import {Button, Modal} from 'react-bootstrap';


const Delete = () => {
    const [users, setUsers] = useContext(UserContext);
    const {id} = useParams();

    const deleteUser = (id) =>{
        const user = users.filter(user => user.id !=id);
        setUsers(user)
    }
    

    return (
        <div>
            <Modal.Dialog>
                <Modal.Body>
                    <p className="text-left">Are you Sure?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link to="/">
                        <Button className="delete-btn" variant="info">Cancel</Button>
                        <Button onClick = {()=>deleteUser(id)} className="delete-btn" variant="danger">Delete</Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default Delete;