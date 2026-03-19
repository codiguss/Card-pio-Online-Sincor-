// ─────────────────────────────────────────────────────────
//  COMO ADICIONAR FOTOS:
//  1. Coloque o arquivo de imagem dentro da pasta  src/images/
//  2. No produto correspondente abaixo, preencha o campo:
//        image: "nome-do-arquivo.jpg"
//  3. Se não tiver foto ainda, deixe  image: ""  e o emoji
//     aparecerá no lugar automaticamente.
// ─────────────────────────────────────────────────────────

const products = [
  {
    id: 1,
    name: "Cupuaçu, Morango & Maçã",
    category: "suco",
    volume: "300 ml",
    price: "R$ 17,00",
    emoji: "🍓",
    image: "9.png",          // ex: "cupuacu-morango-maca.jpg"
    color: "#c0474a",
    gradientFrom: "#c0474a",
    gradientTo: "#8b2635",
    description:
      "Bebida mista de frutas que une o sabor exótico do cupuaçu à doçura do morango e ao toque suave da maçã. Refrescante e equilibrada, é perfeita para ser apreciada a qualquer hora do dia.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },
  /*{
    id: 2,
    name: "Amora & Maçã",
    category: "suco",
    volume: "300 ml",
    price: "R$ 12,90",
    emoji: "🫐",
    image: "",
    color: "#3d1a5c",
    gradientFrom: "#5a2d82",
    gradientTo: "#3d1a5c",
    description:
      "Elaborado com a intensidade da amora e a leveza da maçã, este suco oferece uma experiência ímpar. Seu perfil levemente ácido realça o sabor das frutas, resultando em uma bebida nutritiva e agradável ao paladar.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },*/
  /*{
    id: 3,
    name: "Uva & Morango",
    category: "suco",
    volume: "300 ml",
    price: "R$ 12,90",
    emoji: "🍇",
    image: "",
    color: "#6b2d6b",
    gradientFrom: "#8b3a8b",
    gradientTo: "#6b2d6b",
    description:
      "Produzido com a riqueza natural da uva e o aroma delicado do morango, este suco apresenta sabor encorpado, adocicado e com frescor marcante. A combinação das duas frutas cria uma bebida vibrante, equilibrada e cheia de personalidade.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },*/
  {
    id: 4,
    name: "Frutas Vermelhas & Maçã",
    category: "suco",
    volume: "300 ml",
    price: "R$ 25,50",
    emoji: "🍒",
    image: "5.png",
    color: "#7a1a2e",
    gradientFrom: "#983a3a",
    gradientTo: "#7a1a2e",
    description:
      "Uma combinação especial de mirtilo, amora, morango e maçã que resulta em um suco de sabor intenso e ao mesmo tempo harmonioso. As frutas vermelhas trazem notas marcantes e levemente ácidas, enquanto a maçã acrescenta suavidade e equilíbrio à mistura.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },
  {
    id: 5,
    name: "Morango & Laranja",
    category: "suco",
    volume: "300 ml",
    price: "R$ 15,00",
    emoji: "🍊",
    image: "4.png",
    color: "#c4531a",
    gradientFrom: "#e8722a",
    gradientTo: "#c4531a",
    description:
      "A união do morango com a laranja resulta em uma bebida cheia de vivacidade e frescor. O dulçor delicado do morango encontra a acidez cítrica da laranja, criando um contraste agradável e equilibrado. Leve, aromático e naturalmente saboroso.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },
  {
    id: 6,
    name: "Caju & Maçã",
    category: "suco",
    volume: "300 ml",
    price: "R$ 15,00",
    emoji: "🍎",
    image: "15.png",
    color: "#b85c1a",
    gradientFrom: "#d4732a",
    gradientTo: "#b85c1a",
    description:
      "Combinando o sabor característico e levemente tropical do caju com a suavidade adocicada da maçã, este suco entrega uma experiência equilibrada e ímpar. A mistura destaca notas frutadas intensas, harmonizadas por uma textura leve e agradável ao paladar.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },
  {
    id: 7,
    name: "Manga & Maracujá",
    category: "suco",
    volume: "300 ml",
    price: "R$ 15,00",
    emoji: "🥭",
    image: "13.png",
    color: "#c47a10",
    gradientFrom: "#e8991a",
    gradientTo: "#c47a10",
    description:
      "A combinação da manga com o maracujá cria uma bebida de sabor tropical marcante e envolvente. A doçura cremosa da manga equilibra a acidez aromática do maracujá, resultando em um suco cheio de personalidade.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },
  {
    id: 8,
    name: "Umbu & Maçã",
    category: "suco",
    volume: "300 ml",
    price: "R$ 15,00",
    emoji: "🍏",
    image: "11.png",
    color: "#5a8a2a",
    gradientFrom: "#72a83a",
    gradientTo: "#5a8a2a",
    description:
      "Preparado com a personalidade marcante do umbu e a delicadeza da maçã, este suco apresenta um contraste agradável entre vivacidade e suavidade. O perfil levemente ácido da fruta regional é harmonizado pela nota adocicada da maçã, resultando em uma bebida leve, aromática e cheia de caráter.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta", "Fruta regional"],
  },
  {
    id: 9,
    name: "Manga & Morango",
    category: "suco",
    volume: "300 ml",
    price: "R$ 15,00",
    emoji: "🍓",
    image: "14.png",
    color: "#c06020",
    gradientFrom: "#e07830",
    gradientTo: "#c06020",
    description:
      "A doçura envolvente da manga encontra o aroma delicado do morango em uma combinação cheia de cor e sabor. O resultado é um suco macio, com notas frutadas intensas, que realça a naturalidade das frutas.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },
  {
    id: 10,
    name: "Graviola & Maçã",
    category: "suco",
    volume: "300 ml",
    price: "R$ 15,00",
    emoji: "🍐",
    image: "7.png",
    color: "#7a9a3a",
    gradientFrom: "#92b84a",
    gradientTo: "#7a9a3a",
    description:
      "A cremosidade da graviola se une à leveza da maçã em uma composição envolvente. O sabor levemente adocicado, com nuances tropicais, ganha equilíbrio e frescor com a presença da maçã, resultando em uma bebida agradável, aromática e saborosa.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },
  {
    id: 11,
    name: "Cajá & Maçã",
    category: "suco",
    volume: "300 ml",
    price: "R$ 15,00",
    emoji: "🟡",
    image: "12.png",
    color: "#c49020",
    gradientFrom: "#e0b030",
    gradientTo: "#c49020",
    description:
      "A tropicalidade do cajá se destaca nesta combinação, trazendo notas levemente ácidas e aroma marcante. Ao lado da maçã, que acrescenta seu dulçor natural, forma-se uma bebida harmoniosa e cheia de vivacidade.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta", "Fruta regional"],
  },
  {
    id: 12,
    name: "Mirtilo & Morango",
    category: "suco",
    volume: "300 ml",
    price: "R$ 28,00",
    emoji: "🫐",
    image: "6.png",
    color: "#2a3a8a",
    gradientFrom: "#3a4aaa",
    gradientTo: "#2a3a8a",
    description:
      "A união do mirtilo com o morango revela um suco de coloração intensa e sabor expressivo. As notas levemente ácidas do mirtilo se entrelaçam ao dulçor aromático do morango, criando uma experiência equilibrada e marcante.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },
  {
    id: 13,
    name: "Goiaba & Maçã",
    category: "suco",
    volume: "300 ml",
    price: "R$ 15,00",
    emoji: "🌸",
    image: "8.png",
    color: "#c45a7a",
    gradientFrom: "#e07092",
    gradientTo: "#c45a7a",
    description:
      "A goiaba traz seu sabor tropical e levemente perfumado, enquanto a maçã acrescenta suavidade à composição. O resultado é um suco de perfil macio e agradável, com dulçor equilibrado e textura delicada.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },
  {
    id: 14,
    name: "Manga",
    category: "suco",
    volume: "300 ml",
    price: "R$ 15,00",
    emoji: "🥭",
    image: "16.png",
    color: "#d4900a",
    gradientFrom: "#f0b020",
    gradientTo: "#d4900a",
    description:
      "Elaborado exclusivamente com manga, este suco destaca o sabor tropical intenso e a textura naturalmente aveludada da fruta. Seu dulçor equilibrado e aroma envolvente proporcionam uma experiência rica e prazerosa ao paladar.",
    tags: ["Sem conservantes", "Sem açúcar adicionado", "100% fruta"],
  },
  {
    id: 15,
    name: "Liberries",
    category: "licor",
    volume: "750 ml / 375 ml / 100 ml",
    price: "R$ 113,15 / R$ 68,94 / R$ 113,15",
    emoji: "🍷",
    image: "3.png",
    color: "#5a0a1a",
    gradientFrom: "#8b1a2a",
    gradientTo: "#5a0a1a",
    description:
      "Liberries nasce em Mucugê, no coração da Chapada Diamantina. Cada licor é um tributo à natureza, feito com frutas cultivadas com respeito à terra, à agricultura familiar e ao ciclo da vida. Um convite ao sabor autêntico, ao cuidado artesanal e ao prazer de viver bem.",
    tags: ["16% vol", "Licor Fino", "Frutas Vermelhas", "Artesanal"],
    subtitle: "Licor Fino de Frutas Vermelhas",
  },
];

// ─────────────────────────────────────────────────────────
//  Gera o HTML do visual de cada produto.
//  Se  product.image  estiver preenchido → exibe a foto.
//  Se estiver vazio   → exibe o emoji com fundo colorido.
//  fromPages: true quando chamado de dentro de /pages/
// ─────────────────────────────────────────────────────────
function getVisualHTML(product, size, fromPages) {
  const prefix = fromPages ? "../images/" : "images/";
  const badge  = product.category === "licor" ? "Licor" : "300 ml";

  if (product.image) {
    if (size === "card") {
      return `
        <div class="card-visual" style="background:${product.gradientFrom}">
          <img src="${prefix}${product.image}" alt="${product.name}" class="card-img"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="card-emoji-fallback" style="display:none">
            <div class="ripple-bg" style="background:${product.gradientFrom}"></div>
            <span class="emoji">${product.emoji}</span>
          </div>
          <span class="card-badge">${badge}</span>
        </div>`;
    } else {
      return `
        <div class="product-visual-panel" style="background:${product.gradientFrom}">
          <div class="visual-ring outer"></div>
          <div class="visual-ring"></div>
          <img src="${prefix}${product.image}" alt="${product.name}" class="product-img"
               onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="big-emoji" style="display:none">${product.emoji}</span>
        </div>`;
    }
  } else {
    if (size === "card") {
      return `
        <div class="card-visual" style="background:linear-gradient(145deg,${product.gradientFrom},${product.gradientTo})">
          <div class="ripple-bg" style="background:${product.gradientFrom}"></div>
          <span class="emoji">${product.emoji}</span>
          <span class="card-badge">${badge}</span>
        </div>`;
    } else {
      return `
        <div class="product-visual-panel" style="background:linear-gradient(145deg,${product.gradientFrom},${product.gradientTo})">
          <div class="visual-ring outer"></div>
          <div class="visual-ring"></div>
          <span class="big-emoji">${product.emoji}</span>
        </div>`;
    }
  }
}

window.sincora = { products, getVisualHTML };
