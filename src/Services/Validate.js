import * as Yub from 'yup';

export const validateLogin = Yub.object().shape({
    username: Yub.string().required("email is empty"),
    password: Yub.string()
        .min(6, 'password must be at least 6 characters ')
        .required("password is empty")
})
export const validateRegister = Yub.object().shape({
    email: Yub.string().required("email is empty"),
    password: Yub.string()
        .min(6, 'password must be at least 6 characters')
        .required("password is empty")
})
export const validateChangePass = Yub.object().shape({
    password: Yub.string()
        .min(6, 'password must be at least 6 characters')
        .required("password is empty"),
    password_confirmation: Yub.string()
        .min(6, 'password must be at least 6 characters')
        .oneOf([Yub.ref('password'), null], 'password is not null')
        .required("password confirm is empty"),
})
export const validateAddress = Yub.object().shape({
    address: Yub.string().required("addres is empty"),
    phone: Yub.string().required("phone is empty"),
})
export const validateLoginAdmin = Yub.object().shape({
    username: Yub.string().required("email is empty"),
    password: Yub.string()
        .min(6, 'password must be at least 6 characters ')
        .required("password is empty")
})