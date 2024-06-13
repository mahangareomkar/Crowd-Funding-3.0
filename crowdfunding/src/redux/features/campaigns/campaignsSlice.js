import { createSlice, current } from '@reduxjs/toolkit';

const campaignsSlice = createSlice({
    name: "campaigns",
    initialState: {
        allCampaigns: [],
        currentCampaign: null,
    },
    reducers: {
        setCampaigns: (state, action) => {
            state.allCampaigns = action.payload;
        },
        getCurrentCampaign: (state, action) => {
            for (let i = 0; i < state.allCampaigns?.data.length; i++) {
                if (state.allCampaigns.data[i].id === action.payload) {
                    state.currentCampaign = state.allCampaigns.data[i]
                }
            }
        }
    }
})

export const { setCampaigns, getCurrentCampaign } = campaignsSlice.actions;

export default campaignsSlice.reducer;