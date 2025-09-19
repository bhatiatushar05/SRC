// Mock Data for Home Page
// Test data that matches the current Home.jsx structure

export const mockBanners = [
  {
    id: 1,
    title: "Hello world",
    image: "/static/index/one-500.jpg",
    creation_date: "2021-07-19T11:37:41.586073+05:30",
    is_active: true,
    user: 1
  },
  {
    id: 2,
    title: "ds",
    image: "/static/index/hbjhb-01_1_4MbtLfB.png",
    creation_date: "2021-07-19T12:02:47.780352+05:30",
    is_active: true,
    user: 1
  },
  {
    id: 3,
    title: "sd",
    image: "/static/index/master-splash.jpg",
    creation_date: "2021-07-19T12:03:06.795777+05:30",
    is_active: true,
    user: 1
  },
  {
    id: 4,
    title: "Hello world",
    image: "/static/index/https__specials-images.forbesimg.com_imageserve_5dbb4182d85e3000078fddae_0x0.jpg",
    creation_date: "2021-07-19T12:03:14.127306+05:30",
    is_active: true,
    user: 1
  }
]

export const mockMasterList = [
  {
    image: "/static/space.jpg",
    title: "Space Lab - Advanced Research Initiative",
    description: "ISRO-recognized Space Tutor organizations for the establishment of 'Space Labs' in EMRS"
  },
  {
    image: "/static/index/SRC_SEE_Summit_2021_3.jpg",
    title: "The Third Sustainable Environment And Energy Summit 2021",
    description: "Carrying the legacy forward of creating awareness on Green Business, Sustainable Energy & Sustainable Environment at the 3rd Edition of The Sustainable Environment And Energy Summit 2021"
  },
  {
    image: "/static/index/1.jpg",
    title: "Khadi: for Make In India Research Book by Social Responsibility Council",
    description: "Shri Amit Shah, Hon'ble Home Minister, former President BJP, released Research Book brought out by Khadi & Village Industries Commission & SRC"
  },
  {
    image: "/static/index/3.jpg",
    title: "Agri-Mechanization: for Make In India by Social Responsibility Council",
    description: "Shri Radha Mohan Singh, Former Hon'ble Cabinet Minister of Agriculture and Farmers Welfare released Research Book brought out by Ministry of Agriculture and SRC"
  },
  {
    image: "/static/index/2.jpg",
    title: "Railway Protection Force Research Book by Social Responsibility Council",
    description: "Shri M. Venkaiah Naidu, Hon'ble Vice President of India released Research Book brought out by RPF at 20th All India Police Band Competition closing ceremony at Rly Sports Complex, Secunderabad"
  },
  {
    image: "/static/index/5_XzFqa91.jpg",
    title: "The First Sustainable Environment and Energy Summit 2019",
    description: "Initiated small change of contributing to environment sustainability with the beginning of very 1st edition of the Sustainable Environment and Energy Summit 2019"
  },
  {
    image: "/static/index/6_ZpVhq0P.jpg",
    title: "The Second Sustainable Environment and Energy Summit 2020",
    description: "Continuing the tradition of Achieving environmental peace with growth, progress & environmental mortality, the 2nd edition of the Sustainable Environment and Energy Summit 2020 continued the story of change"
  },
  {
    image: "/static/index/4.jpg",
    title: "Make A Positive Change - Be Socially Responsible",
    description: "We believe by introducing such modules will integrate imbibed values in every generations and acumen into better decision making. It will result to better CSR practices for a sustainable World"
  },
  {
    image: "/static/index/PHOTO-2021-08-19-11-23-55.jpg",
    title: "SRC Founder Mr. Arun Khurana received environment advocacy award at Good Air Summit by Honb'le Justice Mr. Swatanter Kumar",
    description: "At Jawaharlal Nehru Stadium, New Delhi"
  }
]

export const mockMasterData = {
  image: "/static/space.jpg",
  title: "Space Lab - Advanced Research Initiative",
  description: "ISRO-recognized Space Tutor organizations for the establishment of 'Space Labs' in EMRS"
}

export const mockLetters = [
  {
    title: "Appreciation",
    path: "appreciation",
    length: 3,
    actual: 3
  },
  {
    title: "Knowledge Partner",
    path: "partner",
    length: 6,
    actual: 6
  },
  {
    title: "Letter for Recommendation",
    path: "recommendation",
    length: 8,
    actual: 30
  }
]

export const mockCounters = {
  internship: 100,
  volunteer: 400,
  pledge: 20
}

export const mockHomeData = {
  banner: mockBanners,
  upcoming_activity: [],
  twitter_data: [],
  master_data: mockMasterData,
  master_list: mockMasterList
}
