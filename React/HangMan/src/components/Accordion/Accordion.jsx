function Accordion({ title, content, isOpen, onClick }) {

    return (
        <>
            <div className="flex flex-col p-3 mx-[7.5rem]">
                <div className={`border rounded-xl p-6 shadow ${isOpen ? "bg-gray-200" : "bg-gray-50"}`} onClick={onClick}>
                    <div className="flex justify-between">
                        <h1 className="font-semibold text-2xl">{title}</h1>
                        <i className={`${isOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} text-lg`}></i>

                    </div>

                    {isOpen && <p className="mt-3">{content}</p>}

                </div>
            </div>
        </>
    );
}

export default Accordion;