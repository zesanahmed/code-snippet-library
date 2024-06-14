
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <nav className=" w-full lg:w-64 h-16 lg:h-auto shadow-lg lg:shadow-none bg-gradient-to-r from-indigo-500 to-purple-500">
        <div className="container mx-auto px-6 lg:py-6 flex items-center justify-between lg:justify-start">
          <div className="flex items-center">
            <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/100" alt="User Profile" />
            <span className="ml-3 text-white text-lg font-semibold">John Doe</span>
          </div>
          <button className="lg:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="lg:flex flex-col mt-4 lg:mt-0 lg:w-full">
          <NavLink to="/" exact className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" activeClassName="bg-gray-900 text-white">
            Home
          </NavLink>
          <NavLink to="dashboard/addTask" exact className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" activeClassName="bg-gray-900 text-white">
          Add New Task
          </NavLink>
          <NavLink to="dashboard/todo" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" activeClassName="bg-gray-900 text-white">
            To-Do
          </NavLink>
          <NavLink to="dashboard/ongoing" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" activeClassName="bg-gray-900 text-white">
            Ongoing
          </NavLink>
          <NavLink to="dashboard/completed" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" activeClassName="bg-gray-900 text-white">
          Completed
          </NavLink>
        </div>
      </nav>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
