// ============================================================
// Third Eye — Blindfold Reading Practice
// ============================================================

// ---- Configuration ----
const COUNTDOWN_SECONDS = 4;

const WORDS = [
    'love', 'peace', 'fire', 'water', 'earth', 'sky', 'sun', 'moon',
    'star', 'tree', 'river', 'ocean', 'rain', 'wind', 'light', 'gold',
    'hope', 'joy', 'dream', 'heart', 'dance', 'book', 'door', 'key',
    'home', 'bird', 'fish', 'wolf', 'lion', 'rose', 'bell', 'crown',
    'flame', 'stone', 'cloud', 'snow', 'storm', 'wave', 'truth', 'time',
    'spirit', 'music', 'wisdom', 'power', 'nature', 'magic', 'shadow',
    'mirror', 'crystal', 'temple', 'lotus', 'thunder', 'feather',
    'diamond', 'candle', 'forest', 'island', 'sunrise', 'horizon',
    'breeze', 'harmony', 'journey', 'phoenix', 'dragon', 'falcon',
    'dolphin', 'tiger', 'eagle', 'pearl', 'emerald', 'silver', 'honey',
    'orchid', 'garden', 'bridge', 'tower', 'anchor', 'compass', 'lantern',
];

const IMAGES = [
    { emoji: '\u{1F418}', answers: ['elephant'] },
    { emoji: '\u{1F404}', answers: ['cow'] },
    { emoji: '\u{1F431}', answers: ['cat'] },
    { emoji: '\u{1F436}', answers: ['dog'] },
    { emoji: '\u{1F434}', answers: ['horse'] },
    { emoji: '\u{1F981}', answers: ['lion'] },
    { emoji: '\u{1F43B}', answers: ['bear'] },
    { emoji: '\u{1F40D}', answers: ['snake'] },
    { emoji: '\u{1F422}', answers: ['turtle', 'tortoise'] },
    { emoji: '\u{1F438}', answers: ['frog'] },
    { emoji: '\u{1F98B}', answers: ['butterfly'] },
    { emoji: '\u{1F41D}', answers: ['bee'] },
    { emoji: '\u{1F41F}', answers: ['fish'] },
    { emoji: '\u{1F419}', answers: ['octopus'] },
    { emoji: '\u{1F988}', answers: ['shark'] },
    { emoji: '\u{1F433}', answers: ['whale'] },
    { emoji: '\u{1F989}', answers: ['owl'] },
    { emoji: '\u{1F98A}', answers: ['fox'] },
    { emoji: '\u{1F427}', answers: ['penguin'] },
    { emoji: '\u{1F986}', answers: ['duck'] },
    { emoji: '\u{1F985}', answers: ['eagle'] },
    { emoji: '\u{1F412}', answers: ['monkey'] },
    { emoji: '\u{1F31E}', answers: ['sun'] },
    { emoji: '\u{1F319}', answers: ['moon'] },
    { emoji: '\u2B50',    answers: ['star'] },
    { emoji: '\u{1F308}', answers: ['rainbow'] },
    { emoji: '\u2601\uFE0F', answers: ['cloud'] },
    { emoji: '\u{1F30A}', answers: ['wave', 'ocean'] },
    { emoji: '\u{1F3D4}\uFE0F', answers: ['mountain'] },
    { emoji: '\u{1F30B}', answers: ['volcano'] },
    { emoji: '\u{1F335}', answers: ['cactus'] },
    { emoji: '\u{1F333}', answers: ['tree'] },
    { emoji: '\u{1F33A}', answers: ['flower'] },
    { emoji: '\u{1F34E}', answers: ['apple'] },
    { emoji: '\u{1F34C}', answers: ['banana'] },
    { emoji: '\u{1F347}', answers: ['grapes'] },
    { emoji: '\u{1F353}', answers: ['strawberry'] },
    { emoji: '\u{1F355}', answers: ['pizza'] },
    { emoji: '\u{1F3E0}', answers: ['house', 'home'] },
    { emoji: '\u{1F697}', answers: ['car'] },
    { emoji: '\u{1F680}', answers: ['rocket'] },
    { emoji: '\u2708\uFE0F', answers: ['airplane', 'plane'] },
    { emoji: '\u{1F6B2}', answers: ['bicycle', 'bike'] },
    { emoji: '\u26F5',    answers: ['boat', 'sailboat'] },
    { emoji: '\u{1F511}', answers: ['key'] },
    { emoji: '\u{1F514}', answers: ['bell'] },
    { emoji: '\u2764\uFE0F', answers: ['heart'] },
    { emoji: '\u{1F525}', answers: ['fire', 'flame'] },
    { emoji: '\u{1F4A7}', answers: ['water', 'drop'] },
    { emoji: '\u{1F4DA}', answers: ['book', 'books'] },
    { emoji: '\u270F\uFE0F', answers: ['pencil'] },
    { emoji: '\u{1F528}', answers: ['hammer'] },
    { emoji: '\u{1F451}', answers: ['crown'] },
    { emoji: '\u{1F48E}', answers: ['diamond', 'gem'] },
    { emoji: '\u{1F56F}\uFE0F', answers: ['candle'] },
    { emoji: '\u23F0',    answers: ['clock', 'alarm'] },
    { emoji: '\u{1F3B8}', answers: ['guitar'] },
    { emoji: '\u{1F3B9}', answers: ['piano', 'keyboard'] },
    { emoji: '\u{1F3C0}', answers: ['basketball'] },
    { emoji: '\u26BD',    answers: ['soccer', 'football'] },
];

const SPIRITUAL_HINTS = [
    'Trust your inner vision.',
    'The answer is already within you.',
    'Breathe deeply and let it come.',
    'Your third eye sees clearly.',
    'Relax and allow the image to form.',
    'You are closer than you think.',
    'Let the energy guide you.',
    'Open your awareness wider.',
    'Feel the vibration of the word.',
    'The universe is revealing it to you.',
    'Still your mind and receive.',
    'Your intuition knows the answer.',
];

const TRY_AGAIN_PHRASES = [
    'Not quite, keep going!',
    'Almost, try once more!',
    'Keep focusing!',
    'Give it another shot!',
    'Stay centered, try again!',
    "You're doing great, try once more!",
];

const IMAGE_CATEGORIES = {
    animal: ['elephant', 'cow', 'cat', 'dog', 'horse', 'lion', 'bear', 'snake', 'turtle', 'tortoise', 'frog', 'butterfly', 'bee', 'fish', 'octopus', 'shark', 'whale', 'owl', 'fox', 'penguin', 'duck', 'eagle', 'monkey'],
    nature: ['sun', 'moon', 'star', 'rainbow', 'cloud', 'wave', 'ocean', 'mountain', 'volcano', 'cactus', 'tree', 'flower'],
    food: ['apple', 'banana', 'grapes', 'strawberry', 'pizza'],
    transport: ['car', 'rocket', 'airplane', 'plane', 'bicycle', 'bike', 'boat', 'sailboat'],
    object: ['key', 'bell', 'heart', 'fire', 'flame', 'water', 'drop', 'book', 'books', 'pencil', 'hammer', 'crown', 'diamond', 'gem', 'candle', 'clock', 'alarm', 'guitar', 'piano', 'keyboard', 'basketball', 'soccer', 'football', 'house', 'home'],
};

const RELATED_WORDS = {
    elephant: { words: ['trunk', 'tusks', 'jumbo', 'mammoth', 'dumbo'], hint: 'Think big and grey!' },
    horse: { words: ['pony', 'stallion', 'mare', 'foal', 'donkey', 'mule'], hint: 'Think bigger!' },
    cow: { words: ['bull', 'calf', 'ox', 'cattle', 'buffalo'], hint: 'Close! Think farm.' },
    cat: { words: ['kitten', 'kitty', 'feline', 'tabby'], hint: 'Right animal, simpler word!' },
    dog: { words: ['puppy', 'hound', 'canine', 'mutt', 'pup'], hint: 'Right animal, simpler word!' },
    lion: { words: ['tiger', 'leopard', 'cheetah', 'panther'], hint: 'Right family! Think mane.' },
    bear: { words: ['grizzly', 'polar', 'panda', 'teddy'], hint: 'Just the simple word!' },
    snake: { words: ['serpent', 'viper', 'cobra', 'python'], hint: 'Simpler word!' },
    whale: { words: ['dolphin', 'porpoise'], hint: 'Bigger than that!' },
    shark: { words: ['fish', 'jaws'], hint: 'Scarier than a fish!' },
    owl: { words: ['hawk', 'falcon', 'eagle'], hint: 'Night bird! Who-who!' },
    fox: { words: ['wolf', 'coyote', 'jackal'], hint: 'Smaller and orange!' },
    monkey: { words: ['ape', 'gorilla', 'chimp', 'chimpanzee', 'primate'], hint: 'Simpler word!' },
    butterfly: { words: ['moth', 'insect', 'bug'], hint: 'More colorful!' },
    volcano: { words: ['mountain', 'lava', 'eruption'], hint: 'An exploding mountain!' },
    rocket: { words: ['spaceship', 'shuttle', 'missile'], hint: 'Simpler word!' },
    bicycle: { words: ['cycle', 'tricycle', 'bike'], hint: 'Two wheels!' },
    guitar: { words: ['ukulele', 'banjo', 'bass', 'instrument'], hint: 'Six strings!' },
    piano: { words: ['organ', 'synth', 'keys'], hint: 'Black and white keys!' },
};

// "Close" words per answer — things you'd say if your intuition is seeing it.
// HOT = you're perceiving it. The word doesn't matter, the vision does.
const CLOSE_WORDS = {
    // ---- WORDS list ----
    love: ['heart', 'romance', 'passion', 'affection', 'caring', 'devotion', 'warmth', 'embrace', 'kiss', 'adore'],
    peace: ['calm', 'quiet', 'silence', 'serene', 'tranquil', 'harmony', 'still', 'rest', 'gentle', 'zen'],
    fire: ['flame', 'burn', 'blaze', 'heat', 'hot', 'ember', 'torch', 'inferno', 'spark', 'bonfire', 'campfire'],
    water: ['liquid', 'wet', 'fluid', 'aqua', 'rain', 'drop', 'splash', 'pour', 'flow', 'stream', 'blue'],
    earth: ['ground', 'soil', 'dirt', 'land', 'mud', 'terrain', 'planet', 'world', 'globe', 'clay'],
    sky: ['blue', 'above', 'heaven', 'air', 'atmosphere', 'clouds', 'ceiling', 'up', 'overhead'],
    sun: ['bright', 'solar', 'sunshine', 'sunny', 'daylight', 'warm', 'yellow', 'glow', 'ray', 'beam', 'light'],
    moon: ['lunar', 'crescent', 'night', 'moonlight', 'full', 'half', 'glow', 'silver', 'dark'],
    star: ['twinkle', 'sparkle', 'shine', 'stellar', 'bright', 'night', 'sky', 'constellation', 'glitter', 'point'],
    tree: ['wood', 'trunk', 'branch', 'leaf', 'oak', 'pine', 'forest', 'bark', 'roots', 'plant', 'timber', 'log'],
    river: ['stream', 'creek', 'flow', 'water', 'current', 'brook', 'canal', 'flowing', 'bank'],
    ocean: ['sea', 'water', 'waves', 'deep', 'marine', 'blue', 'pacific', 'atlantic', 'vast', 'tide'],
    rain: ['water', 'drops', 'wet', 'shower', 'drizzle', 'pour', 'storm', 'falling', 'umbrella', 'downpour'],
    wind: ['breeze', 'blow', 'air', 'gust', 'gale', 'draft', 'breezy', 'windy', 'blowing'],
    light: ['bright', 'glow', 'shine', 'lamp', 'beam', 'ray', 'radiance', 'illumination', 'luminous', 'sun', 'bulb'],
    gold: ['golden', 'yellow', 'metal', 'silver', 'shiny', 'treasure', 'precious', 'rich', 'gilt', 'ore', 'bar', 'coin', 'bronze', 'copper'],
    hope: ['wish', 'faith', 'believe', 'dream', 'optimism', 'pray', 'trust', 'expect', 'aspire'],
    joy: ['happy', 'happiness', 'glad', 'delight', 'bliss', 'cheerful', 'elation', 'pleasure', 'smile', 'laugh'],
    dream: ['sleep', 'vision', 'imagine', 'fantasy', 'wish', 'hope', 'night', 'cloud', 'floating'],
    heart: ['love', 'beat', 'red', 'pulse', 'valentine', 'chest', 'cardiac', 'core', 'soul', 'warm'],
    dance: ['move', 'rhythm', 'sway', 'ballet', 'step', 'spin', 'twirl', 'groove', 'salsa', 'waltz', 'music'],
    book: ['read', 'pages', 'novel', 'story', 'text', 'library', 'chapter', 'volume', 'words', 'literature', 'reading'],
    door: ['gate', 'entrance', 'entry', 'exit', 'opening', 'doorway', 'portal', 'knock', 'handle', 'open', 'close'],
    key: ['lock', 'open', 'unlock', 'door', 'metal', 'secret', 'answer', 'solution', 'keyhole'],
    home: ['house', 'shelter', 'dwelling', 'family', 'roof', 'residence', 'apartment', 'building', 'place', 'comfort', 'room'],
    bird: ['fly', 'wing', 'feather', 'nest', 'beak', 'sparrow', 'robin', 'crow', 'songbird', 'chirp', 'tweet'],
    fish: ['swim', 'water', 'fin', 'scale', 'ocean', 'sea', 'aquarium', 'pond', 'salmon', 'trout', 'catch'],
    wolf: ['dog', 'howl', 'pack', 'wild', 'grey', 'predator', 'canine', 'coyote', 'fangs', 'hunt', 'hound'],
    lion: ['king', 'mane', 'roar', 'pride', 'jungle', 'cat', 'fierce', 'tiger', 'beast', 'leo', 'simba', 'courage', 'brave'],
    rose: ['flower', 'red', 'petal', 'thorn', 'bloom', 'garden', 'bouquet', 'pink', 'blossom', 'romance', 'beautiful'],
    bell: ['ring', 'chime', 'ding', 'sound', 'toll', 'church', 'jingle', 'alarm', 'gong'],
    crown: ['king', 'queen', 'royal', 'throne', 'prince', 'princess', 'reign', 'tiara', 'jewel', 'head', 'ruler'],
    flame: ['fire', 'burn', 'hot', 'candle', 'blaze', 'torch', 'ember', 'heat', 'spark', 'flicker', 'glow'],
    stone: ['rock', 'pebble', 'boulder', 'hard', 'mineral', 'gravel', 'cobble', 'granite', 'marble', 'solid', 'heavy'],
    cloud: ['sky', 'white', 'fluffy', 'rain', 'fog', 'mist', 'float', 'weather', 'soft', 'puffy', 'grey'],
    snow: ['cold', 'white', 'ice', 'winter', 'frost', 'freeze', 'flake', 'blizzard', 'ski', 'christmas', 'frozen'],
    storm: ['rain', 'thunder', 'lightning', 'wind', 'tempest', 'hurricane', 'wild', 'fierce', 'dark', 'violent', 'cyclone'],
    wave: ['ocean', 'sea', 'water', 'surf', 'tide', 'ripple', 'crash', 'beach', 'swell', 'curl'],
    truth: ['honest', 'real', 'true', 'fact', 'genuine', 'sincere', 'pure', 'authentic', 'correct', 'right'],
    time: ['clock', 'hour', 'minute', 'second', 'watch', 'tick', 'past', 'future', 'present', 'moment', 'eternal'],
    spirit: ['soul', 'ghost', 'energy', 'essence', 'divine', 'holy', 'sacred', 'aura', 'inner', 'presence'],
    music: ['song', 'melody', 'tune', 'rhythm', 'sound', 'notes', 'harmony', 'sing', 'instrument', 'band', 'play'],
    wisdom: ['wise', 'knowledge', 'smart', 'sage', 'insight', 'understanding', 'intelligence', 'learn', 'enlighten'],
    power: ['strong', 'strength', 'force', 'energy', 'mighty', 'powerful', 'muscle', 'electric', 'charge'],
    nature: ['natural', 'earth', 'green', 'wild', 'outdoor', 'forest', 'organic', 'trees', 'plants', 'life'],
    magic: ['spell', 'wizard', 'witch', 'wand', 'sorcery', 'enchant', 'mystical', 'trick', 'illusion', 'supernatural'],
    shadow: ['dark', 'shade', 'silhouette', 'darkness', 'dim', 'black', 'outline', 'ghost', 'night', 'grey'],
    mirror: ['reflect', 'reflection', 'glass', 'image', 'self', 'look', 'see', 'shiny', 'surface'],
    crystal: ['clear', 'glass', 'gem', 'transparent', 'quartz', 'sparkle', 'ice', 'pure', 'shiny', 'diamond', 'jewel'],
    temple: ['church', 'shrine', 'sacred', 'holy', 'worship', 'prayer', 'mosque', 'spiritual', 'ancient', 'pillar'],
    lotus: ['flower', 'water', 'lily', 'petal', 'bloom', 'pink', 'zen', 'buddha', 'pond', 'meditation', 'sacred'],
    thunder: ['lightning', 'storm', 'loud', 'boom', 'rumble', 'crash', 'sky', 'rain', 'electric', 'roar'],
    feather: ['bird', 'light', 'soft', 'wing', 'fly', 'quill', 'plume', 'fluffy', 'float', 'delicate', 'tickle'],
    diamond: ['gem', 'jewel', 'sparkle', 'crystal', 'ring', 'precious', 'stone', 'brilliant', 'shiny', 'carbon', 'rock'],
    candle: ['flame', 'light', 'wax', 'fire', 'glow', 'wick', 'burn', 'lamp', 'lantern', 'bright', 'dark'],
    forest: ['trees', 'woods', 'jungle', 'green', 'nature', 'wild', 'dense', 'dark', 'path', 'trail'],
    island: ['beach', 'ocean', 'sea', 'tropical', 'land', 'water', 'palm', 'paradise', 'remote', 'shore', 'sand'],
    sunrise: ['dawn', 'morning', 'sun', 'rise', 'early', 'orange', 'horizon', 'daybreak', 'light', 'sky', 'golden'],
    horizon: ['far', 'distance', 'sky', 'line', 'sunset', 'sunrise', 'edge', 'view', 'panorama', 'vast', 'end'],
    breeze: ['wind', 'air', 'gentle', 'cool', 'blow', 'soft', 'light', 'draft', 'fresh', 'breezy', 'mild'],
    harmony: ['peace', 'balance', 'music', 'accord', 'together', 'unity', 'melody', 'chord', 'sync', 'agreement'],
    journey: ['travel', 'trip', 'voyage', 'path', 'road', 'adventure', 'quest', 'walk', 'expedition', 'way', 'route'],
    phoenix: ['fire', 'bird', 'rebirth', 'rise', 'flame', 'myth', 'fly', 'ash', 'legend', 'immortal', 'wings'],
    dragon: ['fire', 'fly', 'beast', 'myth', 'wings', 'scales', 'lizard', 'serpent', 'breathe', 'medieval', 'monster'],
    falcon: ['bird', 'hawk', 'eagle', 'fly', 'fast', 'hunt', 'wing', 'prey', 'raptor', 'soar', 'swift'],
    dolphin: ['ocean', 'sea', 'swim', 'water', 'fin', 'jump', 'smart', 'marine', 'whale', 'playful', 'fish'],
    tiger: ['stripes', 'cat', 'jungle', 'wild', 'fierce', 'orange', 'predator', 'lion', 'big', 'hunt', 'roar'],
    eagle: ['bird', 'fly', 'soar', 'wing', 'freedom', 'hawk', 'bald', 'sky', 'prey', 'majestic', 'america'],
    pearl: ['white', 'round', 'oyster', 'jewel', 'gem', 'necklace', 'ocean', 'precious', 'shiny', 'shell', 'bead'],
    emerald: ['green', 'gem', 'jewel', 'stone', 'precious', 'crystal', 'color', 'jade', 'sparkle', 'oz'],
    silver: ['metal', 'grey', 'shiny', 'gold', 'chrome', 'steel', 'platinum', 'coin', 'ring', 'second', 'mirror'],
    honey: ['sweet', 'bee', 'gold', 'golden', 'sticky', 'sugar', 'nectar', 'syrup', 'hive', 'bear', 'jar'],
    orchid: ['flower', 'purple', 'bloom', 'petal', 'plant', 'exotic', 'beautiful', 'tropical', 'delicate', 'pink'],
    garden: ['flower', 'plant', 'green', 'grow', 'nature', 'yard', 'beautiful', 'soil', 'seed', 'bloom', 'park'],
    bridge: ['cross', 'river', 'connect', 'span', 'road', 'arch', 'over', 'gap', 'path', 'structure', 'link'],
    tower: ['tall', 'high', 'building', 'castle', 'top', 'climb', 'structure', 'spire', 'lookout', 'fortress'],
    anchor: ['ship', 'boat', 'sea', 'ocean', 'heavy', 'hold', 'chain', 'metal', 'dock', 'harbor', 'port', 'sailor'],
    compass: ['direction', 'north', 'south', 'navigate', 'map', 'guide', 'needle', 'east', 'west', 'point', 'travel'],
    lantern: ['lamp', 'light', 'glow', 'candle', 'flame', 'bright', 'night', 'dark', 'carry', 'oil', 'illuminate', 'torch', 'flashlight'],
    // ---- IMAGE answers ----
    elephant: ['trunk', 'tusks', 'big', 'grey', 'large', 'mammoth', 'africa', 'heavy', 'jumbo', 'dumbo', 'animal'],
    cow: ['bull', 'cattle', 'milk', 'farm', 'moo', 'calf', 'ox', 'beef', 'dairy', 'buffalo', 'animal'],
    cat: ['kitten', 'kitty', 'meow', 'feline', 'purr', 'whiskers', 'pet', 'tabby', 'paws'],
    dog: ['puppy', 'pup', 'canine', 'bark', 'pet', 'hound', 'woof', 'mutt', 'tail', 'fetch'],
    horse: ['pony', 'stallion', 'mare', 'ride', 'gallop', 'foal', 'mane', 'hoof', 'equine', 'donkey', 'mule'],
    bear: ['grizzly', 'polar', 'panda', 'fur', 'big', 'brown', 'honey', 'teddy', 'cub', 'wild'],
    snake: ['serpent', 'slither', 'viper', 'cobra', 'python', 'reptile', 'hiss', 'scales', 'poison', 'venom'],
    turtle: ['shell', 'slow', 'tortoise', 'reptile', 'sea', 'green', 'hard', 'swim'],
    frog: ['green', 'jump', 'hop', 'toad', 'ribbit', 'pond', 'croak', 'amphibian', 'lily'],
    butterfly: ['wings', 'fly', 'insect', 'beautiful', 'colorful', 'moth', 'flutter', 'caterpillar', 'monarch'],
    bee: ['honey', 'buzz', 'sting', 'hive', 'yellow', 'insect', 'pollen', 'flower', 'wasp', 'bumble'],
    octopus: ['tentacles', 'eight', 'arms', 'ocean', 'sea', 'squid', 'ink', 'underwater', 'legs'],
    shark: ['teeth', 'fin', 'ocean', 'jaws', 'bite', 'predator', 'sea', 'dangerous', 'great', 'swim'],
    whale: ['big', 'ocean', 'sea', 'blue', 'huge', 'swim', 'marine', 'fin', 'spout', 'mammal', 'humpback'],
    owl: ['hoot', 'night', 'wise', 'bird', 'fly', 'eyes', 'nocturnal', 'feathers', 'hawk'],
    fox: ['orange', 'red', 'cunning', 'sly', 'clever', 'wild', 'tail', 'wolf', 'dog', 'fur', 'vixen'],
    penguin: ['ice', 'cold', 'bird', 'black', 'white', 'antarctic', 'waddle', 'swim', 'tuxedo', 'march'],
    duck: ['quack', 'bird', 'swim', 'pond', 'water', 'waddle', 'feathers', 'bill', 'mallard', 'goose'],
    monkey: ['ape', 'banana', 'climb', 'swing', 'tail', 'primate', 'gorilla', 'chimp', 'jungle', 'chimpanzee'],
    rainbow: ['colors', 'arc', 'sky', 'rain', 'colorful', 'spectrum', 'seven', 'bright', 'beautiful'],
    mountain: ['hill', 'peak', 'climb', 'tall', 'high', 'rock', 'summit', 'snow', 'range', 'top', 'everest'],
    volcano: ['lava', 'erupt', 'mountain', 'fire', 'hot', 'explosion', 'magma', 'ash', 'smoke', 'eruption'],
    cactus: ['desert', 'spike', 'prickly', 'thorn', 'plant', 'dry', 'green', 'needle', 'sand', 'hot', 'arid'],
    flower: ['petal', 'bloom', 'garden', 'rose', 'beautiful', 'plant', 'blossom', 'bouquet', 'spring', 'colorful'],
    apple: ['fruit', 'red', 'green', 'eat', 'tree', 'juice', 'pie', 'bite', 'crisp', 'sweet', 'food'],
    banana: ['yellow', 'fruit', 'peel', 'monkey', 'tropical', 'sweet', 'curved', 'bunch', 'food'],
    grapes: ['wine', 'purple', 'vine', 'fruit', 'bunch', 'green', 'grape', 'raisin', 'juicy'],
    strawberry: ['red', 'berry', 'fruit', 'sweet', 'jam', 'pink', 'seed', 'cream', 'summer'],
    pizza: ['food', 'cheese', 'slice', 'italian', 'pie', 'pepperoni', 'dough', 'round', 'eat', 'dinner'],
    car: ['drive', 'vehicle', 'auto', 'road', 'wheel', 'ride', 'automobile', 'truck', 'motor', 'fast'],
    rocket: ['space', 'fly', 'launch', 'fast', 'ship', 'spaceship', 'shuttle', 'nasa', 'blast', 'missile', 'moon'],
    airplane: ['fly', 'plane', 'jet', 'sky', 'flight', 'wing', 'pilot', 'air', 'travel', 'airport', 'aircraft'],
    bicycle: ['bike', 'ride', 'pedal', 'wheel', 'cycle', 'two', 'chain', 'handlebar', 'spoke', 'tricycle'],
    boat: ['ship', 'sail', 'water', 'sea', 'float', 'vessel', 'row', 'canoe', 'yacht', 'sailboat', 'ocean'],
    house: ['home', 'building', 'roof', 'door', 'room', 'shelter', 'live', 'family', 'apartment', 'dwelling'],
    guitar: ['music', 'string', 'play', 'strum', 'instrument', 'rock', 'chord', 'acoustic', 'electric', 'ukulele', 'banjo'],
    piano: ['keys', 'music', 'play', 'instrument', 'keyboard', 'black', 'white', 'note', 'organ', 'concert'],
    basketball: ['ball', 'hoop', 'court', 'dribble', 'shoot', 'sport', 'game', 'slam', 'dunk', 'bounce', 'net'],
    soccer: ['ball', 'kick', 'goal', 'field', 'football', 'sport', 'game', 'net', 'team', 'pitch'],
    pencil: ['write', 'draw', 'pen', 'lead', 'sharp', 'paper', 'eraser', 'yellow', 'sketch', 'crayon'],
    hammer: ['nail', 'tool', 'hit', 'bang', 'build', 'strike', 'wood', 'construction', 'mallet', 'pound'],
    clock: ['time', 'tick', 'watch', 'hour', 'minute', 'alarm', 'hand', 'tock', 'round', 'second'],
};

function getSemanticDistance(guess, answer) {
    const a = answer.toLowerCase();
    const g = guess.toLowerCase();
    if (g === a) return 0;

    const lev = levenshtein(g, a);
    if (lev <= 1) return 1;

    // Split multi-word guess — check each word individually
    const words = g.split(/\s+/).filter(w => w.length > 2);
    const closeWords = CLOSE_WORDS[a] || [];
    const related = RELATED_WORDS[a];
    const relatedWords = related ? related.words : [];
    const allClose = [...closeWords, ...relatedWords];

    // Check each word in the guess
    let bestDist = 8;
    for (const word of words) {
        if (word === a) { bestDist = 0; break; }
        const wLev = levenshtein(word, a);
        if (wLev <= 1) { bestDist = Math.min(bestDist, 1); continue; }
        if (allClose.includes(word)) { bestDist = Math.min(bestDist, 2); continue; }
        if (wLev <= 2) { bestDist = Math.min(bestDist, 3); continue; }
    }
    if (bestDist <= 3) return bestDist;

    // Full-phrase close-word check
    if (allClose.includes(g)) return 2;

    // Indirect associations via shared close-words
    if (closeWords.length > 0) {
        for (const word of [g, ...words]) {
            for (const [otherAnswer, otherClose] of Object.entries(CLOSE_WORDS)) {
                if (otherAnswer === a) continue;
                if (otherClose.includes(word) && closeWords.some(w => otherClose.includes(w))) return 4;
            }
        }
    }

    if (lev <= 2) return 3;
    const maxLen = Math.max(g.length, a.length);
    if (lev / maxLen < 0.4) return 5;

    return 8;
}

// ---- State ----
let mode = 'words';

let feedbackMode = 'simple';
let bgMusicType = 'none';
let theme = 'light';
let trackingEnabled = true;
let currentAnswer = null;
let currentDisplay = '';
let exerciseActive = false;
let recognition = null;
let timerTickId = null;
let timerEndTime = null;
let timerDurationMs = null;
let countdownIntervalId = null;
let lastWordIndex = -1;
let lastImageIndex = -1;
let audioCtx = null;
let sessionEndTime = null;
let sessionTickId = null;
let selectedVoice = null;
let stopMusicFn = null;
let tryAgainIndex = 0;
let sessionComplete = false;
let itemActive = false;
let activeInputStream = null;
let selectedAudioInputId = 'default';
let selectedAudioOutputId = 'default';
let customHints = [];
let lastGuessDistance = null;

// ---- DOM ----
const settingsPanel = document.getElementById('settings-panel');
const countdownArea = document.getElementById('countdown-area');
const exerciseArea = document.getElementById('exercise-area');
const resultArea = document.getElementById('result-area');
const dashboardPanel = document.getElementById('dashboard-panel');

const btnWords = document.getElementById('btn-words');
const btnImages = document.getElementById('btn-images');
const timerHoursInput = document.getElementById('timer-hours');
const timerMinutesInput = document.getElementById('timer-minutes');
const btnStartTimer = document.getElementById('btn-start-timer');
const btnStopTimer = document.getElementById('btn-stop-timer');
const timerDisplay = document.getElementById('timer-display');
const timerCountdownEl = document.getElementById('timer-countdown');
const btnStartExercise = document.getElementById('btn-start-exercise');

const countdownNumber = document.getElementById('countdown-number');
const displayContent = document.getElementById('display-content');
const micIcon = document.getElementById('mic-icon');
const listeningStatus = document.getElementById('listening-status');
const lastHeard = document.getElementById('last-heard');
const btnExact = document.getElementById('btn-exact');
const btnAlmost = document.getElementById('btn-almost');
const btnNo = document.getElementById('btn-no');
const btnSkip = document.getElementById('btn-skip');
const btnToggleMode = document.getElementById('btn-toggle-mode');
const resultBadge = document.getElementById('result-badge');

const resultContent = document.getElementById('result-content');
const btnNewExercise = document.getElementById('btn-new-exercise');
const btnBackMenu = document.getElementById('btn-back-menu');

const sessionMinutesInput = document.getElementById('session-minutes');
const sessionBar = document.getElementById('session-bar');
const sessionTimeLeft = document.getElementById('session-time-left');

const voiceSelect = document.getElementById('voice-select');
const btnVoiceTest = document.getElementById('btn-voice-test');

const feedbackModeSelect = document.getElementById('feedback-mode');
const bgMusicSelect = document.getElementById('bg-music');
const themeSelect = document.getElementById('theme-select');
const trackSessionCheckbox = document.getElementById('track-session');

const btnDashboard = document.getElementById('btn-dashboard');
const btnDashboardBack = document.getElementById('btn-dashboard-back');
const dashboardToday = document.getElementById('dashboard-today');
const dashboardTableContainer = document.getElementById('dashboard-table-container');

const exitBtn = document.getElementById('exit-btn');

const audioInputSelect = document.getElementById('audio-input');
const audioOutputSelect = document.getElementById('audio-output');
const customHintsRow = document.getElementById('custom-hints-row');
const customHintsTextarea = document.getElementById('custom-hints');

// ---- Helpers ----
function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function showOnly(panel) {
    [settingsPanel, countdownArea, exerciseArea, resultArea, dashboardPanel].forEach(p => p.classList.add('hidden'));
    panel.classList.remove('hidden');
}

function pickRandom(arr, lastIndex) {
    let index;
    do {
        index = Math.floor(Math.random() * arr.length);
    } while (index === lastIndex && arr.length > 1);
    return index;
}

function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = a[i - 1] === b[j - 1]
                ? dp[i - 1][j - 1]
                : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
    }
    return dp[m][n];
}

// ---- Audio Devices ----
async function enumerateAudioDevices() {
    try {
        // Need permission to get device labels
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(t => t.stop());

        const devices = await navigator.mediaDevices.enumerateDevices();
        const inputs = devices.filter(d => d.kind === 'audioinput');
        const outputs = devices.filter(d => d.kind === 'audiooutput');

        audioInputSelect.innerHTML = '<option value="default">Default</option>';
        inputs.forEach((d, i) => {
            const opt = document.createElement('option');
            opt.value = d.deviceId;
            opt.textContent = d.label || `Microphone ${i + 1}`;
            audioInputSelect.appendChild(opt);
        });

        audioOutputSelect.innerHTML = '<option value="default">Default</option>';
        outputs.forEach((d, i) => {
            const opt = document.createElement('option');
            opt.value = d.deviceId;
            opt.textContent = d.label || `Speaker ${i + 1}`;
            audioOutputSelect.appendChild(opt);
        });

        // Restore saved selections
        const savedInput = localStorage.getItem('thirdeye-audioInput');
        if (savedInput) {
            audioInputSelect.value = savedInput;
            selectedAudioInputId = savedInput;
        }
        const savedOutput = localStorage.getItem('thirdeye-audioOutput');
        if (savedOutput) {
            audioOutputSelect.value = savedOutput;
            selectedAudioOutputId = savedOutput;
        }
    } catch (e) {
        console.warn('Could not enumerate audio devices:', e);
    }
}

async function activateAudioInput(deviceId) {
    // Release previous stream
    if (activeInputStream) {
        activeInputStream.getTracks().forEach(t => t.stop());
        activeInputStream = null;
    }
    if (!deviceId || deviceId === 'default') return;
    try {
        activeInputStream = await navigator.mediaDevices.getUserMedia({
            audio: { deviceId: { exact: deviceId } }
        });
    } catch (e) {
        console.warn('Could not activate audio input:', e);
    }
}

async function applyAudioOutput(deviceId) {
    const ctx = getAudioCtx();
    if (ctx.setSinkId) {
        try {
            await ctx.setSinkId(deviceId === 'default' ? '' : deviceId);
        } catch (e) {
            console.warn('Could not set audio output:', e);
        }
    }
}

// ---- Audio Feedback ----
function playBeep(freq, duration, volume) {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start();
    osc.stop(ctx.currentTime + duration);
}

function playCountdownBeep() {
    playBeep(440, 0.12, 0.2);
}

function playReadyTone() {
    playBeep(880, 0.25, 0.15);
}

function playCorrectSound() {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.value = freq;
        const t = now + i * 0.15;
        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
        osc.start(t);
        osc.stop(t + 0.3);
    });
}

function playTryAgainSound() {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    [329.63, 392.00].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.value = freq;
        const t = now + i * 0.2;
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.15, t + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
        osc.start(t);
        osc.stop(t + 0.6);
    });
}

function playAlarmSound() {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    for (let r = 0; r < 2; r++) {
        [523.25, 659.25, 783.99].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.value = freq;
            const t = now + r * 0.8 + i * 0.2;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.3, t + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
            osc.start(t);
            osc.stop(t + 0.35);
        });
    }
}

function playSessionAlarm() {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    for (let r = 0; r < 3; r++) {
        [783.99, 659.25, 523.25].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.value = freq;
            const t = now + r * 0.9 + i * 0.2;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.35, t + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
            osc.start(t);
            osc.stop(t + 0.4);
        });
    }
}

// ---- Reverb Utility ----
function createReverb(ctx, duration, decay) {
    const rate = ctx.sampleRate;
    const length = rate * duration;
    const impulse = ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
        const data = impulse.getChannelData(ch);
        for (let i = 0; i < length; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
        }
    }
    const convolver = ctx.createConvolver();
    convolver.buffer = impulse;
    return convolver;
}

// ---- Background Music Generators ----
// All based on brainwave entrainment research and sacred frequencies.

// Theta Binaural Beat (6 Hz) — deep meditation, intuition
// Left ear 200Hz, right ear 206Hz. Brain perceives 6Hz difference.
// REQUIRES HEADPHONES for binaural effect.
function createThetaBinaural(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    const reverb = createReverb(ctx, 4, 1.5);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.3;
    reverb.connect(reverbGain);
    reverbGain.connect(master);

    const oscs = [];

    // Left ear: 200 Hz
    const left = ctx.createOscillator();
    left.type = 'sine';
    left.frequency.value = 200;
    const leftPan = ctx.createStereoPanner();
    leftPan.pan.value = -1;
    const leftGain = ctx.createGain();
    leftGain.gain.value = 0.3;
    left.connect(leftGain);
    leftGain.connect(leftPan);
    leftPan.connect(master);
    left.start();
    oscs.push(left);

    // Right ear: 206 Hz (6 Hz theta difference)
    const right = ctx.createOscillator();
    right.type = 'sine';
    right.frequency.value = 206;
    const rightPan = ctx.createStereoPanner();
    rightPan.pan.value = 1;
    const rightGain = ctx.createGain();
    rightGain.gain.value = 0.3;
    right.connect(rightGain);
    rightGain.connect(rightPan);
    rightPan.connect(master);
    right.start();
    oscs.push(right);

    // Gentle ambient bed — very soft pad for warmth
    const pad = ctx.createOscillator();
    pad.type = 'sine';
    pad.frequency.value = 100;
    const padGain = ctx.createGain();
    padGain.gain.value = 0.04;
    pad.connect(padGain);
    padGain.connect(reverb);
    pad.start();
    oscs.push(pad);

    // Slow breathing LFO on master
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.06;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.02;
    lfo.connect(lfoGain);
    lfoGain.connect(master.gain);
    lfo.start();
    oscs.push(lfo);

    return () => {
        oscs.forEach(o => { try { o.stop(); } catch(e) {} });
        master.disconnect();
    };
}

// Gamma Binaural Beat (40 Hz) — heightened awareness, perception
// Left ear 200Hz, right ear 240Hz. Brain perceives 40Hz difference.
// REQUIRES HEADPHONES for binaural effect.
function createGammaBinaural(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    const reverb = createReverb(ctx, 3, 2);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.25;
    reverb.connect(reverbGain);
    reverbGain.connect(master);

    const oscs = [];

    // Left ear: 200 Hz
    const left = ctx.createOscillator();
    left.type = 'sine';
    left.frequency.value = 200;
    const leftPan = ctx.createStereoPanner();
    leftPan.pan.value = -1;
    const leftGain = ctx.createGain();
    leftGain.gain.value = 0.25;
    left.connect(leftGain);
    leftGain.connect(leftPan);
    leftPan.connect(master);
    left.start();
    oscs.push(left);

    // Right ear: 240 Hz (40 Hz gamma difference)
    const right = ctx.createOscillator();
    right.type = 'sine';
    right.frequency.value = 240;
    const rightPan = ctx.createStereoPanner();
    rightPan.pan.value = 1;
    const rightGain = ctx.createGain();
    rightGain.gain.value = 0.25;
    right.connect(rightGain);
    rightGain.connect(rightPan);
    rightPan.connect(master);
    right.start();
    oscs.push(right);

    // Soft sub pad
    const pad = ctx.createOscillator();
    pad.type = 'sine';
    pad.frequency.value = 110;
    const padGain = ctx.createGain();
    padGain.gain.value = 0.03;
    pad.connect(padGain);
    padGain.connect(reverb);
    pad.start();
    oscs.push(pad);

    return () => {
        oscs.forEach(o => { try { o.stop(); } catch(e) {} });
        master.disconnect();
    };
}

// Alpha Isochronic Tones (10 Hz) — relaxed focus, calm awareness
// Amplitude-modulated tone pulsing at 10Hz. Works WITHOUT headphones.
function createAlphaIsochronic(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    const reverb = createReverb(ctx, 3, 2);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.3;
    reverb.connect(reverbGain);
    reverbGain.connect(master);

    const oscs = [];

    // Carrier tone
    const carrier = ctx.createOscillator();
    carrier.type = 'sine';
    carrier.frequency.value = 200;

    // Isochronic pulse: amplitude modulation at 10 Hz
    const carrierGain = ctx.createGain();
    carrierGain.gain.value = 0.5; // center point

    const lfo = ctx.createOscillator();
    lfo.type = 'sine'; // smooth pulse (square = harsher)
    lfo.frequency.value = 10; // 10 Hz alpha

    const lfoDepth = ctx.createGain();
    lfoDepth.gain.value = 0.5; // modulates gain between 0 and 1

    lfo.connect(lfoDepth);
    lfoDepth.connect(carrierGain.gain);

    carrier.connect(carrierGain);
    carrierGain.connect(master);
    carrierGain.connect(reverb);

    carrier.start();
    lfo.start();
    oscs.push(carrier, lfo);

    // Gentle background wash — soft filtered noise
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 300;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.08;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(master);
    noise.start();

    return () => {
        oscs.forEach(o => { try { o.stop(); } catch(e) {} });
        try { noise.stop(); } catch(e) {}
        master.disconnect();
    };
}

// 528 Hz Solfeggio — "Miracle tone" / healing frequency
// The solfeggio frequency with the most evidence for relaxation response.
function createSolfeggio528(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    const reverb = createReverb(ctx, 5, 1.5);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.5;
    reverb.connect(reverbGain);
    reverbGain.connect(master);

    const dry = ctx.createGain();
    dry.gain.value = 0.4;
    dry.connect(master);

    const oscs = [];

    // Primary 528 Hz
    const primary = ctx.createOscillator();
    primary.type = 'sine';
    primary.frequency.value = 528;
    const primaryGain = ctx.createGain();
    primaryGain.gain.value = 0.25;
    primary.connect(primaryGain);
    primaryGain.connect(reverb);
    primaryGain.connect(dry);
    primary.start();
    oscs.push(primary);

    // Octave below: 264 Hz (subtle)
    const sub = ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.value = 264;
    const subGain = ctx.createGain();
    subGain.gain.value = 0.12;
    sub.connect(subGain);
    subGain.connect(dry);
    sub.start();
    oscs.push(sub);

    // Octave above: 1056 Hz (very subtle shimmer)
    const upper = ctx.createOscillator();
    upper.type = 'sine';
    upper.frequency.value = 1056;
    const upperGain = ctx.createGain();
    upperGain.gain.value = 0.04;
    upper.connect(upperGain);
    upperGain.connect(reverb);
    upper.start();
    oscs.push(upper);

    // Slow breathing LFO
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.06;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.04;
    lfo.connect(lfoGain);
    lfoGain.connect(master.gain);
    lfo.start();
    oscs.push(lfo);

    return () => {
        oscs.forEach(o => { try { o.stop(); } catch(e) {} });
        master.disconnect();
    };
}

// Om 136.1 Hz — Earth year frequency
// Based on the orbital period of Earth. Used in Tibetan singing bowls
// and Indian classical music (Sa = 136.1 Hz in some tuning systems).
function createOm136(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    const reverb = createReverb(ctx, 4, 1.8);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.4;
    reverb.connect(reverbGain);
    reverbGain.connect(master);

    const dry = ctx.createGain();
    dry.gain.value = 0.5;
    dry.connect(master);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    filter.connect(reverb);
    filter.connect(dry);

    const oscs = [];

    // Fundamental: 136.1 Hz (sine — pure Om)
    const fundamental = ctx.createOscillator();
    fundamental.type = 'sine';
    fundamental.frequency.value = 136.1;
    const fundGain = ctx.createGain();
    fundGain.gain.value = 0.3;
    fundamental.connect(fundGain);
    fundGain.connect(filter);
    fundamental.start();
    oscs.push(fundamental);

    // Natural overtones (triangle — soft odd harmonics)
    const fifth = ctx.createOscillator();
    fifth.type = 'triangle';
    fifth.frequency.value = 272.2; // octave
    fifth.detune.value = 2;
    const fifthGain = ctx.createGain();
    fifthGain.gain.value = 0.12;
    fifth.connect(fifthGain);
    fifthGain.connect(filter);
    fifth.start();
    oscs.push(fifth);

    const third = ctx.createOscillator();
    third.type = 'triangle';
    third.frequency.value = 408.3; // 3rd harmonic
    third.detune.value = -2;
    const thirdGain = ctx.createGain();
    thirdGain.gain.value = 0.06;
    third.connect(thirdGain);
    thirdGain.connect(filter);
    third.start();
    oscs.push(third);

    // Sub octave
    const sub = ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.value = 68.05; // octave below
    const subGain = ctx.createGain();
    subGain.gain.value = 0.1;
    sub.connect(subGain);
    subGain.connect(dry);
    sub.start();
    oscs.push(sub);

    // Slow breathing LFO
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.07; // ~one breath cycle per 14s
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.03;
    lfo.connect(lfoGain);
    lfoGain.connect(master.gain);
    lfo.start();
    oscs.push(lfo);

    return () => {
        oscs.forEach(o => { try { o.stop(); } catch(e) {} });
        master.disconnect();
    };
}

const MUSIC_GENERATORS = {
    theta: createThetaBinaural,
    gamma: createGammaBinaural,
    alpha: createAlphaIsochronic,
    solfeggio: createSolfeggio528,
    om136: createOm136,
};

function startMusic() {
    stopMusic();
    if (bgMusicType === 'none') return;
    const gen = MUSIC_GENERATORS[bgMusicType];
    if (gen) {
        const ctx = getAudioCtx();
        stopMusicFn = gen(ctx);
    }
}

function stopMusic() {
    if (stopMusicFn) {
        stopMusicFn();
        stopMusicFn = null;
    }
}

// ---- Voice Selection ----
function populateVoices() {
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return;

    voiceSelect.innerHTML = '';
    const savedVoice = localStorage.getItem('thirdeye-voice');

    voices.forEach((voice, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        const label = voice.name + (voice.default ? ' (default)' : '');
        opt.textContent = `${label} [${voice.lang}]`;
        voiceSelect.appendChild(opt);

        if (savedVoice && voice.name === savedVoice) {
            opt.selected = true;
            selectedVoice = voice;
        }
    });

    if (!selectedVoice) {
        selectedVoice = voices[0];
    }
}

function onVoiceChange() {
    const voices = speechSynthesis.getVoices();
    const idx = parseInt(voiceSelect.value);
    selectedVoice = voices[idx] || null;
    if (selectedVoice) {
        localStorage.setItem('thirdeye-voice', selectedVoice.name);
    }
}

function speak(text) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    speechSynthesis.speak(utterance);
}

// ---- Theme ----
function applyTheme(t) {
    theme = t;
    document.body.classList.remove('theme-dark', 'theme-blackout');
    if (t === 'dark') document.body.classList.add('theme-dark');
    else if (t === 'blackout') document.body.classList.add('theme-blackout');
    localStorage.setItem('thirdeye-theme', t);
    themeSelect.value = t;
}

// ---- Mode Toggle ----
function setMode(newMode) {
    mode = newMode;
    btnWords.classList.toggle('active', mode === 'words');
    btnImages.classList.toggle('active', mode === 'images');
    updateToggleModeButton();
}

function updateToggleModeButton() {
    btnToggleMode.textContent = mode === 'words' ? 'Switch to Images' : 'Switch to Words';
}

// ---- Session Tracking ----
function loadStats() {
    try {
        return JSON.parse(localStorage.getItem('thirdeye-stats')) || {};
    } catch (e) {
        return {};
    }
}

function saveStats(stats) {
    localStorage.setItem('thirdeye-stats', JSON.stringify(stats));
}

function migrateDay(d) {
    if (!d) return d;
    // Migrate old 'successes' field to 'exact'
    if ('successes' in d && !('exact' in d)) {
        d.exact = d.successes;
        d.close = 0;
        delete d.successes;
    }
    // Migrate old failuresTimeout/failuresGaveUp to 'no'
    if (!('no' in d)) {
        d.no = (d.failuresTimeout || 0) + (d.failuresGaveUp || 0);
        delete d.failuresTimeout;
        delete d.failuresGaveUp;
    }
    return d;
}

function trackEvent(type) {
    if (!trackingEnabled) return;
    const today = new Date().toISOString().split('T')[0];
    const stats = loadStats();
    if (!stats[today]) {
        stats[today] = { sessions: 0, items: 0, exact: 0, close: 0, no: 0 };
    }
    migrateDay(stats[today]);
    switch (type) {
        case 'session': stats[today].sessions++; break;
        case 'exact': stats[today].exact++; stats[today].items++; break;
        case 'close': stats[today].close++; stats[today].items++; break;
        case 'no': stats[today].no++; stats[today].items++; break;
        case 'timeout': stats[today].items++; stats[today].no++; break;
        case 'gaveup': stats[today].items++; stats[today].no++; break;
    }
    saveStats(stats);
}

// ---- Dashboard ----
function pct(n, total) { return total > 0 ? Math.round(n / total * 100) : 0; }

function renderDashboard() {
    const stats = loadStats();
    const today = new Date().toISOString().split('T')[0];
    const t = migrateDay(stats[today]) || { sessions: 0, items: 0, exact: 0, close: 0, no: 0 };
    const te = t.exact || 0, tc = t.close || 0, tn = t.no || 0;

    dashboardToday.innerHTML = `
        <div class="stats-today">
            <h3>Today</h3>
            <div class="stats-grid">
                <div class="stat"><span class="stat-num">${t.sessions}</span><span class="stat-label">Sessions</span></div>
                <div class="stat"><span class="stat-num">${t.items}</span><span class="stat-label">Items</span></div>
                <div class="stat"><span class="stat-num">${te} (${pct(te, t.items)}%)</span><span class="stat-label">Exact</span></div>
                <div class="stat"><span class="stat-num">${tc} (${pct(tc, t.items)}%)</span><span class="stat-label">Close</span></div>
                <div class="stat"><span class="stat-num">${tn} (${pct(tn, t.items)}%)</span><span class="stat-label">No</span></div>
            </div>
        </div>`;

    const dates = [];
    for (let i = 0; i < 14; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        dates.push(d.toISOString().split('T')[0]);
    }

    const hasData = dates.some(d => stats[d]);
    if (!hasData) {
        dashboardTableContainer.innerHTML = '<p class="no-data">No sessions recorded yet.</p>';
        return;
    }

    let html = `<table class="stats-table"><thead><tr>
        <th>Date</th><th>Sess</th><th>Items</th><th>Exact</th><th>Close</th><th>No</th>
    </tr></thead><tbody>`;

    dates.forEach(date => {
        const s = migrateDay(stats[date]);
        if (!s) return;
        const se = s.exact || 0, sc = s.close || 0, sn = s.no || 0;
        html += `<tr><td>${date}</td><td>${s.sessions}</td><td>${s.items}</td><td>${se} (${pct(se, s.items)}%)</td><td>${sc} (${pct(sc, s.items)}%)</td><td>${sn} (${pct(sn, s.items)}%)</td></tr>`;
    });

    html += '</tbody></table>';
    dashboardTableContainer.innerHTML = html;
}

// ---- Hint System ----
function getCategoryOf(word) {
    for (const [cat, words] of Object.entries(IMAGE_CATEGORIES)) {
        if (words.includes(word)) return cat;
    }
    return null;
}

function getHint(guess, answers) {
    const answer = answers[0].toLowerCase();
    const g = guess.toLowerCase();

    if (g.length > 0 && g[0] === answer[0]) {
        return 'It starts with the same letter!';
    }
    if (g.length === answer.length) {
        return 'Same number of letters!';
    }
    if (levenshtein(g, answer) <= 2) {
        return "Very close! You're almost there!";
    }
    if (answer.includes(g) || g.includes(answer)) {
        return "You're on the right track!";
    }
    if (mode === 'images') {
        const related = RELATED_WORDS[answer];
        if (related && related.words.includes(g)) {
            return related.hint;
        }
        const guessCategory = getCategoryOf(g);
        const answerCategory = getCategoryOf(answer);
        if (guessCategory && guessCategory === answerCategory) {
            return 'Right category!';
        }
    }
    return null;
}

// ---- Timer ----
function startTimer() {
    const hours = parseInt(timerHoursInput.value) || 0;
    const minutes = parseInt(timerMinutesInput.value) || 0;
    const totalMs = (hours * 3600 + minutes * 60) * 1000;

    if (totalMs <= 0) {
        alert('Set a timer duration greater than zero.');
        return;
    }

    timerDurationMs = totalMs;
    timerEndTime = Date.now() + totalMs;

    btnStartTimer.classList.add('hidden');
    btnStopTimer.classList.remove('hidden');
    timerDisplay.classList.remove('hidden');

    updateTimerDisplay();
    timerTickId = setInterval(updateTimerDisplay, 1000);
}

function updateTimerDisplay() {
    const remaining = timerEndTime - Date.now();

    if (remaining <= 0) {
        fireAlarm();
        timerEndTime = Date.now() + timerDurationMs;
    }

    const totalSecs = Math.max(0, Math.ceil(remaining / 1000));
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;

    timerCountdownEl.textContent =
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function stopTimer() {
    if (timerTickId) {
        clearInterval(timerTickId);
        timerTickId = null;
    }
    timerEndTime = null;
    timerDurationMs = null;

    btnStartTimer.classList.remove('hidden');
    btnStopTimer.classList.add('hidden');
    timerDisplay.classList.add('hidden');
}

function fireAlarm() {
    playAlarmSound();

    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Third Eye', {
            body: 'Time for your blindfold reading practice!',
        });
    }
}

// ---- Session Timer ----
function startSessionTimer() {
    const mins = parseInt(sessionMinutesInput.value) || 0;
    if (mins <= 0) return;

    sessionEndTime = Date.now() + mins * 60 * 1000;
    sessionBar.classList.remove('hidden', 'warning');
    updateSessionDisplay();
    sessionTickId = setInterval(updateSessionDisplay, 1000);
}

function updateSessionDisplay() {
    const remaining = sessionEndTime - Date.now();

    if (remaining <= 0) {
        fireSessionAlarm();
        return;
    }

    const totalSecs = Math.ceil(remaining / 1000);
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    sessionTimeLeft.textContent =
        `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    if (totalSecs <= 30) {
        sessionBar.classList.add('warning');
    }
}

function fireSessionAlarm() {
    clearInterval(sessionTickId);
    sessionTickId = null;
    sessionEndTime = null;
    sessionBar.classList.add('hidden');

    playSessionAlarm();
    speak('Session complete.');

    exerciseActive = false;
    sessionComplete = true;
    if (countdownIntervalId) {
        clearInterval(countdownIntervalId);
        countdownIntervalId = null;
    }
    if (recognition) {
        recognition.abort();
        recognition = null;
    }

    if (itemActive) {
        trackEvent('timeout');
        itemActive = false;
    }

    stopMusic();

    // Show session complete banner in the exercise area
    const existing = document.getElementById('session-complete-banner');
    if (!existing) {
        const banner = document.createElement('div');
        banner.id = 'session-complete-banner';
        banner.className = 'session-complete-banner';
        banner.textContent = 'Session Complete';
        exerciseArea.appendChild(banner);
    }
}

function stopSessionTimer() {
    if (sessionTickId) {
        clearInterval(sessionTickId);
        sessionTickId = null;
    }
    sessionEndTime = null;
    sessionBar.classList.add('hidden');
    sessionBar.classList.remove('warning');
}

// ---- Exercise Flow ----
function startExercise() {
    exerciseActive = true;
    showOnly(countdownArea);

    // Start session timer on first exercise
    if (!sessionEndTime) {
        startSessionTimer();
        trackEvent('session');
    }

    // Start background music if not already playing
    if (!stopMusicFn) {
        startMusic();
    }

    // Show exit button
    exitBtn.classList.remove('hidden');

    // Activate selected audio input device
    if (selectedAudioInputId !== 'default') {
        activateAudioInput(selectedAudioInputId);
    }

    speak('Close your eyes.');

    let count = COUNTDOWN_SECONDS;
    countdownNumber.textContent = count;
    playCountdownBeep();

    countdownIntervalId = setInterval(() => {
        count--;
        if (count <= 0) {
            clearInterval(countdownIntervalId);
            countdownIntervalId = null;
            playReadyTone();
            showExercise();
        } else {
            countdownNumber.textContent = count;
            playCountdownBeep();
        }
    }, 1000);
}

function showExercise() {
    showOnly(exerciseArea);

    micIcon.textContent = '\u{1F3A4}';
    micIcon.classList.remove('correct');
    listeningStatus.textContent = 'Listening...';
    lastHeard.textContent = '';

    if (mode === 'words') {
        const idx = pickRandom(WORDS, lastWordIndex);
        lastWordIndex = idx;
        const word = WORDS[idx];
        currentAnswer = [word];
        currentDisplay = word;
        displayContent.textContent = word;
        displayContent.className = 'word-display';
    } else {
        const idx = pickRandom(IMAGES, lastImageIndex);
        lastImageIndex = idx;
        const img = IMAGES[idx];
        currentAnswer = img.answers;
        currentDisplay = img.emoji;
        displayContent.textContent = img.emoji;
        displayContent.className = 'image-display';
    }

    itemActive = true;
    lastGuessDistance = null;
    updateToggleModeButton();
    startListening();
}

function startListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        listeningStatus.textContent = 'Speech not supported in this browser. Use Chrome or Edge.';
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                processGuess(event.results[i][0].transcript);
            }
        }
    };

    recognition.onerror = (event) => {
        if (event.error === 'aborted' || event.error === 'no-speech') return;
        console.warn('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
        if (exerciseActive) {
            try { recognition.start(); } catch (e) { /* already started */ }
        }
    };

    recognition.start();
}

function processGuess(transcript) {
    const raw = transcript.trim();

    let guess = raw.toLowerCase().trim()
        .replace(/^(i think it'?s? |i see |it'?s? |it is |that'?s? |that is |looks like |maybe |probably )/i, '')
        .replace(/^(a |an |the )/i, '')
        .trim();

    // Voice commands — eyes are closed, so voice is the only way to signal "I'm done"
    const lowerRaw = raw.toLowerCase();
    if (/\b(open|done|give up|i'?m ready|show me|ready|reveal|finished)\b/.test(lowerRaw)) {
        playReadyTone();
        speak('Open your eyes and mark it.');
        lastHeard.textContent = 'Open your eyes and tap Exact or Close.';
        return;
    }

    const dist = getSemanticDistance(guess, currentAnswer[0]);

    // Perception layer — universal across all feedback modes
    let perception = null;
    if (dist <= 1) {
        perception = "You got it! Open your eyes and mark it.";
        playCorrectSound();
    } else if (dist <= 3) {
        perception = "You're sensing it! Open your eyes and mark it.";
        playCorrectSound();
    }

    // Feedback mode layer (for non-perception guesses)
    let feedback = null;
    if (feedbackMode === 'hotcold') {
        let label;
        if (dist <= 1) label = 'Burning hot!';
        else if (dist <= 3) label = 'Warm!';
        else if (dist <= 5) label = 'Cool.';
        else label = 'Cold.';

        if (lastGuessDistance !== null) {
            if (dist < lastGuessDistance) label = 'Getting warmer! ' + label;
            else if (dist > lastGuessDistance) label = 'Getting colder... ' + label;
        }
        lastGuessDistance = dist;
        feedback = label;
    } else if (feedbackMode === 'hints') {
        feedback = getHint(guess, currentAnswer);
    } else if (feedbackMode === 'spiritual') {
        feedback = SPIRITUAL_HINTS[Math.floor(Math.random() * SPIRITUAL_HINTS.length)];
    } else if (feedbackMode === 'custom' && customHints.length > 0) {
        feedback = customHints[Math.floor(Math.random() * customHints.length)];
    }

    if (!feedback) {
        feedback = TRY_AGAIN_PHRASES[tryAgainIndex % TRY_AGAIN_PHRASES.length];
        tryAgainIndex++;
    }

    // Combine: perception overrides for close, otherwise use feedback
    const message = perception ? perception : feedback;

    if (!perception) playTryAgainSound();

    speak(message);
    lastHeard.textContent = `"${raw}" — ${message}`;
}

function finishItem(type) {
    trackEvent(type);
    exerciseActive = false;
    itemActive = false;
    if (recognition) {
        recognition.abort();
        recognition = null;
    }
    speechSynthesis.cancel();

    const answerText = currentAnswer[0];

    if (type === 'exact') {
        playCorrectSound();
        speak(`It was ${answerText}. Well done.`);
        resultBadge.textContent = '\u2713 Exact!';
        resultBadge.className = 'result-badge';
    } else if (type === 'close') {
        playCorrectSound();
        speak(`It was ${answerText}. Good perception.`);
        resultBadge.textContent = '\u2248 Close!';
        resultBadge.className = 'result-badge close-result';
    } else {
        playTryAgainSound();
        speak(`It was ${answerText}.`);
        resultBadge.textContent = '\u2717 No';
        resultBadge.className = 'result-badge no-result';
    }

    showOnly(resultArea);
    exitBtn.classList.add('hidden');

    if (mode === 'words') {
        resultContent.textContent = answerText;
        resultContent.className = 'word-display';
    } else {
        resultContent.textContent = currentDisplay + ' ' + answerText;
        resultContent.className = 'image-display';
        resultContent.style.fontSize = '';
    }
}

function goToSettings() {
    exerciseActive = false;
    itemActive = false;
    sessionComplete = false;
    if (countdownIntervalId) {
        clearInterval(countdownIntervalId);
        countdownIntervalId = null;
    }
    if (recognition) {
        recognition.abort();
        recognition = null;
    }
    speechSynthesis.cancel();
    stopSessionTimer();
    stopMusic();
    exitBtn.classList.add('hidden');
    // Remove session complete banner if present
    const banner = document.getElementById('session-complete-banner');
    if (banner) banner.remove();
    // Release audio input stream
    if (activeInputStream) {
        activeInputStream.getTracks().forEach(t => t.stop());
        activeInputStream = null;
    }
    showOnly(settingsPanel);
}

function stopExercise() {
    if (itemActive) {
        trackEvent('gaveup');
        itemActive = false;
    }
    goToSettings();
}

function skipExercise() {
    if (itemActive) {
        trackEvent('gaveup');
        itemActive = false;
    }
    exerciseActive = false;
    if (recognition) {
        recognition.abort();
        recognition = null;
    }
    speechSynthesis.cancel();
    startExercise();
}

// ---- Keyboard Controls ----
function handleKeyboard(e) {
    if (!exerciseActive) return;

    if (e.key === 'Escape') {
        e.preventDefault();
        stopExercise();
    } else if ((e.key === 'n' || e.key === 'N') && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        skipExercise();
    } else if (e.key === ' ' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        skipExercise();
    }
}

// ---- Init ----
function init() {
    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
        alert('Speech Recognition is not supported in this browser.\nPlease use Chrome or Edge.');
    }

    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }

    // Load persisted settings
    const savedTheme = localStorage.getItem('thirdeye-theme');
    if (savedTheme) applyTheme(savedTheme);

    const savedFeedbackMode = localStorage.getItem('thirdeye-feedbackMode');
    if (savedFeedbackMode) {
        feedbackMode = savedFeedbackMode;
        feedbackModeSelect.value = savedFeedbackMode;
    }
    customHintsRow.classList.toggle('hidden', feedbackMode !== 'custom');

    try {
        const savedCustomHints = localStorage.getItem('thirdeye-customHints');
        if (savedCustomHints) {
            customHints = JSON.parse(savedCustomHints);
            customHintsTextarea.value = customHints.join('\n');
        }
    } catch (e) {}

    const savedBgMusic = localStorage.getItem('thirdeye-bgMusic');
    if (savedBgMusic) {
        // Migrate old music keys to new evidence-based ones
        const musicMigration = { om: 'om136', bowls: 'solfeggio', pad: 'alpha', thunder: 'theta', space: 'gamma' };
        const migrated = musicMigration[savedBgMusic] || savedBgMusic;
        if (migrated !== savedBgMusic) localStorage.setItem('thirdeye-bgMusic', migrated);
        bgMusicType = migrated;
        bgMusicSelect.value = migrated;
    }

    const savedTrack = localStorage.getItem('thirdeye-trackDefault');
    if (savedTrack !== null) {
        trackingEnabled = savedTrack === 'true';
        trackSessionCheckbox.checked = trackingEnabled;
    }

    // Voices
    populateVoices();
    speechSynthesis.onvoiceschanged = populateVoices;
    voiceSelect.addEventListener('change', onVoiceChange);
    btnVoiceTest.addEventListener('click', () => speak('Third Eye is ready.'));

    // Audio devices
    enumerateAudioDevices();
    audioInputSelect.addEventListener('change', () => {
        selectedAudioInputId = audioInputSelect.value;
        localStorage.setItem('thirdeye-audioInput', selectedAudioInputId);
    });
    audioOutputSelect.addEventListener('change', async () => {
        selectedAudioOutputId = audioOutputSelect.value;
        localStorage.setItem('thirdeye-audioOutput', selectedAudioOutputId);
        await applyAudioOutput(selectedAudioOutputId);
    });

    // Mode toggle
    btnWords.addEventListener('click', () => setMode('words'));
    btnImages.addEventListener('click', () => setMode('images'));

    // Settings dropdowns
    feedbackModeSelect.addEventListener('change', () => {
        feedbackMode = feedbackModeSelect.value;
        localStorage.setItem('thirdeye-feedbackMode', feedbackMode);
        customHintsRow.classList.toggle('hidden', feedbackMode !== 'custom');
    });

    customHintsTextarea.addEventListener('blur', () => {
        customHints = customHintsTextarea.value.split('\n').map(l => l.trim()).filter(Boolean);
        localStorage.setItem('thirdeye-customHints', JSON.stringify(customHints));
    });

    bgMusicSelect.addEventListener('change', () => {
        bgMusicType = bgMusicSelect.value;
        localStorage.setItem('thirdeye-bgMusic', bgMusicType);
    });

    themeSelect.addEventListener('change', () => {
        applyTheme(themeSelect.value);
    });

    trackSessionCheckbox.addEventListener('change', () => {
        trackingEnabled = trackSessionCheckbox.checked;
        localStorage.setItem('thirdeye-trackDefault', String(trackingEnabled));
    });

    // Timer
    btnStartTimer.addEventListener('click', startTimer);
    btnStopTimer.addEventListener('click', stopTimer);

    // Exercise
    btnStartExercise.addEventListener('click', startExercise);
    btnNewExercise.addEventListener('click', startExercise);
    btnBackMenu.addEventListener('click', goToSettings);

    // Self-judgment
    btnExact.addEventListener('click', () => { if (itemActive) finishItem('exact'); });
    btnAlmost.addEventListener('click', () => { if (itemActive) finishItem('close'); });
    btnNo.addEventListener('click', () => { if (itemActive) finishItem('no'); });
    btnSkip.addEventListener('click', skipExercise);
    btnToggleMode.addEventListener('click', () => {
        setMode(mode === 'words' ? 'images' : 'words');
    });

    // Dashboard
    btnDashboard.addEventListener('click', () => {
        renderDashboard();
        showOnly(dashboardPanel);
    });
    btnDashboardBack.addEventListener('click', () => showOnly(settingsPanel));

    // Exit button
    exitBtn.addEventListener('click', stopExercise);

    // Keyboard
    document.addEventListener('keydown', handleKeyboard);

    updateToggleModeButton();
}

document.addEventListener('DOMContentLoaded', init);
