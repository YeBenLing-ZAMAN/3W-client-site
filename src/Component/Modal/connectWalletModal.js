import React from 'react';
import metaMarkImage from '../../assets/metamask.png';
import euroImage from '../../assets/wallet.png';

const connectWalletModal = () => {
    return (
        <div>
            <input type="checkbox" id="connectWalletModal-popup" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box ">
                    <label htmlFor="connectWalletModal-popup" className="btn btn-sm btn-circle absolute right-3">✕</label>
                    <h3 className="text-lg font-bold">Connect Your Wallet!</h3>
                    <div className='flex flex-col lg:flex-row items-center justify-around mt-4'>
                        <div className='flex flex-col justify-center p-5 hover:cursor-pointer'>
                            <img src={metaMarkImage} alt="" />
                            <h3 className='text-primary'>MetaMask</h3>
                        </div>
                        <div className='flex flex-col justify-center p-5  hover:cursor-pointer'>
                            <img src={euroImage} alt="" />
                            <h3 className='text-primary'>WalletConnect</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connectWalletModal;