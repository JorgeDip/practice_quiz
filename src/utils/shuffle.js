export function shuffle(array) {
	const newArray = [...array];
	for (let i = newArray.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let k = newArray[i];
		newArray[i] = newArray[j];
		newArray[j] = k;
	}
	return newArray;
}
