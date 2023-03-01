import { NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";


export function middleware(req: NextRequest) {
    console.log('middleware');
 
  return NextResponse.next();
}