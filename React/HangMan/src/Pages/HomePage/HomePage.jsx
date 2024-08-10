import AccordionContainer from "../../components/Accordion/AccordionContainer";

function HomePage () {

    const accordionItems = [
        { title : "Section 1", content : "This is the content for Section 1." },
        { title : "Section 2", content : "This is the content for Section 2." },
        { title : "Section 3", content : "This is the content for Section 3." },
        { title : "Section 4", content : "This is the content for Section 4." },
        { title : "Section 5", content : "This is the content for Section 5." }
    ];

    return (
        <> 
            <AccordionContainer items={accordionItems} />
        </>
    );
}

export default HomePage;