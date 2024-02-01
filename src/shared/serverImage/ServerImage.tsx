import { DetailedHTMLProps, useEffect, useMemo, useState } from "react";
import useFileApi from "@/hooks/file/useFileApi";
import { IAttachment } from "@/models/file/fileModel";
import getUniqueId from "@/utils/uniqueId/getUniqueId";
import imagePlaceHolder from "@/assets/image/webp/imagePlaceHolder.webp";
import wentWrongImg from "@/assets/image/webp/warning.webp";

interface IServerImage {
      title?: string;
      image: IAttachment | null;
      alt?: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLElement>["alt"];
      className?: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLElement>["className"];
}

function ServerImage({ image, className, alt, title }: IServerImage) {
      const [error, setError] = useState<string>();

      const { getFile } = useFileApi();

      const uniqueId = useMemo(() => getUniqueId(), [image?.fileName]);

      const fetchImage = () => {
            if (!image) return;

            getFile(image)
                  .then((responseFile) => {
                        const img = document.getElementById(
                              `image-${uniqueId}-${image?.fileName}`
                        ) as HTMLImageElement;

                        if (!img) return;

                        img.src = responseFile;
                        img.style.backgroundColor = "";

                        setError(undefined);
                  })
                  .catch((error) => {
                        setError(error);
                  });
      };

      useEffect(() => {
            fetchImage();
      }, [image?.fileName]);

      return !error ? (
            <img
                  id={`image-${uniqueId}-${image?.fileName}`}
                  loading="lazy"
                  alt={alt}
                  className={"bg-mute-1 " + className}
                  title={title ? title : image?.originalName ? atob(image.originalName) : ""}
                  src={imagePlaceHolder}
            ></img>
      ) : (
            <img
                  loading="lazy"
                  alt={alt}
                  className={"bg-mute-1 " + className}
                  title={error}
                  src={wentWrongImg}
            />
      );
}

export default ServerImage;
