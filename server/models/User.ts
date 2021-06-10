
import * as mongoose from "mongoose";

const UserSchema: any = new mongoose.Schema({
    name: String,
    password: String,
    id: String
});

const User = mongoose.model("User", UserSchema);

export { User };