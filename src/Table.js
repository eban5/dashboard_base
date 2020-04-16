import React from "react";
import { Table } from "antd";
import { getSetNames, getProblemNames, getProblemNameResults } from "./utils";

const generateColumns = (count) => {
	let columns = [
		{
			title: "Set",
			dataIndex: "setName",
			key: "setName",
		},
	];

	for (let x = 1; x <= count; x++) {
		columns.push({
			title: x,
			dataIndex: x - 1,
			key: x,
		});
	}

	return columns;
};

export const DataTable = (props) => {
	const { results } = props;
	let chartData = [];

	let sets = getSetNames(results);
	let submissions = results.length;
	const columns = generateColumns(submissions, sets);

	for (let name in sets) {
		let row = getProblemNameResults(results, sets[name]);

		let rowData = {
			key: row.problemName,
			setName: row.problemName,
		};

		for (let x = 0; x < submissions; x++) {
			rowData[x] = row.correct[x];
		}

		chartData.push(rowData);
	}

	console.log(chartData);

	return (
		<div>
			<h1>Table</h1>
			<Table dataSource={chartData} columns={columns} />
		</div>
	);
};
