interface IAppliedDetailTitle {
      title: string;
}
function AppliedDetailTitle({ title }: IAppliedDetailTitle) {
      return <p className="md:col-span-2 font-bold text-base mb-6">{title}</p>;
}

export default AppliedDetailTitle;
