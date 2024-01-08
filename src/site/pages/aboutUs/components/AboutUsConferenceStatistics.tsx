function AboutUsConferenceStatistics() {
      return (
            <section
                  className="grid  grid-cols-1 w-full max-w-[80rem] justify-center items-center gap-x-4 gap-y-20 place-content-center
                        sm:grid-cols-2
                        lg:grid-cols-3 
                  "
            >
                  {[
                        { count: "2,100+", title: "organizers" },
                        { count: "320+", title: "speakers" },
                        { count: "70,000+", title: "attendees" },
                        { count: "43%", title: "women attendees" },
                        { count: "100+", title: "exhibitors" },
                  ].map(({ count, title }, index) => (
                        <span key={index}>
                              <div
                                    className="w-full self-center flex flex-col items-center text-center hover:text-primary
                                    sm:text-start
                              "
                              >
                                    <article>
                                          <p className="text-7xl font-bold">{count}</p>
                                          <p className="text-2xl">{title}</p>
                                    </article>
                              </div>
                        </span>
                  ))}
            </section>
      );
}

export default AboutUsConferenceStatistics;
