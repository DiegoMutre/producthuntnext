import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    position: relative;
`;

const InputText = styled.input`
    border: 1px solid var(--gray3);
    padding: 1rem;
    min-width: 300px;
`;

const ButtonSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url("/static/img/search.png");
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: #fff;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;

const Searcher = () => {
    const [search, setSearch] = useState("");

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (search.trim() === "") {
            return;
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputText
                type="text"
                placeholder="Search Products"
                onChange={handleChange}
            />

            <ButtonSubmit type="submit"></ButtonSubmit>
        </Form>
    );
};

export default Searcher;
