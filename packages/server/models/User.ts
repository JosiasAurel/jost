
import { Schema, model, Document } from "mongoose";

interface UserStruct extends Document {
    name: string
    password: string
    id: string
    apps: any
}

const UserSchema: any = new Schema<UserStruct>({
    name: {type: String, required: true},
    password: {type: String, required: true},
    id: {type: String, required: true},
    apps: [{type: Schema.Types.ObjectId, ref: "app"}]
});

const User = model<UserStruct>("User", UserSchema);

export { User };