import React from 'react';

const connectWalletModal = () => {
    return (
        <div>
            <input type="checkbox" id="connectWalletModal-popup" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box ">
                    <label htmlFor="connectWalletModal-popup" className="btn btn-sm btn-circle absolute right-3">✕</label>
                    <h3 className="text-lg font-bold">Connect Your Wallet!</h3>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default connectWalletModal;