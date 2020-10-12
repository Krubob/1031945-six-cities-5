export default [
  {
    id: `0`,
    city: `Amsterdam`,
    title: `Ritz Carlton`,
    type: `Private room`,
    cost: 500,
    rating: 95,
    image: `img/apartment-02.jpg`,
    photos: [
      {
        src: `img/room.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/apartment-01.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/apartment-02.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/apartment-03.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/studio-01.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/apartment-01.jpg`,
        alt: `Photo studio`
      }
    ],
    features: {
      type: `Private room`,
      bedrooms: 1,
      guests: 4,
    },
    isFavorite: true,
    isPremium: true,
    service: [`Wi-Fi`, `PS5`, `Home cinema`, `Soundbar`, `Popcorn`],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Monica`,
      description: `Welcome to our world class hotel!`,
      super: true,
    },
  }, {
    id: `1`,
    city: `Amsterdam`,
    title: `Village in the forest`,
    type: `Cabin`,
    cost: 100,
    rating: 40,
    image: `img/apartment-01.jpg`,
    photos: [
      {
        src: `img/apartment-03.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/studio-01.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/apartment-01.jpg`,
        alt: `Photo studio`
      }
    ],
    features: {
      type: `Wood house`,
      bedrooms: 2,
      guests: 5,
    },
    isFavorite: false,
    isPremium: false,
    service: [`Wi-Fi`, `Free cow milk`, `Russian bath-house`],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Boris Farmer`,
      description: `Welcome to my village!`,
      super: false,
    },
  }, {
    id: `2`,
    city: `Amsterdam`,
    title: `The Four Seasons`,
    type: `Apartment`,
    cost: 800,
    rating: 90,
    image: `img/apartment-03.jpg`,
    photos: [
      {
        src: `img/room.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/apartment-01.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/apartment-02.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/studio-01.jpg`,
        alt: `Photo studio`
      },
    ],
    features: {
      type: `Apartment`,
      bedrooms: 3,
      guests: 10,
    },
    isFavorite: true,
    isPremium: true,
    mark: `Premium`,
    service: [`Wi-Fi`, `Swimming pool`, `Heating`, `Fridge`, `Dishwasher`, `TV`, `Coffee machine`],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `James Bond`,
      description: `Welcome to Amsterdam!`,
      super: true,
    },
  }, {
    id: `3`,
    city: `Amsterdam`,
    title: `Capsule hotel`,
    type: `Capsule`,
    cost: 30,
    rating: 60,
    image: `img/room.jpg`,
    photos: [
      {
        src: `img/room.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/apartment-01.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/apartment-03.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/studio-01.jpg`,
        alt: `Photo studio`
      },
      {
        src: `img/apartment-01.jpg`,
        alt: `Photo studio`
      }
    ],
    features: {
      type: `Capsule`,
      bedrooms: 1,
      guests: 1,
    },
    isFavorite: false,
    isPremium: false,
    service: [`Wi-Fi`, `Lamp`, `bed`, `Washing machine`],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Yamoto Kawasaki`,
      description: `Welcome to the future!`,
      super: false,
    },
  },
];
