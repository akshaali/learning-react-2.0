import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar";
import "../App.css"

function StudentList() {
  const Nav = useNavigate();
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="title">
        <h1 className="student">Students Details</h1>
        <button
          className="btnEdit"
        //   onClick={() => {
        //     Nav("/newstudent");
        //   }}
        >
          Add New Student
        </button>
      </div>
      <br />
      <br />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {/* {DataContext.Start.map((item,index)=>{
                return(
                    <tr key='index' id={item.id}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td><Link to='/editstudent' state={{data:index}} style={{color:'black',textDecoration:'underline'}}>Edit</Link></td>
                    </tr>
                )
                
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;
