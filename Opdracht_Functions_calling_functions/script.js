const calculateAge = function (number) {
    if (calculateAge >= 18) {
        result = true;
        console.log(result)
    }
    else {
        return false;
    }
}
calculateAge(16);

const checkAge = function () {
    if (calculateAge() >= 18) {
        console.log("Hello there");
    }
    else {
        console.log("Hey kiddo");
    }
}

checkAge();


const calculatingVat = function (number) {
    const vat = number * 1.21;
}

const calculatingTotal = function (number) {
    calculatingVat();
    return number + calculatingVat
}

calculatingTotal(1000);