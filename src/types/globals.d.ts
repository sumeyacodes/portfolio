import { Clerk } from "@clerk/nextjs/server";

// Create a type for the roles
export type Roles = "admin";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role: Roles;
    };
  }
}
export {};
