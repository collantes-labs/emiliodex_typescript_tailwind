export default function Header() {
  return (
    <div className="flex-1">
      <header className="duration-300 ease-in-out delay-0ms flex flex-col w-full box-border bg-red-500 shadow-md shadow-lg shadow-inner">
        <div className="min-h-10 pl-6 pr-6 relative flex items-center box-border">
          <img src="icon.png" alt="pokeicon" className="mr-4 h-7" />
          <p className="font-roboto font-medium flex-1 box-border text-white">
            Pókedex
          </p>
          <div className="flex items-center">
            <img
              src="search.webp"
              alt="searchicon"
              className="absolute ml-2 h-5"
            />
            <input
              type="search"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none p-1"
              placeholder="Search..."
              style={{ textAlign: "right" }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
