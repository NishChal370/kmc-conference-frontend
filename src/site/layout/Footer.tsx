import { useNavigate } from "react-router-dom";
import { SCHEDULE_PATH } from "@/site/constants/routePath";

function Footer() {
      const navigate = useNavigate();

      return (
            <div className="w-full bg-black text-white flex flex-col md:flex-row justify-between gap-4 py-4 px-6 sm:px-40 text-sm">
                  <p>
                        Privacy — Terms & Conditions — Code of Conduct © 2080 Kathmandu Metropolitan city
                        Reserved
                  </p>
                  <section className="flex gap-4 self-end">
                        <button
                              type="button"
                              className="active:text-primary"
                              onClick={() => navigate(SCHEDULE_PATH.schedule.full)}
                        >
                              Looking for schedule?
                        </button>
                        <button type="button" className="active:text-primary">
                              Contact the organizer
                        </button>
                  </section>
            </div>
      );
}

export default Footer;
