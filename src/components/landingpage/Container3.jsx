import { useState } from "react";
import "./Container3.css";
import SPX from "/track-n-go/src/assets/SPX.png";
import LZD from "/track-n-go/src/assets/LZD.png";
import JNT from "/track-n-go/src/assets/JNT.png";
import DHL from "/track-n-go/src/assets/DHL.png";
import GRB from "/track-n-go/src/assets/GRB.png";
import NJV from "/track-n-go/src/assets/NJV.png";
import LMV from "/track-n-go/src/assets/LMV.png";
import LBC from "/track-n-go/src/assets/LBC.png";
import ENT from "/track-n-go/src/assets/ENT.png";
import UPS from "/track-n-go/src/assets/UPS.png";
import JRS from "/track-n-go/src/assets/JRS.png";

function Container3() {
  return (
    <div className="Container3">
      <div className="Title3">Our Partners</div>
      <div className="ImagePartners">
        <img src={SPX} alt="SPX" className="SPX" />
        <img src={LZD} alt="LZD" className="LZD" />
        <img src={JNT} alt="JNT" className="JNT" />
        <img src={DHL} alt="DHL" className="DHL" />
        <img src={GRB} alt="GRB" className="GRB" />
        <img src={NJV} alt="NJV" className="NJV" />
        <img src={LMV} alt="LMV" className="LMV" />
        <img src={LBC} alt="LBC" className="LBC" />
        <img src={ENT} alt="ENT" className="ENT" />
        <img src={UPS} alt="UPS" className="UPS" />
        <img src={JRS} alt="JRS" className="JRS" />
      </div>
    </div>
  );
}

export default Container3;
