import { ApolloError } from "@apollo/client";
import Anime from "./Anime";
import Page from "./Page";

type FetchResponse = {
  data: Anime[];
  loading: boolean;
  error?: ApolloError;
  page: Page;
};
export default FetchResponse;
