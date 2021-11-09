import bcrypt from "bcrypt";

const saltRounds = 14;

export async function hashPassword(plaintextPassword: string) {
	let encryptedPassword = "error";
	bcrypt.hash(plaintextPassword, saltRounds, function (err, hash) {
		if (err) {
			encryptedPassword = "error";
		} else {
			encryptedPassword = hash;
		}
	});
	return encryptedPassword;

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
