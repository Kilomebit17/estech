export const requiredField = value => {
    if (!value) return 'field is required';
    return undefined
};
export const maxLengthCreator = (maxLength) => value => {
    if (value.length > maxLength) return `max field length is ${maxLength}`;
    return undefined
};
export const minLengthCreator = (minLength) => value => {
    if (value.length < minLength) return `min field length is ${minLength}`;
    return undefined
};

