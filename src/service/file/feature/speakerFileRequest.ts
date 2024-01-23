import { createAsyncThunk } from "@reduxjs/toolkit";
import { fileApi } from "@/admin/api/service/fileApi";
import { IAttachment } from "@/models/file/fileModel";



export const fetchImageFile = createAsyncThunk(
      "image-file/get",
      async (fileName: IAttachment, { rejectWithValue }) => {
            try {
                  const response = await fileApi.getImageFile(fileName);


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
