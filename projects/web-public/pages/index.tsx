import { sum } from "@alura/utils/math/sum";
import { Text } from "@alura/design-system/components/Text";
import React from "react";
export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home</Text>
      <Text tag="p">
        Importando modulo local @alura/utils/math/sum {sum(6, 2)} <br></br>
        Texto com aspas simples escapadas: &apos; ou &#39;
      </Text>
    </main>
  );
}
