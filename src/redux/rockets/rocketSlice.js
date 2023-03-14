import { createSlice } from "@reduxjs/toolkit";



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