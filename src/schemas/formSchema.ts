import { z } from "zod";

export const registerSchema = z.object({
  nama: z.string().min(1, "Nama lengkap wajib diisi"),
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  kategori: z.string().min(1, "Pilih salah satu kategori"),
  bio: z.string().min(10, "Bio minimal 10 karakter (masukkan pengalamanmu)"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;