import { createSlice } from '@reduxjs/toolkit';

type State = {
  loading: boolean;
};

const initialState: State = {
  loading: false,
};

const wrapperSlice = createSlice({
  name: 'wrapper',
  initialState,
  reducers: {
    changeLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

const { actions, reducer } = wrapperSlice;
export const { changeLoading } = actions;
export default reducer;
