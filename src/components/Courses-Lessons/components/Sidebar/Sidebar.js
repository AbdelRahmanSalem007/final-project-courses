import React from "react";
import { Menu } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./Sidebar.scss";

const Sidebar = () => {
  const { SubMenu } = Menu;
  return (
    <section className="course__sidebar">
      <Menu mode="inline" className="sidebar__menu">
        <SubMenu
          key="sub1"
          title={
            <div className="d-flex flex-column align-items-start">
              <span>الوحدة الأولي - هكذا تتعلم</span>
              <span className="d-flex align-items-center submenu-time">
                <PlayCircleOutlined rotate={180} />
                <span>03:35:55</span>
              </span>
            </div>
          }
        >
          <Menu.Item key="1" className="d-flex flex-direction-column">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
          <Menu.Item key="4">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <div className="d-flex flex-column align-items-start">
              <span>الوحدة الثانية - هكذا تتعلم</span>
              <span className="d-flex align-items-center submenu-time">
                <PlayCircleOutlined rotate={180} />
                <span>03:35:55</span>
              </span>
            </div>
          }
        >
          <Menu.Item key="5" className="d-flex flex-direction-column">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
          <Menu.Item key="6">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
          <Menu.Item key="7">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
          <Menu.Item key="8">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <div className="d-flex flex-column align-items-start">
              <span>الوحدة الثالثة - هكذا تتعلم</span>
              <span className="d-flex align-items-center submenu-time">
                <PlayCircleOutlined rotate={180} />
                <span>03:35:55</span>
              </span>
            </div>
          }
        >
          <Menu.Item key="9" className="d-flex flex-direction-column">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
          <Menu.Item key="10">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
          <Menu.Item key="11">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
          <Menu.Item key="12">
            <span className="course__sidebar-title">
              الدرس الأول - من خلال الهدف الدائم
            </span>
            <br />
            <span className="course__sidebar-time d-flex align-items-center">
              <PlayCircleOutlined rotate={180} />
              <span>32:00</span>
            </span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </section>
  );
};

export default Sidebar;
