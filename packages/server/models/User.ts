
import * as mongoose from "mongoose";

const UserSchema: any = new mongoose.Schema({
    name: String,
    password: String,
    id: String,
    apps: [{type: mongoose.Schema.Types.ObjectId, ref: "app"}]
});

const User = mongoose.model("User", UserSchema);

export { User };