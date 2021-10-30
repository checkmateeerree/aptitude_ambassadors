export default async function sendEmail(req, res) {

  if (req.method === "POST"){
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "mannuarora7000@gmail.com", // Your email where you'll receive emails
      from: "manuarorawork@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
 else {
  return res.status(200).json({ error: "ONLY TAKES POST REQUESTS" });
 }
}
