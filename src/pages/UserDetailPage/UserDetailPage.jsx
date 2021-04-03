import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Loader, UserDetail } from "../../components";

const UserDetailPage = () => {
  const { id } = useParams();

  const { user, getUser, dataLoading } = useData();

  console.log("user state", user);

  useEffect(() => {
    getUser(id);
  }, [id]);

  return (
    <div className="user-detail-page-container">
      {!dataLoading ? <UserDetail user={user} /> : <Loader />}
    </div>
  );
};

export default UserDetailPage;
