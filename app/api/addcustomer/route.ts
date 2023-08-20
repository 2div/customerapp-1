//@ts-nocheck
import { connectToDataBase } from "./../../helpers/server-helpers"
import prisma from "./../../../prisma/index"
import { NextResponse } from "next/server"



export const POST = async (req: Request) => {
    try {
        const {name,email,phone,location} =  await req.json()
        if (!name || !email || !phone || !location) 
            return NextResponse.json({message: "Invalid Data"},{status: 422})
        await connectToDataBase()
        const newCustomer = await  prisma.customer.create({data: {name,email,phone,location}})
        return NextResponse.json({newCustomer}, {status : 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Server Error"}, {status : 201})
    } finally {
        await prisma.$disconnect()
    }
}

export const GET = async (req: Request, res: NextResponse) => {
    try {
      await connectToDataBase();
      const customers = await prisma.customer.findMany();
      return NextResponse.json({ message: "Success", customers }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };
