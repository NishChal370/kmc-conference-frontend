import { useState } from "react";
import ScheduleTopicSelectInput from "../components/scheduleTopic/ScheduleTopicSelectInput";
import { IScheduleContentBriefDetailModel } from "@/admin/model/schedule/scheduleContentModel";

type ITopic = IScheduleContentBriefDetailModel["sessionTopics"][0];

interface IScheduleTopicSelectInputContainer {
      options: IScheduleContentBriefDetailModel["sessionTopics"];
      children: (selectedTopicId: ITopic["id"]) => JSX.Element;
}

function ScheduleTopicSelectInputContainer({ options, children }: IScheduleTopicSelectInputContainer) {
      const [topic, setTopic] = useState<ITopic | undefined>(options[0]);

      const onChangeHandler = (value: ITopic) => {
            setTopic(value);
      };

      return (
            <>
                  <ScheduleTopicSelectInput
                        options={options}
                        value={topic}
                        onChangeHandler={onChangeHandler}
                  />

                  {topic ? (
                        children(topic.id)
                  ) : (
                        <p className="text-error font-medium">Session topic Not found</p>
                  )}
            </>
      );
}

export default ScheduleTopicSelectInputContainer;
