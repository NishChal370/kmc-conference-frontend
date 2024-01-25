import { DetailedHTMLProps, useEffect, useMemo } from "react";
import useFileApi from "@/hooks/file/useFileApi";
import { IAttachment } from "@/models/file/fileModel";
import getUniqueId from "@/utils/uniqueId/getUniqueId";
import generateRandomColor from "@/utils/generateRandomColor";

interface IServerImage {
      title?: string;
      image: IAttachment | null;
      alt?: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLElement>["alt"];
      className?: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLElement>["className"];
}

function ServerImage({ image, className, alt, title }: IServerImage) {
      const { getImageFile } = useFileApi();

      const uniqueId = useMemo(() => getUniqueId(), [image?.fileName]);

      const color = useMemo(() => generateRandomColor(), [image?.fileName]);

      const fetchImage = () => {
            if (!image) return;
            getImageFile(image).then((responseFile) => {
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
                  className={className}
                  style={{ backgroundColor: color }}
                  title={title ? title : image?.originalName ? atob(image.originalName) : ""}
                  src=""
            ></img>
      );
}

export default ServerImage;
