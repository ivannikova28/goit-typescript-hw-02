import { FC, PropsWithChildren } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';

import toast from 'react-hot-toast';

import css from './SearchBar.module.css';

interface IProps extends PropsWithChildren {
    onSearch: (query: string) => void
}

interface IFormValues {
    query: string;
}

const SearchBar: FC<IProps> = ({ onSearch }) => {

    const handlerSubmit = (values: IFormValues, actions: FormikHelpers<IFormValues>) => {
        if (values.query.trim() !== '') {
            onSearch(values.query);
            actions.resetForm();
        } else {
            toast.error("The search field is empty. Please try again!");
        }

        return
    }

    return (
        <Formik
            initialValues={{ query: "" }}
            onSubmit={handlerSubmit}
        >
            <Form className={css.form}>
                <Field className={css.input} type="text" name="query" placeholder="   Search images and photos" />
                <button className={css.button} type="submit">Search</button>
            </Form>
        </Formik>
    );
};

export default SearchBar
