exports.internshipApplicationConfirmation = (name, email) => {
    return `
        <!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="UTF-8">
            <title>Internship Application Confirmation</title>
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
                }
        
                .highlight {
                    font-weight: bold;
                }
            </style>
        
        </head>
        
        <body>
            <div class="container">
                <a href="https://trackalways.in"><img class="logo"
                        src="https://www.trackalways.in/static/media/msl-logo.fa511a57a3004d4fad98.png" alt="Company Logo"></a>
                <div class="message">Internship Application Confirmation</div>
                <div class="body">
                    <p>Dear ${name},</p>
                    <p>Thank you for submitting your application for the internship program at our organization.</p>
                    <p>We have received your application with the email address <span class="highlight">${email}</span>.
                    </p>
                    <p>We will review your application carefully. If you are shortlisted, we will contact you for the next steps of the selection process.</p>
                </div>
            </div>
        </body>
        
        </html>
    `;
};
