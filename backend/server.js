import express from "express";
import cors from "cors";
const app = express();
const port = 8080;
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// MIDDLEWARES
// For parsing the urlencoded data of post req body;
app.use(express.urlencoded({ extended: true }));

// For parsing the json data of post req body;
app.use(express.json())

// to allow requests from frontend request
app.use(cors({
    origin: process.env.CLIENT_URL,
}));


app.post('/contact', async (req, res, next) => {
    try {
        console.log(req.body);
        const { name, email, number, message } = req.body;

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.FROM_EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
            subject: "New Order On SlickBack093",
            text: `
                   NAME: ${name}
                   EMAIL: ${email}
                   MESSAGE: ${message}
                   CONTACT: ${number}
                   `
        };

        // Send email asynchronously
        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent successfully:", info.response);
        res.json({ success: "Order placed successfully :)" });
    } catch (err) {
        console.error("Error sending email:", err);
        next(err); // Pass the error to the error-handling middleware
    }
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