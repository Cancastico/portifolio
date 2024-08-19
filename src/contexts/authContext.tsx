/* eslint-disable no-unused-vars */
"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface RegisterFormInputs {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  signup: (data: RegisterFormInputs) => void;
  login: (data: LoginFormInputs) => void;
  logout: () => void;
}


type Permission = {
  [key: string]: {
    ler: boolean,
    criar: boolean,
    atualizar: boolean,
    deletar: boolean
  }
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("O provedor não foi autenticado");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();


  // FICA VERIFICANDO SE O TOKEN EXPIROU
  // async function scheduleTokenExpiration(exp: any, callback: () => void) {

  //   const expirationTime = exp * 1000; // Multiplica por 1000 para obter em milissegundos

  //   const currentTime = Date.now() - (3 * 60 * 60 * 1000); // Ajusta para GMT-0300 (Brasília)

  //   const brtOffset = 3 * 60 * 60 * 1000; // 3 horas de offset para GMT-0300 (Brasília)
  //   const adjustedExpirationTime = expirationTime - brtOffset; // Ajusta para GMT

  //   const timeUntilExpiration = adjustedExpirationTime - currentTime;

  //   if (20000 <= 0) {
  //     await newParams();
  //     return;
  //   }

  //   // Defina a quantidade de segundos antes da expiração que você deseja disparar a função
  //   const timeBeforeExpiration = Math.max(timeUntilExpiration - 5000, 0);

  //   setTimeout(callback, timeBeforeExpiration);
  // }



  //* ROTAS AUTENTICADA||||||||||||||||||||
  let jwtToken: any;
  if (typeof window !== "undefined") {
    jwtToken = localStorage.getItem("token");
  }

  useEffect(() => {
    if (!jwtToken) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [jwtToken, router]);

  //*|||||||||||||||||||||||||||||||||||||||


  const signup = async (data: RegisterFormInputs) => {
    await axios.post("/api/auth/register", data).then((response) => {
      if (response && response.status == 200 || response.status == 201) {

        localStorage.setItem("token", response.data.token);

        setIsAuthenticated(response.status == 200 || response.status == 201);

        router.push("/myblog")

      } else {
        //ERRO DO USUARIO
        setIsAuthenticated(false);
        throw new Error("Bad Request" + "Credenciais Inválidas");
      }
    }).catch((error: any) => {
      //ERRO DA API
      throw new Error('Internal Server Error' + error.response.data.error);
    })
  };


  const login = async (data: LoginFormInputs) => {
    await axios.post("/api/auth/login", data).then((response) => {
      if (response && response.status == 200 || response.status == 201) {
        console.log(response.data)
        localStorage.setItem("token", response.data.token);

        setIsAuthenticated(response.status == 200 || response.status == 201);

        router.push("/myblog")

      } else {
        //ERRO DO USUARIO
        setIsAuthenticated(false);
        throw new Error("Bad Request" + "Credenciais Inválidas");
      }
    }).catch((error: any) => {
      //ERRO DA API
      throw new Error('Internal Server Error' + error.response.data.error);
    })
  };

  const logout = async () => {
    setIsAuthenticated(false);
    localStorage.clear();
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};