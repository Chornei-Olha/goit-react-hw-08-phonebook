import { ContactCard } from 'components/ContactCard/ContactCard';
import { Filter } from 'components/Filter/Filter';
import { useContacts } from 'hooks/useContacts';
import { Card, Contacts, List } from './ContactsList.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

export const ContactsList = () => {
  const { filter, contacts, setFilter, filteredContacts } = useContacts();
  const showList = contacts.length > 0;
  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(contactsOperations.fetch());
  }, [dispatch]);

  return (
    showList && (
      <Contacts>
        <Filter setFilter={setFilter} filter={filter} />
        <List>
          {filteredContacts.map(contact => {
            return (
              <Card key={contact.id}>
                <ContactCard contact={contact} />
              </Card>
            );
          })}
        </List>
      </Contacts>
    )
  );
};
