
import { Schema, model, Document } from "mongoose";

interface PageStruct extends Document {
    url: string
    viewCount: number
    os: [string]
    app: any
}

const PageSchema = new Schema<PageStruct>({
    url: {type: String, require: true},
    viewCount: {type: String, required: true},
    os: [{type: String, required: true}],
    app: {type: Schema.Types.ObjectId, ref: "apps"},
    _id: {type: String, required: true}
});

const Page = model<PageStruct>("Page", PageSchema);

export { Page };