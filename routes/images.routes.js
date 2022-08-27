import { Router } from "express"
import { createImage, deleteImage, getImages } from "../controllers/images.controllers.js"

const router = Router()

router.get("/", getImages)

router.post("/", createImage)

router.delete("/:id", deleteImage)

export default router
