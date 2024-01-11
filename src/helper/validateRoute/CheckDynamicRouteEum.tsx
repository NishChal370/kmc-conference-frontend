import { Navigate, Outlet, useParams } from "react-router-dom";

const NotFoundPage = <Navigate to="not-found" replace />;

/**
 * @interface
 * check dynamic value by enum
 *
 * @property {T} enumType - enum for route
 * @property {string} paramName - name of dynamic param
 */

interface ICheckDynamicRouteEum {
      paramName: string;
      enumObject: { [s: string]: string };
}

function CheckDynamicRouteEum({ paramName, enumObject }: ICheckDynamicRouteEum) {
      const param = useParams();
      const paramValue = param[paramName];

      const isValid = paramValue && Object.values(enumObject).includes(paramValue?.toLocaleLowerCase());

      if (!isValid) {
            return NotFoundPage;
      }

      return <Outlet />;
}

export default CheckDynamicRouteEum;
