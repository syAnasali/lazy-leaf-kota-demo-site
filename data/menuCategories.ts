export type MenuItemHighlight = {
  name: string;
  description: string;
  isVeg?: boolean;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  imgSrc: string;
  highlights: MenuItemHighlight[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    index: "01",
    name: "COFFEE",
    tagline: "Single origins, slow cold steeps & velvety roasts",
    description:
      "Crafted with 100% Arabica single-origin beans, roasted with patience, and pulled with precision. From slow 16-hour cold brews to silky cortados.",
    imgSrc: "/assets/menu/coffee.jpg",
    highlights: [
      {
        name: "Lazy Leaf 16h Cold Brew",
        description: "Slow-steeped single origin served over a crystal ice cube.",
        isVeg: true,
        tag: "Signature",
      },
      {
        name: "Spanish Cortado",
        description: "Double ristretto with condensed sweet milk microfoam.",
        isVeg: true,
        tag: "Bestseller",
      },
      {
        name: "Classic Flat White",
        description: "Velvety steamed milk over intense double espresso.",
        isVeg: true,
      },
    ],
  },
  {
    id: "bites",
    index: "02",
    name: "BITES",
    tagline: "Artisan sourdoughs, sliders & crispy small plates",
    description:
      "Handcrafted morning to night comfort bites. Fermented sourdough toasts, herb-crusted paninis, and golden hand-cut fries tossed in house spices.",
    imgSrc: "/assets/menu/bites.jpg",
    highlights: [
      {
        name: "Truffle Mushroom Sourdough",
        description: "Wild mushrooms, white truffle glaze, and shaved parmesan.",
        isVeg: true,
        tag: "Chef's Special",
      },
      {
        name: "Herb Crusted Paneer Panini",
        description: "Grilled cottage cheese, roasted bell peppers, chipotle aioli.",
        isVeg: true,
      },
      {
        name: "Peri-Peri Potato Crisps",
        description: "Hand-cut golden crisps with smoked garlic dip.",
        isVeg: true,
      },
    ],
  },
  {
    id: "pizza",
    index: "03",
    name: "PIZZA",
    tagline: "Hand-stretched sourdough with blistered crusts",
    description:
      "48-hour slow-fermented sourdough pizza bases baked to blistered perfection with San Marzano tomatoes, buffalo mozzarella, and fresh garden basil.",
    imgSrc: "/assets/menu/pizza.jpg",
    highlights: [
      {
        name: "Pesto Buffalo Margherita",
        description: "San Marzano sauce, fresh buffalo mozzarella, homemade basil pesto.",
        isVeg: true,
        tag: "Must Try",
      },
      {
        name: "Quattro Formaggi & Honey",
        description: "Four artisan cheeses, toasted walnuts, and a touch of wild honey.",
        isVeg: true,
      },
      {
        name: "Charred Pepper & Jalapeno",
        description: "Spiced tomato base, roasted peppers, jalapenos, and mozzarella.",
        isVeg: true,
      },
    ],
  },
  {
    id: "pasta",
    index: "04",
    name: "PASTA",
    tagline: "Handcrafted ribbons, aglio olio & rich sauces",
    description:
      "Comforting pasta tossed in slow-simmered sauces. From delicate garlic and extra virgin olive oil to velvety Alfredo and tangy arrabbiata.",
    imgSrc: "/assets/menu/pasta.jpg",
    highlights: [
      {
        name: "Classic Aglio e Olio",
        description: "Spaghetti tossed in cold-pressed olive oil, toasted garlic, and chili flakes.",
        isVeg: true,
        tag: "Classic",
      },
      {
        name: "Creamy Truffle Fettuccine",
        description: "Rich parmesan cream, sautéed mushrooms, and white truffle oil.",
        isVeg: true,
      },
      {
        name: "Spicy Sundried Tomato Penne",
        description: "Tangy tomato reduction, Kalamata olives, and fresh basil.",
        isVeg: true,
      },
    ],
  },
  {
    id: "asian",
    index: "05",
    name: "ASIAN",
    tagline: "Dim sums, comforting broths & wok bowls",
    description:
      "Delicate steamed parcels, aromatic wok-tossed noodles, and nourishing broths bursting with fresh ginger, lemongrass, and chili oil.",
    imgSrc: "/assets/menu/asian.jpg",
    highlights: [
      {
        name: "Crystal Veggie Dumplings",
        description: "Translucent parcels filled with water chestnuts, corn, and scallions.",
        isVeg: true,
        tag: "Handmade",
      },
      {
        name: "Chili Garlic Wok Noodles",
        description: "Wok-fried noodles tossed with crunchy veggies and house chili crisps.",
        isVeg: true,
      },
      {
        name: "Aromatic Comfort Broth",
        description: "Slow-brewed ginger-soy broth with silken tofu and fresh herbs.",
        isVeg: true,
      },
    ],
  },
  {
    id: "south-indian",
    index: "06",
    name: "SOUTH INDIAN",
    tagline: "Crisp slow-fermented dosas & filter roasts",
    description:
      "A soulful tribute to tradition. Paper-thin fermented dosas with gunpowder butter, steaming sambar, and traditional South Indian filter roasts.",
    imgSrc: "/assets/menu/south-indian.jpg",
    highlights: [
      {
        name: "Ghee Roast Masala Dosa",
        description: "Crispy golden crepe roasted in pure ghee with spiced potato filling.",
        isVeg: true,
        tag: "Authentic",
      },
      {
        name: "Podi Butter Thatte Idli",
        description: "Steamed fluffy rice cakes dusted with aromatic spiced lentil gunpowder.",
        isVeg: true,
      },
      {
        name: "Traditional Filter Kaapi",
        description: "Freshly brewed chicory blend frothed in a classic brass tumbler.",
        isVeg: true,
      },
    ],
  },
  {
    id: "desserts",
    index: "07",
    name: "DESSERTS",
    tagline: "Baked cheesecakes, molten brownies & gelatos",
    description:
      "Handmade daily in our bakehouse. Silky New York style cheesecakes, molten dark chocolate bakes, and creamy artisan gelatos.",
    imgSrc: "/assets/menu/desserts.jpg",
    highlights: [
      {
        name: "Lotus Biscoff Cheesecake",
        description: "Silky baked cheesecake topped with caramelized speculoos glaze.",
        isVeg: true,
        tag: "Bestseller",
      },
      {
        name: "Warm Fudge Brownie & Gelato",
        description: "Gooey walnut brownie with Madagascan vanilla bean gelato.",
        isVeg: true,
      },
      {
        name: "Tiramisu Pot",
        description: "Espresso-soaked savoiardi with whipped mascarpone cream.",
        isVeg: true,
      },
    ],
  },
];
