let expect = require("chai").expect;
let converter = require("../app/converter.js");


describe("Color Code Converter", function(){

    describe("RGB to HEX conversion", function() {
        it("convert basic colors", function () {
            let redHex = converter.rgbToHex(255, 0, 0);
            let greenHex = converter.rgbToHex(0, 255, 0);
            let blueHex = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
        });
    });

    describe("HEX to RGB conversion", function() {
        it("convert basic colors", function () {
            let red = converter.hexToRgb("ff0000");
            let green = converter.hexToRgb("00ff00");
            let blue = converter.hexToRgb("0000ff");

            expect(red).to.deep.equal([255, 0 ,0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });

});
