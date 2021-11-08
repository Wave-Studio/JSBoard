import bcrypt from "bcrypt";

const saltRounds = 14;

export function hashPassword(password: string) {
	bcrypt.hash(password, saltRounds, function (err, hash) {
		if (err) {
			return "error";
		} else {
			return hash;
		}
	});
}

export function newToken(tokens: string[] = []) {
	const validChars =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-".split(
			"",
		);
	const letters = Math.floor(Math.random() * (45 - 35 + 1)) + 35;
	let userToken = "";
	for (let i = 1; i <= letters; i++) {
		userToken += validChars[Math.floor(validChars.length * Math.random())];
	}
	if (tokens.includes(userToken)) {
		return newToken(tokens);
	} else {
		return userToken;
	}
}
