import React from "react";
import { Table } from "antd";
import { getProblemNames, getProblemNameResults } from "./utils";

const columns = [
	{
		title: "Problem",
		dataIndex: "problemName",
		key: "problemName",
	},
	{
		title: "Correct",
		dataIndex: "correct",
		key: "correct",
	},
	{
		title: "Incorrect",
		dataIndex: "incorrect",
		key: "incorrect",
	},
];

export const DataTable = (props) => {
	const { results, problemType } = props;

	let problemNames = getProblemNames(results, problemType);
	let chartData = [];

	for (let name in problemNames) {
		chartData.push(getProblemNameResults(results, problemNames[name]));
	}

	return (
		<div>
			<h1>Table</h1>
			<Table dataSource={chartData} columns={columns} />
		</div>
	);
};
