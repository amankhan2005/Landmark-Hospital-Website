import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = import.meta.env.VITE_BACKENDURL 

export const fetchBlogData = createAsyncThunk("data/fetchBlog", async () => {
    const response = await fetch(`${backendUrl}/blog/getall`);
    return await response.json();

});

export const fetchCasesData = createAsyncThunk("data/fetchCases", async () => {
    const response = await fetch(`${backendUrl}/case/getall`);
    return await response.json();
});

export const fetchTeamData = createAsyncThunk("data/fetchTeam", async () => {
    const response = await fetch(`${backendUrl}/team/getall`);
    return await response.json();
});

export const fetchGalleryData = createAsyncThunk("data/fetchGallery", async () => {
    const response = await fetch(`${backendUrl}/gallery/getall`)
    return await response.json();
});

const dataSlice = createSlice({
    name: "data",
    initialState: { 
        blogData: [],
        casesData: [],
        teamData: [],
        galleryData: [],
        status: "idle", 
        error: null
    },
    reducers: {}, 
    extraReducers: (builder) => {
        builder
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
            .addCase(fetchCasesData.fulfilled, (state, action) => {
                state.casesData = action.payload;
            })
            .addCase(fetchTeamData.fulfilled, (state, action) => {
                state.teamData = action.payload;
            })
            .addCase(fetchGalleryData.fulfilled, (state, action) => {
                state.galleryData = action.payload;
            });
    }
});

export default dataSlice.reducer;
