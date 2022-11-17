// import { FeaturedPosts } from '../sections/index';
// import { PostCard, Categories, PostWidget } from '../components';

import PostCard from "../components/PostCard";
import client from "../lib/apolloClient";
import { getAllPosts, getRecentPosts } from "../services/query";
import PostWidget from '../components/PostWidget'
import Categories from "../components/Categories";

// import { getPosts } from '../services';


export default function Home({ posts,recentposts,categories }) {

  return (
    <div className="container mx-auto px-10 mb-8">
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) =>
          (
          
            <PostCard key={index} post={post} />
            
          ))}
 
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget data = {recentposts}/>
            <Categories data={categories} />
          </div>
        </div>
      </div>
    </div>

  );
}


export async function getStaticProps() {

const {data} = await client.query({
  query: getAllPosts,
  variables:{
     
    limit: 10,
    start:0
  }
})


return{
  props:{
    posts:data.allposts.data,
    recentposts:data.recentposts.data,
    categories: data.allcategories.data
  }
}

}