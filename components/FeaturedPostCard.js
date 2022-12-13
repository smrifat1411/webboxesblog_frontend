import React, { useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";



const FeaturedPostCard = ({ post }) => {
  const [dataLoading, setDataLoading] = useState(true);
  useEffect(() => {
    if (post) {
      setTimeout(() => {
        setDataLoading(false);
      }, 1000);
    }
  }, [post]);




  return (
   <div>
    {
      dataLoading? <Skeleton height={250}></Skeleton>:(  <div className="relative h-72">
    
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
        style={{
          backgroundImage: `url('${post.attributes.cover.data.attributes.url}')`,
        }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-4 text-shadow font-semibold text-xs">
          {moment(post.attributes.createdAt).format("MMM DD, YYYY")}
        </p>
        <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
          {post.attributes.title}
        </p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <Image
            unoptimized
            alt={post.attributes.author.data[0].attributes.fullname}
            height="30"
            width="30"
            className="align-middle drop-shadow-lg rounded-full"
            src={
              post.attributes.author.data[0].attributes.profilephoto.data
                .attributes.url
            }
          />
          <p className="inline align-middle text-white text-shadow ml-2 font-medium">
            {post.attributes.author.data[0].attributes.fullname}
          </p>
        </div>
      </div>
      <Link href={`/post/${post.attributes.slug}`}>
        <span className="cursor-pointer absolute w-full h-full" />
      </Link>
    </div>)
    }
   </div>
   
  )
};

export default FeaturedPostCard;
