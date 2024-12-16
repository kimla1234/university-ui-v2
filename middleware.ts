// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {

//     console.log("Middleware triggered:", request.url);

//     const refreshToken = request.cookies.get("normplov-refresh-token");
//     const url = request.nextUrl.pathname;

//     if (url.startsWith("/test")) {
//         if (!refreshToken) {
//           console.log("No refresh token found, redirecting to login...");
//           return NextResponse.redirect(new URL("/login", request.url));
//         }
//         console.log("Refresh token found, allowing access to /test/anything...");
//       }

//     // Allow the request to proceed
//     return NextResponse.next();
// }


// export const config = {
//     matcher: "/test", 
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log("Middleware triggered:", request.url);

    // Retrieve the refresh token from cookies
    const refreshToken = request.cookies.get("normplov-refresh-token");

    // Check if the user is accessing the /test route or its subroutes
    const url = request.nextUrl.pathname;

    // If the path starts with /test and there's no refresh token, redirect to login
    if (url.startsWith("/test") || url.startsWith("/test-result")) {
        if (!refreshToken) {
            console.log("No refresh token found, redirecting to login...");
            return NextResponse.redirect(new URL("/login", request.url));
        }
        console.log("Refresh token found, allowing access to /test routes.");
    }

    // Allow the request to proceed for other cases
    return NextResponse.next();
}

// Apply the middleware to /test and all its subroutes
export const config = {
    matcher: ["/test/:path*", "/test-result/:path*"],
};
