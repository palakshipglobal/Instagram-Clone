export default function Footer() {
  return (
    <footer className="text-sm text-gray-500 bg-white border-t">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-3 px-4 py-6 mx-auto md:flex-row">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Press
          </a>
          <a href="#" className="hover:underline">
            API
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Locations
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Instagram Clone by Palak
        </p>
      </div>
    </footer>
  )
}
