import React, { Component } from "react";
import FormUserDetails from "./FormComponents/FormUserDetails";
import Confirm from "./FormComponents/Confirm";
import Success from "./FormComponents/Success";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + -1,
    });
  };

  //Handle input changes
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, phone } = this.state;
    const values = { firstName, lastName, email, phone };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <Success name={values.firstName} />;
      default:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default UserForm;
