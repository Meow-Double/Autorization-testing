import { validateEmail } from '@/pages/AuthPage/utils/validateEmail';
import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(40, { message: 'Максимальная длина 40 символов' })
    .refine((email) => validateEmail(email), { message: 'Некорректная почта' }),
  password: z
    .string()
    .min(6, { message: 'Минимальная длина 6 символов' })
    .max(16, { message: 'Максимальная длина 16 символа' })
});

export type LoginSchema = z.infer<typeof loginSchema>;
