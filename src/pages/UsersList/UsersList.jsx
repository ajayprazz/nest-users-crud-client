import React, { useEffect } from "react";
import { UsersTable, BackButton } from "../../components";
import { useData } from "../../contexts/DataContext";
import { Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import "./UsersList.css";

const UsersList = () => {
  const { getAllUsers, users } = useData();
  const history = useHistory();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Link to={`/users/${record.id}`}>View Details</Link>
      ),
    },
  ];

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="users-list-container">
      <div className="add-user-container">
        <BackButton />
        <Button
          className="add-user-btn"
          onClick={() => history.push("/users/add")}
        >
          Add New User
        </Button>
      </div>
      <UsersTable users={users} columns={columns} />
    </div>
  );
};

export default UsersList;
