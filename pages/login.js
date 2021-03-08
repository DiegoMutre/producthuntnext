import styled from "styled-components";
import Layout from "../components/layouts/layout";
import { Error, Field, Form, InputSubmit } from "../components/ui/Form";
import useValidation from "../hooks/useValidation";
import validateCreateAccount from "../validation/validateCreateAccount";
import firebase from "../firebase";
import { useState } from "react";
import router from "next/router";
import validateLogin from "../validation/validateLogin";

const LoginHeading = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

const initialState = {
    email: "",
    password: "",
};

const Login = () => {
    const [error, setError] = useState("");

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
    } = useValidation(initialState, validateLogin, login);

    const { email, password } = values;

    async function login() {
        try {
            await firebase.login(email, password);
            router.push("/");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <Layout>
                <LoginHeading>Login</LoginHeading>
                <Form onSubmit={handleSubmit} noValidate>
                    <Field>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            value={email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Field>
                    {errors.email && <Error>{errors.email}</Error>}
                    <Field>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Your password"
                            value={password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Field>
                    {errors.password && <Error>{errors.password}</Error>}
                    {error && <Error>{error}</Error>}
                    <InputSubmit type="submit" value="Log in" />
                </Form>
            </Layout>
        </>
    );
};

export default Login;
