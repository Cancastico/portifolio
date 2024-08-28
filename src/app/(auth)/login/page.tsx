'use client';

import Navbar from '@/components/navbar/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoginFormInputs, useAuthContext } from '@/contexts/authContext';
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
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-background-primary dark:bg-background-dark">

        <form onSubmit={handleSubmit(onSubmit)} className=" p-6 rounded-lg w-80 border-primary border-[1px] shadow-md shadow-primary/40">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-start">Login</h2>

          {loginError && <p className="text-red-500 text-sm mb-4">*{loginError}</p>}

          <div className="mb-4">
            <Label htmlFor="email" className="block">Email:</Label>
            <Input
              placeholder='Digite seu E-mail'
              type="email"
              id="email"
              {...register('email', { required: 'O email é obrigatório' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none "
            />
            {errors.email && <p className="text-red-500 text-sm">*{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <Label htmlFor="password" className="block">Senha:</Label>
            <Input
              placeholder='Digite sua senha'
              type="password"
              id="password"
              {...register('password', { required: 'A senha é obrigatória' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none "
            />
            {errors.password && <p className="text-red-500 text-sm">* {errors.password.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-foreground transition-colors"
          >
            Entrar
          </Button>
        </form>
      </div>
    </>
  );
}
