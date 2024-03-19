import { useDarkMode } from "../context/useDarkMode";
export function About() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`h-full pb-10 ${darkMode ? "bg-dark" : "bg-light"}`}>
      <div className={`h-full w-full px-4  `}>
        <h3 className="mb-2 "> Hello there, I&apos;m Daniel!</h3>
        <img src="/ssme.png" alt="" className="mb-2 rounded-2xl" />
        <p>
          ...a software developer with a passion for technology that traces back
          to my childhood. Growing up surrounded by a household computer and
          educational games, I was always curious about the magic happening
          behind the scenes. <br />
          <br />
          As I explored various career paths, it wasn&apos;t until the rise of
          AI captured my attention that I decided to dive deep into the world of
          software, AI, and coding. Further realizing that code is the backbone
          of everything tech-related, I embarked on a self-learning journey and
          later enrolled in the LearningFuze coding bootcamp in Irvine,
          California. <br />
          <br />
          The intensive full-stack software development course not only expanded
          my technological skills but also provided a profound self-discovery
          experience. It was during this time that I uncovered my genuine
          passion for coding and software development. Coming from a background
          of creative and artistic interests, I found immense satisfaction in
          web design, allowing me to express myself in a whole new way.
          <br />
          <br />
          Completing the bootcamp was a turning point, revealing my true calling
          in a field that excites me. Now, I&apos;m thrilled to continue growing
          and learning in the ever-evolving world of software development. Join
          me on this journey, and let&apos;s see where the future takes us!
          Let&apos;s create something amazing! 🚀
        </p>
      </div>
      <img src="/sign.png" alt="" />
    </div>
  );
}
