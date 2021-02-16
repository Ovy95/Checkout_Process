class Shop {

  checkout(str){
    var discountA = 0
    var discountB = 0
    var i = 0;
    var len = str.length;
    var price = 0
    var arr = [...str]

    for(; i < len;) {

      if (arr[i].includes("A")) {
        price += 50
        ++ discountA
      } else if (arr[i].includes("B")) {
        price += 30
        ++ discountB
      } else if (arr[i].includes("C")) {
        price += 20
      } else if (arr[i].includes("D")){
        price += 15
      }else {
       price = -1 
       break
      }
      i++;
    }
    if (discountA % 3 == 0 ){
      console.log(discountB / 3 )
     var times = discountA / 3 
      price -= (times * 20)
    }
    if (discountB % 3 == 0 ){
      console.log(discountB / 3 )
      var times = discountB / 3 
      price -= (times * 15)
    }
    return price
  }
}