import PageHeader from "@/site/shared/pageHeader/PageHeader";
import "../style/contactUsHeader.css";

function ContactUsHeader() {
      return (
            <PageHeader
                  id="contactUs-header"
                  heightClasses="h-[28rem] pt-10 
                        sm:h-[22rem] sm:pt-20 
                        md:h-[20rem] md:pt-10
                  "
            >
                  <h1 className="text-4xl font-bold tracking-wider sm:text-center">Contact Us</h1>
            </PageHeader>
      );
}

export default ContactUsHeader;
