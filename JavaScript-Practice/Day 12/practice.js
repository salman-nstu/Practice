getUser((err, user) => {
    if (err) return handleError(err);

    getOrders(user.id, (err, orders) => {
        if (err) return handleError(err);

        getPayment(orders[0].id, (err, payment) => {
            if (err) return handleError(err);

            sendConfirmation(payment, (err, result) => {
                if (err) return handleError(err);

                console.log(result);
            });
        });
    });
});


// PROMISE

getUser()
    .then(user => getOrders(user.id))
    .then(orders => getPayment(orders[0].id))
    .then(sendConfirmation)
    .then(console.log)
    .catch(handleError);