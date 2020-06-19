import * as Yup from 'yup'

const userFormSchema = Yup.object().shape({
  name: Yup
    .string()
    .required("Please provide your name."),
  email: Yup
    .string()
    .email('Must be a valid email address.')
    .required('You must provide an email.'),
  password: Yup
    .string()
    .min(8, 'Your password must be at least 8 characters long.')
    .required('You must provide a password.')
})

export default userFormSchema