import * as Network from "expo-network";


const getIP = async () => {
    try {
        return Network.getIpAddressAsync();
    } catch (e) {
        return "000000000"
    }
  };

export default getIP