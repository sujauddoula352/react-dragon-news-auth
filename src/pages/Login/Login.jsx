import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        // const email = e.target.email.value
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'))
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