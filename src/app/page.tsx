"use client";
import style from "./page.module.css";
import { ICar } from "./models/car.model";
import { useState, useEffect } from "react";
import CarList from "@/components/CarList/car-list";
import "semantic-ui-css/semantic.min.css";
import { Dropdown } from "semantic-ui-react";

export default function Home() {
  const [cars, setCars] = useState<ICar[]>([]);
  const [filter, setFilter] = useState<number>(1);
  const [carsList, setCarsList] = useState<ICar[]>([]);

  const optionsFilter = [
    { key: 1, text: "Todos", value: 1 },
    { key: 2, text: "Autos", value: 2 },
    { key: 3, text: "Pickups y Comerciales", value: 3 },
    { key: 4, text: "SUVs y Crossovers", value: 4 },
  ];
  const optionsSort = [
    { key: 1, text: "Nada", value: 1 },
    { key: 2, text: "De menor a mayor precio", value: 2 },
    { key: 3, text: "De mayor a menor precio", value: 3 },
    { key: 4, text: "Más nuevos primero", value: 4 },
    { key: 5, text: "Más viejos primero", value: 5 },
  ];

  useEffect(() => {
    window
      .fetch("https://challenge.egodesign.dev/api/models/")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setCarsList(data);
      });
  }, []);

  const changeFilter = (e: any, { value }: any) => {
    setFilter(value);
    let filteredList = [...cars];

    switch (value) {
      case 1:
        setCarsList(filteredList);
        break;
      case 2:
        filteredList = filteredList.filter(
          (x) => x.segment === "Sedan" || x.segment === "Hatchback"
        );
        setCarsList([...filteredList]);
        break;
      case 3:
        filteredList = filteredList.filter(
          (x) => x.segment === "Pickups y Comerciales"
        );
        setCarsList([...filteredList]);
        break;
      case 4:
        filteredList = filteredList.filter((x) => x.segment === "SUVs");
        setCarsList([...filteredList]);
        break;

      default:
        setCarsList(filteredList);
        break;
    }
  };

  const changeSort = (e: any, { value }: any) => {
    let sortedList = [...cars];

    switch (value) {
      case 1:
        setCarsList(sortedList);
        break;
      case 2:
        sortedList.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        setCarsList(sortedList);
        break;
      case 3:
        sortedList.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        setCarsList(sortedList);
        break;
      case 4:
        sortedList.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
        setCarsList(sortedList);
        break;
      case 5:
        sortedList.sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
        setCarsList(sortedList);
        break;

      default:
        setCarsList(sortedList);
        break;
    }
  };

  return (
    <main className={style.main}>
      <h1>Descubrí todos los modelos</h1>
      <div className={style.filter}>
        <ul className={style.filter_ul}>
          <li>Filtrar por</li>
          <li
            className={filter === 1 ? `${style.filter_active}` : ""}
            onClick={() => changeFilter(null, { value: 1 })}
          >
            Todos
          </li>
          <li
            className={filter === 2 ? `${style.filter_active}` : ""}
            onClick={() => changeFilter(null, { value: 2 })}
          >
            Autos
          </li>
          <li
            className={filter === 3 ? `${style.filter_active}` : ""}
            onClick={() => changeFilter(null, { value: 3 })}
          >
            Pickups y Comerciales
          </li>
          <li
            className={filter === 4 ? `${style.filter_active}` : ""}
            onClick={() => changeFilter(null, { value: 4 })}
          >
            SUVs y Crossovers
          </li>
        </ul>
        <Dropdown
          text="Filtrar por"
          className={style.filter_dropdown}
          options={optionsFilter}
          defaultValue={1}
          onChange={changeFilter}
        ></Dropdown>
        <Dropdown
          text="Ordenar por"
          direction="left"
          options={optionsSort}
          defaultValue={1}
          onChange={changeSort}
        ></Dropdown>
      </div>
      <CarList products={carsList} />
    </main>
  );
}
