import SanitizedContent from "@/shared/sanitizedContent/SanitizedContent";

interface IInformationArticleItem {
      title?: string;
      detail: string;
}

function InformationArticleItem({ title, detail }: IInformationArticleItem) {
      return (
            <span className="!w-full !flex !col-span-3 [&>p]:!max-w-full !max-w-full !min-w-full">
                  {title && <h6>{title}</h6>}

                  <SanitizedContent
                        tagName="p"
                        htmlContent={detail}
                        className="text-justify leading-loose [&>*]:!leading-loose !text-mute"
                  />
            </span>
      );
}

export default InformationArticleItem;
