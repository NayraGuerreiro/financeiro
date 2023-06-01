import { Item } from "../types/Item";

export function getCurrentMonth() {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}`;
}

export function filterListByMonth(list: Item[], date: string): Item[] {
  let newList: Item[] = [];
  let [year, month] = date.split("-");

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }
  return newList;
}

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${day}/${month}/${year}`;
};

export function addZeroToDate(n: number): string {
  if (n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
}
