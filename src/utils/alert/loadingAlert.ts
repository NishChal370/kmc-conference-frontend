import Swal from "sweetalert2";


//It wrap the entire page and make all user interaction disable.
function loadingAlert() {
      Swal.fire({
            width: 600,
            padding: "3em",
            color: "#050101",
            background: "rgba(0, 0, 0, 0)",
            backdrop: `rgba(8, 8, 8, 0.39)`,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
      });
}





export default loadingAlert;
