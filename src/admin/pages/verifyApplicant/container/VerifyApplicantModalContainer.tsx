import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useVerifyApplicantApi from "@/admin/hooks/verifyApplicant/useVerifyApplicantApi";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { verifyApplicantSliceAction, verifyApplicantSliceState } from "../feature/verifyApplicantSlice";
import VerifyApplicantModal from "../components/VerifyApplicantModal";
import { ADMIN_DASHBOARD_PATH } from "@/admin/constants/routePath";

function VerifyApplicantModalContainer() {
      const navigate = useNavigate();

      const [searchParamsState] = useSearchParams();

      const dispatch = useAppDispatch();

      const { postVerifyApplicant } = useVerifyApplicantApi();
      const { data, status, error } = useAppSelector(verifyApplicantSliceState);

      const closeModal = () => {
            navigate(ADMIN_DASHBOARD_PATH.dashboard.full);
      };

      const fetchData = () => {
            postVerifyApplicant({
                  qrId: searchParamsState.get("qrId") ?? "",
                  userCode: searchParamsState.get("userCode") ?? "",
            });
      };

      useEffect(() => {
            fetchData();

            return () => {
                  dispatch(verifyApplicantSliceAction.resetSlice());
            };
      }, []);

      return (
            <VerifyApplicantModal
                  closeModal={closeModal}
                  status={status}
                  applicantDetails={data}
                  error={error}
            />
      );
}

export default VerifyApplicantModalContainer;
