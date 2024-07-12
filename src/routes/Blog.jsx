import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../sections/Footer";
import BlogInsights from "../sections/BlogInsights";

const Blog = () => {
  return (
    <main>
      <Navbar className="" />
      <div className="flex flex-col items-center">
        <BlogInsights />
        <Footer />
      </div>
    </main>
  );
};
export default Blog;
