interface langType {
  eng: {
    navBar: string[];
    hero: {
      name: string;
      about: string;
      stack: { title: string; tech: string[] };
    };
    projects: {
      gymDiary: {
        name: string;
        gitHubLink: string;
        projectLink: string;
        about: string;
        stack: string[];
      };
    };
  };
  ru: {
    navBar: string[];
    hero: {
      name: string;

      about: string;
      stack: { title: string; tech: string[] };
    };
    projects: {
      gymDiary: {
        name: string;
        gitHubLink: string;
        projectLink: string;
        about: string;
        stack: string[];
      };
    };
  };
}

export const lang: langType = {
  eng: {
    navBar: ["Home", "Projects", "Contact"],
    hero: {
      name: "Burmistrov Cyril",
      about:
        "Junior Frontend Developer with 1 year of self-directed development experience.",
      stack: {
        title: "Technology Stack: ",
        tech: ["HTML", "CSS(TailwindCSS)", "TS", "React", "Git"],
      },
    },
    projects: {
      gymDiary: {
        name: "Gym Diary",
        gitHubLink: "https://github.com/TempestoCore/gymDiary/tree/main",
        projectLink: "https://gym-diary-nine.vercel.app/",
        about:
          "A website for saving workout and nutrition plans, tracking workout history, and featuring a stopwatch that saves training progress.",
        stack: ["HTML", "CSS(TailwindCSS)", "TS", "React", "Supabase"],
      },
    },
  },
  ru: {
    navBar: ["Главная", "Проекты", "Связаться"],
    hero: {
      name: "Бурмистров Кирилл",
      about:
        "Начинающий фронтенд разработчик c опытом самостоятельной разработки в 1 год.",
      stack: {
        title: "Cтек технологий: ",
        tech: ["HTML", "CSS(TailwindCSS)", "TS", "React", "Git"],
      },
    },
    projects: {
      gymDiary: {
        name: "Gym Diary",
        gitHubLink: "https://github.com/TempestoCore/gymDiary/tree/main",
        projectLink: "https://gym-diary-nine.vercel.app/",
        about:
          "Сайт для сохранения плана тренировки и питания, историей тренировок и секундомером который сохраняет прогресс тренировки.",
        stack: ["HTML", "CSS(TailwindCSS)", "TS", "React", "Supabase"],
      },
    },
  },
};
