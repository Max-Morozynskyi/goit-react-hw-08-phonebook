export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsEditing = state => state.contacts.isEditing;
export const selectError = state => state.contacts.error;