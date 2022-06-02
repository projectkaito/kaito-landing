export interface Roadmap {
  title?: string;
  description?: string;
  image?: string;
  x?: number;
  y?: number;
  imageDirection?: "left" | "right";
  imageTransform?: string;
  encrypted?: boolean;
}

export interface RoadmapsData {
  charity: {
    bg: string;
    data: Roadmap[];
  };
  anime: {
    bg: string;
    data: Roadmap[];
  };
  token: {
    bg: string;
    data: Roadmap[];
  };
}

const roadmapData: RoadmapsData = {
  charity: {
    bg: require("src/assets/images/roadmapcharity.png"),
    data: [
      {
        title: "2022Q3",
        description: "Initial Charity Donation 30% OS royalties Project Kaito Charity Launch",
        image: require("src/assets/images/heart.png"),
        imageDirection: "left",
        x: 50,
      },
      {
        title: "2022Q4",
        description: "Project Kaito Charity Planning & Strategizing",
        image: require("src/assets/images/standboard.png"),
        imageDirection: "right",
        y: 30,
        x: -20,
      },
      {
        title: "2023Q1",
        description: "Project Kaito Charity Execution Phase",
        image: require("src/assets/images/bluetick.png"),
        imageDirection: "left",
        y: 45,
        x: 65,
      },
    ],
  },
  anime: {
    bg: require("src/assets/images/roadmapanime.png"),
    data: [
      {
        title: "June",
        description: "Community voiceover auditions",
        image: require("src/assets/images/mic.png"),
        imageDirection: "right",
        x: 18,
        y: 7,
      },
      {
        title: "2022Q3",
        description: "Kaito Anime Show Trailer Released",
        image: require("src/assets/images/avatar.png"),

        imageDirection: "left",
        x: 85,
        y: 25,
      },
      {
        title: "2022Q3",
        description: "Kaito Anime Show Trailer Released",
        image: require("src/assets/images/music.png"),
        imageDirection: "right",
        x: -25,
        y: 30,
      },
      {
        title: "2023Q2",
        description: "Kaito Series 1 Premieres in the Metaverse",
        image: require("src/assets/images/portal.png"),
        imageDirection: "left",
        x: 45,
        y: 45,
      },
      {
        title: "2023Q3",
        description: "Kaito Series 2 Recording",
        image: require("src/assets/images/music.png"),
        imageDirection: "left",
        x: 10,
        y: 70,
      },
    ],
  },
  token: {
    bg: require("src/assets/images/roadmaptoken.png"),
    data: [
      {
        title: "June",
        description: "Mint Staking Commences",
        image: require("src/assets/images/clock.png"),
        imageDirection: "right",
        x: 30,
        y: 5,
        encrypted: true,
      },
      {
        title: "2022Q3",
        description: "Kaito Metaverse Gallery Launch",
        image: require("src/assets/images/image.png"),
        x: 75,
        y: 15,
      },
      {
        title: "2022Q4",
        description: "Kaito Redacted Claim Merch Avilable",
        image: require("src/assets/images/shirt.png"),
        imageDirection: "right",
        x: -30,
        y: 25,
      },
      {
        title: "2023Q1",
        description: "Metaverse Land Acquisition",
        image: require("src/assets/images/stack.png"),
        x: 60,
        y: 35,
      },
      {
        title: "2023Q2",
        description: "Kaito Marketplace -  Launch",
        image: require("src/assets/images/rocketImage.png"),
        imageDirection: "right",
        imageTransform: "scale(0.8) translateY(-20%)",
        x: -10,
        y: 50,
      },
      {
        title: "2023Q3",
        description: "Merch Launch",
        image: require("src/assets/images/rocket2.png"),
        imageTransform: "scale(0.8) translateY(-20%) translateX(20%)",
        x: 70,
        y: 60,
      },
      {
        title: "2023Q4",
        description: "Kaito [Redacted] Companion Project",
        image: require("src/assets/images/calendar.png"),
        x: 0,
        y: 75,
      },
    ],
  },
};

export default roadmapData;
