import { SCHEDULE_PATH, SPEAKER_PATH } from "@/constants/routePath/path-normalUser";

export const ABOUT_US_NAVIGATION_DETAIL = [
      {
            title: "Schedule",
            subTitle: "Find you schedule",
            path: SCHEDULE_PATH.schedule.full,
            img: "https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
            title: "Speaker",
            subTitle: "Find your speakers",
            path: SPEAKER_PATH.speaker.full,
            img: "https://www.extolloadventures.com/wp-content/uploads/2018/07/Durbar-Square-1350x670.jpg",
      },
      {
            title: "Organizers",
            subTitle: "Explore your organizers",
            path: "",
            img: "https://images.unsplash.com/photo-1676873779968-f991734295c9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
] as const;
