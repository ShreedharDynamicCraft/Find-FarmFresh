import { Link } from "react-router-dom"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-green-50/50">
      <nav className="bg-green-800 text-white py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-bold text-xl">
              Farmers' Community
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/" className="hover:text-green-200">
                Home
              </Link>
              <Link to="/questions/new" className="hover:text-green-200">
                Ask Question
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-6 px-4 md:px-6">{children}</main>

      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© {new Date().getFullYear()} Farmers' Community Q&A Platform</p>
          <p className="text-sm text-green-200 mt-1">
            A place for farmers to connect, share knowledge, and grow together
          </p>
        </div>
      </footer>
    </div>
  )
}

