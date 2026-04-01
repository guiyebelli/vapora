import type { Recipe } from '@/types';

export const recipes: Recipe[] = [
  {
    "id": "rec_009",
    "slug": "basic-white-bread",
    "title": {
      "es": "Pan blanco casero",
      "en": "Basic white bread"
    },
    "description": {
      "es": "Un pan blanco esponjoso y crujiente, perfecto para el dia a dia. La Thermomix amasa la masa en minutos, dejandote solo esperar a que suba.",
      "en": "A fluffy, crusty white bread perfect for everyday. The Thermomix kneads the dough in minutes, leaving you to simply wait for it to rise."
    },
    "image": "basic-white-bread.jpg",
    "category": "breads",
    "tags": [
      "pan",
      "basico",
      "clasico",
      "facil",
      "bread",
      "basic",
      "classic"
    ],
    "difficulty": "medium",
    "totalTime": 120,
    "prepTime": 15,
    "cookTime": 35,
    "servings": 8,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [],
    "ingredients": [
      {
        "id": "ing_009_01",
        "name": {
          "es": "Agua tibia",
          "en": "Warm water"
        },
        "amount": 300,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "ing_009_02",
        "name": {
          "es": "Levadura fresca",
          "en": "Fresh yeast"
        },
        "amount": 25,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_009_03",
        "name": {
          "es": "Azucar",
          "en": "Sugar"
        },
        "amount": 10,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_009_04",
        "name": {
          "es": "Harina de trigo",
          "en": "All-purpose flour"
        },
        "amount": 500,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_009_05",
        "name": {
          "es": "Sal",
          "en": "Salt"
        },
        "amount": 10,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_009_06",
        "name": {
          "es": "Aceite de oliva",
          "en": "Olive oil"
        },
        "amount": 30,
        "unit": "ml",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step_009_01",
        "order": 1,
        "instruction": {
          "es": "Anadir el agua tibia, la levadura fresca y el azucar al vaso. Programar 2 min / 37°C / Vel 2.",
          "en": "Add the warm water, fresh yeast and sugar to the bowl. Set 2 min / 37°C / Speed 2."
        },
        "thermomixSettings": {
          "speed": 2,
          "temperature": 37,
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "step_009_02",
        "order": 2,
        "instruction": {
          "es": "Anadir la harina, la sal y el aceite de oliva al vaso. Programar 2 min / Vel Espiga.",
          "en": "Add the flour, salt and olive oil to the bowl. Set 2 min / Kneading speed."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "step_009_03",
        "order": 3,
        "instruction": {
          "es": "Retirar la masa del vaso y formar una bola. Colocar en un bol engrasado y cubrir con un pano humedo.",
          "en": "Remove the dough from the bowl and shape into a ball. Place in a greased bowl and cover with a damp cloth."
        }
      },
      {
        "id": "step_009_04",
        "order": 4,
        "instruction": {
          "es": "Dejar reposar la masa durante 1 hora o hasta que duplique su tamano.",
          "en": "Let the dough rise for 1 hour or until it doubles in size."
        },
        "timer": 3600,
        "tip": {
          "es": "Si hace frio, precalentar el horno a 50°C, apagarlo y dejar la masa dentro para que suba mas rapido.",
          "en": "If it's cold, preheat the oven to 50°C, turn it off and place the dough inside to help it rise faster."
        }
      },
      {
        "id": "step_009_05",
        "order": 5,
        "instruction": {
          "es": "Desgasificar la masa presionando suavemente. Formar un pan alargado o redondo y colocar sobre una bandeja con papel de horno.",
          "en": "Gently punch down the dough to deflate. Shape into a long or round loaf and place on a baking tray lined with parchment paper."
        }
      },
      {
        "id": "step_009_06",
        "order": 6,
        "instruction": {
          "es": "Dejar reposar 30 minutos mas. Mientras tanto, precalentar el horno a 200°C.",
          "en": "Let it rest for 30 more minutes. Meanwhile, preheat the oven to 200°C."
        },
        "timer": 1800
      },
      {
        "id": "step_009_07",
        "order": 7,
        "instruction": {
          "es": "Hacer unos cortes en la superficie del pan con un cuchillo afilado. Hornear durante 30-35 minutos hasta que este dorado.",
          "en": "Score the surface of the bread with a sharp knife. Bake for 30-35 minutes until golden brown."
        },
        "timer": 2100
      },
      {
        "id": "step_009_08",
        "order": 8,
        "instruction": {
          "es": "Retirar del horno y dejar enfriar sobre una rejilla antes de cortar.",
          "en": "Remove from the oven and let it cool on a wire rack before slicing."
        }
      }
    ],
    "tips": {
      "es": "Para una corteza mas crujiente, colocar un recipiente con agua en la base del horno durante la coccion.",
      "en": "For a crispier crust, place a small dish of water at the bottom of the oven during baking."
    },
    "origin": {
      "es": "Internacional",
      "en": "International"
    },
    "createdAt": "2026-03-31T00:00:00.000Z",
    "updatedAt": "2026-03-31T00:00:00.000Z"
  },
  {
    "id": "rec_011",
    "slug": "brioche",
    "title": {
      "es": "Brioche clasico",
      "en": "Classic brioche"
    },
    "description": {
      "es": "Un brioche suave y mantecoso con miga esponjosa. Ideal para desayunos y meriendas especiales. La Thermomix facilita el amasado de esta masa enriquecida.",
      "en": "A soft, buttery brioche with a fluffy crumb. Ideal for special breakfasts and snacks. The Thermomix makes kneading this enriched dough effortless."
    },
    "image": "brioche.jpg",
    "category": "breads",
    "tags": [
      "brioche",
      "dulce",
      "mantequilla",
      "desayuno",
      "sweet",
      "butter",
      "breakfast",
      "frances"
    ],
    "difficulty": "hard",
    "totalTime": 210,
    "prepTime": 25,
    "cookTime": 25,
    "servings": 8,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [],
    "ingredients": [
      {
        "id": "ing_011_01",
        "name": {
          "es": "Leche tibia",
          "en": "Warm milk"
        },
        "amount": 80,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "ing_011_02",
        "name": {
          "es": "Levadura fresca",
          "en": "Fresh yeast"
        },
        "amount": 20,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_011_03",
        "name": {
          "es": "Harina de fuerza",
          "en": "Bread flour"
        },
        "amount": 350,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_011_04",
        "name": {
          "es": "Azucar",
          "en": "Sugar"
        },
        "amount": 50,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_011_05",
        "name": {
          "es": "Sal",
          "en": "Salt"
        },
        "amount": 6,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_011_06",
        "name": {
          "es": "Huevos",
          "en": "Eggs"
        },
        "amount": 3,
        "unit": "unidades",
        "optional": false
      },
      {
        "id": "ing_011_07",
        "name": {
          "es": "Mantequilla a temperatura ambiente, en trozos",
          "en": "Room temperature butter, cubed"
        },
        "amount": 150,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_011_08",
        "name": {
          "es": "Huevo batido para pincelar",
          "en": "Beaten egg for egg wash"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false,
        "group": "Para pincelar"
      }
    ],
    "steps": [
      {
        "id": "step_011_01",
        "order": 1,
        "instruction": {
          "es": "Anadir la leche tibia y la levadura al vaso. Programar 1 min / 37°C / Vel 2.",
          "en": "Add the warm milk and yeast to the bowl. Set 1 min / 37°C / Speed 2."
        },
        "thermomixSettings": {
          "speed": 2,
          "temperature": 37,
          "time": 60
        },
        "timer": 60
      },
      {
        "id": "step_011_02",
        "order": 2,
        "instruction": {
          "es": "Anadir la harina, el azucar, la sal y los huevos. Programar 2 min / Vel Espiga.",
          "en": "Add the flour, sugar, salt and eggs. Set 2 min / Kneading speed."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "step_011_03",
        "order": 3,
        "instruction": {
          "es": "Incorporar la mantequilla en trozos a traves de la boca de la tapa mientras se amasa. Programar 3 min / Vel Espiga.",
          "en": "Add the butter pieces through the lid opening while kneading. Set 3 min / Kneading speed."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "time": 180
        },
        "timer": 180,
        "tip": {
          "es": "Anadir la mantequilla poco a poco para que se integre bien en la masa.",
          "en": "Add the butter gradually so it integrates well into the dough."
        }
      },
      {
        "id": "step_011_04",
        "order": 4,
        "instruction": {
          "es": "Retirar la masa del vaso (sera pegajosa, es normal). Colocar en un bol engrasado, cubrir con film transparente y refrigerar durante al menos 2 horas o toda la noche.",
          "en": "Remove the dough from the bowl (it will be sticky, this is normal). Place in a greased bowl, cover with plastic wrap and refrigerate for at least 2 hours or overnight."
        },
        "timer": 7200,
        "tip": {
          "es": "El frio ayuda a que la mantequilla se solidifique y la masa sea mas facil de manejar.",
          "en": "The cold helps the butter solidify and makes the dough easier to handle."
        }
      },
      {
        "id": "step_011_05",
        "order": 5,
        "instruction": {
          "es": "Dividir la masa en 8 porciones iguales. Formar bolas y colocar en un molde engrasado o en moldes individuales de brioche.",
          "en": "Divide the dough into 8 equal portions. Shape into balls and place in a greased mold or individual brioche molds."
        }
      },
      {
        "id": "step_011_06",
        "order": 6,
        "instruction": {
          "es": "Cubrir con un pano y dejar levar a temperatura ambiente durante 1 hora o hasta que casi dupliquen su tamano.",
          "en": "Cover with a cloth and let rise at room temperature for 1 hour or until nearly doubled in size."
        },
        "timer": 3600
      },
      {
        "id": "step_011_07",
        "order": 7,
        "instruction": {
          "es": "Precalentar el horno a 180°C. Pincelar la superficie de los brioches con el huevo batido.",
          "en": "Preheat the oven to 180°C. Brush the surface of the brioches with beaten egg."
        }
      },
      {
        "id": "step_011_08",
        "order": 8,
        "instruction": {
          "es": "Hornear durante 20-25 minutos hasta que esten dorados. Dejar enfriar 10 minutos antes de desmoldar.",
          "en": "Bake for 20-25 minutes until golden. Let cool for 10 minutes before removing from the mold."
        },
        "timer": 1500
      }
    ],
    "tips": {
      "es": "El brioche esta perfecto cuando al golpearlo en la base suena hueco. Se conserva bien 2-3 dias en una bolsa cerrada.",
      "en": "The brioche is perfect when it sounds hollow when tapped on the bottom. It keeps well for 2-3 days in a sealed bag."
    },
    "origin": {
      "es": "Francia",
      "en": "France"
    },
    "createdAt": "2026-03-31T00:00:00.000Z",
    "updatedAt": "2026-03-31T00:00:00.000Z"
  },
  {
    "id": "rec_010",
    "slug": "pizza-dough",
    "title": {
      "es": "Masa de pizza casera",
      "en": "Homemade pizza dough"
    },
    "description": {
      "es": "Masa de pizza fina y elastica, lista en minutos con la Thermomix. Perfecta para pizza al horno de lena o convencional.",
      "en": "Thin and elastic pizza dough, ready in minutes with the Thermomix. Perfect for wood-fired or conventional oven pizza."
    },
    "image": "pizza-dough.jpg",
    "category": "breads",
    "tags": [
      "pizza",
      "masa",
      "italiano",
      "rapido",
      "dough",
      "italian",
      "quick"
    ],
    "difficulty": "easy",
    "totalTime": 75,
    "prepTime": 10,
    "cookTime": 12,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [],
    "ingredients": [
      {
        "id": "ing_010_01",
        "name": {
          "es": "Agua tibia",
          "en": "Warm water"
        },
        "amount": 200,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "ing_010_02",
        "name": {
          "es": "Levadura fresca",
          "en": "Fresh yeast"
        },
        "amount": 15,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_010_03",
        "name": {
          "es": "Aceite de oliva virgen extra",
          "en": "Extra virgin olive oil"
        },
        "amount": 20,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "ing_010_04",
        "name": {
          "es": "Harina de fuerza",
          "en": "Bread flour"
        },
        "amount": 350,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_010_05",
        "name": {
          "es": "Sal",
          "en": "Salt"
        },
        "amount": 7,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_010_06",
        "name": {
          "es": "Azucar",
          "en": "Sugar"
        },
        "amount": 5,
        "unit": "g",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step_010_01",
        "order": 1,
        "instruction": {
          "es": "Anadir el agua tibia, la levadura y el azucar al vaso. Programar 1 min / 37°C / Vel 2.",
          "en": "Add the warm water, yeast and sugar to the bowl. Set 1 min / 37°C / Speed 2."
        },
        "thermomixSettings": {
          "speed": 2,
          "temperature": 37,
          "time": 60
        },
        "timer": 60
      },
      {
        "id": "step_010_02",
        "order": 2,
        "instruction": {
          "es": "Anadir la harina de fuerza, la sal y el aceite de oliva. Programar 2 min / Vel Espiga.",
          "en": "Add the bread flour, salt and olive oil. Set 2 min / Kneading speed."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "step_010_03",
        "order": 3,
        "instruction": {
          "es": "Retirar la masa del vaso y dividir en 4 porciones iguales. Formar bolas y colocar en una superficie enharinada.",
          "en": "Remove the dough from the bowl and divide into 4 equal portions. Shape into balls and place on a floured surface."
        }
      },
      {
        "id": "step_010_04",
        "order": 4,
        "instruction": {
          "es": "Cubrir con un pano humedo y dejar reposar 45 minutos o hasta que dupliquen su tamano.",
          "en": "Cover with a damp cloth and let rest for 45 minutes or until doubled in size."
        },
        "timer": 2700
      },
      {
        "id": "step_010_05",
        "order": 5,
        "instruction": {
          "es": "Precalentar el horno a la maxima temperatura (250°C idealmente) con la bandeja dentro.",
          "en": "Preheat the oven to maximum temperature (ideally 250°C) with the baking tray inside."
        }
      },
      {
        "id": "step_010_06",
        "order": 6,
        "instruction": {
          "es": "Estirar cada bola con las manos o un rodillo sobre superficie enharinada hasta obtener una base fina. Anadir los ingredientes deseados por encima.",
          "en": "Stretch each ball with your hands or a rolling pin on a floured surface until you get a thin base. Add your desired toppings."
        }
      },
      {
        "id": "step_010_07",
        "order": 7,
        "instruction": {
          "es": "Hornear durante 10-12 minutos o hasta que los bordes esten dorados y crujientes.",
          "en": "Bake for 10-12 minutes or until the edges are golden and crispy."
        },
        "timer": 720
      }
    ],
    "tips": {
      "es": "Para una masa mas sabrosa, dejar fermentar en la nevera durante 24 horas en vez de 45 minutos a temperatura ambiente.",
      "en": "For a more flavorful dough, let it ferment in the fridge for 24 hours instead of 45 minutes at room temperature."
    },
    "origin": {
      "es": "Italia",
      "en": "Italy"
    },
    "createdAt": "2026-03-31T00:00:00.000Z",
    "updatedAt": "2026-03-31T00:00:00.000Z"
  },
  {
    "id": "rec_012",
    "slug": "whole-wheat-bread",
    "title": {
      "es": "Pan integral de semillas",
      "en": "Whole wheat seed bread"
    },
    "description": {
      "es": "Un pan integral nutritivo y sabroso, con una mezcla de semillas que le aporta textura y sabor. Perfecto para quienes buscan una opcion mas saludable.",
      "en": "A nutritious and flavorful whole wheat bread with a seed mix that adds texture and flavor. Perfect for those looking for a healthier option."
    },
    "image": "whole-wheat-bread.jpg",
    "category": "breads",
    "tags": [
      "integral",
      "semillas",
      "saludable",
      "fibra",
      "whole-wheat",
      "seeds",
      "healthy",
      "fiber"
    ],
    "difficulty": "medium",
    "totalTime": 135,
    "prepTime": 20,
    "cookTime": 40,
    "servings": 10,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [],
    "ingredients": [
      {
        "id": "ing_012_01",
        "name": {
          "es": "Agua tibia",
          "en": "Warm water"
        },
        "amount": 320,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "ing_012_02",
        "name": {
          "es": "Levadura fresca",
          "en": "Fresh yeast"
        },
        "amount": 25,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_012_03",
        "name": {
          "es": "Miel",
          "en": "Honey"
        },
        "amount": 20,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_012_04",
        "name": {
          "es": "Harina integral de trigo",
          "en": "Whole wheat flour"
        },
        "amount": 400,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_012_05",
        "name": {
          "es": "Harina de fuerza",
          "en": "Bread flour"
        },
        "amount": 100,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_012_06",
        "name": {
          "es": "Sal",
          "en": "Salt"
        },
        "amount": 10,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_012_07",
        "name": {
          "es": "Aceite de oliva",
          "en": "Olive oil"
        },
        "amount": 30,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "ing_012_08",
        "name": {
          "es": "Semillas de girasol",
          "en": "Sunflower seeds"
        },
        "amount": 30,
        "unit": "g",
        "optional": false,
        "group": "Semillas"
      },
      {
        "id": "ing_012_09",
        "name": {
          "es": "Semillas de lino",
          "en": "Flax seeds"
        },
        "amount": 20,
        "unit": "g",
        "optional": false,
        "group": "Semillas"
      },
      {
        "id": "ing_012_10",
        "name": {
          "es": "Semillas de sesamo",
          "en": "Sesame seeds"
        },
        "amount": 20,
        "unit": "g",
        "optional": false,
        "group": "Semillas"
      },
      {
        "id": "ing_012_11",
        "name": {
          "es": "Copos de avena para decorar",
          "en": "Oat flakes for topping"
        },
        "amount": 15,
        "unit": "g",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "step_012_01",
        "order": 1,
        "instruction": {
          "es": "Anadir el agua tibia, la levadura y la miel al vaso. Programar 2 min / 37°C / Vel 2.",
          "en": "Add the warm water, yeast and honey to the bowl. Set 2 min / 37°C / Speed 2."
        },
        "thermomixSettings": {
          "speed": 2,
          "temperature": 37,
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "step_012_02",
        "order": 2,
        "instruction": {
          "es": "Anadir la harina integral, la harina de fuerza, la sal y el aceite de oliva. Programar 2 min / Vel Espiga.",
          "en": "Add the whole wheat flour, bread flour, salt and olive oil. Set 2 min / Kneading speed."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "step_012_03",
        "order": 3,
        "instruction": {
          "es": "Anadir las semillas de girasol, lino y sesamo. Programar 1 min / Vel Espiga para integrarlas.",
          "en": "Add the sunflower, flax and sesame seeds. Set 1 min / Kneading speed to incorporate them."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "time": 60
        },
        "timer": 60,
        "tip": {
          "es": "Si la masa queda muy seca, anadir una cucharada de agua extra. La harina integral absorbe mas liquido.",
          "en": "If the dough is too dry, add an extra tablespoon of water. Whole wheat flour absorbs more liquid."
        }
      },
      {
        "id": "step_012_04",
        "order": 4,
        "instruction": {
          "es": "Retirar la masa del vaso y formar una bola. Colocar en un bol engrasado y cubrir con un pano humedo.",
          "en": "Remove the dough from the bowl and shape into a ball. Place in a greased bowl and cover with a damp cloth."
        }
      },
      {
        "id": "step_012_05",
        "order": 5,
        "instruction": {
          "es": "Dejar reposar la masa durante 1 hora o hasta que duplique su tamano.",
          "en": "Let the dough rise for 1 hour or until it doubles in size."
        },
        "timer": 3600
      },
      {
        "id": "step_012_06",
        "order": 6,
        "instruction": {
          "es": "Desgasificar la masa suavemente. Dar forma de hogaza y colocar en un molde rectangular engrasado o sobre una bandeja con papel de horno.",
          "en": "Gently deflate the dough. Shape into a loaf and place in a greased loaf pan or on a baking tray lined with parchment paper."
        }
      },
      {
        "id": "step_012_07",
        "order": 7,
        "instruction": {
          "es": "Pincelar la superficie con un poco de agua y espolvorear los copos de avena. Dejar reposar 30 minutos mas.",
          "en": "Brush the surface with a little water and sprinkle with oat flakes. Let rest for 30 more minutes."
        },
        "timer": 1800
      },
      {
        "id": "step_012_08",
        "order": 8,
        "instruction": {
          "es": "Precalentar el horno a 190°C. Hacer un corte longitudinal en la superficie del pan.",
          "en": "Preheat the oven to 190°C. Make a lengthwise cut on the surface of the bread."
        }
      },
      {
        "id": "step_012_09",
        "order": 9,
        "instruction": {
          "es": "Hornear durante 35-40 minutos hasta que este dorado y suene hueco al golpear la base. Dejar enfriar sobre una rejilla.",
          "en": "Bake for 35-40 minutes until golden and it sounds hollow when tapped on the bottom. Let cool on a wire rack."
        },
        "timer": 2400
      }
    ],
    "tips": {
      "es": "Este pan es ideal para tostar. Se congela muy bien: cortar en rebanadas antes de congelar para poder sacar solo las que necesites.",
      "en": "This bread is ideal for toasting. It freezes very well: slice before freezing so you can take out only what you need."
    },
    "origin": {
      "es": "Internacional",
      "en": "International"
    },
    "createdAt": "2026-03-31T00:00:00.000Z",
    "updatedAt": "2026-03-31T00:00:00.000Z"
  },
  {
    "id": "rec_007",
    "slug": "apple-crumble",
    "title": {
      "es": "Crumble de Manzana",
      "en": "Apple Crumble"
    },
    "description": {
      "es": "Crumble de manzana con cobertura crujiente de mantequilla y avena. Perfecto para los días de otoño.",
      "en": "Apple crumble with a crunchy butter and oat topping. Perfect for autumn days."
    },
    "image": "apple-crumble.jpg",
    "category": "desserts",
    "tags": [
      "vegetarian",
      "comfort-food",
      "autumn",
      "winter"
    ],
    "difficulty": "easy",
    "totalTime": 30,
    "prepTime": 15,
    "cookTime": 15,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula"
    ],
    "ingredients": [
      {
        "id": "ing_007_01",
        "name": {
          "es": "manzanas Golden",
          "en": "Golden apples"
        },
        "amount": 4,
        "unit": "unidad",
        "optional": false,
        "group": "relleno"
      },
      {
        "id": "ing_007_02",
        "name": {
          "es": "azúcar moreno",
          "en": "brown sugar"
        },
        "amount": 50,
        "unit": "g",
        "optional": false,
        "group": "relleno"
      },
      {
        "id": "ing_007_03",
        "name": {
          "es": "canela molida",
          "en": "ground cinnamon"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false,
        "group": "relleno"
      },
      {
        "id": "ing_007_04",
        "name": {
          "es": "mantequilla fría en trozos",
          "en": "cold butter, cubed"
        },
        "amount": 80,
        "unit": "g",
        "optional": false,
        "group": "crumble"
      },
      {
        "id": "ing_007_05",
        "name": {
          "es": "harina de trigo",
          "en": "all-purpose flour"
        },
        "amount": 100,
        "unit": "g",
        "optional": false,
        "group": "crumble"
      }
    ],
    "steps": [
      {
        "id": "step_007_01",
        "order": 1,
        "instruction": {
          "es": "Precalentar el horno a 180°C.",
          "en": "Preheat the oven to 180°C."
        }
      },
      {
        "id": "step_007_02",
        "order": 2,
        "instruction": {
          "es": "Pelar las manzanas, cortarlas en cuartos e introducirlas en el vaso. Trocear 5 seg / Vel 5.",
          "en": "Peel the apples, cut into quarters and add to the bowl. Chop 5 sec / Speed 5."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 5
        }
      },
      {
        "id": "step_007_03",
        "order": 3,
        "instruction": {
          "es": "Añadir el azúcar moreno y la canela. Programar 8 min / 100°C / Vel 1 / giro inverso.",
          "en": "Add brown sugar and cinnamon. Set 8 min / 100°C / Speed 1 / reverse direction."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 100,
          "time": 480,
          "direction": "counterclockwise"
        },
        "timer": 480
      },
      {
        "id": "step_007_04",
        "order": 4,
        "instruction": {
          "es": "Volcar la compota de manzana en una fuente de horno. Reservar. Limpiar el vaso.",
          "en": "Pour the apple compote into an oven dish. Set aside. Clean the bowl."
        }
      },
      {
        "id": "step_007_05",
        "order": 5,
        "instruction": {
          "es": "Añadir la harina y la mantequilla fría troceada al vaso. Mezclar 15 seg / Vel 6.",
          "en": "Add flour and cold cubed butter to the bowl. Mix 15 sec / Speed 6."
        },
        "thermomixSettings": {
          "speed": 6,
          "time": 15
        },
        "tip": {
          "es": "La mezcla debe quedar como migas gruesas, no como una masa. No mezclar de más.",
          "en": "The mixture should look like coarse crumbs, not dough. Do not over-mix."
        }
      },
      {
        "id": "step_007_06",
        "order": 6,
        "instruction": {
          "es": "Repartir la mezcla de crumble sobre la compota de manzana en la fuente.",
          "en": "Spread the crumble mixture over the apple compote in the dish."
        }
      },
      {
        "id": "step_007_07",
        "order": 7,
        "instruction": {
          "es": "Hornear 15 min a 180°C hasta que la superficie esté dorada y crujiente.",
          "en": "Bake for 15 min at 180°C until the surface is golden and crunchy."
        },
        "timer": 900,
        "tip": {
          "es": "Servir tibio con una bola de helado de vainilla o nata montada.",
          "en": "Serve warm with a scoop of vanilla ice cream or whipped cream."
        }
      }
    ],
    "tips": {
      "es": "Puedes usar una mezcla de manzanas ácidas y dulces para más contraste de sabor. También se puede añadir 30 g de copos de avena a la masa del crumble.",
      "en": "You can use a mix of tart and sweet apples for more flavor contrast. You can also add 30 g of oat flakes to the crumble dough."
    },
    "origin": {
      "es": "Reino Unido",
      "en": "United Kingdom"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_005",
    "slug": "chocolate-mousse",
    "title": {
      "es": "Mousse de Chocolate",
      "en": "Chocolate Mousse"
    },
    "description": {
      "es": "Mousse de chocolate intenso, cremoso y aireado, preparado en minutos con tu Thermomix.",
      "en": "Rich, creamy and airy chocolate mousse, prepared in minutes with your Thermomix."
    },
    "image": "chocolate-mousse.jpg",
    "category": "desserts",
    "tags": [
      "vegetarian",
      "gluten-free",
      "party",
      "comfort-food"
    ],
    "difficulty": "medium",
    "totalTime": 40,
    "prepTime": 25,
    "cookTime": 15,
    "servings": 6,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "butterfly",
      "spatula"
    ],
    "ingredients": [
      {
        "id": "ing_005_01",
        "name": {
          "es": "chocolate negro (70% cacao)",
          "en": "dark chocolate (70% cocoa)"
        },
        "amount": 200,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_005_02",
        "name": {
          "es": "nata para montar (35% MG)",
          "en": "heavy cream (35% fat)"
        },
        "amount": 300,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "ing_005_03",
        "name": {
          "es": "huevos",
          "en": "eggs"
        },
        "amount": 4,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_005_04",
        "name": {
          "es": "azúcar",
          "en": "sugar"
        },
        "amount": 60,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_005_05",
        "name": {
          "es": "mantequilla",
          "en": "butter"
        },
        "amount": 30,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_005_06",
        "name": {
          "es": "pizca de sal",
          "en": "pinch of salt"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "ing_005_07",
        "name": {
          "es": "cacao en polvo para decorar",
          "en": "cocoa powder for garnish"
        },
        "amount": 10,
        "unit": "g",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "step_005_01",
        "order": 1,
        "instruction": {
          "es": "Trocear el chocolate e introducirlo en el vaso. Triturar 10 seg / Vel 7.",
          "en": "Break the chocolate into pieces and add to the bowl. Blend 10 sec / Speed 7."
        },
        "thermomixSettings": {
          "speed": 7,
          "time": 10
        }
      },
      {
        "id": "step_005_02",
        "order": 2,
        "instruction": {
          "es": "Añadir la mantequilla. Programar 3 min / 50°C / Vel 2.",
          "en": "Add the butter. Set 3 min / 50°C / Speed 2."
        },
        "thermomixSettings": {
          "speed": 2,
          "temperature": 50,
          "time": 180
        },
        "timer": 180
      },
      {
        "id": "step_005_03",
        "order": 3,
        "instruction": {
          "es": "Separar las claras de las yemas. Añadir las yemas y el azúcar al vaso con el chocolate. Mezclar 20 seg / Vel 4.",
          "en": "Separate egg whites from yolks. Add yolks and sugar to the bowl with chocolate. Mix 20 sec / Speed 4."
        },
        "thermomixSettings": {
          "speed": 4,
          "time": 20
        }
      },
      {
        "id": "step_005_04",
        "order": 4,
        "instruction": {
          "es": "Volcar la mezcla de chocolate en un bol externo. Reservar. Limpiar el vaso.",
          "en": "Pour the chocolate mixture into an external bowl. Set aside. Clean the mixing bowl."
        }
      },
      {
        "id": "step_005_05",
        "order": 5,
        "instruction": {
          "es": "Colocar la mariposa en las cuchillas. Añadir las claras y la pizca de sal al vaso. Montar 3 min / Vel 3.5.",
          "en": "Attach the butterfly whisk. Add egg whites and pinch of salt to the bowl. Whip 3 min / Speed 3.5."
        },
        "thermomixSettings": {
          "speed": 4,
          "time": 180,
          "accessory": "butterfly"
        },
        "timer": 180
      },
      {
        "id": "step_005_06",
        "order": 6,
        "instruction": {
          "es": "Retirar las claras montadas a un bol. Limpiar el vaso y colocar de nuevo la mariposa.",
          "en": "Remove whipped egg whites to a bowl. Clean the mixing bowl and reattach butterfly whisk."
        }
      },
      {
        "id": "step_005_07",
        "order": 7,
        "instruction": {
          "es": "Añadir la nata fría al vaso. Montar 2 min / Vel 3.5 con mariposa.",
          "en": "Add cold cream to the bowl. Whip 2 min / Speed 3.5 with butterfly whisk."
        },
        "thermomixSettings": {
          "speed": 4,
          "time": 120,
          "accessory": "butterfly"
        },
        "timer": 120
      },
      {
        "id": "step_005_08",
        "order": 8,
        "instruction": {
          "es": "Incorporar la mezcla de chocolate a la nata montada con la espátula, con movimientos envolventes. Luego incorporar las claras del mismo modo.",
          "en": "Fold the chocolate mixture into the whipped cream with a spatula using gentle folding motions. Then fold in the egg whites the same way."
        },
        "tip": {
          "es": "No mezclar en exceso para mantener la textura aireada.",
          "en": "Do not over-mix to keep the airy texture."
        }
      },
      {
        "id": "step_005_09",
        "order": 9,
        "instruction": {
          "es": "Repartir en copas o vasitos individuales. Refrigerar al menos 2 horas. Espolvorear cacao en polvo antes de servir.",
          "en": "Divide into individual glasses or cups. Refrigerate for at least 2 hours. Dust with cocoa powder before serving."
        },
        "tip": {
          "es": "Se puede preparar la noche anterior para una textura más firme.",
          "en": "Can be prepared the night before for a firmer texture."
        }
      }
    ],
    "tips": {
      "es": "Usa chocolate de buena calidad para un mejor resultado. La nata y las claras deben estar bien frías antes de montar.",
      "en": "Use good quality chocolate for a better result. Cream and egg whites should be very cold before whipping."
    },
    "origin": {
      "es": "Francia",
      "en": "France"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_008",
    "slug": "rice-pudding",
    "title": {
      "es": "Arroz con Leche",
      "en": "Rice Pudding"
    },
    "description": {
      "es": "Arroz con leche cremoso al estilo tradicional, cocinado íntegramente en tu Thermomix. Reconfortante y delicioso.",
      "en": "Creamy traditional-style rice pudding, cooked entirely in your Thermomix. Comforting and delicious."
    },
    "image": "rice-pudding.jpg",
    "category": "desserts",
    "tags": [
      "vegetarian",
      "gluten-free",
      "comfort-food",
      "winter",
      "christmas"
    ],
    "difficulty": "easy",
    "totalTime": 30,
    "prepTime": 5,
    "cookTime": 25,
    "servings": 6,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "measuring_cup",
      "spatula"
    ],
    "ingredients": [
      {
        "id": "ing_008_01",
        "name": {
          "es": "arroz redondo",
          "en": "short-grain rice"
        },
        "amount": 200,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_008_02",
        "name": {
          "es": "leche entera",
          "en": "whole milk"
        },
        "amount": 1,
        "unit": "L",
        "optional": false
      },
      {
        "id": "ing_008_03",
        "name": {
          "es": "azúcar",
          "en": "sugar"
        },
        "amount": 120,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_008_04",
        "name": {
          "es": "piel de limón (un trozo grande)",
          "en": "lemon peel (one large piece)"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_008_05",
        "name": {
          "es": "rama de canela",
          "en": "cinnamon stick"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step_008_01",
        "order": 1,
        "instruction": {
          "es": "Añadir la leche, la piel de limón y la rama de canela al vaso. Programar 7 min / 90°C / Vel 1.",
          "en": "Add milk, lemon peel and cinnamon stick to the bowl. Set 7 min / 90°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 90,
          "time": 420
        },
        "timer": 420
      },
      {
        "id": "step_008_02",
        "order": 2,
        "instruction": {
          "es": "Retirar la piel de limón y la rama de canela con la espátula.",
          "en": "Remove the lemon peel and cinnamon stick with the spatula."
        }
      },
      {
        "id": "step_008_03",
        "order": 3,
        "instruction": {
          "es": "Añadir el arroz y el azúcar. Colocar el cubilete en la tapa. Programar 20 min / 90°C / Vel 1 / giro inverso.",
          "en": "Add rice and sugar. Place the measuring cup on the lid. Set 20 min / 90°C / Speed 1 / reverse direction."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 90,
          "time": 1200,
          "direction": "counterclockwise"
        },
        "timer": 1200,
        "tip": {
          "es": "El giro inverso evita que el arroz se pegue y se rompa. No quitar el cubilete para que no salpique.",
          "en": "Reverse direction prevents rice from sticking and breaking. Do not remove the measuring cup to avoid splashing."
        }
      },
      {
        "id": "step_008_04",
        "order": 4,
        "instruction": {
          "es": "Comprobar la textura del arroz. Si está al dente, programar 3 min más / 90°C / Vel 1 / giro inverso.",
          "en": "Check the rice texture. If still al dente, set 3 more min / 90°C / Speed 1 / reverse direction."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 90,
          "time": 180,
          "direction": "counterclockwise"
        },
        "timer": 180,
        "tip": {
          "es": "El arroz espesará más al enfriar, así que es mejor sacarlo un poco más suelto de lo deseado.",
          "en": "The rice will thicken more as it cools, so it's better to take it out slightly looser than desired."
        }
      },
      {
        "id": "step_008_05",
        "order": 5,
        "instruction": {
          "es": "Servir en boles individuales. Espolvorear canela molida por encima. Se puede tomar tibio o frío.",
          "en": "Serve in individual bowls. Sprinkle ground cinnamon on top. Can be enjoyed warm or cold."
        }
      }
    ],
    "tips": {
      "es": "Para una versión más cremosa, sustituir 200 ml de leche por leche condensada y reducir el azúcar a la mitad. Se conserva en nevera hasta 3 días.",
      "en": "For a creamier version, replace 200 ml of milk with condensed milk and halve the sugar. Keeps in the fridge for up to 3 days."
    },
    "origin": {
      "es": "España",
      "en": "Spain"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_006",
    "slug": "vanilla-flan",
    "title": {
      "es": "Flan de Vainilla al Varoma",
      "en": "Steamed Vanilla Flan"
    },
    "description": {
      "es": "Flan casero de vainilla con caramelo, cocinado al vapor en el Varoma de tu Thermomix. Textura sedosa y sabor clásico.",
      "en": "Homemade vanilla flan with caramel, steam-cooked in the Varoma of your Thermomix. Silky texture and classic flavor."
    },
    "image": "vanilla-flan.jpg",
    "category": "desserts",
    "tags": [
      "vegetarian",
      "comfort-food",
      "party"
    ],
    "difficulty": "medium",
    "totalTime": 60,
    "prepTime": 15,
    "cookTime": 45,
    "servings": 6,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "varoma",
      "spatula"
    ],
    "ingredients": [
      {
        "id": "ing_006_01",
        "name": {
          "es": "azúcar para el caramelo",
          "en": "sugar for caramel"
        },
        "amount": 100,
        "unit": "g",
        "optional": false,
        "group": "caramelo"
      },
      {
        "id": "ing_006_02",
        "name": {
          "es": "agua para el caramelo",
          "en": "water for caramel"
        },
        "amount": 30,
        "unit": "ml",
        "optional": false,
        "group": "caramelo"
      },
      {
        "id": "ing_006_03",
        "name": {
          "es": "leche entera",
          "en": "whole milk"
        },
        "amount": 500,
        "unit": "ml",
        "optional": false,
        "group": "flan"
      },
      {
        "id": "ing_006_04",
        "name": {
          "es": "huevos",
          "en": "eggs"
        },
        "amount": 4,
        "unit": "unidad",
        "optional": false,
        "group": "flan"
      },
      {
        "id": "ing_006_05",
        "name": {
          "es": "azúcar",
          "en": "sugar"
        },
        "amount": 120,
        "unit": "g",
        "optional": false,
        "group": "flan"
      },
      {
        "id": "ing_006_06",
        "name": {
          "es": "extracto de vainilla",
          "en": "vanilla extract"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false,
        "group": "flan"
      },
      {
        "id": "ing_006_07",
        "name": {
          "es": "ralladura de limón",
          "en": "lemon zest"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": true,
        "group": "flan"
      },
      {
        "id": "ing_006_08",
        "name": {
          "es": "agua para el varoma",
          "en": "water for varoma"
        },
        "amount": 800,
        "unit": "ml",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step_006_01",
        "order": 1,
        "instruction": {
          "es": "Preparar el caramelo: poner 100 g de azúcar y 30 ml de agua en un cazo al fuego hasta que dore. Verter en las flaneras y dejar enfriar.",
          "en": "Prepare the caramel: put 100 g sugar and 30 ml water in a saucepan over heat until golden. Pour into flan molds and let cool."
        },
        "tip": {
          "es": "El caramelo se prepara fuera de la Thermomix para un mejor control del punto.",
          "en": "The caramel is prepared outside the Thermomix for better control of the color."
        }
      },
      {
        "id": "step_006_02",
        "order": 2,
        "instruction": {
          "es": "Añadir los huevos, el azúcar, la vainilla y la ralladura de limón al vaso. Mezclar 15 seg / Vel 4.",
          "en": "Add eggs, sugar, vanilla and lemon zest to the bowl. Mix 15 sec / Speed 4."
        },
        "thermomixSettings": {
          "speed": 4,
          "time": 15
        }
      },
      {
        "id": "step_006_03",
        "order": 3,
        "instruction": {
          "es": "Añadir la leche. Mezclar 15 seg / Vel 3.",
          "en": "Add the milk. Mix 15 sec / Speed 3."
        },
        "thermomixSettings": {
          "speed": 3,
          "time": 15
        }
      },
      {
        "id": "step_006_04",
        "order": 4,
        "instruction": {
          "es": "Verter la mezcla en las flaneras caramelizadas. Tapar con papel de aluminio.",
          "en": "Pour the mixture into the caramelized flan molds. Cover with aluminum foil."
        }
      },
      {
        "id": "step_006_05",
        "order": 5,
        "instruction": {
          "es": "Limpiar el vaso. Añadir 800 ml de agua al vaso.",
          "en": "Clean the bowl. Add 800 ml of water to the bowl."
        }
      },
      {
        "id": "step_006_06",
        "order": 6,
        "instruction": {
          "es": "Colocar las flaneras en el recipiente Varoma. Colocar el Varoma en su posición sobre el vaso. Programar 40 min / Varoma / Vel 1.",
          "en": "Place the flan molds in the Varoma tray. Position the Varoma on top of the bowl. Set 40 min / Varoma / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": "varoma",
          "time": 2400,
          "accessory": "varoma"
        },
        "timer": 2400
      },
      {
        "id": "step_006_07",
        "order": 7,
        "instruction": {
          "es": "Retirar el Varoma con cuidado. Dejar enfriar los flanes a temperatura ambiente y luego refrigerar al menos 4 horas antes de desmoldar.",
          "en": "Carefully remove the Varoma. Let the flans cool to room temperature, then refrigerate for at least 4 hours before unmolding."
        },
        "tip": {
          "es": "Para desmoldar fácilmente, pasar un cuchillo por el borde de la flanera y voltear sobre un plato.",
          "en": "For easy unmolding, run a knife along the edge of the mold and flip onto a plate."
        }
      }
    ],
    "tips": {
      "es": "Este flan queda mejor si se refrigera toda la noche. También se puede hacer con leche condensada reemplazando azúcar y leche.",
      "en": "This flan is best if refrigerated overnight. It can also be made with condensed milk replacing sugar and milk."
    },
    "origin": {
      "es": "España",
      "en": "Spain"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_030",
    "slug": "crepe-batter",
    "title": {
      "es": "Masa de crepes",
      "en": "Crepe Batter"
    },
    "description": {
      "es": "Masa de crepes fina y sin grumos, lista en un minuto. Perfecta tanto para crepes dulces como salados.",
      "en": "Thin and lump-free crepe batter, ready in one minute. Perfect for both sweet and savory crepes."
    },
    "image": "crepe-batter.jpg",
    "category": "doughs",
    "tags": [
      "vegetarian",
      "quick",
      "weeknight"
    ],
    "difficulty": "easy",
    "totalTime": 5,
    "prepTime": 3,
    "cookTime": 2,
    "servings": 8,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_030_ing_01",
        "name": {
          "es": "harina de trigo",
          "en": "all-purpose flour"
        },
        "amount": 250,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_030_ing_02",
        "name": {
          "es": "leche",
          "en": "milk"
        },
        "amount": 500,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_030_ing_03",
        "name": {
          "es": "huevos",
          "en": "eggs"
        },
        "amount": 3,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_030_ing_04",
        "name": {
          "es": "mantequilla derretida",
          "en": "melted butter"
        },
        "amount": 30,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_030_ing_05",
        "name": {
          "es": "azúcar",
          "en": "sugar"
        },
        "amount": 1,
        "unit": "cda",
        "optional": false
      },
      {
        "id": "rec_030_ing_06",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "rec_030_ing_07",
        "name": {
          "es": "extracto de vainilla",
          "en": "vanilla extract"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "rec_030_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir todos los ingredientes al vaso. Programar 30 seg / Vel 6.",
          "en": "Add all ingredients to the bowl. Set 30 sec / Speed 6."
        },
        "thermomixSettings": {
          "speed": 6,
          "time": 30
        },
        "timer": 30
      },
      {
        "id": "rec_030_step_02",
        "order": 2,
        "instruction": {
          "es": "Bajar los restos de las paredes con la espátula. Programar 10 seg / Vel 4.",
          "en": "Scrape down the sides with the spatula. Set 10 sec / Speed 4."
        },
        "thermomixSettings": {
          "speed": 4,
          "time": 10
        }
      },
      {
        "id": "rec_030_step_03",
        "order": 3,
        "instruction": {
          "es": "Dejar reposar la masa al menos 30 minutos en la nevera. Cocinar las crepes en una sartén antiadherente con un poco de mantequilla a fuego medio.",
          "en": "Let the batter rest at least 30 minutes in the fridge. Cook the crepes in a non-stick pan with a little butter over medium heat."
        },
        "tip": {
          "es": "El reposo permite que la harina absorba el líquido y las crepes queden más finas y tiernas.",
          "en": "Resting allows the flour to absorb the liquid, making the crepes thinner and more tender."
        }
      }
    ],
    "tips": {
      "es": "Para crepes salados, omitir el azúcar y la vainilla. La masa se conserva hasta 24 horas en la nevera.",
      "en": "For savory crepes, omit the sugar and vanilla. The batter keeps up to 24 hours in the fridge."
    },
    "origin": {
      "es": "Francia",
      "en": "France"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_028",
    "slug": "empanada-dough",
    "title": {
      "es": "Masa de empanadas",
      "en": "Empanada Dough"
    },
    "description": {
      "es": "Masa de empanadas casera, tierna y fácil de trabajar. La Thermomix amasa en segundos para obtener una masa elástica perfecta para rellenar con lo que más te guste.",
      "en": "Homemade empanada dough, tender and easy to work with. The Thermomix kneads in seconds for an elastic dough perfect for filling with whatever you like."
    },
    "image": "empanada-dough.jpg",
    "category": "doughs",
    "tags": [
      "vegan",
      "dairy-free",
      "meal-prep"
    ],
    "difficulty": "easy",
    "totalTime": 15,
    "prepTime": 5,
    "cookTime": 10,
    "servings": 12,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_028_ing_01",
        "name": {
          "es": "harina de trigo",
          "en": "all-purpose flour"
        },
        "amount": 500,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_028_ing_02",
        "name": {
          "es": "agua tibia",
          "en": "warm water"
        },
        "amount": 150,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_028_ing_03",
        "name": {
          "es": "aceite de oliva",
          "en": "olive oil"
        },
        "amount": 80,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_028_ing_04",
        "name": {
          "es": "vinagre blanco",
          "en": "white vinegar"
        },
        "amount": 1,
        "unit": "cda",
        "optional": false
      },
      {
        "id": "rec_028_ing_05",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "rec_028_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir la harina y la sal al vaso. Programar 5 seg / Vel 4 para mezclar.",
          "en": "Add the flour and salt to the bowl. Set 5 sec / Speed 4 to mix."
        },
        "thermomixSettings": {
          "speed": 4,
          "time": 5
        }
      },
      {
        "id": "rec_028_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir el agua tibia, el aceite y el vinagre. Programar 2 min / Vel Espiga.",
          "en": "Add the warm water, oil and vinegar. Set 2 min / Dough mode."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "rec_028_step_03",
        "order": 3,
        "instruction": {
          "es": "Retirar la masa del vaso, formar una bola y envolver en film. Dejar reposar 30 minutos a temperatura ambiente.",
          "en": "Remove the dough from the bowl, shape into a ball and wrap in cling film. Let it rest 30 minutes at room temperature."
        },
        "tip": {
          "es": "El reposo es fundamental para que el gluten se relaje y la masa sea fácil de estirar.",
          "en": "Resting is essential for the gluten to relax and the dough to be easy to roll out."
        }
      }
    ],
    "tips": {
      "es": "Se puede congelar la masa ya estirada en discos individuales, separados con papel de horno. El vinagre ayuda a que la masa quede más tierna.",
      "en": "You can freeze the dough already rolled into individual discs, separated with parchment paper. The vinegar helps make the dough more tender."
    },
    "origin": {
      "es": "Argentina",
      "en": "Argentina"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_031",
    "slug": "savory-leek-tart",
    "title": {
      "es": "Tarta salada de puerros",
      "en": "Savory Leek Tart"
    },
    "description": {
      "es": "Una tarta salada con base de masa quebrada casera y un relleno cremoso de puerros, nata, huevos y queso. Perfecta como entrante o plato principal ligero.",
      "en": "A savory tart with a homemade shortcrust pastry base and a creamy filling of leeks, cream, eggs and cheese. Perfect as a starter or light main course."
    },
    "image": "savory-leek-tart.jpg",
    "category": "doughs",
    "tags": [
      "vegetarian",
      "comfort-food",
      "autumn",
      "winter"
    ],
    "difficulty": "medium",
    "totalTime": 80,
    "prepTime": 20,
    "cookTime": 60,
    "servings": 8,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_031_ing_01",
        "name": {
          "es": "harina de repostería",
          "en": "pastry flour"
        },
        "amount": 350,
        "unit": "g",
        "optional": false,
        "group": "Para la masa quebrada"
      },
      {
        "id": "rec_031_ing_02",
        "name": {
          "es": "mantequilla fría",
          "en": "cold butter"
        },
        "amount": 130,
        "unit": "g",
        "optional": false,
        "group": "Para la masa quebrada"
      },
      {
        "id": "rec_031_ing_03",
        "name": {
          "es": "agua",
          "en": "water"
        },
        "amount": 70,
        "unit": "g",
        "optional": false,
        "group": "Para la masa quebrada"
      },
      {
        "id": "rec_031_ing_04",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false,
        "group": "Para la masa quebrada"
      },
      {
        "id": "rec_031_ing_05",
        "name": {
          "es": "azúcar",
          "en": "sugar"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false,
        "group": "Para la masa quebrada"
      },
      {
        "id": "rec_031_ing_06",
        "name": {
          "es": "levadura",
          "en": "baking powder"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false,
        "group": "Para la masa quebrada"
      },
      {
        "id": "rec_031_ing_07",
        "name": {
          "es": "mantequilla",
          "en": "butter"
        },
        "amount": 50,
        "unit": "g",
        "optional": false,
        "group": "Para el relleno"
      },
      {
        "id": "rec_031_ing_08",
        "name": {
          "es": "puerros (parte blanca)",
          "en": "leeks (white part)"
        },
        "amount": 300,
        "unit": "g",
        "optional": false,
        "group": "Para el relleno"
      },
      {
        "id": "rec_031_ing_09",
        "name": {
          "es": "nata para cocinar",
          "en": "cooking cream"
        },
        "amount": 200,
        "unit": "g",
        "optional": false,
        "group": "Para el relleno"
      },
      {
        "id": "rec_031_ing_10",
        "name": {
          "es": "huevos",
          "en": "eggs"
        },
        "amount": 4,
        "unit": "unidad",
        "optional": false,
        "group": "Para el relleno"
      },
      {
        "id": "rec_031_ing_11",
        "name": {
          "es": "queso rallado",
          "en": "grated cheese"
        },
        "amount": 150,
        "unit": "g",
        "optional": false,
        "group": "Para el relleno"
      },
      {
        "id": "rec_031_ing_12",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false,
        "group": "Para el relleno"
      },
      {
        "id": "rec_031_ing_13",
        "name": {
          "es": "pimienta",
          "en": "pepper"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false,
        "group": "Para el relleno"
      }
    ],
    "steps": [
      {
        "id": "rec_031_step_01",
        "order": 1,
        "instruction": {
          "es": "Precalentar el horno a 180°C.",
          "en": "Preheat the oven to 180°C."
        }
      },
      {
        "id": "rec_031_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir la harina, la mantequilla fría en trozos, el agua, la sal, el azúcar y la levadura al vaso. Programar 15 seg / Vel 6.",
          "en": "Add the flour, cold butter pieces, water, salt, sugar and baking powder to the bowl. Set 15 sec / Speed 6."
        },
        "thermomixSettings": {
          "speed": 6,
          "time": 15
        }
      },
      {
        "id": "rec_031_step_03",
        "order": 3,
        "instruction": {
          "es": "Retirar la masa del vaso, formar un disco, envolver en film y refrigerar 15 minutos.",
          "en": "Remove the dough from the bowl, shape into a disc, wrap in cling film and refrigerate 15 minutes."
        }
      },
      {
        "id": "rec_031_step_04",
        "order": 4,
        "instruction": {
          "es": "Estirar la masa y forrar un molde. Pinchar el fondo con un tenedor y hornear en blanco 10 minutos a 180°C.",
          "en": "Roll out the dough and line a tart tin. Prick the base with a fork and blind bake 10 minutes at 180°C."
        },
        "timer": 600,
        "tip": {
          "es": "Cubrir la masa con papel de horno y garbanzos o arroz para el horneado en blanco.",
          "en": "Cover the dough with parchment paper and chickpeas or rice for blind baking."
        }
      },
      {
        "id": "rec_031_step_05",
        "order": 5,
        "instruction": {
          "es": "Limpiar el vaso. Añadir la mantequilla y los puerros cortados en rodajas. Programar 10 min / 100°C / Vel 2.",
          "en": "Clean the bowl. Add the butter and sliced leeks. Set 10 min / 100°C / Speed 2."
        },
        "thermomixSettings": {
          "speed": 2,
          "temperature": 100,
          "time": 600
        },
        "timer": 600
      },
      {
        "id": "rec_031_step_06",
        "order": 6,
        "instruction": {
          "es": "Añadir la nata, los huevos, el queso rallado, la sal y la pimienta. Programar 30 seg / Vel 4.",
          "en": "Add the cream, eggs, grated cheese, salt and pepper. Set 30 sec / Speed 4."
        },
        "thermomixSettings": {
          "speed": 4,
          "time": 30
        },
        "timer": 30
      },
      {
        "id": "rec_031_step_07",
        "order": 7,
        "instruction": {
          "es": "Verter el relleno sobre la masa pre-horneada. Hornear 25 minutos a 180°C hasta que esté dorada y cuajada.",
          "en": "Pour the filling over the pre-baked crust. Bake 25 minutes at 180°C until golden and set."
        },
        "timer": 1500
      }
    ],
    "tips": {
      "es": "Se puede preparar la masa la noche anterior y dejarla en la nevera. Para más sabor, añadir un poco de nuez moscada al relleno o usar queso gruyère.",
      "en": "You can prepare the dough the night before and leave it in the fridge. For more flavor, add a little nutmeg to the filling or use Gruyère cheese."
    },
    "origin": {
      "es": "Francia",
      "en": "France"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_029",
    "slug": "shortcrust-pastry",
    "title": {
      "es": "Masa quebrada",
      "en": "Shortcrust Pastry"
    },
    "description": {
      "es": "Masa quebrada básica, crujiente y mantecosa, ideal para tartas saladas y dulces. La Thermomix logra la textura arenosa perfecta en segundos.",
      "en": "Basic shortcrust pastry, crispy and buttery, ideal for savory and sweet tarts. The Thermomix achieves the perfect sandy texture in seconds."
    },
    "image": "shortcrust-pastry.jpg",
    "category": "doughs",
    "tags": [
      "vegetarian",
      "quick"
    ],
    "difficulty": "easy",
    "totalTime": 10,
    "prepTime": 5,
    "cookTime": 5,
    "servings": 1,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_029_ing_01",
        "name": {
          "es": "harina de trigo",
          "en": "all-purpose flour"
        },
        "amount": 250,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_029_ing_02",
        "name": {
          "es": "mantequilla fría en trozos",
          "en": "cold butter in pieces"
        },
        "amount": 125,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_029_ing_03",
        "name": {
          "es": "agua fría",
          "en": "cold water"
        },
        "amount": 50,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_029_ing_04",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "rec_029_ing_05",
        "name": {
          "es": "azúcar",
          "en": "sugar"
        },
        "amount": 1,
        "unit": "cda",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "rec_029_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir la harina, la sal y el azúcar (si la masa es para tarta dulce) al vaso. Programar 5 seg / Vel 4.",
          "en": "Add the flour, salt and sugar (if the pastry is for a sweet tart) to the bowl. Set 5 sec / Speed 4."
        },
        "thermomixSettings": {
          "speed": 4,
          "time": 5
        }
      },
      {
        "id": "rec_029_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir la mantequilla fría en trozos. Programar 15 seg / Vel 6.",
          "en": "Add the cold butter pieces. Set 15 sec / Speed 6."
        },
        "thermomixSettings": {
          "speed": 6,
          "time": 15
        }
      },
      {
        "id": "rec_029_step_03",
        "order": 3,
        "instruction": {
          "es": "Añadir el agua fría. Programar 15 seg / Vel 6 hasta que la masa se una.",
          "en": "Add the cold water. Set 15 sec / Speed 6 until the dough comes together."
        },
        "thermomixSettings": {
          "speed": 6,
          "time": 15
        }
      },
      {
        "id": "rec_029_step_04",
        "order": 4,
        "instruction": {
          "es": "Retirar la masa, formar un disco, envolver en film y refrigerar 30 minutos antes de usar.",
          "en": "Remove the dough, shape into a disc, wrap in cling film and refrigerate 30 minutes before use."
        },
        "tip": {
          "es": "Es importante que la mantequilla esté bien fría para que la masa quede hojaldrada.",
          "en": "It's important that the butter is very cold for a flaky pastry."
        }
      }
    ],
    "tips": {
      "es": "Para versión dulce, añadir 30 g de azúcar glas y una yema de huevo. Se puede congelar la masa cruda hasta 3 meses.",
      "en": "For a sweet version, add 30 g of powdered sugar and an egg yolk. The raw dough can be frozen for up to 3 months."
    },
    "origin": {
      "es": "Francia",
      "en": "France"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_022",
    "slug": "hot-chocolate",
    "title": {
      "es": "Chocolate caliente",
      "en": "Hot Chocolate"
    },
    "description": {
      "es": "Un chocolate caliente espeso y cremoso hecho con chocolate real. Perfecto para los días fríos de invierno, preparado en minutos en la Thermomix.",
      "en": "A thick and creamy hot chocolate made with real chocolate. Perfect for cold winter days, prepared in minutes in the Thermomix."
    },
    "image": "hot-chocolate.jpg",
    "category": "drinks",
    "tags": [
      "vegetarian",
      "comfort-food",
      "winter",
      "autumn",
      "quick"
    ],
    "difficulty": "easy",
    "totalTime": 10,
    "prepTime": 2,
    "cookTime": 8,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "butterfly",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_022_ing_01",
        "name": {
          "es": "leche entera",
          "en": "whole milk"
        },
        "amount": 800,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_022_ing_02",
        "name": {
          "es": "chocolate negro (mínimo 70%)",
          "en": "dark chocolate (minimum 70%)"
        },
        "amount": 150,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_022_ing_03",
        "name": {
          "es": "azúcar",
          "en": "sugar"
        },
        "amount": 40,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_022_ing_04",
        "name": {
          "es": "maicena",
          "en": "cornstarch"
        },
        "amount": 15,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_022_ing_05",
        "name": {
          "es": "canela en rama",
          "en": "cinnamon stick"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "rec_022_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir el chocolate troceado al vaso. Programar 10 seg / Vel 8.",
          "en": "Add the chopped chocolate to the bowl. Set 10 sec / Speed 8."
        },
        "thermomixSettings": {
          "speed": 8,
          "time": 10
        }
      },
      {
        "id": "rec_022_step_02",
        "order": 2,
        "instruction": {
          "es": "Colocar la mariposa en las cuchillas. Añadir la leche, el azúcar, la maicena y la canela. Programar 8 min / 90°C / Vel 3.",
          "en": "Attach the butterfly whisk to the blades. Add the milk, sugar, cornstarch and cinnamon. Set 8 min / 90°C / Speed 3."
        },
        "thermomixSettings": {
          "speed": 3,
          "temperature": 90,
          "time": 480,
          "accessory": "butterfly"
        },
        "timer": 480
      },
      {
        "id": "rec_022_step_03",
        "order": 3,
        "instruction": {
          "es": "Retirar la canela en rama y servir caliente.",
          "en": "Remove the cinnamon stick and serve hot."
        }
      }
    ],
    "tips": {
      "es": "Para un chocolate aún más espeso, aumentar la maicena a 20 g. Se puede añadir una pizca de chile en polvo para un toque mexicano.",
      "en": "For an even thicker chocolate, increase cornstarch to 20 g. You can add a pinch of chili powder for a Mexican twist."
    },
    "origin": {
      "es": "España",
      "en": "Spain"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_023",
    "slug": "lemonade-mint",
    "title": {
      "es": "Limonada con menta",
      "en": "Lemonade with Mint"
    },
    "description": {
      "es": "Una limonada fresca y natural con menta, ideal para los días de calor. Sin colorantes ni conservantes, lista en un minuto.",
      "en": "A fresh and natural lemonade with mint, ideal for hot days. No colorings or preservatives, ready in one minute."
    },
    "image": "lemonade-mint.jpg",
    "category": "drinks",
    "tags": [
      "vegan",
      "gluten-free",
      "dairy-free",
      "quick",
      "summer",
      "spring"
    ],
    "difficulty": "easy",
    "totalTime": 5,
    "prepTime": 3,
    "cookTime": 2,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_023_ing_01",
        "name": {
          "es": "limones (pelados y sin pepitas)",
          "en": "lemons (peeled and deseeded)"
        },
        "amount": 3,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_023_ing_02",
        "name": {
          "es": "agua fría",
          "en": "cold water"
        },
        "amount": 700,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_023_ing_03",
        "name": {
          "es": "azúcar",
          "en": "sugar"
        },
        "amount": 80,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_023_ing_04",
        "name": {
          "es": "hojas de menta fresca",
          "en": "fresh mint leaves"
        },
        "amount": 10,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_023_ing_05",
        "name": {
          "es": "hielo",
          "en": "ice"
        },
        "amount": 6,
        "unit": "unidad",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "rec_023_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir los limones pelados y el azúcar al vaso. Programar 15 seg / Vel 10.",
          "en": "Add the peeled lemons and sugar to the bowl. Set 15 sec / Speed 10."
        },
        "thermomixSettings": {
          "speed": 10,
          "time": 15
        }
      },
      {
        "id": "rec_023_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir el agua fría, las hojas de menta y el hielo. Programar 30 seg / Vel 7.",
          "en": "Add the cold water, mint leaves and ice. Set 30 sec / Speed 7."
        },
        "thermomixSettings": {
          "speed": 7,
          "time": 30
        },
        "timer": 30
      },
      {
        "id": "rec_023_step_03",
        "order": 3,
        "instruction": {
          "es": "Colar la limonada con un colador fino y servir bien fría.",
          "en": "Strain the lemonade through a fine sieve and serve well chilled."
        },
        "tip": {
          "es": "Si prefieres la limonada sin colar, queda con más cuerpo y fibra.",
          "en": "If you prefer unstrained lemonade, it will have more body and fiber."
        }
      }
    ],
    "tips": {
      "es": "Ajustar el azúcar al gusto. Se puede sustituir por miel o sirope de agave. Para una versión para adultos, añadir un chorrito de vodka.",
      "en": "Adjust sugar to taste. You can substitute with honey or agave syrup. For an adult version, add a splash of vodka."
    },
    "origin": {
      "es": "Internacional",
      "en": "International"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_021",
    "slug": "strawberry-smoothie",
    "title": {
      "es": "Smoothie de fresas",
      "en": "Strawberry Smoothie"
    },
    "description": {
      "es": "Un smoothie refrescante y saludable de fresas con yogur y plátano. Perfecto para el desayuno o como merienda energética.",
      "en": "A refreshing and healthy strawberry smoothie with yogurt and banana. Perfect for breakfast or as an energizing snack."
    },
    "image": "strawberry-smoothie.jpg",
    "category": "drinks",
    "tags": [
      "vegetarian",
      "quick",
      "summer",
      "spring"
    ],
    "difficulty": "easy",
    "totalTime": 5,
    "prepTime": 3,
    "cookTime": 2,
    "servings": 2,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_021_ing_01",
        "name": {
          "es": "fresas frescas o congeladas",
          "en": "fresh or frozen strawberries"
        },
        "amount": 300,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_021_ing_02",
        "name": {
          "es": "plátano maduro",
          "en": "ripe banana"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_021_ing_03",
        "name": {
          "es": "yogur natural",
          "en": "plain yogurt"
        },
        "amount": 150,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_021_ing_04",
        "name": {
          "es": "leche",
          "en": "milk"
        },
        "amount": 100,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_021_ing_05",
        "name": {
          "es": "miel",
          "en": "honey"
        },
        "amount": 1,
        "unit": "cda",
        "optional": true
      },
      {
        "id": "rec_021_ing_06",
        "name": {
          "es": "hielo",
          "en": "ice"
        },
        "amount": 4,
        "unit": "unidad",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "rec_021_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir todos los ingredientes al vaso. Programar 1 min / Vel 10.",
          "en": "Add all ingredients to the bowl. Set 1 min / Speed 10."
        },
        "thermomixSettings": {
          "speed": 10,
          "time": 60
        },
        "timer": 60
      },
      {
        "id": "rec_021_step_02",
        "order": 2,
        "instruction": {
          "es": "Comprobar la consistencia. Si se desea más líquido, añadir un poco más de leche y programar 10 seg / Vel 8.",
          "en": "Check consistency. If thinner is desired, add a little more milk and set 10 sec / Speed 8."
        },
        "thermomixSettings": {
          "speed": 8,
          "time": 10
        }
      }
    ],
    "tips": {
      "es": "Si usas fresas congeladas no necesitas hielo. Para versión vegana, sustituir yogur y leche por alternativas vegetales.",
      "en": "If using frozen strawberries, you don't need ice. For a vegan version, substitute yogurt and milk with plant-based alternatives."
    },
    "origin": {
      "es": "Internacional",
      "en": "International"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_014",
    "slug": "bolognese-sauce-pasta",
    "title": {
      "es": "Pasta boloñesa",
      "en": "Bolognese Pasta"
    },
    "description": {
      "es": "Una auténtica salsa boloñesa casera preparada íntegramente en la Thermomix. Carne picada, tomate, verduras y hierbas se combinan en una salsa rica y reconfortante.",
      "en": "An authentic homemade Bolognese sauce prepared entirely in the Thermomix. Ground meat, tomato, vegetables and herbs combine into a rich, comforting sauce."
    },
    "image": "bolognese-sauce-pasta.jpg",
    "category": "main_courses",
    "tags": [
      "comfort-food",
      "weeknight",
      "meal-prep"
    ],
    "difficulty": "medium",
    "totalTime": 45,
    "prepTime": 10,
    "cookTime": 35,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_014_ing_01",
        "name": {
          "es": "cebolla",
          "en": "onion"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_014_ing_02",
        "name": {
          "es": "zanahoria",
          "en": "carrot"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_014_ing_03",
        "name": {
          "es": "apio",
          "en": "celery stalk"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_014_ing_04",
        "name": {
          "es": "diente de ajo",
          "en": "garlic clove"
        },
        "amount": 2,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_014_ing_05",
        "name": {
          "es": "aceite de oliva",
          "en": "olive oil"
        },
        "amount": 30,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_014_ing_06",
        "name": {
          "es": "carne picada de ternera",
          "en": "ground beef"
        },
        "amount": 500,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_014_ing_07",
        "name": {
          "es": "tomate triturado",
          "en": "crushed tomatoes"
        },
        "amount": 400,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_014_ing_08",
        "name": {
          "es": "concentrado de tomate",
          "en": "tomato paste"
        },
        "amount": 2,
        "unit": "cda",
        "optional": false
      },
      {
        "id": "rec_014_ing_09",
        "name": {
          "es": "vino tinto",
          "en": "red wine"
        },
        "amount": 100,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_014_ing_10",
        "name": {
          "es": "orégano seco",
          "en": "dried oregano"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "rec_014_ing_11",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "rec_014_ing_12",
        "name": {
          "es": "pimienta negra",
          "en": "black pepper"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "rec_014_ing_13",
        "name": {
          "es": "pasta (espaguetis o penne)",
          "en": "pasta (spaghetti or penne)"
        },
        "amount": 400,
        "unit": "g",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "rec_014_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir la cebolla, la zanahoria, el apio y los ajos al vaso. Programar 5 seg / Vel 5.",
          "en": "Add the onion, carrot, celery and garlic to the bowl. Set 5 sec / Speed 5."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 5
        }
      },
      {
        "id": "rec_014_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir el aceite de oliva. Programar 5 min / 120°C / Vel 1.",
          "en": "Add the olive oil. Set 5 min / 120°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 120,
          "time": 300
        },
        "timer": 300
      },
      {
        "id": "rec_014_step_03",
        "order": 3,
        "instruction": {
          "es": "Añadir la carne picada. Programar 5 min / 120°C / Vel Cuchara / Giro inverso.",
          "en": "Add the ground beef. Set 5 min / 120°C / Speed Spatula / Reverse."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "temperature": 120,
          "time": 300,
          "direction": "counterclockwise"
        },
        "timer": 300
      },
      {
        "id": "rec_014_step_04",
        "order": 4,
        "instruction": {
          "es": "Añadir el vino tinto. Programar 2 min / 100°C / Vel Cuchara.",
          "en": "Add the red wine. Set 2 min / 100°C / Speed Spatula."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "temperature": 100,
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "rec_014_step_05",
        "order": 5,
        "instruction": {
          "es": "Añadir el tomate triturado, el concentrado de tomate, el orégano, la sal y la pimienta. Programar 20 min / 100°C / Vel Cuchara.",
          "en": "Add the crushed tomatoes, tomato paste, oregano, salt and pepper. Set 20 min / 100°C / Speed Spatula."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "temperature": 100,
          "time": 1200
        },
        "timer": 1200
      },
      {
        "id": "rec_014_step_06",
        "order": 6,
        "instruction": {
          "es": "Mientras la salsa se cocina, hervir la pasta según las instrucciones del paquete. Servir la salsa sobre la pasta cocida.",
          "en": "While the sauce cooks, boil the pasta according to package instructions. Serve the sauce over the cooked pasta."
        },
        "tip": {
          "es": "La pasta se cocina aparte en una olla convencional.",
          "en": "The pasta is cooked separately in a regular pot."
        }
      }
    ],
    "tips": {
      "es": "Esta salsa mejora al día siguiente. Se puede congelar en porciones para tener lista durante la semana.",
      "en": "This sauce tastes even better the next day. You can freeze it in portions to have ready during the week."
    },
    "origin": {
      "es": "Italia",
      "en": "Italy"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_016",
    "slug": "chicken-curry",
    "title": {
      "es": "Curry de pollo",
      "en": "Chicken Curry"
    },
    "description": {
      "es": "Un curry de pollo aromático y reconfortante con leche de coco, preparado íntegramente en la Thermomix. Perfecto para una cena entre semana llena de sabor.",
      "en": "An aromatic and comforting chicken curry with coconut milk, prepared entirely in the Thermomix. Perfect for a flavorful weeknight dinner."
    },
    "image": "chicken-curry.jpg",
    "category": "main_courses",
    "tags": [
      "gluten-free",
      "dairy-free",
      "weeknight",
      "comfort-food"
    ],
    "difficulty": "medium",
    "totalTime": 40,
    "prepTime": 10,
    "cookTime": 30,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_016_ing_01",
        "name": {
          "es": "cebolla",
          "en": "onion"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_016_ing_02",
        "name": {
          "es": "dientes de ajo",
          "en": "garlic cloves"
        },
        "amount": 2,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_016_ing_03",
        "name": {
          "es": "jengibre fresco",
          "en": "fresh ginger"
        },
        "amount": 20,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_016_ing_04",
        "name": {
          "es": "aceite de oliva",
          "en": "olive oil"
        },
        "amount": 30,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_016_ing_05",
        "name": {
          "es": "curry en polvo",
          "en": "curry powder"
        },
        "amount": 2,
        "unit": "cda",
        "optional": false
      },
      {
        "id": "rec_016_ing_06",
        "name": {
          "es": "cúrcuma",
          "en": "turmeric"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "rec_016_ing_07",
        "name": {
          "es": "pechuga de pollo en trozos",
          "en": "chicken breast in pieces"
        },
        "amount": 600,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_016_ing_08",
        "name": {
          "es": "leche de coco",
          "en": "coconut milk"
        },
        "amount": 400,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_016_ing_09",
        "name": {
          "es": "tomate triturado",
          "en": "crushed tomatoes"
        },
        "amount": 200,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_016_ing_10",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "rec_016_ing_11",
        "name": {
          "es": "cilantro fresco",
          "en": "fresh coriander"
        },
        "amount": 1,
        "unit": "cda",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "rec_016_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir la cebolla, los ajos y el jengibre al vaso. Programar 5 seg / Vel 5.",
          "en": "Add the onion, garlic and ginger to the bowl. Set 5 sec / Speed 5."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 5
        }
      },
      {
        "id": "rec_016_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir el aceite de oliva. Programar 5 min / 120°C / Vel 1.",
          "en": "Add the olive oil. Set 5 min / 120°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 120,
          "time": 300
        },
        "timer": 300
      },
      {
        "id": "rec_016_step_03",
        "order": 3,
        "instruction": {
          "es": "Añadir el curry en polvo y la cúrcuma. Programar 1 min / 120°C / Vel 1.",
          "en": "Add the curry powder and turmeric. Set 1 min / 120°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 120,
          "time": 60
        },
        "timer": 60
      },
      {
        "id": "rec_016_step_04",
        "order": 4,
        "instruction": {
          "es": "Añadir el pollo troceado. Programar 5 min / 120°C / Vel Cuchara / Giro inverso.",
          "en": "Add the chicken pieces. Set 5 min / 120°C / Speed Spatula / Reverse."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "temperature": 120,
          "time": 300,
          "direction": "counterclockwise"
        },
        "timer": 300
      },
      {
        "id": "rec_016_step_05",
        "order": 5,
        "instruction": {
          "es": "Añadir la leche de coco, el tomate triturado y la sal. Programar 20 min / 100°C / Vel Cuchara / Giro inverso.",
          "en": "Add the coconut milk, crushed tomatoes and salt. Set 20 min / 100°C / Speed Spatula / Reverse."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "temperature": 100,
          "time": 1200,
          "direction": "counterclockwise"
        },
        "timer": 1200
      },
      {
        "id": "rec_016_step_06",
        "order": 6,
        "instruction": {
          "es": "Servir acompañado de arroz basmati y decorar con cilantro fresco.",
          "en": "Serve with basmati rice and garnish with fresh coriander."
        }
      }
    ],
    "tips": {
      "es": "Para un curry más picante, añadir media cucharadita de cayena en el paso 3. El arroz basmati se cocina aparte.",
      "en": "For a spicier curry, add half a teaspoon of cayenne in step 3. Basmati rice is cooked separately."
    },
    "origin": {
      "es": "India",
      "en": "India"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_013",
    "slug": "mushroom-risotto",
    "title": {
      "es": "Risotto de hongos",
      "en": "Mushroom Risotto"
    },
    "description": {
      "es": "Un risotto cremoso de hongos variados, cocinado a la perfección en la Thermomix. Sabor intenso y textura sedosa sin necesidad de revolver constantemente.",
      "en": "A creamy mixed mushroom risotto, cooked to perfection in the Thermomix. Intense flavor and silky texture without constant stirring."
    },
    "image": "mushroom-risotto.jpg",
    "category": "main_courses",
    "tags": [
      "vegetarian",
      "comfort-food",
      "autumn",
      "winter"
    ],
    "difficulty": "medium",
    "totalTime": 40,
    "prepTime": 10,
    "cookTime": 30,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_013_ing_01",
        "name": {
          "es": "cebolla",
          "en": "onion"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_013_ing_02",
        "name": {
          "es": "diente de ajo",
          "en": "garlic clove"
        },
        "amount": 2,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_013_ing_03",
        "name": {
          "es": "aceite de oliva",
          "en": "olive oil"
        },
        "amount": 40,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_013_ing_04",
        "name": {
          "es": "hongos variados (champiñones, portobello)",
          "en": "mixed mushrooms (button, portobello)"
        },
        "amount": 300,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_013_ing_05",
        "name": {
          "es": "arroz arborio",
          "en": "arborio rice"
        },
        "amount": 320,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_013_ing_06",
        "name": {
          "es": "vino blanco",
          "en": "white wine"
        },
        "amount": 100,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_013_ing_07",
        "name": {
          "es": "caldo de verduras caliente",
          "en": "hot vegetable broth"
        },
        "amount": 800,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_013_ing_08",
        "name": {
          "es": "queso parmesano rallado",
          "en": "grated Parmesan cheese"
        },
        "amount": 60,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_013_ing_09",
        "name": {
          "es": "mantequilla",
          "en": "butter"
        },
        "amount": 30,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_013_ing_10",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "rec_013_ing_11",
        "name": {
          "es": "pimienta negra",
          "en": "black pepper"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "rec_013_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir la cebolla y los ajos al vaso. Programar 5 seg / Vel 5.",
          "en": "Add the onion and garlic to the bowl. Set 5 sec / Speed 5."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 5
        }
      },
      {
        "id": "rec_013_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir el aceite de oliva. Programar 3 min / 120°C / Vel 1.",
          "en": "Add the olive oil. Set 3 min / 120°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 120,
          "time": 180
        },
        "timer": 180
      },
      {
        "id": "rec_013_step_03",
        "order": 3,
        "instruction": {
          "es": "Añadir los hongos troceados. Programar 5 min / 120°C / Vel Cuchara.",
          "en": "Add the chopped mushrooms. Set 5 min / 120°C / Speed Spatula."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "temperature": 120,
          "time": 300
        },
        "timer": 300
      },
      {
        "id": "rec_013_step_04",
        "order": 4,
        "instruction": {
          "es": "Añadir el arroz y el vino blanco. Programar 2 min / 100°C / Vel Cuchara.",
          "en": "Add the rice and white wine. Set 2 min / 100°C / Speed Spatula."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "temperature": 100,
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "rec_013_step_05",
        "order": 5,
        "instruction": {
          "es": "Añadir el caldo de verduras caliente. Programar 18 min / 100°C / Vel Cuchara.",
          "en": "Add the hot vegetable broth. Set 18 min / 100°C / Speed Spatula."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "temperature": 100,
          "time": 1080
        },
        "timer": 1080
      },
      {
        "id": "rec_013_step_06",
        "order": 6,
        "instruction": {
          "es": "Añadir el parmesano, la mantequilla, sal y pimienta. Programar 1 min / Vel Cuchara sin temperatura.",
          "en": "Add the Parmesan, butter, salt and pepper. Set 1 min / Speed Spatula with no temperature."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "time": 60
        },
        "timer": 60
      }
    ],
    "tips": {
      "es": "Dejar reposar 2 minutos antes de servir para que el risotto termine de cremarse. Se puede decorar con perejil fresco y un hilo de aceite de trufa.",
      "en": "Let it rest for 2 minutes before serving so the risotto finishes becoming creamy. You can garnish with fresh parsley and a drizzle of truffle oil."
    },
    "origin": {
      "es": "Italia",
      "en": "Italy"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_015",
    "slug": "steamed-salmon-vegetables",
    "title": {
      "es": "Salmón al vapor con verduras",
      "en": "Steamed Salmon with Vegetables"
    },
    "description": {
      "es": "Salmón jugoso cocinado al vapor en el Varoma junto con verduras de temporada. Una comida saludable y completa en un solo paso, aprovechando la cocción multinivel de la Thermomix.",
      "en": "Juicy salmon steamed in the Varoma alongside seasonal vegetables. A healthy and complete meal in one step, taking advantage of the Thermomix's multi-level cooking."
    },
    "image": "steamed-salmon-vegetables.jpg",
    "category": "main_courses",
    "tags": [
      "gluten-free",
      "dairy-free",
      "quick",
      "weeknight"
    ],
    "difficulty": "medium",
    "totalTime": 35,
    "prepTime": 10,
    "cookTime": 25,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "varoma",
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_015_ing_01",
        "name": {
          "es": "lomos de salmón",
          "en": "salmon fillets"
        },
        "amount": 4,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_015_ing_02",
        "name": {
          "es": "patatas",
          "en": "potatoes"
        },
        "amount": 400,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_015_ing_03",
        "name": {
          "es": "brócoli (ramilletes)",
          "en": "broccoli (florets)"
        },
        "amount": 200,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_015_ing_04",
        "name": {
          "es": "zanahoria",
          "en": "carrots"
        },
        "amount": 200,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_015_ing_05",
        "name": {
          "es": "judías verdes",
          "en": "green beans"
        },
        "amount": 150,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_015_ing_06",
        "name": {
          "es": "agua",
          "en": "water"
        },
        "amount": 800,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_015_ing_07",
        "name": {
          "es": "limón (zumo)",
          "en": "lemon (juice)"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_015_ing_08",
        "name": {
          "es": "aceite de oliva virgen extra",
          "en": "extra virgin olive oil"
        },
        "amount": 30,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_015_ing_09",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "rec_015_ing_10",
        "name": {
          "es": "pimienta negra",
          "en": "black pepper"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "rec_015_ing_11",
        "name": {
          "es": "eneldo fresco",
          "en": "fresh dill"
        },
        "amount": 1,
        "unit": "cda",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "rec_015_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir el agua al vaso de la Thermomix.",
          "en": "Add the water to the Thermomix bowl."
        },
        "thermomixSettings": {}
      },
      {
        "id": "rec_015_step_02",
        "order": 2,
        "instruction": {
          "es": "Colocar las patatas cortadas en trozos medianos en el cestillo. Insertar el cestillo en el vaso.",
          "en": "Place the potatoes cut into medium pieces in the steaming basket. Insert the basket into the bowl."
        },
        "thermomixSettings": {
          "accessory": "basket"
        }
      },
      {
        "id": "rec_015_step_03",
        "order": 3,
        "instruction": {
          "es": "Colocar las zanahorias y las judías verdes en la bandeja inferior del Varoma.",
          "en": "Place the carrots and green beans on the lower tray of the Varoma."
        },
        "thermomixSettings": {
          "accessory": "varoma"
        }
      },
      {
        "id": "rec_015_step_04",
        "order": 4,
        "instruction": {
          "es": "Salpimentar los lomos de salmón y colocarlos junto con el brócoli en la tapa del Varoma. Cerrar el Varoma.",
          "en": "Season the salmon fillets with salt and pepper and place them with the broccoli on the Varoma lid tray. Close the Varoma."
        },
        "thermomixSettings": {
          "accessory": "varoma"
        }
      },
      {
        "id": "rec_015_step_05",
        "order": 5,
        "instruction": {
          "es": "Programar 25 min / Temperatura Varoma / Vel 1.",
          "en": "Set 25 min / Varoma temperature / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": "varoma",
          "time": 1500
        },
        "timer": 1500
      },
      {
        "id": "rec_015_step_06",
        "order": 6,
        "instruction": {
          "es": "Servir el salmón y las verduras aliñados con zumo de limón, aceite de oliva y eneldo fresco.",
          "en": "Serve the salmon and vegetables dressed with lemon juice, olive oil and fresh dill."
        }
      }
    ],
    "tips": {
      "es": "El tiempo de vapor puede variar según el grosor de los lomos de salmón. Para un salmón más jugoso, reducir 2-3 minutos.",
      "en": "Steaming time may vary depending on the thickness of the salmon fillets. For juicier salmon, reduce by 2-3 minutes."
    },
    "origin": {
      "es": "Internacional",
      "en": "International"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_017",
    "slug": "classic-bechamel",
    "title": {
      "es": "Bechamel clásica",
      "en": "Classic Bechamel"
    },
    "description": {
      "es": "La salsa bechamel perfecta, sin grumos y en solo 10 minutos. La Thermomix se encarga de remover constantemente para obtener una textura sedosa ideal para lasañas, croquetas y gratinados.",
      "en": "The perfect bechamel sauce, lump-free in just 10 minutes. The Thermomix stirs constantly for a silky texture ideal for lasagnas, croquettes and gratins."
    },
    "image": "classic-bechamel.jpg",
    "category": "sauces",
    "tags": [
      "vegetarian",
      "quick",
      "comfort-food"
    ],
    "difficulty": "easy",
    "totalTime": 12,
    "prepTime": 2,
    "cookTime": 10,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "butterfly",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_017_ing_01",
        "name": {
          "es": "leche entera",
          "en": "whole milk"
        },
        "amount": 500,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_017_ing_02",
        "name": {
          "es": "mantequilla",
          "en": "butter"
        },
        "amount": 50,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_017_ing_03",
        "name": {
          "es": "harina de trigo",
          "en": "all-purpose flour"
        },
        "amount": 50,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_017_ing_04",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "rec_017_ing_05",
        "name": {
          "es": "nuez moscada",
          "en": "nutmeg"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "rec_017_step_01",
        "order": 1,
        "instruction": {
          "es": "Colocar la mariposa en las cuchillas.",
          "en": "Attach the butterfly whisk to the blades."
        },
        "thermomixSettings": {
          "accessory": "butterfly"
        }
      },
      {
        "id": "rec_017_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir la mantequilla al vaso. Programar 2 min / 90°C / Vel 2.",
          "en": "Add the butter to the bowl. Set 2 min / 90°C / Speed 2."
        },
        "thermomixSettings": {
          "speed": 2,
          "temperature": 90,
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "rec_017_step_03",
        "order": 3,
        "instruction": {
          "es": "Añadir la harina. Programar 1 min / 90°C / Vel 3.",
          "en": "Add the flour. Set 1 min / 90°C / Speed 3."
        },
        "thermomixSettings": {
          "speed": 3,
          "temperature": 90,
          "time": 60
        },
        "timer": 60
      },
      {
        "id": "rec_017_step_04",
        "order": 4,
        "instruction": {
          "es": "Añadir la leche, la sal y la nuez moscada. Programar 7 min / 90°C / Vel 4.",
          "en": "Add the milk, salt and nutmeg. Set 7 min / 90°C / Speed 4."
        },
        "thermomixSettings": {
          "speed": 4,
          "temperature": 90,
          "time": 420
        },
        "timer": 420
      }
    ],
    "tips": {
      "es": "Para una bechamel más espesa (ideal para croquetas), reducir la leche a 400 ml. Para una más ligera (para lasañas), usar 600 ml.",
      "en": "For a thicker bechamel (ideal for croquettes), reduce milk to 400 ml. For a lighter one (for lasagnas), use 600 ml."
    },
    "origin": {
      "es": "Francia",
      "en": "France"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_019",
    "slug": "classic-hummus",
    "title": {
      "es": "Hummus clásico",
      "en": "Classic Hummus"
    },
    "description": {
      "es": "Hummus cremoso y suave hecho en la Thermomix con garbanzos, tahini, limón y ajo. Un aperitivo saludable listo en minutos.",
      "en": "Creamy and smooth hummus made in the Thermomix with chickpeas, tahini, lemon and garlic. A healthy appetizer ready in minutes."
    },
    "image": "classic-hummus.jpg",
    "category": "sauces",
    "tags": [
      "vegan",
      "gluten-free",
      "dairy-free",
      "quick",
      "meal-prep"
    ],
    "difficulty": "easy",
    "totalTime": 10,
    "prepTime": 5,
    "cookTime": 5,
    "servings": 6,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula"
    ],
    "ingredients": [
      {
        "id": "rec_019_ing_01",
        "name": {
          "es": "garbanzos cocidos (escurridos)",
          "en": "cooked chickpeas (drained)"
        },
        "amount": 400,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_019_ing_02",
        "name": {
          "es": "tahini (pasta de sésamo)",
          "en": "tahini (sesame paste)"
        },
        "amount": 60,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_019_ing_03",
        "name": {
          "es": "zumo de limón",
          "en": "lemon juice"
        },
        "amount": 40,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_019_ing_04",
        "name": {
          "es": "diente de ajo",
          "en": "garlic clove"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_019_ing_05",
        "name": {
          "es": "aceite de oliva virgen extra",
          "en": "extra virgin olive oil"
        },
        "amount": 30,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_019_ing_06",
        "name": {
          "es": "agua fría",
          "en": "cold water"
        },
        "amount": 40,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_019_ing_07",
        "name": {
          "es": "comino molido",
          "en": "ground cumin"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "rec_019_ing_08",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "rec_019_ing_09",
        "name": {
          "es": "pimentón dulce (para decorar)",
          "en": "sweet paprika (for garnish)"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "rec_019_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir el ajo al vaso. Programar 5 seg / Vel 7.",
          "en": "Add the garlic to the bowl. Set 5 sec / Speed 7."
        },
        "thermomixSettings": {
          "speed": 7,
          "time": 5
        }
      },
      {
        "id": "rec_019_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir los garbanzos, el tahini, el zumo de limón, el aceite, el agua, el comino y la sal. Programar 1 min / Vel 8.",
          "en": "Add the chickpeas, tahini, lemon juice, oil, water, cumin and salt. Set 1 min / Speed 8."
        },
        "thermomixSettings": {
          "speed": 8,
          "time": 60
        },
        "timer": 60
      },
      {
        "id": "rec_019_step_03",
        "order": 3,
        "instruction": {
          "es": "Bajar los restos de las paredes con la espátula. Programar 30 seg / Vel 10 para obtener una textura muy suave.",
          "en": "Scrape down the sides with the spatula. Set 30 sec / Speed 10 for a very smooth texture."
        },
        "thermomixSettings": {
          "speed": 10,
          "time": 30
        },
        "timer": 30,
        "tip": {
          "es": "Si queda muy espeso, añadir una cucharada más de agua y repetir.",
          "en": "If it's too thick, add another tablespoon of water and repeat."
        }
      }
    ],
    "tips": {
      "es": "Servir con un chorrito de aceite de oliva, pimentón y semillas de sésamo por encima. Acompañar con pan de pita o crudités.",
      "en": "Serve with a drizzle of olive oil, paprika and sesame seeds on top. Accompany with pita bread or crudités."
    },
    "origin": {
      "es": "Medio Oriente",
      "en": "Middle East"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_020",
    "slug": "pesto-genovese",
    "title": {
      "es": "Pesto genovés",
      "en": "Genovese Pesto"
    },
    "description": {
      "es": "El auténtico pesto genovés con albahaca fresca, piñones, parmesano y aceite de oliva. Listo en segundos gracias a la potencia de la Thermomix.",
      "en": "Authentic Genovese pesto with fresh basil, pine nuts, Parmesan and olive oil. Ready in seconds thanks to the Thermomix's power."
    },
    "image": "pesto-genovese.jpg",
    "category": "sauces",
    "tags": [
      "vegetarian",
      "gluten-free",
      "quick"
    ],
    "difficulty": "easy",
    "totalTime": 5,
    "prepTime": 3,
    "cookTime": 2,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula"
    ],
    "ingredients": [
      {
        "id": "rec_020_ing_01",
        "name": {
          "es": "albahaca fresca (hojas)",
          "en": "fresh basil (leaves)"
        },
        "amount": 60,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_020_ing_02",
        "name": {
          "es": "piñones",
          "en": "pine nuts"
        },
        "amount": 30,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_020_ing_03",
        "name": {
          "es": "queso parmesano",
          "en": "Parmesan cheese"
        },
        "amount": 50,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_020_ing_04",
        "name": {
          "es": "diente de ajo",
          "en": "garlic clove"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_020_ing_05",
        "name": {
          "es": "aceite de oliva virgen extra",
          "en": "extra virgin olive oil"
        },
        "amount": 80,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_020_ing_06",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "rec_020_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir el parmesano troceado al vaso. Programar 10 seg / Vel 10.",
          "en": "Add the Parmesan pieces to the bowl. Set 10 sec / Speed 10."
        },
        "thermomixSettings": {
          "speed": 10,
          "time": 10
        }
      },
      {
        "id": "rec_020_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir el ajo y los piñones. Programar 10 seg / Vel 8.",
          "en": "Add the garlic and pine nuts. Set 10 sec / Speed 8."
        },
        "thermomixSettings": {
          "speed": 8,
          "time": 10
        }
      },
      {
        "id": "rec_020_step_03",
        "order": 3,
        "instruction": {
          "es": "Añadir la albahaca, el aceite de oliva y la sal. Programar 20 seg / Vel 7.",
          "en": "Add the basil, olive oil and salt. Set 20 sec / Speed 7."
        },
        "thermomixSettings": {
          "speed": 7,
          "time": 20
        },
        "tip": {
          "es": "Si prefieres una textura más gruesa, reducir a 10 seg.",
          "en": "If you prefer a chunkier texture, reduce to 10 sec."
        }
      },
      {
        "id": "rec_020_step_04",
        "order": 4,
        "instruction": {
          "es": "Bajar los restos de las paredes del vaso con la espátula. Mezclar brevemente 5 seg / Vel 5.",
          "en": "Scrape down the sides of the bowl with the spatula. Mix briefly 5 sec / Speed 5."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 5
        }
      }
    ],
    "tips": {
      "es": "Se conserva en un bote de cristal cubierto con una capa de aceite de oliva hasta una semana en la nevera. También se puede congelar en cubiteras.",
      "en": "Keeps in a glass jar covered with a layer of olive oil for up to a week in the fridge. You can also freeze it in ice cube trays."
    },
    "origin": {
      "es": "Italia",
      "en": "Italy"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_018",
    "slug": "tomato-sauce",
    "title": {
      "es": "Salsa de tomate casera",
      "en": "Homemade Tomato Sauce"
    },
    "description": {
      "es": "Una salsa de tomate casera versátil y sabrosa, perfecta como base para pastas, pizzas y guisos. Sin conservantes ni azúcares añadidos.",
      "en": "A versatile and tasty homemade tomato sauce, perfect as a base for pastas, pizzas and stews. No preservatives or added sugars."
    },
    "image": "tomato-sauce.jpg",
    "category": "sauces",
    "tags": [
      "vegan",
      "gluten-free",
      "dairy-free",
      "meal-prep",
      "weeknight"
    ],
    "difficulty": "easy",
    "totalTime": 25,
    "prepTime": 5,
    "cookTime": 20,
    "servings": 6,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_018_ing_01",
        "name": {
          "es": "cebolla",
          "en": "onion"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_018_ing_02",
        "name": {
          "es": "diente de ajo",
          "en": "garlic clove"
        },
        "amount": 2,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_018_ing_03",
        "name": {
          "es": "aceite de oliva virgen extra",
          "en": "extra virgin olive oil"
        },
        "amount": 30,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_018_ing_04",
        "name": {
          "es": "tomates maduros",
          "en": "ripe tomatoes"
        },
        "amount": 800,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_018_ing_05",
        "name": {
          "es": "albahaca fresca",
          "en": "fresh basil"
        },
        "amount": 6,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_018_ing_06",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "rec_018_ing_07",
        "name": {
          "es": "pimienta negra",
          "en": "black pepper"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "rec_018_ing_08",
        "name": {
          "es": "azúcar",
          "en": "sugar"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "rec_018_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir la cebolla y los ajos al vaso. Programar 5 seg / Vel 5.",
          "en": "Add the onion and garlic to the bowl. Set 5 sec / Speed 5."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 5
        }
      },
      {
        "id": "rec_018_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir el aceite de oliva. Programar 5 min / 120°C / Vel 1.",
          "en": "Add the olive oil. Set 5 min / 120°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 120,
          "time": 300
        },
        "timer": 300
      },
      {
        "id": "rec_018_step_03",
        "order": 3,
        "instruction": {
          "es": "Añadir los tomates troceados, la sal, la pimienta y el azúcar (opcional). Programar 15 min / 100°C / Vel Cuchara.",
          "en": "Add the chopped tomatoes, salt, pepper and sugar (optional). Set 15 min / 100°C / Speed Spatula."
        },
        "thermomixSettings": {
          "speed": "spatula",
          "temperature": 100,
          "time": 900
        },
        "timer": 900
      },
      {
        "id": "rec_018_step_04",
        "order": 4,
        "instruction": {
          "es": "Añadir las hojas de albahaca. Programar 1 min / Vel 5 para triturar hasta obtener una salsa homogénea.",
          "en": "Add the basil leaves. Set 1 min / Speed 5 to blend until smooth."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 60
        },
        "timer": 60,
        "tip": {
          "es": "Si prefieres una salsa con trozos, programar solo 10 seg / Vel 4.",
          "en": "If you prefer a chunky sauce, set only 10 sec / Speed 4."
        }
      }
    ],
    "tips": {
      "es": "Se conserva hasta 5 días en la nevera o 3 meses en el congelador. Ideal para preparar en lotes grandes.",
      "en": "Keeps up to 5 days in the fridge or 3 months in the freezer. Ideal for batch cooking."
    },
    "origin": {
      "es": "Italia",
      "en": "Italy"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_004",
    "slug": "chicken-noodle-soup",
    "title": {
      "es": "Sopa de pollo con fideos",
      "en": "Chicken noodle soup"
    },
    "description": {
      "es": "Reconfortante sopa de pollo con verduras y fideos finos, cocinada en Thermomix con Varoma para un caldo lleno de sabor.",
      "en": "Comforting chicken soup with vegetables and thin noodles, cooked in Thermomix with Varoma for a flavorful broth."
    },
    "image": "chicken-noodle-soup.jpg",
    "category": "soups",
    "tags": [
      "gluten-free",
      "dairy-free",
      "comfort-food",
      "winter",
      "autumn"
    ],
    "difficulty": "hard",
    "totalTime": 65,
    "prepTime": 15,
    "cookTime": 50,
    "servings": 6,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "varoma",
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "ing_030",
        "name": {
          "es": "Contramuslos de pollo deshuesados",
          "en": "Boneless chicken thighs"
        },
        "amount": 400,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_031",
        "name": {
          "es": "Agua",
          "en": "Water"
        },
        "amount": 1.5,
        "unit": "L",
        "optional": false
      },
      {
        "id": "ing_032",
        "name": {
          "es": "Zanahoria",
          "en": "Carrot"
        },
        "amount": 2,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_033",
        "name": {
          "es": "Puerro (parte blanca y verde clara)",
          "en": "Leek (white and light green part)"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_034",
        "name": {
          "es": "Apio (tallos)",
          "en": "Celery stalks"
        },
        "amount": 2,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_035",
        "name": {
          "es": "Cebolla mediana",
          "en": "Medium onion"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_036",
        "name": {
          "es": "Dientes de ajo",
          "en": "Garlic cloves"
        },
        "amount": 2,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_037",
        "name": {
          "es": "Nabo pequeño",
          "en": "Small turnip"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_038",
        "name": {
          "es": "Aceite de oliva virgen extra",
          "en": "Extra virgin olive oil"
        },
        "amount": 20,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_039",
        "name": {
          "es": "Fideos finos (cabello de ángel)",
          "en": "Thin noodles (angel hair)"
        },
        "amount": 100,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_040",
        "name": {
          "es": "Sal",
          "en": "Salt"
        },
        "amount": 2,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "ing_041",
        "name": {
          "es": "Pimienta negra molida",
          "en": "Ground black pepper"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "ing_042",
        "name": {
          "es": "Hoja de laurel",
          "en": "Bay leaf"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_043",
        "name": {
          "es": "Perejil fresco picado",
          "en": "Fresh chopped parsley"
        },
        "amount": 10,
        "unit": "g",
        "optional": true
      },
      {
        "id": "ing_044",
        "name": {
          "es": "Huevo duro picado",
          "en": "Chopped hard-boiled egg"
        },
        "amount": 2,
        "unit": "unidad",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "step_020",
        "order": 1,
        "instruction": {
          "es": "Introducir la cebolla troceada y los ajos en el vaso. Programar 5 seg / Vel 5.",
          "en": "Add the chopped onion and garlic to the bowl. Set 5 sec / Speed 5."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 5
        }
      },
      {
        "id": "step_021",
        "order": 2,
        "instruction": {
          "es": "Añadir el aceite de oliva. Programar 5 min / 120°C / Vel 1.",
          "en": "Add the olive oil. Set 5 min / 120°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 120,
          "time": 300
        },
        "timer": 300
      },
      {
        "id": "step_022",
        "order": 3,
        "instruction": {
          "es": "Añadir la zanahoria, el puerro, el apio y el nabo, todo troceado en trozos grandes. Programar 5 seg / Vel 4.",
          "en": "Add the carrot, leek, celery, and turnip, all cut into large pieces. Set 5 sec / Speed 4."
        },
        "thermomixSettings": {
          "speed": 4,
          "time": 5
        },
        "tip": {
          "es": "Cortar las verduras en trozos grandes para que no se deshagan durante la cocción.",
          "en": "Cut the vegetables into large pieces so they hold their shape during cooking."
        }
      },
      {
        "id": "step_023",
        "order": 4,
        "instruction": {
          "es": "Añadir el agua, la sal, la pimienta y la hoja de laurel. Colocar el pollo en el recipiente Varoma. Insertar el Varoma y programar 30 min / Varoma / Vel 1.",
          "en": "Add the water, salt, pepper, and bay leaf. Place the chicken in the Varoma tray. Insert the Varoma and set 30 min / Varoma / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": "varoma",
          "time": 1800,
          "accessory": "varoma"
        },
        "timer": 1800
      },
      {
        "id": "step_024",
        "order": 5,
        "instruction": {
          "es": "Retirar el Varoma con cuidado. Sacar el pollo y desmenuzarlo con dos tenedores. Reservar.",
          "en": "Carefully remove the Varoma. Take out the chicken and shred it with two forks. Set aside."
        },
        "tip": {
          "es": "El pollo estará muy tierno y se desmigará fácilmente.",
          "en": "The chicken will be very tender and will shred easily."
        }
      },
      {
        "id": "step_025",
        "order": 6,
        "instruction": {
          "es": "Retirar la hoja de laurel del caldo. Añadir los fideos al vaso. Programar 8 min / 100°C / Vel 1.",
          "en": "Remove the bay leaf from the broth. Add the noodles to the bowl. Set 8 min / 100°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 100,
          "time": 480
        },
        "timer": 480
      },
      {
        "id": "step_026",
        "order": 7,
        "instruction": {
          "es": "Añadir el pollo desmenuzado al vaso. Programar 2 min / 100°C / Vel 1 para calentar.",
          "en": "Add the shredded chicken to the bowl. Set 2 min / 100°C / Speed 1 to heat through."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 100,
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "step_027",
        "order": 8,
        "instruction": {
          "es": "Servir en platos hondos. Decorar con perejil fresco y huevo duro picado si se desea.",
          "en": "Serve in deep plates. Garnish with fresh parsley and chopped hard-boiled egg if desired."
        }
      }
    ],
    "tips": {
      "es": "Para un caldo más intenso, puedes usar contramuslos con hueso y piel en el Varoma, luego deshuesar y desmenuzar. Los fideos sin gluten funcionan perfectamente en esta receta.",
      "en": "For a richer broth, you can use bone-in, skin-on thighs in the Varoma, then debone and shred. Gluten-free noodles work perfectly in this recipe."
    },
    "origin": {
      "es": "Internacional",
      "en": "International"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_002",
    "slug": "leek-potato-soup",
    "title": {
      "es": "Vichyssoise de puerros y patata",
      "en": "Leek and potato soup (Vichyssoise)"
    },
    "description": {
      "es": "Clásica sopa cremosa de puerros y patata, deliciosa tanto fría como caliente.",
      "en": "Classic creamy leek and potato soup, delicious served hot or cold."
    },
    "image": "leek-potato-soup.jpg",
    "category": "soups",
    "tags": [
      "vegetarian",
      "gluten-free",
      "comfort-food",
      "winter",
      "spring"
    ],
    "difficulty": "easy",
    "totalTime": 30,
    "prepTime": 5,
    "cookTime": 25,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "ing_010",
        "name": {
          "es": "Puerros (parte blanca)",
          "en": "Leeks (white part)"
        },
        "amount": 300,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_011",
        "name": {
          "es": "Patatas peladas y troceadas",
          "en": "Peeled and diced potatoes"
        },
        "amount": 400,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_012",
        "name": {
          "es": "Mantequilla",
          "en": "Butter"
        },
        "amount": 20,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_013",
        "name": {
          "es": "Caldo de verduras",
          "en": "Vegetable broth"
        },
        "amount": 500,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "ing_014",
        "name": {
          "es": "Sal",
          "en": "Salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "step_006",
        "order": 1,
        "instruction": {
          "es": "Introducir los puerros troceados en el vaso. Programar 5 seg / Vel 5.",
          "en": "Add the chopped leeks to the bowl. Set 5 sec / Speed 5."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 5
        }
      },
      {
        "id": "step_007",
        "order": 2,
        "instruction": {
          "es": "Añadir la mantequilla. Programar 5 min / 100°C / Vel 1.",
          "en": "Add the butter. Set 5 min / 100°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 100,
          "time": 300
        },
        "timer": 300
      },
      {
        "id": "step_008",
        "order": 3,
        "instruction": {
          "es": "Añadir las patatas, el caldo y la sal. Programar 20 min / 100°C / Vel 1.",
          "en": "Add the potatoes, broth, and salt. Set 20 min / 100°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 100,
          "time": 1200
        },
        "timer": 1200
      },
      {
        "id": "step_009",
        "order": 4,
        "instruction": {
          "es": "Triturar programando 1 min / Vel 5-7-10 progresivamente hasta obtener una crema fina.",
          "en": "Blend by setting 1 min / Speed 5-7-10 progressively until smooth."
        },
        "thermomixSettings": {
          "speed": 10,
          "time": 60
        },
        "timer": 60,
        "tip": {
          "es": "Si la crema queda muy espesa, añadir un poco más de caldo y triturar de nuevo.",
          "en": "If the soup is too thick, add a little more broth and blend again."
        }
      }
    ],
    "tips": {
      "es": "Para servirla fría como vichyssoise clásica, dejar enfriar y refrigerar al menos 2 horas. Añadir un chorrito de nata al servir.",
      "en": "To serve cold as classic vichyssoise, let it cool and refrigerate for at least 2 hours. Add a drizzle of cream when serving."
    },
    "origin": {
      "es": "Francia",
      "en": "France"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_001",
    "slug": "pumpkin-ginger-cream",
    "title": {
      "es": "Crema de calabaza y jengibre",
      "en": "Pumpkin and ginger cream soup"
    },
    "description": {
      "es": "Una crema suave y reconfortante de calabaza con un toque de jengibre fresco. Ideal para las tardes de otoño.",
      "en": "A smooth and comforting pumpkin cream soup with a touch of fresh ginger. Perfect for autumn evenings."
    },
    "image": "pumpkin-ginger-cream.jpg",
    "category": "soups",
    "tags": [
      "vegetarian",
      "vegan",
      "gluten-free",
      "dairy-free",
      "comfort-food",
      "autumn",
      "winter"
    ],
    "difficulty": "medium",
    "totalTime": 40,
    "prepTime": 10,
    "cookTime": 30,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "ing_001",
        "name": {
          "es": "Calabaza pelada y troceada",
          "en": "Peeled and diced pumpkin"
        },
        "amount": 600,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_002",
        "name": {
          "es": "Patata",
          "en": "Potato"
        },
        "amount": 200,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_003",
        "name": {
          "es": "Cebolla",
          "en": "Onion"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_004",
        "name": {
          "es": "Jengibre fresco pelado",
          "en": "Fresh peeled ginger"
        },
        "amount": 15,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_005",
        "name": {
          "es": "Aceite de oliva virgen extra",
          "en": "Extra virgin olive oil"
        },
        "amount": 20,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_006",
        "name": {
          "es": "Caldo de verduras",
          "en": "Vegetable broth"
        },
        "amount": 500,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "ing_007",
        "name": {
          "es": "Sal",
          "en": "Salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "ing_008",
        "name": {
          "es": "Pimienta negra molida",
          "en": "Ground black pepper"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "ing_009",
        "name": {
          "es": "Semillas de calabaza tostadas",
          "en": "Toasted pumpkin seeds"
        },
        "amount": 20,
        "unit": "g",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "step_001",
        "order": 1,
        "instruction": {
          "es": "Introducir la cebolla troceada y el jengibre en el vaso. Programar 5 seg / Vel 5.",
          "en": "Add the chopped onion and ginger to the bowl. Set 5 sec / Speed 5."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 5
        }
      },
      {
        "id": "step_002",
        "order": 2,
        "instruction": {
          "es": "Añadir el aceite de oliva. Programar 4 min / 120°C / Vel 1.",
          "en": "Add the olive oil. Set 4 min / 120°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 120,
          "time": 240
        },
        "timer": 240
      },
      {
        "id": "step_003",
        "order": 3,
        "instruction": {
          "es": "Añadir la calabaza, la patata y el caldo de verduras. Programar 20 min / 100°C / Vel 1.",
          "en": "Add the pumpkin, potato, and vegetable broth. Set 20 min / 100°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 100,
          "time": 1200
        },
        "timer": 1200
      },
      {
        "id": "step_004",
        "order": 4,
        "instruction": {
          "es": "Añadir la sal y la pimienta. Triturar programando 1 min / Vel 5-7-10 progresivamente.",
          "en": "Add salt and pepper. Blend by setting 1 min / Speed 5-7-10 progressively."
        },
        "thermomixSettings": {
          "speed": 10,
          "time": 60
        },
        "timer": 60
      },
      {
        "id": "step_005",
        "order": 5,
        "instruction": {
          "es": "Servir en boles y decorar con semillas de calabaza tostadas si se desea.",
          "en": "Serve in bowls and garnish with toasted pumpkin seeds if desired."
        },
        "tip": {
          "es": "Para una textura más cremosa, añadir 50 ml de leche de coco antes de triturar.",
          "en": "For a creamier texture, add 50 ml of coconut milk before blending."
        }
      }
    ],
    "tips": {
      "es": "Puedes sustituir el jengibre fresco por 1/2 cdta de jengibre en polvo. La crema se conserva bien en la nevera hasta 3 días.",
      "en": "You can substitute fresh ginger with 1/2 tsp ground ginger. The soup keeps well in the fridge for up to 3 days."
    },
    "origin": {
      "es": "Internacional",
      "en": "International"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_003",
    "slug": "tomato-basil-soup",
    "title": {
      "es": "Sopa de tomate y albahaca",
      "en": "Tomato and basil soup"
    },
    "description": {
      "es": "Sopa clásica de tomate con albahaca fresca, ajo y un toque de nata. Reconfortante y llena de sabor.",
      "en": "Classic tomato soup with fresh basil, garlic, and a touch of cream. Comforting and full of flavor."
    },
    "image": "tomato-basil-soup.jpg",
    "category": "soups",
    "tags": [
      "vegetarian",
      "comfort-food",
      "summer",
      "quick"
    ],
    "difficulty": "medium",
    "totalTime": 35,
    "prepTime": 10,
    "cookTime": 25,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "ing_020",
        "name": {
          "es": "Tomates maduros",
          "en": "Ripe tomatoes"
        },
        "amount": 800,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_021",
        "name": {
          "es": "Cebolla mediana",
          "en": "Medium onion"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_022",
        "name": {
          "es": "Dientes de ajo",
          "en": "Garlic cloves"
        },
        "amount": 2,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "ing_023",
        "name": {
          "es": "Aceite de oliva virgen extra",
          "en": "Extra virgin olive oil"
        },
        "amount": 30,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_024",
        "name": {
          "es": "Caldo de verduras",
          "en": "Vegetable broth"
        },
        "amount": 200,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "ing_025",
        "name": {
          "es": "Hojas de albahaca fresca",
          "en": "Fresh basil leaves"
        },
        "amount": 15,
        "unit": "g",
        "optional": false
      },
      {
        "id": "ing_026",
        "name": {
          "es": "Azúcar",
          "en": "Sugar"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "ing_027",
        "name": {
          "es": "Sal",
          "en": "Salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "ing_028",
        "name": {
          "es": "Pimienta negra molida",
          "en": "Ground black pepper"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "ing_029",
        "name": {
          "es": "Nata líquida para cocinar",
          "en": "Cooking cream"
        },
        "amount": 50,
        "unit": "ml",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "step_010",
        "order": 1,
        "instruction": {
          "es": "Introducir la cebolla troceada y los ajos en el vaso. Programar 5 seg / Vel 5.",
          "en": "Add the chopped onion and garlic to the bowl. Set 5 sec / Speed 5."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 5
        }
      },
      {
        "id": "step_011",
        "order": 2,
        "instruction": {
          "es": "Añadir el aceite de oliva. Programar 5 min / 120°C / Vel 1.",
          "en": "Add the olive oil. Set 5 min / 120°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 120,
          "time": 300
        },
        "timer": 300
      },
      {
        "id": "step_012",
        "order": 3,
        "instruction": {
          "es": "Añadir los tomates troceados, el caldo, el azúcar y la sal. Programar 15 min / 100°C / Vel 1.",
          "en": "Add the chopped tomatoes, broth, sugar, and salt. Set 15 min / 100°C / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": 100,
          "time": 900
        },
        "timer": 900
      },
      {
        "id": "step_013",
        "order": 4,
        "instruction": {
          "es": "Añadir la albahaca y la pimienta. Triturar programando 1 min / Vel 5-7-10 progresivamente.",
          "en": "Add the basil and pepper. Blend by setting 1 min / Speed 5-7-10 progressively."
        },
        "thermomixSettings": {
          "speed": 10,
          "time": 60
        },
        "timer": 60
      },
      {
        "id": "step_014",
        "order": 5,
        "instruction": {
          "es": "Añadir la nata líquida si se desea. Programar 30 seg / 90°C / Vel 3 para integrar.",
          "en": "Add the cooking cream if desired. Set 30 sec / 90°C / Speed 3 to combine."
        },
        "thermomixSettings": {
          "speed": 3,
          "temperature": 90,
          "time": 30
        },
        "timer": 30,
        "tip": {
          "es": "Si prefieres la versión vegana, omite la nata o sustitúyela por leche de coco.",
          "en": "For a vegan version, skip the cream or substitute with coconut milk."
        }
      }
    ],
    "tips": {
      "es": "Usar tomates de pera maduros da el mejor sabor. En temporada, los tomates del huerto hacen una diferencia enorme.",
      "en": "Using ripe plum tomatoes gives the best flavor. In season, garden tomatoes make a huge difference."
    },
    "origin": {
      "es": "Italia",
      "en": "Italy"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_026",
    "slug": "croquettes",
    "title": {
      "es": "Croquetas de jamón",
      "en": "Ham Croquettes"
    },
    "description": {
      "es": "Las croquetas de jamón más cremosas, con una bechamel perfecta hecha en la Thermomix. Crujientes por fuera y fundentes por dentro.",
      "en": "The creamiest ham croquettes, with a perfect bechamel made in the Thermomix. Crispy outside and melting inside."
    },
    "image": "croquettes.jpg",
    "category": "starters",
    "tags": [
      "comfort-food",
      "party",
      "autumn",
      "winter"
    ],
    "difficulty": "hard",
    "totalTime": 180,
    "prepTime": 30,
    "cookTime": 150,
    "servings": 30,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "butterfly",
      "spatula",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_026_ing_01",
        "name": {
          "es": "mantequilla",
          "en": "butter"
        },
        "amount": 80,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_026_ing_02",
        "name": {
          "es": "harina de trigo",
          "en": "all-purpose flour"
        },
        "amount": 80,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_026_ing_03",
        "name": {
          "es": "leche entera",
          "en": "whole milk"
        },
        "amount": 750,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_026_ing_04",
        "name": {
          "es": "jamón serrano picado",
          "en": "diced serrano ham"
        },
        "amount": 200,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_026_ing_05",
        "name": {
          "es": "nuez moscada",
          "en": "nutmeg"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "rec_026_ing_06",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "pizca",
        "optional": false
      },
      {
        "id": "rec_026_ing_07",
        "name": {
          "es": "huevos batidos (para empanar)",
          "en": "beaten eggs (for coating)"
        },
        "amount": 3,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_026_ing_08",
        "name": {
          "es": "pan rallado (para empanar)",
          "en": "breadcrumbs (for coating)"
        },
        "amount": 200,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_026_ing_09",
        "name": {
          "es": "aceite de girasol (para freír)",
          "en": "sunflower oil (for frying)"
        },
        "amount": 500,
        "unit": "ml",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "rec_026_step_01",
        "order": 1,
        "instruction": {
          "es": "Colocar la mariposa en las cuchillas. Añadir la mantequilla al vaso. Programar 2 min / 90°C / Vel 2.",
          "en": "Attach the butterfly whisk to the blades. Add the butter to the bowl. Set 2 min / 90°C / Speed 2."
        },
        "thermomixSettings": {
          "speed": 2,
          "temperature": 90,
          "time": 120,
          "accessory": "butterfly"
        },
        "timer": 120
      },
      {
        "id": "rec_026_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir la harina. Programar 2 min / 90°C / Vel 3.",
          "en": "Add the flour. Set 2 min / 90°C / Speed 3."
        },
        "thermomixSettings": {
          "speed": 3,
          "temperature": 90,
          "time": 120
        },
        "timer": 120
      },
      {
        "id": "rec_026_step_03",
        "order": 3,
        "instruction": {
          "es": "Añadir la leche, la sal y la nuez moscada. Programar 10 min / 90°C / Vel 4.",
          "en": "Add the milk, salt and nutmeg. Set 10 min / 90°C / Speed 4."
        },
        "thermomixSettings": {
          "speed": 4,
          "temperature": 90,
          "time": 600
        },
        "timer": 600
      },
      {
        "id": "rec_026_step_04",
        "order": 4,
        "instruction": {
          "es": "Retirar la mariposa. Añadir el jamón picado. Programar 10 seg / Vel 3 / Giro inverso.",
          "en": "Remove the butterfly whisk. Add the diced ham. Set 10 sec / Speed 3 / Reverse."
        },
        "thermomixSettings": {
          "speed": 3,
          "time": 10,
          "direction": "counterclockwise"
        }
      },
      {
        "id": "rec_026_step_05",
        "order": 5,
        "instruction": {
          "es": "Verter la masa en una bandeja, cubrir con film al contacto y refrigerar al menos 2 horas (idealmente toda la noche).",
          "en": "Pour the mixture onto a tray, cover with cling film touching the surface and refrigerate at least 2 hours (ideally overnight)."
        },
        "tip": {
          "es": "El film debe tocar la masa para que no forme costra.",
          "en": "The cling film must touch the mixture to prevent a crust from forming."
        }
      },
      {
        "id": "rec_026_step_06",
        "order": 6,
        "instruction": {
          "es": "Formar las croquetas con las manos enharinadas. Pasar por huevo batido y pan rallado.",
          "en": "Shape the croquettes with floured hands. Coat in beaten egg and breadcrumbs."
        }
      },
      {
        "id": "rec_026_step_07",
        "order": 7,
        "instruction": {
          "es": "Freír en abundante aceite caliente (180°C) hasta que estén doradas. Escurrir sobre papel absorbente.",
          "en": "Deep fry in plenty of hot oil (180°C) until golden. Drain on paper towels."
        }
      }
    ],
    "tips": {
      "es": "Se pueden congelar antes de empanar. Para freír directamente del congelador, bajar la temperatura del aceite a 170°C y freír un poco más de tiempo.",
      "en": "They can be frozen before coating. To fry directly from frozen, lower the oil temperature to 170°C and fry a bit longer."
    },
    "origin": {
      "es": "España",
      "en": "Spain"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_025",
    "slug": "gazpacho",
    "title": {
      "es": "Gazpacho andaluz",
      "en": "Andalusian Gazpacho"
    },
    "description": {
      "es": "El gazpacho andaluz tradicional: una sopa fría de tomate, pimiento, pepino y pan, perfecta para el verano. Refrescante, nutritivo y listo en minutos.",
      "en": "Traditional Andalusian gazpacho: a cold soup of tomato, pepper, cucumber and bread, perfect for summer. Refreshing, nutritious and ready in minutes."
    },
    "image": "gazpacho.jpg",
    "category": "starters",
    "tags": [
      "vegan",
      "dairy-free",
      "quick",
      "summer",
      "meal-prep"
    ],
    "difficulty": "easy",
    "totalTime": 10,
    "prepTime": 8,
    "cookTime": 2,
    "servings": 6,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_025_ing_01",
        "name": {
          "es": "tomates maduros",
          "en": "ripe tomatoes"
        },
        "amount": 1000,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_025_ing_02",
        "name": {
          "es": "pimiento verde",
          "en": "green pepper"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_025_ing_03",
        "name": {
          "es": "pepino",
          "en": "cucumber"
        },
        "amount": 100,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_025_ing_04",
        "name": {
          "es": "diente de ajo",
          "en": "garlic clove"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_025_ing_05",
        "name": {
          "es": "pan del día anterior",
          "en": "day-old bread"
        },
        "amount": 50,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_025_ing_06",
        "name": {
          "es": "aceite de oliva virgen extra",
          "en": "extra virgin olive oil"
        },
        "amount": 50,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_025_ing_07",
        "name": {
          "es": "vinagre de Jerez",
          "en": "sherry vinegar"
        },
        "amount": 20,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_025_ing_08",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "rec_025_ing_09",
        "name": {
          "es": "agua fría",
          "en": "cold water"
        },
        "amount": 100,
        "unit": "ml",
        "optional": true
      }
    ],
    "steps": [
      {
        "id": "rec_025_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir todos los ingredientes troceados al vaso. Programar 1 min / Vel 5, aumentando progresivamente.",
          "en": "Add all chopped ingredients to the bowl. Set 1 min / Speed 5, increasing progressively."
        },
        "thermomixSettings": {
          "speed": 5,
          "time": 60
        },
        "timer": 60
      },
      {
        "id": "rec_025_step_02",
        "order": 2,
        "instruction": {
          "es": "Programar 1 min / Vel 10 para obtener una textura completamente fina.",
          "en": "Set 1 min / Speed 10 for a completely smooth texture."
        },
        "thermomixSettings": {
          "speed": 10,
          "time": 60
        },
        "timer": 60
      },
      {
        "id": "rec_025_step_03",
        "order": 3,
        "instruction": {
          "es": "Probar y ajustar de sal, vinagre o agua según preferencia. Colar si se desea una textura más fina.",
          "en": "Taste and adjust salt, vinegar or water to preference. Strain if a finer texture is desired."
        },
        "tip": {
          "es": "Para un gazpacho más suave, colar con un colador fino. Para más rústico, servir sin colar.",
          "en": "For a smoother gazpacho, strain through a fine sieve. For a more rustic version, serve unstrained."
        }
      }
    ],
    "tips": {
      "es": "El gazpacho mejora tras reposar al menos 2 horas en la nevera. Servir con toppings picados: huevo duro, pepino, pimiento y picatostes.",
      "en": "Gazpacho improves after resting at least 2 hours in the fridge. Serve with chopped toppings: hard-boiled egg, cucumber, pepper and croutons."
    },
    "origin": {
      "es": "España",
      "en": "Spain"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_027",
    "slug": "guacamole",
    "title": {
      "es": "Guacamole",
      "en": "Guacamole"
    },
    "description": {
      "es": "Guacamole fresco y sabroso con trozos de aguacate, tomate y cilantro. Listo en segundos con la Thermomix, perfecto para picar o acompañar tacos.",
      "en": "Fresh and tasty guacamole with chunks of avocado, tomato and coriander. Ready in seconds with the Thermomix, perfect for snacking or with tacos."
    },
    "image": "guacamole.jpg",
    "category": "starters",
    "tags": [
      "vegan",
      "gluten-free",
      "dairy-free",
      "quick",
      "party",
      "summer"
    ],
    "difficulty": "easy",
    "totalTime": 5,
    "prepTime": 4,
    "cookTime": 1,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "spatula"
    ],
    "ingredients": [
      {
        "id": "rec_027_ing_01",
        "name": {
          "es": "aguacates maduros",
          "en": "ripe avocados"
        },
        "amount": 3,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_027_ing_02",
        "name": {
          "es": "tomate",
          "en": "tomato"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_027_ing_03",
        "name": {
          "es": "cebolla morada",
          "en": "red onion"
        },
        "amount": 0.5,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_027_ing_04",
        "name": {
          "es": "chile jalapeño (sin semillas)",
          "en": "jalapeño pepper (deseeded)"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": true
      },
      {
        "id": "rec_027_ing_05",
        "name": {
          "es": "cilantro fresco",
          "en": "fresh coriander"
        },
        "amount": 15,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_027_ing_06",
        "name": {
          "es": "zumo de lima",
          "en": "lime juice"
        },
        "amount": 2,
        "unit": "cda",
        "optional": false
      },
      {
        "id": "rec_027_ing_07",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "rec_027_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir la cebolla, el cilantro y el jalapeño al vaso. Programar 3 seg / Vel 4.",
          "en": "Add the onion, coriander and jalapeño to the bowl. Set 3 sec / Speed 4."
        },
        "thermomixSettings": {
          "speed": 4,
          "time": 3
        }
      },
      {
        "id": "rec_027_step_02",
        "order": 2,
        "instruction": {
          "es": "Añadir los aguacates troceados, el tomate picado, el zumo de lima y la sal. Programar 5 seg / Vel 3 / Giro inverso.",
          "en": "Add the chopped avocados, diced tomato, lime juice and salt. Set 5 sec / Speed 3 / Reverse."
        },
        "thermomixSettings": {
          "speed": 3,
          "time": 5,
          "direction": "counterclockwise"
        },
        "tip": {
          "es": "Usar velocidad baja y giro inverso para mantener trozos. No triturar en exceso.",
          "en": "Use low speed and reverse to keep chunks. Don't over-blend."
        }
      }
    ],
    "tips": {
      "es": "Servir inmediatamente para evitar que se oxide. Si necesitas guardarlo, cubrir con film al contacto y refrigerar. El jalapeño es opcional: sin él queda suave para toda la familia.",
      "en": "Serve immediately to prevent oxidation. If you need to store it, cover with cling film touching the surface and refrigerate. The jalapeño is optional: without it, it's mild for the whole family."
    },
    "origin": {
      "es": "México",
      "en": "Mexico"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  },
  {
    "id": "rec_024",
    "slug": "spanish-tortilla",
    "title": {
      "es": "Tortilla española",
      "en": "Spanish Omelette"
    },
    "description": {
      "es": "La clásica tortilla española de patatas y cebolla, con las patatas cocinadas al vapor en el Varoma para una versión más ligera. Jugosa por dentro y dorada por fuera.",
      "en": "The classic Spanish potato and onion omelette, with potatoes steamed in the Varoma for a lighter version. Juicy inside and golden outside."
    },
    "image": "spanish-tortilla.jpg",
    "category": "starters",
    "tags": [
      "vegetarian",
      "gluten-free",
      "comfort-food",
      "spring",
      "weeknight"
    ],
    "difficulty": "medium",
    "totalTime": 40,
    "prepTime": 10,
    "cookTime": 30,
    "servings": 4,
    "thermomixModel": [
      "TM5",
      "TM6"
    ],
    "accessories": [
      "varoma",
      "measuring_cup"
    ],
    "ingredients": [
      {
        "id": "rec_024_ing_01",
        "name": {
          "es": "patatas",
          "en": "potatoes"
        },
        "amount": 600,
        "unit": "g",
        "optional": false
      },
      {
        "id": "rec_024_ing_02",
        "name": {
          "es": "cebolla grande",
          "en": "large onion"
        },
        "amount": 1,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_024_ing_03",
        "name": {
          "es": "huevos",
          "en": "eggs"
        },
        "amount": 6,
        "unit": "unidad",
        "optional": false
      },
      {
        "id": "rec_024_ing_04",
        "name": {
          "es": "aceite de oliva",
          "en": "olive oil"
        },
        "amount": 50,
        "unit": "ml",
        "optional": false
      },
      {
        "id": "rec_024_ing_05",
        "name": {
          "es": "sal",
          "en": "salt"
        },
        "amount": 1,
        "unit": "cdta",
        "optional": false
      },
      {
        "id": "rec_024_ing_06",
        "name": {
          "es": "agua",
          "en": "water"
        },
        "amount": 500,
        "unit": "ml",
        "optional": false
      }
    ],
    "steps": [
      {
        "id": "rec_024_step_01",
        "order": 1,
        "instruction": {
          "es": "Añadir el agua al vaso. Colocar las patatas peladas y cortadas en rodajas finas y la cebolla en el Varoma. Salar ligeramente.",
          "en": "Add the water to the bowl. Place the peeled and thinly sliced potatoes and onion in the Varoma. Lightly salt."
        },
        "thermomixSettings": {
          "accessory": "varoma"
        }
      },
      {
        "id": "rec_024_step_02",
        "order": 2,
        "instruction": {
          "es": "Programar 25 min / Temperatura Varoma / Vel 1.",
          "en": "Set 25 min / Varoma temperature / Speed 1."
        },
        "thermomixSettings": {
          "speed": 1,
          "temperature": "varoma",
          "time": 1500
        },
        "timer": 1500
      },
      {
        "id": "rec_024_step_03",
        "order": 3,
        "instruction": {
          "es": "Retirar las patatas y la cebolla del Varoma y dejar templar en un bol grande.",
          "en": "Remove the potatoes and onion from the Varoma and let them cool slightly in a large bowl."
        }
      },
      {
        "id": "rec_024_step_04",
        "order": 4,
        "instruction": {
          "es": "Batir los huevos con una pizca de sal y mezclar con las patatas y la cebolla.",
          "en": "Beat the eggs with a pinch of salt and mix with the potatoes and onion."
        }
      },
      {
        "id": "rec_024_step_05",
        "order": 5,
        "instruction": {
          "es": "Calentar el aceite en una sartén antiadherente a fuego medio. Verter la mezcla y cocinar 4 min por cada lado hasta que esté dorada.",
          "en": "Heat the oil in a non-stick pan over medium heat. Pour the mixture and cook 4 min on each side until golden."
        },
        "tip": {
          "es": "Para darle la vuelta, usar un plato grande. La tortilla se termina en sartén, no en la Thermomix.",
          "en": "To flip, use a large plate. The omelette is finished in a pan, not in the Thermomix."
        }
      }
    ],
    "tips": {
      "es": "Para una tortilla más jugosa, no cocinar demasiado los huevos: que el centro quede ligeramente cremoso. Dejar reposar 5 minutos antes de cortar.",
      "en": "For a juicier omelette, don't overcook the eggs: the center should be slightly creamy. Let it rest 5 minutes before cutting."
    },
    "origin": {
      "es": "España",
      "en": "Spain"
    },
    "createdAt": "2026-03-31",
    "updatedAt": "2026-03-31"
  }
];
