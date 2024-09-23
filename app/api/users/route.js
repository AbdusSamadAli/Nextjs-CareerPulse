const { NextRequest, NextResponse } = require('next/server');
const connectdb = require('@/libs/db'); // Import your database connection
const { ResumeModel } = require('@/models/resume'); // Import your Resume model

async function POST(req) {
  try {
    await connectdb();

    // Parse the JSON body from the request
    const body = await req.json();
    console.log('Request body:', body); // Debugging statement

    // Validate that required fields are provided
    const { personalInfo, sections } = body;
    if (!personalInfo || !sections || sections.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: 'Missing required fields: personalInfo or sections' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create a new instance of the Resume model with the received data
    const newResume = new ResumeModel({ personalInfo, sections });

    // Save the new resume to the database
    await newResume.save();

    // Respond with a success message and the saved data
    const responseData = {
      message: 'Resume created successfully',
      data: newResume,
    };

    return new NextResponse(
      JSON.stringify(responseData),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return new NextResponse(
        JSON.stringify({ message: 'Error processing request', error: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: 'Unknown error occurred' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
}

module.exports = { POST };
