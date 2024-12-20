export const SCHEDULE_PATH = {
      schedule: {
            basic: "conference-schedule/:dayId?/:themeId?",
            paramNameOne: "dayId",
            paramNameTwo: "themeId",
            full: (scheduleDetail?: { dayId?: number, themeId?: number }) =>
                  !scheduleDetail
                        ? `/conference-schedule/`
                        : `/conference-schedule/${scheduleDetail?.dayId}${scheduleDetail.themeId ? "/" + scheduleDetail.themeId : ""}`
      },

      detail: {
            basic: "schedule-detail/:sessionId",
            paramName: "sessionId",
            full: (sessionId: number) => `/conference-schedule/schedule-detail/${sessionId}`
      }
};
