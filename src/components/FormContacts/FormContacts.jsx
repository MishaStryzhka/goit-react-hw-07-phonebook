import PropTypes from 'prop-types';
import css from './FormContacts.module.css';
import { useState } from 'react';

const FormPhonebook = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        reset();
    }

    const reset = () => {
        setName("");
        setNumber("");
    };

    return (
        <>
            <form className={css.form} onSubmit={handleSubmit} >
                <label className={css.label}>
                    <span className={css.labelText}>Name</span>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label className={css.label}>
                    <span className={css.labelText}>Number</span>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                </label>
                <button className={css.button} type="submit">Add contact</button>
            </form>
        </>
    );
};

FormPhonebook.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default FormPhonebook;