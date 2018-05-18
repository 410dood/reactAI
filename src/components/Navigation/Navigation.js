// import React from 'react';

// const Navigation = (props) => {
//   if (props.isSignedIn) {
//     return (
//       <nav
//         style={{
//           display: 'flex',
//           justifyContent: 'flex-end'
//         }}>
//         <p
//           onClick={() => props.onRouteChange('signout')}
//           className='f3 pa3 pointer link dim black underline '>
//           Sign Out
//         </p>
//       </nav>
//     );
//   } else {
//     return (
//       <nav
//         style={{
//           display: 'flex',
//           justifyContent: 'flex-end'
//         }}>
//         <p
//           onClick={() => props.onRouteChange('signin')}
//           className='f3 pa3 pointer link dim black underline '>
//           Sign In
//         </p>
//         <p
//           onClick={() => props.onRouteChange('register')}
//           className='f3 pa3 pointer link dim black underline '>
//           Register
//         </p>
//       </nav>
//     );
//   };
// };

// export default Navigation;

// import React from 'react'; const Navigation = (props) => {   if
// (props.isSignedIn) {     return(     <nav style={{         display: 'flex',
//     justifyContent: 'flex-end'       }}>       <p onClick={() =>
// props.onRouteChange('signout')} className='f3 pa3 pointer link dim black
// underline '>         Sign Out       </p>     </nav>   );} else {     return(
//   <nav style={{         display: 'flex',         justifyContent: 'flex-end'
//    }}>       <p onClick={() => props.onRouteChange('signin')} className='f3
// pa3 pointer link dim black underline '>         Sign In       </p>       <p
// onClick={() => props.onRouteChange('register')} className='f3 pa3 pointer
// link dim black underline '>         Register       </p>     </nav>   );}; };
// export default Navigation;