import { IVerifyApplicantSearch } from "@/admin/model/verifyApplicant/verifyApplicantModel";
import { postVerifyApplicant as postVerifyApplicantReq } from "@/admin/pages/verifyApplicant/feature/verifyApplicantRequest";
import { useAppDispatch } from "@/app/hooks";

function useVerifyApplicantApi() {
      const dispatch = useAppDispatch();

      const postVerifyApplicant = (searchDetail: IVerifyApplicantSearch) => {
            dispatch(postVerifyApplicantReq(searchDetail));
      }

      return { postVerifyApplicant } as const;
}

export default useVerifyApplicantApi