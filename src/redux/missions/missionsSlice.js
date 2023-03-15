import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import urlMission from '../../utils/url';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (_, thunkAPI) => {
    try {
      const res = await axios(urlMission);
      const missionsData = await res.data.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
      return missionsData;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Cannot fetch missions...',
      );
    }
  },
);

const initialState = {
  isLoading: false,
  missions: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder
      .addCase(getMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
        isLoading: false,
      }))
      .addCase(getMissions.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
