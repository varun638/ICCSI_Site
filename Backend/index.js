import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

const app = express();

// Set up file upload storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const corsOptions = {
  origin: 'https://iccsi-site-2985.vercel.app',  // This allows requests from any origin
  methods: ['GET', 'POST'],
  credentials: true,
};


app.use(cors(corsOptions));
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, user_location, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'varuns24bit@gmail.com', // Replace with your conference email
      subject: `Contact Form Submission from ${user_name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Location:</strong> ${user_location}</p>
        <p><strong>Message:</strong> ${message} </p>
      `
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user_email,  // Send thank you email to the user's email
      subject: `Thank You for Reaching Out, ${user_name}`,
      html: `
        <h3>Thank you for contacting us!</h3>
        <p>Dear ${user_name},</p>
        <p>We have successfully received your message regarding "<strong>${message}</strong>".</p>
        <p>Our team will review your inquiry and get back to you as soon as possible.</p>
        <p>If you have any further questions, feel free to reach out again.</p>
        <p>Best regards,<br/>Support Team</p>
      `
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Paper submission endpoint
app.post('/api/submit-paper', upload.single('paperFile'), async (req, res) => {
  const { title, name,  phnumber, email,  abstract, Institution, category, track } = req.body;
  const paperFile = req.file;

  if (!paperFile) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    // Create email with file attachment
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'varuns24bit@gmail.com',
      subject: `Paper Submission: ${title}`,
      html: `
        <h3>New Paper Submission</h3>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile Number:</strong> ${phnumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Track:</strong> ${track}</p>
        <p><strong>Institution:</strong> ${Institution}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Abstract:</strong> ${abstract} </p>
       
      `,
      attachments: [
        {
          filename: paperFile.originalname,
          content: paperFile.buffer,
          contentType: 'application/pdf'
        }
      ]
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,  // Send thank you email to the user's email
      subject: `Thank You for Your Paper Submission: ${title}`,
      html: `
        <h3>Thank you for submitting your paper!</h3>
        <p>Dear author,</p>
        <p>We have successfully received your paper titled "<strong>${title}</strong>".</p>
        <p>Your submission will now go through the peer review process, and we will notify you about the status soon.</p>
        <p>Best regards,<br/>Conference Team</p>
      `,
    });


    res.status(200).json({ message: 'Paper submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to submit paper' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});