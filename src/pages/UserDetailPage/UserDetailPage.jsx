import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Loader, UserDetail, BackButton } from "../../components";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import "./UserDetailPage.css";

const UserDetailPage = () => {
  const { id } = useParams();

  const { user, getUser, dataLoading } = useData();

  const history = useHistory();

  useEffect(() => {
    getUser(id);
  }, [id]);

  return (
    <div className="user-detail-page-container">
      <div className="view-user-container">
        <BackButton />
        <Button className="add-user-btn" onClick={() => history.push("/users")}>
          View All Users
        </Button>
      </div>
      {!dataLoading ? (
        user ? (
          <UserDetail user={user} dataLoading={dataLoading} />
        ) : (
          <Redirect to="/users" />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserDetailPage;
