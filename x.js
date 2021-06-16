const converter = (arabicNum) => {

    var input = ("" + arabicNum).split("");
    let output = "";
    switch (true) {
        case input.length == 4:
            if (input[0] == 3) {
                output += 'MMM'
            } else if (input[0] == 2) {
                output += 'MM'
            } else if (input[0] == 1) {
                output += 'M'
            }
            input.shift()

        case input.length == 3:
            if (input[0] == 0) {
                output += ''
            } else if (input[0] == 9) {
                output += 'CM'
            } else if (input[0] == 8) {
                output += 'DCCC'
            } else if (input[0] == 7) {
                output += 'DCC'
            } else if (input[0] == 6) {
                output += 'DC'
            } else if (input[0] == 5) {
                output += 'D'
            } else if (input[0] == 4) {
                output += 'CD'
            } else if (input[0] == 3) {
                output += 'CCC'
            } else if (input[0] == 2) {
                output += 'CC'
            } else if (input[0] == 1) {
                output += 'C'
            }
            input.shift()

        case input.length == 2:
            if (input[0] == 0) {
                output += ''
            } else if (input[0] == 9) {
                output += 'XC'
            } else if (input[0] == 8) {
                output += 'LXXX'
            } else if (input[0] == 7) {
                output += 'LXX'
            } else if (input[0] == 6) {
                output += 'LX'
            } else if (input[0] == 5) {
                output += 'L'
            } else if (input[0] == 4) {
                output += 'XL'
            } else if (input[0] == 3) {
                output += 'XXX'
            } else if (input[0] == 2) {
                output += 'XX'
            } else if (input[0] == 1) {
                output += 'X'
            }
            input.shift()

        case (input.length == 1):
            if (input[0] == 0) {
                output += ''
            } else if (input[0] == 9) {
                output += 'IX'
            } else if (input[0] == 8) {
                output += 'VIII'
            } else if (input[0] == 7) {
                output += 'VII'
            } else if (input[0] == 6) {
                output += 'VI'
            } else if (input[0] == 5) {
                output += 'V'
            } else if (input[0] == 4) {
                output += 'IV'
            } else if (input[0] == 3) {
                output += 'III'
            } else if (input[0] == 2) {
                output += 'II'
            } else if (input[0] == 1) {
                output += 'I'
            }
            return output
    }
}
console.log(converter(1540))