import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { IDayThemeDeleteRequest, IDayThemePostRequest, IDayThemePutRequest, IDayThemeResponse, IDayThemeSearch } from "@/admin/model/dayTheme/dayThemeModel";
import { adminDayThemeApi } from "@/admin/api/service/adminDayTheme";

export const getDayThemes = createAppAsyncThunk<IDayThemeResponse, IDayThemeSearch>(
      "day/themes",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminDayThemeApi.getDayThemes(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const postDayTheme = createAppAsyncThunk<unknown, IDayThemePostRequest>(
      "day/themes/post",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminDayThemeApi.postDayTheme(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const putDayTheme = createAppAsyncThunk<unknown, IDayThemePutRequest>(
      "day/themes/put",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminDayThemeApi.putDayTheme(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const deleteDayTheme = createAppAsyncThunk<unknown, IDayThemeDeleteRequest>(
      "day/themes/delete",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminDayThemeApi.deleteDayTheme(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);