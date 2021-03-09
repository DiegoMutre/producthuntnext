import styled from "styled-components";
import Layout from "../components/layouts/layout";
import { Error, Field, Form, InputSubmit } from "../components/ui/Form";
import useValidation from "../hooks/useValidation";
import validateProduct from "../validation/validateProduct";
import firebase, { FirebaseContext } from "../firebase";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import FileUploader from "react-firebase-file-uploader";

const NewProductHeading = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

const initialState = {
    name: "",
    company: "",
    // image: "",
    url: "",
    description: "",
};

const NewProduct = () => {
    const [imageName, setImageName] = useState("");
    const [upload, setUpload] = useState(false);
    const [progress, setProgress] = useState(0);
    const [imageUrl, setImageUrl] = useState("");

    const [error, setError] = useState("");

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
    } = useValidation(initialState, validateProduct, createProduct);

    const { user } = useContext(FirebaseContext);

    const router = useRouter();

    function createProduct() {
        if (!user) {
            return router.push("/login");
        }

        const product = {
            name,
            company,
            url,
            imageUrl,
            description,
            votes: 0,
            comments: [],
            created: Date.now(),
        };

        firebase.db.collection("products").add(product);
    }

    const handleUploadStart = () => {
        setProgress(0);
        setUpload(true);
    };

    const handleUploadProgress = progress => setProgress({ progress });

    const handleUploadError = error => {
        setUpload(error);
        console.error(error);
    };

    const handleUploadSuccess = name => {
        setProgress(100);
        setUpload(false);
        setImageName(name);
        firebase.storage
            .ref("products")
            .child(name)
            .getDownloadURL()
            .then(downloadURL => {
                console.log(downloadURL);
                setImageUrl(downloadURL);
            });
    };

    const { name, company, url, description } = values;

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
                            <FileUploader
                                name="image"
                                id="image"
                                accept="image/*"
                                randomizeFilename
                                storageRef={firebase.storage.ref("products")}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleUploadProgress}
                            />
                        </Field>

                        <Field>
                            <label htmlFor="url">URL</label>
                            <input
                                type="url"
                                name="url"
                                id="url"
                                placeholder="Your url"
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
