import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from '../redux/slices/ContactSlice';

export default function FormContac() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactStore.contacts);

  const [newContact, setNewContact] = useState({
    id: nanoid(),
    name: '',
    number: '',
  });

  function handleOnChange(e) {
    setNewContact(oldState => {
      return { ...oldState, [e.target.name]: e.target.value };
    });
  }

  function addContac() {
    if (newContact.name !== '' && newContact.number !== '') {
      setNewContact(oldState => {
        return { ...oldState, id: nanoid() };
      });
      let old = [];
      old = contacts.filter(contact =>
        contact.name.toLowerCase().includes(newContact.name.toLowerCase())
      );
      if (old.length === 0) {
        dispatch(addContactAction(newContact));
        setNewContact({ id: nanoid(), name: '', number: '' });
      } else {
        alert(newContact.name + ' is already in contacts.');
      }
    } else {
      alert('name or number cannot be empty.');
    }
  }

  return (
    <>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newContact.name}
            onChange={handleOnChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </div>
        <div>
          <label>Number</label>
          <input
            type="tel"
            name="number"
            value={newContact.number}
            onChange={handleOnChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="button" onClick={addContac}>
          Add Contact
        </button>
      </form>
    </>
  );
}
