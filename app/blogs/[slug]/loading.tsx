import Nav from "@/components/Nav";

const BlogPostLoading = () => {
  return (
    <>
      <Nav />
      <article className="bg-[#131132] min-h-svh">
        <header className="px-4 sm:px-6 md:px-10 pt-32 sm:pt-40 pb-14 sm:pb-20 flex flex-col items-center text-center animate-pulse">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#e59832]/30 mb-6" />
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            <div className="h-6 w-16 bg-[#e59832]/30 rounded-full" />
            <div className="h-6 w-20 bg-[#e59832]/30 rounded-full" />
            <div className="h-6 w-14 bg-[#e59832]/30 rounded-full" />
          </div>
          <div className="h-8 sm:h-12 w-4/5 max-w-2xl bg-[#e8dfd1]/10 rounded-lg mb-3" />
          <div className="h-8 sm:h-12 w-3/5 max-w-xl bg-[#e8dfd1]/10 rounded-lg mb-5" />
          <div className="h-3 w-40 bg-[#e8dfd1]/10 rounded" />
        </header>

        <div className="bg-[#e8dfd1] rounded-t-3xl px-4 sm:px-6 md:px-10 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto w-full flex flex-col gap-4 animate-pulse">
            <div className="h-4 w-full bg-[#131132]/10 rounded" />
            <div className="h-4 w-11/12 bg-[#131132]/10 rounded" />
            <div className="h-4 w-full bg-[#131132]/10 rounded" />
            <div className="h-4 w-3/4 bg-[#131132]/10 rounded" />
            <div className="h-6 w-1/3 bg-[#131132]/15 rounded mt-4" />
            <div className="h-4 w-full bg-[#131132]/10 rounded" />
            <div className="h-4 w-5/6 bg-[#131132]/10 rounded" />
            <div className="h-24 w-full bg-[#131132]/10 rounded-lg mt-2" />
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostLoading;
