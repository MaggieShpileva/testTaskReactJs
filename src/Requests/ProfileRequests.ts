import axios from "axios";
import userData from "../configFile.json";

export const Clients = async () => {
  try {
    const { data } = await axios.post(
      "http://84.201.188.117:5021/api/v3/clients/accesstoken",
      {
        idClient: userData.idClient,
        accessToken: "",
        paramName: "device",
        paramValue: userData.DeviceID,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0,
      },
      {
        headers: {
          AccessKey: userData.AccessKey,
          "Content-Type": "application/json-patch+json",
        },
      }
    );
    document.cookie = `accessToken = ${data.accessToken}`;
    return data.accessToken;
  } catch (e) {
    console.log(e);
  }
};

export const Ibonus = async (access_token: string) => {
  try {
    const { data } = await axios.get(
      `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${access_token}`,
      {
        headers: {
          AccessKey: userData.AccessKey,
          "Content-Type": "application/json-patch+json",
        },
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
