import styled from "styled-components";

const Button = styled.a`
    display: block;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: 0.8rem 2rem;
    margin: 2rem auto;
    background-color: ${props => props.bgColor || "#fff"};
    color: ${props => (props.bgColor ? "#fff" : "#000")};

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        cursor: pointer;
    }
`;

export default Button;
