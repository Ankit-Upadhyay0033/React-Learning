import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ post }) {
    if (!post || !post.$id) return null;

    const { $id, title, featuredImage } = post;

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    {featuredImage ? (
                        <img
                            src={appwriteService.getFilePreview(featuredImage)}
                            alt={title}
                            className="rounded-xl"
                             crossOrigin="anonymous"
                        />
                    ) : (
                        <div className="text-gray-400 text-sm text-center">
                            No Image
                        </div>
                    )}
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    );
}






// function PostCard({post}){ //$id, title, featuredImage
//       if (!post || !post.$id) return null;
//     return(
//         <Link to={`/post/${post.$id}`}>
//             <div className="w-full bg-gray-100 rounded-xl p-4">
//                 <div className=" w-full justify-center mb-4">
//                    <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className="rounded-xl"/>
//                 </div>
//                 <h2 className="text-xl font-bold">{post.title}</h2>
//             </div>
//         </Link>
//     )
// }

export default PostCard