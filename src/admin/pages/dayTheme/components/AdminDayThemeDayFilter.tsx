import { useNavigate, useParams } from "react-router-dom";
import RadioButtonGroup from "@/admin/shared/button/RadioButtonGroup";
import { ADMIN_DAY_THEME_PATH } from "@/admin/constants/routePath";

interface IAdminDayThemeDayFilter {
      options: { id: string; value?: number; label: string }[];
}

function AdminDayThemeDayFilter({ options }: IAdminDayThemeDayFilter) {
      const params = useParams();
      const navigate = useNavigate();

      const navigateHandler = (dayId?: number) => {
            navigate(ADMIN_DAY_THEME_PATH.theme.full(dayId));
      };

      return (
            <div className="flex w-full justify-start">
                  <RadioButtonGroup<number | undefined>
                        selectedValue={params["dayId"] ? parseInt(params["dayId"]) : undefined}
                        changeHandler={function (value: number | undefined): void {
                              navigateHandler(value ? +value : undefined);
                        }}
                        options={options}
                  />
            </div>
      );
}

export default AdminDayThemeDayFilter;
