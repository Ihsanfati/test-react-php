import React from "react";
import { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Success extends Component {
    render(){
        return(
            <div className="mt-4 text-center">
                <Image src="assets/images/success.png" width="500" />
                <h4>Order Success!</h4>
                <p>Thank You</p>
                <Button variant="primary" as={Link} to="/dashboard">
                    Back
                </Button>
            </div>
        )
    }
}