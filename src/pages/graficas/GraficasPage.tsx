import burguer from '../../assets/icons/category.png'
import notis from '../../assets/icons/notification.png'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const GraficasPage = () => {

    const data = {
        datasets: [
            {
                label: '%',
                data: [33, 25, 40],
                backgroundColor: [
                    '#DCEF64',
                    '#F2F9C8',
                    '#E8EBF7'
                ],
                borderColor: [
                    '#DCEF64',
                    '#F2F9C8',
                    '#E8EBF7'
                ],
                borderWidth: 0.1,
            },
        ],
    };

    return (
        <>
        <section className="bg-[#161515] h-full py-10 px-7">
            <div className='flex items-center flex-col'>
                <div className='flex justify-between w-full'>
                    <img src={burguer} alt="logo" className='h-6 w-auto' />
                    <img src={notis} alt="logo" className='h-6 w-auto' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-medium text-[#DCEF64] text-lg mt-4'>Ahorro total</p>
                    <p className='font-bold text-[#f0f0f0] text-[2.5rem] leading-7 mt-1'>$56,672.00</p>
                </div>
            </div>

            <div className='flex items-center flex-col gap-y-2 mt-12'>
                <div className='relative'>
                    <Doughnut data={data} className='cursor-pointer' />
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl text-[#FFFFFF]">
                        $4,672.00 <br />
                        <div className='flex justify-center items-center'>
                            <p className='text-[#C8C8C8] font-medium tracking-wide'>Semanal</p>
                        </div>
                    </p>
                </div>

                <div className="flex justify-around mt-4 gap-x-6">
                    <div className="flex items-center space-x-3 flex-1 text-sm text-gray-200 font-medium">
                        <div className="bg-[#DCEF64] w-5 h-5 rounded-sm" />
                        <div>
                            <h3 className='font-bold'>Ahorro</h3>
                            <p className='text-gray-200'>33%</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-200 font-medium">
                        <div className="bg-[#F2F9C8] w-5 h-5 rounded-sm" />
                        <div>
                            <h3 className='font-bold'>Gastos</h3>
                            <p className='text-gray-200'>33%</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-200 font-medium">
                        <div className="bg-[#E8EBF7] w-5 h-5 rounded-sm" />
                        <div>
                            <h3 className='font-bold'>Ingresos</h3>
                            <p className='text-gray-200'>33%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-[#ffffff] h-full py-4 px-7">
                <div>
                    <div className='border-b-[0.1px] border-gray-900'/>
                    <div>
                        <h3 className='text-black font-bold mt-4 text-sm'>Comparativa</h3>
                    </div>
                </div>
        </section>
        </>
    )
}