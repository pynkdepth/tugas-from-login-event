import React, { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  isTextArea?: boolean;
}

export const FormInput = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, InputProps>(
  ({ label, error, type, isTextArea, ...props }, ref) => {
    const [show, setShow] = useState(false);
    const isPassword = type === 'password';

    return (
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="text-sm font-semibold text-slate-700">{label}</label>
        <div className="relative">
          {isTextArea ? (
            <textarea
              ref={ref}
              className={`w-full p-3 bg-white border rounded-xl transition-all outline-none focus:ring-2 focus:ring-indigo-400 ${error ? 'border-red-500' : 'border-slate-200 focus:border-indigo-400'}`}
              {...props as any}
            />
          ) : (
            <input
              ref={ref}
              type={isPassword ? (show ? 'text' : 'password') : type}
              className={`w-full p-3 bg-white border rounded-xl transition-all outline-none focus:ring-2 focus:ring-indigo-400 ${error ? 'border-red-500' : 'border-slate-200 focus:border-indigo-400'}`}
              {...props as any}
            />
          )}
          {isPassword && (
            <button 
              type="button" 
              onClick={() => setShow(!show)} 
              className="absolute right-4 top-3.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              {show ? "HIDE" : "SHOW"}
            </button>
          )}
        </div>
        {error && <p className="text-[11px] text-red-500 font-medium italic mt-1">*{error}</p>}
      </div>
    );
  }
);

export const Button = ({ 
  loading, 
  children, 
  variant = 'primary' // Defaultnya primary
}: { 
  loading: boolean, 
  children: React.ReactNode, 
  variant?: 'primary' | 'outline' 
}) => {
  
  // Logika pemilihan warna berdasarkan variant
  const variantStyles = variant === 'primary' 
    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100" 
    : "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 shadow-none";

  return (
    <button 
      type="submit"
      disabled={loading}
      className={`w-full font-bold py-3.5 rounded-xl shadow-lg transition-all active:scale-95 disabled:bg-slate-400 disabled:border-none disabled:text-white mt-2 ${variantStyles}`}
    >
      {loading ? "Menyimpan Data..." : children}
    </button>
  );
};