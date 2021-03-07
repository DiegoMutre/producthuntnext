import { useEffect, useState } from "react";

const useValidation = (initialState, validation, callback) => {
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
};

export default useValidation;
