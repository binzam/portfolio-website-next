import Nav from "@/components/Nav";

const BlogsLoading = () => {
  const skeletonCards = Array.from({ length: 4 });

  return (
    <>
      <Nav />
      <main className="bg-[#131132] min-h-svh px-4 sm:px-6 md:px-10 pt-32 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center animate-pulse">
          <div className="h-10 sm:h-14 w-56 sm:w-72 bg-[#e8dfd1]/10 rounded-lg mb-4" />
          <div className="h-4 w-64 sm:w-96 bg-[#e8dfd1]/10 rounded-lg mb-12 sm:mb-16" />

          <div className="w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {skeletonCards.map((_, i) => (
              <div
                key={i}
                className="card max-w-150 flex flex-col mx-auto w-full h-fit"
              >
                <div className="bg-[#e59832]/30 h-36 sm:h-40 rounded-t-sm" />
                <div className="bg-[#e8dfd1]/10 border-t-2 border-t-white/5 p-3.5 sm:p-4 rounded-b-sm flex flex-col w-full gap-3">
                  <div className="h-3 w-32 bg-[#e8dfd1]/20 rounded" />
                  <div className="h-5 w-full bg-[#e8dfd1]/20 rounded" />
                  <div className="h-3 w-full bg-[#e8dfd1]/10 rounded" />
                  <div className="h-3 w-3/4 bg-[#e8dfd1]/10 rounded" />
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex gap-1.5">
                      <div className="h-5 w-14 bg-[#131132]/40 rounded-full" />
                      <div className="h-5 w-14 bg-[#131132]/40 rounded-full" />
                    </div>
                    <div className="h-7 w-24 bg-[#e59832]/40 rounded-xs" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogsLoading;
