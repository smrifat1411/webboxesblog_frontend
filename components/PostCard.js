import React, { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";

const  PostCard = ({ post }) => {
  const [dataLoading, setDataLoading] = useState(true);

  const myStyle = {
    width: "40px",
    height: "40px",
    backgroundColor: "#eaeaea",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  };

  useEffect(() => {
    if (post) {
      setTimeout(() => {
        setDataLoading(false);
      }, 1000);
    }
  }, [post]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 px-2 mb-8">
      <div className="relative  shadow-md inline-block w-full h-60 lg:h-80 mb-6">
        {dataLoading ? (
          <Skeleton height="100%"></Skeleton>
        ) : (
          <Image
            alt="photo"
            className="shadow-lg rounded-t-lg lg:rounded-lg"
            layout="fill"
            src={post.attributes.cover.data.attributes.url}
            objectFit="cover"
            loading="lazy"
            // placeholder="blur"
          />
        )}
      </div>
      {/* <div className="relative overflow-hidden shadow-md pb-80 mb-6">
    <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
  </div> */}

      {
        <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          <Link href={`/post/${post.attributes.slug}`}>
            {dataLoading ? (
              <Skeleton height="100%" width="75%" />
            ) : (
              post.attributes.title
            )}
          </Link>
        </h1>
      }
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
          {dataLoading ? <Skeleton style={myStyle}></Skeleton> : undefined}
          <Image
            unoptimized
            alt={post.attributes.author.data[0].fullname}
            style={{ display: dataLoading ? "none" : undefined }}
            height="30"
            width="30"
            className="align-middle rounded-full "
            src={
              post.attributes.author.data[0].attributes.profilephoto.data
                .attributes.url
            }
          />
          <div>
            <p className="inline align-middle text-gray-700 w-12 ml-2 font-medium text-lg">
              {dataLoading ? (
                <Skeleton width={70}></Skeleton>
              ) : (
                post.attributes.author.data[0].attributes.fullname
              )}
            </p>
          </div>
        </div>

        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>

          {dataLoading ? (
            <Skeleton width={75}></Skeleton>
          ) : (
            <span className="align-middle">
              {moment(post.attributes.createdAt).format("MMM DD, YYYY")}
            </span>
          )}
        </div>
      </div>
      {/* <p className="text-center  text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8 line-clamp-3 hover:line-clamp-6"> */}
      {dataLoading ? <Skeleton count={3}></Skeleton> : undefined}
      <div style={{ display: dataLoading ? "none" : undefined }} className=" line-clamp-3 overflow-hidden">
        <ReactMarkdown
          
          children={post.attributes.content}
        ></ReactMarkdown>
      </div>

      {/* </p> */}
      
      <div className="text-center rounded-full ">
      {dataLoading?<Skeleton width={70} height="100%" ></Skeleton>:undefined}
        <Link href={`/post/${post.attributes.slug}`}>
                 <div style={{ display: dataLoading ? "none" : undefined }} className="transition duration-500 ease mt-5 transform hover:-translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
               
            Continue Reading
     
          </div>
        
          
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
