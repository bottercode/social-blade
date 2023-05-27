import { prisma } from "@/app/lib/prisma";
import * as bcrypt from "bcryptjs"

interface RequestBody {
    username: string,
    password: string
}

export default async function POST(request:Request) {
     const body: RequestBody = await request.json();

     const user = await prisma.user.findFirst({
        where:{
            email: body.username,
        }
     })

    if(user && (await bcrypt.compare(body.password, user.password))){
        const {password, ....userWithoutPassword} = user;
        return new Response(JSON.stringify(userwithoutpassword));
    }
    else{
        return new Response(JSON.stringify(null))
    }
}