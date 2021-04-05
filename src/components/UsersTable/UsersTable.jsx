import React from "react";
import { Table } from "antd";

const UsersTable = ({ users, columns, paginationProps }) => {
  return <Table dataSource={users} columns={columns} pagination={false} />;
};

export default UsersTable;
