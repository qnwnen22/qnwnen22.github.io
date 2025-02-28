function getMinStat(accessories, grindingCount) {

    let result = 0;

    switch (accessories) {
        case "necklace":
            switch (grindingCount) {
                case "0":
                    result = 12678;
                    break;
                case "1":
                    result = 13035;
                    break;
                case "2":
                    result = 13749;
                    break;
                case "3":
                    result = 15178;
                    break;
                default:
                    result = -1;
                    break;
            }
            break;
        case "earring":
            switch (grindingCount) {
                case "0":
                    result = 12400;
                    break;
                case "1":
                    result = 10139;
                    break;
                case "2":
                    result = 10695;
                    break;
                case "3":
                    result = 11806;
                    break;
                default:
                    result = -1;
                    break;
            }
            break;
        case "ring":
            switch (grindingCount) {
                case "0":
                    result = 9156;
                    break;
                case "1":
                    result = 9414;
                    break;
                case "2":
                    result = 9930;
                    break;
                case "3":
                    result = 10962;
                    break;
                default:
                    result = -1;
                    break;
            }
            break;
    }

    return result;
}

function getMaxStat(accessories, grindingCount) {

    let result = 0;

    switch (accessories) {
        case "necklace":
            switch (grindingCount) {
                case "0":
                    result = 15357;
                    break;
                case "1":
                    result = 15714;
                    break;
                case "2":
                    result = 16428;
                    break;
                case "3":
                    result = 17857;
                    break;
                default:
                    result = -1;
                    break;
            }
            break;
        case "earring":
            switch (grindingCount) {
                case "0":
                    result = 11944;
                    break;
                case "1":
                    result = 12222;
                    break;
                case "2":
                    result = 12778;
                    break;
                case "3":
                    result = 13889;
                    break;
                default:
                    result = -1;
                    break;
            }
            break;
        case "ring":
            switch (grindingCount) {
                case "0":
                    result = 11091;
                    break;
                case "1":
                    result = 11349;
                    break;
                case "2":
                    result = 11865;
                    break;
                case "3":
                    result = 12897;
                    break;
                default:
                    result = -1;
                    break;
            }
            break;
    }

    return result;
}

function getAccessoriesStatValue() {

    let accessories = document.getElementById("accessories").value;
    let grindingCount = document.getElementById("grindingCount").value;
    let statValue = document.getElementById("statValue").value;
    let resultElement = document.getElementById("result");

    let minStat = getMinStat(accessories, grindingCount);
    if (minStat < 0) {
        resultElement.innerText = "";
    }
    let maxStat = getMaxStat(accessories, grindingCount);
    if (maxStat < 0) {
        resultElement.innerText = "";
    }

    document.getElementById("minStat").innerText = minStat;
    document.getElementById("maxStat").innerText = maxStat;

    if(statValue === ""){
        resultElement.innerText = "";
        resultElement.style.color = "black";
        return;
    }
    

    if (statValue < minStat) {
        resultElement.innerText = "최소 값 미달";
        resultElement.style.color = "red";
    } else if (statValue > maxStat) {
        resultElement.innerText = "최대 값 초과";
        resultElement.style.color = "red";
    }
    else {
        let val1 = statValue - minStat;
        let val2 = maxStat - minStat;
        let cal = (val1 / val2) * 100;
        let result = cal.toFixed(2);
        resultElement.innerText = result + "%";
        resultElement.style.color = "black";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    getAccessoriesStatValue();
});