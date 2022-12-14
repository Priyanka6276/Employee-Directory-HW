import { useParams } from "react-router-dom"

import employeesArr from "../data"

export default function EmployeePage(props) {
    const { id } = useParams()
    return (
        <section className="full">
            <div className="container">
                {employeesArr.filter((employee) => employee.id === id).map((employee, idx) => (
                    <div key={idx} className="full-employee">
                        <h1>Employee</h1>
                        <div className="employee">
                            <img src={employee.img} alt="employee pics" className="pics" />
                            <div className="name">
                                <h3>{employee.name}</h3>
                                <h4>{employee.title}</h4>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Office Number</h3>
                            <h4>{employee.callOffice}</h4>
                        </div>
                        <div className="info">
                            <h3>Mobile Number</h3>
                            <h4>{employee.callMobile}</h4>
                        </div>
                        <div className="info">
                            <h3>SMS</h3>
                            <h4>{employee.sms}</h4>
                        </div>
                        <div className="info">
                            <h3>Email</h3>
                            <h4>{employee.email}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}