import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tamangadit86@gmail.com",
    pass: "zhvnhkqqkslbkyse",
  },
});

const sendMail = async (email,subject, message) => {
  const info = await transporter.sendMail({
    from: '"Prabesh Dahal" <prabeshdaahal123@gmail.com>',
    to: email,
    subject: subject,
    html: `<b>${message}</b>`,
  });

  // console.log("Message sent:", info.messageId);
};


export { sendMail };
