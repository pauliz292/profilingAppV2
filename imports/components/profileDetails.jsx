import React, { useState, useEffect } from 'react';
import { Form, Col, Button, ListGroup } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import * as profileService from "../services/profileService";

function ProfileDetails() {

    const [profile, setProfile] = useState('');
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        data = JSON.stringify(location.state);
        let parsedData = JSON.parse(data);
        let person = parsedData.p;
        setProfile(person);
    }, []);

    function onDelete(e) {
        e.preventDefault();
        
        profileService.deleteProfile(profile);
        alert("Success!");
        history.push('/');
    }

    return (
        <div className="container">
            <h3>Details</h3><br/>
            <Link to="/" className="btn btn-link">
                Back to home
            </Link>
            <hr/>
            <div className="list-inline" style={{ marginBottom: '15px' }}>
                <h4>{profile.name}</h4>
                <ListGroup className="col-md-4">
                    <ListGroup.Item>
                        <span>{profile.age}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span>{profile.gender}</span>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <Form className="col-md-6">
                <Form.Row className="col-md-6">
                    <Form.Group as={Col}>
                        <Link 
                            className="btn btn-info" 
                            to={{
                                pathname: '/update',
                                state: {profile}
                            }}
                        >
                            Update
                        </Link>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Button
                            className="btn btn-danger"
                            onClick={onDelete}
                        >
                            Delete
                        </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    )
}

export default  ProfileDetails;