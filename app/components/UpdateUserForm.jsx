"use client"
import { useReducer } from "react"
import { BiBrush, BiPlus } from "react-icons/bi";
import Success from './Success'
import Bug from "./Bug";

const formReducer = (state,event) => {
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}

export default function UpdateUserForm() {

    const [formData,setFormData] = useReducer(formReducer,{})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(formData).length == 0) return console.log("NO Data avaliable ")
    }    
    if (Object.keys(formData).length > 0 ) return <Bug message={"Data Added"}/>
 

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4 " onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="firstname" placeholder="First Name" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="lastname" placeholder="Last Name" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="email" placeholder="Email" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="salary" placeholder="Salary" 
                className="border w-full px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} name="date" placeholder="Date" 
                className="border px-5 py-3 focus:outline-none rounded-md"/>
            </div>
            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" onChange={setFormData} name="status" value="Active" id="radioDefault1" 
                    className="form-check appearance-none rounded-full h-4 w-4 
                    border border-gray-300 bg-white checked:bg-green-500 
                    checked:border-green-500 focus:outline-none 
                    transition duration-200 mt-1 align-top bg-no-repeat 
                    bg-center bg-contain float-left mr-2 cursor-pointer " />
                    <label htmlFor="radioDefault1" className=" inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" onChange={setFormData} name="status" value="Inactive" id="radioDefault2" 
                    className="form-check appearance-none rounded-full h-4 w-4 
                    border border-gray-300 bg-white checked:bg-green-500 
                    checked:border-green-500 focus:outline-none 
                    transition duration-200 mt-1 align-top bg-no-repeat 
                    bg-center bg-contain float-left mr-2 cursor-pointer " />
                    <label htmlFor="radioDefault2" className=" inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>
            <button className="flex justify-center text-base w-2/6 bg-blue-500
                text-white px-4 py-2 border rounded-md hover:bg-gray-50
                hover:border-blue-500 hover:text-blue-500 ">
                Update
                <span className="px-1"><BiBrush size={24}/></span>
            </button>
        </form>
    )
}