import { Link } from "react-router-dom"
import employeesArr from "../data"


export default function EmployeeListItem(props) {
  return (
    <div className="employee-cards">
      {
        employeesArr.map((employee) => {
          const { id, name, title, img } = employee
          return (
            <Link to={`/employee/${id}`} className="card">
              <img src={img} alt="employee pics" className="pics" />
              <div className="name">
                <h3>{name}</h3>
                <h4>{title}</h4>
              </div>
            </Link>
          )
        })
      }
    </div>

  );
}

