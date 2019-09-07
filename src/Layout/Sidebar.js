import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Sider extends React.Component {

  handleClick(e) {
    switch (e.key) {
      case 'center':
        return this.props.setMode(e.key);
      case 'full-screen':
        return this.props.setMode(e.key);
      default:
        this.props.history.push(`/${e.key}`)
    }
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <Menu
          style={{
            width: 280
          }}
          defaultSelectedKeys={['order']}
          defaultOpenKeys={['sub1', 'sub2']}
          mode="inline"
          onClick={this.handleClick.bind(this)}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            基础
          </Menu.Item>
          <Menu.Item key="index">
            <Icon type="calendar" />
            首页
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>我的订单</span>
              </span>
            }
          >
            <Menu.Item key="3">概述</Menu.Item>
            <Menu.Item key="order">产品列表</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="setting" />
                <span>设置中心</span>
              </span>
            }
          >
            <Menu.Item key="full-screen">
              <span>宽屏模式</span>
            </Menu.Item>
            <Menu.Item key="center">
              <span>剧中模式</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Sider);