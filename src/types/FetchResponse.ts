import { ApolloError } from "@apollo/client";
import Page from "./Page";

type FetchResponse<T> = {
  data: T;
  loading: boolean;
  error?: ApolloError;
  page?: Page;
};
export default FetchResponse;
