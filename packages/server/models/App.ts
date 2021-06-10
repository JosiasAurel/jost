
import { Schema, model, Document } from "mongoose";

interface AppStruct extends Document {
    name: string
    description: string
    id: string
    owner: any
}

const AppSchema: any = new Schema<AppStruct>({
    name: String,
    description: String,
    id: String,
    owner: {type: Schema.Types.ObjectId, ref: "user"},
    pages: [{type: Schema.Types.ObjectId, ref: "Page"}]
});

const App = model<AppStruct>("App", AppSchema);

export { App };