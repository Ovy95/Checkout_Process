class Shop {

  discountcheck(num){
    if(num % 3 == 0){
    var apply = num / 3
    }
    return apply
  }

  checkout(items){
    var discountA = 0
    var discountB = 0
    var price = 0
    var item = [...items]

    for(var i = 0 ; i < arr.length; i++) {
      if (item[i].includes("A")) {
        price += 50
        ++ discountA
      } else if (item[i].includes("B")) {
        price += 30
        ++ discountB
      } else if (item[i].includes("C")) {
        price += 20
      } else if (item[i].includes("D")){
        price += 15
      }else {
       price = -1 
       break
      }
    }
    if (discountA > 2){
    price -= (this.discountcheck(discountA) * 20)
    }
    if(discountB > 2){
    price -= (this.discountcheck(discountB) * 15)
    }
    return price
  }
}