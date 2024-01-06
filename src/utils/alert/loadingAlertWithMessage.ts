import Swal from "sweetalert2";



interface ILoadingAlertWithMessage {
      title?: string;
      text?: string;
}

export function loadingAlertWithMessage({ title = "Submitting", text = "Please wait while submitting" }: ILoadingAlertWithMessage = {}) {
      Swal.fire({
            position: "center",
            title: title,
            html: `<style>
                        @keyframes lineAnim {
                        0% { left: -40%; }
                        50% { left: 20%; width: 80%; }
                        80% { left: 80%; width: 100%; }
                        100% { left: 100%; width: 100%; }
                        }
                  </style>

                  <h1>${text}</h1>
                  <div class="line-loading-alert" style="self-align: center, width: 80%; height: 3px; position: relative; overflow: hidden; background-color: #ddd; border-radius: 20px; margin-top:2rem">
                        <div style="content: ''; position: absolute; left: -50%; height: 3px; width: 40%; background-color: #007bff; border-radius: 20px; animation: lineAnim 1s linear infinite;"></div>
                  </div>
            `,
            customClass: "swal-loading-message",
            backdrop: `rgba(0, 0, 0, 0.799)`,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,

      })
}

export default loadingAlertWithMessage;
