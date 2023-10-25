import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import StudyingJson from "./StudyingJson.json";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

export default function Studying(props) {
const {passedOutDetails,setPassedOutDetails,StudyingDetails,setStudyingDetails}=props
  //model
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  
  //get input from onChange and set inputfields
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
    //inputfiled values
    const [inputDetails, setInputDetails] = useState([
        {
          Id: "",
          Name: "",
          Email: "",
          Phone: "",
          Colleage: "",
          Degree: "",
          Year: "",
          Batch: "",
          PassedOut:""

        },
      ]);


  //find the max id in the table
  const generateUniqueID = () => {
    const maxID = passedOutDetails.reduce(
      (max, user) => (user.Id > max ? user.Id : max),
      0
    );
    return maxID + 1;
  };

  //add user
  const onHandleSubmit = () => {
    if (inputDetails.PassedOut === "No") {
      const newId = generateUniqueID();
      // Create a new product object with the calculated ID and other details
      const pushData = [];
      pushData.unshift({
        Id: newId,
        Name: inputDetails.Name,
        Email: inputDetails.Email,
        Phone: inputDetails.Phone,
        Colleage: inputDetails.Colleage,
        Degree: inputDetails.Degree,
        Year: inputDetails.Year,
        Batch: inputDetails.Batch,
        PassedOut: inputDetails.PassedOut,
      });
      setStudyingDetails([...pushData, ...StudyingDetails]);
      
    } else{
      const newId = generateUniqueID();
      // Create a new product object with the calculated ID and other details
      const pushData = [];
      pushData.unshift({
        Id: newId,
        Name: inputDetails.Name,
        Email: inputDetails.Email,
        Phone: inputDetails.Phone,
        Colleage: inputDetails.Colleage,
        Degree: inputDetails.Degree,
        Year: inputDetails.Year,
        Batch: inputDetails.Batch,
        PassedOut: inputDetails.PassedOut,
      });
      setPassedOutDetails([...pushData, ...passedOutDetails]);
      
    } 
    

    
    // Clear the input fields
    setInputDetails({
      Id: "",
      Name: "",
      Email: "",
      Phone: "",
      Colleage: "",
      Degree: "",
      Year: "",
      Batch: "",
      PassedOut: "",
    });
  };

    const [columDefination] = useState([
        { field: "Id" },
        { field: "Name" },
        { field: "Email" },
        { field: "Phone" },
        { field: "Colleage" },
        { field: "Degree" },
        { field: "Year" },
        { field: "Batch" },
        { field: "PassedOut" }
  
      ]);
  //JSON values
  useEffect(() => {
    setStudyingDetails(StudyingJson.Studying);
  },[setStudyingDetails]);
  //defauldcoldefs
  const defaultCol = {
    sortable: true,
    editable: true,
    filter: true,
    resizable: true,
    flex: 1,
  };
  return (
    <>
      <div className="  float-left	 ">
        <div className="  p-4 ">
          <div className="pb-5">
          <button className="border-2 text-white  border-gray-600 p-1 h-10 rounded-md bg-sky-400"
             onClick={() => {
                showModal();
                setInputDetails({
                  Id: "",
                  Name: "",
                  Email: "",
                  Phone: "",
                  Colleage: "",
                  Degree: "",
                  Year: "",
                  Batch: "",
                  PassedOut:"No"

                });
              }}>
              Studying Interns
            </button>
            <Modal
              open={open}
              title="Title"
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Cancel
                </Button>,
                <Button
                  key="link"
                  type="primary"
                  onClick={ () => {
                          onHandleSubmit();
                          handleOk();
                        }  
                  }                         
                >
                  add
                </Button>,
              ]}
            >
              <input
                className="border-2 border-gray-600 w-24 h-10 rounded-md p-4"
                style={{ height: "30px", width: "360px", marginBottom: "6px" }}
                name="Name"
                placeholder="Name"
                value={inputDetails.Name}
                onChange={onHandleChange}
              />
              <input
                className="border-2 border-gray-600 w-24 h-10 rounded-md p-4"
                style={{ height: "30px", width: "360px", marginBottom: "6px" }}
                name="Email"
                placeholder="email"
                value={inputDetails.Email}
                onChange={onHandleChange}
              />
              <input
                className="border-2 border-gray-600 w-24 h-10 rounded-md p-4"
                style={{ height: "30px", width: "360px", marginBottom: "6px" }}
                name="Phone"
                placeholder="Phone"
                value={inputDetails.Phone}
                onChange={onHandleChange}
              />
       
              <input
                className="border-2 border-gray-600 w-24 h-10 rounded-md p-4"
                style={{ height: "30px", width: "360px", marginBottom: "6px" }}
                name="Colleage"
                placeholder="Colleage"
                value={inputDetails.Colleage}
                onChange={onHandleChange}
              />
              <input
                className="border-2 border-gray-600 w-24 h-10 rounded-md p-4"
                style={{ height: "30px", width: "360px", marginBottom: "6px" }}
                name="Degree"
                placeholder="Degree"
                value={inputDetails.Degree}
                onChange={onHandleChange}
              />
              <input
                className="border-2 border-gray-600 w-24 h-10 rounded-md p-4"
                style={{ height: "30px", width: "360px", marginBottom: "6px" }}
                name="Year"
                value={inputDetails.Year}
                onChange={onHandleChange}
                placeholder="Year"
              />
              <input
                className="border-2 border-gray-600 w-24 h-10 rounded-md p-4"
                style={{ height: "30px", width: "360px", marginBottom: "6px" }}
                name="Batch"
                placeholder="Batch"
                value={inputDetails.Batch}
                onChange={onHandleChange}
              />
              <div>
               PassedOut: <input
                    type="radio"
                    id="status-yes"
                    name="PassedOut"
                    value="Yes"
                    checked={inputDetails.PassedOut === "Yes"}
                    onChange={onHandleChange}
                />
                <label htmlFor="status-yes">Yes</label>

                <input
                    type="radio"
                    id="status-no"
                    name="PassedOut"
                    value="No"
                    checked={inputDetails.PassedOut === "No"}
                    onChange={onHandleChange}
                />
                <label htmlFor="status-no">No</label>
            </div>

            </Modal>
          </div>
        </div>
        <div className="w-[600px]  p-4 ">
          <div className=" ag-theme-alpine" style={{ height: 500}}>
            <AgGridReact
              rowData={StudyingDetails}
              columnDefs={columDefination}
              defaultColDef={defaultCol} // Set onGridReady prop
            />
          </div>
        </div>
      </div>
    </>
  )
}
