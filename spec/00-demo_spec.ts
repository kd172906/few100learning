describe('Testing a basic spec', () => {
    it('should be easy', () => {
        // Given (Arrange) (Create)
        let firstName = "Kevin";
        let lastName = "Downey";
        // When (Act) (Do something)
        let fullName = lastName + ", " + firstName;

        // Then (Assert)
        expect(fullName).toBe("Downey, Kevin");

    });
});