import css from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup"

const UserSchema = Yup.object().shape({
    username: Yup.string().min(3, 'To short').max(50, 'To long').required('This is required!'),
    contact: Yup.string().min(3, 'To short').max(50, 'To long').required('This is required!'),
})

export default function ContactForm({ handleSubmit }) {
    const usernameFieldId = useId()
    const contactFieldId = useId()

    return (
        <Formik initialValues={{
            username: "",
            contact: "",
        }}
            validationSchema={UserSchema}
            
             onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm();
            }}
        >
            <Form className={css.form}>
                <div className={css.formContainer} >
                    <label htmlFor={usernameFieldId}>Name</label>
                    <Field
                        type="text"
                        name="username"
                        id={usernameFieldId}
                        className={css.inputText}
                    />
                    <ErrorMessage className={css.error} name="username" component="span" />
                </div>

                 <div className={css.formContainer}>
                    <label htmlFor={contactFieldId}>Contact</label>
                    <Field
                        type="text"
                        name="contact"
                        id={contactFieldId}
                        className={css.inputText}                    
                    />
                     <ErrorMessage className={css.error} name="contact" component="span" />
                </div>

                <button className={css.btnAdd} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}