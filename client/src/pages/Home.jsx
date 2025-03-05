import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Nifa Travel</h1>
      <Link to="/bookings" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Book Now
      </Link>
    </div>
  );
};

export default Home;
