import React from "react";
import { Table } from "antd";

const UsersTable = ({ users, columns }) => {
  return (
    <div>
      <Table dataSource={users} columns={columns} />
    </div>
  );
};

export default UsersTable;
