dotenv.config();
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
const app = express();
const port = 8080;
import contactRoutes from "./routes/contactRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
 

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL,
}));


// ROUTES
app.use("/contact", contactRoutes);
app.use(orderRoutes);


// Error Middlewares
app.all("*", (req, res, next) => {
    const error = new Error("Page not found!");
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    res.json({ "error": err.message, "status": err.status || 400 });
    console.log(err);
    // res.status(err.status || 500).send(err.message || "something went wrong!");
});

app.listen(port, () => {
    console.log(`app is listening to port: ${port}`);
});