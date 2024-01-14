import "./style/imageSkeleton.css";

function ImageSkeleton() {
      return (
            <div id="image-skeleton" className="w-full h-full flex sm:justify-center items-center bg-white">
                  <div className="w-8 h-8 overflow-hidden rounded-md relative bg-gray-50"></div>
            </div>
      );
}

export default ImageSkeleton;
