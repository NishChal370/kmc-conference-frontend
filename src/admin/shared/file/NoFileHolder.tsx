import noFile from "@/assets/image/webp/no-file.png";

function NoFileHolder() {
      return (
            <div className="relative group flex flex-col gap-4 justify-center items-center min-w-[8rem] max-w-[8rem] min-h-[8rem] max-h-[8rem] border border-mute-1 px-2">
                  <img src={noFile} className="w-16 h-16 object-cover " />

                  <span className="min-h-[2rem]">
                        <p className="line-clamp-1 text-sm">No file found</p>
                  </span>
            </div>
      );
}

export default NoFileHolder;
