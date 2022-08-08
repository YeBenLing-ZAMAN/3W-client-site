import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({setWalletType}) => {
    const navigate = useNavigate();
    const [allChoiceCoin, setAllChoiceCoin] = useState([]);

    function homeNavigate() {
        navigate('/')
    }

    function handleChange(e) {
        // console.log(e.target.value);
        setWalletType(e.target.value);
    }

    useEffect(() => {
        fetch('coins.json')
            .then(res => res.json())
            .then(data => {
                setAllChoiceCoin(data);
            })
    }, [])


    return (
        <div>
            {/* navbar */}
            <div className="bg-base-200">
                <div className='navbar max-w-7xl mx-auto'>
                    <div className="flex-1">
                        <p onClick={homeNavigate} className="text-primary normal-case text-3xl font-bold hover:cursor-pointer" >Faucets</p>
                    </div>
                    <div className="flex-none">
                        <select className='btn btn-primary rounded-none mr-3' onChange={handleChange}>
                            {
                                allChoiceCoin?.map(coin => <option className='text-left' key={coin.id} value={coin.name}> {coin?.name.substr(0, 3)} </option>)
                            }
                        </select>

                        {/* wallect button part */}
                        <label htmlFor="connectWalletModal-popup" className='btn btn-primary btn-outline  rounded-none font-bold mr-3 text-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                            </svg>
                            <span className='ml-2 hidden hover:text-white lg:inline'>Connect Wallet</span>
                        </label>

                        <div className="dropdown dropdown-end mt-1">
                            <label tabIndex="0" className="">
                                <div className="avatar mx-2 hover:cursor-pointer">
                                    <div className="w-10 rounded-full ring ring-offset-base-100 ring-offset-1 hover:cursor-pointer7">
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt='' />
                                    </div>
                                </div>
                            </label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-none w-52">
                                <li className='mb-1'><Link className='rounded-none' to='/login'>log in</Link></li>
                                <li className='mb-1'><Link className='rounded-none' to='/signup'>sign up</Link></li>
                                <li className='mb-1'><Link className='rounded-none' to='/faq'>FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;