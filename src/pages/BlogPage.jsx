import blogData from "../../data/blogData";
import BlogCard from "../components/BlogCard";
import { useState } from "react";
const BlogPage = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handleReadMore = (post) => {
        setSelectedPost(post);
    }

    const closeModal = () => {
        setSelectedPost(null);
    }


  return (
    <section className="px-12 py-6 bg-gray-50 min-h-screen relative">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
                Latest From our Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((blog)=>(
                <BlogCard 
                key={blog.id}
                title={blog.title}
                body={blog.body}
                image={blog.image}
                onReadMore={()=>handleReadMore(blog)}
                />

            ))}
            </div>
        </div>

        {selectedPost && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full rounded-xl shadow-xl p-6 relative animate-fade-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4  text-gray-600 hover:text-black text-4xl"
            >
              &times;
            </button>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-80 object-cover rounded-md mb-4 px-10"
            />
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              {selectedPost.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{selectedPost.body}</p>
          </div>
        </div>
      )}

    </section>
  );
}

export default BlogPage;