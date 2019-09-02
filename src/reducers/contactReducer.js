import {
  REMOVE_CONTACT,
  CREATE_NEW_CONTACT,
  EDIT_CONTACT
} from "../actions/actionType";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_CONTACT:
      return [...state, action.payload];
    // return  ({...state,contacts:state.contacts.concat(action.payload)}) ;
    case REMOVE_CONTACT:
      return state.filter((e, i) => i !== action.payload);
    // return {contacts:state.contacts.filter(( contact,i) => i !== action.id)}
    case EDIT_CONTACT:
      return state.map((e, i) => {
      console.log(action.payload);
      console.log(action.index);
       console.log(i);

        if (i === action.index) {
          e.name = action.payload;
          
          return e;
        }
        return e;
      });

    // return ([...state.slice(0,i),{...state[i]=action.payload},...state.slice(i+1)])
    // return  ({...state,contacts:state.contacts.concat(action.payload)}) ;
    default:
      return state;
  }
};
