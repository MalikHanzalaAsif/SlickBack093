import nodemailer from "nodemailer";

// Send email
export const sendEmail = async (req, res, next) => {
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
        const ownerMailOptions = {
            from: process.env.FROM_EMAIL,
            to: process.env.TO_EMAIL,
            subject: "Contact Form Submission on SlickBack093",
            text: `
                   NAME: ${name}
                   EMAIL: ${email}
                   MESSAGE: ${message}
                   CONTACT: ${number}
                   `
        };
        const userMailOptions = {
            from: process.env.FROM_EMAIL,
            to: email,
            subject: "Contact Form Submitted on SlickBack093",
            text: `Dear ${name}! We've got your query . We'll get back to you soon. Thanks for reaching out!`
        };

        // Send email asynchronously
        const ownerInfo = await transporter.sendMail(ownerMailOptions);
        console.log("Email sent successfully to owner:", ownerInfo.response);
        res.json({ success: "Form Submitted Successfully!" });
        
        // send email to user
        const userInfo = await transporter.sendMail(userMailOptions);
        console.log("Email sent successfully to user:", userInfo.response);
    } catch (err) {
        console.error("Error sending email:", err);
        next(err); // Pass the error to the error-handling middleware
    }
};