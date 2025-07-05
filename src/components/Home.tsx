import { lang } from "../langObj";
import avatar from "../assets/avatar.jpg";
import { usePortfolioContext } from "../context/portfolioContext";
interface PropType {
  currentLang: string;
}
export function Home({ currentLang }: PropType) {
  const { firstPageLoad } = usePortfolioContext();
  const text = lang[currentLang as "ru" | "eng"].hero;
  return (
    <div className="flex flex-col h-[95vh] container items-center justify-center">
      <div className="relative flex flex-col container h-2/3 items-center ">
        <svg
          className=" rotate-270 absolute"
          width="200"
          height="200"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            className={`z-10 clockwiseCircle ${
              !firstPageLoad[0]
                ? "animate-clockwiseCircle"
                : "clockwiseCircleAfterFirstLoad"
            } stroke-text stroke-2`}
          />
        </svg>
        <svg
          className="rotate-90 absolute rotate-y-180"
          width="200"
          height="200 "
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            className={`z-10 counterclockwiseCircle ${
              !firstPageLoad[0]
                ? "animate-counterClockwise"
                : "counterclockwiseCircleAfterFirstLoad"
            } stroke-text stroke-2`}
          />
        </svg>
        <svg className=" border-black absolute" height={200} width={200}>
          <rect
            height="0"
            width="2"
            x="100"
            y="170"
            className={`fill-text line ${
              !firstPageLoad[0] ? "animate-line" : "h-[30px]"
            }`}
          />
        </svg>
        <img
          src={avatar}
          alt="Avatar"
          className={`w-34.5 h-34.5 top-[31px] rounded-full absolute z-0 object-cover opacity-0 ${
            !firstPageLoad[0] ? "animate-showAvatar" : "opacity-100"
          }`}
        />
        <div
          className={`absolute flex sm:max-w-3/4 lg:max-w-1/2 border-t-2 border-b-1 border-x-0 top-50 ${
            !firstPageLoad[0]
              ? "h-0 w-0 animate-openNameDiv"
              : "w-4/5 h-[200px]"
          }`}
        >
          <div
            className={`flex flex-col justify-center h-auto w-auto opacity-0 sm:overflow-hidden overflow-y-scroll ${
              !firstPageLoad[0] ? "animate-showNameDiv" : "opacity-100 "
            }`}
          >
            <span className="text-2xl">{text.name}</span>
            <span className="text-lg">{text.about}</span>
            <span className="text-lg">
              {text.stack.title}
              {text.stack.tech.map((elem, idx) => (
                <span key={elem + idx}>
                  <span className="font-bold">{elem}</span>
                  {text.stack.tech.length - 1 != idx ? ", " : ""}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
