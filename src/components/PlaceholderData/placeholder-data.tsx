import React from "react";
import Image from "next/image";
import style from "./placeholder-data.module.css";
import { ICar } from "@/app/models/car.model";
import {
  Placeholder,
  PlaceholderHeader,
  PlaceholderImage,
  PlaceholderLine,
  PlaceholderParagraph,
} from "semantic-ui-react";

const PlaceholderData = () => {
  return (
    <div className={style.placeholder_container}>
      <Placeholder className={style.placeholder_image}>
        <PlaceholderImage square />
      </Placeholder>
      <Placeholder className={style.placeholder_lines}>
        <PlaceholderHeader>
          <PlaceholderLine length="short" />
        </PlaceholderHeader>
        <PlaceholderHeader>
          <PlaceholderLine length="full" />
          <PlaceholderLine length="full" />
          <PlaceholderLine length="medium" />
        </PlaceholderHeader>
        <PlaceholderHeader>
          <PlaceholderLine length="full" />
          <PlaceholderLine length="full" />
          <PlaceholderLine length="full" />
          <PlaceholderLine length="full" />
        </PlaceholderHeader>
      </Placeholder>
    </div>
  );
};

export default PlaceholderData;
