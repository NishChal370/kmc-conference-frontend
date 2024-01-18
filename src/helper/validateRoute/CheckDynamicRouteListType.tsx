import { useParams, Outlet, Navigate } from "react-router-dom";

const NotFoundPage = <Navigate to="not-found" replace />;

// Define the prop types for the component
interface ParamType {
      paramName: string;
      type: "number" | "string";
}

interface CheckDynamicRouteListTypeProps {
      params: ParamType[];
}

function CheckDynamicRouteListType({ params }: CheckDynamicRouteListTypeProps) {
      const routeParams = useParams();

      for (const { paramName, type } of params) {
            const paramValue = routeParams[paramName];

            if (paramValue) {
                  const isNumber = /^\d+$/.test(paramValue);
                  const isString = /\D/.test(paramValue);

                  if (type === "number" && !isNumber) {
                        // Render NotFoundPage for number type mismatch
                        return NotFoundPage;
                  }

                  if (type === "string" && !isString) {
                        // Render NotFoundPage for string type mismatch
                        return NotFoundPage;
                  }
            }
      }

      // If all params are valid, render the Outlet
      return <Outlet />;
}

export default CheckDynamicRouteListType;
