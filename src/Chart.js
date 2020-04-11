import React from "react";
import { results, results2 } from "./data";
import { Table } from "antd";

const problemNames = ["Basic Problems D", "Basic Problems E", "Test Problems D", "Test Problems E"];

export function loadResults(data) {
	return Object.entries(data)
		.map((item, key) => {
			return {
				key: key,
				problemName: item[0],
				correct: item[1]["Correct"],
				incorrect: item[1]["Incorrect"],
			};
		})
		.sort();
}

export function parseResults(data) {
	return data.map((i, key) => {
		return (
			<div key={key}>
				<h3>{i.problemName}</h3>
				<p>Correct: {i.correct}</p>
				<p>Incorrect: {i.incorrect}</p>
			</div>
		);
	});
}

export function getProblemNameResults(data, problemName) {
	// dig through "data" arrays and return an array of problemName's correct and incorrect results
	let matches = [];

	let correct = data
		.map((i) => i.filter((v) => v.problemName === problemName)[0])
		.filter((i) => {
			if (i.problemName === problemName) {
				return i.correct;
			}
		});

	let incorrect = data
		.map((i) => i.filter((v) => v.problemName === problemName)[0])
		.filter((i) => {
			if (i.problemName === problemName) {
				return i.incorrect;
			}
		});

	return correct, incorrect;
}

export const RPMChart = () => {
	let displayData1 = loadResults(results).sort();
	let displayData2 = loadResults(results2).sort();
	let processData = [displayData1, displayData2];

	// let problemD = getProblemNameResults(processData, "Basic Problems D");

	let res1 = parseResults(displayData1);
	let res2 = parseResults(displayData2);

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

	return (
		<div>
			<Table dataSource={displayData1} columns={columns} />
			<Table dataSource={displayData2} columns={columns} />
		</div>
	);
};
