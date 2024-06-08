import { useDispatch } from 'react-redux';
import { filterContactAction } from '../redux/slices/FilterSlice';

export default function FilterContac() {
  const dispatch = useDispatch();

  function handleChange(evt) {
    let value = evt.target.value;
    dispatch(filterContactAction(value));
  }
  return (
    <>
      <p>Find contact by name</p>
      <input type="text" name="name_filter" onChange={handleChange}></input>
    </>
  );
}
