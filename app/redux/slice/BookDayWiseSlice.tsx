import {createSlice} from '@reduxjs/toolkit';
import {bookDayWiseService} from '../service/BookDayWiseService';

const initialState = {
  samyakDetailsBookdayWisePost: [],
};

export const bookDayWiseSlice = createSlice({
  name: 'bookDayWise',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      bookDayWiseService.endpoints.samyakBookDayWisePost.matchFulfilled,
      (state, {payload}) => {
        state.samyakDetailsBookdayWisePost = payload;
        // console.log('bookDayWisePayload?????????', payload);
      },
    );
  },
});

export const {} = bookDayWiseSlice.actions;

export default bookDayWiseSlice.reducer;
