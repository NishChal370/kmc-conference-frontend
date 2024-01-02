function SpeakerDetail() {
      return (
            <div
                  className="flex flex-col gap-10 justify-center items-center leading-loose w-full max-w-[68rem] px-10 h-fit
                        md:flex-row md:items-start
                        xl:w-[80%] xl:max-w-[72rem] 
                        2xl:w-[80%] 2xl:max-w-[72rem] 
                  "
            >
                  <div
                        className="self-start flex flex-col gap-2 justify-start items-start text-start w-full max-w-[20rem] h-[20rem] 
                              sm:w-[26rem] sm:h-fit
                        "
                  >
                        <img
                              className="w-full h-[20rem] object-cover"
                              src="https://web-summit-avenger.imgix.net/production/avatars/original/72580bd9508f9029943eb42756b8acb88b17d3bc.png?ixlib=rb-3.2.1&auto=format&fit=crop&crop=faces&w=300&h=300"
                              alt="speaker"
                        />
                  </div>
                  <article className="flex flex-col gap-6 w-full">
                        <span>
                              <p className="font-bold text-2xl">About Angela Grace Garong</p>
                              <p>President; Signal</p>
                        </span>
                        <p className=" line-clamp-2 hover:line-clamp-none">
                              Angela Grace Garong, also known as &quot;Anj,&quot; is an independent design
                              consultant and educator. As the founder of Ang Design, she assists early-stage
                              startups in creating purposeful and empowering experiences that align with
                              business objectives. Anj&apos;s expertise lies in her experience as a designer,
                              where she has played pivotal roles in various startups. She has led design
                              teams, cultivated design cultures, and built design systems from scratch,
                              contributing to the growth and scaling of products such as Sprout Solutions and
                              MyKuya. Additionally, Anj has a strong presence in academia, teaching students
                              the application of Design Thinking in software engineering and game development.
                              She has designed curricula, conducted UX workshops, and provided consulting
                              services to notable organizations like AirAsia, Western Union, and Cebu Pacific.
                              Currently, Anj focuses on designing in the Web3 space, facilitating accessible
                              decentralized finance strategies for everyday investors through Hawksight. She
                              is an instructor at UX+ University, where she helps aspiring UX professionals
                              launch their careers in a 16-week program. Anj also dedicates time to the local
                              design community by participating in speaking engagements and offering
                              mentorship.
                        </p>

                        <dl>
                              <dt className="font-bold">View Angela schedules</dt>
                              <dd className="w-fit cursor-pointer hover:underline">
                                    - Marketing Workshop #1
                              </dd>
                              <dd className="w-fit cursor-pointer hover:underline">
                                    - Marketing Workshop #2
                              </dd>
                              <dd className="w-fit cursor-pointer hover:underline">
                                    - Marketing Workshop #3
                              </dd>
                        </dl>
                  </article>
            </div>
      );
}

export default SpeakerDetail;
