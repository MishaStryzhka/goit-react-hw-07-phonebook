import { useDispatch } from "react-redux";
import { removeContact } from "redux/operations";

const ItemContact = ({contact, itemStyle}) => {
    const dispatch = useDispatch()

    const handleClick = (e)=>{
        dispatch(removeContact(e.currentTarget.parentNode.id))
    }
    return  <li className={itemStyle} key={contact.id} id={contact.id}>
        <b>{contact.name}</b> {contact.phone}
        <button type="button" className="btn-close" aria-label="Close" onClick={handleClick}></button>
    </li>
};

export default ItemContact;