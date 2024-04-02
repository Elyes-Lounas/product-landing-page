export default function Validation(wilaya, quantity, priceOfDelivery) {
  let errors = {};
  if (!wilaya) errors.wilaya = "يرجى إختيار الولاية";
  if (!quantity) errors.quantity = "يرجى إخيار الكمية";
  if (!priceOfDelivery) errors.priceOfDelivery = "يرجى إختيار مكان التوصيل";
  return errors;
}
