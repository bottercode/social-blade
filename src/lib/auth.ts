import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: { 
                label: "Username", 
                type: "text", 
                placeholder: "bottercode" 
            },
        password: { 
                label: "Password", 
                type: "password" 
            },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Admin", username: "botter_code" };
        return user;
      },
    }),
  ],
};