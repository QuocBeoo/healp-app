function ButtonShowMore(props) {
  const { limit, length, showMore, label } = props;
  return (
    <>
      {limit < length && (
        <div className="flex justify-center items-center my-8 sm:my-10">
          <button
            onClick={showMore}
            className="min-h-[56px] max-w-[296px] w-full bg-linear-primary text-[18px] text-light rounded text-white hover:brightness-110 select-none font-light"
          >
            {label}
          </button>
        </div>
      )}
    </>
  );
}

export default ButtonShowMore;
