import { compareDesc } from "date-fns";

import { IsoDateTimeString } from "@/.contentlayer/generated";

interface DatedItem {
  date: IsoDateTimeString;
}

export const sortByDateDescending = <T extends DatedItem>(items: T[]): T[] => {
  return items.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
};
