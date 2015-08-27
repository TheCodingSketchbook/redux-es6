import { createStore } from 'react';
import notesApp from './reducers';

let store = createStore(notesApp);

export default store;