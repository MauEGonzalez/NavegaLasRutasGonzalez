const products = [
  // --- Figuras de Anime ---
  {
    id: '1',
    name: 'Figura Goku Super Saiyajin Blue',
    price: 45.99,
    category: 'Anime',
    img: 'https://placehold.co/300x300/FF5733/FFFFFF?text=Goku+SSB',
    stock: 15,
    description: 'Figura de acción detallada de Goku en su forma Super Saiyajin Blue, ideal para coleccionistas. Incluye base y efectos de energía.'
  },
  {
    id: '2',
    name: 'Nendoroid Tanjiro Kamado',
    price: 65.00,
    category: 'Anime',
    img: 'https://placehold.co/300x300/33FF57/FFFFFF?text=Tanjiro+Nendo',
    stock: 10,
    description: 'Figura Nendoroid articulada de Tanjiro Kamado de Demon Slayer, con múltiples expresiones faciales y accesorios.'
  },
  {
    id: '3',
    name: 'Estatua Luffy Gear 5',
    price: 120.50,
    category: 'Anime',
    img: 'https://placehold.co/300x300/3357FF/FFFFFF?text=Luffy+Gear5',
    stock: 5,
    description: 'Impresionante estatua de Monkey D. Luffy en su épica forma Gear 5, con detalles premium y acabado de alta calidad.'
  },
  {
    id: '4',
    name: 'Funko Pop! Naruto Uzumaki',
    price: 15.99,
    category: 'Anime',
    img: 'https://placehold.co/300x300/FF33A1/FFFFFF?text=Naruto+Funko',
    stock: 30,
    description: 'Figura Funko Pop! de Naruto Uzumaki, perfecta para cualquier fan de la serie.'
  },
  {
    id: '5',
    name: 'Figura Levi Ackerman Figma',
    price: 85.75,
    category: 'Anime',
    img: 'https://placehold.co/300x300/A133FF/FFFFFF?text=Levi+Figma',
    stock: 8,
    description: 'Figura Figma de Levi Ackerman de Attack on Titan, altamente articulada con accesorios de equipo de maniobras.'
  },
  {
    id: '6',
    name: 'Set Figuras Dragon Ball Z (4 figuras)',
    price: 75.00,
    category: 'Anime',
    img: 'https://placehold.co/300x300/FFC300/FFFFFF?text=DBZ+Set',
    stock: 7,
    description: 'Set de 4 figuras de acción de Dragon Ball Z, incluyendo a Vegeta, Gohan, Piccolo y Freezer.'
  },
  {
    id: '7',
    name: 'Figura Rem Re:Zero Bunny Ver.',
    price: 95.00,
    category: 'Anime',
    img: 'https://placehold.co/300x300/FF69B4/FFFFFF?text=Rem+Bunny',
    stock: 4,
    description: 'Figura a escala de Rem de Re:Zero en su icónico traje de conejita, con detalles exquisitos.'
  },
  {
    id: '8',
    name: 'Peluche Pikachu Gigante',
    price: 50.00,
    category: 'Anime',
    img: 'https://placehold.co/300x300/FFD700/FFFFFF?text=Pikachu+Plush',
    stock: 20,
    description: 'Peluche gigante y suave de Pikachu, el compañero perfecto para cualquier fan de Pokémon.'
  },
  {
    id: '9',
    name: 'Figura Saitama One Punch Man',
    price: 60.00,
    category: 'Anime',
    img: 'https://placehold.co/300x300/808080/FFFFFF?text=Saitama',
    stock: 12,
    description: 'Figura de acción de Saitama con su traje de héroe, listo para un solo golpe.'
  },
  {
    id: '10',
    name: 'Maqueta Gundam RX-78-2 (MG)',
    price: 70.00,
    category: 'Anime',
    img: 'https://placehold.co/300x300/00FFFF/FFFFFF?text=Gundam+MG',
    stock: 6,
    description: 'Maqueta Master Grade del icónico Gundam RX-78-2, requiere ensamblaje. Incluye armas y accesorios.'
  },

  // --- Figuras de Superhéroes (Marvel) ---
  {
    id: '11',
    name: 'Figura Iron Man Mark LXXXV (SH Figuarts)',
    price: 110.00,
    category: 'Marvel',
    img: 'https://placehold.co/300x300/B22222/FFFFFF?text=IronMan+Mk85',
    stock: 9,
    description: 'Figura de acción de Iron Man de Avengers: Endgame, con múltiples puntos de articulación y efectos de repulsor.'
  },
  {
    id: '12',
    name: 'Funko Pop! Spider-Man (Miles Morales)',
    price: 16.50,
    category: 'Marvel',
    img: 'https://placehold.co/300x300/000000/FFFFFF?text=Miles+Funko',
    stock: 25,
    description: 'Figura Funko Pop! de Miles Morales Spider-Man, un imprescindible para los fans del Spider-Verse.'
  },
  {
    id: '13',
    name: 'Estatua Capitán América (Premium Format)',
    price: 250.00,
    category: 'Marvel',
    img: 'https://placehold.co/300x300/000080/FFFFFF?text=Cap+Statue',
    stock: 3,
    description: 'Estatua premium del Capitán América con su escudo, captura la esencia del héroe con gran detalle.'
  },
  {
    id: '14',
    name: 'Marvel Legends Thor (Endgame)',
    price: 30.00,
    category: 'Marvel',
    img: 'https://placehold.co/300x300/8B4513/FFFFFF?text=Thor+ML',
    stock: 18,
    description: 'Figura de acción de Thor de la línea Marvel Legends, basada en su apariencia en Avengers: Endgame.'
  },
  {
    id: '15',
    name: 'Figura Black Widow (Hot Toys)',
    price: 280.00,
    category: 'Marvel',
    img: 'https://placehold.co/300x300/696969/FFFFFF?text=BlackWidow+HT',
    stock: 2,
    description: 'Figura de colección de Black Widow de Hot Toys, con ropa de tela real y accesorios detallados.'
  },
  {
    id: '16',
    name: 'Funko Pop! Groot con Bomba',
    price: 14.00,
    category: 'Marvel',
    img: 'https://placehold.co/300x300/228B22/FFFFFF?text=Groot+Funko',
    stock: 28,
    description: 'Figura Funko Pop! de Groot de Guardianes de la Galaxia, sosteniendo la bomba.'
  },
  {
    id: '17',
    name: 'Figura Dr. Strange (MAFEX)',
    price: 90.00,
    category: 'Marvel',
    img: 'https://placehold.co/300x300/4B0082/FFFFFF?text=DrStrange+MAFEX',
    stock: 7,
    description: 'Figura de acción MAFEX de Doctor Strange, con capa articulada y efectos mágicos.'
  },
  {
    id: '18',
    name: 'Set Mini Figuras Avengers (5 figuras)',
    price: 40.00,
    category: 'Marvel',
    img: 'https://placehold.co/300x300/800000/FFFFFF?text=Avengers+Mini',
    stock: 15,
    description: 'Set de mini figuras de los Vengadores, ideal para exhibir en tu escritorio.'
  },
  {
    id: '19',
    name: 'Figura Wolverine (Mezco One:12 Collective)',
    price: 150.00,
    category: 'Marvel',
    img: 'https://placehold.co/300x300/B8860B/FFFFFF?text=Wolverine+Mezco',
    stock: 4,
    description: 'Figura de Wolverine de Mezco, con múltiples trajes y accesorios intercambiables.'
  },
  {
    id: '20',
    name: 'Casco Electrónico de Star-Lord',
    price: 99.99,
    category: 'Marvel',
    img: 'https://placehold.co/300x300/4682B4/FFFFFF?text=StarLord+Helmet',
    stock: 6,
    description: 'Réplica electrónica a escala 1:1 del casco de Star-Lord, con efectos de luz y sonido.'
  },

  // --- Figuras de Superhéroes (DC Comics) ---
  {
    id: '21',
    name: 'Figura Batman Hush (Mafex)',
    price: 95.00,
    category: 'DC Comics',
    img: 'https://placehold.co/300x300/000000/FFFFFF?text=Batman+Hush',
    stock: 10,
    description: 'Figura de Batman de la línea Mafex, basada en el icónico cómic "Hush", con gran articulación.'
  },
  {
    id: '22',
    name: 'Funko Pop! The Joker (Dark Knight)',
    price: 17.00,
    category: 'DC Comics',
    img: 'https://placehold.co/300x300/800080/FFFFFF?text=Joker+Funko',
    stock: 22,
    description: 'Figura Funko Pop! del Joker de The Dark Knight, con su traje morado clásico.'
  },
  {
    id: '23',
    name: 'Estatua Wonder Woman (ArtFX+)',
    price: 130.00,
    category: 'DC Comics',
    img: 'https://placehold.co/300x300/8B0000/FFFFFF?text=WW+ArtFX',
    stock: 5,
    description: 'Estatua de Wonder Woman de la línea ArtFX+, con su lazo de la verdad y escudo.'
  },
  {
    id: '24',
    name: 'McFarlane Toys Superman (Action Comics #1000)',
    price: 25.00,
    category: 'DC Comics',
    img: 'https://placehold.co/300x300/0000FF/FFFFFF?text=Superman+McF',
    stock: 17,
    description: 'Figura de acción de Superman de McFarlane Toys, basada en su apariencia clásica.'
  },
  {
    id: '25',
    name: 'Figura Harley Quinn (Rebirth)',
    price: 70.00,
    category: 'DC Comics',
    img: 'https://placehold.co/300x300/FFC0CB/FFFFFF?text=Harley+Rebirth',
    stock: 8,
    description: 'Figura de Harley Quinn de la era Rebirth, con su mazo y detalles coloridos.'
  },
  {
    id: '26',
    name: 'Funko Pop! Flash (Justice League)',
    price: 15.00,
    category: 'DC Comics',
    img: 'https://placehold.co/300x300/FFD700/FFFFFF?text=Flash+Funko',
    stock: 20,
    description: 'Figura Funko Pop! de Flash, el velocista escarlata de la Liga de la Justicia.'
  },
  {
    id: '27',
    name: 'Estatua Aquaman (Movie Version)',
    price: 115.00,
    category: 'DC Comics',
    img: 'https://placehold.co/300x300/008080/FFFFFF?text=Aquaman+Movie',
    stock: 6,
    description: 'Estatua de Aquaman basada en su apariencia cinematográfica, con su tridente.'
  },
  {
    id: '28',
    name: 'DC Multiverse Batgirl (Gotham Knights)',
    price: 28.00,
    category: 'DC Comics',
    img: 'https://placehold.co/300x300/8A2BE2/FFFFFF?text=Batgirl+McF',
    stock: 14,
    description: 'Figura de acción de Batgirl de la línea DC Multiverse, inspirada en el videojuego Gotham Knights.'
  },
  {
    id: '29',
    name: 'Figura Deathstroke (Arkham Origins)',
    price: 80.00,
    category: 'DC Comics',
    img: 'https://placehold.co/300x300/4B0082/FFFFFF?text=Deathstroke',
    stock: 9,
    description: 'Figura de Deathstroke de Batman: Arkham Origins, con su armadura y armas.'
  },
  {
    id: '30',
    name: 'Set de Accesorios de Batman (Batarangs, Grapnel)',
    price: 35.00,
    category: 'DC Comics',
    img: 'https://placehold.co/300x300/1C1C1C/FFFFFF?text=Batman+Accs',
    stock: 25,
    description: 'Set de réplicas de accesorios icónicos de Batman, incluyendo batarangs y un gancho retráctil.'
  }
];

export default products;