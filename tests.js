// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function(){
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });

    it("should return typeof string", function(){
        expect(typeof sayHello()).toBe("string");
    });

    it("Returns Hello Alex when given input", function(){
        expect(sayHello("Jenny")).toBe("Hello, Jenny!");
    });

    it("Returns Hello Alex when given input", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })

    it("Returns Hello Pat when given input", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })


})


