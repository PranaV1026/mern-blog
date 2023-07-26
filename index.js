const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs')
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

 mongoose.connect('mongodb+srv://blog:blog123@cluster0.swlqnfm.mongodb.net/?retryWrites=true&w=majority').then
(() => console.log("Connected to MongoDB")).catch((err) => console.log(err));
app.get('/',);
app.post('/register', async(req,res) => {
    const {username, password} = req.body;
    try{
        const userDoc =  await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        })
        await userDoc.save();
    }catch(e){
        console.log(e);
        res.status(400).json(e);
    }
    
});

app.post('/login', async(req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
     const passOk= bcrypt.compareSync(password, userDoc.password);
     res.json(passOk);
});
app.listen(5000 , ()=>{console.log("Server started")});
//mongodb+srv://Blog:XyTmWs0cltcR89QQ@cluster0.ewvf49p.mongodb.net/?retryWrites=true&w=majority
//XyTmWs0cltcR89QQ