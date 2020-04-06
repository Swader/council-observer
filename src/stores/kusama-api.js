import { readable } from 'svelte/store';

const { ApiPromise, WsProvider } = require('@polkadot/api');
const wsProvider = new WsProvider('wss://kusama-rpc.polkadot.io/');
let api = ApiPromise.create({ provider: wsProvider });

export const getTotalIssuance = readable(null, async function start(set) {
    
    let issuance = await (await api).query.balances.totalIssuance();
    set(Math.round(issuance / 1e12));

	return () => {}
});

export const getGenesisHash = readable(null, async function start(set) {
    
    set((await api).genesisHash.toHex());

	return () => {}
});