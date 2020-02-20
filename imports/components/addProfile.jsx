import React, { Component } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as profileService from "../services/profileService";

export default class AddProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                name: "",
                age:null,
                gender:""
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let refs = this.refs;
        let profile = {...this.state.profile};

        profile.name = refs.nameInput.value;
        profile.age = refs.age.value;
        profile.gender = refs.gender.value;
        this.setState({ profile });

        profileService.addProfile(profile);
        alert("Success!");
    };

    render() {
        return (
            <div className="container">
                <h3>Add Profile</h3>
                <Form className="col-md-6">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPlate">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                ref="nameInput"
                                type="text" 
                                placeholder="Name" 
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="col-md-10">
                        <Form.Group className="col-md-5" as={Col} controlId="formGridColor">
                            <Form.Label>Age</Form.Label>
                            <Form.Control 
                                ref="age"
                                type="text"
                                placeholder="Age" 
                            />
                        </Form.Group>
                        <Form.Group className="col-md-5" as={Col} controlId="formGridColor">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control 
                                ref="gender"
                                as="select"
                                placeholder="Gender" 
                            >
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="col-md-6">
                        <Form.Group as={Col}>
                            <Button 
                                variant="primary" 
                                type="submit"
                                onClick={this.onSubmit}
                            >
                                Submit
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Link to="/" className="btn btn-danger">
                                Back to home
                            </Link>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}
