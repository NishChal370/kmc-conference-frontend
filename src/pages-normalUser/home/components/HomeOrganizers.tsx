import { useNavigate } from "react-router-dom";
import ViewMoreButton from "@/shared-normalUser/buttons/ViewMoreButton";
import ScaleRaiseUpAnimationWrapper from "@/template/animation/ScaleRaiseUpAnimationWrapper";
import { ORGANIZERS_PATH } from "@/constants/routePath/path-normalUser";
import { ORGANIZERS_DETAIL } from "../seed/organizersDetail";

function HomeOrganizers() {
      const navigate = useNavigate();

      return (
            <div className="bg-mute w-full py-24 flex justify-center">
                  <span className="w-[60%] flex flex-col justify-center items-center gap-10 h-full">
                        <span
                              className="grid gap-x-12 gap-y-20 self-center place-items-center 
                              sm:grid-cols-2 
                              lg:grid-cols-3 
                              xl:grid-cols-4
                              "
                        >
                              {ORGANIZERS_DETAIL.map(({ img }, index) => (
                                    <ScaleRaiseUpAnimationWrapper key={index}>
                                          <img
                                                className="h-7 w-30 object-content"
                                                src={img}
                                                alt="organizer"
                                          />
                                    </ScaleRaiseUpAnimationWrapper>
                              ))}
                        </span>

                        <ViewMoreButton
                              name="view organizers"
                              clickHandler={() => navigate(ORGANIZERS_PATH.organizer.full)}
                        />
                  </span>
            </div>
      );
}

export default HomeOrganizers;
