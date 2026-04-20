import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormData } from '../../schemas/formSchema';
import { FormInput, Button } from '../atoms/FormInputs';

export const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    // Simulasi loading 2 detik sesuai tugas (async/await)
    await new Promise(r => setTimeout(r, 2000));
    console.log("Data Pendaftaran:", data);
    alert("Berhasil! Cek console log untuk melihat data.");
    reset();
  };

  return (
    <div className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">Daftar Event</h2>
        <p className="text-slate-500 text-sm font-medium mt-1">Silakan lengkapi formulir di bawah</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Nama Lengkap" placeholder="Masukkan nama" {...register('nama')} error={errors.nama?.message} />
        <FormInput label="Email" type="email" placeholder="nama@email.com" {...register('email')} error={errors.email?.message} />
        <FormInput label="Password" type="password" placeholder="Min. 8 karakter" {...register('password')} error={errors.password?.message} />
        
        <div className="flex flex-col gap-1.5 mb-4">
          <label className="text-sm font-semibold text-slate-700">Kategori Event</label>
          <select 
            {...register('kategori')} 
            className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
          >
            <option value="">Pilih Kategori</option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Mobile Apps">Mobile Apps</option>
          </select>
          {errors.kategori && <p className="text-[11px] text-red-500 font-medium italic mt-1">*{errors.kategori.message}</p>}
        </div>

        <FormInput label="Bio Singkat" isTextArea placeholder="Tuliskan motivasimu..." {...register('bio')} error={errors.bio?.message} />
        
        <Button loading={isSubmitting}>Kirim Pendaftaran</Button>
      </form>
    </div>
  );
};