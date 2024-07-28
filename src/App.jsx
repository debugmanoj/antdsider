import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  PieChartOutlined,
  UserOutlined,
  SecurityScanOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

const items = [
  {
    key: "dashboard",
    label: "Dashboard",

    icon: <PieChartOutlined />,
  },
  {
    key: "settings",
    label: "Settings",
    icon: <SettingOutlined />,
    children: [
      {
        key: "user",
        label: "User",
        icon: <UserOutlined />,
      },
      {
        key: "2fa",
        label: "2FA",
        icon: <SecurityScanOutlined />,
      },
    ],
  },
];

const Dashboard = () => <div>Dashboard Content</div>;
const User = () => <div>User Content</div>;
const TwoFA = () => <div>2FA Content</div>;

const App = () => {
  const [current, setCurrent] = useState("dashboard");
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    if (e.key === "dashboard") {
      navigate(`/${e.key}`);
    } else {
      navigate(`/settings/${e.key}`);
    }
  };

  return (
    <>
      <div style={{ display: "flex",width:"100%" }}>
        <div>
          <div>


            <Button type="primary" size="small" onClick={toggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </div>
        </div>
        <Menu
          style={{ width: !collapsed ? "15%" : "8%", height: "100vh" }}
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
        />
        <div style={{ marginLeft: "1%", padding: "2px", flex: 1 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings/user" element={<User />} />
            <Route path="/settings/2fa" element={<TwoFA />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
