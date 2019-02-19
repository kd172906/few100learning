describe('Variables and constants and stuff', () => {
    describe('Declaring variables', () => {
        it('using let to create a binding', () => {
            let name;
            name = "joe";
            expect(name).toBe("joe");
            name = 11;
            expect(name).toBe(11);
        });
        it('some typescript stuff for variables', () => {
            let name: string | number = "joe";  //union type

            expect(name).toBe("joe");
            name = 11;
            expect(name).toBe(11);

        });

        it('declaring constants', () => {
            const PI = 3.1415926;
            const FAVORITE_NUMBERS = [2, 55, 66];
            FAVORITE_NUMBERS[0] = 10;
            FAVORITE_NUMBERS[4] = 24;
            const MOVIE = {
                title: "Sandlot",
                director: "Whoknows"
            };

            MOVIE.director = "Johnson";
        });
        it('var is still there but it stinks and should not be used', () => {
            if (true) {
                var name = 'Fido';  //do not declare variable within this if block.  declare outside within test block.
            }

            expect(name).toBe('Fido');

        });
    });

    describe('strings', () => {
        it('delimiting', () => {
            let first = 'Joe',
                last = "Schmidt";
            expect("Joe").toBe(first);

            let msg = "She told \"Get Lost!\"";
            let msg2 = 'She told me "Get Lost!"';

            let story = `Chapter 1.
        
It was a drak and stormy night`;
            console.log(story);

            let fullName = `That is ${last}, ${first}`;
            expect(fullName).toBe('That is Schmidt, Joe');
        });

    });
    describe('various literals', () => {
        it('examples', () => {
            let n1 = 12;
            let n2 = 1.3;
            let n3 = 0xff;
            let n4 = 0b001010;
            let n5 = 0o4234;
            // typescript thing
            const salary = 1_000_000;
        });
    });

    describe('arrays and array literals', () => {
        it('has them', () => {

            //const stuff: (number|string)[] = [12,13];
            const stuff: Array<string | number> = [12, 13];
            stuff[2] = "hello";
            expect(stuff[2]).toBe("hello");

            let word = stuff[2];
            // when typing "word." intellisense will only show common functions between the type union
        });
        // tuple is an array of types returned by a function
        // tuple is a typed-array.  Says this array is going to have 2 elements, of certain data type
        describe('tuples', () => {
            it('a brief introduction using TS', () => {
                let warren: [string, string, number, string];
                warren = ['Warren', 'Ellis', 55, 'Musician'];

                let occupation = warren[3];
                let age = warren[2];

            });
            it('an example', () => {

                function formatName(first: string, last: string): [string, number] {
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }
                const [fullName, len] = formatName('Han', 'Solo'); // destructuring
                expect(fullName).toBe('Solo, Han');
                expect(len).toBe(9);


                const stuff = ['Jeff', 'Gonzalez', 49];
                const [firstName, , age] = stuff;
                expect(firstName).toBe('Jeff');
                expect(age).toBe(49);
            });

        });

    });
});