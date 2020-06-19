import * as Yup from 'yup'

const userFormSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, 'Name must be at least two characters.')
    .required("Please provide your name."),
  size: Yup
    .string()
    .required('You must provide a size.'),
  specialInstructions: Yup
    .string()
})

export default userFormSchema