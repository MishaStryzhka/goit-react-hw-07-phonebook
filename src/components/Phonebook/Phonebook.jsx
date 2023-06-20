import FormContacts from "components/FormContacts/FormContacts";
import FormFind from "components/FormFind/FormFind";
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { addContact, fetchContacts } from "redux/operations";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ItemContact from "components/itemContact/itemContact";

const Phonebook = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") || "";
    

    const dispatch = useDispatch()

    const { contacts, isLoading, isLoadingPost, error } = useSelector(getContacts);

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    const onSubmit = (user) => {
        if (contacts && contacts.find(contact => {
            const normalizeUser = user.name.toLowerCase();
            return contact.name.toLowerCase() === normalizeUser
        })) { alert("Даний контакт вже є в телефонній") }
        else {
            dispatch(addContact(user))
        }
    }

    const handleChange = e => {
        setSearchParams({ filter: e.target.value })
    };

    const getVizibleContacts = () => {
        if (filter) {
            const normalizedFilter = filter.toLowerCase();
            
            const valueFilter = searchParams.get("filter");
            if(valueFilter!==filter){
                setSearchParams({ filter: normalizedFilter })
            }
            if (contacts) {
                return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
            };
        }

        return contacts

    };

    return (
        <>
            <h1 className={css.title}>Phonebook</h1>

            <FormContacts onSubmit={onSubmit} isLoadingPost={isLoadingPost} name />

            <h2 className={css.title}>Contacts</h2>

            <FormFind handleChange={handleChange} value={filter} />

            {isLoading && !error && <b>Request in progress...</b>} 
            {error && <b>{error};</b>} 

            <ul className={css.contactsList}>
                {getVizibleContacts().map((contact) =>
                    <ItemContact key={contact.id} contact={contact} itemStyle={css.item}/>
                )}
            </ul>
        </>
    );

};

export default Phonebook;