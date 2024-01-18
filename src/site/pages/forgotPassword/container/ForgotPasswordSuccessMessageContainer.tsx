import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ForgotPasswordSuccessMessage from "../components/ForgotPasswordSuccessMessage";
import { useAppDispatch } from "@/app/hooks";
import { forgotPasswordSliceAction } from "../feature/forgotPasswordSlice";
import { AUTH_PATH } from "@/site/constants/routePath";

function ForgotPasswordSuccessMessageContainer() {
      const navigate = useNavigate();

      const dispatch = useAppDispatch();

      const reverifyUserHandler = () => {
            dispatch(forgotPasswordSliceAction.resetSlice());
      };

      const navigateLoginHandler = () => {
            navigate(AUTH_PATH.login.full);
      };

      useEffect(() => {
            return () => {
                  dispatch(forgotPasswordSliceAction.resetSlice());
            };
      }, []);

      return (
            <ForgotPasswordSuccessMessage
                  reverifyUserHandler={reverifyUserHandler}
                  navigateLoginHandler={navigateLoginHandler}
            />
      );
}

export default ForgotPasswordSuccessMessageContainer;
