const { NextRequest, NextResponse } = require('next/server');
const connectdb = require('@/libs/db'); // Import your database connection
const { UserModel } = require('@/models/user'); // Import your User model

async function POST(req) {
  try {
    await connectdb();

    // Parse the JSON body from the request
    const body = await req.json();
    console.log('Request body:', body); // Debugging statement

    // Validate that required fields are provided
    const { email, password } = body;
    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ message: 'Missing required fields: email or password' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create a new instance of the User model with the received data
    const newUser = new UserModel({ email, password });

    // Save the new user to the database
    await newUser.save();

    // Respond with a success message and the saved data
    const responseData = {
      message: 'User created successfully',
      data: newUser,
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
