import React, { FC, useEffect, useState  } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../../adapters/authAPI';

const RouteGuard = ({children}:any)=>{
    const router = useRouter();
    const [authorization,setAuthorization]=useState(false);

    useEffect(()=>{
        let publicURLs=['/','/login','/signup'];
        if(isAuthenticated() && !publicURLs.includes(router.route)){
            setAuthorization(true);
        }
        else if(isAuthenticated() && publicURLs.includes(router.route)){
            setAuthorization(false);
            router.push({
                pathname: '/home'
            });
        }
        else if(!isAuthenticated() && publicURLs.includes(router.route)){
            setAuthorization(true);
        }
        else{
            setAuthorization(false);
            router.push({
                pathname: '/login'
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[router.route]);

    return (
        <>
            {authorization&&children}
        </>
    );
};

export default RouteGuard;

// another implemntation of route guard that only works for pages that use route guard
// import React, { FC, useEffect, useState  } from 'react';
// import { useRouter } from 'next/router';
// import { isAuthenticated } from '../../adapters/authAPI';

// const RouteGuard = ({children}:any)=>{
//     const router = useRouter();
//     const [authorization,setAuthorization]=useState(false);

//     useEffect(()=>{
//         // console.log(router.route);
//         if(isAuthenticated()){
//             console.log('yes it is authenticated');
//             setAuthorization(true);
//         }
//         else{
//             console.log('not authenticated');
//             setAuthorization(false);
//             router.push({
//                 pathname: '/login'
//             });
//         }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[]);

//     return (
//         <>
//             {authorization&&children}
//         </>
//     );
// };

// export default RouteGuard;
