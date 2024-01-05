import { toast } from 'react-toastify';


export const errorToastMessage = (message: string) => {
      toast.error(message || "Something went wrong; try again after a while", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            progress: undefined,
            theme: "colored",
      });
};

export default errorToastMessage