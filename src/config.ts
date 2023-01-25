import * as process from 'process';

export default () => ({
  client: {
    url: process.env.CLIENT_URL || '',
  },
  stripe: {
    publishableKey: process.env.STRIPE_PUB_KEY || '',
    secretKey: process.env.STRIPE_SECRET_KEY || '',
    endpointSecret: process.env.STRIPE_ENDPOINT_SECRET || '',
    priceId: process.env.STRIPE_PRICE_ID || '',
    subscriptionPriceId: process.env.STRIPE_SUBSCRIPTION_PRICE_ID || '',
    apiVersion: process.env.STRIPE_API_VERSION || '2022-11-15',
  },
  web3: {
    rpcUrl: process.env.RPC_URL || 'https://api.s0.t.hmny.io',
    oneCountryContractAddress:
      process.env.ONE_COUNTRY_CONTRACT_ADDRESS ||
      '0xaef596d26be185d1c25c0aadfab6ab054e7c011f',
    oneWalletPrivateKey: process.env.ONE_WALLET_PRIVATE_KEY || '',
  },
  version: process.env.npm_package_version || '0.0.1',
  name: process.env.npm_package_name || '',
  port: parseInt(process.env.PORT, 10) || 8080,
});
