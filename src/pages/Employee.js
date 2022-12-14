import SectionEmployee from "../components/SectionEmployee";

// import employeesArr from "../data";

// const employee = employeesArr.map((ele, idx) => {
//   return <SectionEmployee key={idx} {...ele} />;
// });

export default function Employee(props) {
    return(
        <div className="employee">
            <h2 className="header">Employee</h2>
            <SectionEmployee  />
        </div>
    )
}