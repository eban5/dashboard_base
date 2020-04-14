import React from "react";
import { Bar } from "react-chartjs-2";
import { getProblemNames, getProblemNameResults, generateXAxis } from "./utils";
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
			let r = Math.floor(Math.random() * 256);
			let g = Math.floor(Math.random() * 256);
			let b = Math.floor(Math.random() * 256);

			return {
				label: i,
				backgroundColor: `rgba(${r}, ${g}, ${b}, 0.25)`,
				borderColor: `rgba(${r}, ${g}, ${b}, 0.75)`,
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
						download="ChartImage.png"
						href=""
						title="Download Chart">
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
							text: `${datasetState.title} Scores`,
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
					}}
				/>
			</div>
		</>
	);
}
