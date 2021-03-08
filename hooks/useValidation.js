import { useEffect, useState } from "react";

const useValidation = (initialState, validate, callback) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noErrors = Object.keys(errors).length === 0;

            if (noErrors) {
                callback(); // Function that is executed in the component
            }
            setSubmitForm(false);
        }
    }, [submitForm]);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitForm(true);
    };

    const handleBlur = () => {
        const validationErrors = validate(values);
        setErrors(validationErrors);
    };

    return {
        values,
        errors,
        submitForm,
        handleChange,
        handleSubmit,
        handleBlur,
    };
};

export default useValidation;
