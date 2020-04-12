import React from "react";
import { Bar } from "react-chartjs-2";
import { results } from "./data";

//#588da8
//#ccafaf
// #e58a8a
// #d8345f

const problemNames = ["Basic Problems D", "Basic Problems E", "Test Problems D", "Test Problems E"];

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

export function loadResults(data) {
	console.log(data);

	let parsed = data.map((k, v) => {
		Object.entries(k).map((item, key) => {
			return {
				key: key,
				problemName: item[0],
				correct: item[1]["Correct"],
				incorrect: item[1]["Incorrect"],
			};
		});
	});

	console.log(parsed);
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
	// dig through "data" arrays and return object for ChartJS

	let subset = data.map((i) => i.filter((v) => v.problemName === problemName)[0]);

	let correct = subset.map((k) => k.correct);
	let incorrect = subset.map((k) => k.incorrect);

	return {
		problemName: problemName,
		correct: correct,
		incorrect: incorrect,
	};
}

export const RPMChart = () => {
	let submissions = loadResults(results);
	console.log(submissions);

	let basicD = getProblemNameResults(submissions, "Basic Problems D");
	let basicE = getProblemNameResults(submissions, "Basic Problems E");
	let challengeD = getProblemNameResults(submissions, "Challenge Problems D");
	let challengeE = getProblemNameResults(submissions, "Challenge Problems E");

	let chartData = [basicD, basicE, challengeD, challengeE];

	let displayData = chartData.map((dataset, key) => {
		let datasetState = {
			labels: ["1", "2"], // , "3", "4", "5", "6", "7", "8", "9", "10"],
			title: dataset.problemName,
			datasets: [
				{
					label: "Correct",
					backgroundColor: "rgba(88, 141, 168,0.5)", // #588da8
					borderColor: "rgba(88, 141, 168,1)",
					borderWidth: 1,
					data: dataset.correct,
				},
				{
					label: "Incorrect",
					backgroundColor: "rgba(229, 138, 138, 0.5)",
					borderColor: "rgba(229, 138, 138, 1)",
					borderWidth: 1,
					data: dataset.incorrect,
				},
			],
		};

		return (
			<Bar
				key={key}
				data={datasetState}
				options={{
					title: {
						display: true,
						text: `${datasetState.title} Scores`,
						fontSize: 17,
					},
					legend: {
						display: true,
						position: "right",
					},
				}}
			/>
		);
	});

	return <div>{displayData}</div>;
};
