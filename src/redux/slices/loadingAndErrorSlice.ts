import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

interface IState {
    error:string
    isLoading:boolean
}

const initialState:IState = {
    error: null,
    isLoading: null,
};

const loadingAndErrorSlice = createSlice({
    name: 'loadingAndErrorSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
        // .addMatcher(
        //     (action) => {
        //         if (action.type.startsWith('deleteOrAdd/favoriteSlice')) {
        //             return !action.type.startsWith('deleteOrAdd/favoriteSlice');
        //         }else if (action.type.startsWith('searchMovies/searchSlice')) {
        //             return !action.type.startsWith('searchMovies/searchSlice');
        //         }
        //     },
        //
        //     (state) => {
        //         state.isLoading = true;
        //         state.error = null;
        //     },
        // )

        // 19.09.23 периписав addMatcher() на addMatcher(isPending())

            .addMatcher(isPending(), (state, action) => {
                const isAddFavorite = action.type.includes('deleteOrAdd');
                const isSearchMovies = action.type.includes('searchMovies');

                if ( !isAddFavorite && !isSearchMovies ) state.isLoading = true;

                state.error = null;
            })

            .addMatcher(isRejected(), (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addMatcher(isFulfilled(), (state) => {
                state.isLoading = false;
                state.error = null;
            }),
});

const { reducer: loadingAndErrorReducer } = loadingAndErrorSlice;

export { loadingAndErrorReducer };

