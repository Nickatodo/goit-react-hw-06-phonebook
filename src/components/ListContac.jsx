import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from '../redux/slices/ContactSlice';

export default function ListContac({ setContacs }) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactStore.contacts);
  const filter = useSelector(state => state.filterStore.filter);

  let filtradoForView = [];
  if (contacts != null) {
    filtradoForView = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  function handleDelete(evt) {
    let id = evt.target.id;
    dispatch(deleteContactAction(id));
  }

  return (
    <>
      <ul>
        {filtradoForView.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" id={contact.id} onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
