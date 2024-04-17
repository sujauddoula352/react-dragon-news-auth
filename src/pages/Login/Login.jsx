import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { SingIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        //SingIn 
        console.log(email, password);
        SingIn(email, password)
            .then(result => {
                console.log(result);
                //navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .then(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:1/2 mx-auto">
                    <div className="form-control">
                        <label className="label text-3xl font-semibold">Email
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label text-3xl font-semibol">Password
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-2xl font-semibol">Login</button>
                    </div>
                </form>
                <p className="text-center my-4">Do not Have an Account? <Link className="text-blue-600 font-semibold" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;