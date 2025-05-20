const collection_1 = [5, 4, 3, 2, 1];
const collection_2 = [0, 1, 2, 3, 4];
const collection_3 = [0, 6, 7, 8, 9];

export interface Collection {
    numbers: number[];
}

export function mergeAndSort(collections: Collection[]): number[] {
    let mergedCollection: number[] = [];

    // Merge all collections
    collections.forEach((collection) => {
        mergedCollection.push(...collection.numbers);
    });
    console.log('collections: ', mergedCollection);

    if (mergedCollection.length <= 1) {
        return mergedCollection;
    }
    
    // Sort the merged collection
    mergedCollection = quickSort(mergedCollection);
    console.log('sorting asc:', mergedCollection);
    return mergedCollection;
}

export function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter((x) => x < pivot);
    const middle = arr.filter((x) => x === pivot);
    const right = arr.filter((x) => x > pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

export function main() {
    const collections: Collection[] = [
        { numbers: collection_1 },
        { numbers: collection_2 },
        { numbers: collection_3 },
    ];

    mergeAndSort(collections);
}
