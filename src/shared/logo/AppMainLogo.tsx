import log from "@/assets/image/logo.png";

function AppMainLogo() {
      return (
            <div className="flex text-xs text-start items-end font-bold">
                  <img className="w-14" src={log} alt="app-logo" />
                  <span className="pl-2 border-l-2 border-white text-white text-shadow">
                        <p>KMC</p>
                        <p>IT CONFERENCE</p>
                        <p>2024</p>
                  </span>
            </div>
      );
}

export default AppMainLogo;
