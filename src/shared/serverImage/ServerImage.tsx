import { DetailedHTMLProps, useEffect, useMemo } from "react";
import useFileApi from "@/hooks/file/useFileApi";
import { IAttachment } from "@/models/file/fileModel";
import getUniqueId from "@/utils/uniqueId/getUniqueId";
import imagePlaceHolder from "@/assets/image/webp/imagePlaceHolder.webp";

interface IServerImage {
      title?: string;
      image: IAttachment | null;
      alt?: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLElement>["alt"];
      className?: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLElement>["className"];
}

function ServerImage({ image, className, alt, title }: IServerImage) {
      const { getFile } = useFileApi();

      const uniqueId = useMemo(() => getUniqueId(), [image?.fileName]);

      const fetchImage = () => {
            if (!image) return;

            getFile(image).then((responseFile) => {
                  const img = document.getElementById(
                        `image-${uniqueId}-${image?.fileName}`
                  ) as HTMLImageElement;

                  if (!img) return;

                  img.src = responseFile;
                  img.style.backgroundColor = "";
            });
      };

      useEffect(() => {
            fetchImage();
      }, [image?.fileName]);

      return (
            <img
                  id={`image-${uniqueId}-${image?.fileName}`}
                  loading="lazy"
                  alt={alt}
                  className={"bg-gray-300 " + className}
                  title={title ? title : image?.originalName ? atob(image.originalName) : ""}
                  src={imagePlaceHolder}
            ></img>
      );
}

export default ServerImage;
