import axios, {AxiosError, AxiosResponse} from 'axios';
import {IHttpClient, HttpRequest, HttpResponse} from './IHttpClient';

export class AxiosHttpClient implements IHttpClient {
  async request(params: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      // Assim seria com axios caso fosse uma API real
      axiosResponse = await axios.request({
        url: params?.url,
        data: params?.body,
        headers: params.headers,
        method: params.method,
      });

      console.log('axiosResponse', axiosResponse);
    } catch (error) {
      //ErrorLog.log('AxiosHttpClient.post', error as Error);
      axiosResponse = (error as AxiosError).response as any;
    }
    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data,
    };
  }
}
