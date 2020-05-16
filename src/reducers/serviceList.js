import {nanoid} from 'nanoid';
import {SAVE_SERVICE, REMOVE_SERVICE, FILTER_SERVICE} from '../actions/actionTypes'

const initialState = {items:[
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
],
filterText: ''
};

export default function serviceListReducer(state = initialState, action) {
  let newList = state.items;
  switch (action.type) {
    case SAVE_SERVICE:
      const {id, name, price} = action.payload;      
      if (!id) {
        newList = [...newList, {id: nanoid(), name, price: Number(price)}] 
      } else {
        newList = newList.map(o => o.id !== id ? o : {id:id, name:name, price: Number(price)});         
      }
      return {...state, items: newList } 
    case REMOVE_SERVICE:
      const {id: idToRemove} = action.payload;       
      newList = state.items.filter(service => service.id !== idToRemove);
      return {...state, items: newList} 
    case FILTER_SERVICE:       
      const {filterText} = action.payload;
      return {...state, filterText: filterText} 
    default:
      return state;
  }
}
