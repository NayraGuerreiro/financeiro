import { Item } from "../types/Item";

export const items: Item[] = [
  {
    date: new Date(2023, 5, 2),
    category: "despesa",
    title: "Spoleto",
    value: 20.0,
  },
  {
    date: new Date(2023, 6, 8),
    category: "renda",
    title: "Salário",
    value: 4500.0,
  },
  {
    date: new Date(2023, 6, 10),
    category: "despesa",
    title: "Mercado",
    value: 150.0,
  },
  {
    date: new Date(2023, 6, 15),
    category: "despesa",
    title: "Aluguel",
    value: 1200.0,
  },
  {
    date: new Date(2023, 6, 20),
    category: "despesa",
    title: "Festival",
    value: 100.0,
  },
];
