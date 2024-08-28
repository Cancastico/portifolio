'use client';

import Navbar from '@/components/navbar/navbar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthContext } from '@/contexts/authContext';
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

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    setRegisterError('');
    try {
      signup(data);
    } catch (error: any) {
      setRegisterError(error.response?.data?.error || 'Erro ao registrar');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen items-center p-6 bg-background-primary dark:bg-background-dark">
        <form onSubmit={handleSubmit(onSubmit)} className="border-primary border-[1px] shadow-primary p-6 rounded-lg shadow-md w-80 gap-3 flex flex-col">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-start">Registro</h2>

          {registerError && <p className="absolute -bottom-5 text-red-500 text-sm mb-4">*{registerError}</p>}

          <div className=" relative mb-4">
            <Label htmlFor="name" className="block text-gray-700">Nome:</Label>
            <Input
              type="text"
              id="name"
              {...register('name', { required: 'O nome é obrigatório' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.name && <p className="absolute -bottom-5 text-red-500 text-sm">*{errors.name.message}</p>}
          </div>

          <div className=" relative mb-4">
            <Label htmlFor="username" className="block text-gray-700">Username:</Label>
            <Input
              type="text"
              id="username"
              {...register('username', { required: 'O username é obrigatório' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.username && <p className="absolute -bottom-5 text-red-500 text-sm">*{errors.username.message}</p>}
          </div>

          <div className=" relative mb-4">
            <Label htmlFor="email" className="block text-gray-700">Email:</Label>
            <Input
              type="email"
              id="email"
              {...register('email', { required: 'O email é obrigatório' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.email && <p className="absolute -bottom-5 text-red-500 text-sm">*{errors.email.message}</p>}
          </div>

          <div className=" relative mb-4">
            <Label htmlFor="password" className="block text-gray-700">Senha:</Label>
            <Input
              type="password"
              id="password"
              {...register('password', { required: 'A senha é obrigatória' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            {errors.password && <p className="absolute -bottom-5 text-red-500 text-sm">*{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-foreground transition-colors"
          >
            Registrar
          </button>
        </form>
      </div>
    </>
  );
}
