import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="w-60 h-72 rounded-[45px] text-white py-10 px-8 bg-zinc-900/90 overflow-hidden relative "
    >
      <FaRegFileAlt />
      <p className="text-xs mt-5 font-semibold leading-none leading-tight">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.fileSize}</h5>
          <span className="w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <MdOutlineFileDownload size={".8em"} color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full h-11 py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
