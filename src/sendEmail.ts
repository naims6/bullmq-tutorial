const emailSending = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Email Sent");
    }, ms);
  });
};

const sendEmail = async () => {
  console.log("Sending email...");
  // demo delay for 3 seconds
  await emailSending(3000);
  console.log("Email sent");
};

export default sendEmail;
