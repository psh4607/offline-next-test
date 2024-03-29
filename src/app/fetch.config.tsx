// TODO: fetch intercept 할 수 있는 방법 서치
// 'use client'
// import {baseURL} from "@/app/configService";
// import React from "react";
//
//
//
//
// export const FetchRegister = ({children}:{children:React.ReactNode}) => {
//     React.useEffect(() => {
//         const { fetch: originalFetch } = window;
//
//         window.fetch = async (...args) => {
//             const [resource, config] = args;
//
//             // request interceptor starts
//             const newResource = baseURL + resource;
//             // request interceptor ends
//
//             const response = await originalFetch(newResource, config);
//
//             // response interceptor here
//             return response;
//         };
//     })
//     return <>{children}</>
// }
