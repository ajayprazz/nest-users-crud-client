import React, { createContext, useContext, useState } from "react";
import usersApi from "../apis/users";
import { message } from "antd";
import { useHistory } from "react-router-dom";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const history = useHistory();

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

  const getAllUsers = async () => {
    try {
      setDataLoading(true);
      const response = await usersApi.get("/users");
      setUsers(response.data.users);
    } catch (err) {
      console.log(err);
      message.error("Error getting users");
    } finally {
      setDataLoading(false);
    }
  };

  const getUser = async id => {
    try {
      setDataLoading(true);
      const response = await usersApi.get(`/users/${id}`);
      console.log(response);
      setUser(response.data.user);
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
    user,
    getUser,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
