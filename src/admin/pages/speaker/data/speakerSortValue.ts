import { SPEAKER_HEADER_LIST } from "./speakerHeaderList";

export const SPEAKER_SORT_VALUE = SPEAKER_HEADER_LIST
      .map(header => header.sortValue)
      .filter((value): value is string => value !== undefined)
