import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { INewsBasicResponse, INewsDetailResponse } from "@/admin/model/news/newsModel";
import { deleteNews, fetchNewsBasicInfo, fetchNewsDetailById, postNews, putNews } from "./newsRequest";


interface INewsBasicSlice extends IBasicSliceState {
      data: INewsBasicResponse
}

interface INewsDetailSlice extends IBasicSliceState {
      data?: INewsDetailResponse
}


type INewsSlice = {
      newsBasic: INewsBasicSlice;
      newsDetail: INewsDetailSlice;
}


const initialState: INewsSlice = {
      newsBasic: {
            status: Status.IDEL,
            data: { totalPages: 0, news: [] },
      },
      newsDetail: {
            status: Status.IDEL,
            data: undefined,
      }
}



const newsSlice = createSlice({
      name: "news",
      initialState,
      reducers: {
            resetNewsBasicSlice: (state) => {
                  state.newsBasic = {
                        status: Status.IDEL,
                        data: {
                              totalPages: 0,
                              news: []
                        }
                  }
            },
            resetNewsDetailSlice: (state) => {
                  state.newsDetail = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(fetchNewsBasicInfo.pending, (state) => {
                        state.newsBasic.status = Status.LOADING;
                  })
                  .addCase(fetchNewsBasicInfo.fulfilled, (state, action) => {
                        state.newsBasic.status = action.payload.news.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.newsBasic.data = action.payload;

                  })
                  .addCase(fetchNewsBasicInfo.rejected, (state, action) => {
                        state.newsBasic.status = Status.FAILED;
                        state.newsBasic.error = action.payload;
                  })



                  .addCase(fetchNewsDetailById.pending, (state) => {
                        state.newsDetail.status = Status.LOADING;
                  })
                  .addCase(fetchNewsDetailById.fulfilled, (state, action) => {
                        state.newsDetail.status = !action.payload
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.newsDetail.data = action.payload;

                  })
                  .addCase(fetchNewsDetailById.rejected, (state, action) => {
                        state.newsDetail.status = Status.FAILED;
                        state.newsDetail.error = action.payload;
                  })



                  .addCase(putNews.fulfilled, (state) => {
                        state.newsBasic.isToRefetch = !state.newsBasic.isToRefetch;
                  })
                  .addCase(postNews.fulfilled, (state) => {
                        state.newsBasic.isToRefetch = !state.newsBasic.isToRefetch;
                  })
                  .addCase(deleteNews.fulfilled, (state) => {
                        state.newsBasic.isToRefetch = !state.newsBasic.isToRefetch;
                  })
      },
})



export default newsSlice.reducer;

export const newsAction = newsSlice.actions;

export const newsBasicSliceState = (state: RootState) => state.news.newsBasic;
export const newsDetailSliceState = (state: RootState) => state.news.newsDetail;
