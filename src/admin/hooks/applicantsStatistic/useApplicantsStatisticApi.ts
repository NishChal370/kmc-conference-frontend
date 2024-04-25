import { getApplicantsStatistic as getApplicantsStatisticReq } from "@/admin/pages/applicantsStatistic/feature/applicantsStatisticRequest";
import { useAppDispatch } from "@/app/hooks";

function useApplicantsStatisticApi() {
      const dispatch = useAppDispatch();

      const getApplicantsStatistic = () => {
            dispatch(getApplicantsStatisticReq())
      }

      return { getApplicantsStatistic } as const;
}

export default useApplicantsStatisticApi