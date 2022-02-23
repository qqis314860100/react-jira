import React from "react";
import { Table } from "antd";

interface Project {
  name: string;
  personId: number;
}
interface User {
  id: number;
  name: string;
  organization: string;
}
interface ListProps {
  list: Project[];
  user: User[];
}

function List({ list, user }: ListProps) {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render: (value, project) => {
            return (
              <span>
                {user.find((user) => user.id === project.personId)?.name}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    ></Table>
  );
}

export default List;
