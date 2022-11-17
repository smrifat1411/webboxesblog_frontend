import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { getAllCategories } from "../services/query";
import { Instagram } from "react-content-loader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const { loading, data, error } = useQuery(getAllCategories);

  useEffect(() => {
    if (data) {
      setCategories(data.categories.data);

      setTimeout(() => {
        setDataLoading(false);
      }, 500);
    }
  }, [data]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {
        dataLoading?(<Skeleton count={3}></Skeleton>):categories.map((category, index) => (
          <Link key={index} href={`/category/${category.attributes.slug}`}>
            <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.attributes.name}</span>
          </Link>
        ))
      }
      {/* {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.attributes.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3`}
          >
            {category.attributes.name}
          </span>
        </Link>
      )) || <Skeleton count={5}></Skeleton>} */}

      {/* {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.attributes.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.attributes.name}</span>
        </Link>
      ))} */}
    </div>
  );
};

export default Categories;
