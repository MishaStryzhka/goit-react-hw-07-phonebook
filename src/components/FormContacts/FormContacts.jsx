import PropTypes from 'prop-types';
import css from './FormContacts.module.css';
import { useState } from 'react';
import { FadeLoader } from 'react-spinners';

const FormPhonebook = ({ onSubmit, isLoadingPost }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, phone });
        reset();
    }

    const reset = () => {
        setName("");
        setPhone("");
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
                    <span className={css.labelText}>Phone</span>
                    <input
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone Phone must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </label>
                <button className={css.button} type="submit">Add contact 
                <FadeLoader
                    loading={isLoadingPost}
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    height={7}
                    margin={-10}
                    radius={0}
                    width={2}
                    style={{
                        top: 25,
                        display: "inherit",
                        position: "absolute",
                        fontSize: 0,
                        right: 30,
                        width: 30,
                        height: 30}}
                />
                </button>
            </form>
        </>
    );
};

FormPhonebook.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default FormPhonebook;