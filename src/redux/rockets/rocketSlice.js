import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk('rockets/data', async () => {
  const response = await axios.get(url)
    .then((resp) => resp)
    .catch(() => false);
  const rocketsData = await response.data.map((rocketObj) => ({
    id: rocketObj.rocket_id,
    name: rocketObj.rocket_name,
    type: rocketObj.rocket_type,
    description: rocketObj.description,
    flickrImage: rocketObj.flickr_images[0],
    reserved: false,
  }));
  return rocketsData;
});

const initialState = {
  rockets: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => ({
      ...state,
      rockets: action.payload,
    }));
  },
});

export default rocketSlice.reducer;
