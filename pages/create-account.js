import Layout from "../components/layouts/layout";
import { Field, Form } from "../components/ui/Form";

const CreateAccount = () => {
    return (
        <>
            <Layout>
                <h1>Create Account</h1>
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
                    <input type="submit" value="Create Account" />
                </Form>
            </Layout>
        </>
    );
};

export default CreateAccount;
