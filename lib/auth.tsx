import bcrypt from "bcrypt";

const saltRounds = 14;

// Hash the password and return it
export async function blocksHashMethod(b64Password: string) {
	const str = Buffer.from(b64Password, "base64").toString("ascii");
	const hashedPassword = await bcrypt.hash(str, saltRounds);
	return hashedPassword;
}

export function hashPassword(plaintextPassword: string) {
	let encryptedPassword = "error";
	bcrypt.hash(plaintextPassword, saltRounds, function (err, hash) {
		if (err) {
			encryptedPassword = "error";
		} else {
			encryptedPassword = hash;
		}
	});
	if (mongooseFindOne({ password: encryptedPassword }, null, { strictQuery: false})) {
	    return "used";
	}
	return encryptedPassword;
}

//we do small amounts of targeted tomfoolery

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

function mongooseFindOne(search: unknown, smth: unknown, smthelse: unknown) {
  return false;
}
