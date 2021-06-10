
import { Schema, model, Document } from "mongoose";

interface AppStruct extends Document {
    name: string
    description: string
    id_: string
    owner: any
}

const AppSchema: any = new Schema<AppStruct>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    _id: {type: String, required: true},
    owner: {type: Schema.Types.ObjectId, ref: "user"},
    pages: [{type: Schema.Types.ObjectId, ref: "Page"}]
});

const App = model<AppStruct>("App", AppSchema);

export { App };