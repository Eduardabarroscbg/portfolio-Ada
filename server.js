import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Campos obrigatórios" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Contato Portfólio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nova mensagem do portfólio",
      text: `
Nome: ${name}
Email: ${email}

Mensagem:
${message}
      `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Erro ao enviar e-mail" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
