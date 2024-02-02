import ContactUsFormContainer from "../containers/ContactUsFormContainer";
import mail from "@/assets/image/webp/write-mail.png";
import twitter from "@/assets/image/webp/twitter.webp";
import facebook from "@/assets/image/webp/facebook.png";
import linkedin from "@/assets/image/webp/linkedin-outline.webp";
import telephone from "@/assets/image/webp/telephone.png";
import { APP_FACEBOOK, APP_LINKEDIN, APP_TWITTER } from "@/constants/appDetail";

function ContactUsBody() {
      return (
            <span className=" flex justify-center items-center w-full min-h-[50vh] mt-10 md:mt-0">
                  <div className="w-[90%] lg:w-[60%] flex flex-col-reverse gap-20 md:gap-0  md:grid md:grid-cols-2 justify-center lg:max-w-[70rem]">
                        <aside className="w-full grid gap-y-10">
                              <span className="flex flex-col">
                                    <h4 className=" font-semibold text-primary">Contact Us</h4>
                                    <h1 className=" text-xl font-semibold">Get In Touch With Us</h1>
                              </span>

                              <section
                                    className="flex flex-col gap-6 text-sm
                                          [&>span]:flex [&>span]:gap-2.5 [&>span]:items-center
                                    "
                              >
                                    <span>
                                          <img src={telephone} className="w-6 h-6" alt=" telephone" />
                                          <article>
                                                <p className="font-semibold">Phone Number</p>
                                                <p>01-565629</p>
                                          </article>
                                    </span>
                                    <span>
                                          <img src={mail} className="w-6 h-6" alt="mail" />
                                          <article>
                                                <p className="font-semibold">Email Address</p>
                                                <p>info@gmaiil.com</p>
                                          </article>
                                    </span>
                              </section>

                              <section className="flex gap-4 aspect-auto">
                                    <a href={APP_LINKEDIN} target="_blank" rel="noreferrer">
                                          <img
                                                src={linkedin}
                                                className="w-6 h-6 hover:shadow-2xl  hover:-translate-y-1 hover:scale-110"
                                                alt="linkedin"
                                          />
                                    </a>
                                    <a href={APP_FACEBOOK} target="_blank" rel="noreferrer">
                                          <img
                                                src={facebook}
                                                className="w-6 h-6 hover:shadow-2xl  hover:-translate-y-1 hover:scale-110"
                                                alt="facebook"
                                          />
                                    </a>
                                    <a href={APP_TWITTER} target="_blank" rel="noreferrer">
                                          <img
                                                src={twitter}
                                                className="w-6 h-6 hover:shadow-2xl hover:-translate-y-1 hover:scale-110"
                                                alt="twitter"
                                          />
                                    </a>
                              </section>
                        </aside>

                        <section className="flex flex-col gap-10  w-full">
                              <section className="flex flex-col gap-2">
                                    <h4 className=" font-semibold text-2xl">Send us a Message</h4>
                                    <p className="font-medium text-sm text-mute">
                                          When you fill out the form, out team will get back to you.
                                    </p>
                              </section>

                              <ContactUsFormContainer />
                        </section>
                  </div>
            </span>
      );
}

export default ContactUsBody;
