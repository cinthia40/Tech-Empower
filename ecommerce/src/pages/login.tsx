import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    // Lógica de autenticação ...
    console.log(data);
  };

  console.log({ errors });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label>E-mail: </label>
        <input
          type="email"
          {...register("email", {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "E-mail inválido",
            },
          })}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Senha: </label>
        <input type="password" {...register("password")} />
      </div>
      <button type="submit">Entrar</button>
      <div>
          <p>Não tem uma conta? <a href='/cadastrar'>Cadastre-se</a>
          </p>
          </div>
    </form>
  );
};

export default LoginForm;

