import Contact from '../Contact/Contact';
import './ContactList.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="contact-list">
    {contacts.map(contact => (
      <Contact key={contact.id} {...contact} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactList;