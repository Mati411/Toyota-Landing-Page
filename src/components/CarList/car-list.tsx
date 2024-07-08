import React from "react";
import Link from "next/link";
import { ICar } from "../../app/models/car.model";
import style from "./car-list.module.css";
import Image from "next/image";
import { Button, ButtonContent } from "semantic-ui-react";

type CarsListProps = {
  products: ICar[];
};

const mapCarsToCards = (cars: ICar[]) =>
  cars.map((car) => {
    const imageUrl = car.thumbnail ?? "";
    return (
      <div key={car.id} className={style.card}>
        <div>
          <h2>{car.name}</h2>
          <Link href={`/car/${car.id}`}>
            <Button animated color="black" className={style.view_more_button}>
              <ButtonContent visible>
                {car.year} | ${car.price?.toLocaleString("es-ES")}
              </ButtonContent>
              <ButtonContent hidden>Ver Modelo</ButtonContent>
            </Button>
          </Link>
        </div>
        <div className={style.car_image}>
          <Image
            loader={() => imageUrl}
            src={imageUrl}
            alt="Car Photo"
            width={250}
            height={200}
            layout="responsive"
          />
        </div>
      </div>
    );
  });

const CarList = ({ products }: CarsListProps) => (
  <div className={style.cardGroup}>{mapCarsToCards(products)}</div>
);

export default CarList;
