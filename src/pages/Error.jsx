

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-500 via-yellow-500 to-red-500">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-white mb-8">Oops! Page not found.</p>
        <a href="/" className="btn btn-primary">Go Home</a>
      </div>
    </div>
  );
}

export default Error;
