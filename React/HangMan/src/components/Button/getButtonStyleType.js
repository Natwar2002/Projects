function getButtonStyling (styleType) {
    const primaryButtonStyling = 'bg-blue-500 border-blue-700 text-white hover:bg-blue-700 hover:border-blue-900';
    const secondaryButtonStyling = 'bg-green-500 border-green-700 text-white hover:bg-green-600 hover:border-green-900';
    const warningButtonStyling = 'bg-yellow-400 border-blue-700 text-white hover:bg-yellow-500 hover:border-yellow-900';
    const errorButtonStyling = 'bg-red-400 border-red-700 text-white hover:bg-red-500 hover:border-red-900';

    if(styleType === "primary") {
        return primaryButtonStyling;
    } else if (styleType === "secondary") {
        return secondaryButtonStyling;
    } else if (styleType === "warning") {
        return warningButtonStyling;
    } else if (styleType === 'error') {
        return errorButtonStyling;
    }

}

export default getButtonStyling;