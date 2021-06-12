
import bcrypt from "bcryptjs";

function hashPass(password: string): string {
    const hash: string = bcrypt.hashSync(password, 8);
    return hash;
}

function isPassword(pass: string, hash: string): boolean {
    const isPass: boolean = bcrypt.compareSync(pass, hash);
    return isPass;
}

/* 
let hash = bcrypt.hashSync("yolo", 8);

console.log(hash);

let passIS = bcrypt.compareSync("yolo", "$2a$08$am30MndjbowJz3Q19oW.NOa8HOJRM8U12oNuXXPd6Tw5hizNETTLG");

console.log(passIS); */

export { hashPass, isPassword };