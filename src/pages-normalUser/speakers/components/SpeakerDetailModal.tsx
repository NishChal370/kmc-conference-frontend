import { Modal } from "@/shared/modal";

interface ISpeakerDetailModal {
      closeModal: () => void;
}

function SpeakerDetailModal({ closeModal }: ISpeakerDetailModal) {
      return (
            <Modal size="w-full max-w-[70rem]" closeHandler={closeModal}>
                  <div className="flex flex-col justify-center items-center w-full h-full gap-8 sm:flex-row sm:items-start max-w-[70rem]">
                        <section
                              className="flex flex-col justify-center items-center gap-2 w-72 h-fit
                                    sm:w-96
                              "
                        >
                              <img
                                    className="w-full h-70 
                                          sm:h-60 
                                          lg:h-80
                                    "
                                    src="https://web-summit-avenger.imgix.net/production/avatars/original/45b25080a128d67b821094ef524ab226a17185f1.jpeg?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                                    alt="speaker"
                              />

                              <a
                                    href="http://"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary self-end"
                              >
                                    View presentation
                              </a>
                        </section>

                        <aside className="flex flex-col gap-6 w-full h-full leading-relaxed">
                              <section className="flex flex-col gap-0.5 w-full text-xl">
                                    <h4 className="font-bold text-2xl">Meredith Whittaker</h4>
                                    <p>President</p>
                                    <p>Signal</p>
                              </section>

                              <p>
                                    Angela Grace Garong, also known as &quot;Anj,&quot; is an independent
                                    design consultant and educator. As the founder of Ang Design, she assists
                                    early-stage startups in creating purposeful and empowering experiences
                                    that align with business objectives. Anj&apos;s expertise lies in her
                                    experience as a designer, where she has played pivotal roles in various
                                    startups. She has led design teams, cultivated design cultures, and built
                                    design systems from scratch, contributing to the growth and scaling of
                                    products such as Sprout Solutions and MyKuya. Additionally, Anj has a
                                    strong presence in academia, teaching students the application of Design
                                    Thinking in software engineering and game development. She has designed
                                    curricula, conducted UX workshops, and provided consulting services to
                                    notable organizations like AirAsia, Western Union, and Cebu Pacific.
                                    Currently, Anj focuses on designing in the Web3 space, facilitating
                                    accessible decentralized finance strategies for everyday investors through
                                    Hawksight. She is an instructor at UX+ University, where she helps
                                    aspiring UX professionals launch their careers in a 16-week program. Anj
                                    also dedicates time to the local design community by participating in
                                    speaking engagements and offering mentorship.
                              </p>
                        </aside>
                  </div>
            </Modal>
      );
}

export default SpeakerDetailModal;
