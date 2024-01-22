import noResultImg from "@/assets/image/webp/no-results.webp";

function FilterNotFoundMessage() {
      return (
            <div className="w-full h-full flex justify-start items-center text-start gap-2">
                  <figure className="bg-gray-100 rounded-full w-[2.5rem] min-w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                        <img loading="lazy" className="w-[50%] h-[50%]" src={noResultImg} alt="no-result" />
                  </figure>

                  <p className="text-xs text-red">{"Request filter does not exits."}</p>
            </div>
      );
}

export default FilterNotFoundMessage;
