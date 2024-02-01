import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { newsApi } from "@/admin/api/service/newsApi";
import { INewsBasicResponse, INewsBasicSearch, INewsDeleteRequest, INewsDetailResponse, INewsDetailSearch, INewsPostRequest, INewsPutRequest } from "@/admin/model/news/newsModel";

export const fetchNewsBasicInfo = createAppAsyncThunk<INewsBasicResponse, INewsBasicSearch>(
      "news/basic/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await newsApi.getBasicInfo(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const fetchNewsDetailById = createAppAsyncThunk<INewsDetailResponse, INewsDetailSearch>(
      "news/detail/by-id/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await newsApi.getDetailById(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const postNews = createAppAsyncThunk<unknown, INewsPostRequest>(
      "news/post",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await newsApi.postNews(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const putNews = createAppAsyncThunk<unknown, INewsPutRequest>(
      "news/put",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await newsApi.putNews(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const deleteNews = createAppAsyncThunk<unknown, INewsDeleteRequest>(
      "news/delete",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await newsApi.deleteNews(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

