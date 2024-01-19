interface BecomeSpeakerFormHeader {
      title: string;
      subTitle?: string;
}
function BecomeSpeakerFormHeader({ subTitle, title }: BecomeSpeakerFormHeader) {
      return (
            <span className="flex flex-col gap-0.5">
                  <h5 className="text-2xl font-bold tracking-wide text-default">{title}</h5>

                  {subTitle ? <p className="text-sm">{subTitle}</p> : undefined}
            </span>
      );
}

export default BecomeSpeakerFormHeader;
