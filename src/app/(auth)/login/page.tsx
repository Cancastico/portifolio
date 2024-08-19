'use client';

import Navbar from '@/components/navbar/navbar';
import { LoginFormInputs, useAuthContext } from '@/contexts/authContext';
import { ThemeProvider } from '@/contexts/theme';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';



export default function Login() {
  const { login } = useAuthContext()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [loginError, setLoginError] = useState('');

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoginError('');

    try {
      login(data)
    } catch (error: any) {
      setLoginError(error.response?.data?.error || 'Erro ao fazer login');
    }
  };

  return (
    <ThemeProvider>
      <Navbar />
      <div className="flex justify-center items-center h-screen">

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}

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
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </ThemeProvider>
  );
}
