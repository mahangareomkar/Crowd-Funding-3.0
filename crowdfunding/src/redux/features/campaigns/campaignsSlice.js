import { createSlice, current } from '@reduxjs/toolkit';

const campaignsSlice = createSlice({
    name: "campaigns",
    initialState: {
        allCampaigns: [],
        currentCampaign: null,
    },
    reducers: {
        setAllCampaigns: (state, action) => {
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

export const { setAllCampaigns, getCurrentCampaign } = campaignsSlice.actions;

export default campaignsSlice.reducer;