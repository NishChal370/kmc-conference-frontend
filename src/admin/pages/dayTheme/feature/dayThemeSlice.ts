import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { deleteDayTheme, getDayThemes, postDayTheme, putDayTheme } from "./dayThemeRequest";
import { IBasicSliceState } from "@/models/commonModel";
import { IDayThemeResponse } from "@/admin/model/dayTheme/dayThemeModel";


interface IDayThemesSlice extends IBasicSliceState {
      data: IDayThemeResponse
}


type IDayThemeSlice = {
      dayThemes: IDayThemesSlice,
};


const initialState: IDayThemeSlice = {
      dayThemes: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  themes: []
            }
      },

}

const dayThemeSlice = createSlice({
      name: "dayTheme",
      initialState,
      reducers: {
            resetDayThemesSlice: (state) => {
                  state.dayThemes = {
                        status: Status.IDEL,
                        data: {
                              totalPages: 0,
                              themes: []
                        }
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(getDayThemes.pending, (state) => {
                        state.dayThemes.status = Status.LOADING;
                  })
                  .addCase(getDayThemes.fulfilled, (state, action) => {
                        state.dayThemes.status = action.payload.themes.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.dayThemes.data = action.payload;

                  })
                  .addCase(getDayThemes.rejected, (state, action) => {
                        state.dayThemes.status = Status.FAILED;
                        state.dayThemes.error = action.payload;
                  })


                  .addCase(postDayTheme.fulfilled, (state) => {
                        state.dayThemes.isToRefetch = !state.dayThemes.isToRefetch;
                  })

                  .addCase(putDayTheme.fulfilled, (state) => {
                        state.dayThemes.isToRefetch = !state.dayThemes.isToRefetch;
                  })

                  .addCase(deleteDayTheme.fulfilled, (state) => {
                        state.dayThemes.isToRefetch = !state.dayThemes.isToRefetch;
                  })
      },
})


export default dayThemeSlice.reducer;

export const dayThemeSliceAction = dayThemeSlice.actions;

export const dayThemesState = (state: RootState) => state.dayTheme.dayThemes;