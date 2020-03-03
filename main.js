function inputYear() {
    let year = parseInt(prompt("Enter a year: "));
    return year;
}
function checkCentury(year) {
    if (year%100 === 0){
        return year/100;
    } else {
        let century = Math.floor(year / 100) + 1;
        return century;
    }
}
function showResult() {
    alert("Century: " + checkCentury(inputYear()));
}
showResult();
