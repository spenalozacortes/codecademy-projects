const data = {
    sign: ['star', 'moon', 'sun', 'comet'],
    luck: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    should: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

const randomNumber = arr => {
    return Math.floor(Math.random() * arr.length);
};

let message = [];

for(let prop in data) {
    let randomIndex = randomNumber(data[prop]);

    switch(prop) {
        case 'sign':
            message.push(`Your sign is ${data[prop][randomIndex]}`);
            break;
        case 'luck':
            message.push(`You are having ${data[prop][randomIndex]}`);
            break;
        case 'should':
            message.push(`You should ${data[prop][randomIndex]}`);
            break;
        default:
            message.push('No data');
            break;
    }
}

console.log(message.join("\n"));