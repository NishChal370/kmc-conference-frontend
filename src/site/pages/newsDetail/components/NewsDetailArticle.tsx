function NewsDetailArticle() {
      return (
            <section
                  className="flex flex-col gap-20 mt-[6rem] items-center w-[90%] 
                        lg:w-[56%] lg:max-w-[66rem]
                  "
            >
                  <header className="w-full h-fit flex flex-col items-center gap-10">
                        <span className="flex flex-col w-full gap-4">
                              <h1 className="text-4xl font-black">Now Streaming: LiveWorx On Demand</h1>
                              <p className="text-base font-semibold ">June 29, 2023</p>
                        </span>

                        <figure
                              className="flex w-full h-fit 
                                    lg:h-[30rem]
                              "
                        >
                              <img
                                    className="bg-mute-1 w-[100%] h-full object-contain object-center"
                                    src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F663515379%2F51342771090%2F1%2Foriginal.20231227-003754?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C7%2C960%2C480&s=54d364cfda7e7bfbf51bbf828c93add3"
                                    alt=""
                              />
                        </figure>
                  </header>

                  <article className="[&>*]:leading-loose">
                        <p>
                              It’s hard to believe LiveWorx took place in Boston over a month ago. We are
                              still on a high from the amazing energy and ideas brought forth by the thousands
                              of attendees and presenters. Did you miss a presentation or wish you could
                              revisit one? Good news! The digital transformation strategies showcased at the
                              conference can continue to inspire us for months to come. With the brand new
                              LiveWorx On Demand hub, you can access over 80 of the event’s most popular
                              sessions and presentation files on topics like ALM, AR, CAD, IIoT, PLM, and
                              more. From Case Studies and Fireside Chats to Track Spotlights and celebrity
                              keynotes on the main stage, there are hours of content available for your
                              viewing pleasure, all for free, and all from the comfort of your own home. Start
                              Watching Highlights on the Hub Don’t know where to start? Start streaming the
                              main stage action and explore the presentation files shared by these industry
                              experts: Keynote: Path to the Future: Products in the Age of Transformation with
                              Jim Heppelmann, PTC A New Vision for Service with Neil Barua, PTC; Jean-Pierre
                              Samilo, Schneider Electric; and Phillip Greene, Alcon Vision Suite Product
                              Lifecycle Innovation with Windchill and Windchill+ with Mark Lobo, PTC; Helmut
                              Huprich, Schaeffler AG; Lasse Nowack, Vestas Wind Systems A/S; and Reggie
                              Fortson, Johnson & Johnson Where Creo and Creo+ Meet: A Roadmap with Paul Sagar,
                              PTC; and Brian Thompson, PTC Celebrity Keynote: Where Good Ideas Come From with
                              Steven Johnson Extending the Value of the Digital Thread with ALM, IIoT, and AR
                              with Abby Eon, PTC; Christoph Braeuchle, PTC; JJ Lechleiter, PTC; and Howard
                              Heppelmann, PTC Embracing Agile Product Development with Professor Steven
                              Eppinger, MIT Tangible Strategies for Improving Product Sustainability with Dave
                              Duncan, PTC; and Catherine Kniker, PTC Celebrity Keynote: A Brave World of
                              Risk-Taking and Living a Life of Purpose with Alex Honnold, Jimmy Chin, and
                              Kelly Corrigan Explore All Sessions{" "}
                        </p>
                  </article>
            </section>
      );
}

export default NewsDetailArticle;
