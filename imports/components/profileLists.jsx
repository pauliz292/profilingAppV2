import React, { Component } from 'react';
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tracker } from "meteor/tracker";
import { ProfileData } from "../api/profiles";
import ProfileDetails from './profileDetails';

export default class Profiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
        }
    }

    componentDidMount() {
        Tracker.autorun(() => {
            let res = ProfileData.find({}).fetch();
            let profiles = this.state.profiles;
            
            res.map(item => {
                profiles.push(item);
                this.setState({ profiles });
            })
        })
    }

    render() {
        const {profiles} = this.state;

        const ProfileList = () => {
            return(
                profiles.map((p, i) => (
                    <ListGroup.Item key={i}>
                        <Link 
                            className="btn btn-link"
                            to={{
                                pathname: '/details',
                                state: {p}
                            }}
                        >
                            <span>{p.name}</span>
                        </Link><br/>
                        <span>{p.age}</span><br/>
                        <span>{p.gender}</span>    
                    </ListGroup.Item>
                ))
            );
        }

        return (
            <div className="container">
                <h3>Profiles</h3>
                <div className="btn-group" style={{ marginBottom: '15px' }}>
                    <Link to="/add" className="btn btn-info">
                        Add Profile
                    </Link>
                </div>
                <ListGroup className="col-md-4">
                    <ProfileList/>
                </ListGroup>
            </div>
        )
    }
}
