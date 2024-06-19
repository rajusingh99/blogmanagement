

export const Constant =  [
        { id: 1, title: "First Post", content: "Content of the first post." },
        { id: 2, title: "Second Post", content: "Content of the second post." },
      ]
  
  export const getPostById = (id) => {
    return Constant.find(post => post.id === id);
  };
  
  export const createPost = (title, content) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
    };
    posts.push(newPost);
  };
  