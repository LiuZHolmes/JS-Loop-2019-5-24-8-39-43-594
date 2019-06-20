for (let i = 1;i <= 9; i++) {
	var str = "";
	for (let j = 1; j <= i; j++) {
		if (j == 1) {
		str = str + (i + "*" + j + "=" + (i*j));
	}
		str = str + " " + (i + "*" + j + "=" + (i*j));
	}
	console.log(str);
}