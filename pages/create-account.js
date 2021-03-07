import Layout from "../components/layouts/layout";

const CreateAccount = () => {
    return (
        <>
            <Layout>
                <h1>Create Account</h1>
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Your password"
                        />
                    </div>
                    <input type="submit" value="Create Account" />
                </form>
            </Layout>
        </>
    );
};

export default CreateAccount;
