import {WalletAddressType} from "../types/wallet.type";

export async function useWallet(window : Window) :Promise<WalletAddressType> {

    if (!window.keplr) {
        alert("Please install keplr extension");
        return {walletAddress : undefined}
    } else {
        try{
            const chainId = "cosmoshub-4";
            await window.keplr.enable(chainId);

            const offlineSigner = window.keplr.getOfflineSigner(chainId);
            const accounts = await offlineSigner.getAccounts();
            const myAccount = accounts[0];
            console.log(myAccount)

            if(myAccount.address !== undefined){
                return {walletAddress:myAccount.address}
            }
        }catch (e){
            alert("login failed");
            return {walletAddress : undefined}
        }
    }
    return {walletAddress : undefined}
}