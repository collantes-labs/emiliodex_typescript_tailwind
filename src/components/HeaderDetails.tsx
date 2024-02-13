export default function HeaderDetails() {
  return (
    <div className="flex-1">
      <header className="ease-in-out delay-0ms flex flex-col w-full box-border bg-red-500 shadow-md shadow-lg shadow-inner">
        <div className="min-h-10 2xl:min-h-16 pl-6 pr-6 relative flex items-center box-border">
          <img src="../icon.png" alt="pokeicon" className="mr-4 h-7 2xl:h-16" />
          <p className="font-roboto font-medium flex-1 box-border text-white 2xl:text-4xl">
            Pókedex
          </p>
        </div>
      </header>
    </div>
  );
}
