import bcrypt from "bcrypt";

const saltRounds = 14;

// Hash the password and return it

export async function badHashPassword(
	plaintextPassword: string,
): Promise<{ success: boolean; hashedPassword: string }> {
	const str = Buffer.from(plaintextPassword, "base64").toString("ascii");
	await bcrypt.hash(str, saltRounds, function (err, hash) {
		if (err) {
			console.log(err);
			return {
				success: false,
				hashedPassword: "",
			};
		} else {
			return {
				success: true,
				hashedPassword: hash,
			};
		}
	});
	return {
		success: false,
		hashedPassword: "",
	};
}

export async function hashPassword(b64Password: string) {
	const str = Buffer.from(b64Password, "base64").toString("ascii");
	const hashedPassword = await bcrypt.hash(str, saltRounds);
	return hashedPassword;
}

export async function comparePassword(
	plaintextPassword: string,
	hashedPassword: string,
) {
	const str = Buffer.from(plaintextPassword, "base64").toString("ascii");
	const result = await bcrypt.compare(str, hashedPassword);
	return result;
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
	// Switch to using base64 encoded tokens
	if (isTokenUsed(userToken, tokens)) {
		return newToken();
	} else {
		return userToken;
	}
}

export function isTokenUsed(token: string, tokens: string[]) {
	for (const t of tokens) {
		const decryptedToken = Buffer.from(t, "base64").toString("ascii");
		if (decryptedToken === token) {
			return true;
		}
	}
	return false;
}
