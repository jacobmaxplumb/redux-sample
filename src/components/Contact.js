import { connect } from "react-redux";
import { addContact, updateName, updatePhone } from "../actions/contact.actions";

const Contact = (props) => {
    return(
        <div>
            <input value={props.contact.name} onChange={(e) => props.updateName(e.target.value)} />
            <input value={props.contact.phone} onChange={(e) => props.updatePhone(e.target.value)} />
            <button onClick={() => props.addContact()}>Submit</button>
            {props.contacts.map((c, i) => (
                <div key={i}>{c.name} - {c.phone}</div>
            ))}
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        contacts: state.contact.contacts,
        contact: state.contact.contact
    }
}

export default connect(mapStateToProps, {updateName, updatePhone, addContact})(Contact);