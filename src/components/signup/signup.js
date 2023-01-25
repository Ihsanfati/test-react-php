import './signup.css';
import React from 'react';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextBox from '../../core/textField/textField';
import swal from 'sweetalert';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let success = '';

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const results = {
            name: name,
            email: email,
            password: password
        };
        console.log(results);
        axios.post('http://localhost/reactProject/insert.php', results)
            .then((res) => {
                success = res.data;
                console.log(success);
                swal({
                    title: "Registrasi Berhasil!",
                    text: "Selamat, anda telah terdaftar",
                    icon: "success",
                    button: false,
                    timer: 2000
                });
            })
            .catch(error => {
                console.log(error.response);
                swal({
                    title: "Registrasi Gagal!",
                    text: "Isi formulir registrasi dengan benar yah",
                    icon: "error",
                    button: false,
                    timer: 2500
                });
            })
        setName('');
        setEmail('');
        setPassword('');
    };

    return(
        <div className='card'>
            <Card className='cardStyle'>
                <CardContent>
                    <div className='signupText'>SIGNUP</div>
                    <TextBox label="Nama" 
                        value = {name}
                        onChange={onChangeName}
                    />
                    <TextBox label="Email"
                        value = {email}
                        onChange={onChangeEmail}
                    />
                    <TextBox label="Password"
                        value = {password}
                        onChange={onChangePassword}
                    />
                </CardContent>
                <CardActions className='CardActions'>
                    <Button 
                        style={{
                            background: 'grey', color: 'white'
                        }}
                        onClick={onSubmit}>Register</Button>
                    <Button 
                        style={{
                            background: 'grey', color: 'white'
                        }}
                        href="/login">Login</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Signup;