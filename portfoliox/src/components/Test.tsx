// import React, { useState, useEffect } from "react";
// import { FaRetweet, MdFavoriteBorder } from "../icons/icons";

// interface Item {
//   id: number;
//   name: string;
//   retweets: number;
//   favorites: number;
//   favoritesToggle: boolean;
//   retweetsToggle: boolean;
// }

// export function Test() {
//   const initialItems: Item[] = [
//     {
//       id: 1,
//       name: "ghibli-wiki",
//       retweets: 4,
//       favorites: 3,
//       favoritesToggle: false,
//       retweetsToggle: false,
//     },
//     {
//       id: 2,
//       name: "portfolio",
//       retweets: 6,
//       favorites: 2,
//       favoritesToggle: false,
//       retweetsToggle: false,
//     },
//   ];

//   const [items, setItems] = useState<Item[]>(() => {
//     const itemsFromSession = sessionStorage.getItem("items");
//     return itemsFromSession ? JSON.parse(itemsFromSession) : initialItems;
//   });

//   useEffect(() => {
//     sessionStorage.setItem("items", JSON.stringify(items));
//   }, [items]);

//   function handleRetweet(id: number) {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               retweets: item.retweetsToggle
//                 ? item.retweets - 1
//                 : item.retweets + 1,
//               retweetsToggle: !item.retweetsToggle,
//             }
//           : item
//       )
//     );
//   }

//   function handleFavorite(id: number) {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               favorites: item.favoritesToggle
//                 ? item.favorites - 1
//                 : item.favorites + 1,
//               favoritesToggle: !item.favoritesToggle,
//             }
//           : item
//       )
//     );
//   }

//   return (
//     <div>
//       {items.map((item) => (
//         <div key={item.id}>
//           <div
//             className={`flex gap-4 px-4 text-6xl cursor-pointer  ${
//               item.retweetsToggle ? "text-green-400" : "text-white"
//             } `}
//             onClick={() => handleRetweet(item.id)}
//           >
//             {item.retweets}
//             <FaRetweet />
//             {item.name}
//           </div>
//           <div
//             className={`flex gap-4 px-4 text-6xl cursor-pointer ${
//               item.favoritesToggle ? "text-blue-400" : "text-white"
//             } `}
//             onClick={() => handleFavorite(item.id)}
//           >
//             {item.favorites}
//             <MdFavoriteBorder />
//             {item.name}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
export function Test() {
  return <div></div>;
}
