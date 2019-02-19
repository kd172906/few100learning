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
});