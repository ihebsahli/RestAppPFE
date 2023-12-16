import React, {  useState } from 'react';
import { login } from '../../redux/actions/auth';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Login() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);
    const { isAuthenticated } = auth;
    const onsubmitcnn = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };
    if (isAuthenticated) {
        return <Navigate to='/dashboard' />
    }

    return (

        <div class="authentication-wrapper authentication-1 px-4">
            <div class="authentication-inner py-5">

                <div class="d-flex justify-content-center align-items-center">
                    <div class="ui-w-60">
                        <div class="w-100 position-relative">
                            <img src="assets/img/logo-dark.png" alt="Brand Logo" class="img-fluid" />
                        </div>
                    </div>
                </div>

                <form class="my-5" onSubmit={e=>onsubmitcnn(e)}
>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="text" class="form-control" 
                            name='email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)} />
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label d-flex justify-content-between align-items-end">
                            <span>Password</span>
                            <a href="pages_authentication_password-reset.html" class="d-block small">Forgot password?</a>
                        </label>
                        <input type="password" class="form-control"
                        value={password}
                        minLength='6'
                        onChange={(e) => setpassword(e.target.value)} />
                        <div class="clearfix"></div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center m-0">
                        <label class="custom-control custom-checkbox m-0">
                            <input type="checkbox" class="custom-control-input" />
                            <span class="custom-control-label">Remember me</span>
                        </label>
                        <button type="submit" class="btn btn-primary" >Sign In</button>
                    </div>
                </form>

                <div class="text-center text-muted">
                    Don't have an account yet?
                    <a href="pages_authentication_register-v1.html">Sign Up</a>
                </div>

            </div>
        </div>
    )
}

export default Login
