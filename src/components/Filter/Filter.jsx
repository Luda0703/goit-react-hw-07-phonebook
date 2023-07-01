import { Div, Label, Input } from './Filter.styled';
import { setStatusFilter } from 'Redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'Redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input
          type="name"
          value={filter}
          onChange={e => dispatch(setStatusFilter(e.currentTarget.value))}
        />
      </Label>
    </Div>
  );
};
