// import all images from assets/images directory
//import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
//import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  // {
  //   id: 1,
  //   brand: "Tesla",
  //   rating: 112,
  //   carName: "Tesla Malibu",
  //   imgUrl: img01,
  //   model: "Model 3",
  //   price: 500,
  //   speed: "20kmpl",
  //   gps: "GPS Navigation",
  //   seatType: "Heated seats",
  //   automatic: "Automatic",
  //   description:
  //     " The Tesla Malibu is a sleek, high-performance electric vehicle that combines cutting-edge technology with luxury design. Known for its long-range capabilities, smooth acceleration, and eco-friendly operation, the Malibu offers an exceptional driving experience with zero emissions. Its advanced autopilot features, spacious interior, and premium materials make it the perfect blend of innovation and comfort, ideal for both city driving and long-distance travel. Whether you're looking for style, sustainability, or top-tier technology, the Tesla Malibu delivers on all fronts.",
  // },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Camry",
    imgUrl: img02,
    model: "Model-2022",
    price: 500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Toyota Aventador is a dynamic fusion of Toyota's renowned reliability and high-performance engineering. Designed with a sleek, aerodynamic exterior, the Aventador boasts impressive power under the hood, offering a thrilling driving experience. With a spacious, well-crafted interior and advanced safety features, it provides both comfort and peace of mind for drivers and passengers. Combining cutting-edge technology with fuel efficiency, the Toyota Aventador is perfect for those seeking a stylish, performance-oriented vehicle that excels in both city and highway driving."
   },

//   {
//     id: 3,
//     brand: "BMW",
//     rating: 132,
//     carName: "BMW X3",
//     imgUrl: img03,
//     model: "Model-2022",
//     price: 650,
//     speed: "20kmpl",
//     gps: "GPS Navigation",
//     seatType: "Heated seats",
//     automatic: "Automatic",
//     description:
//     "The BMW X3 is a luxury compact SUV that offers a perfect balance of performance, comfort, and versatility. With its powerful engine options and precise handling, the X3 delivers a dynamic driving experience, whether you're navigating city streets or cruising on the highway. Its sophisticated design features a spacious and upscale interior with premium materials and cutting-edge technology, including intuitive infotainment and advanced safety systems. The BMW X3 combines the brand’s signature sporty character with practicality, making it an ideal choice for those who want both elegance and utility in a compact SUV."
//  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 700,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Nissan Mercielago is a bold and stylish sports car that blends Nissan’s engineering prowess with exhilarating performance. With a sleek, aerodynamic design and a powerful engine under the hood, the Mercielago offers thrilling acceleration and responsive handling for an unforgettable driving experience. Its well-appointed interior provides comfort and advanced technology, ensuring both driver and passengers enjoy a luxurious ride. Whether on city streets or open highways, the Nissan Mercielago stands out with its combination of high performance, cutting-edge features, and head-turning style."
  },

  {
    id: 5,
    brand: "Toyota",
    rating: 94,
    carName: "Toyta Camry",
    imgUrl: img05,
    model: "Model-2020",
    price: 450,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Ferrari Camry is an imaginative fusion of Ferrari's iconic performance and the practicality of a mid-sized sedan. This unique vehicle combines the luxurious craftsmanship and cutting-edge technology synonymous with the Ferrari brand while providing the reliability and comfort of the Toyota Camry. Equipped with a powerful engine and responsive handling, the Ferrari Camry delivers an exhilarating driving experience, whether navigating city streets or embarking on long journeys. Its sleek design features sporty accents and a refined interior filled with high-quality materials and advanced infotainment systems, making it the perfect choice for those seeking a blend of luxury and everyday usability."
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 850,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Mercedes-Benz XC90 is a luxury SUV that epitomizes sophistication, performance, and cutting-edge technology. With its striking design and spacious three-row seating, the XC90 offers both comfort and versatility for families and adventure seekers alike. Powered by a range of robust engines, including hybrid options, it delivers a smooth and powerful driving experience on any terrain. Inside, the cabin is a sanctuary of premium materials, advanced infotainment systems, and innovative safety features, ensuring a seamless blend of luxury and practicality. The Mercedes-Benz XC90 is not just a vehicle; it’s a statement of style and excellence in the world of luxury SUVs."
  },

  {
    id: 7,
    brand: "Toyota",
    rating: 82,
    carName: "Toyta Camry",
    imgUrl: img07,
    model: "Model 3",
    price: 500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Audi Fiesta is a vibrant and stylish compact hatchback that embodies Audi's commitment to performance and sophistication. With its sporty design, agile handling, and responsive engines, the Fiesta delivers an exhilarating driving experience while maintaining impressive fuel efficiency. Inside, the cabin showcases premium materials and advanced technology, providing a comfortable and connected ride for both drivers and passengers. The Fiesta is equipped with intuitive infotainment features and a suite of safety systems, ensuring a modern and secure driving experience. Perfect for urban adventures or weekend getaways, the Audi Fiesta combines practicality with the signature luxury that Audi is known for."
  },

  {
    id: 8,
    brand: "Mercedes",
    rating: 52,
    carName: "Mercedes Benz XC90",
    imgUrl: img08,
    model: "Model 3",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
    "The Rolls-Royce Colorado is a breathtaking luxury SUV that redefines opulence and performance in the automotive world. With its commanding presence and elegant design, the Colorado exudes sophistication, featuring exquisite craftsmanship and attention to detail both inside and out. Under the hood, it boasts a powerful engine that delivers a smooth, powerful ride, complemented by advanced suspension technology for exceptional comfort on any terrain. The interior is a masterpiece of luxury, offering spacious seating, high-quality materials, and cutting-edge infotainment systems, ensuring a first-class experience for every passenger. Perfect for those who demand both style and substance, the Rolls-Royce Colorado is the ultimate expression of automotive excellence."
  },
];

export default carData;
