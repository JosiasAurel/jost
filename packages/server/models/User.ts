
import { Schema, model, Document } from "mongoose";

interface UserStruct extends Document {
    name: string
    password: string
    id_: string
    apps: any
}

const UserSchema: any = new Schema<UserStruct>({
    name: {type: String, required: true},
    password: {type: String, required: true},
    _id: {type: String, required: true},
    apps: [{type: Schema.Types.ObjectId, ref: "app"}]
});

const User = model<UserStruct>("User", UserSchema);

export { User };