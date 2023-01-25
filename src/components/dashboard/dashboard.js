import './dashboard.css';
import Navbar from '../navbar/navbar';
import React from 'react';
import { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ListCategories from '../containers/listCategories';
import Hasil from '../containers/hasil';
import Menus from '../containers/menus';
import swal from 'sweetalert';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            menus: [
                    {
                        "id": 1,
                        "kode": "001",
                        "nama": "Roti Abon Sapi",
                        "harga": 13800,
                        "is_ready": true,
                        "gambar": "roti-abon-sapi.jpg",
                        "category": {
                            "id": 1,
                            "nama": "Breads"
                        }
                    },
                    {
                        "id": 2,
                        "kode": "002",
                        "nama": "Roti Bakso Sapi",
                        "harga": 13800,
                        "is_ready": true,
                        "gambar": "roti-bakso-sapi.jpg",
                        "category": {
                            "id": 2,
                            "nama": "Breads"
                        }
                    },
                    {
                        "id": 3,
                        "kode": "003",
                        "nama": "Roti Coklat",
                        "harga": 10300,
                        "is_ready": true,
                        "gambar": "roti-coklat.jpg",
                        "category": {
                            "id": 3,
                            "nama": "Breads"
                        }
                    },
                    {
                        "id": 4,
                        "kode": "004",
                        "nama": "Roti Srikaya",
                        "harga": 10800,
                        "is_ready": true,
                        "gambar": "roti-srikaya.jpg",
                        "category": {
                            "id": 4,
                            "nama": "Breads"
                        }
                    },
                    {
                        "id": 5,
                        "kode": "005",
                        "nama": "Roti Kacang Merah",
                        "harga": 10300,
                        "is_ready": true,
                        "gambar": "roti-kacang-merah.jpg",
                        "category": {
                            "id": 5,
                            "nama": "Breads"
                        }
                    },
                    {
                        "id": 6,
                        "kode": "006",
                        "nama": "Roti Keju",
                        "harga": 11600,
                        "is_ready": true,
                        "gambar": "roti-keju.jpg",
                        "category": {
                            "id": 6,
                            "nama": "Breads"
                        }
                    },
                    {
                        "id": 7,
                        "kode": "007",
                        "nama": "American Cheese Roll (isi 3 pcs)",
                        "harga": 26400,
                        "is_ready": true,
                        "gambar": "american-cheese-roll.jpg",
                        "category": {
                            "id": 7,
                            "nama": "Pastries"
                        }
                    },
                    {
                        "id": 8,
                        "kode": "008",
                        "nama": "Chicken Pie",
                        "harga": 10800,
                        "is_ready": true,
                        "gambar": "chicken-pie.jpg",
                        "category": {
                            "id": 8,
                            "nama": "Pastries"
                        }
                    },
                    {
                        "id": 9,
                        "kode": "009",
                        "nama": "Fruit Pastry",
                        "harga": 15100,
                        "is_ready": true,
                        "gambar": "fruit-pastry.jpg",
                        "category": {
                            "id": 9,
                            "nama": "Pastries"
                        }
                    },
                    {
                        "id": 10,
                        "kode": "010",
                        "nama": "Croissant Coklat",
                        "harga": 10300,
                        "is_ready": true,
                        "gambar": "croissant-coklat.jpg",
                        "category": {
                            "id": 10,
                            "nama": "Pastries"
                        }
                    },
                    {
                        "id": 11,
                        "kode": "011",
                        "nama": "Croissant Keju",
                        "harga": 9700,
                        "is_ready": true,
                        "gambar": "croissant-keju.jpg",
                        "category": {
                            "id": 11,
                            "nama": "Pastries"
                        }
                    },
                    {
                        "id": 12,
                        "kode": "012",
                        "nama": "Croissant Tuna",
                        "harga": 9200,
                        "is_ready": true,
                        "gambar": "croissant-tuna.jpg",
                        "category": {
                            "id": 12,
                            "nama": "Pastries"
                        }
                    },
                    {
                        "id": 13,
                        "kode": "013",
                        "nama": "Cheese John",
                        "harga": 12300,
                        "is_ready": true,
                        "gambar": "cheese-john.jpg",
                        "category": {
                            "id": 13,
                            "nama": "Donuts"
                        }
                    },
                    {
                        "id": 14,
                        "kode": "014",
                        "nama": "Chocolate John",
                        "harga": 10300,
                        "is_ready": true,
                        "gambar": "chocolate-john.jpg",
                        "category": {
                            "id": 14,
                            "nama": "Donuts"
                        }
                    },
                    {
                        "id": 15,
                        "kode": "015",
                        "nama": "Nut John",
                        "harga": 13300,
                        "is_ready": true,
                        "gambar": "nut-john.jpg",
                        "category": {
                            "id": 15,
                            "nama": "Donuts"
                        }
                    },
                    {
                        "id": 16,
                        "kode": "016",
                        "nama": "Donut Ayam",
                        "harga": 12300,
                        "is_ready": true,
                        "gambar": "donut-ayam.jpg",
                        "category": {
                            "id": 16,
                            "nama": "Donuts"
                        }
                    },
                    {
                        "id": 17,
                        "kode": "017",
                        "nama": "Donut Sapi",
                        "harga": 13300,
                        "is_ready": true,
                        "gambar": "donut-sapi.jpg",
                        "category": {
                            "id": 17,
                            "nama": "Donuts"
                        }
                    },
                    {
                        "id": 18,
                        "kode": "018",
                        "nama": "Donut Sosis",
                        "harga": 13800,
                        "is_ready": true,
                        "gambar": "donut-sosis.jpg",
                        "category": {
                            "id": 18,
                            "nama": "Donuts"
                        }
                    }
            ],
            newMenus: [],
            choosedCategory: 'Breads',
            carts: []
        }
    }

    componentDidMount(){
        this.state.menus.map(menu => console.log(menu));
    }

    changeCategory = (value) => {
        this.setState({
            newMenus: this.state.menus.filter((menu) => {
                return menu.category.nama === value}
            )
        });
        this.setState({
            choosedCategory: value
        });
        console.log(this.state.newMenus);
    }

    enterCarts = (value) => {
        console.log("Value: ", value);
        const cart = {
            jumlah: 1,
            total_harga: value.harga,
            product: value
        };
        this.setState({
            carts: [...this.state.carts, cart]
        });
        swal({
            title: "Sukses Masuk Keranjang!",
            text: cart.product.nama + " masuk keranjang",
            icon: "success",
            button: false,
            timer: 2000
        });
        console.log(this.state.carts);
    }

    render(){
        if(this.state.newMenus.length > 0) {
            return(
                <div className='Dashboard' style={{padding: '12px'}}>
                    <Navbar/>
                    <div className="mt-3">
                        <Container fluid>
                            <Row>
                                <ListCategories changeCategory={this.changeCategory} choosedCategory={this.state.choosedCategory}/>
                                <Col>
                                    <h6 style={{textAlign: "center"}}>Daftar Produk</h6>
                                    <hr/>
                                    <Row>
                                        {this.state.newMenus.map((menu) => {
                                            return <Menus key={menu.id} menu={menu} enterCarts={this.enterCarts}/>
                                        })}
                                    </Row>
                                </Col>
                                <Hasil carts={this.state.carts} {...this.props}/>
                            </Row>
                        </Container>
                    </div>
                </div>
            );
        } else {
            return(
                <div className='Dashboard' style={{padding: '12px'}}>
                    <Navbar/>
                    <div className="mt-3">
                        <Container fluid>
                            <Row>
                                <ListCategories changeCategory={this.changeCategory} choosedCategory={this.state.choosedCategory}/>
                                <Col>
                                    <h6 style={{textAlign: "center"}}>Daftar Produk</h6>
                                    <hr/>
                                    <Row>
                                        {this.state.menus.map((menu) => {
                                            return <Menus key={menu.id} menu={menu} enterCarts={this.enterCarts}/>
                                        })}
                                    </Row>
                                </Col>
                                <Hasil carts={this.state.carts} {...this.props}/>
                            </Row>
                        </Container>
                    </div>
                </div>
            );
        }
    }
}

export default Dashboard;
