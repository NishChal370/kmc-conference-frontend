import { ORGANIZERS_PATH, SCHEDULE_PATH, SPEAKER_PATH } from "@/site/constants/routePath";
import scheduleImg from "@/assets/image/webp/pexels-photo-2104882.webp";
import KDSImg from "@/assets/image/webp/Kathmandu_Durbar_Square_968.webp";
import orgImg from "@/assets/image/webp/photo-1676873779968-f991734295c9.webp";

export const ABOUT_US_NAVIGATION_DETAIL = [
      {
            title: "Schedule",
            subTitle: "Find you schedule",
            path: SCHEDULE_PATH.schedule.full(),
            img: scheduleImg,
      },
      {
            title: "Speaker",
            subTitle: "Find your speakers",
            path: SPEAKER_PATH.speaker.full,
            img: KDSImg,
      },
      {
            title: "Organizers",
            subTitle: "Explore your organizers",
            path: ORGANIZERS_PATH.organizer.full,
            img: orgImg,
      },
] as const;
