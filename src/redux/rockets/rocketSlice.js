import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { async } from "q";

const url = 'https://api.spacexdata.com/v3/rockets';

const getRockets = createAsyncThunk('rockets/data', async () => {
  const rocketsData = await fetch(url).then((resp) => resp.json()).catch(() => false);
  rocketsData.forEach(rocketObj => {
    return {
      id: rocketObj.rocket_id,
      name: rocketObj.rocket_name,
      type: rocketObj.rocket_type,
      describe: rocketObj.description,
      flickr_images: rocketObj.flickr_images,
      reserved: false
    }
  });

});

const initialState = {
  rockets: [
    {
      id: '',
      name: '',
      type: '',
      description: '',
      flickr_images: '',
      reserved: false
    }
  ]
}

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {}
})