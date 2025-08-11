"use client";
import Sidebar from "./Sidebar";
import ProfileSection from "./ProfileSection";

const Wrapper = ({ children }) => {
  return (
    <main className="min-h-screen w-full bg-gray-50 items-center justify-center dark:bg-gray-900 flex flex-col p-2 sm:p-4 md:p-5">
      <div className="flex flex-col md:flex-row gap-3 w-full max-w-7xl mx-auto">
        {/* Desktop sidebar - hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-3">
          <ProfileSection />
          <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 p-2 w-full shadow-md">
            <div className="md:max-h-[90vh] overflow-auto custom-scrollbar ">
              <div className="md:m-5 m-2 ">{children}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom sticky sidebar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <Sidebar />
      </div>

      {/* Add padding at the bottom to prevent content from being hidden behind mobile sidebar */}
      <div className="h-16 md:hidden"></div>
    </main>
  );
};

export default Wrapper;
