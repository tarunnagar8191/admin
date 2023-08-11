
import { FaRegComments } from "react-icons/fa";
import { BsBook, BsQuestionOctagon } from "react-icons/bs";

const HeaderSection = (props) => {
 

  return (
    <div className="grid grid-cols-2 ml-6 gap-8  ">
      <HeaderCard
        colors="#5b618f"
        icon={<FaRegComments />}
        // setCurrent={setCurrent}
        current="blog"
        title="Lectures"
        no="8"
      />
      <HeaderCard
        colors="#ffa753"
        icon={<BsQuestionOctagon />}
        // setCurrent={setCurrent}
        current="corpo"
        title="MCQ"
        no="9"
      />
      <HeaderCard
        colors="#536df0"
        // setCurrent={setCurrent}
        current="corpo"
        title="Blog"
        no="4"
      />
      <HeaderCard
        colors="#982b2b"
        icon={<BsBook />}
        // setCurrent={setCurrent}
        current="corpo"
        title="Video"
        no="12"
      />
    </div>
  );
};

const HeaderCard = ({ colors, no, title, icon }) => {
  return (
    <button
      // onClick={() => setCurrent(current)}
      type="button"
      style={{ backgroundColor: colors }} // Set the background color using inline style
      className="min-w-[200px] shadow-xl relative inline-flex items-center py-8 px-8 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-blue-800"
    >
      <span className="text-xl mr-3">{icon}</span>
      <span>{title}</span>
      <div
        style={{ backgroundColor: colors }} // Set the background color using inline style
        className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
      >
        {no}
      </div>
    </button>
  );
};

export default HeaderSection;
