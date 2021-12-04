import { NextRequest, NextResponse } from "next/server";
import { useCookies } from "react-cookie";

export function middleware(req: NextRequest) {
  if (!(process.env.NODE_ENV === "development")) {
    const cookies = req.cookies["token"];
    if (cookies == null) {
      return NextResponse.redirect("/login");
    } else {
      return NextResponse.next();
    }
  }
}
