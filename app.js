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
    const g = guess.toLowerCase();
    const a = answer.toLowerCase();
    if (g === a) return 0;

    // Near-spelling match
    const lev = levenshtein(g, a);
    if (lev <= 1) return 1;

    // Direct close-word match — "you're seeing it"
    const closeWords = CLOSE_WORDS[a];
    if (closeWords && closeWords.includes(g)) return 2;

    // Check RELATED_WORDS (for images)
    const related = RELATED_WORDS[a];
    if (related && related.words.includes(g)) return 2;

    // Check if guess is a close word for ANY answer that shares a close-word with the real answer
    // e.g. guess "bright" for answer "gold" — "bright" is close to "light", and "light" shares
    // close-words with many luminous things. This catches indirect associations.
    if (closeWords) {
        for (const [otherAnswer, otherClose] of Object.entries(CLOSE_WORDS)) {
            if (otherAnswer === a) continue;
            if (otherClose.includes(g) && closeWords.some(w => otherClose.includes(w))) return 4;
        }
    }

    // Spelling similarity as last resort
    if (lev <= 2) return 3;
    const maxLen = Math.max(g.length, a.length);
    if (lev / maxLen < 0.4) return 5;

    return 8;
}

// ---- State ----
let mode = 'words';
let displayMode = 'standard';
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
let sessionOverlayVisible = false;
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
const btnStop = document.getElementById('btn-stop');

const btnSkip = document.getElementById('btn-skip');
const btnToggleMode = document.getElementById('btn-toggle-mode');

const resultContent = document.getElementById('result-content');
const btnNewExercise = document.getElementById('btn-new-exercise');
const btnBackMenu = document.getElementById('btn-back-menu');

const sessionMinutesInput = document.getElementById('session-minutes');
const sessionBar = document.getElementById('session-bar');
const sessionTimeLeft = document.getElementById('session-time-left');

const voiceSelect = document.getElementById('voice-select');
const btnVoiceTest = document.getElementById('btn-voice-test');

const displayModeSelect = document.getElementById('display-mode');
const feedbackModeSelect = document.getElementById('feedback-mode');
const bgMusicSelect = document.getElementById('bg-music');
const themeSelect = document.getElementById('theme-select');
const trackSessionCheckbox = document.getElementById('track-session');

const btnDashboard = document.getElementById('btn-dashboard');
const btnDashboardBack = document.getElementById('btn-dashboard-back');
const dashboardToday = document.getElementById('dashboard-today');
const dashboardTableContainer = document.getElementById('dashboard-table-container');

const sessionOverlay = document.getElementById('session-overlay');
const btnOverlayMenu = document.getElementById('btn-overlay-menu');
const focusExit = document.getElementById('focus-exit');

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

// Om Drone: warm & breathy with sine/triangle oscillators
function createOmDrone(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    const reverb = createReverb(ctx, 3, 2);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.4;
    reverb.connect(reverbGain);
    reverbGain.connect(master);

    const dry = ctx.createGain();
    dry.gain.value = 0.6;
    dry.connect(master);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1000;

    filter.connect(reverb);
    filter.connect(dry);

    const oscs = [];

    // Fundamental C3 (sine) + fifth G3 (triangle) + octave C4 (triangle)
    [[130.81, 'sine', 0.35, 0], [196.00, 'triangle', 0.18, 2], [261.63, 'triangle', 0.10, -2]].forEach(([freq, type, vol, detune]) => {
        const osc = ctx.createOscillator();
        osc.type = type;
        osc.frequency.value = freq;
        osc.detune.value = detune;
        const g = ctx.createGain();
        g.gain.value = vol;
        osc.connect(g);
        g.connect(filter);
        osc.start();
        oscs.push(osc);
    });

    // Sub bass sine C2
    const sub = ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.value = 65.41;
    const subGain = ctx.createGain();
    subGain.gain.value = 0.15;
    sub.connect(subGain);
    subGain.connect(dry);
    sub.start();
    oscs.push(sub);

    // Slow amplitude LFO for breathing feel
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.08;
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

// Crystal Bowls: spacious solfeggio frequencies with long reverb
function createCrystalBowls(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    const reverb = createReverb(ctx, 6, 1.5);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.6;
    reverb.connect(reverbGain);
    reverbGain.connect(master);

    const dry = ctx.createGain();
    dry.gain.value = 0.3;
    dry.connect(master);

    const frequencies = [396, 528, 639]; // 3 solfeggio (dropped shrill 741)
    const allOscs = [];
    const timeouts = [];

    frequencies.forEach((freq, i) => {
        // Fundamental + one octave only (2 overtones per bowl)
        [1, 2.0].forEach((harmonic, h) => {
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = freq * harmonic;
            const g = ctx.createGain();
            g.gain.value = 0;
            osc.connect(g);
            g.connect(reverb);
            g.connect(dry);
            osc.start();
            allOscs.push(osc);

            function swell() {
                const now = ctx.currentTime;
                const fadeIn = 4 + Math.random() * 2;
                const sustain = 3 + Math.random() * 2;
                const fadeOut = 5 + Math.random() * 2;
                const vol = h === 0 ? 0.25 : 0.08;

                g.gain.cancelScheduledValues(now);
                g.gain.setValueAtTime(0, now);
                g.gain.linearRampToValueAtTime(vol, now + fadeIn);
                g.gain.setValueAtTime(vol, now + fadeIn + sustain);
                g.gain.linearRampToValueAtTime(0, now + fadeIn + sustain + fadeOut);

                const next = (fadeIn + sustain + fadeOut + 5 + Math.random() * 3) * 1000;
                timeouts.push(setTimeout(swell, next));
            }

            // Stagger: each bowl + overtone starts at different times
            timeouts.push(setTimeout(swell, i * 4000 + h * 2000 + Math.random() * 5000));
        });
    });

    return () => {
        allOscs.forEach(o => { try { o.stop(); } catch(e) {} });
        timeouts.forEach(id => clearTimeout(id));
        master.disconnect();
    };
}

// Synthwave: rhythmic step sequencer with drums, bass, arp, and pad
function createSynthwave(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    const reverb = createReverb(ctx, 3.5, 2);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.4;
    reverb.connect(reverbGain);
    reverbGain.connect(master);

    // Chord progression: Am → F → C → G (2 bars each)
    const chords = [
        { root: 110.00, notes: [220.00, 261.63, 329.63] },  // Am
        { root: 87.31,  notes: [174.61, 220.00, 261.63] },  // F
        { root: 130.81, notes: [261.63, 329.63, 392.00] },  // C
        { root: 98.00,  notes: [196.00, 246.94, 293.66] },  // G
    ];

    const bpm = 108;
    const stepTime = 60 / bpm / 4; // 16th note duration

    // Drum patterns (16 steps)
    const kickPattern =  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,1];
    const snarePattern = [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0];
    const hatPattern =   [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1];
    // Bass pattern: R=root, 8=octave up
    const bassPattern =  [1,0,0,0, 0,0,2,0, 0,0,0,0, 1,0,0,0]; // 1=root, 2=octave
    // Arp pattern: scale degrees 1,3,5,8
    const arpDegrees =   [0,1,2,3, 2,1,0,1, 2,3,2,1, 0,2,3,2];

    const drumGain = ctx.createGain();
    drumGain.gain.value = 0.08;
    drumGain.connect(master);

    const bassFilter = ctx.createBiquadFilter();
    bassFilter.type = 'lowpass';
    bassFilter.frequency.value = 600;
    const bassGain = ctx.createGain();
    bassGain.gain.value = 0.10;
    bassFilter.connect(bassGain);
    bassGain.connect(master);

    const arpFilter = ctx.createBiquadFilter();
    arpFilter.type = 'lowpass';
    arpFilter.frequency.value = 3000;
    const arpGain = ctx.createGain();
    arpGain.gain.value = 0.06;
    arpFilter.connect(arpGain);
    arpGain.connect(reverb);
    arpGain.connect(master);

    // Pad layer — continuous sine oscillators per chord
    const padOscs = [];
    const padGains = [];
    for (let i = 0; i < 3; i++) {
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.value = chords[0].notes[i];
        osc1.detune.value = 3;
        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.value = chords[0].notes[i];
        osc2.detune.value = -3;
        const g = ctx.createGain();
        g.gain.value = 0.03;
        osc1.connect(g);
        osc2.connect(g);
        g.connect(reverb);
        osc1.start();
        osc2.start();
        padOscs.push(osc1, osc2);
        padGains.push({ gain: g, idx: i });
    }

    let step = 0;
    let currentBar = 0;
    let nextStepTime = ctx.currentTime + 0.1;

    function getChord() {
        return chords[Math.floor(currentBar / 2) % chords.length];
    }

    function scheduleKick(time) {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, time);
        osc.frequency.exponentialRampToValueAtTime(40, time + 0.15);
        const g = ctx.createGain();
        g.gain.setValueAtTime(1, time);
        g.gain.exponentialRampToValueAtTime(0.001, time + 0.5);
        osc.connect(g);
        g.connect(drumGain);
        osc.start(time);
        osc.stop(time + 0.5);
    }

    function scheduleSnare(time) {
        // Noise burst
        const bufLen = ctx.sampleRate * 0.15;
        const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < bufLen; i++) d[i] = Math.random() * 2 - 1;
        const noise = ctx.createBufferSource();
        noise.buffer = buf;
        const bp = ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.value = 1500;
        const ng = ctx.createGain();
        ng.gain.setValueAtTime(0.8, time);
        ng.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
        noise.connect(bp);
        bp.connect(ng);
        ng.connect(drumGain);
        noise.start(time);
        noise.stop(time + 0.15);
        // Body tone
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 200;
        const sg = ctx.createGain();
        sg.gain.setValueAtTime(0.6, time);
        sg.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
        osc.connect(sg);
        sg.connect(drumGain);
        osc.start(time);
        osc.stop(time + 0.1);
    }

    function scheduleHat(time, s) {
        const isOpen = s % 2 === 1;
        const dur = isOpen ? 0.15 : 0.05;
        const bufLen = ctx.sampleRate * dur;
        const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < bufLen; i++) d[i] = Math.random() * 2 - 1;
        const noise = ctx.createBufferSource();
        noise.buffer = buf;
        const hp = ctx.createBiquadFilter();
        hp.type = 'highpass';
        hp.frequency.value = 8000;
        const hg = ctx.createGain();
        hg.gain.setValueAtTime(0.5, time);
        hg.gain.exponentialRampToValueAtTime(0.001, time + dur);
        noise.connect(hp);
        hp.connect(hg);
        hg.connect(drumGain);
        noise.start(time);
        noise.stop(time + dur);
    }

    function scheduleBass(time, s) {
        const chord = getChord();
        const note = bassPattern[s];
        if (!note) return;
        const freq = note === 2 ? chord.root * 2 : chord.root;
        const osc = ctx.createOscillator();
        osc.type = 'square';
        osc.frequency.value = freq;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.5, time);
        g.gain.exponentialRampToValueAtTime(0.001, time + stepTime * 3);
        osc.connect(g);
        g.connect(bassFilter);
        osc.start(time);
        osc.stop(time + stepTime * 3);
    }

    function scheduleArp(time, s) {
        const chord = getChord();
        const arpNotes = [chord.root * 2, chord.notes[0], chord.notes[1], chord.notes[2]];
        const degree = arpDegrees[s];
        const freq = arpNotes[degree];
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.5, time);
        g.gain.exponentialRampToValueAtTime(0.001, time + stepTime * 1.5);
        osc.connect(g);
        g.connect(arpFilter);
        osc.start(time);
        osc.stop(time + stepTime * 1.5);
    }

    function scheduleStep(time, s) {
        if (kickPattern[s]) scheduleKick(time);
        if (snarePattern[s]) scheduleSnare(time);
        if (hatPattern[s]) scheduleHat(time, s);
        scheduleBass(time, s);
        scheduleArp(time, s);
    }

    // Update pad chord on bar change
    let lastChordIdx = -1;
    function updatePad() {
        const ci = Math.floor(currentBar / 2) % chords.length;
        if (ci === lastChordIdx) return;
        lastChordIdx = ci;
        const chord = chords[ci];
        const now = ctx.currentTime;
        padGains.forEach(({ gain, idx }) => {
            // Ramp existing oscillators to new chord notes
        });
        padOscs.forEach((osc, i) => {
            const noteIdx = Math.floor(i / 2);
            osc.frequency.exponentialRampToValueAtTime(chord.notes[noteIdx], now + 1);
        });
    }

    const schedulerId = setInterval(() => {
        while (nextStepTime < ctx.currentTime + 0.5) {
            const s = step % 16;
            if (s === 0) {
                currentBar++;
                updatePad();
            }
            scheduleStep(nextStepTime, s);
            step++;
            nextStepTime += stepTime;
        }
    }, 200);

    return () => {
        clearInterval(schedulerId);
        padOscs.forEach(o => { try { o.stop(); } catch(e) {} });
        master.disconnect();
    };
}

// Thunderstorm: rain + distant thunder with reverb
function createThunderstorm(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    const thunderReverb = createReverb(ctx, 4, 1.5);
    const thunderReverbGain = ctx.createGain();
    thunderReverbGain.gain.value = 0.5;
    thunderReverb.connect(thunderReverbGain);
    thunderReverbGain.connect(master);

    const bufferSize = 2 * ctx.sampleRate;

    // Brown noise for rain
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
    noiseFilter.frequency.value = 400;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.45;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(master);
    noise.start();

    // High-frequency rain patter
    const rainBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const rainData = rainBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) rainData[i] = Math.random() * 2 - 1;

    const rain = ctx.createBufferSource();
    rain.buffer = rainBuffer;
    rain.loop = true;
    const rainFilter = ctx.createBiquadFilter();
    rainFilter.type = 'highpass';
    rainFilter.frequency.value = 4000;
    const rainGain = ctx.createGain();
    rainGain.gain.value = 0.05;
    rain.connect(rainFilter);
    rainFilter.connect(rainGain);
    rainGain.connect(master);
    rain.start();

    // Slow rain intensity variation
    const rainLfo = ctx.createOscillator();
    rainLfo.type = 'sine';
    rainLfo.frequency.value = 0.02;
    const rainLfoGain = ctx.createGain();
    rainLfoGain.gain.value = 0.15;
    rainLfo.connect(rainLfoGain);
    rainLfoGain.connect(noiseGain.gain);
    rainLfo.start();

    // Occasional thunder with reverb
    const timeouts = [];
    function thunder() {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = 40 + Math.random() * 50;
        const tf = ctx.createBiquadFilter();
        tf.type = 'lowpass';
        tf.frequency.value = 120;
        const tg = ctx.createGain();
        const dur = 3 + Math.random() * 5;
        tg.gain.setValueAtTime(0, now);
        tg.gain.linearRampToValueAtTime(0.25, now + 0.05);
        tg.gain.exponentialRampToValueAtTime(0.001, now + dur);
        osc.connect(tf);
        tf.connect(tg);
        tg.connect(thunderReverb); // through reverb for distance
        tg.connect(master);
        osc.start(now);
        osc.stop(now + dur);

        timeouts.push(setTimeout(thunder, (10 + Math.random() * 15) * 1000));
    }
    timeouts.push(setTimeout(thunder, 4000 + Math.random() * 6000));

    return () => {
        try { noise.stop(); } catch(e) {}
        try { rain.stop(); } catch(e) {}
        try { rainLfo.stop(); } catch(e) {}
        timeouts.forEach(id => clearTimeout(id));
        master.disconnect();
    };
}

// Space Ambient: low pad + arpeggiated pentatonic bells + heavy reverb
function createSpaceAmbient(ctx) {
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    const reverb = createReverb(ctx, 6, 1.2);
    const reverbGain = ctx.createGain();
    reverbGain.gain.value = 0.7;
    reverb.connect(reverbGain);
    reverbGain.connect(master);

    const dry = ctx.createGain();
    dry.gain.value = 0.2;
    dry.connect(master);

    const allOscs = [];

    // Low evolving pad — triangle waves with slow filter
    const padFilter = ctx.createBiquadFilter();
    padFilter.type = 'lowpass';
    padFilter.frequency.value = 250;
    padFilter.connect(reverb);
    padFilter.connect(dry);

    const padLfo = ctx.createOscillator();
    padLfo.type = 'sine';
    padLfo.frequency.value = 0.02;
    const padLfoGain = ctx.createGain();
    padLfoGain.gain.value = 80;
    padLfo.connect(padLfoGain);
    padLfoGain.connect(padFilter.frequency);
    padLfo.start();
    allOscs.push(padLfo);

    [[70, 0.2], [105, 0.12], [140, 0.06]].forEach(([freq, vol]) => {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const g = ctx.createGain();
        g.gain.value = vol;
        osc.connect(g);
        g.connect(padFilter);
        osc.start();
        allOscs.push(osc);
    });

    // Arpeggiated bell tones — A minor pentatonic across 2 octaves
    const arpNotes = [220, 261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25, 783.99];
    const timeouts = [];
    let arpIndex = 0;

    function arpBell() {
        const now = ctx.currentTime;
        // Pick next note (mostly ascending, occasional skip)
        arpIndex = (arpIndex + 1 + Math.floor(Math.random() * 2)) % arpNotes.length;
        const freq = arpNotes[arpIndex];

        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;

        // Slight vibrato
        const vib = ctx.createOscillator();
        vib.type = 'sine';
        vib.frequency.value = 4 + Math.random() * 2;
        const vibGain = ctx.createGain();
        vibGain.gain.value = 2;
        vib.connect(vibGain);
        vibGain.connect(osc.frequency);
        vib.start(now);

        const bellGain = ctx.createGain();
        const dur = 3 + Math.random() * 2;
        bellGain.gain.setValueAtTime(0, now);
        bellGain.gain.linearRampToValueAtTime(0.08, now + 0.08);
        bellGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

        osc.connect(bellGain);
        bellGain.connect(reverb); // heavy reverb makes it shimmer

        osc.start(now);
        osc.stop(now + dur + 0.1);
        vib.stop(now + dur + 0.1);

        // Random spacing: sometimes quick runs, sometimes long pauses
        const pause = Math.random() < 0.3 ? 1 + Math.random() * 1 : 3 + Math.random() * 5;
        timeouts.push(setTimeout(arpBell, pause * 1000));
    }

    // Occasional deep sub-bass swell
    function subSwell() {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 40 + Math.random() * 30;
        const g = ctx.createGain();
        const dur = 6 + Math.random() * 4;
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(0.06, now + dur * 0.3);
        g.gain.exponentialRampToValueAtTime(0.001, now + dur);
        osc.connect(g);
        g.connect(dry);
        osc.start(now);
        osc.stop(now + dur + 0.1);

        timeouts.push(setTimeout(subSwell, (12 + Math.random() * 10) * 1000));
    }

    timeouts.push(setTimeout(arpBell, 1500 + Math.random() * 2000));
    timeouts.push(setTimeout(subSwell, 5000 + Math.random() * 5000));

    return () => {
        allOscs.forEach(o => { try { o.stop(); } catch(e) {} });
        timeouts.forEach(id => clearTimeout(id));
        master.disconnect();
    };
}

const MUSIC_GENERATORS = {
    om: createOmDrone,
    bowls: createCrystalBowls,
    pad: createSynthwave,
    thunder: createThunderstorm,
    space: createSpaceAmbient,
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

// ---- Display Mode ----
function setDisplayMode(dm) {
    displayMode = dm;
    localStorage.setItem('thirdeye-displayMode', dm);
    displayModeSelect.value = dm;
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

function trackEvent(type) {
    if (!trackingEnabled) return;
    const today = new Date().toISOString().split('T')[0];
    const stats = loadStats();
    if (!stats[today]) {
        stats[today] = { sessions: 0, items: 0, successes: 0, failuresTimeout: 0, failuresGaveUp: 0 };
    }
    switch (type) {
        case 'session': stats[today].sessions++; break;
        case 'success': stats[today].successes++; stats[today].items++; break;
        case 'timeout': stats[today].failuresTimeout++; stats[today].items++; break;
        case 'gaveup': stats[today].failuresGaveUp++; stats[today].items++; break;
    }
    saveStats(stats);
}

// ---- Dashboard ----
function renderDashboard() {
    const stats = loadStats();
    const today = new Date().toISOString().split('T')[0];
    const t = stats[today] || { sessions: 0, items: 0, successes: 0, failuresTimeout: 0, failuresGaveUp: 0 };
    const pct = t.items > 0 ? Math.round(t.successes / t.items * 100) : 0;

    dashboardToday.innerHTML = `
        <div class="stats-today">
            <h3>Today</h3>
            <div class="stats-grid">
                <div class="stat"><span class="stat-num">${t.sessions}</span><span class="stat-label">Sessions</span></div>
                <div class="stat"><span class="stat-num">${t.items}</span><span class="stat-label">Items</span></div>
                <div class="stat"><span class="stat-num">${t.successes}</span><span class="stat-label">Correct</span></div>
                <div class="stat"><span class="stat-num">${pct}%</span><span class="stat-label">Success</span></div>
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
        <th>Date</th><th>Sessions</th><th>Items</th><th>Correct</th><th>Timeout</th><th>Gave Up</th><th>%</th>
    </tr></thead><tbody>`;

    dates.forEach(date => {
        const s = stats[date];
        if (!s) return;
        const p = s.items > 0 ? Math.round(s.successes / s.items * 100) : 0;
        html += `<tr><td>${date}</td><td>${s.sessions}</td><td>${s.items}</td><td>${s.successes}</td><td>${s.failuresTimeout}</td><td>${s.failuresGaveUp}</td><td>${p}%</td></tr>`;
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
    speak('Session complete. Well done.');

    exerciseActive = false;
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
    sessionOverlayVisible = true;
    sessionOverlay.classList.remove('hidden');
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

    // Show exit button (always, in all modes)
    focusExit.classList.remove('hidden');

    // Apply focus mode if selected
    if (displayMode === 'focus') {
        document.body.classList.add('focus-mode');
    }

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
    lastHeard.textContent = `Heard: "${raw}"`;

    let guess = raw.toLowerCase().trim()
        .replace(/^(i think it'?s? |i see |it'?s? |it is |that'?s? |that is |looks like |maybe |probably )/i, '')
        .replace(/^(a |an |the )/i, '')
        .trim();

    const guessSingular = guess.endsWith('s') && guess.length > 3 ? guess.slice(0, -1) : guess;

    const isCorrect = currentAnswer.some(ans => {
        const a = ans.toLowerCase();
        return guess === a
            || guessSingular === a
            || guess.includes(a)
            || (guess.length >= 3 && a.includes(guess));
    });

    if (isCorrect) {
        exerciseActive = false;
        itemActive = false;
        if (recognition) {
            recognition.abort();
            recognition = null;
        }

        trackEvent('success');
        playCorrectSound();
        const answerText = currentAnswer[0];
        speak(`Correct! It was ${answerText}. Open your eyes and start a new exercise when you're ready.`);

        micIcon.textContent = '\u2705';
        micIcon.classList.add('correct');
        listeningStatus.textContent = 'Correct!';

        setTimeout(() => {
            showOnly(resultArea);
            document.body.classList.remove('focus-mode');
            focusExit.classList.add('hidden');

            if (mode === 'words') {
                resultContent.textContent = answerText;
                resultContent.className = 'word-display';
            } else {
                resultContent.textContent = currentDisplay + ' ' + answerText;
                resultContent.className = 'image-display';
                resultContent.style.fontSize = '';
            }
        }, 2500);
    } else {
        playTryAgainSound();

        let feedback = null;

        if (feedbackMode === 'hotcold') {
            const dist = getSemanticDistance(guess, currentAnswer[0]);
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

        speak(feedback);
        lastHeard.textContent = `"${raw}" — ${feedback}`;
    }
}

function goToSettings() {
    exerciseActive = false;
    itemActive = false;
    sessionOverlayVisible = false;
    sessionOverlay.classList.add('hidden');
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
    document.body.classList.remove('focus-mode');
    focusExit.classList.add('hidden');
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
    if (sessionOverlayVisible) {
        if (e.key === 'Escape') {
            e.preventDefault();
            goToSettings();
        }
        return;
    }

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

    const savedDisplayMode = localStorage.getItem('thirdeye-displayMode');
    if (savedDisplayMode) {
        displayMode = savedDisplayMode;
        displayModeSelect.value = savedDisplayMode;
    }

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
        bgMusicType = savedBgMusic;
        bgMusicSelect.value = savedBgMusic;
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
    displayModeSelect.addEventListener('change', () => {
        displayMode = displayModeSelect.value;
        localStorage.setItem('thirdeye-displayMode', displayMode);
    });

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
    btnStop.addEventListener('click', stopExercise);
    btnNewExercise.addEventListener('click', startExercise);
    btnBackMenu.addEventListener('click', goToSettings);

    // Mid-session
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

    // Session overlay
    btnOverlayMenu.addEventListener('click', goToSettings);

    // Exit button (works in all modes during exercise)
    focusExit.addEventListener('click', stopExercise);

    // Keyboard
    document.addEventListener('keydown', handleKeyboard);

    updateToggleModeButton();
}

document.addEventListener('DOMContentLoaded', init);
