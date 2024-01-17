import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { IUserResponse } from "@/admin/model/user/userModel";
import { getUsers, postUser, putUserRole } from "./userRequest";


interface IUserSlice extends IBasicSliceState {
      data: IUserResponse
}


type IUserState = {
      users: IUserSlice,
};



const initialState: IUserState = {
      users: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  registeredUsers: []
            }
      },
}

const userSlice = createSlice({
      name: "user",
      initialState,
      reducers: {
            resetUserSlice: (state) => {
                  state.users = {
                        status: Status.IDEL,
                        data: {
                              totalPages: 0,
                              registeredUsers: []
                        }
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(getUsers.pending, (state) => {
                        state.users.status = Status.LOADING;
                  })
                  .addCase(getUsers.fulfilled, (state, action) => {
                        state.users.status = action.payload.registeredUsers.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.users.data = action.payload;

                  })
                  .addCase(getUsers.rejected, (state, action) => {
                        state.users.status = Status.FAILED;
                        state.users.error = action.payload;
                  })


                  .addCase(postUser.fulfilled, (state) => {
                        state.users.isToRefetch = !state.users.isToRefetch;
                  })

                  .addCase(putUserRole.fulfilled, (state) => {
                        state.users.isToRefetch = !state.users.isToRefetch;
                  })
      },

})


export default userSlice.reducer;

export const userSliceAction = userSlice.actions;

export const userSliceState = (state: RootState) => state.user.users;