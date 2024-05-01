import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

function getMaxPrice(price: PriceBracket): number {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
  }
}

function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
  let filteredOrders: Order[][] = [];
  orders.forEach(restaurant => {
    const filteredByRestaurant = restaurant.filter(order => order.price <= getMaxPrice(price));
    filteredOrders.push(filteredByRestaurant);
  });
  return filteredOrders;
}

function printOrders(restaurants: Restaurant[], orders: Order[][]) {
  restaurants.forEach((restaurant, index) => {
    if (orders[index].length !== 0) {
      console.log(restaurant.name);
      orders[index].forEach((order, index) => {
        console.log(`- ${order.name}: $${order.price}`);
      });
    }
  });
}

const eligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, eligibleOrders);
