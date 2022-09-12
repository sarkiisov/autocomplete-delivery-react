export const BoundsPriorities = ['country', 'region', 'area', 'city', 'settlement', 'street', 'house', 'flat'] as const;
export type BoundNames = typeof BoundsPriorities[number];
export type FromBound = BoundNames;
export type ToBound = Exclude<BoundNames, 'flat'>;