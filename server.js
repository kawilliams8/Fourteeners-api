const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.locals.title = "Fourteeners API";
app.locals.peaks = [
{ id: 9,
  name: "Gray's Peak",
  elevation: 14270,
  rank: 9,
  range: "Front Range",
  forest: "Arapaho",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "critical",
  numberOfRoutes: 4,
  routes: {
    northSlopes: {
      mileage: 8,
      gain: 3000,
      difficulty: "class 1",
      exposure: 1,
    },
    southRidge: {
      mileage: 7,
      gain: 3250,
      difficulty: "class 2",
      exposure: 2,
    },
    lostRatCouloir: {
      mileage: 6.5,
      gain: 3000,
      difficulty: "class 3",
      exposure: 3,
    },
    southWestRidge: {
      mileage: 10.25,
      gain: 3800,
      difficulty: "class 2",
      exposure: 1,
    },
  },
},
{ id: 11,
  name: "Torrey's Peak",
  elevation: 14267,
  rank: 11,
  range: "Front Range",
  forest: "Arapaho",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "critical",
  numberOfRoutes: 6,
  routes: {
    southSlopes: {
      mileage: 8,
      gain: 3000,
      difficulty: "class 2",
      exposure: 1,
    },
    kelsoRidge: {
      mileage: 6.75,
      gain: 3100,
      difficulty: "class 3",
      exposure: 4,
    },
    deadDogCouloir: {
      mileage: 6.5,
      gain: 3000,
      difficulty: "class 3",
      exposure: 3,
    },
    tuningFork: {
      mileage: 10.5,
      gain: 4500,
      difficulty: "class 2+",
      exposure: 2,
    },
    emperorCouloir: {
      mileage: 9.5,
      gain: 4500,
      difficulty: "class 3",
      exposure: 3,
    },
    westRidge: {
      mileage: 10,
      gain: 5500,
      difficulty: "class 2",
      exposure: 2,
    },
  },
},
{ id: 15,
  name: "Long's Peak",
  elevation: 14255,
  rank: 15,
  range: "Front Range",
  forest: "Rocky Mountain National Park",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "extreme",
  numberOfRoutes: 3,
  routes: {
    keyhole: {
      mileage: 14.5,
      gain: 5100,
      difficulty: "class 3",
      exposure: 4,
    },
    loft: {
      mileage: 13,
      gain: 5300,
      difficulty: "class 3",
      exposure: 4,
    },
    keplingersCouloir: {
      mileage: 16,
      gain: 5900,
      difficulty: "class 3",
      exposure: 4,
    },
  },
},
{
  id: 14,
  name: "Mount Evans",
  elevation: 14262,
  rank: 14,
  range: "Front Range",
  forest: "Arapaho",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "critical",
  numberOfRoutes: 4,
  routes: {
    westRidge: {
      mileage: 17,
      gain: 5600,
      difficulty: "class 2",
      exposure: 2,
    },
    northeastFace: {
      mileage: 3.5,
      gain: 1475,
      difficulty: "class 2",
      exposure: 1,
    },
    northFace: {
      mileage: 2,
      gain: 1500,
      difficulty: "class 3",
      exposure: 4,
    },
  },
},
{
  id: 38,
  name: "Mount Bierstadt",
  elevation: 14060,
  rank: 38,
  range: "Front Range",
  forest: "Arapaho",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "critical",
  numberOfRoutes: 2,
  routes: {
    westSlopes: {
      mileage: 7,
      gain: 2850,
      difficulty: "class 2",
      exposure: 1,
    },
    eastRidge: {
      mileage: 5,
      gain: 3000,
      difficulty: "class 3",
      exposure: 4,
    },
  },
},
{
  id: 30, 
  name: "Pikes Peak",
  elevation: 14100,
  rank: 30,
  range: "Front Range",
  forest: "Pike",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "extreme",
  numberOfRoutes: 2,
  routes: {
    eastSlopes: {
      mileage: 26,
      gain: 7500,
      difficulty: "class 1",
      exposure: 0,
    },
    northwestSlopes: {
      mileage: 14,
      gain: 4300,
      difficulty: "class 2",
      exposure: 1,
    },
  },
},
{
  id: 13,
  name: "Quandary Peak",
  elevation: 14265,
  rank: 13,
  range: "Ten Mile Range",
  forest: "White River",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "extreme",
  numberOfRoutes: 4,
  routes: {
    eastRidge: {
      mileage: 6.75,
      gain: 3450,
      difficulty: "class 1",
      exposure: 1,
    },
    cristoCouloir: {
      mileage: 2,
      gain: 2575,
      difficulty: "class 2+",
      exposure: 2,
    },
    westRidge: {
      mileage: 4,
      gain: 2650,
      difficulty: "class 3",
      exposure: 4,
    },
    quandaryCouloir: {
      mileage: 5.25,
      gain: 3250,
      difficulty: "class 3",
      exposure: 3,
    },
  },
},
{
  id: 8,
  name: "Mount Lincoln",
  elevation: 14286,
  rank: 8,
  range: "Mosquito Range",
  forest: "Pike",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "extreme",
  numberOfRoutes: 3,
  routes: {
    westRidge: {
      mileage: 6,
      gain: 2600,
      difficulty: "class 2",
      exposure: 1,
    },
    lincolnAmpitheatre: {
      mileage: 4.75,
      gain: 3400,
      difficulty: "class 2",
      exposure: 2,
    },
    eastSlopes: {
      mileage: 6.5,
      gain: 2650,
      difficulty: "class 2",
      exposure: 1,
    },
  },
},
{
  id: 100,
  name: "Mount Cameron",
  elevation: 14238,
  rank: "unranked",
  range: "Mosquito Range",
  forest: "Pike",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "extreme",
  numberOfRoutes: 1,
  routes: {
    westRidge: {
      mileage: 4.75,
      gain: 2250,
      difficulty: "class 2",
      exposure: 1,
    },
  },
},
{
  id: 22,
  name: "Mount Bross",
  elevation: 14172,
  rank: 22,
  range: "Mosquito Range",
  forest: "Pike",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "extreme",
  numberOfRoutes: 5,
  routes: {
    westSlopes: {
      mileage: 3.25,
      gain: 2250,
      difficulty: "class 2",
      exposure: 2,
    },
    eastSlopesMineralPark: {
      mileage: 9,
      gain: 2900,
      difficulty: "class 1",
      exposure: 1,
    },
    sGully: {
      mileage: 9.5,
      gain: 2600,
      difficulty: "class 2",
      exposure: 1,
    },
    dollyVardenGully: {
      mileage: 4,
      gain: 2900,
      difficulty: "class 2",
      exposure: 1,
    },
    eastSlopesMooseCreek: {
      mileage: 5,
      gain: 3100,
      difficulty: "class 2",
      exposure: 1,
    },
  },
},
{
  id: 28,
  name: "Mount Democrat",
  elevation: 14148,
  rank: 28,
  range: "Mosquito Range",
  forest: "Pike",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "extreme",
  numberOfRoutes: 2,
  routes: {
    eastSlope: {
      mileage: 4,
      gain: 2150,
      difficulty: "class 2",
      exposure: 1,
    },
    southSlope: {
      mileage: 2.5,
      gain: 2150,
      difficulty: "class 2+",
      exposure: 3,
    },
  },
},
{
  id: 45,
  name: "Mount Sherman",
  elevation: 14036,
  rank: 45,
  range: "Mosquito Range",
  forest: "Pike",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "extreme",
  numberOfRoutes: 3,
  routes: {
    southwestRidge: {
      mileage: 5.25,
      gain: 2100,
      difficulty: "class 2",
      exposure: 2,
    },
    westSlopesFromIowaGulch: {
      mileage: 4.5,
      gain: 2150,
      difficulty: "class 2",
      exposure: 2,
    },
    southSlope: {
      mileage: 8.5,
      gain: 3100,
      difficulty: "class 2",
      exposure: 1,
    },
  },
},
{
  id: 1,
  name: "Mount Elbert",
  elevation: 14433,
  rank: 1,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "high",
  numberOfRoutes: 4,
  routes: {
    northeastRidge: {
      mileage: 9.5,
      gain: 4700,
      difficulty: "class 1",
      exposure: 1,
    },
    eastRidge: {
      mileage: 10,
      gain: 4100,
      difficulty: "class 1",
      exposure: 1,
    },
    southeastRidge: {
      mileage: 11,
      gain: 5300,
      difficulty: "class 2",
      exposure: 1,
    },
    boxCreekCouloir: {
      mileage: 8.5,
      gain: 4150,
      difficulty: "class 2+",
      exposure: 3,
    },
  },
},
{
  id: 2,
  name: "Mount Massive",
  elevation: 14421,
  rank: 2,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "high",
  numberOfRoutes: 3,
  routes: {
    eastSlopes: {
      mileage: 14.5,
      gain: 4500,
      difficulty: "class 2",
      exposure: 2,
    },
    southwestSlopes: {
      mileage: 8,
      gain: 3950,
      difficulty: "class 2",
      exposure: 2,
    },
    eastRidge: {
      mileage: 14,
      gain: 4800,
      difficulty: "class 2+",
      exposure: 2,
    },
  },
},
{
  id: 3,
  name: "Mount Harvard",
  elevation: 14420,
  rank: 3,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "medium",
  numberOfRoutes: 2,
  routes: {
    southSlopes: {
      mileage: 14,
      gain: 4600,
      difficulty: "class 2",
      exposure: 2,
    },
    southFace: {
      mileage: 14,
      gain: 4600,
      difficulty: "class 2",
      exposure: 2,
    },
  },
},
{
  id: 35,
  name: "Mount Columbia",
  elevation: 14073,
  rank: 35,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "medium",
  numberOfRoutes: 3,
  routes: {
    westSlopes: {
      mileage: 11.5,
      gain: 4250,
      difficulty: "class 2",
      exposure: 2,
    },
    southeastRidge: {
      mileage: 12,
      gain: 4800,
      difficulty: "class 2",
      exposure: 2,
    },
    southwestCouloir: {
      mileage: 13.5,
      gain: 4800,
      difficulty: "class 2",
      exposure: 2,
    },
  },
},
{
  id: 5,
  name: "La Plata Peak",
  elevation: 14336,
  rank: 5,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "medium",
  numberOfRoutes: 3,
  routes: {
    northwestRidge: {
      mileage: 9.25,
      gain: 4500,
      difficulty: "class 2",
      exposure: 2,
    },
    southwestRidge: {
      mileage: 7,
      gain: 3380,
      difficulty: "class 2",
      exposure: 2,
    },
    ellingwoodRidge: {
      mileage: 9.5,
      gain: 5900,
      difficulty: "class 3",
      exposure: 4,
    },
  },
},
{
  id: 51,
  name: "Mount of the Holy Cross",
  elevation: 14005,
  rank: 51,
  range: "Sawatch Range",
  forest: "White River",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "high",
  numberOfRoutes: 3,
  routes: {
    northRidge: {
      mileage: 12,
      gain: 5600,
      difficulty: "class 2",
      exposure: 2,
    },
    crossCouloir: {
      mileage: 12.25,
      gain: 5600,
      difficulty: "class 3",
      exposure: 3,
    },
    haloRidge: {
      mileage: 15,
      gain: 5210,
      difficulty: "class 2+",
      exposure: 3,
    },
  },
},
{
  id: 52,
  name: "Mount Huron",
  elevation: 14003,
  rank: 52,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "high",
  numberOfRoutes: 3,
  routes: {
    northwestSlopes: {
      mileage: 6.5,
      gain: 3500,
      difficulty: "class 2",
      exposure: 2,
    },
    southwestSlopes: {
      mileage: 9,
      gain: 3600,
      difficulty: "class 2",
      exposure: 2,
    },
    northRidgeFromLuluGulch: {
      mileage: 8.4,
      gain: 3980,
      difficulty: "class 2",
      exposure: 2,
    },
  },
},
{
  id: 36,
  name: "Missouri Mountain",
  elevation: 14067,
  rank: 36,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "medium",
  numberOfRoutes: 3,
  routes: {
    northwestRidge: {
      mileage: 10.5,
      gain: 4500,
      difficulty: "class 2",
      exposure: 3,
    },
    westRidge: {
      mileage: 11.75,
      gain: 4250,
      difficulty: "class 2",
      exposure: 3,
    },
    northFaceCouloirs: {
      mileage: 9,
      gain: 4500,
      difficulty: "class 2+",
      exposure: 3,
    },
  },
},
{
  id: 18,
  name: "Mount Belford",
  elevation: 14197,
  rank: 18,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "high",
  numberOfRoutes: 1,
  routes: {
    northwestRidge: {
      mileage: 8,
      gain: 4500,
      difficulty: "class 2",
      exposure: 1,
    },
  },
},
{
  id: 26,
  name: "Mount Oxford",
        elevation: 14153,
        rank: 26,
        range: "Sawatch Range",
        forest: "San Isabel",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "high",
        numberOfRoutes: 1,
        routes: {
          viaMtBelford: {
            mileage: 11,
            gain: 5800,
            difficulty: "class 2",
            exposure: 2,
          },
        },
},
{
  id: 20,
  name: "Mount Princeton",
  elevation: 14197,
  rank: 20,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "medium",
  numberOfRoutes: 1,
  routes: {
    eastSlopes: {
      mileage: 6.5,
      gain: 3200,
      difficulty: "class 2",
      exposure: 2,
    },
  },
},
{
  id: 21,
  name: "Mount Yale",
  elevation: 14196,
  rank: 21,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "medium",
  numberOfRoutes: 2,
  routes: {
    southwestSlopes: {
      mileage: 9.5,
      gain: 4300,
      difficulty: "class 2",
      exposure: 2,
    },
    eastRidge: {
      mileage: 10.5,
      gain: 5000,
      difficulty: "class 2",
      exposure: 2,
    },
  },
},
{
  id: 10,
  name: "Mount Antero",
  elevation: 14269,
  rank: 10,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "medium",
  numberOfRoutes: 1,
  routes: {
    westSlopes: {
      mileage: 16,
      gain: 5200,
      difficulty: "class 2",
      exposure: 2,
    },
  },
},
{
  id: 17,
  name: "Mount Shavano",
  elevation: 14229,
  rank: 17,
  range: "Sawatch Range",
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "low",
  numberOfRoutes: 2,
  routes: {
    eastSlopes: {
      mileage: 9,
      gain: 4600,
      difficulty: "class 2",
      exposure: 2,
    },
    angelOfShavano: {
      mileage: 7.5,
      gain: 4600,
      difficulty: "class 2",
      exposure: 2,
    },
  },
},
{
  id: 25,
  name: "Tabeguache Peak",
  elevation: 14155,
  rank: 25,
  forest: "San Isabel",
  grizzlyBears: false,
  marmots: true,
  jerryLevel: "low",
  numberOfRoutes: 2,
  routes: {
    viaMtShavano: {
      mileage: 11,
      gain: 5600,
      difficulty: "class 2",
      exposure: 2,
    },
    westRidge: {
      mileage: 8,
      gain: 4000,
      difficulty: "class 2",
      exposure: 2,
    },
  },
}

];

  sangreDeCristoRange: {
    numberOfPeaks: 10,
    highestPeak: "Blanca Peak",
    peaks: {
      blancaPeak: {
        elevation: 14345,
        rank: 4,
        forest: "Rio Grande",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          northwestRidge: {
            mileage: 17,
            gain: 6500,
            difficulty: "class 2+",
            exposure: 3,
          },
        },
      },
      ellingwoodPoint: {
        elevation: 14042,
        rank: 42,
        forest: "Rio Grande",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 3,
        routes: {
          southFace: {
            mileage: 17,
            gain: 6200,
            difficulty: "class 2+",
            exposure: 2,
          },
          southwestRidge: {
            mileage: 15,
            gain: 2200,
            difficulty: "class 3",
            exposure: 4,
          },
          northRidgeViaSouthZapataCreek: {
            mileage: 11.6,
            gain: 5500,
            difficulty: "class 3",
            exposure: 3,
          },
        },
      },
      littleBearPeak: {
        elevation: 14037,
        rank: 44,
        forest: "Rio Grande",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          westRidge: {
            mileage: 14,
            gain: 6200,
            difficulty: "class 4",
            exposure: 4,
          },
        },
      },
      mountLindsey: {
        elevation: 14042,
        rank: 43,
        forest: "San Isabel",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 3,
        routes: {
          northwestGully: {
            mileage: 8.25,
            gain: 3500,
            difficulty: "class 3",
            exposure: 3,
          },
          northwestRidge: {
            mileage: 8.25,
            gain: 3500,
            difficulty: "class 3",
            exposure: 4,
          },
          northCouloir: {
            mileage: 8.75,
            gain: 3900,
            difficulty: "class 2",
            exposure: 2,
          },
        },
      },
      crestonePeak: {
        elevation: 14294,
        rank: 7,
        forest: "San Isabel",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          southFace: {
            mileage: 14,
            gain: 5700,
            difficulty: "class 3",
            exposure: 4,
          },
        },
      },
      crestoneNeedle: {
        elevation: 14197,
        rank: 19,
        forest: "San Isabel",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 2,
        routes: {
          southFace: {
            mileage: 12,
            gain: 4400,
            difficulty: "class 3",
            exposure: 4,
          },
          ellingwoodArete: {
            mileage: 11.25,
            gain: 4400,
            difficulty: "class 5",
            exposure: 5,
          },
        },
      },
      humboldtPeak: {
        elevation: 14064,
        rank: 37,
        forest: "San Isabel",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 3,
        routes: {
          westRidge: {
            mileage: 11,
            gain: 4200,
            difficulty: "class 2",
            exposure: 2,
          },
          eastRidge: {
            mileage: 8,
            gain: 4300,
            difficulty: "class 2",
            exposure: 3,
          },
          southeastGully: {
            mileage: 8,
            gain: 5400,
            difficulty: "class 2",
            exposure: 2,
          },
        },
      },
      kitCarsonPeak: {
        elevation: 14165,
        rank: 23,
        forest: "Rio Grande",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 4,
        routes: {
          viaChallengerPoint: {
            mileage: 14.5,
            gain: 6250,
            difficulty: "class 3",
            exposure: 3,
          },
          eastRidge: {
            mileage: 14.5,
            gain: 5900,
            difficulty: "class 3",
            exposure: 4,
          },
          northRidge: {
            mileage: 11.4,
            gain: 5315,
            difficulty: "class 4",
            exposure: 4,
          },
          outwardBoundCouloir: {
            mileage: 13.75,
            gain: 5500,
            difficulty: "class 3",
            exposure: 3,
          },
        },
      },
      challengerPoint: {
        elevation: 14081,
        rank: 34,
        forest: "Rio Grande",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 2,
        routes: {
          northSlope: {
            mileage: 12.5,
            gain: 5400,
            difficulty: "class 2+",
            exposure: 2,
          },
          kirkCouloir: {
            mileage: 12.75,
            gain: 5400,
            difficulty: "class 3",
            exposure: 3,
          },
        },
      },
      culebraPeak: {
        elevation: 14047,
        rank: 41,
        forest: "Cielo Vista Ranch",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          northwestRidge: {
            mileage: 5,
            gain: 2700,
            difficulty: "class 2",
            exposure: 2,
          },
        },
      },
    },
  },
  elkRange: {
    numberOfPeaks: 7,
    highestPeak: "Castle Peak",
    peaks: {
      castlePeak: {
        elevation: 14265,
        rank: 12,
        forest: "White River",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 3,
        routes: {
          northeastRidge: {
            mileage: 13.5,
            gain: 4600,
            difficulty: "class 2+",
            exposure: 3,
          },
          northwestRidge: {
            mileage: 13.5,
            gain: 4600,
            difficulty: "class 2+",
            exposure: 3,
          },
          northFaceCouloir: {
            mileage: 13,
            gain: 4600,
            difficulty: "class 2+",
            exposure: 3,
          },
        },
      },
      conundrumPeak: {
        elevation: 14060,
        rank: "unranked",
        forest: "White River",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          viaCastlePeak: {
            mileage: 14.5,
            gain: 4850,
            difficulty: "class 2+",
            exposure: 3,
          },
        },
      },
      maroonPeak: {
        elevation: 14156,
        rank: 24,
        forest: "White River",
        grizzlyBears: false,
        marmots: false,
        jerryLevel: "low",
        numberOfRoutes: 2,
        routes: {
          southRidge: {
            mileage: 11.5,
            gain: 4800,
            difficulty: "class 3",
            exposure: 4,
          },
          bellCordCouloir: {
            mileage: 8,
            gain: 4556,
            difficulty: "class 4",
            exposure: 4,
          },
        },
      },
      northMaroonPeak: {
        elevation: 14014,
        rank: "unranked",
        forest: "White River",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          northeastRidge: {
            mileage: 9.25,
            gain: 4500,
            difficulty: "class 4",
            exposure: 4,
          },
        },
      },
      pyramidPeak: {
        elevation: 14018,
        rank: 47,
        forest: "White River",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          northeastRidge: {
            mileage: 8.25,
            gain: 4500,
            difficulty: "class 4",
            exposure: 4,
          },
        },
      },
      capitolPeak: {
        elevation: 14130,
        rank: 29,
        forest: "White River",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          northeastRidge: {
            mileage: 17,
            gain: 5300,
            difficulty: "class 4",
            exposure: 4,
          },
        },
      },
      snowmassMountain: {
        elevation: 14092,
        rank: 31,
        forest: "White River",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 2,
        routes: {
          eastSlopes: {
            mileage: 22,
            gain: 5800,
            difficulty: "class 3",
            exposure: 4,
          },
          westSlope: {
            mileage: 9,
            gain: 4500,
            difficulty: "class 3",
            exposure: 4,
          },
        },
      },
    },
  },
  sanJuanRange: {
    numberOfPeaks: 14,
    highestPeak: "Uncompahgre Peak",
    peaks: {
      uncompahgrePeak: {
        elevation: 14309,
        rank: 6,
        forest: "Uncompahgre",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          southRidge: {
            mileage: 7.5,
            gain: 3000,
            difficulty: "class 2",
            exposure: 2,
          },
        },
      },
      mountWilson: {
        elevation: 14246,
        rank: 16,
        forest: "San Juan",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 3,
        routes: {
          northSlopes: {
            mileage: 16,
            gain: 5100,
            difficulty: "class 4",
            exposure: 4,
          },
          southwestSlopes: {
            mileage: 12.5,
            gain: 4400,
            difficulty: "class 3",
            exposure: 4,
          },
          eastFace: {
            mileage: 12,
            gain: 4900,
            difficulty: "class 3",
            exposure: 4,
          },
        },
      },
      wilsonPeak: {
        elevation: 14017,
        rank: 48,
        forest: "San Juan",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          southwestRidge: {
            mileage: 10,
            gain: 5000,
            difficulty: "class 3",
            exposure: 4,
          },
        },
      },
      elDientePeak: {
        elevation: 14159,
        rank: "unranked",
        forest: "San Juan",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 3,
        routes: {
          northSlopes: {
            mileage: 15,
            gain: 5000,
            difficulty: "class 3",
            exposure: 3,
          },
          southSlopes: {
            mileage: 12,
            gain: 4300,
            difficulty: "class 3",
            exposure: 3,
          },
          northButtress: {
            mileage: 5,
            gain: 3200,
            difficulty: "class 4",
            exposure: 5,
          },
        },
      },
      mountSneffels: {
        elevation: 14150,
        rank: 27,
        forest: "Uncompahgre",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "medium",
        numberOfRoutes: 2,
        routes: {
          southSlopes: {
            mileage: 6,
            gain: 2900,
            difficulty: "class 3",
            exposure: 3,
          },
          southwestRidge: {
            mileage: 6.5,
            gain: 2950,
            difficulty: "class 3",
            exposure: 3,
          },
        },
      },
      mountEolus: {
        elevation: 14083,
        rank: 32,
        forest: "San Juan",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          northeastRidge: {
            mileage: 17,
            gain: 6100,
            difficulty: "class 3",
            exposure: 4,
          },
        },
      },
      northEolus: {
        elevation: 14039,
        rank: "unranked",
        forest: "San Juan",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          southRidge: {
            mileage: 16.75,
            gain: 6000,
            difficulty: "class 3",
            exposure: 3,
          },
        },
      },
      windomPeak: {
        elevation: 14082,
        rank: 33,
        forest: "San Juan",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          westRidge: {
            mileage: 17,
            gain: 6000,
            difficulty: "class 2+",
            exposure: 3,
          },
        },
      },
      sunlightPeak: {
        elevation: 14059,
        rank: 39,
        forest: "San Juan",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          southFace: {
            mileage: 17,
            gain: 6000,
            difficulty: "class 4",
            exposure: 5,
          },
        },
      },
      handiesPeak: {
        elevation: 14048,
        rank: 40,
        forest: "n/a",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "medium",
        numberOfRoutes: 3,
        routes: {
          southwestSlopes: {
            mileage: 5.75,
            gain: 2500,
            difficulty: "class 1",
            exposure: 1,
          },
          eastSlopes: {
            mileage: 8,
            gain: 3650,
            difficulty: "class 2",
            exposure: 2,
          },
          westSlopes: {
            mileage: 5,
            gain: 2800,
            difficulty: "class 2",
            exposure: 2,
          },
        },
      },
      redcloudPeak: {
        elevation: 14034,
        rank: 46,
        forest: "n/a",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 1,
        routes: {
          northeastRidge: {
            mileage: 9,
            gain: 3700,
            difficulty: "class 2",
            exposure: 2,
          },
        },
      },
      sunshinePeak: {
        elevation: 14001,
        rank: 53,
        forest: "n/a",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 3,
        routes: {
          viaRedcloudPeak: {
            mileage: 12.25,
            gain: 4800,
            difficulty: "class 2",
            exposure: 2,
          },
          northwestFace: {
            mileage: 8.5,
            gain: 3800,
            difficulty: "class 2+",
            exposure: 2,
          },
          eastRidge: {
            mileage: 7,
            gain: 4600,
            difficulty: "class 2",
            exposure: 2,
          },
        },
      },
      wetterhornPeak: {
        elevation: 14015,
        rank: 49,
        forest: "Uncompahgre",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 2,
        routes: {
          southeastRidge: {
            mileage: 7,
            gain: 3300,
            difficulty: "class 3",
            exposure: 4,
          },
          eastFace: {
            mileage: 6.5,
            gain: 3300,
            difficulty: "class 3",
            exposure: 4,
          },
        },
      },
      sanLuisPeak: {
        elevation: 14014,
        rank: 50,
        forest: "Gunnison",
        grizzlyBears: true,
        marmots: true,
        jerryLevel: "low",
        numberOfRoutes: 2,
        routes: {
          northeastRidge: {
            mileage: 13.5,
            gain: 3600,
            difficulty: "class 1",
            exposure: 0,
          },
          southRidge: {
            mileage: 11,
            gain: 3700,
            difficulty: "class 1",
            exposure: 1,
          },
        },
      },
    },
  },
};

app.set("port", 3001);

app.get("/api/v1/peaks", (request, response) => {
  response.status(200).json(app.locals.peaks);
});

app.get("/api/v1/peaks/:id", (request, response) => {
  const { id } = request.params;
  const match = app.locals.peaks.find((peak) => peak.id == id);

  if (!match)
    return response
      .status(404)
      .json({ message: `No peak found with an id of ${id}` });

  return response.status(200).json(match);
});

app.post("/api/v1/peaks", (request, response) => {
  const newPeak = request.body;

  for (let requiredParameter of ["id", "title", "description"]) {
    if (!newPeak[requiredParameter])
      return response
        .status(422)
        .json({
          message: `You are missing a required parameter of ${requiredParameter}`,
        });
  }

  app.locals.peaks = [...app.locals.peaks, newPeak];

  return response.status(201).json(newPeak);
});

app.delete("/api/v1/peaks/:id", (request, response) => {
  const { id } = request.params;
  const match = app.locals.peaks.find((peak) => peak.id == id);

  if (!match)
    return response
      .status(404)
      .json({ message: `No peak found with an id of ${id}` });

  const filteredPeaks = app.locals.peaks.filter((peak) => peak.id != id);

  app.locals.peaks = filteredPeaks;

  return response.sendStatus(204);
});

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is now running on port ${app.get("port")}!`);
});
