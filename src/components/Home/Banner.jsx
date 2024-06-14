import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-2">Code Snippet Library</h1>
        <p className="text-2xl mb-8">Save, share, and discover reusable code snippets</p>
        <button className="btn btn-primary"><Link to={"/dashboard"}>Lets Explore</Link></button>
      </div>
    </div>
  );
}

export default Banner;
