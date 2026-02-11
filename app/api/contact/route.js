import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, email, message } = data;

        // TODO: Integrate with an actual email service provider here.
        // Examples: SendGrid, Resend, Nodemailer, AWS SES.

        // For now, we will log the data to the console to simulate sending.
        console.log('------------------------------------------------');
        console.log('New Contact Form Submission');
        console.log('------------------------------------------------');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
        console.log('------------------------------------------------');
        console.log('Sending to: raghav@influencer-connect.com');

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to send message.' },
            { status: 500 }
        );
    }
}
