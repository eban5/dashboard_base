import React from "react";
// import { Avatar, UserAvatar } from "./avatar.js";
// import { DashMenu } from "./Menu";
// import { RPMChart } from "./Chart";
import { DataTable } from "./Table";
import "antd/dist/antd.css";
import "./App.css";
import { results } from "./data";

import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
	// const [collapsed, setCollapsed] = useState(true);

	// const onCollapse = (collapsed) => {
	// 	setCollapsed(collapsed);
	// };

	const copyrightYear = new Date().getFullYear();
	return (
		<div className="App">
			<Layout style={{ minHeight: "100vh" }}>
				{/* <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}> */}
				{/* <UserAvatar size="small" user={user} /> */}
				{/* <DashMenu /> */}
				{/* </Sider> */}
				<Layout>
					<Header style={{ padding: 0 }}>
						<h2 style={{ color: "white" }}>KBAI Project 3</h2>
					</Header>
					<Content style={{ margin: "0 16px" }}>
						{/* <RPMChart results={results} problemType={"Basic"} /> */}
						{/* <RPMChart results={results} problemType={"Test"} /> */}
						{/* <RPMChart results={results} problemType={"Ravens"} /> */}
						{/* <RPMChart results={results} problemType={"Challenge"} /> */}

						<DataTable results={results} />
					</Content>
					<Footer style={{ textAlign: "center" }}>
						Esteban Amas ©{copyrightYear}. Made with Ant Design.
					</Footer>
				</Layout>
			</Layout>
		</div>
	);
}

export default App;
