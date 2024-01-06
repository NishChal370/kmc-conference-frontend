import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiErrorDetail } from "@/models/commonModel";

const createAppAsyncThunk = createAsyncThunk.withTypes<{
      rejectValue: IApiErrorDetail,
}>();

export default createAppAsyncThunk;