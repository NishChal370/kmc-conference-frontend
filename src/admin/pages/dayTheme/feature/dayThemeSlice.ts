import { IDayThemeByIdResponse } from './../../../model/dayTheme/dayThemeModel';
import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { deleteDayTheme, getDayThemeById, getDayThemes, getDayThemesMin, postDayTheme, putDayTheme } from "./dayThemeRequest";
import { IBasicSliceState } from "@/models/commonModel";
import { IDayThemeMinResponse, IDayThemeResponse } from "@/admin/model/dayTheme/dayThemeModel";



interface IDayThemeByIdSlice extends IBasicSliceState {
      data?: IDayThemeByIdResponse;
}


interface IDayThemesSlice extends IBasicSliceState {
      data: IDayThemeResponse;
}

interface IDayThemesMinSlice extends IBasicSliceState {
      data: IDayThemeMinResponse;
}


type IDayThemeSlice = {
      dayTheme: IDayThemeByIdSlice, // it stores single theme.
      dayThemes: IDayThemesSlice,
      dayThemesMin: IDayThemesMinSlice,
};


const initialState: IDayThemeSlice = {
      dayTheme: {
            status: Status.IDEL,
            data: undefined,
      },

      dayThemes: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  themes: []
            }
      },
      dayThemesMin: {
            status: Status.IDEL,
            data: []
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
            resetDayThemesMin: (state) => {
                  state.dayThemesMin = {
                        status: Status.IDEL,
                        data: []
                  }
            },
            resetDayThemeSlice: (state) => {
                  state.dayTheme = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            }
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


                  .addCase(getDayThemesMin.pending, (state) => {
                        state.dayThemesMin.status = Status.LOADING;
                  })
                  .addCase(getDayThemesMin.fulfilled, (state, action) => {
                        state.dayThemesMin.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.dayThemesMin.data = action.payload;

                  })
                  .addCase(getDayThemesMin.rejected, (state, action) => {
                        state.dayThemesMin.status = Status.FAILED;
                        state.dayThemesMin.error = action.payload;
                  })



                  .addCase(getDayThemeById.pending, (state) => {
                        state.dayTheme.status = Status.LOADING;
                  })
                  .addCase(getDayThemeById.fulfilled, (state, action) => {
                        state.dayTheme.status = !action.payload
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;

                        state.dayTheme.data = action.payload;

                  })
                  .addCase(getDayThemeById.rejected, (state, action) => {
                        state.dayTheme.status = Status.FAILED;
                        state.dayTheme.error = action.payload;
                  })
      },
})


export default dayThemeSlice.reducer;

export const dayThemeSliceAction = dayThemeSlice.actions;

export const dayThemeState = (state: RootState) => state.dayTheme.dayTheme;
export const dayThemesState = (state: RootState) => state.dayTheme.dayThemes;
export const dayThemesMinState = (state: RootState) => state.dayTheme.dayThemesMin;