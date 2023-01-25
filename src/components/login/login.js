import './login.css';
import React from 'react';
import Dashboard from '../dashboard/dashboard';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextBox from '../../core/textField/textField';
import swal from 'sweetalert';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const results = {
            email: email,
            password: password
        };
        console.log(results);
        axios.post('http://localhost/reactProject/auth.php', results)
            .then((res) => {
                if(res.data) {
                    setStatus(!status);
                    swal({
                        title: "Berhasil Login!",
                        text: "Selamat datang " + res.data + " !!",
                        icon: "success",
                        button: false,
                        timer: 2000
                    });
                    console.log(res.data);
                }
            })
            .catch(error => {
                console.log(error.response)
                swal({
                    title: "Login Gagal!",
                    text: "Cek lagi email dan password kamu yah",
                    icon: "error",
                    button: false,
                    timer: 2500
                });
            })
        setEmail('');
        setPassword('');
    };

    if(status) {
        return <Dashboard/>
    } else {
        return(
            <div className='card'>
                <Card className='cardStyle'>
                    <CardContent>
                        <div className='loginText'>LOGIN</div>
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
                            onClick={onSubmit}>Login</Button>
                        <Button 
                            style={{
                                background: 'grey', color: 'white'
                            }}
                            href="/register">Register</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Login;