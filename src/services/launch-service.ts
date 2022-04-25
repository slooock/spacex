import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { PropsFilter } from "../components/pages/home";
import { Launch } from "../domain/dto/launch-dto";
// import { CreateUserInputDto } from '../domain/dto/create-user-input-dto';s
// import User from '../domain/model/auth/user';
import BaseService from "./base-service";
let cancelToken: CancelTokenSource;

const formatDate = (date: Date) => {
  const tmpDate = date.toLocaleDateString("en-US").split("/");
  const dateFmt = tmpDate[2] + "-" + tmpDate[0] + "-" + tmpDate[1];

  return dateFmt;
};

const buildDate = (dateStart: Date | null, dateEnd: Date | null) => {
  let dateStartFmt = "";
  let dateEndFmt = "";

  if (dateStart === null || dateStart == undefined) {
    dateStartFmt = "1800-1-1";
  } else {
    dateStartFmt = formatDate(dateStart as Date);
  }

  if (dateEnd === null || dateEnd == undefined) {
    dateEndFmt = "2800-12-31";
  } else {
    dateEndFmt = formatDate(dateEnd as Date);
  }

  return `&start=${dateStartFmt}&end=${dateEndFmt}`;
};

const BuildlaunchSuccess = (success: boolean, unsuccess: boolean) => {
  if ((success && unsuccess) || (!success && !unsuccess)) {
    return "";
  }
  return `&launch_success=${success}`;
};

const buildTime = (past: boolean, upcoming: boolean) => {
  if ((past && upcoming) || (!past && !upcoming)) {
    return "";
  } else if (past) {
    return "/past";
  } else {
    return "/upcoming";
  }
};

const buildURL = (limit: number, offset: number, filter: PropsFilter) => {
  let url = `launches${buildTime(
    filter.past,
    filter.upcoming
  )}?limit=${limit}&offset=${offset}${buildDate(
    filter.startDate,
    filter.endDate
  )}${BuildlaunchSuccess(filter.success, filter.unsuccess)}`;

  return url;
};

export default class LaunchService extends BaseService {
  async getLauches(
    limit: number,
    offset: number,
    filter: PropsFilter
  ): Promise<AxiosResponse<Launch[]>> {
    const url = buildURL(limit, offset, filter);

    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();

    return this.client.get(url, {
      cancelToken: cancelToken.token,
    });
  }
}
