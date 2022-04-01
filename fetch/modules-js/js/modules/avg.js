'use strict';

// sukurti funkcija kuri grazina dvieju paduotu skaiciu vidurki // countAvg(10, 15)
export function countAvg(n1, n2) {
    return (n1 + n2) / 2;
}

export function countAvgThree(n1, n2, n3) {
    return (n1 + n2 + n3) / arguments.length;
}