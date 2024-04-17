import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const { createUser } =  useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const firstName = form.get('firstName')
        const lastName = form.get('lastName')
        const email = form.get('email')
        const password = form.get('password')
        const photo = form.get('photo')
        const address = form.get('address')
        console.log(firstName, lastName,email,password,photo,address);
        // createUser
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <Navbar></Navbar>
            <div className="my-24">
                <h2 className="text-3xl my-10 text-center">Please Register Nows</h2>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:1/2 mx-auto grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="firstname" className="text-2xl font-semibold">First Name</label>
                        <input id="firstname" type="text" placeholder="First name" name="firstName" className="w-full input border-black rounded-md" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="lastname" className="text-2xl font-semibold">Last Name</label>
                        <input id="lastname" type="text" placeholder="Last name" name="lastName" className="w-full input border-black rounded-md" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-2xl font-semibold">Email</label>
                        <input id="email" type="email" placeholder="Email" name="email" className="w-full input border-black rounded-md" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="password" className="text-2xl font-semibold">Password</label>
                        <input id="Password" type="password" placeholder="Password" name="password" className="w-full input border-black rounded-md" required />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="Photo URL" className="text-2xl font-semibold">Photo URL</label>
                        <input id="Photo URL" type="texl" placeholder="Photo URL" name="photo" className="w-full input border-black rounded-md" required />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="address" className="text-2xl font-semibold">Address</label>
                        <input id="address" type="text" placeholder="Address" name="address" className="w-full input border-black rounded-md" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="city" className="text-2xl font-semibold">City</label>
                        <input id="city" type="text" placeholder="City" name="city" className="w-full input border-black rounded-md" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="state" className="text-2xl font-semibold">State / Province</label>
                        <input id="state" type="text" placeholder="State / Province" name="stateProvince" className="w-full input border-black rounded-md" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="zip" className="text-2xl font-semibold">ZIP / Postal</label>
                        <input id="zip" type="text" placeholder="ZIP/Postal" name='zipPostal'
                            className="w-full input border-black rounded-md" />
                    </div>
                    <div className="form-control mt-6 sm:col-span-6">
                        <button className="btn btn-primary text-2xl font-semibol">Login</button>
                    </div>
                </form>
                <p className="text-center my-4">Already Have an Created Account? <Link className="text-blue-600 font-semibold" to='/login'>Register</Link></p>
            </div>
        </section>
    );
};

export default Register;