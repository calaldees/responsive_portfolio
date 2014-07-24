build_profile_links(
[
    {
        link: "http://www.linkedin.com/in/allancallaghan",
        name: "LinkedIn",
        icon: 'linkedin',
    },
    {
        link: "http://twitter.com/calaldees",
        name: "Twitter",
        icon: 'twitter',
    },
    {
        link: "https://plus.google.com/+AllanCallaghan/about",
        name: "Google+",
        icon: 'googleplus',
    },
    {
        link: "http://www.facebook.com/allan.callaghan",
        name: "Facebook",
        icon: 'facebook',
    },
    {
        link: "http://github.com/calaldees",
        name: "Github",
        icon: 'github',
    },
    {
        link: "http://www.amazon.co.uk/registry/wishlist/ABBNE2EXWI8",
        name: "Amazon wishlist",
        icon: 'amazon',
    },
    {
        link: "http://www.retrocollect.com/search/collectionstats-2317.html",
        name: "Retrocollect",
        icon: 'rc',
    },
]
);

LOOKUP_ICON_LINKS = {
    'python': 'https://www.python.org/',
    'html5': 'http://en.wikipedia.org/wiki/HTML5',
    'vb': 'http://www.visualstudio.com/downloads/download-visual-studio-vs',
    'pascal': 'http://en.wikipedia.org/wiki/Turbo_Pascal',
    'ubuntu': 'http://www.ubuntu.com/',
    'postgresql': 'http://www.postgresql.org/',
    'mysql': 'http://www.mysql.com/',
    'pyramid': 'http://www.pylonsproject.org/',
    'android': 'http://developer.android.com/index.html',
    'jquerymobile': 'http://jquerymobile.com/',
    'threejs': 'http://threejs.org/',
    'java': 'http://java.com/',
    'perl': 'http://www.perl.org/',
    'elasticsearch': 'http://www.elasticsearch.org/',
    'php': 'http://www.php.net/',
    'bootstrap': 'http://getbootstrap.com/',
    'robot': 'http://robotframework.org/',
    'vagrant': 'http://vagrantup.com/',
    'django': 'https://www.djangoproject.com/',
    'jenkins': 'http://jenkins-ci.org/',
    'redmine': 'http://www.redmine.org/',
    'pygame': 'http://www.pygame.org',
    'buildbot': 'http://buildbot.net/'
};

LOOKUP_TEAM = {
    'shish': {
        'name': 'Shish',
        'website': 'http://www.shishnet.org/',
    },
    'carl': {
        'name': 'Carl Ritson',
        'website': 'https://www.linkedin.com/pub/carl-ritson/23/989/605',
    },
    'lyle': {
        'name': 'Lyle Young',
        'website': '',
    },
    'matt': {
        'name': 'Matt Jones',
        'website': 'http://www.harmonyinautum.com/',
    },
    'joe': {
        'name': 'Joe Reid',
        'website': '',
    },
    'jon': {
        'name': 'Jon Cullinane',
        'website': 'http://www.manylemons.co.uk/',
    },
    'greg': {
        'name': 'Greg Miell',
        'website': 'https://twitter.com/GothAck',
    },
    'proto': {
        'name': 'Greg Mackelden',
        'website': 'https://twitter.com/iloveclarkkent',
    },
    'amy': {
        'name': 'Amy Zofia Brooks',
        'website': 'https://twitter.com/AmyZofiaBrooks'
    },
    'dan': {
        'name': 'Daniel Colman',
        'website': '',
    },
    'terry': {
        'name': 'Terry Colman',
        'website': '',
    },
    'mike': {
        'name': 'Mike Gardener',
        'website': 'http://uk.linkedin.com/pub/mike-gardiner/1/4a1/b4',
    }
}

build_masonry(
[
    {
        'title':'Global Radio',
        'link': 'http://www.thisisglobal.com/',
        'image': 'employers/global-logo.png',
        'description': "<p>Hired as a server side Python specailist building and maintaining Global Radio's digital presence for web and mobile.</p><p>Working with a crack shot team we support CapitalFM, HeartFM, ClassicFM, XFM, CapitalXtra, SmoothRadio, Gold, LBC and BigTop40.</p>",
        'year': '2012-now',
        'icons': ['python','html5','mysql','elasticsearch','django','ubuntu','jenkins','redmine','robot','android'],
        'category': 'employer',
        'width': 2,
        'height': 2,
        'extra_class': 'float',
    },
    
    {
        'title': 'Pentatonic Hero',
        'link': 'https://github.com/calaldees/PentatonicHero',
        'image': 'projects/guitar-hero-controller.jpg',
        'description': 'Mapped GuitarHero controlls to MIDI syths to facilitate amatures playing with a live band.',
        'description_extended': "A pentatonic scale has 5 notes. A Guitar Hero controller has 5 buttons. Making the controls to a MIDI guitar synth, an amature can join a live band, bash any key in any order and it sounds good. They user cant go wrong. Used in live music performances to call audience member up to play with a band live. Demoed at Canterbury Barcamp 2014",
        'year': '2014',
        'category': 'code',
        'icons': ['python', 'pygame'],
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal',
    },
    
    {
        'title': 'Music Projection Trolly',
        'image': 'projects/trolly_mrk2.jpg',
        'description': 'Custom metalwork trolly. Portable holographic projection and rackmount.',
        'description_extended': "",
        'year': '2014',
        'category': 'build',
        'icons': ['build'],
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal',
    },
    

    {
        'title': 'VoteBattle',
        'link': 'https://github.com/calaldees/VoteBattle',
        'image': 'projects/VoteBattle_screenshot2.png',
        'description': "Used as the focus for a live music performance. A mock Final Fantasy style 3D battle system designed for crowd participation from mobile phones.",
        'year': 2014,
        'category': 'code',
        'icons': ['python','html5','threejs','pyramid'],
        'width': 1,
        'height': 2
    },

    {
        'title':'KaraKara',
        'link': 'https://github.com/calaldees/KaraKara',
        'image': 'projects/karakara.png',
        'description': "Karaoke event system. Users can search/preview/queue tracks from their mobile phones.",
        'description_extended': "HTML5 websocket full screen projector displays the main view to the audience. Mobile/Tablets can connect to a local 'karaoke' wifi. Used at Minamicon 2014",
        'year': '2012-now',
        'team': ['carl','shish'],
        'icons': ['python','html5','postgresql','jquerymobile','pyramid','vagrant','bootstrap'],
        'category': 'code',
        'width': 2,
        'height': 3
    },
    
    {
        'title': 'TrackMy',
        'description': 'Hack project. Free open source comunity tracking system.',
        'description_extended': 'Prototype to track Buss, Taxis, School trips. Using rasbery pi and gps dongle or html5 mobile app',
        'link': 'https://github.com/JoeReid/TrackMyBus',
        'category': 'code',
        'team': ['joe', 'shish'],
        'year': 2014,
        'icons': ['python','html5','postgresql','pyramid'],
        'width': 1,
        'height': 1
    },
    
    {
        'title':'Flexi RPG Responsve Digital Pubication',
        'link': 'https://github.com/flexi-system/flexi-core-system',
        //'image': 'projects/',
        'description': "To assit the digitial publication of a 'pen and paper' RPG system developed by a startup. Responsive content distributed with HTML5 offline storeage.",
        'year':'2013-2014',
        'team': ['dan','terry'],
        'icons': ['python','html5','pyramid','bootstrap'],
        'category': 'code',
        'width': 2,
        'height': 1
    },
    
    {
        'title': 'Ayacon: Live Music Pannel',
        'image': 'projects/ayacon.jpg',
        'description': 'Performed live music backing a virtual 3D lead singer (Hatsune Miku) with a home constructed holographic projection screen',
        'link': ['http://calaldees.dreamhosters.com/music/miku_low.mp4'],
        'category': 'music',
        'year': 2013,
        'team': ['lyle','matt','joe'],
        'icons': ['piano', 'bass', 'drums'],
        'width': 2,
        'height': 3
    },

    {
        'title': 'Taxpayers alliance',
        'image': 'projects/taxpayers_alliance.jpg',
        'link': 'http://hacks.rewiredstate.org/events/nhtg-13/tax-payer-s-association-data-heatmaps',
        'description': 'Heatmap visulation of national statistics',
        'year': 2013,
        'icons': ['python'],
        'team': ['shish'],
        'width': 1,
        'height': 2,
        'category': 'code',
    },
    
    {
        'title': 'RetroPrice Statistics',
        'description': 'Scraping data over the course of a year to assertain the average price and rarity of retrogames in the uk. Created a mobile interfae to access deatails at a possible bargins notice',
        'link': 'http://calaldees.dreamhosters.com/misc/retro_extract/collection.html#/platforms',
        'year': 2013,
        'category': 'code',
        'icons': ['python', 'html5'],
        'width': 2,
        'height': 1
    },
    
    {
        'title': 'Pictotrade',
        'image': 'projects/pictotrade.jpg',
        'description': 'Online pictorial trade-data explorer',
        'link': 'http://hacks.rewiredstate.org/events/dfiddc2012/pictotrade',
        'year': 2012,
        'team': ['proto', 'shish', 'amy'],
        'icons': ['python', 'html5'],
        'width': 1,
        'height': 2,
        'category': 'code',
    },
    
    {
        'title':'Teach Programming',
        'link': 'http://calaldees.tnkd.net/project/game/copter.html',
        'image': 'projects/teach_programming.png',
        'description': "Learn to program games in HTML5/Javascript, Python, Java, VB.NET and PHP. Teaching resources and activities. Cross platform multiplayer.",
        'description_extended': "",
        'year':'2012',
        'icons': ['python','java','vb','php','html5','pyramid','bootstrap'],
        'category': 'code',
        'width': 3,
        'height': 1,
        'extra_class': 'horizontal',
    },
    {
        'title': 'Open mic performances',
        'image': 'projects/openmic.jpg',
        'year': '2013',
        'description': 'Piano and vocal covers of a range of 80s and comedy tracks',
        'category': 'music',
        'icons': ['piano'],
        'width': 1,
        'height': 2,
    },

    {
        'title': 'Access Europe',
        'link': 'https://www.linkedin.com/company/access-europe',
        'description': 'Contracted to work remotely on volume social media tools and web content crawling',
        'year': 2012,
        'category': 'employer',
        'icons': ['python'],
        'width': 1,
        'height': 1
    },
    
    {
        'title':'Civicboom',
        'link': 'http://www.civicboom.com',
        'image': 'projects/civicboom.png',
        'description': "Lead developer of a team of four. A citizen journalism platform with an API, Mobile apps, Media uploads, Geopositioning, QRCode generation, Facebook/Twitter integration, Segmented server architecture. 60,000 lines of Python/HTML/JS code with formal bug tracking using the agile methadology.",
        'year':'2009-2012',
        'team': ['shish','greg','proto'],
        'icons': ['python','html5','postgresql','ubuntu','buildbot'],
        'category': 'employer',
        'width': 2,
        'height': 3,
    },
    
    {
        'title': 'Coastal Cycle',
        'year': '2010',
        'description': 'Canterbury-Hastings-Brightion-Arendel-Southempton',
        'category': 'other',
        'width': 1,
        'height': 1
    },

    
    {
        'title':'MultiPong',
        'link': 'https://github.com/calaldees/MultiPong',
        'image': 'projects/multipong.png',
        'description': "A three projector pong game with mobile phones as input devices.",
        'year':'2012',
        'team': ['shish','greg'],
        'icons': ['python','pygame'],
        'category': 'code',
        'width': 1,
        'height': 2,
    },
    {
        'title':'CarMuse',
        'link': ['http://hacks.rewiredstate.org/events/power-of-minds/car-muse', 'http://youtu.be/yRfgwcmjv1s?t=3m20s'],
        'image': 'projects/carmuse.jpg',
        'description': "Creates pseudo random music based on the output of the engine management system of a car. Car simulated in 3D.",
        'description_extended': "I wrote the music generator based on speed, gear, indicators, breaks, etc.",
        'year':'2011',
        'team': ['shish','greg'],
        'icons': ['python'],
        'category': 'code',
        'width': 1,
        'height': 2
    },
    {
        'title':'Parliamentary',
        'link': 'http://rewiredstate.org/projects/parliamentary',
        //'image': 'projects/',
        'description': "Hack weekend project. Every word said in parliament is logged. We process this and create a word cloud browser to browse what politicians are talking about.",
        'year':'2011',
        'icons': ['python'],
        'category': 'code',
        'team': ['shish','greg', 'proto'],
        'width': 2,
        'height': 1
    },
    {
        'title':'Barcode Thing',
        'link': 'http://rewiredstate.org/projects/barcode-thing',
        'image': 'projects/barcode.jpeg',
        'description': "Prototype for PalmOS. Online barcode catalog and info retrieval. Wrote js algorithum to image process barcodes",
        'description_extended': "I wrote the Javascript algorithm to decode a barcode image from the phone camera. Scan a barcode from your phone, server gives you, average price on eBay, if it's in your collection, previews of media e.g trailer from youtube, amazon mp3 previews of songs.",
        'year':'2011',
        'team': ['shish','greg'],
        'icons': ['html5'],
        'category': 'code',
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal_right',
    },
    {
        'title':'FreeHoc',
        'link': 'http://rewiredstate.org/projects/freehoc',
        'image': 'projects/freehoc.jpg',
        'description': "Hacktivate weekend project. Freecycle + Geopositional + Custom alerts + SMS interface. Designed for developing countrys with no internet access.",
        'year':'2011',
        'team': ['shish','greg','proto'],
        'icons': ['python', 'pyramid'],
        'category': 'code',
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal',
    },
    
    {
        'title':'CAS Conference Speaker',
        'link': 'http://www.computingatschool.org.uk/index.php?id=conf2010',
        'image': 'projects/cas_image.jpg',
        'description': "Spoke at the national 'Computing at School' conference about innovative ways to teach programming",
        'year':'2010',
        'icons': ['python', 'html5', 'php', 'java', 'vb'],
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal',
        'category': 'other',
    },
    
    {
        'title': 'Luggage (Discworld)',
        'link': 'http://www.youtube.com/watch?v=XY0qqCgm9GY',
        'image': 'projects/luggage.png',
        'description': 'Custom made retractable latex feet and leavers to control the mouth. An interesting construction project.',
        'category': 'costume',
        'year': 2009,
        'width': 2,
        'height': 1,
        'icons': ['build'],
        'extra_class': 'horizontal',
    },
    
    {
        'title': 'Nessessary Evil',
        'link': 'https://www.peginc.com/store/necessary-evil-explorers-edition/',
        'description': 'Gamemastered an epic action comedy adventure for a 2 year campaine',
        'image': 'projects/nessesary_evil.jpg',
        'year': '2009-2011',
        'category': 'other',
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal',
    },
    
    {
        'title': 'Piano/Bass Transcriptions',
        'description': 'Various transcriptions over the years.',
        'year': '2009-now',
        'icons': ['piano'],
        'width': 1,
        'height': 1,
        'category': 'music',
    },

    {
        'title': 'AQA A2 Computing',
        'year': '2009-2011',
        'link': 'http://www.aqa.org.uk/subjects/ict-and-computer-science/a-level/computing-2510',
        'description': 'While working at Civicboom, I continued to work 1 day a week teaching ALevel Computing. Took a cohort with students as young as age 13 through the AS',
        'category': 'employer',
        'width': 1,
        'height': 2,
    },
    
    {
        'title':'Guardian Heroes Sprites',
        'link': '',
        'image': 'projects/ghrev2.png',
        'description': "Attempt at reverse engineering the sprites format a Sega Saturn game.",
        'description_extended': "Injecting binary data into the ISO and using an emulator with a specific state to read the sprites from disk. Once the corruption had been observed I could makes notes as to algorithum that was processing the data.",
        'year':'2011',
        'icons': ['java'],
        'category': 'code',
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal',
    },
    
    {
        'title': 'k.alt.del',
        'image': 'projects/k.alt.del.jpg',
        'year': '2009-2011',
        'description': 'Band performing covers of Anime songs at KentANIMEted.',
        'category': 'music',
        'icons': ['piano', 'bass'],
        'width': 2,
        'height': 2
    },

    {
        'title':'QuizGraphs',
        'link': 'http://calaldees.dreamhosters.com/AnimeSoc/AnimeQuiz2011/graph.py',
        'image': 'projects/quizgraphs.jpg',
        'description': "Pub quiz graph system with separate input interface.",
        'year':'2010',
        'icons': ['python'],
        'category': 'code',
        'width': 1,
        'height': 2
    },

    {
        'title': 'Sandwich Technology School',
        'link': 'http://www.sandwich-tech.kent.sch.uk/',
        'image': 'employers/sts_logo.jpg',
        'description': "Secondary School teaching 11 to 18 year olds. AQA A-Level Computing. Ran after school workshops building linux machines and programing simple games. Lego robotics.",
        'year': '2007-2009',
        'width': 1,
        'height': 2,
        'category': 'employer',
        //'extra_class': 'horizontal',
    },

    
    {
        'title':'3D Camera Rig and Processing',
        'link': 'http://calaldees.dreamhosters.com/misc/Danovs-Emmies%20Wedding%20in%203D/3d/8b.png',
        'image': 'projects/3d_camera.jpg',
        'description': "Two cameras + Python code = Cyan/Red images + video",
        'description_extended': 'Photographed a wedding and constructed a script to process 3D video.',
        'year': '2009',
        'icons': ['python','build'],
        'category': 'code',
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal',
    },


    
    
    {
        'title':'PostOffice Server',
        'link': 'https://github.com/calaldees/javalib/tree/master/lib/Utils/Utils/Network/PostOfficeServer',
        //'image': 'projects/',
        'description': "A key value server similar to Redis for teaching simple massively multiplayer games.",
        'description_extended': "Redis was only just being explored. I wrote my own functionaly for users to 'subscribe' to postbox's to recive updates.<br> When the server closed it persisted the world. <br>Learners had to choose and explore there own data structures as they deleloped there applications",
        'year':'2009',
        'icons': ['java'],
        'category': 'code',
        'width': 1,
        'height': 1
    },
    
    {
        'title': 'Orco',
        'image': 'projects/orco.jpg',
        'link': 'http://www.youtube.com/watch?v=DIr0hydLhw4',
        'description': 'He-man character costume',
        'category': 'costume',
        'year': 2007,
        'icons': ['build'],
        'width': 1,
        'height': 2
    },

    {
        'title':'Learn2Care Booking System',
        'link': '',
        'image': 'projects/l2c_booking.png',
        'description': "Learn2Care was a career training company. Database consultancy for extending their system and required a custom event/room booking system with attendees",
        'description_exended': "",
        'year':'2006',
        'icons': ['access','vb'],
        'category': 'employer',
        'width': 1,
        'height': 2
    },

    {
        'title': 'Baby godzilla suite',
        'image': 'projects/baby_godzilla.jpg',
        'description': 'Constructed a cardboard tokyo and a baby godzilla suite',
        'dscription_extended': 'for a 1 year old and put Mum at the other side of the room. Raaawww.',
        'year': 2007,
        'team': ['jon'],
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal_right',
        'icons': ['build'],
        'category': 'build',
    },
    
    {
        'title': 'Youth Group Summer Camp Volenteer',
        'description': 'Action and advanture camp with local youth group. Physically and emotionally demanding, but pure awesome',
        'year': '2005-2010',
        'category': 'other',
        'width': 1,
        'height': 1,
    },

    
    {
        'title':'Tile Based Game Framework',
        'link': 'https://github.com/calaldees/javalib/tree/master/lib/Tile',
        'image': 'projects/dune.png',
        'description': "A generic tile based network game framework, the base to support my UFO, Dune2 and C&C remakes",
        'year':'2003-2009',
        'icons': ['java'],
        'category': 'code',
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal',
    },
    
    
    {
        'title': 'Advanced computing workshop',
        'description': "Extra curricular 3 month workshop taking students through building a computer, installing linux, setup + program dynamic webpages and games",
        'year': '2006',
        'category': 'teaching',
        'width': 1,
        'height': 1,
    },

    {
        'title': 'Retro Console Shelfs',
        'image': 'projects/retro_shelfs.jpg',
        'description': "Retro consoles wired into custom removable shelfs with standard power and scart connectors. (image is of shelfs to house games and not the console shelfs)",
        'description_extended': 'Presevation project to make old comuters useable. After picking a game for any system, you could be playing it in 60 seconds.',
        'category': 'build',
        'icons': ['build'],
        'width': 1,
        'height': 2,
    },

    {
        'title':'GameFrame',
        'link': 'https://github.com/calaldees/javalib/tree/master/Game/ProgrammingWorkshop',
        //'image': 'projects/',
        'description': "A game lib for Java that gave learners simple access to display, timing, network and sound.",
        'year': '2007',
        'icons': ['java'],
        'category': 'code',
        'width': 1,
        'height': 1
    },

    {
        'title': 'Chaucer Technology School',
        'image': 'employers/chaucer.png',
        'description': 'Secondary School teaching 11 to 18 year olds. Took a cohort through AQA A2 Computing. Ran after school programming workshops.',
        'year': '2005-2006',
        'width': 2,
        'height': 2,
        'category': 'employer',
    },
    
    {
        'title': 'Arcade Cabinet',
        'image': 'projects/arcade_cab.jpg',
        'description': "Built an arcade cabinet, with touch screen.",
        'description_extended': " It's been used in schools and inherited by many people. After 10 years of solid use and abuse it's still standing and used regularty",
        'category': 'build',
        'year': 2005,
        'width': 2,
        'height': 1,
        'icons': ['build'],
        'extra_class': 'horizontal',
    },

    {
        'title': 'Purple Tentacle',
        'image': 'projects/tentacle_aya05.jpg',
        'description': 'Constructed a scale costume of a classic Lucusarts comedy game character.',
        'description_extended': 'Debut Ayacon 2005. Won the 2007 Videogames Live costume competion at the Royal Festival Hall in London.',
        'link': ['http://www.cosplayisland.co.uk/costume/view/551', 'http://www.youtube.com/watch?v=dwW0uLgABKE'],
        'team': ['jon'],
        'year': 2006,
        'category': 'costume',
        'width': 1,
        'height': 2,
        'icons': ['build'],
    },    

    

    {
        'title':'Mini Webserver',
        //'link': '',
        //'image': 'projects/',
        'description': "Experiment to create a minimal HTTP file server in 100 lines of code.",
        'description_extended': "Used as an example to teach learners that tech is understandable and achivable.",
        'year':'2006',
        'icons': ['java'],
        'category': 'code',
        'width': 1,
        'height': 1
    },

    {
        'title':'Bibliographic Database',
        //'link': '',
        //'image': 'projects/',
        'description': "Web database cataloging a graph structure of how research papers referenced each other",
        'description_extended': "Research papers were Regex'ed to extract types of reference. Stored in DB. Users could them browse how papers were realted and who was references who.",
        'year':'2003',
        'icons': ['perl'],
        'category': 'employer',
        'width': 1,
        'height': 1
    },
    
    {
        'title':'UFO Enemy Unknown remake',
        'link': 'https://github.com/calaldees/javalib/tree/master/Game/Ufo',
        'image': 'projects/ufo2.png',
        'description': "Isometric map editor, troop animator, interactive inventory.",
        'year':'2003',
        'icons': ['java'],
        'category': 'code',
        'width': 2,
        'height': 2
    },

    {
        'title':'JHawk',
        'link': '',
        //'image': 'projects/',
        'description': "Webpage Regex hawk to create RSS feeds for when appropriate content on pages updated.",
        'description_extended': "Many sites didnt support RSS for little details. I was spending too much time manually checking sites for driver updates etc. So I wrote my own tool to generate a custom RSS feed of all my sites but cunningly looking for specific DOM elements that had updated.</p> I was going to create a frontend for multiple users to registers searchs but never completed the public web interface.",
        'year':'2006',
        'icons': ['java'],
        'category': 'code',
        'width': 1,
        'height': 1
    },

    {
        'title': 'KentANIMEted',
        'image': 'projects/kentanimeted.jpg',
        'description': 'For 14 years have contributed/advised/assited with the largest anime socity in Kent. Helped take it from an unknown small crowd trhough to a regular 50+ attendees a week',
        'link': ['http://www.kentanimeted.org/', 'overload'],
        'team': ['jon','carl'],
        'year': '1999-2013',
        'category': 'other',
        'width': 3,
        'height': 2
    },
    
    {
        'title':'Material Modeller',
        //'link': '',
        'image': 'projects/springs.png',
        'description': "Physics system based on masses and springs. User could interact in realtime and deform/break structures.",
        'description_extended': "Final year research project into how real time simulation could help solve real problems. By modling simple physical rules the emergent behaviour was awesome, e.g friction with the floor made the wheels of a car actually turn.",
        'year':'2002',
        'icons': ['java'],
        'category': 'code',
        'width': 2,
        'height': 3
    },

    {
        'title':'Anime Society Loan System',
        'link': '',
        'image': 'projects/anime_tracker.png',
        'description': "Tracking over 1000 items in multiple locations. Members could reserve items for pickup.",
        'description_exended': "Over 100 regular users. The library was distributed as personal items. The sytem allowed members to search and request items. The system then sent reminder emails and request emails before pickup time. Items had loan history and ratings.",
        'year':'2001',
        'icons': ['perl'],
        'category': 'code',
        'width': 2,
        'height': 2
    },

    {
        'title':'Ninja training grouds',
        'link': '',
        'image': 'projects/ninja_training.jpg',
        'description': "A comedy page about 'How to be a REAL ninja'",
        'description_exended': "",
        'year':'2000',
        'width': 1,
        'height': 2,
        'category': 'other',
        //'extra_class': 'horizontal',
    },

    
    {
        'title':'Java Multimedia Player',
        'link': '',
        //'image': 'projects/',
        'description': "Create a slideshow with music and video. A custom UI experiment. Advanced animated timeline.",
        'year':'2002',
        'team': ['mike'],
        'icons': ['java'],
        'category': 'code',
        'width': 1,
        'height': 1
    },

    {
        'title': '80s Cartoon Preservation Project',
        'description': 'Before comercial DVDs were avalable, I invested in equipment to digitise and preserve old cartoons onto VCDs. Enhanced with noise reduction. Well respected amoung university students.',
        'year': '1998-2001',
        'category': 'other',
        'width': 1,
        'height': 2
    },

    
    {
        'title':'Nortel ProSTAR Tracker',
        'link': '',
        'image': 'projects/prostar_tracker2.png',
        'description': "A web based bug status/reporting tool for management.",
        'description_extended': "Custom HTML Graph output",
        'year':'1999',
        'icons': ['perl'],
        'category': 'employer',
        'width': 1,
        'height': 1
    },
    {
        'title':'Cars',
        'link': '',
        'image': 'projects/cars.png',
        'description': "Micro machines style car game. Had level editor, variable width font system and car physics. Wrote my own sprite rotation algorithum.",
        'description_extended': "",
        'year':'1998',
        'icons': ['pascal'],
        'category': 'code',
        'width': 2,
        'height': 2
    },

    {
        'title':'Copter',
        'link': '',
        'image': 'projects/chop.png',
        'description': "Choplifter style helicopter game with random terrain generation.",
        'description_exended': "Copter had physics, sprite animation. Terrain generation was a mathmatical experiment.",
        'year':'1997',
        'icons': ['pascal'],
        'category': 'code',
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal',
    },

    {
        'title':'Retail Stock Control System',
        'link': '',
        'image': 'projects/stock.png',
        'description': "Real barcode checkout system written in Pascal. Created my own relational database structure with search/sort algorithms.",
        'description_exended': "It could print new orders forms and stock charts. The grocery store it was designed for went bust before the project was finished.",
        'year': 1998,
        'icons': ['pascal'],
        'category': 'code',
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal_right',
    },
    
    {
        'title': 'Code based animations',
        'description': 'Using raw code to construct animations',
        'image': 'projects/dnalogo.png',
        'year': 1997,
        'icons': ['pascal'],
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal',
    },

    {
        'title':'Speed Test',
        'link': '',
        'image': 'projects/speedtest.png',
        'description': "Simple benchmark utility to test processor, ASCII, VGA and disk access.",
        'description_exended': "The final scores were compared against known systems. The final output was displayed in a set of bar charts thats animated and grew.",
        'year':1996,
        'icons': ['pascal'],
        'category': 'code',
        'width': 1,
        'height': 2
    },
    
    {
        'title':'Tracker Tunes',
        'link': '',
        'image': 'projects/screamtracker3.png',
        'description': "Composed a range of 8 channel tracks in Screamtracker3",
        'description_exended': "",
        'year': 1996,
        'width': 2,
        'height': 1,
        'extra_class': 'horizontal_right',
        'category': 'other',
    },
    

]
);