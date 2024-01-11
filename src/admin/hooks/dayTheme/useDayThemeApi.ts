import { getDayThemes as getDayThemesReq } from '@/admin/pages/dayTheme/feature/dayThemeRequest';
import { IDayThemeSearch } from '@/admin/model/dayTheme/dayThemeModel';
import { useAppDispatch } from '@/app/hooks';


function useDayThemeApi() {
      const dispatch = useAppDispatch();

      const getDayThemes = (searchDetail: IDayThemeSearch) => {
            dispatch(getDayThemesReq(searchDetail))
      }


      return { getDayThemes } as const;

}

export default useDayThemeApi