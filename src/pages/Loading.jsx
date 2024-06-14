

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div>
        <h1 className="mt-4 text-2xl font-bold text-white">Loading...</h1>
      </div>
    </div>
  );
}

export default Loading;
