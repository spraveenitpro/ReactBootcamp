// import React, {useState} from "react";

// export default class Counter extends React.Component {
//   state = {
//     count: 0,
//   };

//   render() {
//     return (
//       <>
//         <h1>Hello World!! {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click!
//         </button>
//       </>
//     );
//   }
// }

/*import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </>
  );
}

export default Counter;

*/

// import React, { useState } from "react";

// function UserPoints() {
//   const [username, setUsername] = useState(``);
//   const [isUsernameSaved, setIsUsernameSaved] = useState(false);
//   const [point, setPoints] = useState(0);

//   return (
//     <>
//       {isUsernameSaved ? (
//         <>
//           <h1>Hello {username}!!</h1>
//           <h3>You have {point} points!!</h3>

//           <p>
//             <button onClick={() => setPoints(point + 1)}>Add 1</button>
//             <button onClick={() => setPoints(0)}> Clear Points</button>
//           </p>
//           <p>
//             <button onClick={() => setIsUsernameSaved(false)}>
//               Edit Username
//             </button>
//             <button
//               onClick={() => {
//                 setUsername(``);
//                 setPoints(0);
//                 setIsUsernameSaved(false);
//               }}
//             >
//               Clear Username
//             </button>
//           </p>
//         </>
//       ) : (
//         <>
//           <h1>Howdy!!</h1>

//           <p>
//             <input
//               id="username"
//               value={username}
//               placeholder="Username"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <button onClick={() => setIsUsernameSaved(true)}>
//               Save Username
//             </button>
//           </p>
//         </>
//       )}
//     </>
//   );
// }

// import React, { useState } from "react";

// function Heading({ username, points }) {
//   return (
//     <h1>
//       {username}: {points}
//     </h1>
//   );
// }

// function Button({ label, onClick }) {
//   return <button onClick={() => onClick()}>{label}</button>;
// }

// function UserPoints() {
//   const [username, setUsername] = useState(null);
//   const [isUsernameSaved, setIsUsernameSaved] = useState(false);
//   const [points, setPoints] = useState(0);

//   return (
//     <>
//       {isUsernameSaved ? (
//         <>
//           <Heading username={username} points={points} />
//           <p>
//             <Button label="Add Point" onClick={() => setPoints(points + 1)} />
//             <Button label="Clear Points" onClick={() => setPoints(0)} />
//           </p>
//           <p>
//             <Button
//               label="Edit Username"
//               onClick={() => {
//                 setIsUsernameSaved(false);
//               }}
//             />
//           </p>
//         </>
//       ) : (
//         <p>
//           <input
//             id="username"
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Username"
//             value={username}
//           />
//           <Button
//             label="Save Username"
//             onClick={() => {
//               setIsUsernameSaved(true);
//             }}
//           />
//         </p>
//       )}
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";

// function Posts() {
//   const [posts, setPosts] = useState([]);
//   const url = `https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts/`;

//   const fetchPosts = () => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((posts) => {
//         setPosts(posts);
//       })
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     if (posts.length === 0) {
//       fetchPosts();
//     }
//   });

//   return (
//     <>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title.rendered}</li>
//         ))}
//       </ul>
//       <button onClick={() => setPosts([])}>Refresh Posts!</button>
//     </>
//   );
// }

// export default Posts;

import React, { useState, useEffect } from "react";
export default function App() {
  const [posts, setPosts] = useState([]);
  const url = `https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts/`;

  const fetchPosts = () => {
    console.log(`Fetching posts`);
    fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => console.error(error));
  };

  // Log when posts change
  useEffect(() => console.log(posts), [posts]);

  // Get posts on initial render and if no posts exist
  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch posts every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`5 Second Refresh!`);
      fetchPosts();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </>
  );
}
