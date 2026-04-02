import type { Tip } from '@/types';

export const tips: Tip[] = [
  {
    id: 'tip_001',
    title: {
      es: 'La pirólisis: limpieza profunda del vaso',
      en: 'Pyrolysis: deep cleaning your bowl',
    },
    content: {
      es: '¿Tu vaso tiene manchas de tomate, restos pegados o las cuchillas oscurecidas? La pirólisis es el truco definitivo para dejarlo como nuevo.\n\n1. Echá 2 litros de agua en el vaso (TM31: solo 1.7-1.8 litros)\n2. Agregá 1 pastilla de lavavajillas — importante: NO detergente líquido, porque hace espuma y rebosa\n3. Programá: 20 min / 90°C / Velocidad 4\n4. Enjuagá con agua limpia y pasá un cepillo suave\n5. Resultado: vaso y cuchillas brillantes, como nuevos\n\nFunciona para cualquier tipo de suciedad: manchas de tomate, color acumulado, restos en las ranuras de las cuchillas.',
      en: 'Is your bowl stained from tomato, has stuck-on residue, or darkened blades? Pyrolysis is the ultimate trick to make it look brand new.\n\n1. Add 2 liters of water to the bowl (TM31: only 1.7-1.8 liters)\n2. Add 1 dishwasher tablet — important: NOT liquid detergent, it foams and overflows\n3. Set: 20 min / 90°C / Speed 4\n4. Rinse with clean water and use a soft brush\n5. Result: bowl and blades shining like new\n\nWorks for any type of dirt: tomato stains, accumulated discoloration, residue in blade grooves.',
    },
    category: 'cleaning',
    thermomixSettings: '20 min / 90°C / Vel 4',
    compatibility: 'TM5, TM6, TM31',
  },
  {
    id: 'tip_002',
    title: {
      es: 'Limpieza rápida entre recetas',
      en: 'Quick clean between recipes',
    },
    content: {
      es: 'Entre una receta y otra no hace falta lavar el vaso a mano. Llená el vaso hasta la mitad con agua tibia, agregá una gota de jabón y programá 10 segundos / Velocidad 10. Enjuagá y listo. Perfecto para cuando estás cocinando varias cosas seguidas.',
      en: "Between recipes you don't need to hand-wash the bowl. Fill it halfway with warm water, add a drop of dish soap, and set 10 seconds / Speed 10. Rinse and done. Perfect when you're cooking multiple dishes in a row.",
    },
    category: 'cleaning',
    thermomixSettings: '10 seg / Vel 10',
  },
  {
    id: 'tip_003',
    title: {
      es: 'Cómo eliminar olores del vaso',
      en: 'How to remove odors from the bowl',
    },
    content: {
      es: 'Si el vaso quedó con olor fuerte después de cocinar ajo, cebolla o especias, llená con agua hasta la marca de 1 litro, agregá el jugo de medio limón y programá 5 min / 80°C / Velocidad 3. El limón neutraliza los olores. También podés dejar medio limón cortado dentro del vaso cerrado durante la noche.',
      en: 'If the bowl has a strong smell after cooking garlic, onion, or spices, fill with water to the 1-liter mark, add the juice of half a lemon, and set 5 min / 80°C / Speed 3. The lemon neutralizes odors. You can also leave half a cut lemon inside the closed bowl overnight.',
    },
    category: 'cleaning',
    thermomixSettings: '5 min / 80°C / Vel 3',
  },
  {
    id: 'tip_004',
    title: {
      es: 'Subí la velocidad de a poco para no salpicar',
      en: 'Increase speed gradually to avoid splashing',
    },
    content: {
      es: 'Nunca pases de velocidad 1 a velocidad 10 de golpe, especialmente con líquidos calientes. Siempre subí la velocidad de forma progresiva: 1 → 3 → 5 → 7 → 10. Esto evita salpicaduras y que la preparación salga por el orificio del cubilete. Es especialmente importante con sopas, cremas y salsas.',
      en: "Never jump from speed 1 to speed 10 suddenly, especially with hot liquids. Always increase speed gradually: 1 → 3 → 5 → 7 → 10. This prevents splashing and the preparation from coming out through the measuring cup hole. Especially important with soups, creams, and sauces.",
    },
    category: 'usage',
  },
  {
    id: 'tip_005',
    title: {
      es: 'El cubilete es tu medida secreta',
      en: 'The measuring cup is your secret measure',
    },
    content: {
      es: 'El cubilete (la tapita del orificio del vaso) no es solo una tapa: mide exactamente 100 ml. Usalo para medir líquidos sin ensuciar otra cosa. Además, cuando cocines con líquidos calientes, sacá el cubilete y poné el cestillo en su lugar para que salga el vapor y no salpique.',
      en: "The measuring cup (the lid of the bowl opening) isn't just a lid: it measures exactly 100 ml. Use it to measure liquids without dirtying anything else. Also, when cooking with hot liquids, remove the measuring cup and place the simmering basket in its place to let steam escape without splashing.",
    },
    category: 'usage',
  },
  {
    id: 'tip_006',
    title: {
      es: 'La mariposa: mezclar sin triturar',
      en: 'The butterfly whisk: mix without blending',
    },
    content: {
      es: '¿Querés mezclar sin triturar? Usá la mariposa. Se engancha sobre las cuchillas y permite revolver, montar nata, hacer mayonesa o mezclar masas suaves sin destrozar los ingredientes. Recordá: la mariposa solo funciona hasta velocidad 4. A velocidad mayor se puede soltar.',
      en: 'Want to mix without blending? Use the butterfly whisk. It hooks onto the blades and lets you stir, whip cream, make mayonnaise, or mix soft doughs without destroying ingredients. Remember: the butterfly whisk only works up to speed 4. At higher speeds, it can come loose.',
    },
    category: 'usage',
  },
  {
    id: 'tip_007',
    title: {
      es: 'Temperatura Varoma: cuándo usarla',
      en: 'Varoma temperature: when to use it',
    },
    content: {
      es: "La temperatura Varoma (120°C) es la máxima del Thermomix. Se usa cuando necesitás que el agua hierva y genere vapor para cocinar con el accesorio Varoma encima. También es ideal para sofreír, dorar cebollas o hacer un buen sofrito. Nunca uses Varoma con la mariposa puesta.",
      en: "Varoma temperature (120°C) is the Thermomix's maximum. Use it when you need water to boil and generate steam to cook with the Varoma accessory on top. It's also ideal for sautéing, browning onions, or making a good sofrito. Never use Varoma temperature with the butterfly whisk attached.",
    },
    category: 'usage',
  },
  {
    id: 'tip_008',
    title: {
      es: 'Revisá la goma del vaso regularmente',
      en: 'Check the bowl seal regularly',
    },
    content: {
      es: "La goma (junta) de la tapa del vaso se desgasta con el uso. Revisala cada 6 meses: si está agrietada, endurecida o deformada, cambiala. Una goma en mal estado puede causar fugas durante la cocción. Truco: sacala después de cada uso para que se seque bien y no acumule humedad ni olores.",
      en: "The bowl lid seal (gasket) wears out with use. Check it every 6 months: if it's cracked, hardened, or warped, replace it. A damaged seal can cause leaks during cooking. Tip: remove it after each use so it dries properly and doesn't accumulate moisture or odors.",
    },
    category: 'maintenance',
  },
  {
    id: 'tip_009',
    title: {
      es: 'No guardes el vaso con la tapa cerrada',
      en: "Don't store the bowl with the lid closed",
    },
    content: {
      es: 'Después de lavar y secar, guardá el vaso con la tapa abierta o apoyada encima sin cerrar. Si lo cerrás húmedo se puede generar mal olor o incluso moho en la goma. Lo mismo con el Varoma: dejalo abierto para que ventile.',
      en: 'After washing and drying, store the bowl with the lid open or resting on top without closing. If you close it while damp, it can develop bad odors or even mold on the seal. Same with the Varoma: leave it open to ventilate.',
    },
    category: 'maintenance',
  },
  {
    id: 'tip_010',
    title: {
      es: 'Las cuchillas no se afilan: se cambian',
      en: "Blades don't get sharpened: they get replaced",
    },
    content: {
      es: "Las cuchillas del Thermomix no se afilan — de hecho, no necesitan estar afiladas para funcionar. Trabajan por velocidad y fuerza, no por filo. Si notás que tarda más en triturar, probablemente sea momento de cambiar el grupo de cuchillas completo (cada 2-3 años con uso frecuente). El cambio lo puede hacer el servicio técnico o vos misma.",
      en: "Thermomix blades don't get sharpened — in fact, they don't need to be sharp to work. They work through speed and force, not sharpness. If you notice it takes longer to blend, it's probably time to replace the entire blade assembly (every 2-3 years with frequent use). The replacement can be done by the service center or by yourself.",
    },
    category: 'maintenance',
  },
  {
    id: 'tip_011',
    title: {
      es: 'Nunca llenes por encima de la marca máxima',
      en: 'Never fill above the maximum mark',
    },
    content: {
      es: "El vaso tiene una marca de máximo (2.2 litros). Nunca la superes, especialmente con líquidos calientes que expanden. Con alimentos que hierven (sopas, cremas), no llenes más de 1.5 litros para dejar espacio a la ebullición. Llenar de más puede causar que la tapa salte y te quemes.",
      en: "The bowl has a maximum mark (2.2 liters). Never exceed it, especially with hot liquids that expand. With boiling foods (soups, creams), don't fill more than 1.5 liters to leave room for boiling. Overfilling can cause the lid to pop off and burn you.",
    },
    category: 'safety',
  },
  {
    id: 'tip_012',
    title: {
      es: 'Líquidos calientes: siempre con cubilete y velocidad baja',
      en: 'Hot liquids: always with measuring cup and low speed',
    },
    content: {
      es: 'Cuando vayas a triturar algo caliente (sopas, cremas), empezá siempre en velocidad 1-2 con el cubilete puesto. El vapor puede empujar la tapa. Si necesitás más velocidad, subí progresivamente. Para purés muy calientes, dejá enfriar 5 minutos antes de triturar o poné un paño sobre la tapa como precaución extra.',
      en: 'When blending something hot (soups, creams), always start at speed 1-2 with the measuring cup in place. Steam can push the lid off. If you need more speed, increase gradually. For very hot purées, let them cool for 5 minutes before blending, or place a cloth over the lid as extra precaution.',
    },
    category: 'safety',
  },
  {
    id: 'tip_013',
    title: {
      es: 'Nunca sumerjas la base del Thermomix en agua',
      en: 'Never submerge the Thermomix base in water',
    },
    content: {
      es: 'Parece obvio pero pasa: la base (el motor) NO se puede mojar ni sumergir. Solo se limpia con un paño húmedo. El vaso, la tapa, el cubilete, la mariposa y el cestillo sí se pueden lavar con agua. El Varoma también. Pero la base, nunca. Tiene componentes electrónicos que se dañan con el agua.',
      en: 'It seems obvious but it happens: the base (the motor) must NOT get wet or submerged. Only clean it with a damp cloth. The bowl, lid, measuring cup, butterfly whisk, and simmering basket can be washed with water. The Varoma too. But the base, never. It has electronic components that get damaged by water.',
    },
    category: 'safety',
  },
  {
    id: 'tip_014',
    title: {
      es: 'Usá el cestillo como colador de pasta',
      en: 'Use the simmering basket as a pasta strainer',
    },
    content: {
      es: 'Podés cocinar pasta directamente en el cestillo. Poné agua en el vaso, el cestillo con la pasta dentro, temperatura Varoma y 10-12 minutos según el tipo de pasta. Cuando termine, sacás el cestillo y la pasta ya está escurrida. Cero coladores extra, cero salpicaduras.',
      en: "You can cook pasta directly in the simmering basket. Put water in the bowl, the basket with pasta inside, Varoma temperature, and 10-12 minutes depending on the pasta type. When done, lift the basket and the pasta is already drained. Zero extra strainers, zero splashing.",
    },
    category: 'hacks',
    thermomixSettings: '10-12 min / Varoma / Vel 1',
  },
  {
    id: 'tip_015',
    title: {
      es: 'Azúcar glass casera en 10 segundos',
      en: 'Homemade powdered sugar in 10 seconds',
    },
    content: {
      es: 'No necesitás comprar azúcar glass. Poné azúcar común en el vaso (hasta 500g) y programá 10-20 segundos a velocidad progresiva 5-7-10. Resultado: azúcar glass perfecta. Funciona igual con azúcar moreno. También podés hacer harina de avena, de almendras o de cualquier fruto seco con el mismo método.',
      en: 'No need to buy powdered sugar. Put regular sugar in the bowl (up to 500g) and set 10-20 seconds at progressive speed 5-7-10. Result: perfect powdered sugar. Works the same with brown sugar. You can also make oat flour, almond flour, or any nut flour with the same method.',
    },
    category: 'hacks',
    thermomixSettings: '10-20 seg / Vel 5→10',
  },
  {
    id: 'tip_016',
    title: {
      es: 'Picá hielo en segundos',
      en: 'Crush ice in seconds',
    },
    content: {
      es: 'Poné hasta 300g de cubitos de hielo en el vaso y dale 3-4 golpes de turbo. No más. Si le das demasiado queda agua en vez de hielo picado. El truco está en los golpes cortos. Perfecto para cócteles, granizados o enfriar sopas rápidamente. Importante: no pongas más de 300g para no forzar las cuchillas.',
      en: "Put up to 300g of ice cubes in the bowl and give 3-4 turbo pulses. No more. Too much and you'll get water instead of crushed ice. The trick is short pulses. Perfect for cocktails, slushies, or quickly cooling soups. Important: don't add more than 300g to avoid straining the blades.",
    },
    category: 'hacks',
    thermomixSettings: '3-4 Turbo',
  },
];
