import { useState } from "react";
import Popup from "./Popup";

const Bank = () => {
  let [formData, setFormData] = useState({
    name: "",
    price: "",
    num: "",
    age: "",
    isSt: false,
  });
  let [modal, setModal] = useState({
    visible: false,
    error: false,
  });
  let btnDisabled =
    formData.name == "" || formData.age == "" || formData.num == "";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.age < 18 || formData.age > 100) {
      setModal({ visible: true, error: "the age is incorrect" });
    } else if (formData.num.length < 10 || formData.num.length > 12) {
      setModal({ visible: true, error: "the phone number is incorrect" });
    } else {
      setModal({ visible: true, error: false });
    }
    console.log(formData);
  };

  let handleCloseModal = () => {
    if (modal.visible == true) {
      setModal({ ...modal, visible: false });
    }
  };
  return (
    <div
      onClick={handleCloseModal}
      style={{
        position: "relative",
        background: "#111",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <form
        className="w-[90%] md:w-1/2"
        style={{
          background: "teal",
          padding: "20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}>
        <div>
          <label style={{ display: "block" }} htmlFor="firstName">
            الاسم الأول:
          </label>
          <input
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            style={{ width: "80%", height: "40px", margin: "20px 0px" }}
            type="text"
          />
        </div>
        <div>
          <label style={{ display: "block" }} htmlFor="firstName">
            السعر:
          </label>
          <select
            value={formData.price}
            onChange={(e) => {
              setFormData({ ...formData, price: e.target.value });
            }}
            style={{
              width: "80%",
              height: "40px",
              margin: "20px 0px",
              color: "black",
            }}>
            <option>100$</option>
            <option>200$</option>
            <option>300$</option>
          </select>
        </div>
        <div>
          <label style={{ display: "block" }} htmlFor="lastName">
            الرقم:
          </label>
          <input
            value={formData.num}
            onChange={(e) => {
              setFormData({ ...formData, num: e.target.value });
            }}
            style={{
              width: "80%",
              height: "40px",
              margin: "20px 0px",
            }}
            type="num"
          />
        </div>
        <div>
          <label style={{ display: "block" }} htmlFor="email">
            العمر:
          </label>
          <input
            value={formData.age}
            onChange={(e) => {
              setFormData({ ...formData, age: e.target.value });
            }}
            style={{
              width: "80%",
              height: "40px",
              margin: "20px 0px",
            }}
          />
        </div>
        <div>
          <label style={{ display: "block" }} htmlFor="message">
            هل انت طالب:
          </label>
          <input
            checked={formData.isSt}
            onChange={(e) => {
              setFormData({ ...formData, isSt: e.target.checked });
            }}
            type="checkbox"
          />
        </div>
        <button
          disabled={btnDisabled}
          style={{
            background: `${btnDisabled ? "gray" : "crimson"}`,
            padding: "6px 20px",
            width: "fit-content",
            margin: "20px auto",
          }}
          type="submit">
          إرسال
        </button>
      </form>
      <Popup showModal={modal.visible} error={modal.error} />
    </div>
  );
};

export default Bank;
