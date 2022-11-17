import PostWidget from "../../components/PostWidget";
import PostDetails from "../../components/PostDetails";
import Author from "../../components/Author";
import Categories from "../../components/Categories";
import client from "../../lib/apolloClient";
import { getAllPosts, getPostBySlug } from "../../services/query";

const BlogPage = ({ post }) => {
  // const router = useRouter();

  //   if (router.isFallback) {
  //     return <Loader />;
  //   }
  if (!post) return null;
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetails post={post} />
            {/* <Author author={post?.attributes?.author.data.attributes} /> */}
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            {/* <CommentsForm slug={post.slug} /> */}
            {/* <Comments slug={post.slug} /> */}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              {/* <PostWidget
                slug={post.attributes.slug}
                category={post.attributes.category.data.attributes.name}
              /> */}
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogPage;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const {
    data: {
      post: { data },
    },
  } = await client.query({
    query: getPostBySlug,
    variables: {
      slug: params.slug,
    },
  });
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const { data } = await client.query({
    query: getAllPosts,
    variables: {
      start: 0,
      limit: 100,
    },
  });
  // console.log(data.allposts.data);
  const paths = data.allposts.data.map((post) => ({

    params: {
      slug: post.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}
