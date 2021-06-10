
import * as mongoose from "mongoose";

const AppSchema: any = new mongoose.Schema({
    name: String,
    description: String,
    id: String,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "user"}
});

const App = mongoose.model("App", AppSchema);

export { App };