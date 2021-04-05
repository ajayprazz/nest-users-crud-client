import React from "react";
import { AddUserForm, BackButton } from "../../components/";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import "./AddUser.css";

const AddUser = () => {
  const history = useHistory();

  return (
    <div className="add-user-container">
      <div className="view-user-container">
        <BackButton />
        <Button className="add-user-btn" onClick={() => history.push("/users")}>
          Add New User
        </Button>
      </div>
      <AddUserForm />
    </div>
  );
};

export default AddUser;
