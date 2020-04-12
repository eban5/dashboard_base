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
	const { results } = props;

	let problemNames = getProblemNames(results);
	let chartData = [];

	for (let name in problemNames) {
		chartData.push(getProblemNameResults(results, problemNames[name]));
	}
	console.log(chartData);

	return (
		<div>
			<h1>Table</h1>
			<Table dataSource={chartData} columns={columns} />
		</div>
	);
};
