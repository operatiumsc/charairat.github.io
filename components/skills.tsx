
import { SiFlutter, SiDart, SiNodedotjs, SiMicrosoftsqlserver, SiDotnet, SiMongodb, SiRealm } from "react-icons/si";
import SkillIcon from "./skill_icon";

export default function Skills() {
    return (
        <div id="skills" className="bg-black px-16 py-16">


            <section id="my-skill-title" className="flex justify-center mb-8">
                <h1 className="text-4xl text-white">
                    My Skills
                </h1>
            </section>

            <section id="my-skills-icons">
                <div className="flex flex-wrap w-512 justify-center gap-4" >
                    {SkillIcon({ Icon: SiFlutter })}
                    {SkillIcon({ Icon: SiDart })}
                    {SkillIcon({ Icon: SiNodedotjs })}
                    {SkillIcon({ Icon: SiDotnet })}
                    {SkillIcon({ Icon: SiMicrosoftsqlserver })}
                    {SkillIcon({ Icon: SiMongodb })}
                    {SkillIcon({ Icon: SiRealm })}
                </div>
            </section>



        </div>
    );
}


