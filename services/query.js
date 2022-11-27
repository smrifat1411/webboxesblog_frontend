import { gql } from "@apollo/client";

const getAllPosts = gql`
query getallPosts($start: Int!, $limit: Int!) {

  recentposts: posts(pagination: { limit: $limit, start: $start }) {
         data {
      id
      attributes {
        createdAt
        updatedAt
        author {
          data {
            attributes {
              fullname
              profilephoto {
                data {
                  attributes {
                    url
                    previewUrl
                    formats
                  }
                }
              }
            }
          }
        }
        slug
        cover {
          data {
            id
            attributes {
              url
              previewUrl
              width
              height
              formats
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
        title
        content
      }
    }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
 allposts: posts {
    data {
      id
      attributes {
        createdAt
        updatedAt
        author {
          data {
            attributes {
              fullname
              profilephoto {
                data {
                  attributes {
                    url
                    previewUrl
                    formats
                  }
                }
              }
            }
          }
        }
        slug
        cover {
          data {
            id
            attributes {
              url
              previewUrl
              width
              height
              formats
            }
          }
        }
        category {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
        title
        content
      }
    }
    meta {
      pagination {
        page
      }
    }
  }
  
  allcategories:categories{
    data{
      id
      attributes{
        name
        slug
      }
    }
  }
}

`;

const getPostBySlug = gql`
query getPostBySlug($slug:String!){
  post(slug:$slug){
   data {
      id
      attributes {
        createdAt
        updatedAt
        author{
          data{
            attributes{
              fullname
              profilephoto{
                data{
                  attributes{
                    url
                    previewUrl
                    formats
                  }
                }
              }
            }
          }
        }
        slug
        cover {
          data {
            id
            attributes {
              url
              previewUrl
              width
              height
              formats
            }
          }
        }
        category{
          data{
            id
            attributes{
              name
              slug
            }
          }
        }
        title
        content
      }
    }
  }
}`


const getRecentPosts = gql`
query recentPost($start: Int!, $limit: Int!) {
  posts(pagination: { limit: $limit, start: $start }) {
    data {
      id
      attributes {
        title
        slug
        
        cover {
          data {
            id
            attributes {
              url
              formats
            }
          }
        }
        createdAt
   
      }
    }
    meta {
      pagination {
        page
        pageSize
        pageCount
        total
      }
    }
  }
}`
const getSimilarPosts = gql`
query ($category: String, $slug: String) {
  posts(
    filters: {
     category: { name: { eq: $category } }
      and: { slug: { ne: $slug } }
    }
  ) {
    data {
    id
    attributes {
      createdAt
      updatedAt
      author {
        data {
          attributes {
            fullname
            profilephoto {
              data {
                attributes {
                  url
                  previewUrl
                  formats
                }
              }
            }
          }
        }
      }
      slug
      cover {
        data {
          id
          attributes {
            url
            previewUrl
            width
            height
            formats
          }
        }
      }
      category {
        data {
          id
          attributes {
            name
            slug
          }
        }
      }
      title
      content
    }
  }
  }
}
`;

const getAllCategories = gql`
query getAllCategories{
  categories{
    data{
      id
      attributes{
        name
        slug
      }
    }
  }
}`


const getFeaturedPosts= gql`

query featuredPost{
  posts(filters:{featuredpost:{eq:true}}){
 data {
      id
      attributes {
        createdAt
        updatedAt
        author{
          data{
            attributes{
              fullname
              profilephoto{
                data{
                  attributes{
                    url
                    previewUrl
                    formats
                  }
                }
              }
            }
          }
        }
        slug
        cover {
          data {
            id
            attributes {
              url
              previewUrl
              width
              height
              formats
            }
          }
        }
        category{
          data{
            id
            attributes{
              name
              slug
            }
          }
        }
        title
        content
      }
    }
  }
}`


export { getAllPosts,getPostBySlug,getRecentPosts,getSimilarPosts,getAllCategories,getFeaturedPosts };
