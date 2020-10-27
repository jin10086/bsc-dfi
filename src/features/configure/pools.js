import BigNumber from "bignumber.js";
// id: '池子id',
// name: '池子名字',  
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// tokenDecimals: '存入精度'
// itokenDecimals: '提取精度'
// depostLimit: '存入最大数量限制' 0时不限制
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price: 
export const pools = [
  {
    id: 'busd',
    name: 'BUSD',  
    token: 'BUSD',
    tokenDescription: 'BUSD',
    tokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iBUSD',
    earnedTokenAddress: '0xeB3C085FBc1030bb127114CB1A3B9A02A24eF62d',
    earnContractAddress: '0xeB3C085FBc1030bb127114CB1A3B9A02A24eF62d',
    defaultApy: "42.63",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },{
    id: 'usdt',
    name: 'USDT',  
    token: 'USDT',
    tokenDescription: 'USDT',
    tokenAddress: '0x55d398326f99059ff775485246999027b3197955',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iUSDT',
    earnedTokenAddress: '0x1F19D041FDCE1B70901008229d77A8B02E315618',
    earnContractAddress: '0x1F19D041FDCE1B70901008229d77A8B02E315618',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  }
]