const number = import.meta.env.VITE_NUMBER;
const telegram = import.meta.env.VITE_TELEGRAM;
const mail = import.meta.env.VITE_MAIL;
const location = import.meta.env.VITE_LOCATION;
const locationNameRu = import.meta.env.VITE_LOCATION_NAME_RU;
const locationNameEng = import.meta.env.VITE_LOCATION_NAME_ENG;
interface PropType {
  currentLang: string;
}
export function Contact({ currentLang }: PropType) {
  return (
    <div className="flex flex-col h-[95vh] w-screen pt-10 items-center justify-center">
      <div className="flex flex-col overflow-y-auto bg-card-bg border-2 border-card-border  h-1/2 text-xl text-text justify-center items-start px-4 gap-6">
        <span>
          Tel:{" "}
          <a
            className="hover:border-b-1 h-7"
            href={`tel:${number.split(" ").join("")}`}
          >
            {number}
          </a>
        </span>
        <span>
          Telegram:{" "}
          <a className="hover:border-b-1 h-7" href={telegram}>
            {telegram.replace("https://t.me/", "@")}
          </a>
        </span>

        <span className="h-7">Email: {mail}</span>
        <span>
          Location:{" "}
          <a className="hover:border-b-1 h-7" href={location}>
            {currentLang === "ru" ? locationNameRu : locationNameEng}
          </a>
        </span>
      </div>
    </div>
  );
}
