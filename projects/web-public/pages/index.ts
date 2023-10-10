import { sum } from "@alura/utils/math/sum";
// export default function HomeScreen() {
//   return (
//     <main>
//       <h1>Home</h1>
//       <p>Importando modulo local '@alura/utils/math/sum' sum(2,2)</p>
//     </main>
//   );
// }

import React from "react";

const HomeScreen: React.FC = () => {
  return (
    <main>
      <h1>Home</h1>
      <p>Importando modulo local '@alura/utils/math/sum' sum(2,2)</p>
    </main>
  );
};

export default HomeScreen;
