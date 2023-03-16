import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk('rockets/data', async () => {
  try {
    const response = await axios.get(url);
    const rocketsData = await response.data.map((rocketObj) => ({
      id: rocketObj.rocket_id,
      name: rocketObj.rocket_name,
      type: rocketObj.rocket_type,
      description: rocketObj.description,
      flickrImage: rocketObj.flickr_images[0],
      reserved: false,
    }));
    return rocketsData;
  } catch (error) {
    return false;
  }
});

const initialState = {
  isLoading: true,
  rockets: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === id) {
            return {
              ...rocket,
              reserved: !rocket.reserved,
            };
          }
          return rocket;
        }),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => ({
      ...state,
      rockets: action.payload,
      isLoading: false,
    }));
  },
});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
