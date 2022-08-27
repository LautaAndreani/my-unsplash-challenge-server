import mongoose from "mongoose"
import Images from "../models/image.model.js"

//get all images uploads
export const getImages = async (req, res) => {
	try {
		const images = await Images.find({}).sort({ createdAt: -1 })
		res.status(200).json(images)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

//create new image
export const createImage = async (req, res) => {
	const { label, photo_url } = req.body
	if (!photo_url || !photo_url.includes("unsplash")) return res.status(400).json({ error: "Please enter a valid URL" })

	try {
		const image = await Images.create({ label, photo_url }) // create a new model image in db
		res.status(200).json(image)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

//delete an image
export const deleteImage = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: "The id is invalid" })

	try {
		const image = await Images.findOneAndDelete({ _id: id })
		if (!image) return res.status(404).json({ err: "No found any image" })

		return res.status(200).json(image)
	} catch (error) {
		res.status(404).json({ error: error.message })
	}
}
