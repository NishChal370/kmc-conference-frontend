interface IBecomeCallForPaperHeader {
      title: string;
      subTitle?: string;
}

function BecomeCallForPaperHeader({ title, subTitle }: IBecomeCallForPaperHeader) {
      return (
            <span className="flex flex-col gap-0.5">
                  <h5 className="text-2xl font-bold tracking-wide text-default">{title}</h5>

                  {subTitle ? <p className="text-sm">{subTitle}</p> : undefined}
            </span>
      );
}

export default BecomeCallForPaperHeader;
