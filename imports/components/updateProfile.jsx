import React, { Component } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as profileService from "../services/profileService";

export default class UpdateProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                name: "",
                age: null,
                gender:""
            }
        };

        this.onUpdate = this.onUpdate.bind(this);
    }

    componentDidMount() {
        let {profile} = this.state;
        profile = JSON.stringify(this.props.location.state);
        let parsedData = JSON.parse(profile);
        
        this.setState({ profile: parsedData.profile })
    }

    onUpdate(e) {
        e.preventDefault();
        let refs = this.refs;
        let profile = {...this.state.profile};

        profile.name = refs.nameInput.value;
        profile.age = refs.age.value;
        profile.gender = refs.gender.value;
        this.setState({ profile });

        profileService.updateProfile(profile);
        alert("Success!");
        this.props.history.push('/');
    }

    render() {
        const {profile} = this.state;

        return (
            <div className="container">
                <h3>Update Profile</h3>
                <Form className="col-md-6">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPlate">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                ref="nameInput"
                                defaultValue={profile.name}
                                type="text" 
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="col-md-10">
                        <Form.Group className="col-md-5" as={Col} controlId="formGridColor">
                            <Form.Label>Age</Form.Label>
                            <Form.Control 
                                ref="age"
                                defaultValue={profile.age}
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="col-md-5" as={Col} controlId="formGridColor">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control 
                                ref="gender"
                                defaultValue={profile.gender}
                                type="text"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="col-md-6">
                        <Form.Group as={Col}>
                            <Button 
                                variant="primary" 
                                type="submit"
                                onClick={this.onUpdate}
                            >
                                Update
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
