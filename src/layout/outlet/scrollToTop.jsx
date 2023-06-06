import IconScroll from "@/icons/iconScroll";

const ScrollToTop = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollTop}
      className="fixed icon-scroll-top cursor-pointer right-6 lg:right-[96px] bg-gray-400 bg-opacity-30 :hover:bg-opacity-80 lg:bg-light lg:bg-opacity-10 lg:hover:bg-gray-400 lg:hover:bg-opacity-30"
    >
      <IconScroll />
    </div>
  );
};

export default ScrollToTop;
