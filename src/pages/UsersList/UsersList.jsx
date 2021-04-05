import React, { useEffect, useState } from "react";
import { UsersTable, BackButton, Loader } from "../../components";
import { useData } from "../../contexts/DataContext";
import { Link, useHistory } from "react-router-dom";
import { Button, Pagination } from "antd";
import "./UsersList.css";

const UsersList = () => {
  const {
    getAllUsers,
    users,
    totalUsers,
    dataLoading,
    setDataLoading,
  } = useData();
  const history = useHistory();

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleDetailView = id => {
    setDataLoading(true);
    history.push(`/users/${id}`);
  };

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
        <Button onClick={() => handleDetailView(record.id)}>
          View Details
        </Button>
      ),
    },
  ];

  useEffect(() => {
    getAllUsers(current, pageSize);
  }, [current, pageSize]);

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
      {!dataLoading ? (
        <>
          <UsersTable users={users} columns={columns} />
          <Pagination
            total={totalUsers}
            current={current}
            onChange={setCurrent}
            pageSize={pageSize}
            showSizeChanger={true}
            onShowSizeChange={(current, size) => setPageSize(size)}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UsersList;
