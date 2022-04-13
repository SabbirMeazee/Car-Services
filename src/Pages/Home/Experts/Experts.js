import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'daniel Smith', img: expert1 },
        { id: 2, name: 'Fardin hasan', img: expert2 },
        { id: 3, name: 'michel hasan', img: expert3 },
        { id: 4, name: 'Jhonniel yarki', img: expert4 },
        { id: 5, name: 'Ronaldo', img: expert5 },
        { id: 6, name: 'Roniya Jhonson', img: expert6 }
    ]
    return (
        <div>
            <h1 className='text-center mt-5 mb-3 pt-3 text-primary'>Our Experts</h1>
            <div className="row w-100">
                {
                    experts.map(expert => <Expert key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;