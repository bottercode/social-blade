import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "Sign In",

            credentials: {
                username: {
                    type: "text",
                    label: "username",
                    placeholder: "username"
                },
                password: {
                    type: "password",
                    label: "Password"
                }
            },
            async authorize(credentials, req) {
                
                const res = await fetch("http://localhost:3000/api/login", {
                  method: 'POST',
                  body: JSON.stringify(credentials),
                  headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                
               
                if(res.ok && user){
                    return user
                }
                return null
              }
            })
          ]
        }