import HeadingSVG from "../../assets/icons/star.svg"

export default function Heading({ title }) {
  return (
    <>
      <div className="section-heading select-none">
        <div className="heading flex translate-y-56 items-center justify-center space-x-[3%]">
          <img src={HeadingSVG} className="w-12 h-12" alt="star"/>
          <h2 className="w-fit text-xl sm:text-heading-2 font-medium uppercase text-primary">
            {title}
          </h2>
          <img src={HeadingSVG} className="w-12 h-12" alt="star"/>
        </div>
      </div>
    </>
  );
}
