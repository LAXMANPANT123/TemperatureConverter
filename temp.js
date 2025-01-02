function convert() {
    var fromunit = document.getElementById('fromunit').value;
    var tounit = document.getElementById('tounit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);

    var convertedValue; // Fix variable name typo
    var resultUnit;

    switch (fromunit) {
        case 'c':
            if (tounit === 'f') {
                convertedValue = (temperature * 9 / 5) + 32;
                resultUnit = 'f';
            } else if (tounit === 'k') {
                convertedValue = temperature + 273.15;
                resultUnit = 'k';
            } else {
                convertedValue = temperature;
                resultUnit = 'c';
            }
            break;

        case 'f':
            if (tounit === 'c') {
                convertedValue = (temperature - 32) * 5 / 9;
                resultUnit = 'c';
            } else if (tounit === 'k') {
                convertedValue = (temperature - 32) * 5 / 9 + 273.15;
                resultUnit = 'k';
            } else {
                convertedValue = temperature;
                resultUnit = 'f';
            }
            break;

        case 'k':
            if (tounit === 'c') {
                convertedValue = temperature - 273.15;
                resultUnit = 'c';
            } else if (tounit === 'f') {
                convertedValue = (temperature - 273.15) * 9 / 5 + 32;
                resultUnit = 'f';
            } else {
                convertedValue = temperature;
                resultUnit = 'k';
            }
            break;
    }
    
    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit;
}
