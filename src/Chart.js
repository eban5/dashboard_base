import React from "react";
import { Bar } from "react-chartjs-2";
import {
	getProblemNames,
	getProblemNameResults,
	generateXAxis,
	setBkgColor,
	setBorderColor,
} from "./utils";
import { Button } from "antd";

export function RPMChart(props) {
	const { results, problemType } = props;
	const chartRef = React.createRef();

	let problemNames = getProblemNames(results, problemType);

	let chartData = [];
	for (let name in problemNames) {
		chartData.push(getProblemNameResults(results, problemNames[name]));
	}

	let datasetState = {
		labels: generateXAxis(results),
		title: `${problemType} Correct Results across Submissions`,
		datasets: problemNames.map((i, key) => {
			// get color to use for their bar fill
			let bkgColor = setBkgColor[key];
			let borderColor = setBorderColor[key];

			return {
				label: i,
				backgroundColor: bkgColor,
				borderColor: borderColor,
				borderWidth: 1,
				data: chartData[key].correct,
			};
		}),
	};

	const downloadChart = () => {
		// get image of canvas element
		let url_base64 = chartRef.current.chartInstance.toBase64Image();
		let a = document.getElementById("download");
		a.href = url_base64;
	};

	return (
		<>
			<div className="download">
				<Button type="primary" shape="round" size={"large"}>
					<a
						onClick={() => {
							downloadChart();
						}}
						id="download"
						download={`${problemType.toLowerCase()}_chart.png`}
						href=""
						title={`Download ${problemType} Chart`}>
						Download
					</a>
				</Button>
			</div>
			<div className="chart">
				<Bar
					ref={chartRef}
					data={datasetState}
					options={{
						title: {
							display: true,
							text: `${datasetState.title}`,
							fontSize: 17,
							fontFamily: "Palatino",
						},

						legend: {
							display: true,
							position: "bottom",
							fontFamily: "Palatino",
							fullWidth: false,

							labels: {
								fontFamily: "Palatino",
								padding: 20,
								boxWidth: 20,
							},
						},
						scales: {
							yAxes: [
								{
									id: "y-axis-0",
									scaleLabel: {
										display: true,
										labelString: "# Correct",
										fontFamily: "Palatino",
									},
									ticks: {
										fontFamily: "Palatino",
										suggestedMin: 0,
										suggestedMax: 12,
									},
								},
							],
							xAxes: [
								{
									scaleLabel: {
										display: true,
										labelString: "Submission",
										fontFamily: "Palatino",
									},
								},
							],
						},
						annotation: {
							annotations: [
								{
									type: "line",
									mode: "horizontal",
									scaleID: "y-axis-0",
									value: 7,
									borderColor: "rgb(216, 52, 95)",
									borderWidth: 4,
									label: {
										enabled: false,
										content: "Threshold",
									},
								},
							],
						},
					}}
				/>
			</div>
		</>
	);
}
