import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Link from "next/link";

import api from "../../../utils/api";

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
  .link-register{
    text-decoration: none;
    color: #000;
  }
`;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handle(e) {
    const newData = {...data}
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submit(e){
    e.preventDefault();
    api.post('/auth/authenticate', {
      email: data.email,
      password: data.password
    }).then(res => {
      console.log(res.data)
    })
  }

  return (
    <Wrapper>
      <h1 className="title-form">Entrar</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          className="input-email"
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          onChange={(e) => handle(e)}
          value={data.email}
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
          onChange={(e) => handle(e)}
          value={data.password}
        />
        <p className="text-login">Não possui login? <Link href="/registerPage"><a className="link-register"><strong>Cadastre-se</strong></a></Link></p>

        <input onSubmit={() => createAccount()} className="enviar" type="submit" value="Entrar" />
      </form>
    </Wrapper>
  );
}

export default LoginForm;
