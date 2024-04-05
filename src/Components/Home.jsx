import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Validation from "./validation";
import TextControlsExample from "./Form";
import ProductDesc from "./ProductDescription";
import ProductCarousel from "./ProductCarousel";
import swal from "sweetalert";
function Home() {
  const [errors, setErrors] = useState({});
  const [value, setValue] = useState({
    name: "",
    phone: "",
    address: "",
    wilaya: "",
    quantity: "",
    priceOfDelivery: "",
    color: "dark",
    size: "S",
    prix: "",
  });
  const [btnText, setBtnText] = useState("إرسال الطلب");
  const [qnt, setQnt] = useState(0);
  const [deleveryPrice, setdeleveryPrice] = useState(0);
  const [priceItem, setPriceItem] = useState(0);
  const [total, seTtotal] = useState(0);
  const [color, setColor] = useState("dark");
  const [active, setActive] = useState(3);
  const [activeSize, setActiveSize] = useState(0);
  const [clicked, setClicked] = useState(false);
  let priceOfItem = 3500;
  let colors = ["primary", "warning", "success", "dark"];
  let sizes = ["S", "M", "L", "XL"];
  useEffect(() => {
    setPriceItem(priceOfItem * qnt);
  }, [qnt]);
  useEffect(() => {
    seTtotal(priceItem + deleveryPrice);
  }, [priceItem, deleveryPrice]);
  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function handleDeleveryPrice(e) {
    setdeleveryPrice(Number(e.target.value));
  }
  function handleQnt(e) {
    setQnt(Number(e.target.value));
  }
  function handleColor(e) {
    setColor(e.target.dataset.color);
    setValue({ ...value, color: e.target.dataset.color });
  }
  function handleSize(e) {
    setValue({ ...value, size: e.target.dataset.size });
  }
  function handleActive(i) {
    setActive(i);
  }
  function handleActiveSize(i) {
    setActiveSize(i);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (value.quantity && value.wilaya && value.priceOfDelivery) {
      let form = e.target;
      let data = new FormData(form);
      console.log(Object.fromEntries(data));
      setClicked(true);
      setBtnText("إرسال الطلب");
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxV-d9tj_WCVrdAz7lpt6FmU_i_6avPpu1pDrhPtP2L4x1K72jpPTlCqFo8Fig14njg/exec";
      fetch(scriptURL, { method: "POST", body: data })
        .then(() => {
          swal({
            position: "top-end",
            icon: "success",
            title: "تم إرسال الطلب",
            showConfirmButton: false,
            timer: 2000,
          });
          setBtnText("إرسال الطلب");
          setValue({
            name: "",
            phone: "",
            address: "",
            wilaya: "",
            quantity: "",
            priceOfDelivery: "",
          });
          setQnt(0);
          setdeleveryPrice(0);
          setPriceItem(0);
          setClicked(false);
        })
        .catch(() => {
          swal({
            position: "top-end",
            icon: "error",
            title: "تعذر إرسال الطلب يرجى إعادة المحاولة",
            showConfirmButton: false,
            timer: 2000,
          });
          setClicked(false);
        });

      setTimeout(() => {
        setBtnText("إرسال الطلب");
      }, 5000);
    }
    setErrors(Validation(value.wilaya, value.quantity, value.priceOfDelivery));
  }
  let props = {
    handleSubmit,
    handleChange,
    value,
    errors,
    handleQnt,
    handleDeleveryPrice,
    handleColor,
    handleActive,
    handleActiveSize,
    handleSize,
    btnText,
    sizes,
    activeSize,
    colors,
    color,
    active,
    setClicked,
    clicked,
    total,
  };
  return (
    <div className="container">
      <div className="row align-items-center justify-content-between my-5">
        <div className="col-md-6">
          <ProductCarousel />
        </div>
        <div className="card col-md-6">
          <div className="card-header">
            <h3 className="text-center my-5">أضف معلوماتك لطلب هذا المنتج</h3>
            <TextControlsExample {...props} />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-5">
              <span className="ps-2">
                <FaShoppingCart />
              </span>
              <span>تفاصيل الطلب</span>
            </li>
            <li className="list-group-item d-flex justify-content-between px-5">
              <span>سعر المنتج</span>
              <span>{priceItem}</span>
              <span>دج</span>
            </li>
            <li className="list-group-item d-flex justify-content-between px-5">
              <span> سعر التوصيل</span>
              <span>{deleveryPrice}</span>
              <span>دج</span>
            </li>
            <li className="list-group-item d-flex justify-content-between px-5">
              <span> سعر الإجمالي </span>
              <span>{total}</span>
              <span>دج</span>
            </li>
          </ul>
        </div>
      </div>
      <ProductDesc />
    </div>
  );
}

export default Home;
