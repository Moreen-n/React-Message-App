// Import necessary dependencies and components
import { API } from "@/lib/api";

import Post from "./Post";

// Define the Posts component as an async function
const Posts = async () => {
  try {
    // Make a fetch request to the API endpoint
    const res = await fetch(`${API}/api/posts`, { cache: "no-store" });

    // Check if the response is successful (status code 200)
    if (!res.ok) {
      console.error(`Failed to fetch data. Status: ${res.status}`);
      return null; // Return null or an empty array, depending on your needs
    }

    // Parse the JSON data from the response
    const info = await res.json();

    // Log the fetched posts to the console
    console.log(info.posts);

    // Render the posts using the fetched data
    return (
      <div id="posts-container">
        {info.posts.map((post) => (
          <Post key={post.id} post={post} /> // Don't forget to add a unique key for each post
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error during fetch:", error);
    return null; // Return null or handle the error in an appropriate way
  }
};

// Export the Posts component
export default Posts;
