module.exports = function toReadable(number) {
    function exploreSecondDigitNumber(number) {
        switch (number) {
            case 1:
                return specialCases(number);
            case 2:
                return 'twenty';
            case 3:
                return 'thirty';
            case 4:
                return 'forty';
            case 5:
                return 'fifty';
            case 6:
                return 'sixty';
            case 7:
                return 'seventy';
            case 8:
                return 'eighty';
            case 9:
                return 'ninety';
            default:
                return '';
        }
    }
    function exploreDititNumber(number) {
        switch (number) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            default:
                return '';
        }
    }

    function specialCases(number) {
        switch (number % 10) {
            case 0:
                return 'ten'
            case 1:
                return 'eleven';
            case 2:
                return 'twelve';
            case 3:
                return 'thirteen';
            case 4:
                return 'fourteen';
            case 5:
                return 'fifteen';
            case 6:
                return 'sixteen';
            case 7:
                return 'seventeen';
            case 8:
                return 'eighteen';
            case 9:
                return 'nineteen';
        }
    }
    function exploreThreeDigitNumber(number) {
        const first = exploreDititNumber(Math.floor(number / 100));
        if (Math.floor(number / 10) % 10 === 1) {
            return `${first} hundred ${specialCases(number % 100)}`;
        }
        else {
            const second = exploreSecondDigitNumber(Math.floor(number % 100 / 10));
            const third = exploreDititNumber((number % 100) % 10);
            return `${first} hundred${second === "" ? "" : " " + second}${third === "" ? "" : " " + third}`;
        }
    }
    function exploreOneDigitNumber(number) {
        const data = exploreDititNumber(number);
        if (data === "") {
            return 'zero';
        }
        else {
            return data;
        }
    }
    function exploreTwoDigitNumber(number) {
        if (Math.floor(number / 10) === 1) {
            return specialCases(number % 10);
        }
        else {
            const second = exploreSecondDigitNumber(Math.floor(number / 10));
            const third = exploreDititNumber(number % 10);
            return `${second}${third === "" ? "" : " " + third}`;
        }
    }
    const numToString = number.toString();

    if (numToString.length === 3) {
        console.log(exploreThreeDigitNumber(number));
        return exploreThreeDigitNumber(number)
    }
    else if (numToString.length === 2) {
        console.log(exploreTwoDigitNumber(number));
        return exploreTwoDigitNumber(number)
    }
    else {
        console.log(exploreOneDigitNumber(number));
        return exploreOneDigitNumber(number)
    }
}

