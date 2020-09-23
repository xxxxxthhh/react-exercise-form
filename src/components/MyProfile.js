import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      description: "",
      ifRead: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    console.log(
      "name is:" +
        this.state.name +
        ",gender is:" +
        this.state.gender +
        ", description is:" +
        this.state.description
    );

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>My Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>
              <h2>Name:</h2>
            </div>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <div>
              <h2>Gender:</h2>
            </div>
            <select
              name="gender"
              id="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label>
            <div>
              <h2>Description:</h2>
            </div>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <div>
              <input
                type="checkbox"
                name="ifRead"
                value={this.state.ifRead}
                onChange={this.handleChange}
              />
              read the conduct?
            </div>
          </label>
          <input
            type="submit"
            value="Submit"
            disabled={
              !this.state.name ||
              !this.state.gender ||
              !this.state.description ||
              this.state.ifRead == false
            }
          />
        </form>
      </div>
    );
  }
}

export default MyProfile;
