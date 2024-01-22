import AuroraImage from "./images/img4.jpeg";
import pdf1 from "./pdf/Le Arte Fiesta/Best Out of Waste.pdf";
import pdf2 from "./pdf/Le Arte Fiesta/Graffathon.pdf";
import pdf3 from "./pdf/Le Arte Fiesta/Naqaab (Face Painting).pdf";
import pdf4 from "./pdf/Le Arte Fiesta/On-Spot Painting.pdf";
import pdf15 from "./pdf/Le Arte Fiesta/Sculpture Making.pdf";
import pdf5 from "./pdf/StepUp/Classical Dance.pdf";
import pdf6 from "./pdf/StepUp/Duet Dance.pdf";
import pdf7 from "./pdf/StepUp/Solo Dance Battle.pdf";
import pdf16 from './pdf/StepUp/Western Dance.pdf';
import pdf8 from "./pdf/Eumelia/Classical Singing (solo_duo).pdf";
import pdf9 from "./pdf/Eumelia/Freestyle Singing (Duo)__.pdf";
import pdf10 from "./pdf/Eumelia/Freestyle Singing (Group)_.pdf";
import pdf11 from "./pdf/Eumelia/Freestyle Singing (Solo)_.pdf";
import pdf12 from "./pdf/Eumelia/Instrumental_Acoustic.pdf";
import pdf13 from "./pdf/Eumelia/Acapella (group).pdf";
import pdf17 from "./pdf/The Pikture/Panorama.pdf";
import pdf18 from "./pdf/The Pikture/Pixar.pdf";
import pdf19 from "./pdf/The Pikture/Short Movie Making.pdf";
import pdf20 from "./pdf/Literary and Speaking Activities/English Debate.pdf";
import pdf21 from "./pdf/Literary and Speaking Activities/Hindi Debate.pdf";
import pdf22 from "./pdf/Literary and Speaking Activities/Open Mic.pdf";
import pdf23 from "./pdf/Literary and Speaking Activities/Extempore.pdf";
import pdf24 from "./pdf/Dramatics/Damsharas.pdf";
import pdf25 from "./pdf/Dramatics/NUKKAD NATAK.pdf";
import pdf26 from "./pdf/Misc Informal Events/APTITUDE QUIZ  _.pdf";
import pdf27 from "./pdf/Misc Informal Events/CineBinge Quiz_.pdf";
import pdf28 from "./pdf/Misc Informal Events/Funk Feets.pdf";
import pdf29 from "./pdf/Misc Informal Events/IPL Auction.pdf";
import pdf30 from "./pdf/Misc Informal Events/Pictionary.pdf";
import pdf31 from "./pdf/Misc Informal Events/Rap Battle_.pdf";
import pdf32 from "./pdf/Misc Informal Events/Silent DJ.pdf";
import pdf33 from "./pdf/Misc Informal Events/Slam Poetry.pdf";
import pdf34 from "./pdf/Misc Informal Events/Thomso Karaoke.pdf";
import pdf35 from "./pdf/Misc Informal Events/Traesure Hunt.pdf";
import eumelia from './images/Events(9th-12th)/Eumelia.png'
import leartes from './images/Events(9th-12th)/LeArteFiesta.png'
import literary from './images/Events(9th-12th)/Literacy and Speaking.png'
import stepUp from './images/Events(9th-12th)/StepUp.png'
import thepikture from './images/Events(9th-12th)/The Pikture.png'





const events = [
  {
    Title: "La Arte Fiesta - Graffathon",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"La Arte Fiesta, is a vibrant celebration of creativity, hosting an array of captivating artistic endeavors. Featuring a series of eclectic events, including 'Best out of Waste', 'Naqaab (Face Painting)', 'Graffathon', 'On-spot Painting (Live Art)', 'Sneaker Painting', and the innovative online showcase, 'Doodly-doo'. This festival serves as a platform for artists and enthusiasts to unleash their imagination, turning ordinary moments into extraordinary masterpieces. Join us in this jubilant convergence of talent and innovation, where artistry knows no bounds and creativity takes center stage.",
    rules: pdf2,
    Time: "10:00",
    Venue: "OAT",
    Image: leartes,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "La Arte Fiesta - Best Out of Waste",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"La Arte Fiesta, is a vibrant celebration of creativity, hosting an array of captivating artistic endeavors. Featuring a series of eclectic events, including 'Best out of Waste', 'Naqaab (Face Painting)', 'Graffathon', 'On-spot Painting (Live Art)', 'Sneaker Painting', and the innovative online showcase, 'Doodly-doo'. This festival serves as a platform for artists and enthusiasts to unleash their imagination, turning ordinary moments into extraordinary masterpieces. Join us in this jubilant convergence of talent and innovation, where artistry knows no bounds and creativity takes center stage.",
    rules: pdf1,
    Time: "10:00",
    Venue: "OAT",
    Image: leartes,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "La Arte Fiesta - Naqaab (Face Painting)",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"La Arte Fiesta, is a vibrant celebration of creativity, hosting an array of captivating artistic endeavors. Featuring a series of eclectic events, including 'Best out of Waste', 'Naqaab (Face Painting)', 'Graffathon', 'On-spot Painting (Live Art)', 'Sneaker Painting', and the innovative online showcase, 'Doodly-doo'. This festival serves as a platform for artists and enthusiasts to unleash their imagination, turning ordinary moments into extraordinary masterpieces. Join us in this jubilant convergence of talent and innovation, where artistry knows no bounds and creativity takes center stage.",
    rules: pdf3,
    Time: "10:00",
    Venue: "OAT",
    Image: leartes,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "La Arte Fiesta - On Spot Painting (Live Art)",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"La Arte Fiesta, is a vibrant celebration of creativity, hosting an array of captivating artistic endeavors. Featuring a series of eclectic events, including 'Best out of Waste', 'Naqaab (Face Painting)', 'Graffathon', 'On-spot Painting (Live Art)', 'Sneaker Painting', and the innovative online showcase, 'Doodly-doo'. This festival serves as a platform for artists and enthusiasts to unleash their imagination, turning ordinary moments into extraordinary masterpieces. Join us in this jubilant convergence of talent and innovation, where artistry knows no bounds and creativity takes center stage.",
    rules: pdf4,
    Time: "10:00",
    Venue: "OAT",
    Image: leartes,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "La Arte Fiesta - Sculputre Making",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"La Arte Fiesta, is a vibrant celebration of creativity, hosting an array of captivating artistic endeavors. Featuring a series of eclectic events, including 'Best out of Waste', 'Naqaab (Face Painting)', 'Graffathon', 'On-spot Painting (Live Art)', 'Sneaker Painting', and the innovative online showcase, 'Doodly-doo'. This festival serves as a platform for artists and enthusiasts to unleash their imagination, turning ordinary moments into extraordinary masterpieces. Join us in this jubilant convergence of talent and innovation, where artistry knows no bounds and creativity takes center stage.",
    rules: pdf15,
    Time: "10:00",
    Venue: "OAT",
    Image: leartes,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },


  {
    Title: "Step-up - Classical Dance",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Step-up, epitomizes the rhythmic pulse of diverse dance forms, uniting performers across various genres. From the elegant movements of the Classical Group to the dynamic energy of the Western Group, and the mesmerizing collaboration of Fusion Duos, each performance showcases unparalleled artistry and passion. Embrace the spontaneity of the Impromptu Solo Dance Battle, where individual talents ignite an electrifying dance-off. Join us in celebrating the universal language of movement, where every step becomes an expression of creativity and unity.",
    rules: pdf5,
    Time: "10:00",
    Venue: "OAT",
    Image: stepUp,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Step-up  - Duet Dance",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Step-up, epitomizes the rhythmic pulse of diverse dance forms, uniting performers across various genres. From the elegant movements of the Classical Group to the dynamic energy of the Western Group, and the mesmerizing collaboration of Fusion Duos, each performance showcases unparalleled artistry and passion. Embrace the spontaneity of the Impromptu Solo Dance Battle, where individual talents ignite an electrifying dance-off. Join us in celebrating the universal language of movement, where every step becomes an expression of creativity and unity.",
    rules: pdf6,
    Time: "10:00",
    Venue: "OAT",
    Image: stepUp,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Step-up - Western Dance",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Step-up, epitomizes the rhythmic pulse of diverse dance forms, uniting performers across various genres. From the elegant movements of the Classical Group to the dynamic energy of the Western Group, and the mesmerizing collaboration of Fusion Duos, each performance showcases unparalleled artistry and passion. Embrace the spontaneity of the Impromptu Solo Dance Battle, where individual talents ignite an electrifying dance-off. Join us in celebrating the universal language of movement, where every step becomes an expression of creativity and unity.",
    rules: pdf16,
    Time: "10:00",
    Venue: "OAT",
    Image: stepUp,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Step-up - Solo Dance Battle",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Step-up, epitomizes the rhythmic pulse of diverse dance forms, uniting performers across various genres. From the elegant movements of the Classical Group to the dynamic energy of the Western Group, and the mesmerizing collaboration of Fusion Duos, each performance showcases unparalleled artistry and passion. Embrace the spontaneity of the Impromptu Solo Dance Battle, where individual talents ignite an electrifying dance-off. Join us in celebrating the universal language of movement, where every step becomes an expression of creativity and unity.",
    rules: pdf7,
    Time: "10:00",
    Venue: "OAT",
    Image: stepUp,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },


  {
    Title: "Eumelia - Classical Singing (solo_duo)",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Eumelia, is a harmonious ode to the soulful world of music, featuring captivating performances across multiple categories. Dive into the melodic realm of Solo Singing, where individual voices resonate with emotion and talent. Feel the synergy in Group Singing as voices intertwine in perfect harmony. Experience the instrumental brilliance of both soloists and ensembles, weaving enchanting melodies that captivate hearts. Join us in this celebration of musical diversity, where every note reverberates with passion and artistry.",
    rules: pdf8,
    Time: "10:00",
    Venue: "OAT",
    Image: eumelia,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Eumelia - Freestyle Singing (Duo)",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Eumelia, is a harmonious ode to the soulful world of music, featuring captivating performances across multiple categories. Dive into the melodic realm of Solo Singing, where individual voices resonate with emotion and talent. Feel the synergy in Group Singing as voices intertwine in perfect harmony. Experience the instrumental brilliance of both soloists and ensembles, weaving enchanting melodies that captivate hearts. Join us in this celebration of musical diversity, where every note reverberates with passion and artistry.",
    rules: pdf9,
    Time: "10:00",
    Venue: "OAT",
    Image: eumelia,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Eumelia - Freestyle Singing (Solo)",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Eumelia, is a harmonious ode to the soulful world of music, featuring captivating performances across multiple categories. Dive into the melodic realm of Solo Singing, where individual voices resonate with emotion and talent. Feel the synergy in Group Singing as voices intertwine in perfect harmony. Experience the instrumental brilliance of both soloists and ensembles, weaving enchanting melodies that captivate hearts. Join us in this celebration of musical diversity, where every note reverberates with passion and artistry.",
    rules: pdf11,
    Time: "10:00",
    Venue: "OAT",
    Image: eumelia,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Eumelia - Freestyle Singing (Group)",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Eumelia, is a harmonious ode to the soulful world of music, featuring captivating performances across multiple categories. Dive into the melodic realm of Solo Singing, where individual voices resonate with emotion and talent. Feel the synergy in Group Singing as voices intertwine in perfect harmony. Experience the instrumental brilliance of both soloists and ensembles, weaving enchanting melodies that captivate hearts. Join us in this celebration of musical diversity, where every note reverberates with passion and artistry.",
    rules: pdf10,
    Time: "10:00",
    Venue: "OAT",
    Image: eumelia,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Eumelia - Instrumental_Acoustic",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Eumelia, is a harmonious ode to the soulful world of music, featuring captivating performances across multiple categories. Dive into the melodic realm of Solo Singing, where individual voices resonate with emotion and talent. Feel the synergy in Group Singing as voices intertwine in perfect harmony. Experience the instrumental brilliance of both soloists and ensembles, weaving enchanting melodies that captivate hearts. Join us in this celebration of musical diversity, where every note reverberates with passion and artistry.",
    rules: pdf12,
    Time: "10:00",
    Venue: "OAT",
    Image: eumelia,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Eumelia - Acapella (group)",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Eumelia, is a harmonious ode to the soulful world of music, featuring captivating performances across multiple categories. Dive into the melodic realm of Solo Singing, where individual voices resonate with emotion and talent. Feel the synergy in Group Singing as voices intertwine in perfect harmony. Experience the instrumental brilliance of both soloists and ensembles, weaving enchanting melodies that captivate hearts. Join us in this celebration of musical diversity, where every note reverberates with passion and artistry.",
    rules: pdf13,
    Time: "10:00",
    Venue: "OAT",
    Image: eumelia,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },

  {
    Title: "The Pikture - Panorama",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"The Pikture, event is a dynamic canvas celebrating the art of visual storytelling. 'Panorama' invites photographers to capture evocative moments, painting diverse perspectives in each frame. 'Portray It' unravels captivating narratives through photo stories, weaving tales within the confines of a single image. Meanwhile, 'Short Movie Making' elevates storytelling through concise cinematic expressions, capturing emotions and narratives in compact yet impactful films. This event unites creatives in a celebration of visual artistry, where every click and reel unveils unique narratives, etching moments into a timeless tapestry of expression.",
    rules: pdf17,
    Time: "10:00",
    Venue: "OAT",
    Image: thepikture,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "The Pikture - Pixar",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"The Pikture, event is a dynamic canvas celebrating the art of visual storytelling. 'Panorama' invites photographers to capture evocative moments, painting diverse perspectives in each frame. 'Portray It' unravels captivating narratives through photo stories, weaving tales within the confines of a single image. Meanwhile, 'Short Movie Making' elevates storytelling through concise cinematic expressions, capturing emotions and narratives in compact yet impactful films. This event unites creatives in a celebration of visual artistry, where every click and reel unveils unique narratives, etching moments into a timeless tapestry of expression.",
    rules: pdf18,
    Time: "10:00",
    Venue: "OAT",
    Image: thepikture,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "The Pikture - Short Movie Making",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"The Pikture, event is a dynamic canvas celebrating the art of visual storytelling. 'Panorama' invites photographers to capture evocative moments, painting diverse perspectives in each frame. 'Portray It' unravels captivating narratives through photo stories, weaving tales within the confines of a single image. Meanwhile, 'Short Movie Making' elevates storytelling through concise cinematic expressions, capturing emotions and narratives in compact yet impactful films. This event unites creatives in a celebration of visual artistry, where every click and reel unveils unique narratives, etching moments into a timeless tapestry of expression.",
    rules: pdf19,
    Time: "10:00",
    Venue: "OAT",
    Image: thepikture,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },

  {
    Title: "Literary & Speaking Arts - English Debate",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Literary & Speaking Arts, sets the stage for a captivating amalgamation of expressive talents. Dive into the world of 'Open Mic', where voices resonate with poetry, storytelling, and music. Engage in thought-provoking discussions with 'English Debate' and 'Hindi Debate', each fostering critical thinking and eloquence. 'Morning No 1 - Radio' amplifies the charm of live broadcasting, delivering engaging content and vibrant discussions. Embrace the spontaneity of 'Extempore', where quick thinking meets compelling oration. This event celebrates the eloquence and artistry of language, uniting enthusiasts and wordsmiths in a tapestry of literary expression and oratory brilliance.",
    rules: pdf20,
    Time: "10:00",
    Venue: "OAT",
    Image: literary,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Literary & Speaking Arts - Hindi Debate", 
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Literary & Speaking Arts, sets the stage for a captivating amalgamation of expressive talents. Dive into the world of 'Open Mic', where voices resonate with poetry, storytelling, and music. Engage in thought-provoking discussions with 'English Debate' and 'Hindi Debate', each fostering critical thinking and eloquence. 'Morning No 1 - Radio' amplifies the charm of live broadcasting, delivering engaging content and vibrant discussions. Embrace the spontaneity of 'Extempore', where quick thinking meets compelling oration. This event celebrates the eloquence and artistry of language, uniting enthusiasts and wordsmiths in a tapestry of literary expression and oratory brilliance.",
    rules: pdf21,
    Time: "10:00",
    Venue: "OAT",
    Image: literary,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Literary & Speaking Arts - Open Mic",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Literary & Speaking Arts, sets the stage for a captivating amalgamation of expressive talents. Dive into the world of 'Open Mic', where voices resonate with poetry, storytelling, and music. Engage in thought-provoking discussions with 'English Debate' and 'Hindi Debate', each fostering critical thinking and eloquence. 'Morning No 1 - Radio' amplifies the charm of live broadcasting, delivering engaging content and vibrant discussions. Embrace the spontaneity of 'Extempore', where quick thinking meets compelling oration. This event celebrates the eloquence and artistry of language, uniting enthusiasts and wordsmiths in a tapestry of literary expression and oratory brilliance.",
    rules: pdf22,
    Time: "10:00",
    Venue: "OAT",
    Image: literary,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Literary & Speaking Arts - Extempore",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Literary & Speaking Arts, sets the stage for a captivating amalgamation of expressive talents. Dive into the world of 'Open Mic', where voices resonate with poetry, storytelling, and music. Engage in thought-provoking discussions with 'English Debate' and 'Hindi Debate', each fostering critical thinking and eloquence. 'Morning No 1 - Radio' amplifies the charm of live broadcasting, delivering engaging content and vibrant discussions. Embrace the spontaneity of 'Extempore', where quick thinking meets compelling oration. This event celebrates the eloquence and artistry of language, uniting enthusiasts and wordsmiths in a tapestry of literary expression and oratory brilliance.",
    rules: pdf23,
    Time: "10:00",
    Venue: "OAT",
    Image: literary,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },

  {
    Title: "Dramatics - Damsharas",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Dramatics, brings forth a captivating theater experience, showcasing versatile performances across multiple genres. Engage with the raw essence of societal narratives through 'Nukkad Natak', where the streets become a stage for impactful storytelling. Delve into the depths of emotion and character in 'Mono Act', witnessing the power of solo performances in conveying multifaceted stories. Feel the vibrancy of expression in 'Damsharas', where the art of mime and gestures paints vivid stories without uttering a single word. Join us in this celebration of dramatic artistry, where every performance leaves an indelible mark on the stage of storytelling.",
    rules: pdf24,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Dramatics - Nukkad Natak",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Dramatics, brings forth a captivating theater experience, showcasing versatile performances across multiple genres. Engage with the raw essence of societal narratives through 'Nukkad Natak', where the streets become a stage for impactful storytelling. Delve into the depths of emotion and character in 'Mono Act', witnessing the power of solo performances in conveying multifaceted stories. Feel the vibrancy of expression in 'Damsharas', where the art of mime and gestures paints vivid stories without uttering a single word. Join us in this celebration of dramatic artistry, where every performance leaves an indelible mark on the stage of storytelling.",
    rules: pdf25,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },

  {
    Title: "Miscellaneous - Aptitude Quiz",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Within our event lineup, there are other miscellaneous activities that promise a blend of fun and engagement. Alongside the high-energy 'IPL Auction', stimulating 'Aptitude Quiz', and creative 'Pictionary', there's the trivia-packed 'CineBinge Quiz'. Dive into the digital realm with the interactive 'Reels' or embark on an adventurous 'Treasure Hunt'. Engage in live discussions via 'Instagram Live' or witness the electrifying showdowns of 'Rap Battles' and captivating 'Solo Acts'. These diverse experiences ensure a spirited mix of entertainment and engagement for everyone involved.",    
    rules: pdf26,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Miscellaneous - CineBinge Quiz",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Within our event lineup, there are other miscellaneous activities that promise a blend of fun and engagement. Alongside the high-energy 'IPL Auction', stimulating 'Aptitude Quiz', and creative 'Pictionary', there's the trivia-packed 'CineBinge Quiz'. Dive into the digital realm with the interactive 'Reels' or embark on an adventurous 'Treasure Hunt'. Engage in live discussions via 'Instagram Live' or witness the electrifying showdowns of 'Rap Battles' and captivating 'Solo Acts'. These diverse experiences ensure a spirited mix of entertainment and engagement for everyone involved.",    
    rules: pdf27,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Miscellaneous - Funk Feets",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Within our event lineup, there are other miscellaneous activities that promise a blend of fun and engagement. Alongside the high-energy 'IPL Auction', stimulating 'Aptitude Quiz', and creative 'Pictionary', there's the trivia-packed 'CineBinge Quiz'. Dive into the digital realm with the interactive 'Reels' or embark on an adventurous 'Treasure Hunt'. Engage in live discussions via 'Instagram Live' or witness the electrifying showdowns of 'Rap Battles' and captivating 'Solo Acts'. These diverse experiences ensure a spirited mix of entertainment and engagement for everyone involved.",    
    rules: pdf28,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Miscellaneous - IPL Auction",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Within our event lineup, there are other miscellaneous activities that promise a blend of fun and engagement. Alongside the high-energy 'IPL Auction', stimulating 'Aptitude Quiz', and creative 'Pictionary', there's the trivia-packed 'CineBinge Quiz'. Dive into the digital realm with the interactive 'Reels' or embark on an adventurous 'Treasure Hunt'. Engage in live discussions via 'Instagram Live' or witness the electrifying showdowns of 'Rap Battles' and captivating 'Solo Acts'. These diverse experiences ensure a spirited mix of entertainment and engagement for everyone involved.",    
    rules: pdf29,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Miscellaneous - Pictionary",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Within our event lineup, there are other miscellaneous activities that promise a blend of fun and engagement. Alongside the high-energy 'IPL Auction', stimulating 'Aptitude Quiz', and creative 'Pictionary', there's the trivia-packed 'CineBinge Quiz'. Dive into the digital realm with the interactive 'Reels' or embark on an adventurous 'Treasure Hunt'. Engage in live discussions via 'Instagram Live' or witness the electrifying showdowns of 'Rap Battles' and captivating 'Solo Acts'. These diverse experiences ensure a spirited mix of entertainment and engagement for everyone involved.",    
    rules: pdf30,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Miscellaneous - Rap Battle",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Within our event lineup, there are other miscellaneous activities that promise a blend of fun and engagement. Alongside the high-energy 'IPL Auction', stimulating 'Aptitude Quiz', and creative 'Pictionary', there's the trivia-packed 'CineBinge Quiz'. Dive into the digital realm with the interactive 'Reels' or embark on an adventurous 'Treasure Hunt'. Engage in live discussions via 'Instagram Live' or witness the electrifying showdowns of 'Rap Battles' and captivating 'Solo Acts'. These diverse experiences ensure a spirited mix of entertainment and engagement for everyone involved.",    
    rules: pdf31,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Miscellaneous - Silent DJ",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Within our event lineup, there are other miscellaneous activities that promise a blend of fun and engagement. Alongside the high-energy 'IPL Auction', stimulating 'Aptitude Quiz', and creative 'Pictionary', there's the trivia-packed 'CineBinge Quiz'. Dive into the digital realm with the interactive 'Reels' or embark on an adventurous 'Treasure Hunt'. Engage in live discussions via 'Instagram Live' or witness the electrifying showdowns of 'Rap Battles' and captivating 'Solo Acts'. These diverse experiences ensure a spirited mix of entertainment and engagement for everyone involved.",    
    rules: pdf32,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Miscellaneous - Slam Poetry",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Within our event lineup, there are other miscellaneous activities that promise a blend of fun and engagement. Alongside the high-energy 'IPL Auction', stimulating 'Aptitude Quiz', and creative 'Pictionary', there's the trivia-packed 'CineBinge Quiz'. Dive into the digital realm with the interactive 'Reels' or embark on an adventurous 'Treasure Hunt'. Engage in live discussions via 'Instagram Live' or witness the electrifying showdowns of 'Rap Battles' and captivating 'Solo Acts'. These diverse experiences ensure a spirited mix of entertainment and engagement for everyone involved.",    
    rules: pdf33,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Miscellaneous - Thomso Karaoke",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Within our event lineup, there are other miscellaneous activities that promise a blend of fun and engagement. Alongside the high-energy 'IPL Auction', stimulating 'Aptitude Quiz', and creative 'Pictionary', there's the trivia-packed 'CineBinge Quiz'. Dive into the digital realm with the interactive 'Reels' or embark on an adventurous 'Treasure Hunt'. Engage in live discussions via 'Instagram Live' or witness the electrifying showdowns of 'Rap Battles' and captivating 'Solo Acts'. These diverse experiences ensure a spirited mix of entertainment and engagement for everyone involved.",    
    rules: pdf34,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
  {
    Title: "Miscellaneous - Treasure Hunt",
    Content: "Sway away",
    Day: "Wednesday",
    Date: "16th February , 2023",
    Description:"Within our event lineup, there are other miscellaneous activities that promise a blend of fun and engagement. Alongside the high-energy 'IPL Auction', stimulating 'Aptitude Quiz', and creative 'Pictionary', there's the trivia-packed 'CineBinge Quiz'. Dive into the digital realm with the interactive 'Reels' or embark on an adventurous 'Treasure Hunt'. Engage in live discussions via 'Instagram Live' or witness the electrifying showdowns of 'Rap Battles' and captivating 'Solo Acts'. These diverse experiences ensure a spirited mix of entertainment and engagement for everyone involved.",    
    rules: pdf35,
    Time: "10:00",
    Venue: "OAT",
    Image: AuroraImage,
    GroupSize: 2,
    TicketPrice: 100,
    EventId: "Aurora-parivesh",
  },
];

export default events;
