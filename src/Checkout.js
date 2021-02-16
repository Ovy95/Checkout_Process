

class Shop {

  checkout(str){
    var str
    var i = 0;
    var len = str.length;
    var price = 0
    var arr = [...str]
    for(; i < len;) {

      if (arr[i].includes("A")) {
        price += 50
      } else if (arr[i].includes("B")) {
        price += 30
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
    return price
  }


}