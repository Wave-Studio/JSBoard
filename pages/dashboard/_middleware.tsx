import { NextRequest, NextResponse } from 'next/server'
import { useCookies } from 'react-cookie'

export function middleware(req: NextRequest){
	const cookies = req.cookies["token"];
	if (cookies == null) {
		return NextResponse.redirect("/login");
	} else {
		return NextResponse.next();
	}
}