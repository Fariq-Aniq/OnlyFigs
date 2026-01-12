const PRODUCTS = [
  // 1. FIGS DETOX
  {
    id: "p-detox",
    cat: "Fresh figs",
    title: "Figs Detox Collection",
    price: 38.00,
    desc: "A complete diverse collection of fresh fig detox products to cleanse and rejuvenate your body.",
    img: "assets/img/products/Figs Detox/figs detox set.png",
    hover_img: "assets/img/products/Figs Detox/figs detox tea bags.png",
    gallery: [
      "assets/img/products/Figs Detox/figs detox set.png",
      "assets/img/products/Figs Detox/figs detox tea bags.png",
      "assets/img/products/Figs Detox/figs detox box.png"
    ],
    sold: 1240,
    specs: {
      weight: "150g (30 tea bags)",
      ingredients: "Organic Fig Leaves, Natural Herbs, Green Tea",
      shelf: "18 months",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Organic, HACCP",
      storage: "Store in a cool, dry place away from direct sunlight"
    }
  },

  // 2. FIGS LEAF TEA
  {
    id: "p-tea",
    cat: "Fresh figs",
    title: "Figs Leaf Tea",
    price: 48.00,
    desc: "Aromatic and soothing tea blends made from organic fig leaves.",
    img: "assets/img/products/Figs Leaf Tea/figs leaf tea set.png",
    hover_img: "assets/img/products/Figs Leaf Tea/leaftea.png",
    gallery: [
        "assets/img/products/Figs Leaf Tea/figs leaf tea set.png",
        "assets/img/products/Figs Leaf Tea/leaftea.png",
        "assets/img/products/Figs Leaf Tea/figs leaf tea box.png"
    ],
    specs: {
      weight: "100g (20 tea bags)",
      ingredients: "100% Organic Fig Leaves",
      shelf: "24 months",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Organic",
      storage: "Keep in airtight container in cool, dry place"
    }
  },

  // 3. FIGS CAPSULE
  {
    id: "p-capsule",
    cat: "Dried figs",
    title: "Figs Fiber Capsules",
    price: 35.00,
    desc: "Daily fiber supplements derived from premium dried figs.",
    img: "assets/img/products/Figs Capsule/figs fiber capsule set.png",
    hover_img: "assets/img/products/Figs Capsule/figs fiber capsule bottle.png",
    gallery: [
        "assets/img/products/Figs Capsule/figs fiber capsule set.png",
        "assets/img/products/Figs Capsule/figs fiber capsule bottle.png",
        "assets/img/products/Figs Capsule/figs fiber capsule box.png"
    ],
    specs: {
      weight: "60 capsules (500mg each)",
      ingredients: "Dried Fig Extract, Vegetable Cellulose Capsule",
      shelf: "36 months",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, GMP Certified",
      storage: "Store in cool, dry place. Keep bottle tightly closed"
    }
  },

  // 4. FIGS SEED OIL
  {
    id: "p-oil",
    cat: "Dried figs",
    title: "Figs Seed Oil",
    price: 55.00,
    desc: "Cold-pressed fig seed oil, rich in omega fatty acids and antioxidants.",
    img: "assets/img/products/Figs Seed Oil/figs seed oil and box.png",
    hover_img: "assets/img/products/Figs Seed Oil/figs seed oil bottle.png",
    gallery: [
        "assets/img/products/Figs Seed Oil/figs seed oil and box.png",
        "assets/img/products/Figs Seed Oil/figs seed oil bottle.png",
        "assets/img/products/Figs Seed Oil/figs seed oil box.png"
    ],
    sold: 850,
    specs: {
      weight: "50ml",
      ingredients: "100% Cold-Pressed Fig Seed Oil",
      shelf: "12 months (unopened), 6 months after opening",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Organic, Cold-Pressed",
      storage: "Store in cool, dark place. Refrigerate after opening"
    }
  },

  // 5. FIGS JAM
  {
    id: "p-jam",
    cat: "Fig jam",
    title: "Premium Fig Jam",
    price: 18.00,
    desc: "Sweet and textured jam made from ripe, hand-picked figs.",
    img: "assets/img/products/Figs Jam/figs jam set.png",
    hover_img: "assets/img/products/Figs Jam/figs jam bottle.png",
    gallery: [
        "assets/img/products/Figs Jam/figs jam set.png",
        "assets/img/products/Figs Jam/figs jam bottle.png",
        "assets/img/products/Figs Jam/figs jam box.png"
    ],
    specs: {
      weight: "250g",
      ingredients: "Premium Figs (65%), Natural Cane Sugar, Lemon Juice, Pectin",
      shelf: "12 months (unopened), 3 weeks refrigerated after opening",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, No Artificial Preservatives",
      storage: "Store in cool, dry place. Refrigerate after opening"
    }
  },

  // 6. FIGS VINEGAR
  {
    id: "p-vinegar",
    cat: "Fig jam",
    title: "Aged Fig Vinegar",
    price: 19.00,
    desc: "Artisanal fig vinegar perfect for dressings and marinades.",
    img: "assets/img/products/Figs Vinegar/figs viniger box and bottle.png",
    hover_img: "assets/img/products/Figs Vinegar/figs viniger bottle.png",
    gallery: [
        "assets/img/products/Figs Vinegar/figs viniger box and bottle.png",
        "assets/img/products/Figs Vinegar/figs viniger bottle.png",
        "assets/img/products/Figs Vinegar/figs viniger box.png"
    ],
    specs: {
      weight: "200ml",
      ingredients: "Aged Fig Extract, Apple Cider Vinegar, Natural Flavoring",
      shelf: "24 months",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Organic",
      storage: "Store in cool, dry place. Shake well before use"
    }
  },

  // 7. FIGS GUMMY
  {
    id: "p-gummy",
    cat: "Fig snacks",
    title: "Figs Gummy Chews",
    price: 12.00,
    desc: "Delicious and healthy gummy snacks for the whole family.",
    img: "assets/img/products/Figs Gummy/figs gummy set.png",
    hover_img: "assets/img/products/Figs Gummy/figs gummy bottle.png",
    gallery: [
        "assets/img/products/Figs Gummy/figs gummy set.png",
        "assets/img/products/Figs Gummy/figs gummy bottle.png",
        "assets/img/products/Figs Gummy/figs gummy.png"
    ],
    specs: {
      weight: "180g (approx. 40 pieces)",
      ingredients: "Fig Extract, Gelatin, Natural Fruit Flavors, Citric Acid",
      shelf: "12 months",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, No Artificial Colors",
      storage: "Store in cool, dry place. Reseal after opening"
    }
  },

  // 8. FIGS BODY SCRUB
  {
    id: "p-scrub",
    cat: "Fig snacks",
    title: "Figs Body Scrub",
    price: 30.00,
    desc: "Exfoliating body scrub infused with natural fig seeds.",
    img: "assets/img/products/Figs Body scrub/figs body scrub and box.png",
    hover_img: "assets/img/products/Figs Body scrub/figs body scrub bottle.png",
    gallery: [
        "assets/img/products/Figs Body scrub/figs body scrub and box.png",
        "assets/img/products/Figs Body scrub/figs body scrub bottle.png",
        "assets/img/products/Figs Body scrub/figs body scrub box.png"
    ],
    specs: {
      weight: "300g",
      ingredients: "Fig Seed Extract, Sea Salt, Coconut Oil, Vitamin E, Natural Fragrance",
      shelf: "18 months",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Dermatologically Tested",
      storage: "Store in cool, dry place. Keep lid tightly closed"
    }
  },

  // 9. FIGS FACE MASK
  {
    id: "p-mask",
    cat: "Fig gift sets",
    title: "Figs Face Mask",
    price: 45.00,
    desc: "Rejuvenating face masks for a radiant complexion.",
    img: "assets/img/products/Figs Face Mask/figs face mask bittle and box.png",
    hover_img: "assets/img/products/Figs Face Mask/figs face mask bottle.png",
    gallery: [
        "assets/img/products/Figs Face Mask/figs face mask bittle and box.png",
        "assets/img/products/Figs Face Mask/figs face mask bottle.png",
        "assets/img/products/Figs Face Mask/fig face mask box.png"
    ],
    specs: {
      weight: "100ml",
      ingredients: "Fig Extract, Kaolin Clay, Aloe Vera, Hyaluronic Acid, Vitamin C",
      shelf: "24 months",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Dermatologically Tested, Cruelty-Free",
      storage: "Store in cool, dry place. Avoid direct sunlight"
    }
  },

  // 10. FIGS PERFUME
  {
    id: "p-perfume",
    cat: "Fig gift sets",
    title: "Figs Perfume",
    price: 85.00,
    desc: "A signature fragrance capturing the essence of wild figs.",
    img: "assets/img/products/Figs Perfume/figs perfume and bottle.png",
    hover_img: "assets/img/products/Figs Perfume/figs perfume bottle.png",
    gallery: [
        "assets/img/products/Figs Perfume/figs perfume and bottle.png",
        "assets/img/products/Figs Perfume/figs perfume bottle.png",
        "assets/img/products/Figs Perfume/figs perfume box.png"
    ],
    sold: 2100,
    specs: {
      weight: "50ml Eau de Parfum",
      ingredients: "Alcohol Denat, Fig Extract, Bergamot, Cedarwood, Musk, Natural Fragrance",
      shelf: "36 months",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Alcohol-Free Variant Available",
      storage: "Store in cool place away from direct sunlight and heat"
    }
  },

  // 11. FIGS SOAP
  {
    id: "p-soap",
    cat: "Fig gift sets",
    title: "Figs Soap Collection",
    price: 25.00,
    desc: "Handcrafted soaps enriched with moisturizing fig oil.",
    img: "assets/img/products/Figs Soap/figs soap set.png",
    hover_img: "assets/img/products/Figs Soap/figs soap.png",
    gallery: [
        "assets/img/products/Figs Soap/figs soap set.png",
        "assets/img/products/Figs Soap/figs soap.png",
        "assets/img/products/Figs Soap/figs soap box.png"
    ],
    specs: {
      weight: "3 x 100g bars",
      ingredients: "Fig Oil, Coconut Oil, Olive Oil, Shea Butter, Natural Fragrance",
      shelf: "24 months",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Vegan, Cruelty-Free",
      storage: "Keep in dry place. Use soap dish to prolong life"
    }
  },

  // 12. FIGS ANCHOVY SAMBAL
  {
    id: "p-anchovy-sambal",
    cat: "Fig snacks",
    title: "Figs Anchovy Sambal",
    price: 22.00,
    desc: "A unique blend of spicy anchovy sambal infused with the subtle sweetness of premium figs.",
    img: "assets/img/products/Figs Anchovy Sambal/Set.png",
    hover_img: "assets/img/products/Figs Anchovy Sambal/Bottle.png",
    gallery: [
      "assets/img/products/Figs Anchovy Sambal/Set.png",
      "assets/img/products/Figs Anchovy Sambal/Bottle.png"
    ],
    sold: 450,
    specs: {
      weight: "200g",
      ingredients: "Dried Anchovies, Figs, Chili, Garlic, Shallots, Tamarind, Palm Oil",
      shelf: "6 months (unopened), 2 weeks refrigerated after opening",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, No MSG",
      storage: "Store in cool, dry place. Refrigerate after opening"
    }
  },

  // 13. FIGS SWEET & SPICY SAMBAL PASTE
  {
    id: "p-spicy-sambal",
    cat: "Fig snacks",
    title: "Figs Sweet & Spicy Sambal Paste",
    price: 25.00,
    desc: "The perfect balance of heat and sweet, this sambal paste is a versatile companion for any Malaysian dish.",
    img: "assets/img/products/Figs Sweet & Spicy Sambal Paste/Set.png",
    hover_img: "assets/img/products/Figs Sweet & Spicy Sambal Paste/Bottle.png",
    gallery: [
      "assets/img/products/Figs Sweet & Spicy Sambal Paste/Set.png",
      "assets/img/products/Figs Sweet & Spicy Sambal Paste/Bottle.png"
    ],
    sold: 380,
    specs: {
      weight: "250g",
      ingredients: "Figs, Red Chili, Bird's Eye Chili, Garlic, Shallots, Belacan, Sugar",
      shelf: "8 months (unopened), 3 weeks refrigerated after opening",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Authentic Malaysian Recipe",
      storage: "Store in cool, dry place. Refrigerate after opening"
    }
  },

  // 14. FIGS COCONUT FLOSS
  {
    id: "p-coconut-floss",
    cat: "Fig snacks",
    title: "Figs Coconut Floss",
    price: 15.00,
    desc: "Savory coconut floss (Serunding) mixed with fig bits for a tropical, chewy, and flavorful snack.",
    img: "assets/img/products/Figs Coconut Floss/Set.png",
    hover_img: "assets/img/products/Figs Coconut Floss/Bottle.png",
    gallery: [
      "assets/img/products/Figs Coconut Floss/Set.png",
      "assets/img/products/Figs Coconut Floss/Bottle.png"
    ],
    sold: 520,
    specs: {
      weight: "150g",
      ingredients: "Grated Coconut, Figs, Lemongrass, Galangal, Turmeric, Spices",
      shelf: "3 months",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Traditional Recipe",
      storage: "Store in airtight container in cool, dry place"
    }
  },

  // 15. FIGS GULA MELAKA JAM
  {
    id: "p-gula-melaka-jam",
    cat: "Fig jam",
    title: "Figs Gula Melaka Jam",
    price: 20.00,
    desc: "Traditional fig jam elevated with the deep, caramel-like richness of authentic Gula Melaka.",
    img: "assets/img/products/Figs Gula Melaka Jam/Set.png",
    hover_img: "assets/img/products/Figs Gula Melaka Jam/Bottle.png",
    gallery: [
      "assets/img/products/Figs Gula Melaka Jam/Set.png",
      "assets/img/products/Figs Gula Melaka Jam/Bottle.png"
    ],
    sold: 610,
    specs: {
      weight: "250g",
      ingredients: "Premium Figs (60%), Gula Melaka (Palm Sugar), Pandan Leaves, Lemon Juice",
      shelf: "12 months (unopened), 3 weeks refrigerated after opening",
      origin: "Kuala Nerang, Kedah, Malaysia",
      cert: "Halal, Traditional Malaysian Flavor",
      storage: "Store in cool, dry place. Refrigerate after opening"
    }
  }
];
