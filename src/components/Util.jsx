import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Baby Mama",
      cover:
        "https://wadupnaija.com/wp-content/uploads/2021/06/Peruzzi-The-Leaktape.jpg",
      artist: "Peruzzi",
      audio:
        "https://wadupnaija.com/wp-content/uploads/2021/06/Peruzzi-Baby-Mama.mp3?_=1",
      color: ["#7A4C38", "#1A211D"],
      id: uuidv4(),
      active: true,
    },

    {
      name: "Vintage",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      artist: "Needle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17088",
      color: ["#E75C4D", "#5B514F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Waves",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/80be32197ca7971424bef5e4d0c6810e1d4334c6-1024x1024.jpg",
      artist: "CYGN",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14981",
      color: ["#101330", "#DD6FEC"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Desire",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/b879702e76f573e03ce60da9237ded86b4a3ebd7-1024x1024.jpg",
      artist: "Psalm trees, Guilaume Muschalle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10554",
      color: ["#FDF7E8", "#527C66"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Toofpick",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11227",
      color: ["#9C669A", "#1F2746"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hereafter",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/b879702e76f573e03ce60da9237ded86b4a3ebd7-1024x1024.jpg",
      artist: "Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
      color: ["#3C5693", "#F19866"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Everything Fades to Blue",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10034",
      color: ["#8AC0CD", "#211E37"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Going Back",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
      color: ["#E6D7E0", "#345461"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
