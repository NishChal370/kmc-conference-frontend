import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_SCHEDULE_PATH } from "@/admin/constants/routePath";
import RadioButtonGroup from "@/admin/shared/button/RadioButtonGroup";
import { IRadioButtonGroupOptions } from "@/admin/model/button/radioButtonGroupModel";

interface IAdminScheduleThemeFilter {
      options: IRadioButtonGroupOptions<number>;
}

function AdminScheduleThemeFilter({ options }: IAdminScheduleThemeFilter) {
      const params = useParams();
      const navigate = useNavigate();

      const navigateHandler = (themeId?: number) => {
            navigate(ADMIN_SCHEDULE_PATH.schedule.full(themeId));
      };

      return (
            <div className="flex w-full justify-start h-full overflow-scroll pb-2">
                  <RadioButtonGroup<number | undefined>
                        selectedValue={params["themeId"] ? parseInt(params["themeId"]) : undefined}
                        changeHandler={function (value: number | undefined): void {
                              navigateHandler(value ? +value : undefined);
                        }}
                        options={options}
                  />
            </div>
      );
}

export default AdminScheduleThemeFilter;
