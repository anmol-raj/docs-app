import { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      icon: "",
      desc: "Background Color of the card that will be..",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      icon: "",
      desc: "Background Color of the card that will be..",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "red",
      },
    },
    {
      icon: "",
      desc: "Background Color of the card that will be..",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed flex gap-5 flex-wrap top-0 left-0 p-5 z-[3} w-full h-full"
      >
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
