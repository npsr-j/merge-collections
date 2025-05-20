import { mergeAndSort } from './../src';

describe("call function mergeAndSort(collections)", () => {
    // test with 3 collections
    it("should return a sorted array ascending", () => {
        const collection_1 = [5, 4, 3, 2, 1];
        const collection_2 = [0, 2, 4, 6, 8];
        const collection_3 = [0, 10, 12, 14, 16];

        const collections = [
        { numbers: collection_1 },
        { numbers: collection_2 },
        { numbers: collection_3 },
        ];

        const sortedCollection = mergeAndSort(collections);
        expect(sortedCollection).toEqual([0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 8, 10, 12, 14, 16]);
    });

    // test empty array
    it("should return an empty array", () => {
        const collections = [
            { numbers: [] },
            { numbers: [] },
            { numbers: [] },
        ];
        const sortedCollection = mergeAndSort(collections);
        expect(sortedCollection).toEqual([]);
    });

    // test performance
    it("should return a sorted array ascending with 100000 elements", () => {
        const collection_1 = Array.from({ length: 100000 }, (_, i) => i);
        const collection_2 = Array.from({ length: 100000 }, (_, i) => i + 100000);
        const collection_3 = Array.from({ length: 100000 }, (_, i) => i + 200000);

        const collections = [
            { numbers: collection_1 },
            { numbers: collection_2 },
            { numbers: collection_3 },
        ];

        const sortedCollection = mergeAndSort(collections);
        expect(sortedCollection.length).toBe(300000);
    });
});
