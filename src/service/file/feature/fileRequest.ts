import { createAsyncThunk } from "@reduxjs/toolkit";
import { fileApi } from "@/admin/api/service/fileApi";
import { IAttachment } from "@/models/file/fileModel";



export const fetchFile = createAsyncThunk(
      "file/get",
      async (file: IAttachment, { rejectWithValue }) => {
            try {
                  const response = await fileApi.getFile(file);


                  return response.data;
            } catch (error: any) {
                  //.text() returns promise
                  const errorMessage = await error.response.data.text().then((errorMessage: string) => {
                        return JSON.parse(errorMessage);

                  })

                  return rejectWithValue(errorMessage);
            }
      }
);
