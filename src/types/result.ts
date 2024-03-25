import { IResultInfo } from "./interfaces/IResultInfo";

export interface Result<T> {
  info: IResultInfo;
  results: Array<T>
}