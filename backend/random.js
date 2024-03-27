// // const user=new User;
// //    user.Platenum=req.body.Platenum;
// //    var datetime = new Date();
// //    user.Date=datetime.toISOString().slice(0,10);
// //    user.Time=datetime.toString().slice(16,21);
// //    console.log(user.Date,' date and time ',user.Time)



// //    export async function getGroups (orgID, sso_creds) {
// //       const groups = []
// //       const response = await axios.get(`https://graph.microsoft.com/beta/groups`, {
// //         headers: {
// //           Accept: 'application/json',
// //           'Content-Type': 'application/json',
// //           Authorization: `bearer ${sso_creds.accessToken}`
// //         }
// //       }).then(response => {
// //         return response.data.value
// //       })
// //         .catch(error => {
// //           console.error('There was an error!', error)
// //         })
// //       for (let i = 0; i < response.length; i++) {
// //         const name = response[i].displayName
// //         const { id } = response[i]
// //         const emps = []
// //         const res = await axios.get(`https://graph.microsoft.com/v1.0/groups/${id}/members`, {
// //           headers: {
// //             Accept: 'application/json',
// //             'Content-Type': 'application/json',
// //             Authorization: `bearer ${sso_creds.accessToken}`
// //           }
// //         }).then(res => {
// //         // console.log(res.data);
// //           return res.data.value
// //         })
// //           .catch(error => {
// //           // element.parentElement.innerHTML = `Error: ${error.message}`;
// //             console.error('There was an error!', error)
// //           })
// //         for (let j = 0; j < res.length; j++) {
// //           const {id}=res[j]
// //           const email=res[j].userPrincipalName
// //           const fname=res[j].givenName
// //           const lname=res[j].surname
// //           const userName=null
// //           const emp = { id: id, email: email, firstname: fname, username: userName, lastname: lname }
// //           emps.push(emp)
// //         }
// //         const resp = await axios.get(`https://graph.microsoft.com/beta/groups/${id}/members`, {
// //           headers: {
// //             Accept: 'application/json',
// //             'Content-Type': 'application/json',
// //             Authorization: `bearer ${sso_creds.accessToken}`
// //           }
// //         }).then(res => {
// //           return res.data.value
// //         })
// //           .catch(error => {
// //             console.error('There was an error!', error)
// //           })
// //         const apps = []
// //         for (let k=0;k<resp.length;k++){
// //           if(resp[k].appId){
// //           const {appId}=resp[k]
// //           appname=resp[k].appDisplayName
// //           const app={id:appId,name:appname}
// //           apps.push(app);
// //           }
// //        }
// //         const group = { name: name, groupId: id, emps: emps, apps: apps }
// //         groups.push(group)
// //       }
// //       console.log(groups)
// //       const filter = { ID: orgID }
// //       const update = { groups: groups }
// //       await groupSchema.findOneAndUpdate(filter, update)
// //       console.log('Azure group data updated successfully')
// //     }




// //     router.post('/out',async (req,res)=>{
// //       res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
// //      const vehicle=new Vehicle
// //      vehicle.PlateNum=req.body.PlateNum;
// //      vehicle.Entry=new Date();
// //      vehicle.Exit=null;
// //      vehicle.fare=null;
// //      vehicle.Slot=null;
// //     const duplicate= await Vehicle.find({PlateNum:req.body.PlateNum}).exec();
// //     console.log(duplicate[0],req.body.PlateNum)
// //     const parking= await Park.find({PlateNum:req.body.PlateNum}).exec();
// //      console.log(parking[0])
 
 
// //       if (!duplicate&&!parking){
// //       deleteParking(req.body.PlateNum);
// //       const diff = vehicle.Entry-duplicate.Entry
// //       const fare=diff*.0000034
// //       const filter ={PlateNum:duplicate.PlateNum}
// //       const update={Exit:vehicle.Entry,fare:fare}
// //      let doc = await Vehicle.findOneAndUpdate(filter,update,{new:true})
// //      console.log(doc);
// //       res.json({doc});
// //      }
// //      else{
// //      let slot = await assignParking(req.body.PlateNum);
// //      vehicle.Slot=slot;
// //      try{
// //      const savedPlate=await vehicle.save();
// //      res.json(savedPlate);
// //      }
// //      catch(err){
// //           res.json({message:err});
// //      }
// //       }
// //  }
// //   );


// {
//     code: 'ERR_BAD_REQUEST',
//     config: {
//       transitional: {
//         silentJSONParsing: true,
//         forcedJSONParsing: true,
//         clarifyTimeoutError: false
//       },
//       adapter: [Function: httpAdapter],
//       transformRequest: [ [Function: transformRequest] ],
//       transformResponse: [ [Function: transformResponse] ],
//       timeout: 0,
//       xsrfCookieName: 'XSRF-TOKEN',
//       xsrfHeaderName: 'X-XSRF-TOKEN',
//       maxContentLength: -1,
//       maxBodyLength: -1,
//       env: { FormData: [Function], Blob: [class Blob] },
//       validateStatus: [Function: validateStatus],
//       headers: AxiosHeaders {
//         'Content-Type': 'application/json',
//         'User-Agent': 'axios/1.1.3',
//         'Content-Length': '22',
//         'Accept-Encoding': 'gzip, deflate, br',
//         [Symbol(defaults)]: [Object]
//       },
//       method: 'post',
//       url: 'http://localhost:5000/parking/in',
//       data: '{"PlateNum":"new 1u6"}'
//     },
//     request: <ref *1> ClientRequest {
//       _events: [Object: null prototype] {
//         abort: [Function (anonymous)],
//         aborted: [Function (anonymous)],
//         connect: [Function (anonymous)],
//         error: [Function (anonymous)],
//         socket: [Function (anonymous)],
//         timeout: [Function (anonymous)],
//         finish: [Function: requestOnFinish]
//       },
//       _eventsCount: 7,
//       _maxListeners: undefined,
//       outputData: [],
//       outputSize: 0,
//       writable: true,
//       destroyed: false,
//       _last: true,
//       chunkedEncoding: false,
//       shouldKeepAlive: false,
//       maxRequestsOnConnectionReached: false,
//       _defaultKeepAlive: true,
//       useChunkedEncodingByDefault: true,
//       sendDate: false,
//       _removedConnection: false,
//       _removedContLen: false,
//       _removedTE: false,
//       strictContentLength: false,
//       _contentLength: '22',
//       _hasBody: true,
//       _trailer: '',
//       finished: true,
//       _headerSent: true,
//       _closed: false,
//       socket: Socket {
//         connecting: false,
//         _hadError: false,
//         _parent: null,
//         _host: 'localhost',
//         _closeAfterHandlingError: false,
//         _readableState: [ReadableState],
//         _events: [Object: null prototype],
//         _eventsCount: 7,
//         _maxListeners: undefined,
//         _writableState: [WritableState],
//         allowHalfOpen: false,
//         _sockname: null,
//         _pendingData: null,
//         _pendingEncoding: '',
//         server: null,
//         _server: null,
//         parser: null,
//         _httpMessage: [Circular *1],
//         [Symbol(async_id_symbol)]: 513,
//         [Symbol(kHandle)]: [TCP],
//         [Symbol(lastWriteQueueSize)]: 0,
//         [Symbol(timeout)]: null,
//         [Symbol(kBuffer)]: null,
//         [Symbol(kBufferCb)]: null,
//         [Symbol(kBufferGen)]: null,
//         [Symbol(kCapture)]: false,
//         [Symbol(kSetNoDelay)]: true,
//         [Symbol(kSetKeepAlive)]: true,
//         [Symbol(kSetKeepAliveInitialDelay)]: 60,
//         [Symbol(kBytesRead)]: 0,
//         [Symbol(kBytesWritten)]: 0
//       },
//       _header: 'POST /parking/in HTTP/1.1\r\n' +
//         'Accept: application/json, text/plain, */*\r\n' +
//         'Content-Type: application/json\r\n' +
//         'User-Agent: axios/1.1.3\r\n' +
//         'Content-Length: 22\r\n' +
//         'Accept-Encoding: gzip, deflate, br\r\n' +
//         'Host: localhost:5000\r\n' +
//         'Connection: close\r\n' +
//         '\r\n',
//       _keepAliveTimeout: 0,
//       _onPendingData: [Function: nop],
//       agent: Agent {
//         _events: [Object: null prototype],
//         _eventsCount: 2,
//         _maxListeners: undefined,
//         defaultPort: 80,
//         protocol: 'http:',
//         options: [Object: null prototype],
//         requests: [Object: null prototype] {},
//         sockets: [Object: null prototype],
//         freeSockets: [Object: null prototype] {},
//         keepAliveMsecs: 1000,
//         keepAlive: false,
//         maxSockets: Infinity,
//         maxFreeSockets: 256,
//         scheduling: 'lifo',
//         maxTotalSockets: Infinity,
//         totalSocketCount: 1,
//         [Symbol(kCapture)]: false
//       },
//       socketPath: undefined,
//       method: 'POST',
//       maxHeaderSize: undefined,
//       insecureHTTPParser: undefined,
//       path: '/parking/in',
//       _ended: true,
//       res: IncomingMessage {
//         _readableState: [ReadableState],
//         _events: [Object: null prototype],
//         _eventsCount: 4,
//         _maxListeners: undefined,
//         socket: [Socket],
//         httpVersionMajor: 1,
//         httpVersionMinor: 1,
//         httpVersion: '1.1',
//         complete: true,
//         rawHeaders: [Array],
//         rawTrailers: [],
//         aborted: false,
//         upgrade: false,
//         url: '',
//         method: null,
//         statusCode: 404,
//         statusMessage: 'Not Found',
//         client: [Socket],
//         _consuming: false,
//         _dumped: false,
//         req: [Circular *1],
//         responseUrl: 'http://localhost:5000/parking/in',
//         redirects: [],
//         [Symbol(kCapture)]: false,
//         [Symbol(kHeaders)]: [Object],
//         [Symbol(kHeadersCount)]: 12,
//         [Symbol(kTrailers)]: null,
//         [Symbol(kTrailersCount)]: 0
//       },
//       aborted: false,
//       timeoutCb: null,
//       upgradeOrConnect: false,
//       parser: null,
//       maxHeadersCount: null,
//       reusedSocket: false,
//       host: 'localhost',
//       protocol: 'http:',
//       _redirectable: Writable {
//         _writableState: [WritableState],
//         _events: [Object: null prototype],
//         _eventsCount: 3,
//         _maxListeners: undefined,
//         _options: [Object],
//         _ended: true,
//         _ending: true,
//         _redirectCount: 0,
//         _redirects: [],
//         _requestBodyLength: 22,
//         _requestBodyBuffers: [],
//         _onNativeResponse: [Function (anonymous)],
//         _currentRequest: [Circular *1],
//         _currentUrl: 'http://localhost:5000/parking/in',
//         [Symbol(kCapture)]: false
//       },
//       [Symbol(kCapture)]: false,
//       [Symbol(kBytesWritten)]: 0,
//       [Symbol(kEndCalled)]: true,
//       [Symbol(kNeedDrain)]: false,
//       [Symbol(corked)]: 0,
//       [Symbol(kOutHeaders)]: [Object: null prototype] {
//         accept: [Array],
//         'content-type': [Array],
//         'user-agent': [Array],
//         'content-length': [Array],
//         'accept-encoding': [Array],
//         host: [Array]
//       },
//       [Symbol(kUniqueHeaders)]: null
//     },
//     response: {
//       status: 404,
//       statusText: 'Not Found',
//       headers: AxiosHeaders {
//         'x-powered-by': 'Express',
//         'content-type': 'text/plain; charset=utf-8',
//         'content-length': '9',
//         etag: 'W/"9-0gXL1ngzMqISxa6S1zx3F4wtLyg"',
//         date: 'Sun, 13 Nov 2022 13:41:31 GMT',
//         connection: 'close',
//         [Symbol(defaults)]: null
//       },
//       config: {
//         transitional: [Object],
//         adapter: [Function: httpAdapter],
//         transformRequest: [Array],
//         transformResponse: [Array],
//         timeout: 0,
//         xsrfCookieName: 'XSRF-TOKEN',
//         xsrfHeaderName: 'X-XSRF-TOKEN',
//         maxContentLength: -1,
//         maxBodyLength: -1,
//         env: [Object],
//         validateStatus: [Function: validateStatus],
//         headers: [AxiosHeaders],
//         method: 'post',
//         url: 'http://localhost:5000/parking/in',
//         data: '{"PlateNum":"new 1u6"}'
//       },
//       request: <ref *1> ClientRequest {
//         _events: [Object: null prototype],
//         _eventsCount: 7,
//         _maxListeners: undefined,
//         outputData: [],
//         outputSize: 0,
//         writable: true,
//         destroyed: false,
//         _last: true,
//         chunkedEncoding: false,
//         shouldKeepAlive: false,
//         maxRequestsOnConnectionReached: false,
//         _defaultKeepAlive: true,
//         useChunkedEncodingByDefault: true,
//         sendDate: false,
//         _removedConnection: false,
//         _removedContLen: false,
//         _removedTE: false,
//         strictContentLength: false,
//         _contentLength: '22',
//         _hasBody: true,
//         _trailer: '',
//         finished: true,
//         _headerSent: true,
//         _closed: false,
//         socket: [Socket],
//         _header: 'POST /parking/in HTTP/1.1\r\n' +
//           'Accept: application/json, text/plain, */*\r\n' +
//           'Content-Type: application/json\r\n' +
//           'User-Agent: axios/1.1.3\r\n' +
//           'Content-Length: 22\r\n' +
//           'Accept-Encoding: gzip, deflate, br\r\n' +
//           'Host: localhost:5000\r\n' +
//           'Connection: close\r\n' +
//           '\r\n',
//         _keepAliveTimeout: 0,
//         _onPendingData: [Function: nop],
//         agent: [Agent],
//         socketPath: undefined,
//         method: 'POST',
//         maxHeaderSize: undefined,
//         insecureHTTPParser: undefined,
//         path: '/parking/in',
//         _ended: true,
//         res: [IncomingMessage],
//         aborted: false,
//         timeoutCb: null,
//         upgradeOrConnect: false,
//         parser: null,
//         maxHeadersCount: null,
//         reusedSocket: false,
//         host: 'localhost',
//         protocol: 'http:',
//         _redirectable: [Writable],
//         [Symbol(kCapture)]: false,
//         [Symbol(kBytesWritten)]: 0,
//         [Symbol(kEndCalled)]: true,
//         [Symbol(kNeedDrain)]: false,
//         [Symbol(corked)]: 0,
//         [Symbol(kOutHeaders)]: [Object: null prototype],
//         [Symbol(kUniqueHeaders)]: null
//       },
//       data: 'Not Found'
//     }
//   }



Await, BrowserRouter, Form, HashRouter, Link, MemoryRouter, NavLink, Navigate, NavigationType, Outlet, Route, Router, 
RouterProvider, Routes, ScrollRestoration, UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, UNSAFE_DataStaticRouterContext, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, UNSAFE_enhanceManualRouteObjects, createBrowserRouter, createHashRouter, createMemoryRouter, createPath, createRoutesFromChildren, createRoutesFromElements, createSearchParams, defer, generatePath, isRouteErrorResponse, json, matchPath, matchRoutes, parsePath, redirect, renderMatches, resolvePath, unstable_HistoryRouter, useActionData, useAsyncError, useAsyncValue, useFetcher, useFetchers, useFormAction, useHref, useInRouterContext, useLinkClickHandler, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes, useSearchParams, useSubmit