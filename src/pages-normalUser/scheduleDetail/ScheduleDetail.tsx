import ScheduleArticle from "./components/ScheduleArticle";
import ScheduleDetailHeader from "./components/ScheduleDetailHeader";
import ScheduleActionHeader from "./components/ScheduleActionHeader";
import ScheduleScheduleCard from "./components/ScheduleScheduleCard";
import ScheduleSpeakerBanner from "./components/ScheduleSpeakerBanner";

function ScheduleDetail() {
      return (
            <span className="flex flex-col w-full h-full justify-center items-center gap-10 !mb-0">
                  <ScheduleDetailHeader />

                  <span
                        className="flex justify-center items-start gap-32 px-6 
                              lg:w-[90%]
                              xl:w-[70%]
                        "
                  >
                        <article
                              className="w-full flex flex-col gap-14 text-sm
                                    [&>span]:flex [&>span]:flex-col [&>span]:justify-center [&>span]:gap-1.5
                                    [&>span>*]:leading-loose
                                    [&>span>h5]:text-xl [&>span>h5]:font-semibold
                              "
                        >
                              <span className="w-full flex !gap-0 !leading-3 h-fit">
                                    <h3 className="text-lg font-semibold">Saturday, January 27</h3>
                                    <h1 className="text-4xl font-bold">Marketing Workshop #2</h1>
                              </span>

                              <span className="lg:!hidden">
                                    <h5>Date and time</h5>
                                    <p>Saturday, January, 2028 . 16:00 -19-00</p>
                              </span>

                              <span className="lg:!hidden">
                                    <h5>Location</h5>
                                    <p>Bhanimandal</p>
                                    <p>lalitpur Lalitpur, Bagmati Provision 44600</p>
                              </span>

                              <span className="lg:!hidden">
                                    <h5>Parking</h5>
                                    <p>Civil Mall; underground</p>
                                    <p>Kmc, Tridevi Marg 29, Kathmandu 44600</p>
                              </span>

                              <span className="lg:!hidden">
                                    <h5>Accommodation</h5>
                                    <p>Fairfield by Marriott Hotel</p>
                                    <p>Kmc, Tridevi Marg 29, Kathmandu 44600</p>
                              </span>

                              <ScheduleArticle
                                    title="About this session"
                                    article=" Manaslu circuit trek is a 2 weeks long tea house mode trek around
                                          the mount Manaslu scaling 8163m above sea level. You will get the
                                          highest elevation gain of 5105m at the Larke Pass. Since this is
                                          also one of the restricted regions you will need a group of at least
                                          two people to obtain the trekking permit. The 177 Km long trail
                                          follows an ancient salt trading route along the Budhi Gandaki river.
                                          On this trek, you will see 10 peaks over 6500m and a few over 7000m
                                          including the eighteenth-highest Himalchuli with an elevation of
                                          7,893m. The major attractions of the area are high glacial lakes,
                                          Gurung villages, and rich biodiversity. Manaslu circuit trek starts
                                          by taking a jeep drive to Machha Khola in Gorkha district. From
                                          there the trail leads through the villages inhabited mostly by the
                                          Gurung communities. Through the misty alpine meadows accompanied by
                                          several river streams, you will cross the Larke Pass and descend to
                                          Bhimtang in the Marsyangdi valley. From Bhimtang you will follow an
                                          easy trekking trail to Dharmashala where you will catch a jeep drive
                                          back to Kathmandu."
                              />

                              <ScheduleArticle
                                    title="Agenda"
                                    article="Keynote Intro to Imagine Cup & How to Build a Winning Imagine Cup
                                    Project Team (Tips & Tricks) Imagine Cup Experience Sharing
                                    Leveraging Azure in Imagine Cup Projects Leveraging AI & ML in Your
                                    IC Project How to Market Your Product? Microsoft Learn Student
                                    Ambassadors Program and Team Info IDEATHON Workshop with Team
                                    Building Here is a quick summary of what you need in order to
                                    participate in the Imagine Cup:"
                              />

                              <ScheduleArticle
                                    title="Goals"
                                    article="Here is a quick summary of what you need in order to participate in
                                          the Imagine Cup: Global competition for students aged 18+ You’re
                                          welcome to imagine any solution that you’re passionate about but
                                          must include a Microsoft product/ tech and take into consideration
                                          diversity, inclusion, and accessibility. Maximum four (4) members
                                          per team"
                              />

                              <ScheduleArticle
                                    title="Keynotes"
                                    article="Here is a quick summary of what you need in order to participate in
                                          the Imagine Cup: Global competition for students aged 18+ You’re
                                          welcome to imagine any solution that you’re passionate about but
                                          must include a Microsoft product/ tech and take into consideration
                                          diversity, inclusion, and accessibility. Maximum four (4) members
                                          per team"
                              />

                              <ScheduleArticle
                                    title="Accessibility Information"
                                    article="Elevator Access: Our venue, located on the third floor of Civil Mall, is equipped with reliable elevator services to assist attendees who require support with stairs. 
                                    Wheelchair Accessibility: The entire venue, including the workshop spaces and restrooms, is wheelchair accessible. We also have designated wheelchair seating areas in the workshop rooms."
                              />

                              <ScheduleSpeakerBanner />
                        </article>

                        <ScheduleScheduleCard />
                  </span>

                  <ScheduleActionHeader />
            </span>
      );
}

export default ScheduleDetail;
