import React, { Component } from "react";
import CheckBox from "./utils/CheckBox";
import Remarks from "./utils/Remarks";

class StoreStatus extends Component {
  state = {
    data: [
      { id: 1, name: "Server", checked: false },
      { id: 2, name: "Backup Server", checked: false },
      { id: 3, name: "TAB", checked: false },
      { id: 4, name: "Till 1", checked: false },
      { id: 5, name: "Till 2", checked: false },
      { id: 6, name: "Till 3", checked: false },
      { id: 7, name: "LED", checked: false },
      { id: 8, name: "Hand Scanner", checked: false },
      { id: 9, name: "A4 Printer", checked: false },
      { id: 10, name: "A4 Scanner", checked: false },
      { id: 11, name: "Attendance Machine", checked: false },
      { id: 12, name: "UPS Lights", checked: false },
      { id: 13, name: "UPS Batteries Water Level", checked: false },
      { id: 14, name: "Internet", checked: false },
      { id: 15, name: "FootFall", checked: false },
      { id: 16, name: "CCTV Cameras", checked: false },
      { id: 17, name: "DVR", checked: false },
    ],

    account: {},
    errors: {},
  };

  validate = () => {
    const account = { ...this.state.account };
    let len = Object.keys(account).length;
    if (len < this.state.data.length) return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.account);
    //Call the server
    console.log("submitted");
  };
  handleChange = (e) => {
    const account = { ...this.state.account };

    if (e.currentTarget.type === "checkbox") {
      account[e.currentTarget.name] = e.currentTarget.checked;
    }
    if (e.currentTarget.type === "text") {
      account[e.currentTarget.name] = e.currentTarget.value;
    }
    this.setState({ account });
  };

  handleAll = (e) => {
    let data = [...this.state.data];
    for (let i = 0; i < data.length; i++) {
      data[i].checked = !data[i].checked;
    }
    const account = { ...this.state.account };
    data.map((d) => (account[d.name] = d.checked));
    this.setState({ data, account });
  };
  handleClick = (d) => {
    const account = { ...this.state.account };
    const data = [...this.state.data];
    const index = data.indexOf(d);
    data[index].checked = !data[index].checked;
    this.setState({ account, data });
  };
  render() {
    return (
      <div className="container">
        <h1 className="bg-dark text-white">Store Status</h1>
        <form onSubmit={this.handleSubmit}>
          {this.state.data.map((d) => (
            <>
              <CheckBox
                name={d.name}
                value={this.state.account}
                checked={d.checked}
                onChange={this.handleChange}
                onClick={() => this.handleClick(d)}
              />

              <Remarks
                name={d.name}
                value={this.state.account.d}
                onChange={this.handleChange}
                disabled={this.state.account[d.name] === true ? true : false}
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
            <button className="btn btn-primary" disabled={this.validate}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default StoreStatus;
