import { createSlice } from '@reduxjs/toolkit';

type State = {
  loading: boolean;
  address: {
    Id: string;
    Name: string;
    Districts: {
      Id: string;
      Name: string;
      Wards: {
        Id: string;
        Name: string;
      }[];
    }[];
  }[];
};

const initialState: State = {
  loading: false,
  address: [],
};

const wrapperSlice = createSlice({
  name: 'wrapper',
  initialState,
  reducers: {
    changeLoading(state, action) {
      state.loading = action.payload;
    },
    changeAddress(state, action) {
      state.address = action.payload;
    },
  },
});

const { actions, reducer } = wrapperSlice;
export const { changeLoading, changeAddress } = actions;
export default reducer;
