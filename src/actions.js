export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SET_TAG = 'SET_TAG';

export function addNote(note, tags) {
    return { type: ADD_NOTE, text, tags };
}

export function deleteNote(index) {
    return { type: DELETE_NOTE, index }
}

export function filter(tag) {
    return { type: SET_TAG, tag}
}
