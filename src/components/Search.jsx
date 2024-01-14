import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealCart from "./MealCart";

const Search = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const { meals } = await api.json();
    setItems(meals);
    console.log(meals);
  };
  return (
    <div className="flex gap-10 flex-wrap">
      {items.map((item) => (
        <MealCart
          key={item.idMeal}
          name={item.strMeal}
          image={item.strMealThumb}
          id={item.idMeal}
        />
      ))}
    </div>
  );
};

export default Search;
