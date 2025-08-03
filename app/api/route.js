import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: "Cosmic OS API endpoint",
    timestamp: new Date().toISOString(),
    status: "operational"
  });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ 
    message: "Data received",
    received: body,
    timestamp: new Date().toISOString()
  });
}