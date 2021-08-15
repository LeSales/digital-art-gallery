import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  margin-top: 10vh;
  width: 30vw;
  height: 80vh;
  min-height: 50vh;
  background-color: #fff;

  .title-form {
    font-size: x-large;
  }

  form {
    display: flex;
    flex-direction: column;
  }
  .input-name,
  .input-email,
  .input-senha,
  .input-confirm-senha {
    width: 20vw;
    height: 4rem;
    border-radius: 5px;
    border: none;
    border-bottom: 1px solid #cecece;
    margin-bottom: 1.5rem;

    :focus {
      outline: none;
    }

    ::placeholder {
      padding-left: 0.5rem;
    }
  }

  .enviar{
    margin-top: 2rem;
    width: 50%;
    align-self:center;
    height: 3rem;
    background-color: #000;
    border:none;
    color: #fff;
    border-radius:5px;
    cursor: pointer;

    :hover{
      background-color:#202020;
    }
  }

  .text-login{
    font-size: 11px;
    align-self:center;
  }
  .link-login{
    text-decoration: none;
    color: #000;
  }
`;

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Wrapper>
      <h1 className="title-form">Cadastre-se</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-name"
          type="text"
          placeholder="Nome"
          {...register("Nome", { required: true, maxLength: 80 })}
        />
        <input
          className="input-email"
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="input-senha"
          type="text"
          placeholder="Senha"
          {...register("Senha", {
            required: true,
            max: 16,
            min: 6,
            maxLength: 14,
          })}
        />
        <input
          className="input-confirm-senha"
          type="text"
          placeholder="Confirmar senha"
          {...register("Confirmar senha", {
            required: true,
            max: 16,
            min: 6,
            maxLength: 15,
          })}
          style={{marginBottom:0}}
        />
        <p className="text-login">Já possui registro? Faça o <Link href="/loginPage"><a className="link-login"><strong>Login</strong></a></Link></p>

        <input className="enviar" type="submit"  value="Enviar"/>
      </form>
    </Wrapper>
  );
}

export default RegisterForm;
