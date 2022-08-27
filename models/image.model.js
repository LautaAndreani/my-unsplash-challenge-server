import mongoose from "mongoose"

const Schema = mongoose.Schema

const ImageSchema = new Schema({
	label: {
		type: String,
		required: true,
	},
	photo_url: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now(),
	},
})

const model = mongoose.model("Image", ImageSchema)

export default model
