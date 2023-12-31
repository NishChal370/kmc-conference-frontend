export const SCHEDULE_PATH = {
      schedule: {
            basic: "conference-schedule",
            full: "/conference-schedule"
      },

      detail: {
            basic: "schedule-detail/:sessionId",
            full: (sessionId: number) => `/conference-schedule/schedule-detail/${sessionId}`
      }
};
