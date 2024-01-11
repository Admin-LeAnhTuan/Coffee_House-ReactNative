import nodemailer, { TransportOptions } from "nodemailer";
import fs from "fs";
import path from "path";

interface attachment {
  filename: string;
  path?: string | undefined;
  content: any;
  contentType: string;
}

const sendMail = async (option: {
  email: string;
  subject: string;
  message: string;
  attachment?: attachment | undefined | string;
}) => {
  console.log("start send email");

  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: "gmail",
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  } as TransportOptions);


  const mailOption = {
    from: process.env.SMPT_MAIL,
    to: option.email,
    subject: option.subject,
    html: option.message,
    attachments: [option.attachment].filter(Boolean) as attachment[],
  };

  await transporter.sendMail(mailOption, (err: any, info: any) => { 
    // Specify the type of 'info' as 'any' for now
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info?.response); 
      // Access the response property using optional chaining
    }
  });
};

export default sendMail;