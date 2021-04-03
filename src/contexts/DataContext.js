import React, { createContext, useContext, useState } from "react";
import usersApi from "../apis/users";
import { message } from "antd";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [users, setUsers] = useState([]);

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

  const value = {
    addUser,
    formSubmitting,
    getAllUsers,
    dataLoading,
    users,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
