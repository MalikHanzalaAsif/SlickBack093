import React, { useRef, useState } from 'react';
import "../styles/Contact.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Collapse } from "@mui/material";

const Contact = () => {
    let fetchUrl = "http://localhost:8080";
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: ""
    });
    let [isLoading, setIsLoading] = useState(false);
    let [alertMsg, setAlertMsg] = useState(null);
    const alertRef = useRef(null);

    function handleChange(e) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`${fetchUrl}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (data.error) {
                setAlertMsg({ severity: "error", text: data.error });
                console.log(data.error);
            } else {
                setAlertMsg({ severity: "success", text: "Form submitted successfully! We'll reach you soon. have a great day :)" });
                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    message: ""
                });
            }
            alertRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } catch (error) {
            console.error("Form submission error:", error);
            setAlertMsg({ severity: "error", text: "Something went wrong. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='pt-[70px] h-full mb-32' id='contact'>
                <h1 className='text-center text-7xl font-semibold mb-2'>Contact Us</h1>
                <p className='text-center text-md font-mono'>Please ensure that the information you provided is correct.</p>
                <Collapse in={!!alertMsg} ref={alertRef}>
                    <Alert
                        variant='filled'
                        severity={alertMsg?.severity}
                        onClose={() => setAlertMsg(null)}
                        className="z-100 w-2/5 mx-auto mt-8"
                    >
                        {alertMsg?.text}
                    </Alert>
                </Collapse>

                <section className='w-full h-full lg:flex lg:justify-around items-center pb-8'>
                    <form action="" id="contactForm" className='flex lg:w-2/5 flex-col' onSubmit={handleSubmit}>
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            className='contactFormInputs m-2'
                            required
                            name='name'
                            onChange={handleChange}
                            type='text'
                            value={formData.name}
                        />
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            className='contactFormInputs m-2'
                            required
                            name='email'
                            onChange={handleChange}
                            type='email'
                            value={formData.email}
                        />
                        <TextField
                            label="Contact Number"
                            variant="outlined"
                            className='contactFormInputs m-2'
                            required
                            name='number'
                            onChange={handleChange}
                            type='number'
                            value={formData.number}
                        />
                        <TextField
                            label="Message"
                            multiline
                            maxRows={4}
                            className='contactFormInputs m-2'
                            required
                            onChange={handleChange}
                            name='message'
                            value={formData.message}
                        />
                        <Button variant="contained" size="large" className='contactFormInputs m-2' type='submit'>
                            {(isLoading ? "Submitting..." : "Submit")}
                        </Button>
                    </form>
                    <div id="contactImage">
                        <img src="/img/contact-us-image2.png" alt="contact image" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
