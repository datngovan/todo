import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Divider,
  Select,
  List,
  Typography,
} from "antd";
import axios from "axios";
const { Header, Content, Footer } = Layout;
const App = () => {
  const [users, setUsers] = useState();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  useEffect(
    () => async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log(response);
      let userData = [];
      response.data.map((user) => userData.push(user.name));
      setUsers(userData);
    },
    []
  );
  console.log(users);
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "white",
          borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
        }}
      >
        <img
          width="auto"
          height="22"
          src="https://geekup.vn/Icons/geekup-logo-general.svg"
          alt="logo"
        />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[
            { label: "test", key: "/" },
            { label: "todo", key: "/todo" },
          ]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Divider orientation="left">Left Text</Divider>
          <Select
            defaultValue=""
            style={{
              width: 200,
            }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
              {
                value: "disabled",
                label: "Disabled",
                disabled: true,
              },
            ]}
            // options={[
            //   users.map((user) => {
            //     value: {
            //       user.name;
            //     }
            //   }),
            // ]}
          />
          <Divider orientation="left">Left Text</Divider>
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </List.Item>
            )}
          />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
