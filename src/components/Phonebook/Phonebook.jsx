import FormContacts from "components/FormContacts/FormContacts";
import FormFind from "components/FormFind/FormFind";
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addContacts, deleteContacts } from "redux/contacts/contactsSlice";
import { setFilter } from "redux/filter/filterSlice";

const Phonebook = () => {

    const contacts = useSelector((state) => state.contacts);
    const filter = useSelector((state) => state.filter);

    const dispatch = useDispatch()

    const onSubmit = (user) => {
        if (contacts && contacts.find(contact => {
            const normalizeUser = user.name.toLowerCase();
            return contact.name.toLowerCase() === normalizeUser
        })) { alert("Даний контакт вже є в телефонній") }
        else {
            dispatch(addContacts(user))
        }
    }

    const handleChange = e => {
        dispatch(setFilter(e.target.value))
    };

    const handleRemove = e => {
        dispatch(deleteContacts(e.currentTarget.parentNode.id))

    };

    const getVizibleContacts = () => {
        if (filter) {
            const normalizedFilter = filter.toLowerCase();

            if (contacts) {
                return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
            };
        }

        return contacts

    };

    return (
        <>
            <h1 className={css.title}>Phonebook</h1>

            <FormContacts onSubmit={onSubmit} name />

            <h2 className={css.title}>Contacts</h2>

            <FormFind handleChange={handleChange} value={filter} />

            <ul className={css.contactsList}>
                {getVizibleContacts().map((contact) =>
                    <li className={css.item} key={contact.id} id={contact.id}>
                        {contact.name} {contact.number}
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleRemove}></button>
                    </li>
                )}
            </ul>
        </>
    );

};

export default Phonebook;