import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EmployeeList from "./EmployeeList"
import employeesArr from "../data";


export default function SectionEmployee(props) {
    const { id } = useParams()
    const [employee, setEmployee] = useState(null)
    const url = employeesArr

    const getEmployee = async () => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            setEmployee(data)
            console.log(data)
        } catch(err) {
            console.error(err)
        }
    }
    useEffect(() => {
        getEmployee()
    },[])
   const loaded = () => {
    return(
        <div>
            <h1>{employee.name}</h1>
        </div>
    )
   }
   const loading = () => {
    return <h1>Getting Employee...</h1>
   }
   return employee ? loaded() : loading()
}