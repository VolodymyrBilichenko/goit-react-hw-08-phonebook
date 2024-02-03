import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteContacts } from '../redux/createSlice';
import style from './contactlist.module.scss';
import Avatar from '@mui/material/Avatar';
export const Contactslist = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  console.log(contacts);

  // const isLoading = useSelector(state => state.contacts.contacts.isLoading);

  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filter?.toLowerCase()) ||
      contact.number.includes(filter)
    );
  });

  const onDeleteContact = contactId => {
    dispatch(fetchDeleteContacts(contactId));
  };

  // if (isLoading) {
  //   return <p>loading...</p>;
  // }

  return (
    <>
      <div className={style.containerList}>
        <ul className={style.wrapper}>
          {filteredContacts.map(contactitem => {
            return (
              <>
                <div className={style.contact}>
                  <Avatar alt={contactitem.name} src="/static/images/avatar/1.jpg" className={style.contactImg}/>
                  <div className={style.info}>
                    
                    <h2 className={style.name}>{contactitem.name}</h2>
                    <p className={style.number}>{contactitem.number}</p>
                  </div>

                  <button
                    onClick={() => onDeleteContact(contactitem.id)}
                    className={style.button}
                  >
                    Delete
                  </button>
                </div>

                {/* <li key={contactitem.id} className={style.list}>
                  <h3 className={style.tittleName}>{contactitem.name}</h3>
                  <p> {contactitem.number}</p> */}

                {/* </li> */}
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
