import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKENDURL;

// Async Thunks for API calls
export const fetchBlogData = createAsyncThunk("data/fetchBlog", async () => {
    const response = await axios.get(`${backendUrl}/blog/getall`);
    return response.data;
});

export const fetchCasesData = createAsyncThunk("data/fetchCases", async () => {
    const response = await axios.get(`${backendUrl}/case/getall`);
    return response.data;
});

export const fetchTeamData = createAsyncThunk("data/fetchTeam", async () => {
    const response = await axios.get(`${backendUrl}/team/getall`);
    return response.data?.payload; 
});

export const fetchGalleryData = createAsyncThunk("data/fetchGallery", async () => {
    const response = await axios.get(`${backendUrl}/gallery/getall`);
    return response.data;
});

// Initial State
const initialState = {
    blogData: [],
    casesData: [],
    teamData: [],
    galleryData: [],
    status: null,
    error: null
};

// Redux Slice
const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Blog Data
            .addCase(fetchBlogData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBlogData.fulfilled, (state, action) => {
                state.status = "success";
                state.blogData = action.payload;
            })
            .addCase(fetchBlogData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // Cases Data
            .addCase(fetchCasesData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCasesData.fulfilled, (state, action) => {
                state.status = "success";
                state.casesData = action.payload;
            })
            .addCase(fetchCasesData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // Team Data
            .addCase(fetchTeamData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTeamData.fulfilled, (state, action) => {
                state.status = "success";
                state.teamData = action.payload; 
            })
            .addCase(fetchTeamData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message; 
            })

            // Gallery Data
            .addCase(fetchGalleryData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGalleryData.fulfilled, (state, action) => {
                state.status = "success";
                state.galleryData = action.payload;
            })
            .addCase(fetchGalleryData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default dataSlice.reducer;
