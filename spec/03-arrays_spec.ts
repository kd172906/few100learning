import { roundToTwoPlaces } from "./utils";

describe('destructuring', () => {
    it('destructuring arrays', () => {
        const friends = ['kevin', 'james', 'billy', 'lindsey', 'mo'];

        const [f1, f2] = friends;
        expect(f1).toBe('kevin');
        expect(f2).toBe('james');

        const [d1, , d2, ...rest] = friends;
        expect(d1).toBe('kevin');
        expect(d2).toBe('billy');
        expect(rest).toEqual(['lindsey', 'mo']);

    });
    // object has properties, arrays have indexes.  Cannot pull data by number, must be by prop name

    it('destructuring objects', () => {
        const friends = {
            number1: 'sean',
            number2: 'billy',
            number3: 'david',
            number4: 'sarah',
            number5: 'mo'
        };

        const { number1, number2 } = friends;
        expect(number1).toBe("sean");
        expect(number2).toBe("billy");

        const { number4: f1, number5: f2 } = friends;
        expect(f1).toBe("sarah");
        expect(f2).toBe("mo");

        const { number1: n1, ...other } = friends;
        expect(other).toEqual({
            number2: 'billy',
            number3: 'david',
            number4: 'sarah',
            number5: 'mo'
        });
    });
});

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];


    it('forEach allows you to look at each member (doesn\'t return anything', () => {
        numbers.forEach((n) => {
            console.log(n);
        })
    });

    describe('methods that produce a new array using the filter function', () => {
        it('selecting just specific stuff from an array', () => {

            function isEven(n: number) {
                return n % 2 === 0;
            }
            //n => n % 2 === 0
            const evens = numbers.filter(isEven);  // filter goes through each element of the array, if statement is true for that element, it is added to new array.  Similar to Where in Lync
            expect(evens).toEqual([2, 4, 6, 8]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);  // just shwoing you this so you see it doesn't change the array

        });

        it('map lets you transform each element of the source array', () => {
            // if there's a place you want to go, it'll get you there you know.  its a map, its a map, its a map

            const doubled = numbers.map(n => n * 2);  // map will always return the same length array you give it.  Similar to Select in Lync
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16]);
        });

        describe('Name of the group', () => {
            it('a quick practice', () => {
                interface Vehicle {
                    vin: string;
                    makeAndModel: string;
                    mileage: number;
                }
                const vehicles: Vehicle[] = [
                    { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                    { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                    { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
                ];
                const answer = ['Toyota Prius', 'Ford Explorer'];

                // find all the vehicles with < 100_000, but just give me the make and model

                const result = vehicles  // All of the vehicles
                    .filter(v => v.mileage < 100_000)  // Just vehicles with less than 100k miles
                    .map(v => v.makeAndModel); // An array of strings that are just the make and model of those

                expect(result).toEqual(answer);
            });

            it('another example', () => {
                interface Product {
                    id: number;
                    description: string;
                    cost: number;
                }

                const products: Product[] = [
                    { id: 1, description: 'Eggs', cost: 1.99 },
                    { id: 2, description: 'Beer', cost: 7.99 },
                    { id: 3, description: 'Chips', cost: 2.99 },
                ];

                // our price markup is 30%.
                // for each product create an array of objects that look like this:
                interface SaleItem {
                    id: number;
                    description: string;
                    price: number;
                }

                // but only if the price is > $5.00
                function makeSaleItemFromProduct(product: Product): SaleItem {
                    const result: SaleItem = {
                        id: product.id,
                        description: product.description,
                        price: roundToTwoPlaces(product.cost)
                    };
                    return result;
                }

                function highPricedItems(item: SaleItem) {
                    return item.price > 5.00;
                }
                const answer: SaleItem[] = products
                    .map(makeSaleItemFromProduct).filter(highPricedItems);

                expect(answer).toEqual([{
                    id: 2, description: 'Beer', price: 10.39
                }]);
            });
        });
    });
});

