import * as actions from './actions';
import { combineReducers } from 'redux';
import { List } from 'immutable';

const initialState = {
    tagFilter: null,
    notes: new List()
};

function getState(handlers, action, state) {
    return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state;
}

function tagFilter(state = null, action) {
    return getState({
        [actions.SET_TAG](state, action) {
            return action.tag;
        }
    }, action, state);
}

function notes(state = [], action) {
    return getState({
        [actions.ADD_NOTE](state, action) {
            return state.notes.push({
                text: action.text,
                tags: action.tags
            });
        },
        [actions.DELETE_NOTE](state, action) {
            return state.notes.delete(action.index);
        }
    }, action, state);
}

export default combineReducers({
    tagFilter,
    notes
});
