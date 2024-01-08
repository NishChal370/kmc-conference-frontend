import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import useNavPathInfo from "@admin/hooks/header/useNavPathInfo";

interface IHeader {
      pageHeaderName?: string;
}

function Header({ pageHeaderName }: IHeader) {
      const navigate = useNavigate();
      const { pageDetail, generatePath } = useNavPathInfo();

      const onClickHandler = (pageName: string) => {
            navigate(generatePath(pageName));
      };

      return (
            <header className="flex flex-col gap-1">
                  <section
                        className="flex gap-2 text-xs text-mute
                              [&>*:first-child]:hidden
                              [&>*:last-child]:text-primary
                        "
                  >
                        {pageDetail.pathDetail.map((path) => (
                              <Fragment key={path.id}>
                                    <p className="">/</p>

                                    <button type="button" onClick={() => onClickHandler(path.name)}>
                                          {path.name}
                                    </button>
                              </Fragment>
                        ))}
                  </section>

                  <h1 className="text-2xl">{pageHeaderName || pageDetail.pageHeaderName}</h1>
            </header>
      );
}

export default Header;
