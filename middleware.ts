import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/pricing", "/api/get-wallpapers", "/api/get-user-info","/sign-in"],

  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      if (auth.isApiRoute) {
        return NextResponse.json(
          { code: -2, message: "no auth" },
          { status: 401 }
        );
      } else {
        return NextResponse.redirect(new URL("/sign-in", req.url));
      }
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api)(.*)"],
};
