import PageHeader from "@/site/shared/pageHeader/PageHeader";

function NewsHeader() {
      return (
            <PageHeader
                  id="about-us-header"
                  heightClasses="h-[20rem] pt-14 
                        md:h-[20rem]
                        lg:pt-0 
                  "
            >
                  <h1 className="text-4xl font-bold tracking-wider sm:text-center">
                        The Story of Kathmandu&apos;s IT Conference
                  </h1>
            </PageHeader>
      );
}

export default NewsHeader;
