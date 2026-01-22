import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate ,Link } from "react-router-dom";
import { ragisteruser } from "../features/auth/auththunk";
import screenp from "../assets/screenImg.jpg"


const Register = () => {
    const [form,setform] = useState({
        name:"",
        password:"",
        email:"",
        role:"buyer"
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setform({...form,[e.target.name]:e.target.value});
    }

    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        await dispatch(ragisteruser(form)).unwrap();
        navigate("/product");
      } catch (error) {
        alert(error);
      }
    }
    return (
         <>
          <form onSubmit={submitHandler} className="max-w-md mx-auto  pt-4  border-2 p-8 bg-orange-200" >
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
        <input onChange={changeHandler} name="name" type="text" id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Salman Khan" required />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input onChange={changeHandler} type="email" name="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="salmankhan@gmail.com" required />
      </div>
      <div className="mb-5">
        <div className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Role</div>
        <fieldset>
          <div className="flex items-center mb-2">
            <input onChange={changeHandler} id="buyer" type="radio" name="role" value="buyer" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked/>
            <label htmlFor="buyer" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
              Buyer
            </label>
          </div>

          <div className="flex items-center">
            <input onChange={changeHandler} id="seller" type="radio" name="role" value="seller" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="seller" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Seller
            </label>
          </div>

        </fieldset>

      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input onChange={changeHandler} type="password" name="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
      </div>
      <button type="submit"  className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
      
      <p className="mt-2 text-center">Already registerd? <Link className="text-blue-600 hover:underline" to="/login">login</Link></p>
    </form>
    </>
    )
}

export default Register;