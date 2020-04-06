async function doConnection() {
    const { ApiPromise, WsProvider } = require('@polkadot/api');
    const wsProvider = new WsProvider('wss://kusama-rpc.polkadot.io/');
    let api = await ApiPromise.create({ provider: wsProvider });

    console.log((await api.query.democracy.referendumCount()).toNumber());
    console.log((await api.query.balances.totalIssuance()).toString());

    process.exit(0);
}

doConnection();