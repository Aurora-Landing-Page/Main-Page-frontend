import AuroraImage from "./images/img4.jpeg";
import pdf1 from "./pdf/MnM/MnM_.pdf";
import pdf2 from "./pdf/Parivesh/Parivesh Fashion Show_.pdf";
import pdf3 from "./pdf/Corna/Corna.pdf";
import sample from "./pdf/sample.pdf";
import corna from './images/Flagship(5-8)/corna.jpg'
import mnm from './images/Flagship(5-8)/MR. AND MS. AURORA.png'
import parivesh from './images/Flagship(5-8)/parivesh.jpg'
import esports from './images/Flagship(5-8)/esports.png'




const FlagshipEvents = [
  {
    Title: "Mr. And Mrs. Aurora",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Get ready to redefine elegance and grace as Mr. and Ms. Aurora beckons you to showcase your charisma and charm. This prestigious event isn't just a contest; it's an opportunity to embody sophistication and poise. Whether it's the charisma in your smile or the confidence in your stride, Mr. and Ms. Aurora is your platform to shine. Join us in celebrating individuality and style, where contestants from across the country exude elegance and vie for the coveted titles. It's not just a competition; it's a journey of self-expression and a celebration of grace. Embrace the spotlight and let your aura illuminate the stage at Mr. and Ms. Aurora!     ",
      rules: pdf1,
    Time: "10:00",
    Venue: "OAT",
    Image: mnm,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Parivesh",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Parivesh, the esteemed fashion show at our illustrious college fest, 'Aurora,' stands as a beacon of artistic expression and style. This flagship event unites talents from various backgrounds, curating a mesmerizing display of beauty, fashion, and boundless creativity. As the crowning jewel of our fest, 'Parivesh' ignites the stage with innovative designs and bold presentations. Join us for an enchanting evening where the runway becomes a canvas for audacious fashion statements and stunning elegance. Immerse yourself in the allure of 'Parivesh,' a spectacle that transcends boundaries, celebrating the artistry and passion within the realm of style and fashion.",
    rules: pdf2,

    Time: "10:00",
    Venue: "OAT",
    Image: parivesh,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Corna",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Corna beckons those with music in their souls, a team by their side, and instruments at their fingertips—an opportunity to soar into the realm of renowned bands! It's time to embrace your chance at becoming the next big sensation in the world of music. Corna isn't just a competition; it's the ultimate battleground where bands nationwide showcase their musical prowess. Prepare diligently, let the adrenaline surge, and get ready to captivate the audience with your musical brilliance. Join us for an electrifying experience at Corna—a stage where talent meets opportunity, and where the journey to musical greatness begins!    ",
      rules: pdf3,

    Time: "10:00",
    Venue: "OAT",
    Image: corna,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Esports",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Gear up for an adrenaline-charged battle as Esports brings you the ultimate showdown in Valorant and BGMI (Battlegrounds Mobile India). It's more than just gaming; it's a battleground where strategy meets skill, and competitors rise to conquer the digital realm. Esports isn't just about playing; it's about tactical brilliance and unwavering focus. Join us for an electrifying experience, where gamers from across the spectrum unite to showcase their prowess in these fiercely competitive games. Whether it's the tactical maneuvers in Valorant or the thrill of survival in BGMI, Esports invites you to step into the digital arena, compete at your best, and claim victory in the world of competitive gaming!    ",
    rules: sample,
    Time: "10:00",
    Venue: "OAT",
    Image: esports,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  }
];

export default FlagshipEvents;
