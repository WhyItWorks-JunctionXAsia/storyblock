import {WalletAddressType} from "../types/wallet.type";
import {useEffect} from "react";
import {useUpdateAtom} from "jotai/utils";
import {accountAddressAtom} from "../atom";


export function useWallet(window:Window){

    const setUpdateAccountAddressAtom = useUpdateAtom(accountAddressAtom);

    useEffect(() => {
        const onLoad = async () => {

            if (!window.keplr) {
                alert("Please install keplr extension");
            } else {
                try{
                    const chainId = "cosmoshub-4";
                    await window.keplr.enable(chainId);

                    const offlineSigner = window.keplr.getOfflineSigner(chainId);
                    const accounts = await offlineSigner.getAccounts();
                    const myAccount = accounts[0];

                    if(myAccount.address !== undefined){
                        await setUpdateAccountAddressAtom(myAccount.address)
                    }
                }catch (e){
                    alert("login failed");
                }
            }
        }
        onLoad();
    }, []);
}