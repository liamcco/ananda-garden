export default function Navbar() {
  return (
    <nav>
      <div className="p-4 bg-primary-400">
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
