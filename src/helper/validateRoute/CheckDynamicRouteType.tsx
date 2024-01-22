import { Navigate, Outlet, useParams } from "react-router-dom";

const NotFoundPage = <Navigate to="/not-found" replace />;

interface CheckDynamicRouteType {
      paramName: string;
      type: "string" | "number";
}

/**
 * @interface
 * It check if user have added the required dynamic param type
 *
 * @property {string} paramName - dynamic param name
 * @property {enum} type - required param name type
 */
function CheckDynamicRouteType({ type, paramName }: CheckDynamicRouteType) {
      const param = useParams();
      const paramValue = param[paramName];

      if (!paramValue) return <Outlet />;

      switch (type) {
            case "number": // if required type is number
                  if (paramValue && !/^\d+$/.test(paramValue)) {
                        return NotFoundPage;
                  }
                  break;

            case "string": // if required type is string
                  if (paramValue && !/\D/.test(paramValue || "")) {
                        return NotFoundPage;
                  }
                  break;
      }

      return <Outlet />;
}

export default CheckDynamicRouteType;
