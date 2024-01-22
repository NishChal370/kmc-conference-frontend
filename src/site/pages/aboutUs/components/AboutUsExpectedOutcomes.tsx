import { EXPECTED_OUTCOMES } from "../data/conferenceExpectedOutcomes";

function AboutUsExpectedOutcomes() {
      return (
            <div className="flex flex-col gap-10 justify-start items-start w-[80%] max-w-[80rem]">
                  <h4 className=" text-4xl font-bold text-primary"> Expected Outcomes</h4>

                  <ul className=" text-lg -tracking-wider flex flex-col gap-6 sm:text-justify list-decimal px-6">
                        {EXPECTED_OUTCOMES.map((highlight, index) => (
                              <li key={index}>
                                    <span className="font-semibold">{highlight.title}</span> {highlight.text}
                              </li>
                        ))}
                  </ul>
            </div>
      );
}

export default AboutUsExpectedOutcomes;
