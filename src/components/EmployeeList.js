import { Link } from "react-router-dom"

import EmployeeListItem from "./EmployeeListItem";
import employeesArr from "../data";

// const employees = employeesArr.map((ele, idx) => {
//   return <EmployeeListItem key={idx} {...ele} />;
// });

export default function EmployeeList(props) {
  return (
    <div className="employee-list">
        <EmployeeListItem />
    </div>
  );
}