import { Avatar, Button, Layout, Tags } from "components";
import { motion } from "framer-motion";
import { FaDownload, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex h-screen w-screen items-center justify-center"
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center md:flex-row md:gap-20 text-slate-50">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-4xl leading-9">
              Hello! I'm <span className="text-yellow-400">Iván</span>. 👋
            </p>
            <span className="font-light text-lg text-rose-400 whitespace-nowrap">
              Software developer
            </span>
            <div className="hidden mt-2 md:flex items-center md:items-start flex-col">
              <p>Currently working with:</p>
              <Tags
                tagColor={`bg-gray-600`}
                data={["React", "Tailwind", "GraphQL", "NodeJS"]}
              />
            </div>
          </div>
          <Avatar src={"./assets/img/sm-profile.png"} />
        </div>
        <div className="text-slate-50 md:hidden flex mt-2 items-center md:items-start flex-col">
          <p>Currently working with:</p>
          <Tags
            tagColor={`bg-gray-600`}
            data={["React", "Tailwind", "GraphQL", "NodeJS"]}
          />
        </div>
        <div className="hidden w-full md:flex mt-8 md:gap-2 md:items-center box-border">
          <Button
            onClick={() => navigate("/about")}
            icon={<FaSearch size={18} />}
            fontSize={`text-xl`}
            text="See more"
          />
          <Button
            icon={<FaDownload size={18} />}
            text="Resume"
            outlined={true}
            fontSize={`text-xl`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
