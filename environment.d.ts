interface EnvironmentVariables {
  readonly PORT: string
}

declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {}
}

interface ImportMetaEnv extends EnvironmentVariables {}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'bun' {
  interface Env extends EnvironmentVariables {}
}
