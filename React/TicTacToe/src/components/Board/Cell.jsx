function Cell ({itemID}) {

    return (
        <>
            <div className="cell h-[90px] w-[90px] border-[3px] border-[#111] p-[20px] flex justify-center items-center" 
                itemID={itemID}> 
            </div>
        </>
    );
}

export default Cell;