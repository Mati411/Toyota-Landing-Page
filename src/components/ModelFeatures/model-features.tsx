import React from "react";
import Image from "next/image";
import style from "./model-features.module.css";
import { ICar } from "@/app/models/car.model";

type CarSummaryProps = {
  car: ICar;
};

const ModelFeatures = ({ car }: CarSummaryProps) => {
  return (
    <div className={style.model_features_container}>
      {car.model_features?.map((mh, index) => {
        const imageUrl = mh.image ?? "";

        return (
          <div key={index} className={style.feature_data}>
            <div className={style.feature_images}>
              <Image
                loader={() => imageUrl}
                src={imageUrl}
                alt="Model feature Photo"
                width={300}
                height={150}
                layout="responsive"
              />
            </div>
            <h3 className={style.feature_name}>{mh.name}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: mh.description ?? "" }}
              className={style.feature_description}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default ModelFeatures;
