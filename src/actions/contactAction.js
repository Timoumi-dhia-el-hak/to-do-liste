import {CREATE_NEW_CONTACT,REMOVE_CONTACT,EDIT_CONTACT}from './actionType'

export function createContact  (contact)  {
  return {
    type: CREATE_NEW_CONTACT,
    payload:contact
  }
};

export function deleteContact  (id)  {
  return {
      type:REMOVE_CONTACT, payload:id
  }
};

export function editContact  (newcontact, index)  {
  return {
    type: EDIT_CONTACT,payload:newcontact, index
  }
};
