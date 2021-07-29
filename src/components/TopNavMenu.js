import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import '../static/css/components/top-nav-menu.css';

const { SubMenu } = Menu;

export class TopNavMenu extends React.Component {
  constructor(props) {
    super();
    this.state = { menu: props.menu, current: props.menu[0].name };
  }

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    const MENU_ITEMS = this.state.menu.map(val => {
      return (
        <Menu.Item key={val.name} icon={val.icon} className="menu-item">
          <Link to={val.path}>{val.name}</Link>
        </Menu.Item>
      )
    })
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="top-nav-menu"
      >
        {MENU_ITEMS}
      </Menu>
    );
  }
}