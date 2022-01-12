const array = [
  {
    _id: "61b32320d4c0d6690a75dcc7",
    name: "Chili pepper",
    img: "https://media.istockphoto.com/vectors/chilli-pepper-pizza-vector-illustration-vector-id1210174695",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
  },
  {
    _id: "61b32320d4c0d6690a75dccc",
    name: "Italian pizza",
    img: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3524436.jpg",
	varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
  },
  {
    _id: "61b32320d4c0d6690a75dcc9",
    name: "Vegetarian",
    img: "https://previews.123rf.com/images/leopride/leopride1704/leopride170400048/75669690-vegetarian-pizza-margherita-with-tomato-pepper-cucumber-mushroom-olive-basil-cartoon-flat-style-.jpg",
	 varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
  },
  {
    _id: "61b32320d4c0d6690a75dcca",
    name: "Shrimp",
    img: "https://thumbs.dreamstime.com/b/shrimp-pizza-object-packaging-advertisements-menu-isolated-white-vector-illustration-cartoon-147604037.jpg",
	 varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
  },
  {
    _id: "61b32320d4c0d6690a75dcc6",
    name: "Barbecue Chicken",
    img: "https://media.istockphoto.com/vectors/sliced-barbecue-chicken-pizza-vector-id165928700?s=612x612",
	 varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
  },
  {
    _id: "61b32320d4c0d6690a75dccb",
    name: " Pepperoni pizza",
    img: "https://thumbs.dreamstime.com/z/pizza-pepperoni-slices-illustration-italian-44738501.jpg",
	 varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
  },
  {
    _id: "61b32320d4c0d6690a75dcc8",
    name: "Mushrooms",
    img: "https://previews.123rf.com/images/dmstudio/dmstudio0910/dmstudio091000031/5751631-vector-pizza-with-mushrooms-and-olives.jpg",
	 varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
  },
  {
    _id: "61b46562b42a8481f0ec4c79",
    name: "Margherita",
    img: "https://previews.123rf.com/images/morkovkapixel/morkovkapixel1807/morkovkapixel180700001/104581855-pizza-margarita-with-slice.jpg",
	 varients: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
  },
];






// [{
// 	"_id": "61b32320d4c0d6690a75dcc7",
// 	"name": "Chili pepper",
// 	"img": "https://media.istockphoto.com/vectors/chilli-pepper-pizza-vector-illustration-vector-id1210174695",
// 	"varients": ["small", "medium", "large"],
// 	"prices": [{
// 		"small": 99,
// 		"medium": 199,
// 		"large": 399
// 	}],
// 	"category": "veg"
// }, {
// 	"_id": "61b32320d4c0d6690a75dccc",
// 	"name": "Italian pizza",
// 	"img": "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3524436.jpg",
// 	"varients": ["small", "medium", "large"],
// 	"prices": [{
// 		"small": 99,
// 		"medium": 199,
// 		"large": 399
// 	}],
// 	"category": "veg"
// }, {
// 	"_id": "61b32320d4c0d6690a75dcc9",
// 	"name": "Vegetarian",
// 	"img": "https://previews.123rf.com/images/leopride/leopride1704/leopride170400048/75669690-vegetarian-pizza-margherita-with-tomato-pepper-cucumber-mushroom-olive-basil-cartoon-flat-style-.jpg",
// 	"varients": ["small", "medium", "large"],
// 	"prices": [{
// 		"small": 99,
// 		"medium": 199,
// 		"large": 399
// 	}],
// 	"category": "veg"
// }, {
// 	"_id": "61b32320d4c0d6690a75dcca",
// 	"name": "Shrimp",
// 	"img": "https://thumbs.dreamstime.com/b/shrimp-pizza-object-packaging-advertisements-menu-isolated-white-vector-illustration-cartoon-147604037.jpg",
// 	"varients": ["small", "medium", "large"],
// 	"prices": [{
// 		"small": 99,
// 		"medium": 199,
// 		"large": 399
// 	}],
// 	"category": "veg"
// }, {
// 	"_id": "61b32320d4c0d6690a75dcc6",
// 	"name": "Barbecue Chicken",
// 	"img": "https://media.istockphoto.com/vectors/sliced-barbecue-chicken-pizza-vector-id165928700?s=612x612",
// 	"varients": ["small", "medium", "large"],
// 	"prices": [{
// 		"small": 99,
// 		"medium": 199,
// 		"large": 399
// 	}],
// 	"category": "veg"
// }, {
// 	"_id": "61b32320d4c0d6690a75dccb",
// 	"name": " Pepperoni pizza",
// 	"img": "https://thumbs.dreamstime.com/z/pizza-pepperoni-slices-illustration-italian-44738501.jpg",
// 	"varients": ["small", "medium", "large"],
// 	"prices": [{
// 		"small": 99,
// 		"medium": 199,
// 		"large": 399
// 	}],
// 	"category": "veg"
// }, {
// 	"_id": "61b32320d4c0d6690a75dcc8",
// 	"name": "Mushrooms",
// 	"img": "https://previews.123rf.com/images/dmstudio/dmstudio0910/dmstudio091000031/5751631-vector-pizza-with-mushrooms-and-olives.jpg",
// 	"varients": ["small", "medium", "large"],
// 	"prices": [{
// 		"small": 99,
// 		"medium": 199,
// 		"large": 399
// 	}],
// 	"category": "veg"
// }, {
// 	"_id": "61b46562b42a8481f0ec4c79",
// 	"name": "Margherita",
// 	"img": "https://previews.123rf.com/images/morkovkapixel/morkovkapixel1807/morkovkapixel180700001/104581855-pizza-margarita-with-slice.jpg",
// 	"varients": ["small", "medium", "large"],
// 	"prices": [{
// 		"small": 99,
// 		"medium": 199,
// 		"large": 399
// 	}],
// 	"category": "veg"
// }]





