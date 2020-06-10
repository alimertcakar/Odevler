var freqAlphabets = function (s) {
    let stack = [], deciphered = [];

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '#') {
            stack.push(s[i - 2] + s[i - 1]);
            i -= 2;
        } else {
            stack.push(s[i]);
        }
        deciphered.unshift(String.fromCharCode(String(Number(stack) + 96)))
        stack = [];

    }
    return deciphered.toString().replace(/\,/g, '');

};