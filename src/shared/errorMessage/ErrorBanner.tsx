import AppIcon from "../icon/AppIcon";

interface IErrorBanner {
      title?: string;
      message?: string;
}
function ErrorBanner({ title, message }: IErrorBanner) {
      return (
            <div className="bg-error/5 flex justify-between items-center text-end gap-2 w-full h-fit py-3 font-medium px-4 text-error">
                  <AppIcon name="error" />

                  <span>
                        <p className="text-xs">{title}</p>
                        <p className=" max-w-md line-clamp-1" title={message}>
                              {message || "Something went wrong"}
                        </p>
                  </span>
            </div>
      );
}

export default ErrorBanner;
