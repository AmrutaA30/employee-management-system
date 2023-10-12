import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
        <a 
        onClick={ ()=> navigate("/employeeList")}
        className="text-white font-bold hover:cursor-pointer">Employee Management System</a>
        <a  
        onClick={ ()=> navigate("/addEmployee")}
        className="text-orange-600 px-14 py-6 font-bold text-sm h-16 hover:cursor-pointer">
          Add Employee
        </a>
      </div>
    </div>
  )
}

export default Navbar