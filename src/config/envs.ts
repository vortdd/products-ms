import 'dotenv/config';
import { z } from 'zod';

interface EnvVarsProps {
  PORT: number;
  DATABASE_URL: string;
}

const envSchema = z.object({
  PORT: z.coerce.number(),
  DATABASE_URL: z.string(),
});

const { error, data } = envSchema.safeParse(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVarsProps = data;

export const envs = {
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
};
