class Shop {

  checkout(str){
    var price = -1

    if (str.includes("A")) {
      price += 51

    } else if (str.includes("B")) {
      price += 31
    } else if (str.includes("C")) {
      price += 21
    } else if (str.includes("D")){
      price += 16
    }else {
      return price
    }
    return price
  
    


  }


}