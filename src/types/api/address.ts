export type BoundNames = 'country' | 'region' | 'area' | 'city' | 'settlement' | 'street' | 'house' | 'flat';
export type FromBound = BoundNames;
export type ToBound = Exclude<BoundNames, 'flat'>;