let Employee=()=>{

    let employes=[
        {"eid":206,"ename":"Chakri","esal":40000},
        {"eid":207,"ename":"Sailu","esal":50000},
        {"eid":208,"ename":"Raju","esal":65000},
    ]
    return <div>
        <h3>Employe Component Table</h3>
        <div className="container">
            <div className="row">
                <div className="col-4">
        <table className="table">
            <thead className="bg-dark text-white">
                <tr>
                        <th>EID</th>
                        <th>ENAME</th>
                        <th>ESALARY</th>
               </tr>
            </thead>
            <tbody>
                {
                    employes.map((emp)=>{
                        return <tr key={emp.eid}>
                            <td>{emp.eid}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.esal}</td>
                        </tr>
                    })
                  }
            </tbody>
        </table>
        </div>
        </div>
        </div>
    </div>
}
export default Employee;