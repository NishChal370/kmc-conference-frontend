import Swal, { SweetAlertIcon } from 'sweetalert2'


interface IShowSuccessfulConfirmation {
      message?: string;
      text?: string;
      buttonText?: string;
      showCancelButton?: boolean;
      icon?: SweetAlertIcon;
}

export function showSuccessfulConfirmation({ message = "Are you sure?", text = "You won't be able to revert this!", buttonText = "Yes, Proceed", showCancelButton = false, icon = "warning" }: IShowSuccessfulConfirmation = {}): Promise<boolean> {
      return new Promise((resolve) => {
            Swal.fire({
                  title: message,
                  text: text,
                  icon: icon,
                  allowOutsideClick: false,
                  showCancelButton: showCancelButton,
                  confirmButtonColor: "#3457D5",
                  confirmButtonText: buttonText,
            }).then(({ isConfirmed }) => {

                  if (isConfirmed) {

                        return resolve(isConfirmed);
                  }
                  else {
                        return false;
                  }
            })
      });
};
