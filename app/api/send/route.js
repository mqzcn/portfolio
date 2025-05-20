// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// resend.emails.send({
//   from: "onboarding@resend.dev",
//   to: "mazenmagzoub@gmail.com",
//   subject: "Hello World",
//   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
// });

export async function POST(req, res) {
  // For now, just return a message indicating the functionality is disabled
  return Response.json(
    { message: "Email sending is temporarily disabled." },
    { status: 200 }
  );
}
