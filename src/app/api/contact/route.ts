import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  // TODO: Implement email sending logic here

  console.log('Form submission received:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  return NextResponse.json({ message: 'Form submitted successfully' });
}
