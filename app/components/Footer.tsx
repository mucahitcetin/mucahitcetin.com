import React from 'react';

const Footer = () => {
    return (
        <section className='bg-primary p-8 flex items-center justify-center text-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-xl'>
            <p className='text-white'>
                Copyright © 2024&nbsp;
                <a
                    href='https://www.linkedin.com/in/mucahitcetin1/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-secondary hover:cursor-pointer hover:scale-105 transition-transform duration-300'
                >
                    Mücahit Çetin
                </a>&nbsp; All Rights Reserved.
            </p>
        </section>
    );
}

export default Footer;
