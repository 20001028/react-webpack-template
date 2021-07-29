import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../static/css/components/left-nav-menu.css';

const { SubMenu } = Menu;

export class LeftNavMenu extends React.Component {
    constructor(props) {
        super();
        this.state = { menu: props.menu };
    }
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        const blogMenu = this.state.menu.map(val => {
            if (val.subMenu) {
                let subMenu = val.subMenu.map(item => {
                    return (
                        <Menu.Item key={item.name} icon={item.icon}>
                            <Link to={item.path}>{item.name}</Link>
                        </Menu.Item>
                    )
                });
                return (
                    <SubMenu key={val.name} icon={val.icon} title={val.name}>
                        {subMenu}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={val.name} icon={val.icon} title={val.name} disabled={val.disabled}>
                    <Link to={val.path}>{val.name}</Link>
                </Menu.Item>
            )
        })
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                className="left-nav-menu"
            >
                {blogMenu}
            </Menu>
        );
    }
}