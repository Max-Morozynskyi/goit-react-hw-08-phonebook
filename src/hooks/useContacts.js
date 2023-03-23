import { useSelector } from "react-redux";
import { selectContacts, selectFilter, selectIsLoading } from "redux/contacts/selectors";

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  return {
    contacts,
    filter,
    isLoading,
  }
}
