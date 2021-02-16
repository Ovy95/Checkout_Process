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
    it ("returns -1 value",function() {
      expect(shop.checkout("Ab")).toEqual(-1);
    })
    it ("returns -1 value",function() {
      expect(shop.checkout("AbA")).toEqual(-1);
    })
  })

  describe('Double values return correct prices ', function() {
    it ("AA = 100 ",function() {
      expect(shop.checkout("AA")).toEqual(100);
    })
    it ("BB = 30 ",function() {
      expect(shop.checkout("BB")).toEqual(60);
    })
    it ("CC = 40 ",function() {
      expect(shop.checkout("CC")).toEqual(40);
    })
    it ("DD = 30 ",function() {
      expect(shop.checkout("DD")).toEqual(30);
    })
})
describe('Checks prices with discounts added to them', function() {
  it ("AAA = 130 ",function() {
    expect(shop.checkout("AAA")).toEqual(130);
  })
  it ("BBB = 45 ",function() {
    expect(shop.checkout("BB")).toEqual(45);
  })
  it ("ABABAB = 205 ",function() {
    expect(shop.checkout("CC")).toEqual(205);
  })
  it ("AAABBBCD = 30 ",function() {
    expect(shop.checkout("DD")).toEqual(30);
  })
})



 


   


  


  

});
