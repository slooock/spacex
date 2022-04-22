import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { Launch } from "../domain/dto/launch-dto";
// import { CreateUserInputDto } from '../domain/dto/create-user-input-dto';s
// import User from '../domain/model/auth/user';
import BaseService from "./base-service";
let cancelToken: CancelTokenSource;

export default class LaunchService extends BaseService {
  async getLauches(
    limit: number,
    offset: number,
    past: boolean
  ): Promise<AxiosResponse<Launch[]>> {
    //Check if there are any previous pending requests
    if (typeof cancelToken != typeof undefined) {
      // if (offset != 0) {
      //   cancelToken.cancel("Operation canceled due to new request.");
      // }
    }

    let url = `launches/upcoming?limit=${limit}&offset=${offset}`;
    if (past) {
      url = `launches/past?limit=${limit}&offset=${offset}`;
    }

    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();

    return this.client.get(url, {
      cancelToken: cancelToken.token,
    });
  }
}
