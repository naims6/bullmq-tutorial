import express from "express";
import sendEmail from "./sendEmail";

const app = express();

app.get("/send-email", async (req, res) => {
  await sendEmail();
  return res.json("Email Sent");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
