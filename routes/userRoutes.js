const express = require('express');
const UserModel = require('../models/UserModel');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 4;

userRouter.post("/register", async (req, res) => {
    const payload = req.body;
    try {
        const isRegistered = await UserModel.findOne({ email: payload.email });
        if (isRegistered) {
            res.json({ msg: "User already registered" });
        }
        else {
            bcrypt.hash(payload.password, saltRounds, async (err, hashed) => {
                if (err) {
                    res.json({ msg: "Something went wrong while registering 1", err });
                }
                else if (hashed) {
                    payload.password = hashed;
                    const newUser = new UserModel(payload);
                    await newUser.save();
                    res.json({ msg: "User registered successfully" });
                }
            })
        }

    } catch (error) {
        console.log(error)
        res.json({ msg: "Something went wrong while registering 2", error });
    }
});

userRouter.post("/login", async (req, res) => {
    const payload = req.body;
    try {
        const isRegistered = await UserModel.findOne({ email: payload.email });
        if (isRegistered) {
            bcrypt.compare(payload.password, isRegistered.password, (err, result) => {
                if (err) {
                    res.json({ msg: "Something went wrong while login 1", err });
                }
                else if (result) {
                    jwt.sign({ userID: isRegistered._id }, "chatcode", (err, token) => {
                        if (err) {
                            res.json({ msg: "Something went wrong while login 3", err });
                        }
                        else if (token) {
                            res.json({ msg: "login successful", token });
                        }
                    })
                }
                else if (!result) {
                    res.json({ msg: "Wrong password" });
                }
            })
        }

    } catch (error) {
        console.log(error)
        res.json({ msg: "Something went wrong while login 2", error });
    }
});



module.exports = userRouter;