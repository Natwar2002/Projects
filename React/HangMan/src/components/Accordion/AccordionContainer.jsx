import { useState } from "react";
import Accordion from "./Accordion"

function AccordionContainer({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    function handleToggle(index) {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <>
            {items.map((item, index) => (
                <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </>
    );
}

export default AccordionContainer;