interface IText {
      title: string;
      data?: string | number | string[] | number[] | null;
      containerClassName?: string;
      dataClassName?: string;
}

function AppliedDetailText({ title, data, containerClassName = "", dataClassName = "" }: IText) {
      return (
            <div
                  className={`flex flex-col gap-2 border-b text-sm border-b-mute items-start
                         sm:text-start ${containerClassName}
                  `}
            >
                  <h3 className="font-semibold py-2 text-start text-sm">{title}</h3>

                  {Array.isArray(data) && data && (
                        <ul className="py-2">
                              {data.map((value, index) => (
                                    <li key={index}>{value}</li>
                              ))}

                              {!data.filter(Boolean).length ? "N/A" : undefined}
                        </ul>
                  )}

                  {!Array.isArray(data) && (
                        <p className={"py-2 w-full  " + dataClassName}>
                              {typeof data === "number" ? data ?? "N/A" : data || "N/A"}
                        </p>
                  )}
            </div>
      );
}

export default AppliedDetailText;
