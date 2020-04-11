import React, { useState } from "react";
import { Avatar } from "./avatar.js";
import { RPMChart } from "./Chart";
import "antd/dist/antd.css";
import "./App.css";

import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const UserAvatar = (props) => {
	const { user, size } = props;
	let width = size === "small" ? "81%" : "100%";

	return (
		<div className="user_avatar">
			<div style={{ width: width, display: "block", margin: "0 auto" }}>
				<Avatar />
				<div style={{ color: "white", margin: "16px 0" }}>
					<strong> {user}</strong>
				</div>
			</div>
		</div>
	);
};

function App() {
	const [collapsed, setCollapsed] = useState(false);
	const user = "Joe Cool";
	const copyRightYear = new Date().getFullYear();

	const onCollapse = (collapsed) => {
		console.log(collapsed);
		setCollapsed(collapsed);
	};

	return (
		<div className="App">
			<Layout style={{ minHeight: "100vh" }}>
				<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
					{/* <UserAvatar size="small" user={user} /> */}
					<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
						<Menu.Item key="1">
							<Icon type="pie-chart" />
							<span>Option 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="desktop" />
							<span>Option 2</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={
								<span>
									<Icon type="user" />
									<span>User</span>
								</span>
							}>
							<Menu.Item key="3">Tom</Menu.Item>
							<Menu.Item key="4">Bill</Menu.Item>
							<Menu.Item key="5">Alex</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<Icon type="team" />
									<span>Team</span>
								</span>
							}>
							<Menu.Item key="6">Team 1</Menu.Item>
							<Menu.Item key="8">Team 2</Menu.Item>
						</SubMenu>
						<Menu.Item key="9">
							<Icon type="file" />
							<span>File</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ padding: 0 }} />
					<Content style={{ margin: "0 16px" }}>
						<RPMChart></RPMChart>
					</Content>
					<Footer style={{ textAlign: "center" }}>
						Esteban Amas ©{copyRightYear}. Made with Ant Design.
					</Footer>
				</Layout>
			</Layout>
		</div>
	);
}

export default App;
