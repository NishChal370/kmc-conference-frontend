import { useNavigate } from "react-router-dom";
import { ABOUT_US_NAVIGATION_DETAIL } from "../data/aboutUsNavigationMenuDetail";

function AboutUsNavigationMenu() {
      const navigate = useNavigate();

      const navigationHandler = (path: string) => () => {
            navigate(path);
      };

      return (
            <section
                  className="w-full h-full flex flex-col justify-center items-center gap-0 text-white tracking-wider
                        [&>div]:w-full [&>div]:h-[20rem]
                        [&>div>button]:bg-black/80 [&>div>button]:w-full  [&>div>button]:h-full  [&>div>button]:flex [&>div>button]:flex-col [&>div>button]:justify-center [&>div>button]:items-center 
                        [&>div>button>h4]:text-3xl  [&>div>button>h4]:font-bold
                        [&>div>button>p]:text-sm

                        md:flex-row
                  "
            >
                  {ABOUT_US_NAVIGATION_DETAIL.map(({ title, subTitle, path, img }) => (
                        <div key={title} className="relative group overflow-hidden">
                              <img
                                    className="w-full h-full transition-transform duration-500 hover:scale-110 group-hover:scale-110"
                                    src={img}
                                    alt={title}
                              />
                              <button
                                    type="button"
                                    className="group absolute top-0"
                                    onClick={navigationHandler(path)}
                              >
                                    <h4>{title}</h4>
                                    <p className="hidden group-hover:flex">{subTitle}</p>
                              </button>
                        </div>
                  ))}
            </section>
      );
}

export default AboutUsNavigationMenu;
