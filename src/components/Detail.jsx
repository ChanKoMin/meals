import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState({});
  useEffect(() => {
    fetchMeal();
  }, []);
  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setMeals(meals[0]);
    console.log(meals[0]);
  };
  return (
    <div className="flex mx-auto w-[70%] mt-10 gap-32 items-center h-[90%]">
      <img
        className="w-[500px] h-[500px] rounded-lg object-cover"
        src={meals.strMealThumb}
        alt="Meal"
      />
      <div className="">
        <h2 className="text-4xl text-white tracking-wide font-bold">
          {meals.strMeal}
        </h2>
        <p className="text-xl font-light leading-10 my-5 tracking-wider">
          {meals.strInstructions}
        </p>
        <div className="flex items-center">
          <p className="badge text-[16px] p-4 mr-3 badge-outline">
            {meals.strCategory}
          </p>
          <p className="badge text-[16px] p-4 badge-outline">{meals.strArea}</p>
          <a href={meals.strYoutube}>
            <button className="p-4">
              <BsYoutube className="text-red-600 mr-3 items-center text-5xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
