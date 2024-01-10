type IInformationItem = {
      title: string;
} & (
      | { type: "link"; link: string; items?: never; detail?: string }
      | { type?: "text"; link?: never; items?: never; detail?: string }
      | { type?: "list"; link?: never; items?: string[]; detail?: never }
);

function InformationItem({ title, type = "text", link, detail, items }: IInformationItem) {
      return (
            <span>
                  <h6>{title}</h6>
                  {type === "text" && <p>{detail || "---"}</p>}

                  {type === "link" ? (
                        detail ? (
                              <a href={link}>{detail}</a>
                        ) : (
                              <p>{detail || "---"}</p>
                        )
                  ) : undefined}

                  {type === "list" && (
                        <ul>{items?.map((value, index) => <li key={"list-" + index}>{value}</li>)}</ul>
                  )}
            </span>
      );
}

export default InformationItem;
