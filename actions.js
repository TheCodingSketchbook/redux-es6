export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export function addNote(note) {
    return { type: ADD_NOTE, note };
}

export function deleteNote(index) {
    return { type: DELETE_NOTE, index }
}