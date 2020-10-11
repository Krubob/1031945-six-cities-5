export default [
  {
    id: `0`,
    title: `Ritz Carlton`,
    type: `Private room`,
    cost: 500,
    rating: 4.1,
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
    mark: `Premium`,
    service: [`Wi-Fi`, `PS5`, `Home cinema`, `Soundbar`, `Popcorn`],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Monica`,
      description: `Welcome to our world class hotel!`,
      super: true,
    },
  }, {
    id: `1`,
    title: `Village in the forest`,
    type: `Cabin`,
    cost: 100,
    rating: 3,
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
    service: [`Wi-Fi`, `Free cow milk`, `Russian bath-house`],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Boris Farmer`,
      description: `Welcome to my village!`,
      super: false,
    },
  }, {
    id: `2`,
    title: `The Four Seasons`,
    type: `Apartment`,
    cost: 800,
    rating: 4.8,
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
        src: `img/studio-01.jpg`,
        alt: `Photo studio`
      },
    ],
    features: {
      type: `Apartment`,
      bedrooms: 3,
      guests: 10,
    },
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
    title: `Capsule hotel`,
    type: `Capsule`,
    cost: 30,
    rating: 2.8,
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
    service: [`Wi-Fi`, `Lamp`, `bed`, `Washing machine`],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Yamoto Kawasaki`,
      description: `Welcome to the future!`,
      super: false,
    },
  },
];
