function convert() {
    var unitFrom = document.querySelector(".select1").value;
    var unitTo = document.querySelector(".select2").value;
    var value = Number(document.querySelector("input").value);
    let resultSpan = document.querySelector(".result");
    let result;

           if (unitFrom == "cm" && unitTo == "cm") {
            result = value *1;}
           else if (unitFrom == "m" && unitTo == "m") {
            result = value*1}
            else if (unitFrom == "km" && unitTo == "km") {
                result = value*1}
             else if (unitFrom == "cm" && unitTo == "m") {
                result = value / 100;}
             else if (unitFrom == "m" && unitTo == "km") {
                result = value / 1000;}
             else if (unitFrom == "cm" && unitTo == "km") {
                result = value / 100000;}
             else if (unitFrom == "m" && unitTo == "km") {
                    result = value / 100000;}
             else if (unitFrom == "m" && unitTo == "cm") {
                        result = value* 100;}

             else if (unitFrom == "km" && unitTo == "m") {
                            result = value * 100000;}
             else if (unitFrom == "km" && unitTo == "cm") {
                                result = value *100000;}    
                        resultSpan.innerHTML = result.value;
}