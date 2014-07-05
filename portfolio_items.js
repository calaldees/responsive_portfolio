LOOKUP_ICON_LINKS = {
    'python': 'http://',
    'html5': 'http://',
    'vb': 'http://',
    'pascal': 'http://',
    'ubuntu': 'http://',
    'postgresql': 'http://',
    'mysql': 'http://',
    'pyramid': 'http://',
    'android': 'http://',
    'jquerymobile': 'http://',
    'threejs': 'http://',
    'java': 'http://',
    'perl': 'http://',
    'elasticsearch': 'http://',
    'php': 'http://',
    'bootstrap': 'http://',
    'robot': 'http://',
    'vagrant': 'http://',
    'django': 'http://',
    'jenkins': 'http://',
    'redmine': 'http://',
    'pygame': 'http://',
    'buildbot': 'http://'
};

LOOKUP_TEAM = {
    'shish': {
        'name': 'Chris Girling',
        'website': 'http://www.shishnet.org/',
    },
    'carl': {
        'name': 'Carl Ritson',
        'website': 'http://www.shishnet.org/',
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
        'website': 'www.manylemons.co.uk',
    },
    'greg': {
        'name': 'Greg Miell',
        'website': '',
    },
    'proto': {
        'name': 'Greg Mackelden',
        'website': '',
    },
    'amy': {
        'name': 'Amy',
        'website': ''
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
        'website': '',
    }
}

build_masonry(
[
    {
        'title':'Global Radio',
        'link': 'www.thisisglobal.com',
        'image': 'employers/global-logo.png',
        'description': "Hired as a server side Python specailist, help build and maintain Global Radio's digital presence for web and mobile. Working with a crack shot team we support CapitalFM, HeartFM, ClassicFM, XFM, CapitalXtra, SmoothRadio, Gold, LBC and BigTop40. \n Python, Django, MySQL, ElasticSearch, Jenkins, Android, Automated testing with PhantomJS",
        'year': '2012-now',
        'icons': ['python','html5','mysql','elasticsearch','django','ubuntu','jenkins','redmine','robot','android'],
        'category': 'code',
        'width': 3,
        'height': 3
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
        'title': 'Pentatonic Hero',
        'description': 'Map GuitarHero controlls to MIDI syths to facilitate amatures playing with a live band.',
        'description_extended': "A pentatonic scale has 5 notes. A Guitar Hero controller has 5 buttons. Making the controls to a MIDI guitar synth, an amature can join a live band, bash any key in any order and it sounds good. They user cant go wrong. Used in live music performances to call audience member up to play with a band live. Demoed at Canterbury Barcamp 2014",
        'year': '2014',
        'category': 'code',
        'icons': ['python', 'pygame'],
        'width': 1,
        'height': 1
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
        'title': 'TrackMy',
        'description': 'Hack day project to provide a free open source comunity tracking system. Trial example to track Buss, Taxis, School trips',
        'category': 'code',
        'team': ['shish', 'joe'],
        'year': 2014,
        'icons': ['python','html5','postgresql','pyramid'],
        'width': 1,
        'height': 1
    },

    
    {
        'title':'Flexi RPG Responsve Digital Pubication',
        'link': '',
        'image': 'projects/',
        'description': "To assit the digitial publication of a 'pen and paper' rpg system developed by a startup. Responsive content distributed with HTML5 offline storeage.",
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
        'category': ['music'],
        'year': 2013,
        'team': ['lyle','matt','joe'],
        'icons': ['piano', 'bass', 'drums'],
        'width': 2,
        'height': 2
    },

    {
        'title': 'Taxpayers alliance',
        'description': 'Heatmap visulation of national statistics',
        'year': 2013,
        'icons': ['python'],
        'width': 1,
        'height': 1
    },
    
    {
        'title': 'RetroPrice Statistics',
        'description': 'Scraping data over the course of a year to assertain the average price and rarity of retrogames in the uk. Created a mobile interfae to access deatails at a possible bargins notice',
        'year': 2013,
        'link': '',
        'category': 'code',
        'icons': ['python', 'html5'],
        'width': 2,
        'height': 1
    },
    
    {
        'title': 'Streets of DIFID',
        'year': 2012,
        'team': ['proto', 'shish', 'amy'],
        'icons': ['python', 'html5'],
        'width': 1,
        'height': 2,
    },
    
    {
        'title':'Teach Programming',
        'link': 'http://calaldees.tnkd.net/project/game/copter.html',
        'image': 'projects/teach_programming.png',
        'description': "Learn to program multiplayer games in HTML5/Javascript, Python, Java, VB.NET and PHP. Teaching resources and activities.",
        'description_extended': "",
        'year':'2012',
        'icons': ['python','java','vb','php','html5','pyramid','bootstrap'],
        'category': 'code',
        'width': 3,
        'height': 1
    },
    {
        'title': 'Open mic performances',
        'year': '2013',
        'category': 'music',
        'icons': ['piano'],
        'width': 1,
        'height': 1
    },

    {
        'title': 'Access Europe',
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
        'width': 3,
        'height': 3
    },
    
    {
        'title': 'Coastal Cycle',
        'year': '2010',
        'description': 'Canterbury-Hastings-Brightion-Arendel-Southempton',
        'category': 'code',
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
        'height': 1
    },
    {
        'title':'CarMuse',
        'link': 'http://hacks.rewiredstate.org/events/power-of-minds/car-muse',
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
        'image': 'projects/',
        'description': "Hack weekend project. Every word said in parliament is logged. We process this and create a word cloud browser to browse what politicians are talking about.",
        'year':'2011',
        'icons': ['python'],
        'category': 'code',
        'team': ['shish','greg'],
        'width': 2,
        'height': 1
    },
    {
        'title':'Barcode Thing',
        'link': 'http://rewiredstate.org/projects/barcode-thing',
        'image': 'projects/barcode.jpeg',
        'description': "Hack weekend project. Online barcode catalog and info retrieval. I wrote the Javascript algorithm to decode a barcode image from the phone camera.",
        'description_extended': "Scan a barcode from your phone, server gives you, average price on eBay, if it's in your collection, previews of media e.g trailer from youtube, amazon mp3 previews of songs.",
        'year':'2011',
        'team': ['shish','greg'],
        'icons': ['html5'],
        'category': 'code',
        'width': 2,
        'height': 1
    },
    {
        'title':'FreeHoc',
        'link': 'http://rewiredstate.org/projects/freehoc',
        'image': 'projects/freehoc.jpg',
        'description': "Hack weekend project. Freecycle + Geopositional + Custom alerts + SMS interface.",
        'year':'2011',
        'team': ['shish','greg','proto'],
        'icons': ['python', 'pyramid'],
        'category': 'code',
        'width': 2,
        'height': 1
    },
    
    {
        'title':'CAS Conference Speaker',
        'link': '',
        'image': '',
        'description': "Spoke at the national 'Computing at School' conference about innovative ways to teach programming",
        'year':'2010',
        'icons': ['python', 'html5', 'php', 'java', 'vb'],
        'width': 1,
        'height': 1
    },
    
    {
        'title': 'Luggage (Discworld)',
        'image': 'projects/luggage.png',
        'description': 'Custom made retractable latex feet and leavers to control the mouth. An interesting construction project.',
        'category': 'costume',
        'year': 2009,
        'width': 2,
        'height': 1
    },
    
    {
        'title': 'Nessessary Evil',
        'description': 'Gamemastered an epic action comedy adventure for a single 2 year campaine',
        'image': 'projects/nessessary_evil.jpg',
        'year': '2009-2011',
        'category': 'other',
        'width': 3,
        'height': 1
    },
    
    {
        'title': 'Piano Transcriptions',
        'category': 'code',
        'year': '2009-now',
        'icons': ['piano'],
        'width': 1,
        'height': 2
    },

    {
        'title': 'AQA Computing',
        'year': '2009-2011',
        'description': 'While continuing to work at Civicboom I continued to work 1 day a week teaching computing. Took a cohort with students as young as age 13 through AS Computing',
        'width': 1,
        'height': 2,
    },
    
    {
        'title':'Guardian Heroes Sprites',
        'link': '',
        'image': 'projects/ghrev1.png',
        'description': "Attempt at reverse engineering the sprite format for sprites in the Sega Saturn game.",
        'description_extended': "Injecting binary data into the ISO and using an emulator with a specific state to read the sprites from disk. Once the corruption had been observed I could makes notes as to algorithum that was processing the data.",
        'year':'2011',
        'icons': ['java'],
        'category': 'code',
        'width': 1,
        'height': 1
    },
    
    {
        'title': 'k.alt.del',
        'year': '2009-2011',
        'description': '',
        'category': 'code',
        'icons': ['piano', 'bass'],
        'width': 2,
        'height': 1
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
        'height': 1
    },

    {
        'title': 'Sandwich Technology School',
        'link': '',
        'image': 'projects/',
        'description': "AQA AS/A2 Computing.",
        'year': '2007-2009',
        'category': 'code',
        'width': 2,
        'height': 2
    },

    
    {
        'title':'3D Camera Rig and Processing',
        'link': '',
        'image': 'projects/3d.png',
        'description': "Bolting two cameras side by side. Python code cyan/red merged the frames. Photographed a wedding and constructed a script to process 3D video.",
        'year': '2009',
        'icons': ['python'],
        'category': 'code',
        'width': 2,
        'height': 1
    },


    
    
    {
        'title':'PostOffice Server',
        'link': 'https://github.com/calaldees/javalib/tree/master/lib/Utils/Utils/Network/PostOfficeServer',
        'image': 'projects/',
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
        'description': '',
        'category': 'costume',
        'year': 2007
    },

    {
        'title':'Learn2Care Booking System',
        'link': '',
        'image': 'projects/l2c_booking.png',
        'description': "Learn2Care was a career training company. They needed database consultancy for developing their data stores and required a custom event/room booking system with attendees and prices.",
        'description_exended': "",
        'year':'2006',
        'icons': ['access','vb'],
        'category': 'code',
        'width': 1,
        'height': 2
    },

    {
        'title': 'Baby godzilla suite',
        'description': 'Constructed a cardboard tokyo and a mini godzilla suite for a 1 year old and put Mum at the other side of the room. Raaawww.',
        'year': 2007,
        'team': ['jon']
    },
    
    {
        'title': 'Youth Group Summer Camp Volenteer',
        'decription': 'Action and advanture camp with local youth group. Physically and emotionally demanding, but pure awesome',
        'year': '2005-2010',
        'category': 'code',
        'width': 1,
        'height': 2
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
        'height': 2
    },
    
    
    {
        'title': 'Advanced computing workshop',
        'description': "Extra curricular 3 month workshop taking students through building a computer, installing linux, setup + program dynamic webpages and games",
        'year': '2006',
        'category': 'teaching',
        'width': 1,
        'height': 2
    },

    {
        'title': 'Retro Console Shelfs',
        'description': "Presevation project to make old comuters useable. Custom shelfs to house retro consoles on removable shelf's with standard power and scart connectors. After picking a game for any system, you could be playing it in 60 seconds.",
        'category': 'construction',
        'width': 1,
        'height': 1
    },

    {
        'title':'GameFrame',
        'link': 'https://github.com/calaldees/javalib/tree/master/Game/ProgrammingWorkshop',
        'image': 'projects/',
        'description': "A game lib for Java that gave learners simple access to display, timing, network and sound.",
        'year': '2007',
        'icons': ['java'],
        'category': 'code',
        'width': 1,
        'height': 1
    },

    {
        'title': 'Chaucer Technology School',
        'description': 'AQA A2 Computing',
        'year': '2005-2006',
        'width': 2,
        'height': 2
    },
    
    {
        'title': 'Arcade Cabinet',
        'description': "Built an arcade cabinet with touch screen interface. It's been used in schools and inherited by many people. After 10 years of solid use and abuse it's still standing and used regularty",
        'category': 'construction',
        'year': 2005,
        'width': 2,
        'height': 1
    },

    {
        'title': 'Purple Tentacle',
        'image': 'projects/tentacle_festival_hall.jpg',
        'description': 'Constructed a scale costume of a classic Lucusarts comedy game character. Won the 2007 Videogames Live costume competion at the Royal Festival Hall in London',
        'team': ['jon'],
        'year': 2006,
        'category': 'costume',
        'width': 1,
        'height': 2
    },    

    

    {
        'title':'Mini Webserver',
        'link': '',
        'image': 'projects/',
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
        'link': '',
        'image': 'projects/',
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
        'link': '',
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
        'image': 'projects/',
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
        'description': 'For 14 years have contributed/advised/assited with the largest anime socity in Kent. Helped take it from an unknown small crowd trhough to a regular 50+ attendees a week',
        'link': ['overload'],
        'team': ['jon','carl'],
        'year': '1999-2013',
        'category': 'code',
        'width': 3,
        'height': 1
    },
    
    {
        'title':'Material Modeller',
        'link': '',
        'image': 'projects/springs.png',
        'description': "Physics system based on masses and springs. User could interact in realtime and deform/break structures.",
        'description_extended': "Final year research project into how real time simulation could help solve real problems. By modling simple physical rules the emergent behaviour was awesome, e.g friction with the floor made the wheels of a car actually turn.",
        'year':'2002',
        'icons': ['java'],
        'category': 'code',
        'width': 2,
        'height': 2
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
        'image': 'projects/',
        'description': "A comedy page about 'How to be a REAL ninja'",
        'description_exended': "",
        'year':'2000',
        'width': 1,
        'height': 1
    },

    
    {
        'title':'Java Multimedia Player',
        'link': '',
        'image': 'projects/',
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
        'category': 'code',
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
        'category': 'code',
        'width': 1,
        'height': 1
    },
    {
        'title':'Cars',
        'link': '',
        'image': 'projects/cars.png',
        'description': "Micro machines style car game.",
        'description_extended': "Had level editor, variable width font system and car physics. Wrote my own sprite rotation algorithum.",
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
        'width': 1,
        'height': 1
    },
    {
        'title':'Speed Test',
        'link': '',
        'image': 'projects/speedtest.png',
        'description': "Simple benchmark utility to test processor, ASCI, VGA and disk access.",
        'description_exended': "The final scores were compared against known systems. The final output was displayed in a set of bar charts thats animated and grew.",
        'year':'1996',
        'icons': ['pascal'],
        'category': 'code',
        'width': 1,
        'height': 1
    },

    {
        'title':'Retail Stock Control System',
        'link': '',
        'image': 'projects/stock.png',
        'description': "Real barcode checkout system written in Pascal. Created my own relational database structure with search/sort algorithms.",
        'description_exended': "It could print new orders forms and stock charts. The grocery store it was designed for went bust before the project was finished.",
        'year':'1998',
        'icons': ['pascal'],
        'category': 'code',
        'width': 1,
        'height': 1
    },
    
    {
        'title': 'Code based animations',
        'image': 'projects/dnalogo.png',
        'year': 1996,
        'width': 1,
        'height': 1
    },
    
    {
        'title':'Tracker Tunes',
        'link': '',
        'image': 'projects/',
        'description': "",
        'description_exended': "",
        'year':'1996',
        'width': 1,
        'height': 1
    },
    

]
);