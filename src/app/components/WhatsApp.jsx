"use client";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsApp = () => {
    return (
        <div 
            className='fixed flex flex-col items-center cursor-pointer bottom-10 right-10 text-green-400 hover:text-green-700 animate-bounce'
            onClick={() => window.open('https://wa.me/+79251659995' , '_blank')}
        >
            <WhatsAppIcon sx={{ fontSize: 50 }} />
            <p>WhatsApp</p>
        </div>
    )
}

export default WhatsApp