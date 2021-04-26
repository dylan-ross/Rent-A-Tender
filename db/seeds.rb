# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bartender.destroy_all
User.destroy_all

bartender = Bartender.create(
  [
  {
    name: 'Johnny Bale',
    email: 'john@bale.com',
    password: 'JoBale',
    category: 'Casual',
    intro: 'Fast and casual, I can sling drinks with the best of them',
    bio: "I've worked in every type of bar and delt with every personality. I can handle the rowdiest of crowds. Perfect for Super Bowl parties.",
    skills: ['shots! shots! shots!', 'speed', 'crowd control',],
    rate: 20,
    img_url: 'https://imgur.com/888GFRw'
  },
  {
    name: 'Kim Thanks',
    email: 'kim@thank.com',
    password: 'KiThanks',
    category: 'Casual',
    intro: 'Hustlin bartender, banter!',
    bio: "I love to have a good time, but know when to work. Guarenteed to make your next party a party!",
    skills: ['whiskey', 'speed', 'banter',],
    rate: 30,
    img_url: 'https://imgur.com/gdA4hb2'
  },
  {
    name: 'Kyle Lowry',
    email: 'kyle@Lowry.com',
    password: 'KyLowry',
    category: 'Casual',
    intro: 'Rockin Rollin bartender',
    bio: "I love music and love to host kareokee! Beer and music are my two loves, I would love to share them with you for your next event",
    skills: ['beer', 'music knowledge'],
    rate: 25,
    img_url: 'https://imgur.com/axeLzMj'
  },
  {
    name: 'Tanya Bullocks',
    email: 'tanya@Bull.com',
    password: 'TanBull',
    category: 'Cocktail',
    intro: 'Floral cocktail extrodinare',
    bio: "I love gin and springtime! I have 12 years working in some of the best cocktail bars in the city, and I would love to make your next party a flowery delight!",
    skills: ['gin', 'aromatics', 'infusions', 'vodka', 'aquavit'],
    rate: 40,
    img_url: 'https://imgur.com/f7cI8Pl'
  },
  {
    name: 'Flavien Guy',
    email: 'flav@Guy.com',
    password: 'FlavGuy',
    category: 'Cocktail',
    intro: 'I have the je ne sais quoi to make you next event a success!',
    bio: "I know everything french, cognac, wine, and champagne. I bring sophistication and style to everything I do.",
    skills: ['cognac', 'champagne', 'wine', 'style', 'coolness'],
    rate: 100,
    img_url: 'https://imgur.com/N7qyHoc'
  },
  {
    name: 'Ariele Kramer',
    email: 'ariele@Kramer.com',
    password: 'AriKram',
    category: 'Cocktail',
    intro: "I'm better at making drinks than that other Ariel is at swimming",
    bio: "Service industry pro for over 15 years. I've see and done everything, there's nothing I can't handle, I am a master craftswoman that can adjust to anything",
    skills: ['whiskey', 'gin', 'amaro', 'tequila', 'rum'],
    rate: 70,
    img_url: 'https://imgur.com/Mlpmz7L'
  },
  {
    name: 'Spike Hammer',
    email: 'spike@Ham.com',
    password: 'SpiHamm',
    category: 'Flair',
    intro: "I bring the ENERGY!, I can be your spectacle",
    bio: "I can juggle and make a drink! Have a boring brunch party that needs a kick, I'm you flairman!",
    skills: ['flair', 'juggling', 'layered shots'],
    rate: 100,
    img_url: 'https://imgur.com/eNeLSaU'
  },
  {
    name: 'Britney Ocean',
    email: 'brit@Ocean.com',
    password: 'BriOce',
    category: 'Flair',
    intro: "Look at me! I'll bring your snoozefest to life!",
    bio: "Need a show and some service I'm your lady! I've competed in flair competions from here to vegas, and I can make drink too!",
    skills: ['speed', 'multitasker', 'high-energy', 'fire'],
    rate: 80,
    img_url: 'https://imgur.com/Q2YrTk1'
  },
  {
    name: 'Bam Margarita',
    email: 'bam@Rita.com',
    password: 'BamMar',
    category: 'Flair',
    intro: "Flair! Flair! Flair!, Hire me",
    bio: "Flair Flair Flair Flair Flair Flair Flair Flair Flair Flair Flair Flair Flair Flari",
    skills: ['Flair', 'Flair', 'Flair', 'Flair'],
    rate: 30,
    img_url: 'https://imgur.com/5T405Cq'
  }
]
)

user = User.create(
  [
    {
      username: 'Nelly',
      email: 'nelly@nelly.com',
      password: 'nelly'
    },
    {
      username: 'Busta',
      email: 'busta@busta.com',
      password: 'busta' 
    }
  ]
)