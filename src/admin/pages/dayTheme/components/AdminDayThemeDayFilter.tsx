import { useNavigate, useParams } from "react-router-dom";
import RadioButtonGroup from "@/admin/shared/button/RadioButtonGroup";
import { ADMIN_DAY_THEME_PATH } from "@/admin/constants/routePath";

function AdminDayThemeDayFilter() {
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
                        options={[
                              { id: "1", value: undefined, label: "All" },
                              { id: "2", value: 48, label: "Day 1" },
                              { id: "3", value: 2, label: "Day 2" },
                        ]}
                  />
            </div>
      );
}

export default AdminDayThemeDayFilter;
