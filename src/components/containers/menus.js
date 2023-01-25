import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../../utils/numberWithCommas";

const Menus = ({menu, enterCarts}) => {
    return(
        <Col md={4} xs={6} className="mb-4">
            <Card className="shadow" onClick={() => enterCarts(menu)}>
                <div>
                <div>
                    <Card.Img  variant="top" src={"assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} />
                </div>
                <Card.Body>
                    <Card.Title>{menu.nama}</Card.Title>
                    <Card.Text>
                        Rp. {numberWithCommas(menu.harga)}
                    </Card.Text>
                </Card.Body>
                </div>
            </Card>
        </Col>
    );
};

export default Menus;