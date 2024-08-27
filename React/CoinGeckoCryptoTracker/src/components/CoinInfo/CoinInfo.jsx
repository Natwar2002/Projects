import Alert from "../Alert/Alert";
import { Line } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import { CategoryScale } from 'chart.js'; 
Chart.register(CategoryScale);

function CoinInfo ({ historicData, setCoinInterval, setDays, days, currency}) {

    const chartDays = [
        {
            label : "24 Hours",
            value: 1
        },
        {
            label : "7 Days",
            value: 7
        },
        {
            label : "30 Days",
            value: 30
        },
        {
            label : "90 Days",
            value: 90
        },
        {
            label : "365 Days",
            value: 365
        },
    ]
    

    if(!historicData) {
        return <Alert message="No data available" type="info" />
    }

    function handleDayChange (e) {
        const daysSelected = e.target.options[e.target.selectedIndex].value;
        daysSelected === '1' ? setCoinInterval('') : setCoinInterval('daily');
        setDays(daysSelected);
    }
    
    return (
        <div
            className="flex flex-col items-center justify-center mt-6 p-6 w-full"
        >
            <div className="flex justify-center w-full mb-7">
                <select 
                    className="select select-primary w-full max-w-xs" 
                    onChange={handleDayChange}
                    value={days}
                >
                    {chartDays.map((d, index) => {
                        return (
                            <option key={index} value={d.value}>{d.label}</option>
                        )
                    })}
                </select>
            </div>

            <div className="h-[400px] w-full">
            <Line 

                data={{
                    labels : historicData.prices.map(coinPrice => {
                        let date = new Date(coinPrice[0]);
                        let time = date.getHours() > 12 ? `${date.getHours() - 12} : ${date.getMinutes()} PM` : `${date.getHours()} : ${date.getMinutes()} AM`
                        return days == 1 ? time : date.toLocaleDateString();
                    }),
                    datasets : [
                        {
                            label: `Price (Past ${days}) in ${currency?.toUpperCase()}`,
                            data: historicData.prices.map(coinPrice => coinPrice[1])
                        }
                    ],
                }}
                options={{
                    responsive: true,
                    elements: {
                        point: {
                            radius: 0,
                        }
                    }
                }}

            />
            </div>

        </div>
    )
}

export default CoinInfo;