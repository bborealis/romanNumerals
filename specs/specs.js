describe('romanNumeral', function() {
    it("enter a number and recieve a roman numeral", function() {
        expect(romanNumeral(1)).to.be.eql("I");
    });

    it("enter a 2 and recieve a roman numeral", function() {
        expect(romanNumeral(2)).to.be.eql("II");
    });

    it("enter a 3 and recieve a roman numeral", function() {
        expect(romanNumeral(3)).to.be.eql("III");
    });

    it("enter a 4 and recieve a roman numeral", function() {
        expect(romanNumeral(4)).to.be.eql("IV");
    });

    it("enter a 5 and recieve a roman numeral", function() {
        expect(romanNumeral(5)).to.be.eql("V");
    });

    it("enter a 6 and recieve a roman numeral", function() {
        expect(romanNumeral(6)).to.be.eql("VI");
    });

    it("enter a 11 and recieve a roman numeral", function() {
        expect(romanNumeral(11)).to.be.eql("XI");
    });

    it("enter a 50 and recieve a roman numeral", function() {
        expect(romanNumeral(50)).to.be.eql("L");
    });
});
