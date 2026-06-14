const PRODUCTOS = [
  // Suplementos y Vitaminas (6)
  {
    id: 1,
    nombre: "Cápsulas de Moringa Orgánica",
    categoria: "suplementos",
    categoriaLabel: "Suplementos y Vitaminas",
    precio: 52000,
    descripcionCorta: "Superalimento rico en antioxidantes, hierro y vitaminas esenciales para aumentar tu vitalidad y fortalecer defensas.",
    descripcionLarga: "Nuestras cápsulas de Moringa están elaboradas con hojas 100% orgánicas seleccionadas y deshidratadas a baja temperatura para conservar todos sus nutrientes. Conocida como el 'árbol de la vida', la moringa es una fuente inigualable de nutrientes esenciales, promoviendo el bienestar integral del cuerpo de forma completamente natural.",
    beneficios: [
      "Alto contenido de hierro y calcio naturales",
      "Potente efecto antioxidante y antiinflamatorio",
      "Ayuda a regular los niveles de azúcar en la sangre",
      "Fortalece el sistema inmunológico notablemente"
    ],
    modoUso: "Tomar 2 cápsulas al día, preferiblemente por la mañana con el desayuno.",
    ingredientes: "Hojas deshidratadas y micropulverizadas de Moringa orgánica (Moringa oleifera) en cápsula vegetal.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 2,
    nombre: "Vitamina C Natural (Camu Camu)",
    categoria: "suplementos",
    categoriaLabel: "Suplementos y Vitaminas",
    precio: 64000,
    descripcionCorta: "Vitamina C concentrada extraída del fruto amazónico Camu Camu para máxima absorción y defensa.",
    descripcionLarga: "El Camu Camu es el fruto con mayor concentración de vitamina C del planeta. Este suplemento ofrece una excelente absorción biológica en comparación con el ácido ascórbico sintético, ayudando a proteger tus células contra el daño oxidativo y promoviendo la producción de colágeno.",
    beneficios: [
      "Hasta 40 veces más vitamina C que la naranja",
      "Estimula la síntesis de colágeno para piel y articulaciones",
      "Poderosa protección antioxidante contra radicales libres",
      "Mejora la absorción de hierro en la dieta"
    ],
    modoUso: "Tomar 1 cápsula al día acompañada de agua o jugo natural.",
    ingredientes: "Extracto deshidratado de Camu Camu (Myrciaria dubia) estandarizado, cápsula vegetal.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 3,
    nombre: "Espirulina en Tabletas",
    categoria: "suplementos",
    categoriaLabel: "Suplementos y Vitaminas",
    precio: 74000,
    descripcionCorta: "Alga unicelular considerada un superalimento por su alta concentración de proteínas y clorofila.",
    descripcionLarga: "La Espirulina es una microalga de color verde azulado que contiene una cantidad excepcional de proteínas de alta calidad, vitaminas del complejo B, hierro y aminoácidos esenciales. Es el suplemento ideal para deportistas, vegetarianos y personas que buscan un extra de energía limpia en su día a día.",
    beneficios: [
      "Excelente fuente de proteínas vegetales (65% de su peso)",
      "Combate la fatiga y aporta energía física y mental",
      "Favorece la desintoxicación del organismo (clorofila)",
      "Ideal para enriquecer dietas vegetarianas y veganas"
    ],
    modoUso: "Tomar de 3 a 4 tabletas diarias distribuidas antes de las comidas principales.",
    ingredientes: "Espirulina pura (Arthrospira platensis) prensada en frío sin aditivos químicos.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 4,
    nombre: "Colágeno Hidrolizado Natural",
    categoria: "suplementos",
    categoriaLabel: "Suplementos y Vitaminas",
    precio: 92000,
    descripcionCorta: "Colágeno soluble enriquecido con magnesio para el cuidado de articulaciones, huesos, piel y cabello.",
    descripcionLarga: "Nuestro Colágeno Hidrolizado ha sido procesado mediante hidrólisis enzimática para garantizar la máxima absorción por parte del organismo. Enriquecido con magnesio y camu camu natural, ayuda a mantener la elasticidad de la piel, la salud articular y la resistencia de uñas y cabello.",
    beneficios: [
      "Promueve la flexibilidad y salud de las articulaciones",
      "Mejora la hidratación y elasticidad de la piel",
      "Fortalece las uñas frágiles y estimula el crecimiento capilar",
      "Fácil disolución en agua, batidos o jugos"
    ],
    modoUso: "Disolver una cucharada rasa (10g) en un vaso de agua, jugo o batido por las mañanas.",
    ingredientes: "Colágeno hidrolizado de origen bovino tipo I, carbonato de magnesio, polvo de camu camu.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 5,
    nombre: "Omega 3 de Origen Vegetal",
    categoria: "suplementos",
    categoriaLabel: "Suplementos y Vitaminas",
    precio: 80000,
    descripcionCorta: "Ácidos grasos esenciales obtenidos de microalgas y chía para la salud cardiovascular y cerebral.",
    descripcionLarga: "Una alternativa sostenible y libre de metales pesados al aceite de pescado tradicional. Nuestro Omega 3 proviene de microalgas cultivadas en ambientes controlados y aceite de chía prensado en frío, aportando DHA y EPA esenciales para el cerebro, la vista y el corazón sin regusto a pescado.",
    beneficios: [
      "Apoya el funcionamiento cerebral y la memoria",
      "Contribuye a regular los niveles de colesterol y triglicéridos",
      "100% libre de metales pesados y amigable con el océano",
      "Fórmula apta para veganos y vegetarianos"
    ],
    modoUso: "Tomar 2 cápsulas blandas al día con una comida principal.",
    ingredientes: "Aceite de microalga (Schizochytrium sp.), aceite de chía prensado en frío, cápsula blanda vegetal.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 6,
    nombre: "Complejo B de Extractos Naturales",
    categoria: "suplementos",
    categoriaLabel: "Suplementos y Vitaminas",
    precio: 58000,
    descripcionCorta: "Fórmula de amplio espectro para el equilibrio del sistema nervioso y la producción de energía celular.",
    descripcionLarga: "Complejo vitamínico B obtenido a partir de fuentes biológicas activas como germinados de quinua y levadura nutricional. Este método natural de obtención asegura que el cuerpo asimile las vitaminas de manera rápida y equilibrada, mejorando tu respuesta al estrés cotidiano.",
    beneficios: [
      "Ayuda a reducir el estrés y la fatiga mental",
      "Optimiza el metabolismo de los alimentos en energía útil",
      "Favorece la salud de la piel y el sistema nervioso",
      "Excelente fuente de vitaminas B1, B2, B3, B5, B6, B9 y B12"
    ],
    modoUso: "Tomar 1 cápsula diaria con el desayuno.",
    ingredientes: "Polvo de germinado de quinua rico en vitaminas B, levadura de cerveza inactiva en cápsula vegetal.",
    imagen: "img/placeholder.svg"
  },

  // Tés e Infusiones (6)
  {
    id: 7,
    nombre: "Té de Manzanilla Orgánica en Hebras",
    categoria: "tes",
    categoriaLabel: "Tés e Infusiones",
    precio: 28000,
    descripcionCorta: "Flores enteras de manzanilla seleccionadas a mano para una infusión ultra relajante y digestiva.",
    descripcionLarga: "Nuestra infusión se compone exclusivamente de flores enteras de manzanilla seleccionadas de campos ecológicos. Sin triturar, conserva sus aceites esenciales intactos para ofrecerte una taza aromática y reconfortante, ideal para calmar el cuerpo y la mente antes de dormir o después de comer.",
    beneficios: [
      "Facilita la digestión y reduce la hinchazón estomacal",
      "Posee propiedades relajantes naturales que inducen el sueño",
      "Flores 100% enteras sin aditivos ni aromatizantes artificiales",
      "Naturalmente libre de cafeína"
    ],
    modoUso: "Agregar una cucharadita de flores en una taza de agua hirviendo. Dejar reposar tapado por 5-7 minutos y colar.",
    ingredientes: "Flores de manzanilla enteras de cultivo orgánico (Matricaria chamomilla).",
    imagen: "img/placeholder.svg"
  },
  {
    id: 8,
    nombre: "Infusión de Jengibre y Limón Silvestre",
    categoria: "tes",
    categoriaLabel: "Tés e Infusiones",
    precio: 30000,
    descripcionCorta: "Mezcla picante y cítrica formulada para activar tu energía y reconfortar tus defensas.",
    descripcionLarga: "Una combinación equilibrada de jengibre deshidratado y cáscara de limón con un toque de limoncillo. Es una bebida estimulante natural y libre de teína, perfecta para tomar caliente en días fríos o helada como un refresco revitalizante en las tardes.",
    beneficios: [
      "Propiedades termogénicas y digestivas del jengibre",
      "Rico en antioxidantes y vitamina C natural del limón",
      "Ideal para aliviar molestias de garganta y resfriados",
      "Sabor vibrante, aromático y refrescante"
    ],
    modoUso: "Infundir 1 cucharadita de la mezcla en agua a 95°C durante 5 a 8 minutos. Endulzar al gusto.",
    ingredientes: "Raíz de jengibre, cáscara de limón, zacate de limón (limoncillo) y hojas de menta silvestre.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 9,
    nombre: "Té Verde Matcha Ceremonial Premium",
    categoria: "tes",
    categoriaLabel: "Tés e Infusiones",
    precio: 52000,
    descripcionCorta: "Té verde de origen japonés molido en piedra, de grado ceremonial para una energía enfocada.",
    descripcionLarga: "Matcha cultivado a la sombra en Uji, Japón. Al consumir la hoja entera pulverizada, aprovechas el 100% de los antioxidantes y la L-teanina, un aminoácido que promueve un estado de calma alerta y claridad mental prolongada, sin los bajones de energía del café.",
    beneficios: [
      "Concentración masiva de antioxidantes (EGCG)",
      "Energía limpia y sostenida por más de 4 horas",
      "Ayuda a acelerar el metabolismo de manera segura",
      "Color verde brillante intenso y sabor umami dulce"
    ],
    modoUso: "Batir 1g de matcha en agua caliente (80°C) usando un batidor de bambú hasta crear una espuma fina.",
    ingredientes: "Hojas de té verde orgánico tencha molidas en piedra 100% puras (Camellia sinensis).",
    imagen: "img/placeholder.svg"
  },
  {
    id: 10,
    nombre: "Té de Valeriana y Toronjil (Dulces Sueños)",
    categoria: "tes",
    categoriaLabel: "Tés e Infusiones",
    precio: 34000,
    descripcionCorta: "Mezcla herbal reconfortante diseñada para aliviar el estrés y promover un descanso profundo.",
    descripcionLarga: "La sinergia perfecta de raíces de valeriana, flores de lavanda y hojas de toronjil. Esta infusión ha sido formulada especialmente para inducir un estado de paz, ayudando a conciliar un sueño reparador en momentos de estrés o insomnio ocasional.",
    beneficios: [
      "Ayuda a conciliar el sueño de forma natural y sin dependencia",
      "Reduce la ansiedad y el estrés acumulado durante el día",
      "Sabor suave enriquecido con notas florales de lavanda",
      "Libre de colorantes, saborizantes o conservadores"
    ],
    modoUso: "Tomar una taza 30 minutos antes de acostarse. Infundir una cucharadita en agua hirviendo durante 7-10 minutos.",
    ingredientes: "Raíz de valeriana, hojas de toronjil, pasiflora, hojas de menta y flores de lavanda.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 11,
    nombre: "Infusión Herbal Digestiva",
    categoria: "tes",
    categoriaLabel: "Tés e Infusiones",
    precio: 32000,
    descripcionCorta: "Mix tradicional de menta, hinojo y anís estrella para aliviar la pesadez estomacal.",
    descripcionLarga: "Nuestra infusión digestiva combina plantas carminativas y antiespasmódicas de cultivo ecológico. Es ideal para tomar después de comidas copiosas, ayudando a reducir la formación de gases y facilitando el proceso digestivo de forma rápida y reconfortante.",
    beneficios: [
      "Alivia la pesadez, acidez y espasmos estomacales",
      "El hinojo y el anís reducen notablemente los gases",
      "La menta fresca aporta alivio instantáneo y buen aliento",
      "Excelente para toda la familia después de almorzar"
    ],
    modoUso: "Infundir en agua hirviendo por 5 a 7 minutos. Consumir tibio después de las comidas.",
    ingredientes: "Hojas de menta piperita, semillas de hinojo, anís estrella y cáscara de naranja dulce.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 12,
    nombre: "Té de Cúrcuma Dorada y Especias",
    categoria: "tes",
    categoriaLabel: "Tés e Infusiones",
    precio: 38000,
    descripcionCorta: "Mezcla ayurvédica de cúrcuma, canela y pimienta negra para reconfortar tu cuerpo.",
    descripcionLarga: "Inspirado en la tradicional 'Leche Dorada' de la medicina Ayurveda. La cúrcuma se combina con pimienta negra (indispensable para activar la absorción de la curcumina) y canela de Ceilán, logrando una infusión intensamente aromática con propiedades antiinflamatorias excepcionales.",
    beneficios: [
      "Poderoso antiinflamatorio y antioxidante natural",
      "Fortalece las articulaciones y el sistema inmune",
      "Sabor especiado, reconfortante y ligeramente picante",
      "Ideal para tomar con leche vegetal caliente y un toque de miel"
    ],
    modoUso: "Agregar 1 cucharadita a agua o leche vegetal hirviendo. Cocinar a fuego lento 2 minutos, reposar y colar.",
    ingredientes: "Cúrcuma en rodajas deshidratada, astillas de canela de Ceilán, cardamomo entero y pimienta negra.",
    imagen: "img/placeholder.svg"
  },

  // Cuidado Personal (6)
  {
    id: 13,
    nombre: "Jabón Artesanal de Avena y Miel de Abejas",
    categoria: "cuidado",
    categoriaLabel: "Cuidado Personal",
    precio: 24000,
    descripcionCorta: "Limpieza extrasuave y exfoliación delicada para pieles sensibles y secas.",
    descripcionLarga: "Elaborado mediante saponificación en frío para conservar las propiedades de sus ingredientes naturales. La avena molida proporciona una exfoliación física muy sutil que remueve células muertas, mientras que la miel orgánica humecta profundamente y calma las irritaciones de la piel.",
    beneficios: [
      "Limpia sin resecar ni alterar el pH natural de la piel",
      "Exfoliación suave apta para rostro y cuerpo entero",
      "Propiedades antisépticas e hidratantes de la miel pura",
      "Fórmula biodegradable y libre de sulfatos o parabenos"
    ],
    modoUso: "Humedecer la piel y el jabón, frotar hasta hacer espuma, aplicar y enjuagar con abundante agua.",
    ingredientes: "Aceite de oliva saponificado, aceite de coco, avena coloidal, miel de abejas orgánica y aceite esencial de almendras.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 14,
    nombre: "Shampoo Herbal de Romero y Biotina",
    categoria: "cuidado",
    categoriaLabel: "Cuidado Personal",
    precio: 48000,
    descripcionCorta: "Shampoo natural concentrado para estimular el crecimiento y frenar la caída del cabello.",
    descripcionLarga: "Formulado con extracto concentrado de romero y ortiga cultivados orgánicamente, combinado con biotina vegetal. Limpia los folículos pilosos a profundidad, mejorando la circulación sanguínea en el cuero cabelludo para lograr un cabello notablemente más grueso, fuerte y saludable.",
    beneficios: [
      "Estimula activamente el crecimiento de nuevo cabello",
      "Reduce drásticamente la caída y fortalece la fibra capilar",
      "Controla el exceso de grasa y combate la caspa leve",
      "Libre de sal, sulfatos, siliconas y conservadores sintéticos"
    ],
    modoUso: "Aplicar sobre el cuero cabelludo húmedo, masajear con la yema de los dedos durante 2 minutos y enjuagar.",
    ingredientes: "Infusión de romero (Rosmarinus officinalis) y ortiga, tensoactivos derivados del coco, biotina, provitamina B5 y aceite esencial de romero.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 15,
    nombre: "Crema Facial de Aloe Vera y Ácido Hialurónico",
    categoria: "cuidado",
    categoriaLabel: "Cuidado Personal",
    precio: 58000,
    descripcionCorta: "Gel crema de rápida absorción que hidrata intensamente y calma todo tipo de piel.",
    descripcionLarga: "Una fórmula ultraligera que combina el poder regenerador del gel de aloe vera orgánico con la hidratación profunda del ácido hialurónico de origen vegetal. Absorbe al instante sin dejar sensación grasosa, ideal para restaurar la barrera de hidratación cutánea y calmar la piel después del sol.",
    beneficios: [
      "Hidratación profunda por 24 horas continuas",
      "Textura gel-crema ideal para pieles mixtas o grasas",
      "Calma rojeces, quemaduras solares e irritaciones",
      "Aporta elasticidad y ayuda a prevenir líneas de expresión"
    ],
    modoUso: "Aplicar una pequeña cantidad sobre el rostro y cuello limpios con suaves masajes ascendentes por la mañana y noche.",
    ingredientes: "Gel de Aloe vera reconstituido, ácido hialurónico vegetal, extracto de manzanilla, aceite de jojoba y vitamina E.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 16,
    nombre: "Desodorante Natural de Carbón y Coco",
    categoria: "cuidado",
    categoriaLabel: "Cuidado Personal",
    precio: 36000,
    descripcionCorta: "Protección efectiva contra el mal olor usando ingredientes naturales y libres de aluminio.",
    descripcionLarga: "Di adiós a los antitranspirantes químicos. Nuestro desodorante natural utiliza carbón activado y arrurruz para absorber la humedad, junto con aceites esenciales antibacterianos que neutralizan el mal olor de raíz sin bloquear la transpiración natural de tu cuerpo.",
    beneficios: [
      "100% libre de sales de aluminio, parabenos y alcohol",
      "El carbón activado purifica la zona y absorbe toxinas",
      "Aroma fresco unisex a base de aceites esenciales",
      "No mancha la ropa y protege durante todo el día"
    ],
    modoUso: "Aplicar una capa delgada en la axila limpia y seca. Masajear suavemente si es necesario.",
    ingredientes: "Aceite de coco, cera de abejas, fécula de arrurruz, bicarbonato de sodio en baja concentración, carbón activado y aceite esencial de árbol de té.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 17,
    nombre: "Aceite Puro de Argán de Marruecos",
    categoria: "cuidado",
    categoriaLabel: "Cuidado Personal",
    precio: 68000,
    descripcionCorta: "El 'oro líquido' para nutrir a profundidad la piel, el cabello y las uñas secas.",
    descripcionLarga: "Aceite de argán 100% puro obtenido mediante primera presión en frío. De textura ligera y fácil absorción, es extremadamente rico en vitamina E y ácidos grasos esenciales. Nutre las puntas del cabello seco, suaviza las cutículas e hidrata las zonas más secas del cuerpo de manera extraordinaria.",
    beneficios: [
      "Repara las puntas abiertas y aporta brillo sedoso al cabello",
      "Humectante facial y corporal antiedad de alta eficacia",
      "Fortalece uñas quebradizas y ablanda las cutículas",
      "100% puro, sin refinar, sin fragancias artificiales"
    ],
    modoUso: "Cabello: Aplicar unas gotas de medios a puntas. Rostro/Cuerpo: Masajear unas gotas sobre la piel limpia.",
    ingredientes: "Aceite de semilla de Argán 100% puro (Argania spinosa) de cultivo biológico.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 18,
    nombre: "Bálsamo Labial de Cera de Abeja y Cacao",
    categoria: "cuidado",
    categoriaLabel: "Cuidado Personal",
    precio: 18000,
    descripcionCorta: "Hidratación intensiva y protección natural contra labios partidos o resecos.",
    descripcionLarga: "Un bálsamo ultra nutritivo formulado con manteca de cacao pura y cera de abejas local. Crea una barrera protectora de larga duración contra el frío, el viento y el sol, manteniendo la delicada piel de tus labios increíblemente suave, sana e hidratada.",
    beneficios: [
      "Repara rápidamente labios agrietados y resecos",
      "Sabor y aroma delicioso y natural a manteca de cacao",
      "Textura suave y de larga permanencia protectora",
      "Ingredientes 100% comestibles y seguros"
    ],
    modoUso: "Aplicar generosamente sobre los labios tantas veces como sea necesario durante el día.",
    ingredientes: "Manteca de cacao, cera de abejas pura, aceite de almendras dulces y vitamina E.",
    imagen: "img/placeholder.svg"
  },

  // Aceites Esenciales (6)
  {
    id: 19,
    nombre: "Aceite Esencial de Lavanda Francesa",
    categoria: "aceites",
    categoriaLabel: "Aceites Esenciales",
    precio: 56000,
    descripcionCorta: "Aceite esencial 100% puro de Lavanda, ideal para relajar la mente y conciliar el sueño.",
    descripcionLarga: "El aceite esencial de lavanda es el rey de la aromaterapia. Su aroma floral y dulce actúa directamente sobre el sistema nervioso, reduciendo el estrés, la tensión y ayudando a crear un ambiente pacífico óptimo para el descanso y la meditación.",
    beneficios: [
      "Alivia el insomnio, la ansiedad y los dolores de cabeza",
      "Apto para difusor, masajes (diluido) o baños relajantes",
      "Propiedades regeneradoras para calmar quemaduras leves",
      "Pureza garantizada mediante destilación al vapor"
    ],
    modoUso: "Difusor: Agregar 3-5 gotas en el agua. Masaje: Diluir 2 gotas en una cucharada de aceite conductor (coco o almendras).",
    ingredientes: "Aceite esencial puro de Lavanda (Lavandula angustifolia) destilado por corriente de vapor.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 20,
    nombre: "Aceite Esencial de Eucalipto Glóbulo",
    categoria: "aceites",
    categoriaLabel: "Aceites Esenciales",
    precio: 46000,
    descripcionCorta: "Aroma herbal y fresco que ayuda a purificar el aire y despejar las vías respiratorias.",
    descripcionLarga: "Destilado a partir de hojas seleccionadas de eucalipto. Su alto contenido en eucaliptol lo convierte en un excelente aliado durante el invierno, ayudando a purificar el ambiente y proporcionando una sensación de respiración despejada e higienizada.",
    beneficios: [
      "Ayuda a descongestionar las vías respiratorias en resfriados",
      "Purifica y desodoriza el aire en el hogar u oficina",
      "Aporta una sensación estimulante y refrescante al instante",
      "Excelente repelente de insectos natural"
    ],
    modoUso: "Inhalación: Añadir 3 gotas en un recipiente de agua caliente e inhalar el vapor. Difusor: 4-6 gotas.",
    ingredientes: "Aceite esencial 100% puro de Eucalipto (Eucalyptus globulus).",
    imagen: "img/placeholder.svg"
  },
  {
    id: 21,
    nombre: "Aceite Esencial de Árbol de Té Australiano",
    categoria: "aceites",
    categoriaLabel: "Aceites Esenciales",
    precio: 52000,
    descripcionCorta: "Poderoso antiséptico natural para combatir imperfecciones y cuidar la piel propensa al acné.",
    descripcionLarga: "El aceite de Árbol de Té (Tea Tree) es famoso mundialmente por sus increíbles propiedades purificantes, antibacterianas y antifúngicas. Es el remedio natural por excelencia para aplicar directamente sobre imperfecciones cutáneas, cuidar las uñas o desinfectar el hogar.",
    beneficios: [
      "Combate de forma efectiva brotes de acné y espinillas",
      "Ayuda a tratar hongos en uñas de manos y pies",
      "Purifica el cuero cabelludo graso o con caspa",
      "Ingrediente imprescindible en el botiquín natural"
    ],
    modoUso: "Imperfecciones: Aplicar 1 gota con un hisopo sobre el grano. Cabello: Añadir 2 gotas al shampoo de uso diario.",
    ingredientes: "Aceite esencial 100% puro de Árbol de Té (Melaleuca alternifolia).",
    imagen: "img/placeholder.svg"
  },
  {
    id: 22,
    nombre: "Aceite Esencial de Menta Piperita",
    categoria: "aceites",
    categoriaLabel: "Aceites Esenciales",
    precio: 44000,
    descripcionCorta: "Aceite ultra refrescante para aliviar el cansancio y mejorar la concentración.",
    descripcionLarga: "Un aceite dinámico con un intenso aroma mentolado. Proporciona un efecto refrescante inmediato sobre la piel y estimula la mente fatigada, siendo ideal para estudiar, trabajar o aliviar la tensión muscular después del ejercicio físico.",
    beneficios: [
      "Alivia dolores de cabeza y migrañas (aplicando diluido en sienes)",
      "Estimula la energía mental y combate la somnolencia",
      "Refresca y reconforta músculos fatigados o adoloridos",
      "Ayuda a calmar la sensación de náuseas e indigestión"
    ],
    modoUso: "Difusión: 3 gotas para activar el enfoque. Alivio muscular: Mezclar 3 gotas con aceite portador y masajear.",
    ingredientes: "Aceite esencial 100% puro de Menta (Mentha piperita).",
    imagen: "img/placeholder.svg"
  },
  {
    id: 23,
    nombre: "Aceite Esencial de Romero Quimiotipo Cineol",
    categoria: "aceites",
    categoriaLabel: "Aceites Esenciales",
    precio: 46000,
    descripcionCorta: "Fomenta la memoria y concentración, además de fortalecer el cabello desde la raíz.",
    descripcionLarga: "Destilado a partir de las sumidades floridas del romero. Tradicionalmente conocido como el aceite del recuerdo, es excelente para la memoria durante el estudio. En aplicación capilar, estimula la circulación ayudando a revitalizar cabellos débiles y apagados.",
    beneficios: [
      "Estimula la claridad mental, la memoria y el enfoque",
      "Excelente tónico capilar para prevenir el adelgazamiento",
      "Ayuda a aliviar dolores musculares y reumáticos",
      "Aroma herbal penetrante, limpio y vigorizante"
    ],
    modoUso: "Difusor: Colocar 4 gotas en sesiones de estudio. Capilar: Mezclar 2 gotas en aceite de argán y aplicar en cuero cabelludo.",
    ingredientes: "Aceite esencial puro de Romero (Rosmarinus officinalis).",
    imagen: "img/placeholder.svg"
  },
  {
    id: 24,
    nombre: "Kit de Aromaterapia 'Equilibrio y Bienestar'",
    categoria: "aceites",
    categoriaLabel: "Aceites Esenciales",
    precio: 184000,
    descripcionCorta: "Colección exclusiva de 5 aceites esenciales en estuche de madera artesanal.",
    descripcionLarga: "El set de regalo perfecto para iniciarse en el mundo de la aromaterapia. Incluye nuestros 5 aceites esenciales más populares y versátiles (Lavanda, Eucalipto, Árbol de Té, Menta y Romero) presentados en un elegante estuche de madera protectora para conservar su pureza.",
    beneficios: [
      "Incluye 5 aceites de 10ml 100% puros y de grado terapéutico",
      "Estuche de madera sostenible que los protege de la luz solar",
      "Guía básica ilustrada de uso incluida para principiantes",
      "Ahorro de más del 20% en comparación con la compra individual"
    ],
    modoUso: "Consultar la guía incluida para conocer recetas de mezclas y usos específicos para cada aceite.",
    ingredientes: "Frascos individuales de 10ml de aceites de Lavanda, Eucalipto, Árbol de Té, Menta y Romero.",
    imagen: "img/placeholder.svg"
  },

  // Superalimentos (6)
  {
    id: 25,
    nombre: "Semillas de Chía Orgánica",
    categoria: "superalimentos",
    categoriaLabel: "Superalimentos",
    precio: 36000,
    descripcionCorta: "Excelente fuente vegetal de fibra soluble, calcio y ácidos grasos Omega 3.",
    descripcionLarga: "Nuestras semillas de chía son de cultivo biológico certificado. Tienen una capacidad única de absorber agua y formar un gel mucilaginoso, lo cual ayuda a mejorar el tránsito intestinal, promueve la saciedad y proporciona una hidratación interna prolongada.",
    beneficios: [
      "Ricas en fibra para favorecer la salud digestiva",
      "Alto contenido de calcio vegetal y proteínas limpias",
      "Ayudan a controlar los antojos gracias a su efecto saciante",
      "Ideales para preparar deliciosos chía puddings y batidos"
    ],
    modoUso: "Remojar 1 cucharada en agua, leche vegetal o yogur durante 15 minutos antes de consumir.",
    ingredientes: "Semillas de chía crudas 100% de agricultura orgánica (Salvia hispanica).",
    imagen: "img/placeholder.svg"
  },
  {
    id: 26,
    nombre: "Polvo de Açaí Orgánico Liofilizado",
    categoria: "superalimentos",
    categoriaLabel: "Superalimentos",
    precio: 80000,
    descripcionCorta: "Baya amazónica superantioxidante en polvo, idel para rellenar tus mañanas de color y energía.",
    descripcionLarga: "El Açaí silvestre es recolectado a mano en el Amazonas y liofilizado al instante para preservar intactos sus valiosos antioxidantes (antocianinas), ácidos grasos saludables y fibra. Aporta un delicioso sabor frutal a mora con notas de cacao y un color morado vibrante.",
    beneficios: [
      "Excepcional poder antioxidante que combate el envejecimiento",
      "Aporta energía saludable sin cafeína ni azúcares añadidos",
      "Rico en grasas saludables Omega 6 y 9 de origen vegetal",
      "Crea espectaculares y nutritivos 'Açaí Bowls'"
    ],
    modoUso: "Mezclar 1 a 2 cucharaditas en licuados, yogures, bowls de frutas o jugos naturales.",
    ingredientes: "Polvo de bayas de Açaí orgánico liofilizado 100% puro (Euterpe oleracea).",
    imagen: "img/placeholder.svg"
  },
  {
    id: 27,
    nombre: "Maca Peruana Amarilla Gelatinizada",
    categoria: "superalimentos",
    categoriaLabel: "Superalimentos",
    precio: 58000,
    descripcionCorta: "Raíz andina adaptógena para balance hormonal, energía física y vitalidad.",
    descripcionLarga: "Maca cultivada a más de 4,000 metros en los Andes peruanos. Sometida a un proceso de gelatinización (calor suave) que descompone los almidones difíciles de digerir, permitiendo que tu cuerpo absorba todos sus nutrientes de forma rápida y sin causar molestias estomacales.",
    beneficios: [
      "Aumenta la resistencia física y combate la fatiga crónica",
      "Equilibra el sistema hormonal de hombres y mujeres de forma natural",
      "Mejora el estado de ánimo y apoya la libido",
      "Sabor malteado muy agradable en bebidas calientes o frías"
    ],
    modoUso: "Consumir 1 cucharadita (5g) al día disuelta en leche vegetal, avena, café o licuados.",
    ingredientes: "Polvo de raíz de Maca amarilla gelatinizada orgánica (Lepidium meyenii).",
    imagen: "img/placeholder.svg"
  },
  {
    id: 28,
    nombre: "Harina de Almendra Fina Integral",
    categoria: "superalimentos",
    categoriaLabel: "Superalimentos",
    precio: 52000,
    descripcionCorta: "Alternativa keto, sin gluten y rica en proteínas para tus recetas de repostería saludable.",
    descripcionLarga: "Elaborada exclusivamente a partir de almendras enteras seleccionadas, ligeramente blanqueadas y molidas finamente hasta obtener una textura de harina. Es perfecta para hornear galletas, panes y bizcochos bajos en carbohidratos, aportando un delicioso y suave sabor a almendra.",
    beneficios: [
      "Naturalmente libre de gluten y baja en carbohidratos (Keto)",
      "Excelente fuente de vitamina E, grasas saludables y magnesio",
      "Aporta humedad y una textura esponjosa a los horneados",
      "Ayuda a mantener estables los niveles de energía"
    ],
    modoUso: "Utilizar como reemplazo total o parcial de la harina de trigo convencional en repostería y panes.",
    ingredientes: "Almendras dulces 100% naturales molidas sin piel ni aditivos.",
    imagen: "img/placeholder.svg"
  },
  {
    id: 29,
    nombre: "Semillas de Cáñamo (Hemp Hearts) Peladas",
    categoria: "superalimentos",
    categoriaLabel: "Superalimentos",
    precio: 66000,
    descripcionCorta: "Corazones de cáñamo ricos en proteínas completas y Omegas con un delicioso sabor a nuez.",
    descripcionLarga: "Las semillas de cáñamo peladas son una de las mejores fuentes de proteína vegetal completa del mundo, ya que contienen los 9 aminoácidos esenciales. Con un agradable y suave sabor similar al piñón o la nuez, son el complemento perfecto para añadir nutrientes a cualquier comida.",
    beneficios: [
      "3 cucharadas aportan 10g de proteína vegetal completa",
      "Proporción ideal de ácidos grasos esenciales Omega 3 y 6",
      "Fáciles de digerir y libres de alérgenos comunes",
      "Listas para consumir directamente, no requieren cocción"
    ],
    modoUso: "Espolvorear sobre ensaladas, sopas, yogur, tostadas con aguacate o licuados.",
    ingredientes: "Corazones de semillas de cáñamo 100% puras peladas (Cannabis sativa).",
    imagen: "img/placeholder.svg"
  },
  {
    id: 30,
    nombre: "Mix de Frutos Secos Silvestres Premium",
    categoria: "superalimentos",
    categoriaLabel: "Superalimentos",
    precio: 48000,
    descripcionCorta: "Mezcla de nueces, almendras, marañones y bayas de goji sin sal ni aceites añadidos.",
    descripcionLarga: "Un snack saludable y saciante perfecto para llevar a cualquier parte. Seleccionamos nueces del nogal, almendras enteras tostadas, marañones crujientes y bayas de goji deshidratadas ricas en antioxidantes. Todo empacado al vacío para mantener su máxima frescura y textura crujiente.",
    beneficios: [
      "Snack nutritivo listo para consumir y lleno de energía saludable",
      "Excelente fuente de grasas saludables para el cerebro",
      "Las bayas de goji aportan antioxidantes y vitamina A",
      "Sin sal añadida, sin maní, sin aceites refinados"
    ],
    modoUso: "Consumir directamente como snack a media mañana o tarde, o añadir a cereales y ensaladas.",
    ingredientes: "Nueces peladas, almendras con piel tostadas, nueces de marañón tostadas y bayas de goji deshidratadas.",
    imagen: "img/placeholder.svg"
  }
];
