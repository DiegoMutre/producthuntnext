import styled from "styled-components";
import Layout from "../components/layouts/layout";
import { Error, Field, Form, InputSubmit } from "../components/ui/Form";
import useValidation from "../hooks/useValidation";
import validateCreateAccount from "../validation/validateCreateAccount";

const CreateAccountHeading = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

const initialState = {
    username: "",
    email: "",
    password: "",
};

const CreateAccount = () => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
    } = useValidation(initialState, validateCreateAccount, createAccount);

    // * Only for test
    function createAccount() {
        console.log("Creating account...");
    }

    const { username, email, password } = values;

    return (
        <>
            <Layout>
                <CreateAccountHeading>Create Account</CreateAccountHeading>
                <Form onSubmit={handleSubmit} noValidate>
                    <Field>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Your name"
                            value={username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Field>
                    {errors.username && <Error>{errors.username}</Error>}
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
                    <InputSubmit type="submit" value="Create Account" />
                </Form>
            </Layout>
        </>
    );
};

export default CreateAccount;
