function Result ({message}) {
    return (
        <div className="bg-gray-900 text-center rounded-lg absolute h-3/4 w-3/4 flex flex-col justify-around"> 
            <h1 className="text-white text-[35px] font-bold mb-[3rem]">{message}</h1>
            <button className="bg-white text-black px-4 py-1.5 text-[15px] font-medium cursor-pointer rounded-full w-[130px] self-center">Restart game</button>
        </div>
    );
}

export default Result;