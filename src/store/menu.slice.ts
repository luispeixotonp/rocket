import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
    showMenu: boolean;
}

const initialState: MenuState = {
    showMenu: false,
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setShowMenu(state, action) {
            state.showMenu = action.payload;
        }
    }
});

export const { setShowMenu } = menuSlice.actions;
export default menuSlice.reducer;