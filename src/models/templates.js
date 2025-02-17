import mongoose from "mongoose";

const emailTemplateSchema = new mongoose.Schema({
    design: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    description: {
        type: String,
        trim: true
    }
},
    { timestamps: true }
)

const Template = mongoose.models.templates || mongoose.model("templates", emailTemplateSchema);

export default Template;