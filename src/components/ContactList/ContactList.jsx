import { useFiltredContacts } from "../../hooks/useFiltredContacts";
import { ContactItem } from "./ContactsItem/ContactsItem";

export const ContactList = () => {
  const { filtredContacts, error } = useFiltredContacts();

  return (
    <ul>
      {filtredContacts &&
        !error &&
        filtredContacts?.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};
