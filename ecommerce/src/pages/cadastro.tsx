import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  cep: number;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const UserRegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<IFormData>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  console.log({ errors });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Cadastro</h1>
      <div>
        <label>Nome: </label>
        <input
          type="text"
          {...register("name", {
            required: "Nome é obrigatório",
            minLength: { value: 3, message: "Nome deve ter pelo menos 3 caracteres" },
          })}
        />
        <p>{errors.name?.message}</p>
      </div>
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
        <label>Telefone: </label>
        <input
          type="tel"
          {...register("phone", {
            pattern: {
              value: /^[0-9]{11}$/,
              message: "Número de celular inválido (Deve ter 11 dígitos)",
            },
          })}
        />
        <p>{errors.phone?.message}</p>
      </div>
      <div>
        <label>Endereço: </label>
        <input
          type="text"
          {...register("address", {
            required: "Endereço é obrigatório",
          })}
        />
        <p>{errors.address?.message}</p>
      </div>
      <div>
        <label>CEP: </label>
        <input
          type="text"
          {...register("cep", {
            required: "CEP é obrigatório",
          })}
        />
        <p>{errors.cep?.message}</p>
      </div>
      <div>
        <label>Logradouro: </label>
        <input type="text" {...register("street")} />
      </div>
      <div>
        <label>Número: </label>
        <input type="text" {...register("number")} />
      </div>
      <div>
        <label>Complemento: </label>
        <input type="text" {...register("complement")} />
      </div>
      <div>
        <label>Bairro: </label>
        <input type="text" {...register("neighborhood")} />
      </div>
      <div>
        <label>Cidade: </label>
        <input type="text" {...register("city")} />
      </div>
      <div>
        <label>Estado: </label>
        <input type="text" {...register("state")} />
      </div>
      <div>
        <label>Senha: </label>
        <input
          type="password"
          {...register("password", {
            required: "Senha é obrigatória",
            minLength: { value: 8, message: "Senha deve ter no mínimo 8 caracteres" },
          })}
        />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <label>Confirmação de Senha: </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirmação de senha é obrigatória",
            validate: (value) =>
              value === getValues("password") || "As senhas não coincidem",
          })}
        />
        <p>{errors.confirmPassword?.message}</p>
      </div>
      <div>
        <input
          type="checkbox"
          id="acceptTerms"
          {...register("acceptTerms", {
            required: "Você deve aceitar os termos de uso",
          })}
        />
        <label htmlFor="acceptTerms">
          <a href="https://google.com">Li e aceito os termos de uso.</a>
        </label>
        <p>{errors.acceptTerms?.message}</p>
      </div>
      <button type="submit">Cadastrar</button>
      <div>
        <p>
          Já tem uma conta? <a href="/login">Login</a>
        </p>
      </div>
    </form>
  );
};

export default UserRegistrationForm;
