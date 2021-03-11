import React, { Component } from "react";
import CheckBox from "./utils/CheckBox";
import Remarks from "./utils/Remarks";
import { toast } from "react-toastify";

class StoreStatus extends Component {
  state = {
    data: [
      { id: 1, name: "Server", checked: false, remarks: "" },
      { id: 2, name: "Backup Server", checked: false, remarks: "" },
      { id: 3, name: "TAB", checked: false, remarks: "" },
      { id: 4, name: "Till 1", checked: false, remarks: "" },
      { id: 5, name: "Till 2", checked: false, remarks: "" },
      { id: 6, name: "Till 3", checked: false, remarks: "" },
      { id: 7, name: "LED", checked: false, remarks: "" },
      { id: 8, name: "Hand Scanner", checked: false, remarks: "" },
      { id: 9, name: "A4 Printer", checked: false, remarks: "" },
      { id: 10, name: "A4 Scanner", checked: false, remarks: "" },
      { id: 11, name: "Attendance Machine", checked: false, remarks: "" },
      { id: 12, name: "UPS Lights", checked: false, remarks: "" },
      {
        id: 13,
        name: "UPS Batteries Water Level",
        checked: false,
        remarks: "",
      },
      { id: 14, name: "Internet", checked: false, remarks: "" },
      { id: 15, name: "FootFall", checked: false, remarks: "" },
      { id: 16, name: "CCTV Cameras", checked: false, remarks: "" },
      { id: 17, name: "DVR", checked: false, remarks: "" },
    ],

    submittedData: {},
  };

  validation = () => {
    let error;
    return Object.keys(this.state.submittedData).length !== 17
      ? (error = true)
      : (error = false);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const submittedData = { ...this.state.submittedData };
    //validation
    const error = this.validation();
    if (error) {
      toast.warn("All fields are required, not submitted !");
      return;
    } else {
      submittedData.date = this.todaysDate();
      toast.success("Submitted Successfully");
    }

    //Call the server

    console.log(submittedData);
    console.log("submitted");
  };

  handleChange = (e) => {
    const data = [...this.state.data];
    const submittedData = { ...this.state.submittedData };
    const index = data.findIndex(({ name }) => name === e.currentTarget.name);

    if (e.currentTarget.type === "checkbox") {
      data[index].checked = !data[index].checked;
      submittedData[data[index].name] = data[index].checked;
    }
    if (e.currentTarget.type === "text") {
      data[index].remarks = e.currentTarget.value;
      submittedData[data[index].name] = data[index].remarks;
    }
    this.setState({ data, submittedData });
  };

  handleAll = (e) => {
    let data = [...this.state.data];
    let submittedData = { ...this.state.submittedData };
    for (let i = 0; i < data.length; i++) {
      data[i].checked = true;
      data[i].remarks = "";
    }
    data.map((d) => (submittedData[d.name] = d.checked));

    this.setState({ data, submittedData });
  };

  todaysDate = () => {
    var d = new Date();
    return d.toLocaleDateString();
  };
  render() {
    return (
      <div className="container">
        <h1 className="bg-dark text-white">Store Status</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="bg-info">
            <label className="form-check-label text-white mr-3" htmlFor="date">
              Date Today
            </label>
            <input
              style={{ textAlign: "center" }}
              type={Date}
              name="date"
              value={this.todaysDate()}
              readOnly
            />
          </div>
          {this.state.data.map((d) => (
            <>
              <CheckBox
                name={d.name}
                value={d.checked}
                checked={d.checked}
                onChange={this.handleChange}
                disabled={d.remarks !== "" ? true : false}
              />

              <Remarks
                className="tester"
                name={d.name}
                value={d.remarks}
                onChange={this.handleChange}
                disabled={d.checked === true ? true : false}
                // error={this.state.errors[d.name + "Remarks"]}
              />
            </>
          ))}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkAll"
              name="checkAll"
              value="checkAll"
              onChange={this.handleAll}
            />
            <label className="form-check-label" htmlFor="checkAll">
              Check All
            </label>
          </div>
          <div className="container bg-dark">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default StoreStatus;
