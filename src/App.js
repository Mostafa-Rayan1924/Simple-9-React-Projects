import Tours from "./Pro2/Tours";
import Slider from "./Pro3/Slider";
import Accordion from "./Pro4/Accordion";
import Tabs from "./Pro5/Tabs";
import Generate from "./Pro6/Generate";
import BirthDay from "./pro1/BirthDay";
import "./App.css";
import Colors from "./pro7/Colors";
import Parent from "./Sidebar&Modal/Parent";
import Box from "./Box";
import { useState } from "react";
import Bank from "./bank/Bank";
import Authentication from "./Auth/Authentication";
import AuthContextFunction from "./Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Toast from "./Toast 9/Toast";
import Popup from "./bank/Popup";
export default function App() {
  let [toast, setToast] = useState({
    shows: false,
    text: "",
    type: "",
  });

  return (
    <AuthContextFunction>
      <Box />
      <Routes>
        <Route path="/birthday" element={<BirthDay />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    </AuthContextFunction>
  );
}
