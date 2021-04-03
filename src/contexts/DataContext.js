import React, { createContext, useContext, useState } from "react";
import users from "../apis/users";
import { message } from "antd";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [formSubmitting, setFormSubmitting] = useState(false);

  const addUser = async userData => {
    try {
      setFormSubmitting(true);
      const response = await users.post("/users", userData);
      message.success(response.data.message);
    } catch (err) {
      console.log(err);
      message.error("Failed adding user");
    } finally {
      setFormSubmitting(false);
    }
  };

  const value = {
    addUser,
    formSubmitting,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
