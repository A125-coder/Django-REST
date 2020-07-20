import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withAlert } from "react-alert";

class Alerts extends React.Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    // console.log("Test = ", error.msg.email);
    if (error !== prevProps.error){
      if(error.msg.email){
        alert.error(`Email: ${error.msg.email.join()}`);
      }
      if(error.msg.name){
        alert.error(`User: ${error.msg.name.join()}`);
      }
      if(error.msg.message){
        alert.error(`Message: ${error.msg.message.join()}`);
      }
      if(error.msg.non_field_errors){
        alert.error(`Emptie fields: ${error.msg.non_field_errors.join()}`);
      }
    }
    if(message !== prevProps.message){
      if(message.addUser){
        alert.success(message.addUser);
      }
      if(message.deleteUser){
        alert.success(message.deleteUser);
      }
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.errors,
    message: state.messages,
  };
};

export default connect(mapStateToProps)(withAlert()(Alerts));