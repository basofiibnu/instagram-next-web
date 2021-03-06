import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  site: process.env.NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_SECRET_GOOGLE_CLIENT_ID,
      clientSecret:
        process.env.NEXT_PUBLIC_SECRET_GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXT_PUBLIC_SECRET_GOOGLE_CLIENT_ID,
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
});
