const express = require("express");
const { CityModel } = require("../model/CityModel");
require("dotenv").config();

const cityRouter = express.Router();

cityRouter.get("/", async (req, res) => {
    try {
        const data = await CityModel.find();
        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.send({ "message": err.message });
    }
})

// cityRouter.get("/:id", async (req, res) => {
//     try {
//         const id = req.params.id;
//         const post = await Post.findById(id);
//         res.send({ post });
//     } catch (error) {
//         res.send({ msg: error.msg });
//     }
// });

cityRouter.post("/post", async (req, res) => {
    try {
        const data = req.body;
        const newpost = new CityModel(data);
        await newpost.save();
        res.send({ msg: "Post created", post: newpost });
    } catch (error) {
        res.send(error.message);
    }
});

cityRouter.get('/:city', async (req, res) => {
    const { city } = req.params;

    try {
        const result = await CityModel.find({ city });
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = { cityRouter }