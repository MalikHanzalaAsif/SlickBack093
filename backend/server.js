import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const dbUrl = "mongodb://127.0.0.1:27017/SlickBack";
const app = express();
const port = 8080;
import Contact from "./models/Contact.js";
import nodemailer from "nodemailer";

// MIDDLEWARES
// For parsing the urlencoded data of post req body;
app.use(express.urlencoded({ extended: true }));

// For parsing the json data of post req body;
app.use(express.json())

// to allow requests from frontend request
app.use(cors({
    origin: 'http://localhost:5173'
}));

// DATABASE CONNECTION
function dbConnection() {
    mongoose.connect(dbUrl)
        .then(() => console.log("Connected to DataBase!"))
        .catch((err) => console.log(`Can't connect to database error: ${err}`));
};
dbConnection();

app.get("/", (req, res) => {
    res.send("server is working.");
});
app.post('/contact', async (req, res, next) => {
    try {
        console.log(req.body);
        let { name, email, number, message } = req.body;
        let newData = {
            name,
            email,
            number,
            message
        };
        let data = new Contact(newData);
        // Save Contact
        await data.save().then(() => {
            console.log("contact saved to database!");
            res.json(data);
        }).catch((err) => {
            throw new Error(err.message);
        });
        // Send Email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "phantompubgm613@gmail.com",
                pass: "batz xhng jfpi okef",
            },
        });

        const mailOptions = {
            from: "phantompubgm613@gmail.com",
            to: "malikhanzalaasif@gmail.com",
            subject: "New Contact Form Submission on SlickBack",
            text: `You received a new message from ${name} (${email}): ${message} Contact: ${number}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log("Error sending email:", error);
            } else {
              console.log("Email sent successfully:", info.response);
            }
          });
          
    } catch (err) {
        next(err);
    };
});

// Error Middlewares
// UNKNOWN PATH ERROR MIDDLEWARE
app.all("*", (req, res, next) => {
    const error = new Error("Page not found!");
    error.status = 404;
    next(error);
});
// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    res.json({ "error": err.message, "status": err.status || 400 });
    console.log(err);
    // res.status(err.status || 500).send(err.message || "something went wrong!");
});

app.listen(port, () => {
    console.log(`app is listening to port: ${port}`);
});