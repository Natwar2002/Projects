import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinHistoricData (id, currency = 'usd', days = 7, interval) {
    try {
        const response = await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        return response.data
    } catch (e) {
        console.error(e);
    }
}