import React from "react";
import { DZ } from "./dz";
function TextControlsExample({
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
  clicked,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row ">
        <div className="mb-3 col-6">
          <label htmlfor="name" className="form-label">
            إلإسم واللقب*
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            placeholder="إلإسم واللقب"
            name="name"
            onChange={handleChange}
            value={value.name}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlfor="phone" className="form-label">
            رقم الهاتف*
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="phone"
            placeholder="رقم الهاتف "
            name="phone"
            onChange={handleChange}
            value={value.phone}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlfor="addrres" className="form-label">
            العنوان*
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="addrres"
            placeholder=" العنوان"
            name="address"
            onChange={handleChange}
            value={value.address}
          />
        </div>
        <input type="hidden" name="color" value={value.color} />
        <input type="hidden" name="size" value={value.size} />
        <div className="col-6">
          <label htmlfor="name" className="form-label">
            الولاية*
          </label>
          <select
            className={`wilaya form-select ${
              errors.wilaya && "border-danger"
            } `}
            aria-label="Default select example"
            name="wilaya"
            onChange={(e) => {
              handleChange(e);
            }}
            value={value.wilaya}
          >
            <option value="">الولاية</option>
            {DZ.wilayas.map((item) => {
              return (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
          {errors.wilaya && (
            <span className="text-danger">{errors.wilaya}</span>
          )}
        </div>
        <div className="col-6">
          <select
            className={`form-select ${errors.quantity && "border-danger"} `}
            onChange={(e) => {
              handleChange(e);
              handleQnt(e);
            }}
            aria-label="Default select example"
            name="quantity"
            value={value.quantity}
          >
            <option value="">الكمية</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          {errors.quantity && (
            <span className="text-danger">{errors.quantity}</span>
          )}
        </div>
        <div className="col-6">
          <select
            className={`form-select ${
              errors.priceOfDelivery && "border-danger"
            } `}
            aria-label="Default select example"
            onChange={(e) => {
              handleChange(e);
              handleDeleveryPrice(e);
            }}
            name="priceOfDelivery"
            value={value.priceOfDelivery}
          >
            <option value="">مكان التوصيل</option>
            <option value="400">400</option>
            <option value="700">700</option>
          </select>
          {errors.priceOfDelivery && (
            <span className="text-danger">{errors.priceOfDelivery}</span>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center my-3 gap-2">
        {colors.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleColor(e);
                handleActive(index);
              }}
              key={index}
              className={`color rounded-circle border ${
                index === active && `bg-${color}`
              } border-${item} `}
              data-color={item}
            ></span>
          );
        })}
      </div>
      <div className="d-flex justify-content-center my-3 gap-2">
        {sizes.map((item, index) => {
          return (
            <span
              key={index}
              onClick={(e) => {
                handleActiveSize(index);
                handleSize(e);
              }}
              data-size={item}
              className={`size rounded-circle border border-secondary text-secondary ${
                index === activeSize && "bg-secondary text-white"
              }`}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="d-flex justify-content-center my-4">
        <button
          className={`btn btn-primary d-flex justify-content-center align-items-center px-4 ${
            clicked && "opacity-75 disabled"
          }`}
        >
          <span>{btnText}</span>
          {clicked && <span className="loader me-2"></span>}
        </button>
      </div>
    </form>
  );
}

export default TextControlsExample;
