import log from "@/assets/image/logo.png";

function TopNav() {
      return (
            <nav
                  className="fixed z-50 top-0 flex justify-between items-end gap-2 w-full py-2 px-4 
                        sm:px-10
                  "
            >
                  <section className="flex gap-6 text-center items-end justify-center">
                        <div className="flex text-xs text-start items-end font-bold">
                              <img className="w-14" src={log} alt="app-logo" />
                              <span className="pl-2 border-l-2 border-white text-white text-shadow">
                                    <p>KMC</p>
                                    <p>IT CONFERENCE</p>
                                    <p>2024</p>
                              </span>
                        </div>
                  </section>

                  <section className="flex justify-center items-center gap-4">
                        <button
                              type="button"
                              className=" bg-red px-5 py-2 text-white text-sm font-semibold rounded-md"
                        >
                              REGISTER
                        </button>
                  </section>
            </nav>
      );
}

export default TopNav;
