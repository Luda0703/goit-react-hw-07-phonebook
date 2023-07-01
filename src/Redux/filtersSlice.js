import { createSlice } from '@reduxjs/toolkit';

const filter = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filter,
  reducers: {
    setStatusFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
