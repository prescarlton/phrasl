const categoryList = [
  "Around the House",
  "Before & After",
  "Phrase",
  "Occupation",
  "Event",
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
]
