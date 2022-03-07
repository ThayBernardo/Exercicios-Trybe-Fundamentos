const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const name = order.order.delivery.deliveryPerson
    const secondName = order.name
    const phone = order.phoneNumber
    const adress = Object.values(order.address)

    return (`Olá ${name}, entrega para: ${secondName}, Telefone: ${phone}, ${adress}`)
  
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.order.delivery.deliveryPerson = 'Luiz Silva';
    order.payment = 50;
    const name = order.order.delivery.deliveryPerson
    const value = order.payment
  
    return (`Olá ${name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$${value},00`)
  }
  
  console.log(orderModifier(order));