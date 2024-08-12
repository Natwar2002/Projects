import BannerImage from "../../assets/banner1.jpeg"

function Banner () {
    return (
        <div className="w-full relative h-[25rem]">
            <img 
                src={BannerImage} 
                className="h-full w-full" 
            />

            <div className="absolute top-20 left-20 right-30 w-[20rem]">
                <div className="flex flex-col gap-4"> 
                    
                    <div className="text-5xl text-white font-semibold">Crypto Tracker</div>
                    
                    <div className="text-sm font-semibold text-white text-center">Get all information regarding cryptocurrencies</div>
                
                </div>
            </div>            
        </div>
    );
}

export default Banner;