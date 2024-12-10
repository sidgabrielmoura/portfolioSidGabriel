import {
    SiTailwindcss,
    SiCss3,
    SiTypescript,
    SiNextdotjs,
    SiJavascript,
    SiHtml5,
    SiPostman,
    SiGit,
    SiNodedotjs,
    SiFigma,
    SiVuedotjs,
  } from "react-icons/si";
import { 
    FaReact, 
    FaMobile 
} from "react-icons/fa";
  
  export function IconsAbout() {
    const icons = [
      { icon: <SiTailwindcss />, name: "Tailwindcss" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiJavascript />, name: "Javascript" },
      { icon: <SiHtml5 />, name: "Html5" },
      { icon: <SiCss3 />, name: "Css3" },
      { icon: <SiGit />, name: "Git" },
      { icon: <SiNodedotjs />, name: "NodeJs" },
      { icon: <SiVuedotjs/>, name: "Vue.js"},
      { icon: <SiTypescript/>, name: "Typescript"},
      { icon: <SiPostman/>, name: "Postman"},
      { icon: <FaMobile/>, name: "React-native"},
    ];
  
    return (
      <>
        <div className="relative overflow-hidden h-[50px] w-full">
            <div className="flex gap-10 whitespace-nowrap animate-marquee">
                {icons.map((item, index) => (
                    <div
                        key={index}
                        className="h-[30px] inline-flex items-center gap-2 text-zinc-300"
                    >
                        <div className="text-[23px] text-zinc-200 transition-colors duration-300">
                            {item.icon}
                        </div>
                        <p className="text-[14px] text-zinc-400 cursor-default">
                            {item.name}
                        </p>
                    </div>
                ))}

                {icons.map((item, index) => (
                    <div
                        key={`${index}-clone`}
                        className="h-[30px] inline-flex items-center gap-2 text-zinc-300"
                    >
                        <div className="text-[23px] text-zinc-200 transition-colors duration-300">
                            {item.icon}
                        </div>
                        <p className="text-[14px] text-zinc-400 cursor-default">
                            {item.name}
                        </p>
                    </div>
                ))}

                {icons.map((item, index) => (
                    <div
                        key={`${index}-clone`}
                        className="h-[30px] inline-flex items-center gap-2 text-zinc-300"
                    >
                        <div className="text-[23px] text-zinc-200 transition-colors duration-300">
                            {item.icon}
                        </div>
                        <p className="text-[14px] text-zinc-400 cursor-default">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </>
    );
  }
  