# checkout-system

## Overview
Simple checkout system for adding promotional codes to the items in the cart.

## Running The Test
npm run test

## Tradeoffs

Made Item, Cart, OrderRow, PromotionalCode classes for loose coupling and created interface for each service.
Stored items in cart in a Map data structure with item code as the key and object with fields item, totalQquantity, totalPrice as value of the key. It avoids requirement of grouping the items based on item code later on.




