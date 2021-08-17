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

  .enviar {
    margin-top: 2rem;
    width: 50%;
    align-self: center;
    height: 3rem;
    background-color: #000;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      background-color: #202020;
    }
  }

  .text-login {
    font-size: 11px;
    align-self: center;
  }
  .link-login {
    text-decoration: none;
    color: #000;
  }
`;

function RegisterForm() {
  const {
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handle(e) {
    const newData = {...data}
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submit(e){
    e.preventDefault();
    api.post('/auth/register', {
      name: data.name,
      email: data.email,
      password: data.password
    }).then(res => {
      console.log(res.data)
    })
  }

  return (
    <Wrapper>
      <h1 className="title-form">Cadastre-se</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          id="name"
          className="input-name"
          type="text"
          placeholder="Nome"
          {...register("Nome", { required: true, maxLength: 80 })}
          onChange={(e) => handle(e)}
          value={data.name}
        />
        <input
          id="email"
          className="input-email"
          type="email"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          onChange={(e) => handle(e)}
          value={data.email}
        />
        <input
          id="password"
          className="input-senha"
          type="password"
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

        <p className="text-login">
          Já possui registro? Faça o{" "}
          <Link href="/loginPage">
            <a className="link-login">
              <strong>Login</strong>
            </a>
          </Link>
        </p>

        <input
          onSubmit={() => createAccount()}
          className="enviar"
          type="submit"
          value="Enviar"
        />
      </form>
    </Wrapper>
  );
}

export default RegisterForm;
