import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { async } from "q";

const url = 'https://api.spacexdata.com/v3/rockets';

const getRockets = createAsyncThunk('rockets/data', async () => {
  const response = await fetch(url).then((resp) => resp.json()).catch(() => false);
  const rocketsData = response.forEach(rocketObj => {
    return {
      id: rocketObj.rocket_id,
      name: rocketObj.rocket_name,
      type: rocketObj.rocket_type,
      describe: rocketObj.description,
      flickr_images: rocketObj.flickr_images,
      reserved: false
    }
  });
  return rocketsData
});

const initialState = {
  rockets: []
}

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      return {
        ...state,
        rockets: action.payload
      }
    });
  }
})

export default rocketSlice.reducer;