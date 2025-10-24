import React from "react";
import Book from "./components/Book";

function App() {
  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl h-full flex items-center justify-center">
        <Book />
      </div>
    </div>
  );
}

export default App;
