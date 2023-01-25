import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "../../utils/numberWithCommas";

export default class TotalBayar extends Component{
    submitTotalBayar = (totalBayar) => {
        const orders = {
            total_bayar: totalBayar,
            menus: this.props.carts
        };
        console.log(orders); //masukin ke database buat record pembayaran (belum terlaksana)
    }

    render(){
        const totalBayar = this.props.carts.reduce(function(result, item) {
            return result + item.total_harga;
        }, 0);

        return(
            <div className="fixed-bottom">
                <Row>
                    <Col md={{span: 3, offset: 9}} className="px-4">
                        <h5>
                            Total Harga: {" "}
                            <strong className="float-right mr-2">Rp. {numberWithCommas(totalBayar)}</strong>
                        </h5>
                        <Button variant="primary" block className="mb-2 mt-4 mr-2" size="lg" onClick={() => this.submitTotalBayar(totalBayar)} href="/success">
                            <FontAwesomeIcon icon={faShoppingCart} /><strong> BAYAR</strong>
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}