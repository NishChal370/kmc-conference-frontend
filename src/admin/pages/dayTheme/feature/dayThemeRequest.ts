import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminDayThemeApi } from "@/admin/api/service/adminDayThemeApi";
import { IDayThemeDeleteRequest, IDayThemeMinResponse, IDayThemePostRequest, IDayThemePutRequest, IDayThemeResponse, IDayThemeSearch } from "@/admin/model/dayTheme/dayThemeModel";

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


export const getDayThemesMin = createAppAsyncThunk<IDayThemeMinResponse>(
      "day/themes/min-info",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminDayThemeApi.getDayThemesMin();

                  // return response.data;
                  return [ // TODO: Remove this 
                        {
                              id: 1,
                              title: "Digital Transformation",
                              day: {
                                    dayId: 2,
                                    date: "2024-01-13",
                              },

                        },
                        {
                              id: 3,
                              title: "this is theme two",
                              day: {
                                    dayId: 2,
                                    date: "2024-01-13"
                              },

                        },
                        {
                              id: 4,
                              title: "this is theme two",
                              day: {
                                    dayId: 2,
                                    date: "2024-01-14"
                              },

                        }
                  ]
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
