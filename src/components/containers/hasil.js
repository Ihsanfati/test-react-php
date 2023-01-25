import React from "react";
import { Component } from "react";
import { Badge, Col, Row, ListGroup } from "react-bootstrap";
import { numberWithCommas } from "../../utils/numberWithCommas";
import TotalBayar from "./totalBayar";

class Hasil extends Component {
    render(){
        const {carts} = this.props;
        return(
            <Col md={3} mt="2">
                <h6 style={{textAlign: "center"}}>Hasil</h6>
                <hr />
                {carts.length !== 0 && (
                    <ListGroup.Item variant="flush">
                        {carts.map((item) => (
                            <ListGroup.Item>
                                <Row>
                                    <Col xs={2}>
                                        <h5>
                                            <Badge pill variant="success">
                                                {item.jumlah}
                                            </Badge>
                                        </h5>
                                    </Col>
                                    <Col>
                                        <h5>{item.product.nama}</h5>
                                        <p>Rp. {numberWithCommas(item.product.harga)}</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup.Item>
                )}
                <TotalBayar carts={carts} {...this.props}/>
            </Col>
        );
    }
}

export default Hasil;