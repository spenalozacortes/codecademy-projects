// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

function toggleDrum(arrayName, index) {
    if (index >= 0 && index < 16) {
        switch(arrayName) {
            case 'kicks':
                kicks[index] = !kicks[index]; 
                break;
            case 'snares':
                snares[index] = !snares[index];
                break;
            case 'hiHats':
                hiHats[index] = !hiHats[index];
                break;
            case 'rideCymbals':
                rideCymbals[index] = !rideCymbals[index];
                break;
        }
    }  
}

function clear(arrayName) {
    switch(arrayName) {
        case 'kicks':
            kicks.fill(false);
            break;
        case 'snares':
            snares.fill(false);
            break;
        case 'hiHats':
            hiHats.fill(false);
            break;
        case 'rideCymbals':
            rideCymbals.fill(false);
            break;
    }
}

function invert(arrayName) {
    switch(arrayName) {
        case 'kicks':
            kicks.forEach((drum, index, array) => array[index] = !array[index]);
            break;
        case 'snares':
            snares.forEach((drum, index, array) => array[index] = !array[index]);
            break;
        case 'hiHats':
            hiHats.forEach((drum, index, array) => array[index] = !array[index]);
            break;
        case 'rideCymbals':
            rideCymbals.forEach((drum, index, array) => array[index] = !array[index]);
            break;
    }
}