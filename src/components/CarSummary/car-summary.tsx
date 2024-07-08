import React from "react";
import style from "./car-summary.module.css";
import { ICar } from "@/app/models/car.model";
import CarMainData from "../CarMainData/car-main-data";
import ModelFeatures from "../ModelFeatures/model-features";
import ModelHighlights from "../ModelHighlights/model-highlights";

type CarSummaryProps = {
  car: ICar;
};

const CarSummary = ({ car }: CarSummaryProps) => {
  return (
    <div className={style.container}>
      <CarMainData car={car} />
      <ModelFeatures car={car} />
      <ModelHighlights car={car} />
    </div>
  );
};

export default CarSummary;
