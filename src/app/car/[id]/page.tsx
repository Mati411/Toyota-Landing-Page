"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ICar } from "@/app/models/car.model";
import CarSummary from "@/components/CarSummary/car-summary";
import PlaceholderData from "@/components/PlaceholderData/placeholder-data";

const CarPage = () => {
  const searchParams = useParams();
  const [car, setCar] = useState<ICar | null>(null);
  const carId = searchParams.id;

  useEffect(() => {
    if (carId) {
      window
        .fetch(`https://challenge.egodesign.dev/api/models/${carId}`)
        .then((response) => response.json())
        .then((data: ICar) => {
          setCar(data);
        });
    }
  }, [carId]);

  return (
    <section>
      {car !== null ? <CarSummary car={car} /> : <PlaceholderData />}
    </section>
  );
};

export default CarPage;
