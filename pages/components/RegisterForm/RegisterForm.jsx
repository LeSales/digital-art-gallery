import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

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
    background-color: #d3d3d3;

    .title-form{
        
    }
    
    form{
        display: flex;
        flex-direction: column;
    }
    .input-name, .input-email, .input-senha, .input-confirm-senha{
        margin-bottom: 1rem;
        width: 20vw;
        height: 2.5rem;
        border-radius: 5px;
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
        />

        <input type="submit" />
      </form>
    </Wrapper>
  );
}

export default RegisterForm;
