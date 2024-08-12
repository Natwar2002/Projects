import axiosInstance from '../Helpers/axiosInstance';

export async function fetchCoinData () {
    try {
        const response = await axiosInstance.get('coins/markets?');
        console.log(response);
        return response;
        
    } catch(error){
        console.log(error);
        return null;
    }
} 