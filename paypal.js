// Realizar un POST para crear un pedido (ejemplo)
fetch('https://api.sandbox.paypal.com/v2/checkout/orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    },
    body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: '10.00'
            }
        }]
    })
})
.then(response => response.json())
.then(data => {
    console.log('Pedido creado: ', data);
})
.catch(error => console.error('Error:', error));
