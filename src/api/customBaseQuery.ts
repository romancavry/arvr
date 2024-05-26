import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';

import type { AxiosRequestConfig, AxiosError } from 'axios';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';

export type RequestErrorItem = {
  code: string;
  msg?: string;
  col?: string[];
  params?: Record<string, unknown>;
};

export type RequestErrorData = {
  errors?: RequestErrorItem[];
};

export type RequestError = {
  status?: number;
  data?: RequestErrorData | null;
};

export type RequestOptions = {
  host?: string;
  path: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  headers?: Record<string, string>;
  noParseData?: boolean;
};

export const customBaseQuery = (): BaseQueryFn<
  RequestOptions,
  unknown,
  unknown
> => {
  const axiosInstance = axios.create();

  return async ({
    host,
    path,
    method,
    data,
    params,
    headers: customHeaders,
    noParseData,
  }) => {
    try {
      const headers: Record<string, string> = {
        Accept: 'application/json',
        ...(customHeaders || {}),
      };

      const transformedData =
        data && (noParseData ? data : snakecaseKeys(data, { deep: true }));

      const response = await axiosInstance({
        url: `${host}${path}`,
        withCredentials: true,
        method,
        data: transformedData,
        params,
        headers,
        paramsSerializer: {
          indexes: null,
        },
      });

      const transformedResult =
        response.data && camelcaseKeys(response.data, { deep: true });

      return { data: transformedResult };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      const transformedResult =
        // @ts-ignore
        err.response?.data && camelcaseKeys(err.response?.data, { deep: true });

      return {
        error: {
          status: err.response?.status,
          data: transformedResult || null,
        } as RequestError,
      };
    }
  };
};
