export default function Validation(wilaya, quantity, priceOfDelivery) {
  let errors = {};
  if (!wilaya) errors.wilaya = "wilaya is required!";
  if (!quantity) errors.quantity = "quantity is required!";
  if (!priceOfDelivery) errors.priceOfDelivery = "price of delivery is required!";
  return errors;
}
