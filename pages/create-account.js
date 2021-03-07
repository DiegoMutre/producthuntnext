import styled from "styled-components";
import Layout from "../components/layouts/layout";
import { Field, Form, InputSubmit } from "../components/ui/Form";

const CreateAccountHeading = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

const CreateAccount = () => {
    return (
        <>
            <Layout>
                <CreateAccountHeading>Create Account</CreateAccountHeading>
                <Form>
                    <Field>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Your name"
                        />
                    </Field>
                    <Field>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                        />
                    </Field>
                    <Field>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Your password"
                        />
                    </Field>
                    <InputSubmit type="submit" value="Create Account" />
                </Form>
            </Layout>
        </>
    );
};

export default CreateAccount;
