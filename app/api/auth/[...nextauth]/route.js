import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectdb from '@/libs/db'; // Import your MongoDB connection utility
import { UserModel } from '@/models/user'; // Import your User model

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Handle storing user in MongoDB after successful sign in
    async signIn({ user, account, profile }) {
      await connectdb(); // Ensure we're connected to the database

      try {
        // Check if the user already exists in the database
        const existingUser = await UserModel.findOne({ email: user.email });

        // If the user doesn't exist, create a new record
        if (!existingUser) {
          const newUser = new UserModel({
            email: user.email,
            password: '', // Google sign-in users do not have a password
          });

          await newUser.save(); // Save the user to the database
          console.log('New user created:', newUser);
        } else {
          console.log('User already exists:', existingUser);
        }

        return true; // Allow the sign-in process to continue
      } catch (error) {
        console.error('Error saving user to DB:', error);
        return false; // Deny sign-in if there's an error
      }
    },
    // Handle JWT tokens for the session
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    // Add custom fields to the session object
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
        session.user.email = token.email;
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin', // Custom sign-in page
  },
};

// Export the NextAuth handler for GET and POST requests
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };



