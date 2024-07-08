import React from "react";
import Image from "next/image";
import style from "./model-highlights.module.css";
import { ICar } from "@/app/models/car.model";

type CarSummaryProps = {
  car: ICar;
};

const ModelHighlights = ({ car }: CarSummaryProps) => {
  return (
    <div className={style.model_highlights_container}>
      {car.model_highlights?.map((mh, index) => {
        const imageUrl = mh.image ?? "";

        return (
          <div
            key={index}
            className={
              index % 2 === 0
                ? `${style.highlight_data} ${style.reverse_row}`
                : style.highlight_data
            }
          >
            <div className={style.highlight_images}>
              <Image
                loader={() => imageUrl}
                src={imageUrl}
                alt="Model highlight Photo"
                width={300}
                height={150}
                layout="responsive"
              />
            </div>
            <div className={style.highlight_description}>
              <h3 className={style.highlight_name}>{mh.title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: mh.content ?? "" }}
                className={style.highlight_content}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModelHighlights;
