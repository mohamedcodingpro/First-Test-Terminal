export function totalPhoneBill(phoneBill) {
    let billItems = phoneBill.split(', ');
    let total = 0;
    billItems.forEach(item => {
        if (item === 'call') {
            total += 2.75;
        } else if (item === 'sms') {
            total += 0.65;
        }
    });
    return 'R' + total.toFixed(2);
}
