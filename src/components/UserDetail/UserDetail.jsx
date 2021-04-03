import React from "react";
import "./UserDetail.css";

const UserDetail = ({ user }) => {
  console.log(user);

  return (
    <div className="user-detail-container">
      <p>Name: {user.name}</p>
      <p>Gender: {user.gender}</p>
      <p>Phone Number: {user.phone ? user.phone : "N/A"}</p>
      <p>Email: {user.email ? user.email : "N/A"}</p>
      <p>Nationality: {user.nationality}</p>
      <p>Date Of Birth: {user.dob}</p>
      <p>Education Background: {user.educationBackground}</p>
      <p>Preferred Mode of Contact: {user.modeOfContact}</p>
    </div>
  );
};

export default UserDetail;
