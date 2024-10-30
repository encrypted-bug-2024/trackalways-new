exports.contactUsConfirmation = (name, email, mobile, subject, message) => {
    return `
        <!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="UTF-8">
            <title>Contact Us Confirmation</title>
            <style>
                body {
                    background-color: #ffffff;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.4;
                    color: #333333;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }
        
                .logo {
                    padding: 4px;
                    background-color: #1255CC;
                    max-width: 200px;
                    margin-bottom: 20px;
                }
        
                .message {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
        
                .body {
                    font-size: 16px;
                    margin-bottom: 20px;
                    text-align: left;
                }
        
                .highlight {
                    font-weight: bold;
                }
        
                .contact-details {
                    font-size: 14px;
                    color: #666666;
                    margin-top: 20px;
                }
            </style>
        
        </head>
        
        <body>
            <div class="container">
                <a href="https://trackalways.in"><img class="logo"
                        src="https://www.trackalways.in/static/media/msl-logo.fa511a57a3004d4fad98.png" alt="Company Logo"></a>
                <div class="message">Contact Us Form Submission</div>
                <div class="body">
                    <p>Dear ${name},</p>
                    <p>Thank you for reaching out to us with your query.</p>
                    <p>We have received your message with the following details:</p>
                    <p><span class="highlight">Email:</span> ${email}</p>
                    <p><span class="highlight">Mobile:</span> ${mobile}</p>
                    <p><span class="highlight">Subject:</span> ${subject}</p>
                    <p><span class="highlight">Message:</span> ${message}</p>
                    <p>We will review your message and get back to you shortly.</p>
                </div>
                <div class="contact-details">
                    <p>Best Regards,</p>
                    <p>Track Always</p>
                </div>
            </div>
        </body>
        
        </html>
    `;
};
