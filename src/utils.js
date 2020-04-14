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

export const generateXAxis = (nums) => {
	let arrSubmissions = [...Array(nums.length).keys()];
	for (let item in arrSubmissions) {
		arrSubmissions[item]++;
	}
	return arrSubmissions;
};
