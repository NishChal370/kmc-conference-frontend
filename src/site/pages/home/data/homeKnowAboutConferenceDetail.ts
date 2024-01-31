import { ABOUT_US_PATH, ORGANIZERS_PATH, SCHEDULE_PATH } from "@/site/constants/routePath";

const HOME_KNOW_ABOUT_CONFERENCE_DETAIL = [
      {
            id: "session-card---background",
            title: "Sessions",
            description: "Explore the Kathmandu IT Conference 2080 Sessions",
            pathName: SCHEDULE_PATH.schedule.full(),
      },
      {
            id: "aboutUs-card---background",
            title: "About Us",
            description: "The Story of Kathmandu's IT Conference",
            pathName: ABOUT_US_PATH.aboutUs.full,
      },
      {
            id: "organizer-card---background",
            title: "Organizers",
            description:
                  "The Driving Force: Organizers of Kathmandu IT Conference 2080",
            pathName: ORGANIZERS_PATH.organizer.full,
      },
] as const;

export default HOME_KNOW_ABOUT_CONFERENCE_DETAIL;