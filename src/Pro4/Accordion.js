import AccordionBox from "./AccordionBox";

const Accordion = () => {
  return (
    <div className="py-[100px]">
      <h2 className="text-center mb-4 text-5xl">ACC</h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <AccordionBox
            head={"What is the best in your site"}
            body={
              "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctionumquam amet deserunt optio, est maxime aliquam culpa cumque consectetur qui?"
            }
          />
        </div>
        <div>
          <AccordionBox
            head={"What is the best in your site"}
            body={
              "2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctionumquam amet deserunt optio, est maxime aliquam culpa cumque consectetur qui?"
            }
          />
        </div>
        <div>
          <AccordionBox
            head={"What is the best in your site"}
            body={
              "3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctionumquam amet deserunt optio, est maxime aliquam culpa cumque consectetur qui?"
            }
          />
        </div>
        <div>
          <AccordionBox
            head={"What is the best in your site"}
            body={
              "4Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctionumquam amet deserunt optio, est maxime aliquam culpa cumque consectetur qui?"
            }
          />
        </div>
        <div>
          <AccordionBox
            head={"What is the best in your site"}
            body={
              "5Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctionumquam amet deserunt optio, est maxime aliquam culpa cumque consectetur qui?"
            }
          />
        </div>
        <div>
          <AccordionBox
            head={"What is the best in your site"}
            body={
              "6Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctionumquam amet deserunt optio, est maxime aliquam culpa cumque consectetur qui?"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
