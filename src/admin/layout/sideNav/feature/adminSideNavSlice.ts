import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit"

interface IAdminSideNavSlice {
      isSideNavOpen: boolean,
}

const initialState: IAdminSideNavSlice = {
      isSideNavOpen: true,
}


const adminSideNavSlice = createSlice({
      name: "sideNav",
      initialState,
      reducers: {
            sideNavViewHandler(state) {
                  state.isSideNavOpen = !state.isSideNavOpen;
            }
      },
})


export default adminSideNavSlice.reducer;
export const { sideNavViewHandler } = adminSideNavSlice.actions;


export const adminSideNavState = (state: RootState) => state.adminSideNav;