import React, { createContext, useContext, useState } from "react";
import usersApi from "../apis/users";
import { message } from "antd";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [user, setUser] = useState(null);

  const addUser = async userData => {
    try {
      setFormSubmitting(true);
      const response = await usersApi.post("/users", userData);
      message.success(response.data.message);
    } catch (err) {
      console.log(err);
      message.error("Error adding user");
    } finally {
      setFormSubmitting(false);
    }
  };

  const getAllUsers = async (currentPage = 1, pageSize = 10) => {
    try {
      setDataLoading(true);
      const response = await usersApi.get(
        `/users/?pageSize=${pageSize}&pageNum=${currentPage}`
      );
      setUsers(response.data.users);
      setTotalUsers(response.data.totalUsers);
    } catch (err) {
      console.log(err);
      message.error("Error getting users");
    } finally {
      setDataLoading(false);
    }
  };

  const getUser = async id => {
    console.log("get user called");
    try {
      setDataLoading(true);
      const response = await usersApi.get(`/users/${id}`);
      setUser(response.data.user);
      console.log(response.data.user);
    } catch (err) {
      console.log(err);
      message.error("Error getting user");
    } finally {
      setDataLoading(false);
    }
  };

  const value = {
    addUser,
    formSubmitting,
    getAllUsers,
    dataLoading,
    users,
    totalUsers,
    user,
    getUser,
    setDataLoading,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
