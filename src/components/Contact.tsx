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
    <div className="flex flex-col h-screen w-screen pt-10 items-center justify-center">
      <div className="flex flex-col bg-card-bg border-2 border-card-border w-full md:w-3/5 lg:w-2/5 h-1/2 text-xl text-text justify-center items-center gap-10">
        <a
          className="hover:border-b-1 h-7"
          href={`tel:${number.split(" ").join("")}`}
        >
          {number}
        </a>
        <a className="hover:border-b-1 h-7" href={telegram}>
          {telegram.replace("https://t.me/", "@")}
        </a>
        <span className="h-7">{mail}</span>
        <a className="hover:border-b-1 h-7" href={location}>
          {currentLang === "ru" ? locationNameRu : locationNameEng}
        </a>
      </div>
    </div>
  );
}
