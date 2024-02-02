import { useNavigate } from "react-router-dom";
import { CONTACT_US_PATH, SCHEDULE_PATH } from "@/site/constants/routePath";

function Footer() {
      const navigate = useNavigate();

      return (
            <div
                  className="w-full bg-black text-white flex flex-col justify-between gap-4 py-4 px-6 text-sm
                        sm:px-4
                        lg:flex-row
                        xl:px-32 
                        2xl:px-40 
                  "
            >
                  <p>
                        Privacy — Terms & Conditions — Code of Conduct © 2080 Kathmandu Metropolitan city
                        Reserved
                  </p>
                  <section className="flex gap-4 self-end">
                        <button
                              type="button"
                              className="active:text-primary"
                              onClick={() => navigate(SCHEDULE_PATH.schedule.full())}
                        >
                              Looking for schedule?
                        </button>
                        <button
                              type="button"
                              className="active:text-primary"
                              onClick={() => navigate(CONTACT_US_PATH.base.full)}
                        >
                              Contact the organizer
                        </button>
                  </section>
            </div>
      );
}

export default Footer;
