import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const submission = {
    name,
    email,
    subject,
    message,
    date: new Date().toISOString(),
  };

  const filePath = path.join(process.cwd(), 'messages.json');
  let messages = [] as unknown[];
  try {
    const data = await fs.readFile(filePath, 'utf8');
    messages = JSON.parse(data);
  } catch {
    // ignore if file does not exist or cannot be parsed
  }

  messages.push(submission);
  await fs.writeFile(filePath, JSON.stringify(messages, null, 2));

  return NextResponse.json({ message: 'Form submitted successfully' });
}
