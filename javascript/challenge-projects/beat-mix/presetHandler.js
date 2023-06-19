// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, index, newPresetArray) => {
    let array = [];
    if (index < 0 || index > presets.length) {
        array[0] = 404;
        return array;
    } else {
        if (requestType !== 'GET' && requestType !== 'PUT') {
            array[0] = 400;
            return array;
        } else {
            array[0] = 200;
            if (requestType === 'GET') {
                array[1] = presets[index];
            } else {
                presets[index] = newPresetArray;
                array[1] = presets[index];
            }
            return array;
        }
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;