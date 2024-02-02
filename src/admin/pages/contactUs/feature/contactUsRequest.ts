import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { IContactUsDeleteRequest, IContactUsPostRequest, IContactUsPutRequest, IContactUsResponse, IContactUsSearch } from "@/admin/model/contactUs/contactUsModel";
import { contactUsApi } from "@/admin/api/service/contactUsApi";

export const fetchContactUs = createAppAsyncThunk<IContactUsResponse, IContactUsSearch>(
      "admin/contactUs/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await contactUsApi.get(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const postContactUs = createAppAsyncThunk<unknown, IContactUsPostRequest>(
      "site/contactUs/post",
      async (contactUsDetail, { rejectWithValue }) => {
            try {
                  const response = await contactUsApi.post(contactUsDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const putContactUs = createAppAsyncThunk<unknown, IContactUsPutRequest>(
      "admin/contactUs/put",
      async (contactUsDetail, { rejectWithValue }) => {
            try {
                  const response = await contactUsApi.put(contactUsDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const deleteContactUs = createAppAsyncThunk<unknown, IContactUsDeleteRequest>(
      "admin/contactUs/delete",
      async (contactUsDetail, { rejectWithValue }) => {
            try {
                  const response = await contactUsApi.delete(contactUsDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);