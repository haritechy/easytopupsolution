import Image from 'next/image'
import React from 'react'
import airtelLogo from '@/assets/image/airtel_1.png';
import airtelLogo2 from '@/assets/image/airtel_100.png';
import airtelLogo3 from '@/assets/image/airtel_299.png';
import airtelLogo4 from '@/assets/image/airtel_359.png';
import airtelLogo5 from '@/assets/image/airtel_479.png';
import airtelLogo6 from '@/assets/image/airtel_500.png';
import airtelLogo7 from '@/assets/image/airtel_549.png';
import airtelLogo8 from '@/assets/image/airtel_719.png';
import airtelLogo9 from '@/assets/image/airtel_739.png';
import airtelLogo10 from '@/assets/image/airtel_1000.png';
import airtelLogo11 from '@/assets/image/airtel_5000.png';

export default function Page() {
    const logos = [
        airtelLogo, airtelLogo2, airtelLogo3, airtelLogo4, airtelLogo5,
        airtelLogo6, airtelLogo7, airtelLogo8, airtelLogo9, airtelLogo10, airtelLogo11
    ];

    return (
        <div className="   p-30 md:p-0 lg:p-0  grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-10">
            {logos.map((logo, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-4  flex justify-center items-center">
                    <Image src={logo} alt="Airtel Logo" width={300} height={70} />
                </div>
            ))}
        </div>

    );
}