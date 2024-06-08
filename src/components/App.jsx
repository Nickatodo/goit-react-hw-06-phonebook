import FormContac from './FormContac';
import FilterContac from './FilterContac';
import ListContac from './ListContac';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <FormContac />
      <h2>Contacts</h2>

      <FilterContac />
      <ListContac />
    </>
  );
};
