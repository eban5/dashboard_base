export function getProblemNameResults(data, problemName) {
	let subset = data.map((item) => {
		return Object.values(item).filter((set) => set.Set === problemName)[0];
	});

	let correct = subset.map((k) => parseInt(k.Correct, 10));
	let incorrect = subset.map((k) => parseInt(k.Incorrect, 10));

	return {
		// key: key,
		problemName: problemName,
		correct: correct,
		incorrect: incorrect,
	};
}

export function getProblemNames(data, type) {
	if (data.length > 0) {
		switch (type) {
			case "Basic":
				return Object.keys(data[0])
					.sort()
					.filter((item) => item.indexOf("Basic") !== -1);

			case "Test":
				return Object.keys(data[0])
					.sort()
					.filter((item) => item.indexOf("Test") !== -1);

			case "Challenge":
				return Object.keys(data[0])
					.sort()
					.filter((item) => item.indexOf("Challenge") !== -1);

			case "Ravens":
				return Object.keys(data[0])
					.sort()
					.filter((item) => item.indexOf("Ravens") !== -1);

			default:
				throw new Error("Problem Type not recognized");
		}
	}
}

// #084177 rgb(8, 65, 119)
// #fbc490 rgb(251, 196, 144)
// #687466 rgb(104, 116, 102)
// #cd8d7b rgb(205, 141, 123)

export const setBkgColor = [
	`rgba(8, 65, 119, 0.25)`,
	`rgba(251, 196, 144, 0.25)`,
	`rgba(104, 116, 102, 0.25)`,
	`rgba(205, 141, 123, 0.25)`,
];

export const setBorderColor = [
	`rgba(8, 65, 119, 0.75)`,
	`rgba(251, 196, 144, 0.75)`,
	`rgba(104, 116, 102, 0.75)`,
	`rgba(205, 141, 123, 0.75)`,
];

export const generateXAxis = (nums) => {
	let arrSubmissions = [...Array(nums.length).keys()];
	for (let item in arrSubmissions) {
		arrSubmissions[item]++;
	}
	return arrSubmissions;
};
