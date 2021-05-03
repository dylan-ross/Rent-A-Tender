# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bartender.destroy_all
User.destroy_all
Job.destroy_all


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
    img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wisegeek.com%2Fbartender-serving-draught-beer-in-bar.jpg&f=1&nofb=1'
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
    img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FNxe2qowUnlxd7XtvLxoq5_H5XsI%3D%2F165x0%3A2831x2000%2F1200x800%2Ffilters%3Afocal(165x0%3A2831x2000)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F42459396%2FMegan-_Twelve_Mile_4109.0.0.jpg&f=1&nofb=1'
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
    img_url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbloximages.newyork1.vip.townnews.com%2Fmontanakaimin.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2Fb%2Fba%2Fbbaea1b2-6617-11e5-88d8-bf8abd606359%2F560995ee62547.image.jpg%3Fresize%3D1200%252C800&f=1&nofb=1'
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
    img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.lifestyleasia.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2020%2F03%2F06181355%2Ffemale-bartenders-bangkok-3-1350x900.jpg&f=1&nofb=1'
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
    img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2F1400%2Fdfd4d835045611.56e7cd5725085.jpg&f=1&nofb=1'
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
    img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.lifestyleasia.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2020%2F03%2F06181742%2Ffemale-bartenders-bangkok-1-copy.jpg&f=1&nofb=1'
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
    img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstreets-united.com%2Fwp-content%2Fuploads%2F2014%2F02%2FFire-flair-bartender.jpg&f=1&nofb=1'
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
    img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.rimonthly.com%2Fwp-content%2Fuploads%2F2019%2F11%2FN9EC83BAR1.jpg'
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
    img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.flairplusultra.com%2Fwp-content%2Fuploads%2F2017%2F10%2FFlair-Bartender-cop.jpg&f=1&nofb=1'
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

@user = User.create!(username: 'topaz', email: 'topaz@email.com', password: '123456')
@bartender = Bartender.create!(name: 'Joe Jack', email: 'joe@jack.com', password: '987654321', category: 'Flair', intro: 'I love you guys', bio: 'love', skills: 'bottle flippin', rate: 37, img_url: 'https://imgur.com/888GFRw')
@time = Time.new
Job.create!(bartender: @bartender, user: @user, date: @time.strftime("%Y-%-m-%-d"), start_time: @time.strftime("%d.%m"), end_time: @time.strftime("%d.%m"))
