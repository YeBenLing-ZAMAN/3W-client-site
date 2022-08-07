import React from 'react';

const connectWalletModal = () => {
    return (
        <div>
            <input type="checkbox" id="connectWalletModal-popup" className="modal-toggle" />
            <div class="modal">
                <div class="modal-box ">
                    <label htmlFor="connectWalletModal-popup" class="btn btn-sm btn-circle absolute right-3">✕</label>
                    <h3 class="text-lg font-bold">Connect Your Wallet!</h3>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default connectWalletModal;