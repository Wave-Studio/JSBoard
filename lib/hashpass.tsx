import bcrypt from "bcrypt";

const saltRounds = 14;

export default async function hashPassword(password: string) {
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            return "error";
        } else {
            return hash;
        }
    });
}