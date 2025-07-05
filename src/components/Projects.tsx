import { lang } from "../langObj";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import gymDiary_0 from "../assets/gymDiary_0.jpg";
interface PropType {
  currentLang: string;
}
export function Projects({ currentLang }: PropType) {
  const text = lang[currentLang as "ru" | "eng"].projects;
  return (
    <div className="w-full mt-20 mb-20 flex flex-col gap-10 items-center">
      {Object.values(text).map((elem, idx) => (
        <div
          key={elem.name + idx}
          className="w-9/10  md:w-6/10   border-2 flex flex-col bg-card-bg border-card-border"
        >
          <div className="relative w-full text-center text-2xl font-bold py-5">
            {elem.name}
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div
                onClick={() => {
                  window.open(elem.projectLink);
                }}
                className="absolute w-1/2 h-full hover:bg-card-bg-transparent duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <FaExternalLinkAlt className=" text-text size-20" />
                </div>
              </div>
              <img src={gymDiary_0} loading="lazy" />
              <div
                onClick={() => {
                  window.open(elem.gitHubLink);
                }}
                className="absolute top-0 right-0 w-1/2 h-full hover:bg-card-bg-transparent transition-color duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <FaGithubSquare className=" text-text size-20" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex flex-col text-lg">
            <span className="w-full px-4 py-4 indent-4">{elem.about}</span>
            <div className="w-full flex flex-wrap font-bold py-4 justify-center gap-10">
              {elem.stack.map((tech, idx) => (
                <span className="" key={tech + idx}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
