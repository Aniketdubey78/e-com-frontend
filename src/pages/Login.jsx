import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginuser } from "../features/auth/auththunk";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const [form, setform] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changehandler = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        console.log("form data",form);
        e.preventDefault();
        try {
            await dispatch(loginuser(form)).unwrap();
            navigate("/products");
        } catch (error) {
            console.log(error)
            alert(error);
        }
    }
    return (
        <form onSubmit={submitHandler} className="max-w-sm mx-auto pt-4">
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input onChange={changehandler} type="email" name="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="salmankhan@gmail.com" required />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input onChange={changehandler} type="password" name="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      
      <p className="mt-2">Haven't registerd yet? <Link className="text-blue-600 hover:underline" to="/register">Register</Link></p>
    </form>
    )

}
export default Login;