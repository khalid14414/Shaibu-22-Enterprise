function BlogCard({ title, body, image,onReadMore}) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
        <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-t-xl mb-4"
        />
        <h3 className="text-xl font-semibold text-green-800 mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-1 mb-4">{body}</p>
        <button
            onClick={onReadMore}
            className=" text-green-700 px-4 py-2 rounded hover:underline"
        >
            Read More
        </button>

    </div>
  );
}

export default BlogCard;