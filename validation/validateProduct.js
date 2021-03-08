export default function validateProduct(values) {
    let errors = {};
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (!values.name) {
        errors.name = "The username is required";
    }

    if (!values.company) {
        errors.company = "The company name is required";
    }

    if (!values.url) {
        errors.url = "The url is required";
    }

    if (!urlRegex.test(values.url)) {
        errors.url = "Insert a valid url";
    }

    if (!values.description) {
        errors.description = "The description is required";
    }

    return errors;
}
