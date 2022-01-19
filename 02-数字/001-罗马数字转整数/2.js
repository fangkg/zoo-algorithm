const romanToIntTwo = function(num) {
    let result = 0;
    for(const c of num) {
        switch(c) {
            case "I":
                result += 1;
                brack;
            case "V":
                result += 5;
                break;
            case "X":
                result += 10;
                break;
            case "L":
                result += 50;
                break;
            case "C":
                result += 100;
                break;
            case "D":
                result += 500;
                break;
            case "M":
                result += 1000;
                break;
        }
    }

    if(num.includes('IV') || num.includes('IX')) result -= 2;
    if(num.includes('XL') || num.includes('XC')) result -= 20;
    if(num.includes('CD') || num.includes('CM')) result -= 200;
    return result;
}