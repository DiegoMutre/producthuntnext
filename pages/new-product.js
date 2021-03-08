import styled from "styled-components";
import Layout from "../components/layouts/layout";
import { Error, Field, Form, InputSubmit } from "../components/ui/Form";
import useValidation from "../hooks/useValidation";
import validateCreateAccount from "../validation/validateCreateAccount";
import firebase from "../firebase";
import { useState } from "react";
import router from "next/router";

const NewProductHeading = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

const initialState = {
    name: "",
    company: "",
    image: "",
    url: "",
    description: "",
};

const NewProduct = () => {
    const [error, setError] = useState("");

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
    } = useValidation(initialState, validateCreateAccount, createProduct);

    function createProduct() {
        console.log("Creating product...");
    }

    const { name, company, image, url, description } = values;

    return (
        <>
            <Layout>
                <NewProductHeading>New Product</NewProductHeading>
                <Form onSubmit={handleSubmit} noValidate>
                    <fieldset>
                        <legend>General Information</legend>
                        <Field>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your name"
                                value={name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>
                        {errors.name && <Error>{errors.name}</Error>}

                        <Field>
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                name="company"
                                id="company"
                                placeholder="Your company"
                                value={company}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>
                        {errors.company && <Error>{errors.company}</Error>}

                        <Field>
                            <label htmlFor="image">Image</label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                value={image}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>
                        {errors.image && <Error>{errors.image}</Error>}

                        <Field>
                            <label htmlFor="url">URL</label>
                            <input
                                type="url"
                                name="url"
                                id="url"
                                value={url}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>
                        {errors.url && <Error>{errors.url}</Error>}
                    </fieldset>
                    <fieldset>
                        <legend>About your product</legend>
                        <Field>
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                value={description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Field>
                        {errors.description && (
                            <Error>{errors.description}</Error>
                        )}
                    </fieldset>
                    {error && <Error>{error}</Error>}
                    <InputSubmit type="submit" value="Create Product" />
                </Form>
            </Layout>
        </>
    );
};

export default NewProduct;
