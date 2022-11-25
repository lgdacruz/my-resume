// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Nodemailer from "nodemailer";

const transport = Nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: process.env.MAIL_LOGIN,
    pass: process.env.MAIL_PASSWORD,
  },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const message = req.body;
  if (!message) return res.status(400).json("Envie uma mensagem");

  transport.sendMail(
    {
      from: process.env.MAIL_LOGIN,
      to: process.env.MYEMAIL_BOX,
      subject: "FeedBack currículo",
      html: `<p>${message}</p>`,
    },
    (err, info) => {
      if (err) {
        console.log(err);
        return res.status(400).json("Erro ao enviar a msg");
      }
      return res.status(200).json("Mensagem enviada com sucesso!");
    }
  );
}
