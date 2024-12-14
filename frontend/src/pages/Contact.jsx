import React, { useRef, useState } from 'react';
import "../styles/Contact.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Collapse } from "@mui/material";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

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
    const handlePhoneChange = (value) => {
        setFormData((prev) => ({ ...prev, number: value }));
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
            alertRef?.current.scrollIntoView({ behavior: "smooth", block: "center" });
        } catch (error) {
            console.error("Form submission error:", error);
            setAlertMsg({ severity: "error", text: "Something went wrong. Please try again." });
            alertRef?.current.scrollIntoView({ behavior: "smooth", block: "center" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='pt-[70px] h-full mb-32' id='contact'>
                <h1 className='text-center text-7xl font-semibold mb-2'>Contact Us</h1>
                <p className='text-center text-md font-mono mb-4'>Please ensure that the information you provided is correct.</p>
                <Collapse in={!!alertMsg} ref={alertRef}>
                    <Alert
                        variant='filled'
                        severity={alertMsg?.severity}
                        onClose={() => setAlertMsg(null)}
                        className="z-100 w-5/5 mx-auto md:w-4/5 lg:w-3/5"
                    >
                        {alertMsg?.text}
                    </Alert>
                </Collapse>

                <section className='w-full h-full lg:flex lg:justify-around items-center pb-8'>
                    <form action="" id="contactForm" className="flex lg:w-2/5 flex-col" onSubmit={handleSubmit}>
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            className="contactFormInputs m-2"
                            required
                            name="name"
                            onChange={handleChange}
                            type="text"
                            value={formData.name}
                        />
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            className="contactFormInputs m-2"
                            required
                            name="email"
                            onChange={handleChange}
                            type="email"
                            value={formData.email}
                        />
                        <PhoneInput
                            className="ml-2 m-2"
                            value={formData.number}
                            onChange={handlePhoneChange} // Use custom handler for PhoneInput
                            inputStyle={{
                                width: '97%',
                                padding: '10px',
                                fontSize: '16px',
                                paddingLeft: "40px",
                                backgroundColor: "transparent",
                                outline: "1px solid gray",
                                height: "50px"
                            }}
                            placeholder="Enter your phone number"
                            enableSearch
                            name="number"
                        />
                        <TextField
                            label="Message"
                            multiline
                            maxRows={4}
                            className="contactFormInputs m-2"
                            required
                            onChange={handleChange}
                            name="message"
                            value={formData.message}
                        />
                        <Button style={{backgroundColor: "#ad1700"}} variant="contained" size="large" className="contactFormInputs m-2" type="submit">
                            {isLoading ? 'Submitting...' : 'Submit'}
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
