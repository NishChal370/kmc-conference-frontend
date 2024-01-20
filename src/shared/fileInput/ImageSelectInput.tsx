import { useState } from "react";
import Button from "../button/Button";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { FILE_SIZE_LIMIT } from "@/constants/fileData/fileData";
import { validateImageFile } from "@/utils/validation/validateImageFile";
import imagePlaceHolder from "@/assets/image/webp/file-placeholder.webp";

interface IImageSelectInput<TControl extends FieldValues> {
      name: Path<TControl>;
      control: Control<TControl>;
}

function ImageSelectInput<TControl extends FieldValues>({ name, control }: IImageSelectInput<TControl>) {
      const [error, setError] = useState<string>();

      return (
            <Controller
                  name={name}
                  control={control}
                  render={({ field }) => (
                        <figure
                              className="flex flex-col items-center gap-5 border-b pb-2 px-0
                                    sm:flex-row sm:items-end
                              "
                        >
                              <img
                                    className="w-[10rem] max-w-[10rem] h-[10rem] max-h-[10rem] rounded-md object-cover"
                                    src={
                                          field.value["newFiles"] && field.value["newFiles"].length
                                                ? URL.createObjectURL(field.value["newFiles"][0] || "")
                                                : imagePlaceHolder
                                    }
                                    alt="Preview"
                              />

                              <aside
                                    className="flex flex-col items-center justify-end gap-3 
                                          sm:items-start
                                    "
                              >
                                    <p className=" text-error text-xs self-end">{error}</p>

                                    <Button
                                          title="Upload New Photo"
                                          type="button"
                                          onClickHandler={() => {
                                                document.getElementById("single-image-select")?.click();
                                                setError("");
                                          }}
                                          extraClassName="!w-fit"
                                    />

                                    <input
                                          id="single-image-select"
                                          type="file"
                                          accept="image/*"
                                          hidden
                                          //SEE: https://stackoverflow.com/questions/59461119/angular-input-file-selecting-the-same-file
                                          // it help to allow upload same file twice.
                                          onClick={({ target }: any) => (target.value = null)}
                                          onChange={(event) => {
                                                const errorMessage = validateImageFile(
                                                      event.target.files && event.target.files[0]
                                                );

                                                if (!errorMessage) {
                                                      field.onChange({
                                                            oldFiles: [],
                                                            newFiles: event.target.files
                                                                  ? event.target.files
                                                                  : [],
                                                      });
                                                } else {
                                                      setError(errorMessage);
                                                }
                                          }}
                                    />

                                    <p className="text-xs">
                                          Allowed JPEG, PNG, WEBp. Max size of {FILE_SIZE_LIMIT}MB
                                    </p>
                              </aside>
                        </figure>
                  )}
            />
      );
}

export default ImageSelectInput;
