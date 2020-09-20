const findOutlier = integers => {
	if (integers.filter(item => item % 2 === 0).length > 1) {
		return integers.filter(item => item % 2 !== 0).shift();
  } else {
		return integers.filter(item => item % 2 === 0).shift();
	}
};

console.log(findOutlier([1, 3, 5, 2])); // вернет 2
console.log(findOutlier([2, 6, 15, 22])); // вернет 15
