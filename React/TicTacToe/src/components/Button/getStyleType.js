function getStyleType (styleType) {
    const black = "bg-black text-white";
    const white = "bg-[#f9fafb] text-black";
    if (styleType === "black") {
        return black;
    } else if (styleType === "white") {
        return white;
    }
}

export default getStyleType;