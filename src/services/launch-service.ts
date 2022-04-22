import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { Launch } from "../domain/dto/launch-dto";
// import { CreateUserInputDto } from '../domain/dto/create-user-input-dto';s
// import User from '../domain/model/auth/user';
import BaseService from "./base-service";
let cancelToken: CancelTokenSource;

export default class LaunchService extends BaseService {
  async getLauches(
    limit: number,
    offset: number
  ): Promise<AxiosResponse<Launch[]>> {
    //Check if there are any previous pending requests
    if (typeof cancelToken != typeof undefined) {
      // if (offset != 0) {
      //   cancelToken.cancel("Operation canceled due to new request.");
      // }
    }

    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();

    return this.client.get(`launches?limit=${limit}&offset=${offset}`, {
      cancelToken: cancelToken.token,
    });
  }
}
