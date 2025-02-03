import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(4, { message: "Введите корректный пароль" });

export const formLoginSchema = z.object({
  email: z.string().email({ message: "Введите корректную почту" }).min(5),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      firstname: z.string().min(2, { message: "Введите имя" }),
      lastname: z.string().min(2, { message: "Введите фамилию" }),
      confirmPassword: passwordSchema,
    }),
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
