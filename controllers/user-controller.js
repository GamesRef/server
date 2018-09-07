const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const axios = require('axios')
require('dotenv').config()

module.exports = {
    register : function(req,res) {
        const { name, password, email } = req.body
        User.create({
            name : name,
            password: password,
            email: email
        })
        .then(function(data){
            res.status(200).json({
                data : data
            })
        })
        .catch(function(err){
            res.status(500).json({
                message : err.message
            })
        })
    },

    login : function(req,res) {
        const { email, password } = req.body
        User.findOne({
            email : email
        })
        .then(function(user){            
            if (user) {
                let check_pass = bcrypt.compareSync(password, user.password)
                if (check_pass) {
                    jwt.sign({
                        name : user.name,
                        email : user.email
                    },process.env.JWT_SECRET,function(err,token){
                        if (err) {
                            res.status(500).json({
                                message : err.message
                            })
                        } else {
                            res.status(200).json({
                                token : token,
                                name : user.name
                            })
                        }
                    })
                } else {
                    res.status(400).json({
                        message : 'wrong password or username'
                    })
                }
            } else {
                res.status(400).json({
                    message : 'user not found'
                })
            }
        })
        .catch(function(err){
            // console.log('masuk');
            res.status(500).json({
                message : err.message
            })
        })
    },

    loginfb : function(req,res) {
        const token = req.body.token
        let urlFb = `https://graph.facebook.com/me?fields=id,email,name&access_token=${token}`

        axios(urlFb)
        .then(function(fb){
            let email = fb.data.email
            User.findOne({
                email: email
            })
            .then(function(user){
                if (!user) {
                    User.create({
                        name : fb.data.name,
                        email : fb.data.email,
                        password : fb.data.id
                    })
                    .then(function(newUser){
                        console.log(newUser)
                        jwt.sign({
                            name : newUser.name,
                            email : newUser.email
                        },process.env.JWT_SECRET,function(err,token){
                            if (err) {
                                res.status(500).json({
                                    message : err.message
                                })
                            } else {
                                res.status(200).json({
                                    token : token,
                                    name : newUser.name
                                })
                            }
                        })
                    })
                    .catch(function(err){
                        res.status(400).json({
                            message : err.message
                        })
                    })
                } else {
                    jwt.sign({
                        name : user.name,
                        email : user.email
                    },process.env.JWT_SECRET,function(err,token){
                        if (err) {
                            res.status(500).json({
                                message : err.message
                            })
                        } else {
                            res.status(200).json({
                                token : token,
                                name : user.name
                            })
                        }
                    })
                }
            })
            .catch(function(err){
                res.status(400).json({
                    message : err.message
                })
            })
        })
        .catch(function(err){
            res.status(500).json({
                message : err.message
            })
        })
    }
}