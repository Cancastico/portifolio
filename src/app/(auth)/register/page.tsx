'use client';

import Navbar from '@/components/navbar/navbar';
import { useAuthContext } from '@/contexts/authContext';
import { ThemeProvider } from '@/contexts/theme';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface RegisterFormInputs {
  name: string;
  username: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const { signup } = useAuthContext();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();
  const [registerError, setRegisterError] = useState('');
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    setRegisterError('');
    try {
      signup(data);
    } catch (error: any) {
      setRegisterError(error.response?.data?.error || 'Erro ao registrar');
    }
  };

  return (
    <ThemeProvider>
      <Navbar />
      <div className="flex justify-center items-center p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>

          {registerError && <p className="text-red-500 text-sm mb-4">{registerError}</p>}

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Nome:</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'O nome é obrigatório' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              {...register('username', { required: 'O username é obrigatório' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'O email é obrigatório' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Senha:</label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'A senha é obrigatória' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Registrar
          </button>
        </form>
      </div>
    </ThemeProvider>
  );
}
