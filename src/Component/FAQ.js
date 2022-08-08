import React, { useEffect } from 'react';
import { useState } from 'react';

const FAQ = () => {
    const [allFAQ, setAllFAQ] = useState([]);
    useEffect(() => {
        fetch('FAQ.json')
            .then(res => res.json())
            .then(data => {
                setAllFAQ(data);
            })
    }, [])

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='W-full lg:w-3/5 mx-auto p-4'>
                <h1 className='text-3xl text-primary my-10 text-center font-bold'>Frequently Asked Question</h1>

                {
                    allFAQ?.map((faq, index) =>
                        <div key={index} tabIndex={'0'} className="collapse collapse-arrow rounded-none border border-base-300 bo-base-100 mb-2">
                            <div className='collapse-title text-xl font-medium'>
                                {faq.title}
                            </div>
                            <div className='collapse-content'>
                                <p>{faq.content}</p>
                            </div>
                        </div>)
                }
                
            </div>
        </div>
    );
};

export default FAQ;