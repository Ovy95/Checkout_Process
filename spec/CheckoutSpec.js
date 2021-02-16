describe("Shop", function() {
  var shop;

  beforeEach (function () {
   shop = new Shop();
  });

  describe('Single values return correct prices ', function() {
      it ("A = 50 ",function() {
        expect(shop.checkout("A")).toEqual(50);
      })
      it ("B = 30 ",function() {
        expect(shop.checkout("B")).toEqual(30);
      })
      it ("C = 20 ",function() {
        expect(shop.checkout("C")).toEqual(20);
      })
      it ("D = 15 ",function() {
        expect(shop.checkout("D")).toEqual(15);
      })
  })
  describe('Input wrong string', function() {
    it ("returns -1 value",function() {
      expect(shop.checkout("a")).toEqual(-1);
    })
    
})



 


   


  


  

});
