import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setUser } from "../features/auth/AuthSlice";
const BaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (arrg, api, extraOprion) => {
  const result = await BaseQuery(arrg, api, extraOprion);
  console.log(result);
  if(result.error?.data === 401){
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: 'POST' ,
      credentials: 'include'
    })
    const data = await res.json()
    const user = (api.getState() as RootState).auth.user
   api.dispatch(
    setUser({
      user,
      token: data.data.accessToken
    })
   )
  }

  return result
};

export const baseAPi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
