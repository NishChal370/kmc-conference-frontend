import { toast } from "react-toastify";

interface ISuccessfulMessage {
      title?: string;
      message?: string;
}

function successMessage({
      title = "Success",
      message = "Your action was successful",
}: ISuccessfulMessage = {}) {
      toast(
            <div className="pl-0">
                  <p className="font-semibold text-green-800">{title}</p>
                  <p className="text-mute text-sm">{message}</p>
            </div>,
            {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
            }
      );
}

export default successMessage;
