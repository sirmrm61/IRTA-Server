var express = require('express');
const { body, validationResult } = require('express-validator');
const { Op } = require("sequelize");
var router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
// const verifyToken=require("./../../security/verifyToken");
const dbConnection=require('./../../db');
router.post('api/auth/signin', body('username').isLength({min:5}),
body('password').isLength({ min: 5 }),
async function(req,res){
    console.log('sign-in');
    res.status(200).send('sign-in')
});
router.post('/signup', body('username').isLength({min:5}),
body('password').isLength({ min: 5 }),
async function(req,res){
    var username= req.params[0];
    console.log(username);
// var valid = WAValidator.validate(username, 'BTC');
// if(valid)
// 	console.log('This is a valid address');
// else
// 	console.log('Address INVALID');
//     console.log('sign-up');
    res.status(200).send(username)
})
router.post('/edit-profile', body('username').isLength({min:5}),
body('password').isLength({ min: 5 }),
async function(req,res){
    console.log('edit-profile');
    res.status(200).send('edit-profile')
})
router.post('/edit-admin', body('username').isLength({min:5}),
body('password').isLength({ min: 5 }),
async function(req,res){
    console.log('edit-admin');
    res.status(200).send('edit-admin')
})
router.post('/change-password-admin', body('username').isLength({min:5}),
body('password').isLength({ min: 5 }),
async function(req,res){
    console.log('change-password-admin');
    res.status(200).send('change-password-admin')
})
router.post('/forget-password', body('username').isLength({min:5}),
body('password').isLength({ min: 5 }),
async function(req,res){
    console.log('forget-password');
    res.status(200).send('forget-password')
})
router.post('/change-password-token', body('username').isLength({min:5}),
body('password').isLength({ min: 5 }),
async function(req,res){
    console.log('change-password-token');
    res.status(200).send('change-password-token')
})
router.get('/', (req, res) => {
    res.send('Hello World!')
  })
module.exports=router;