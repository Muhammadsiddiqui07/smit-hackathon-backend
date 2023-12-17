import express from 'express';
import cors from 'cors'
import mongoose from './components/db/index.js';
import User from './components/schema/index.js';
import bcrypt from 'bcrypt';



const users = [{
    name: "muhammad",
    email: "muhammad@gmail.com"
}]

const db = mongoose.connection;
db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

db.once("open", () => {
    console.log("db connected");
});

const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send(users)
})

app.post('/signup', async (req, res) => {
    try {
        const users = new User(req.body);
        const newUser = await users.save();
        bcrypt.hash(req.body.Password, saltRounds).then(function (hash) {
            // Store hash in your password DB.
        });
        return (
            res.status(200).send({ messsage: "user added succesfully", user: newUser })
        )
    } catch (err) {
        res.status(400).send(console.log("err", err))
    }

})

app.listen(8000, () => {
    console.log(`server is running in port ${8000}`);
})

