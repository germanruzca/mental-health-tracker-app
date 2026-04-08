declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_WS_URL: string;
    NEXTAUTH_SECRET: string;
    NEXT_PUBLIC_NEST_API_URL: string;
  }
}
