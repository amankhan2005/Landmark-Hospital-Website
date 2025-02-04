import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
    {
        postedBy: { type: String, required: true },
        imageUrl: { type: String, required: true },
    },
    { timestamps: true } 
);

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;
