import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.local.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Noe <quezadanoe@gmail.com>',
      to: ['noe2000@live.com.mx'],
      subject: 'Hello world',
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
