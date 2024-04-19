import { ADMIN_PARTICIPANT_HEADER_LIST } from './adminParticipantHeader';

export const ADMIN_PARTICIPANT_SORT_VALUE = ADMIN_PARTICIPANT_HEADER_LIST
      .map(header => header.sortValue)
      .filter((value): value is string => value !== undefined);