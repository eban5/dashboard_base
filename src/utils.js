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
		if (type === "Basic") {
			return Object.keys(data[0])
				.sort()
				.filter((item) => item.indexOf("Basic") !== -1);
		} else if (type === "Challenge") {
			return Object.keys(data[0])
				.sort()
				.filter((item) => item.indexOf("Challenge") !== -1);
		}
	}
}
