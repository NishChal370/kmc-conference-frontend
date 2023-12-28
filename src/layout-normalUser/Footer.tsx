function Footer() {
      return (
            <div className="w-full py-4 bg-black text-white flex justify-between gap-4 px-40 text-sm">
                  <p>
                        Privacy — Terms & Conditions — Code of Conduct © 2024 Kathmandu Metropolitan city
                        Reserved
                  </p>
                  <section className="flex gap-4">
                        <button type="button" className="active:text-red">
                              Looking for schedule?
                        </button>
                        <button type="button" className="active:text-red">
                              Contact the organizer
                        </button>
                  </section>
            </div>
      );
}

export default Footer;
