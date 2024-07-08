import React from "react";
import Image from "next/image";
import style from "./car-main-data.module.css";
import { ICar } from "@/app/models/car.model";

type CarSummaryProps = {
  car: ICar;
};

const CarMainData = ({ car }: CarSummaryProps) => {
  const imageUrl = car.photo ?? "";

  return (
    <div className={style.main_data}>
      <div className={style.car_image}>
        <Image
          loader={() => imageUrl}
          src={imageUrl}
          alt="Car Photo"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
      <div className={style.car_description}>
        <h5 className={style.car_name}>{car.name}</h5>
        <div
          className={style.car_description_title}
          dangerouslySetInnerHTML={{ __html: car.description ?? "" }}
        ></div>
        <p className={style.car_description_body}>
          Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem
          ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit
          amet orem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default CarMainData;
