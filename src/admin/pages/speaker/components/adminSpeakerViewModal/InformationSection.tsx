interface IInformationSection {
      title: string;
      children: JSX.Element;
}

function InformationSection({ title, children }: IInformationSection) {
      return (
            <>
                  <section
                        className="flex flex-col gap-y-5 py-12 text-md first:pt-0
                              [&>h5]:text-mute [&>h5]:font-semibold [&>h5]:!tracking-wider 
                              [&>article]:flex  [&>article]:flex-col
                              [&>article]:sm:grid [&>article]:grid-cols-1 [&>article]:sm:grid-cols-3 [&>article]:place-items-start [&>article]:content-center  [&>article]:gap-x-1.5 [&>article]:gap-y-9 [&>article]:items-start [&>article]:w-full
                              
                              [&>article>span]:flex [&>article>span]:flex-col [&>article>span]:gap-2 [&>article>span]:self-start [&>article>span]:sm:justify-self-center
                              [&>article>span:nth-child(1)]:sm:justify-self-start
                              [&>article>span:nth-child(3)]:sm:justify-self-end
                              [&>article>span:nth-child(4)]:sm:justify-self-start
                              [&>article>span:nth-child(6)]:sm:justify-self-end

                              [&>article>span>h6]:text-sm  [&>article>span>h6]:font-semibold

                              break-words

                              [&>article>span>p]:text-mute 
                              [&>article>span]:sm:min-w-[10rem] [&>article>span]:sm:max-w-[10rem] 
                              [&>article>span]:xl:min-w-[12rem] [&>article>span]:xl:max-w-[12rem]

                              [&>article>span>a]:text-blue-400 
                             
                              [&>article>span>ul]:text-mute [&>article>span>ul]:list-disc [&>article>span>ul]:pl-5 
                        
                        "
                  >
                        <h5>{title}</h5>

                        {children}
                  </section>
                  <hr />
            </>
      );
}

export default InformationSection;
