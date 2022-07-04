const categoryList = [
  "Around the House",
  "Before & After",
  "Phrase",
  "Occupation",
  "Event",
  "On the Map",
  "Fun & Games",
  "Landmark",
  "Living Thing",
  "Living Things",
  "People",
  "Person",
  "Places",
  "Rhyme Time",
  "Same Name",
  "Show Biz",
  "Thing",
  "Things",
  "TV Title",
  "What Are You Doing?",
  "Food & Drink",
] as const

export type PuzzleCategory = {
  label: typeof categoryList[number]
  id: number
}

export const PuzzleCategories: PuzzleCategory[] = [
  {
    label: "Around the House",
    id: 1,
  },
  {
    label: "Before & After",
    id: 2,
  },
  {
    label: "Phrase",
    id: 3,
  },
  {
    label: "Occupation",
    id: 4,
  },
  {
    label: "Event",
    id: 5,
  },
  {
    label: "On the Map",
    id: 6,
  },
  { label: "Fun & Games", id: 7 },
  { label: "Landmark", id: 8 },
  { label: "Living Thing", id: 9 },
  { label: "Living Things", id: 10 },
  { label: "People", id: 11 },
  { label: "Person", id: 12 },
  { label: "Places", id: 13 },
  { label: "Rhyme Time", id: 14 },
  { label: "Same Name", id: 15 },
  { label: "Show Biz", id: 16 },
  { label: "Food & Drink", id: 17 },
  { label: "Thing", id: 18 },
  { label: "Things", id: 19 },
  { label: "TV Title", id: 20 },
  { label: "What Are You Doing?", id: 21 },
]
