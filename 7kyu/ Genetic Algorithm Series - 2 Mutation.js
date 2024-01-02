function mutate(value, probability) {
    return Array.from(value).map(bit => {
        if (Math.random() <= probability) {
            return bit === '0' ? '1' : '0';
        } else {
            return bit;
        }
    }).join('');
}