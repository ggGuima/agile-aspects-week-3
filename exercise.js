main();

function main() {
    const transactions = [
        {
            id: 't1',
            type: 'PAYMENT',
            status: 'OPEN',
            method: 'CREDIT_CARD',
            amount: '23.99',
        },
        {
            id: 't2',
            type: 'PAYMENT',
            status: 'OPEN',
            method: 'PAYPAL',
            amount: '100.43',
        },
        {
            id: 't3',
            type: 'REFUND',
            status: 'OPEN',
            method: 'CREDIT_CARD',
            amount: '10.99',
        },
        {
            id: 't4',
            type: 'PAYMENT',
            status: 'CLOSED',
            method: 'PLAN',
            amount: '15.99',
        },
    ];

    processTransactions(transactions);
}

const paymentMethodType = {
    CREDIT_CARD: {
        PAYMENT: processCreditCardPayment,
        REFUND: processCreditCardRefund,
    },
    PAYPAL: {
        PAYMENT: processPayPalPayment,
        REFUND: processPayPalRefund,
    },
    PLAN: {
        PAYMENT: processPlanPayment,
        REFUND: processPlanRefund,
    },
};
function processTransactions(transactions) {
    if (!transactions && transactions.length === 0) {
        console.log('There are no transactions.');
        return;
    }

    transactions.forEach(transaction => {
        const method = paymentMethodType[transaction.method]?.[transaction.type];

        if (!method) {
            console.log('Invalid transaction method', transaction);
            return;
        }

        if (transaction.status !== 'OPEN') {
            console.log('The transaction is not opened.', transaction);
            return;
        }

        method(transaction);
    });

}

function processCreditCardPayment(transaction) {
    console.log('Processing credit card payment for amount: ' + transaction.amount);
}

function processCreditCardRefund(transaction) {
    console.log('Processing credit card refund for amount: ' + transaction.amount);
}

function processPayPalPayment(transaction) {
    console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPayPalRefund(transaction) {
    console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
    console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
    console.log('Processing plan refund for amount: ' + transaction.amount);
}
