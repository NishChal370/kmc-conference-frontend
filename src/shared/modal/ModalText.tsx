interface IText {
      title: string;
      data?: string | number;
      containerClassName?: string;
      dataClassName?: string;
}

function ModalText({ title, data, containerClassName = "", dataClassName = "" }: IText) {
      return (
            <div
                  className={`flex flex-col justify-between gap-2 border-b text-sm border-b-mute
                        sm:flex-row sm:items-center sm:text-end ${containerClassName}
                  `}
            >
                  <h3 className="font-semibold py-2 text-start text-sm">{title}</h3>
                  <p className={dataClassName}>{typeof data === "number" ? data ?? "---" : data || "---"}</p>
            </div>
      );
}

export default ModalText;
