import styled from "styled-components";

export const Form = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;
`;

export const Field = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    label {
        flex: 0 0 150px;
        font-size: 1.8rem;
    }

    input {
        flex: 1;
        padding: 1rem;
    }
`;
