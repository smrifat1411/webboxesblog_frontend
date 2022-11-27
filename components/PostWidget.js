import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services/query";
import { useLazyQuery, useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  // useEffect(() => {
  //   if (slug) {
  //     getSimilarPosts(categories, slug).then((result) => {
  //       setRelatedPosts(result);
  //     });
  //   } else {
  //     getRecentPosts().then((result) => {
  //       setRelatedPosts(result);
  //     });
  //   }
  // }, [slug]);

  const [page, setPage] = useState(0);

  const [pageSize, setPageSize] = useState(2);
  const [dataLoading, setDataLoading] = useState(true)

  const { data, loading, error, fetchMore } = useQuery(getRecentPosts, {
    variables: {
      start: pageSize * page,
      limit: pageSize,
    },
  });

const [myData, setMyData] = useState(data)

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setDataLoading(false);
        setMyData(data)
      }, 500);
    }
    
  }, [data]);


  return (
    <div className="bg-[#F5F5F5] shadow-lg rounded-lg p-8 pb-12  mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
   {/* {console.log(data)} */}
   {
    dataLoading?<Skeleton count={3}></Skeleton>:myData.posts.data.map((post, index) => (
      <div key={index} className="flex items-center w-full mb-4">
        <div className="w-16 flex-none">
          <Image
            alt={post.attributes.title}
            height="60"
            width="60"
            unoptimized
            className="align-middle rounded-full"
            src={post.attributes.cover.data.attributes.formats.thumbnail.url}
          />
        </div>
        <div className="flex-grow ml-4">
          <p className="text-gray-500 font-xs">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
          <Link href={`/post/${post.attributes.slug}`} className="text-md" key={index}>
            {post.attributes.title}
          </Link>
        </div>
      </div>
    ))
   }
     
    </div>
  );
};

export default PostWidget;
