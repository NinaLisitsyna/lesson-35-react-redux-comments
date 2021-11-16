// common file redux.

// f которая умеет организовывать хранилища данных from redux
import { createStore } from "redux"; 
import reducer from "./reducer";


//create storage
const store = createStore( reducer );

export default store;