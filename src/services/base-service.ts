import { AxiosInstance } from 'axios';
import { unsecuredApi } from './api';

export default abstract class BaseService {
  protected client: AxiosInstance;

  constructor() {
    this.client = unsecuredApi();
  }
}
