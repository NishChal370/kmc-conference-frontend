function HomeOrganizers() {
      return (
            <div className="bg-mute w-full py-20 flex justify-center">
                  <span
                        className="w-[60%] grid gap-x-10 gap-y-12 self-center place-items-center 
                              sm:grid-cols-2 
                              lg:grid-cols-3 
                              xl:grid-cols-4
                        "
                  >
                        {[
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:2000/h:278/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/01/Logo-Original-Index-Ventures.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:1465/h:461/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/01/Logo-Original-Accel.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:2000/h:264/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/01/Logo-Original-Sequoia.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:1866/h:283/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/01/Logo-Original-Initialized.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:1866/h:283/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/01/Logo-Original-Initialized.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:923/h:585/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/01/Logo-Original-GV.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:2000/h:414/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/01/Logo-Original-Y_Combinator-2.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:308/h:132/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/06/logo-bvp.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:551/h:56/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/06/logo-founders-fund.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:2000/h:270/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/06/logo-general-catalyst.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:1067/h:267/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/06/logo-greylock.png",
                              },
                              {
                                    img: "https://mlwdmr8a4b9i.i.optimole.com/O7d89Mg.ynKH~62d4e/w:866/h:81/q:90/https://startupgrind.tech/wp-content/uploads/sites/7/2023/06/logo-kleinerperkins.png",
                              },
                        ].map(({ img }, index) => (
                              <img key={index} className=" h-7 w-30 object-content" src={img} alt="" />
                        ))}
                  </span>
            </div>
      );
}

export default HomeOrganizers;
