export type Overwrite<T, U> = U & { [P in Exclude<keyof T, keyof U>]: T[P] };
