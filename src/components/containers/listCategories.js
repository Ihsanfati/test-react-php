import React from "react";
import { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCoffee, faCheese } from "@fortawesome/free-solid-svg-icons";

const Icon = ({nama}) => {
    if(nama === "Breads") return <FontAwesomeIcon icon={faUtensils} className="mr-2" /> 
    if(nama === "Pastries") return <FontAwesomeIcon icon={faCoffee} />
    if(nama === "Donuts") return <FontAwesomeIcon icon={faCheese} className="mr-2" />

    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />
}

class ListCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: {
                "categories": [
                    {
                        "id": 1,
                        "nama": "Breads"
                    },
                    {
                        "id": 2,
                        "nama": "Pastries"
                    },
                    {
                        "id": 3,
                        "nama": "Donuts"
                    }
            ]}
        }
    }

    componentDidMount(){
        console.log(this.state.categories.categories);
    }
    render(){
        const {changeCategory, choosedCategory} = this.props;
        console.log(this.props);
        return(
            <Col md={2} mt="2">
                <h6 style={{textAlign: "center"}}>Kategori</h6>
                <hr/>
                <ListGroup>
                    {this.state.categories.categories.map((category) => {
                        return <ListGroup.Item key={category.id} onClick={() => changeCategory(category.nama)} style={{cursor: "pointer"}}  className={choosedCategory === category.nama && "active-category"}>
                            <h6>
                                <Icon nama={category.nama} /> {category.nama}
                            </h6>
                        </ListGroup.Item>
                    })}
                </ListGroup>
            </Col>
        );
    }
}

export default ListCategories;