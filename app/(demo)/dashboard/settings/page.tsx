export const metadata = {
  title: "Settings - OneVenue",
  description: "Empower venue managers to close more deals more efficiently",
};

export default function Settings() {
  return (
    <header>
      <div className="mb-2 text-sm font-semibold text-blue-600 uppercase">
        Settings
      </div>
      <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
        Application Layout: Sidebar & Header using Tailwind CSS
      </h1>
      <p className="mt-2 text-lg text-gray-800">
        This is a simple application layout with sidebar and header examples
        using Tailwind CSS.
      </p>
      <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3"></div>
    </header>
  );
}
