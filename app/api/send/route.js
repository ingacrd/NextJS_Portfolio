
// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'ARU Portfolio <onboarding@resend.dev>',
      to: 'ing.acrd@gmail.com',
      subject: subject,
    //   react: EmailTemplate({ firstName: 'John' }),
      react: (<>
              <h1>{subject}</h1>
               <p>New message submited: </p>
                <p>{message}</p><br/>
                <p>from email: {email}</p>
            </>),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
