import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const UsernameOnChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const PasswordOnChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        // setUser({

        // });
    }

    return (
        <div className="container_home">
            <h1>Welcome to Coffee Shop Web App</h1>
            <h2>Silahkan Login Terlebih Dahulu</h2>

            <div className="div_login">
                <form action="" method="post" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lbl_username">Username</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="username" id="" onChange={UsernameOnChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lbl_password">Password</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="password" id="" onChange={PasswordOnChange}/>
                        </div>
                    </div>

                    <div className="row">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;
