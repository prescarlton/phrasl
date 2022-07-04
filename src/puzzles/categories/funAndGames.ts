import { v4 as uuid } from "uuid"
import { Puzzle } from "../../types/Puzzle"
const puzzleList: Puzzle[] = [
  { id: uuid(), category: "Fun & Games", value: "CHUTES AND LADDERS" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING SKEE-BALL" },
  { id: uuid(), category: "Fun & Games", value: "RUGBY & CRICKET" },
  { id: uuid(), category: "Fun & Games", value: "SOCCER TOURNAMENT" },
  { id: uuid(), category: "Fun & Games", value: "KING ME" },
  { id: uuid(), category: "Fun & Games", value: "DEMLITION DERBY" },
  { id: uuid(), category: "Fun & Games", value: "ROULETTE WHEEL" },
  { id: uuid(), category: "Fun & Games", value: "TOSSING A FRISBEE" },
  { id: uuid(), category: "Fun & Games", value: "LEAPFROG" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING HANGMAN" },
  { id: uuid(), category: "Fun & Games", value: "POTATO SACK RACE" },
  { id: uuid(), category: "Fun & Games", value: "SLOW-PITCH SOFTBALL" },
  { id: uuid(), category: "Fun & Games", value: "FLAG FOOTBALL" },
  { id: uuid(), category: "Fun & Games", value: "FISHING FOR BLUE MARLIN" },
  { id: uuid(), category: "Fun & Games", value: "HOPSCOTCH" },
  { id: uuid(), category: "Fun & Games", value: "AMERICA'S CUP YACHT RACE" },
  { id: uuid(), category: "Fun & Games", value: "BOWLING A STRIKE" },
  { id: uuid(), category: "Fun & Games", value: "TOBOGGAN RUN" },
  { id: uuid(), category: "Fun & Games", value: "DO NOT PASS GO" },
  { id: uuid(), category: "Fun & Games", value: "ETCH A SKETCH" },
  { id: uuid(), category: "Fun & Games", value: "ELECTRIC TRAIN SET" },
  { id: uuid(), category: "Fun & Games", value: "PILLOW FIGHT" },
  { id: uuid(), category: "Fun & Games", value: "SIMON SAYS" },
  { id: uuid(), category: "Fun & Games", value: "THE MAD HATTER" },
  { id: uuid(), category: "Fun & Games", value: "CLIMBING MOUNT EVERST" },
  { id: uuid(), category: "Fun & Games", value: "HANG GLIDING" },
  { id: uuid(), category: "Fun & Games", value: "BINGO CARD" },
  { id: uuid(), category: "Fun & Games", value: "ROLLER HOCKEY" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SCUBA DIVING TO A SUNKEN SHIPWRECK",
  },
  { id: uuid(), category: "Fun & Games", value: "A FRIENDLY SNOWBALL FIGHT" },
  { id: uuid(), category: "Fun & Games", value: "BUILDING A SANDCASTLE" },
  { id: uuid(), category: "Fun & Games", value: "CANDY LAND" },
  { id: uuid(), category: "Fun & Games", value: "SPIN THE BOTTLE" },
  { id: uuid(), category: "Fun & Games", value: "THROWING A BOOMERANG" },
  { id: uuid(), category: "Fun & Games", value: "PRIVATE SURFING LESSONS" },
  { id: uuid(), category: "Fun & Games", value: "GLASS BOTTOM BOAT CRUISE" },
  { id: uuid(), category: "Fun & Games", value: "TAG YOU'RE IT" },
  { id: uuid(), category: "Fun & Games", value: "SOMERSAULT" },
  { id: uuid(), category: "Fun & Games", value: "SWING SET" },
  { id: uuid(), category: "Fun & Games", value: "SLEEPING UNDER THE STARS" },
  { id: uuid(), category: "Fun & Games", value: "KAYAKING" },
  { id: uuid(), category: "Fun & Games", value: "BELLY FLOP" },
  { id: uuid(), category: "Fun & Games", value: "TEXAS HOLD'EM" },
  { id: uuid(), category: "Fun & Games", value: "KICK THE CAN" },
  { id: uuid(), category: "Fun & Games", value: "SWIMMING WITH DOLPHINS" },
  { id: uuid(), category: "Fun & Games", value: "MARCH MADNESS" },
  { id: uuid(), category: "Fun & Games", value: "GO FISH" },
  { id: uuid(), category: "Fun & Games", value: "PIN THE TAIL ON THE DONKEY" },
  { id: uuid(), category: "Fun & Games", value: "JUNGLE GYM" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SIGNING YOURSELF UP FOR SAILING LESSONS",
  },
  { id: uuid(), category: "Fun & Games", value: "AEROBIC EXERCISE" },
  { id: uuid(), category: "Fun & Games", value: "GETTING YOUR SEA LEGS" },
  { id: uuid(), category: "Fun & Games", value: "MONOPOLY MONEY" },
  { id: uuid(), category: "Fun & Games", value: "FULL DAY GUIDED KAYAK TOUR" },
  { id: uuid(), category: "Fun & Games", value: "TECHNICAL KNOCKOUT" },
  { id: uuid(), category: "Fun & Games", value: "PARCHEESI" },
  { id: uuid(), category: "Fun & Games", value: "SHOOTING HOOPS" },
  { id: uuid(), category: "Fun & Games", value: "SWIMMING LAPS" },
  { id: uuid(), category: "Fun & Games", value: "KICKBOXING" },
  { id: uuid(), category: "Fun & Games", value: "BLIND MAN'S BLUFF" },
  { id: uuid(), category: "Fun & Games", value: "RENTING SNORKELING GEAR" },
  { id: uuid(), category: "Fun & Games", value: "HUNGRY HUNGRY HIPPOS" },
  { id: uuid(), category: "Fun & Games", value: "CRAZY EIGHTS" },
  { id: uuid(), category: "Fun & Games", value: "CAPTURE THE FLAG" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "EIGHT BALL IN THE CORNER POCKET",
  },
  { id: uuid(), category: "Fun & Games", value: "SLAM DUNK CONTEST" },
  { id: uuid(), category: "Fun & Games", value: "WATER AEROBICS" },
  { id: uuid(), category: "Fun & Games", value: "RELAY RACES" },
  { id: uuid(), category: "Fun & Games", value: "SCAVENGER HUNT" },
  { id: uuid(), category: "Fun & Games", value: "PICKUP BASKETBALL" },
  { id: uuid(), category: "Fun & Games", value: "BREAKING OPEN THE PINATA" },
  { id: uuid(), category: "Fun & Games", value: "RED ROVER RED ROVER" },
  { id: uuid(), category: "Fun & Games", value: "BICYCLE PLAYING CARDS" },
  { id: uuid(), category: "Fun & Games", value: "ICE FISHING" },
  { id: uuid(), category: "Fun & Games", value: "NO-LIMIT POKER TOURNAMENT" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "EARNING A BLACK BELT IN KARATE",
  },
  { id: uuid(), category: "Fun & Games", value: "TRUTH OR DARE" },
  { id: uuid(), category: "Fun & Games", value: "GET OUT OF JAIL FREE CARD" },
  { id: uuid(), category: "Fun & Games", value: "BACKGAMMON" },
  { id: uuid(), category: "Fun & Games", value: "FIGURE SKATING" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "IRONMAN TRIATHLON COMPETITION",
  },
  { id: uuid(), category: "Fun & Games", value: "A PAIR OF ACES" },
  { id: uuid(), category: "Fun & Games", value: "MIXED DOUBLES" },
  { id: uuid(), category: "Fun & Games", value: "CLASSIC YACHT REGATTA" },
  { id: uuid(), category: "Fun & Games", value: "DEEP-SEA FISHING" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "DANCING TO A STEEL DRUM BAND",
  },
  { id: uuid(), category: "Fun & Games", value: "WATER POLO" },
  { id: uuid(), category: "Fun & Games", value: "PARASAILING" },
  { id: uuid(), category: "Fun & Games", value: "ROYAL FLUSH" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING BRIDGE" },
  { id: uuid(), category: "Fun & Games", value: "PONY RIDES" },
  { id: uuid(), category: "Fun & Games", value: "BELLY FLOP CONTEST" },
  { id: uuid(), category: "Fun & Games", value: "SHOOTING CRAPS" },
  { id: uuid(), category: "Fun & Games", value: "BRISK MORNING JOB" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "COMBING THE BEACH FOR SEASHELLS",
  },
  { id: uuid(), category: "Fun & Games", value: "WORD SEARCH" },
  { id: uuid(), category: "Fun & Games", value: "PAPER AIRPLANES" },
  { id: uuid(), category: "Fun & Games", value: "GRAND SLAM HOME RUN" },
  { id: uuid(), category: "Fun & Games", value: "LEARNING TO DANCE THE HULA" },
  { id: uuid(), category: "Fun & Games", value: "SOLVING A RIDDLE" },
  { id: uuid(), category: "Fun & Games", value: "SKIING THE ROCKIES" },
  { id: uuid(), category: "Fun & Games", value: "LINCOLN LOGS" },
  { id: uuid(), category: "Fun & Games", value: "MATCHBOX CARS" },
  { id: uuid(), category: "Fun & Games", value: "SONY PLAYSTATION" },
  { id: uuid(), category: "Fun & Games", value: "ULTIMATE FRISBEE" },
  { id: uuid(), category: "Fun & Games", value: "MOTHER MAY I" },
  { id: uuid(), category: "Fun & Games", value: "JACK OF CLUBS" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING CHARADES" },
  { id: uuid(), category: "Fun & Games", value: "STOCK CAR RACING" },
  { id: uuid(), category: "Fun & Games", value: "GYMNASTICS PRACTICE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "HIKING THE APPALACHIAN TRAIL",
  },
  { id: uuid(), category: "Fun & Games", value: "DUNKING A BASKETBALL" },
  { id: uuid(), category: "Fun & Games", value: "HORSE RACING'S TRIPLE CROWN" },
  { id: uuid(), category: "Fun & Games", value: "RUNS HITS AND ERRORS" },
  { id: uuid(), category: "Fun & Games", value: "TENNIS MATCH AT WIMBLEDON" },
  { id: uuid(), category: "Fun & Games", value: "HIGH SCHOOL FOOTBALL" },
  { id: uuid(), category: "Fun & Games", value: "CHANCE & COMMUNITY CHEST" },
  { id: uuid(), category: "Fun & Games", value: "CHINESE CRACKERS" },
  { id: uuid(), category: "Fun & Games", value: "WORLD CUP SOCCER" },
  { id: uuid(), category: "Fun & Games", value: "BUILDING SANDCASTLES" },
  { id: uuid(), category: "Fun & Games", value: "TAG-TEAM WRESTLING" },
  { id: uuid(), category: "Fun & Games", value: "RIDING A MECHANICAL BULL" },
  { id: uuid(), category: "Fun & Games", value: "PADDLING A CANOE" },
  { id: uuid(), category: "Fun & Games", value: "THROWING DARTS" },
  { id: uuid(), category: "Fun & Games", value: "MUSICAL CHAIRS" },
  { id: uuid(), category: "Fun & Games", value: "TWENTY QUESTIONS" },
  { id: uuid(), category: "Fun & Games", value: "COMPUTER SOLITARE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "LEAGUE NIGHT AT THE BOWLING ALLEY",
  },
  { id: uuid(), category: "Fun & Games", value: "WORD SCRAMBLE" },
  { id: uuid(), category: "Fun & Games", value: "LEARNING TO WATER-SKI" },
  { id: uuid(), category: "Fun & Games", value: "ARM WRESTLING" },
  { id: uuid(), category: "Fun & Games", value: "WOMEN'S LACROSSE" },
  { id: uuid(), category: "Fun & Games", value: "TRIVIAL PURSUIT" },
  { id: uuid(), category: "Fun & Games", value: "COLLECTING BASEBALL CARDS" },
  { id: uuid(), category: "Fun & Games", value: "SKATING ON A FROZEN LAKE" },
  { id: uuid(), category: "Fun & Games", value: "YO-YO TRICKS" },
  { id: uuid(), category: "Fun & Games", value: "SKEET SHOOTING" },
  { id: uuid(), category: "Fun & Games", value: "LASER TAG" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "TRIPLE WORD SCORE IN SCRABBLE",
  },
  { id: uuid(), category: "Fun & Games", value: "BRAIN TEASERS" },
  { id: uuid(), category: "Fun & Games", value: "MODEL AIRPLANE KIT" },
  { id: uuid(), category: "Fun & Games", value: "SNORKELING IN A LAGOON" },
  { id: uuid(), category: "Fun & Games", value: "HOT DOG EATING CONTEST" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING DOMINOES" },
  { id: uuid(), category: "Fun & Games", value: "OLD MAID & GO FISH" },
  { id: uuid(), category: "Fun & Games", value: "MOUNTAIN BIKING" },
  { id: uuid(), category: "Fun & Games", value: "MINOR LEAGUE BASEBALL" },
  { id: uuid(), category: "Fun & Games", value: "TOUCH FOOTBALL" },
  { id: uuid(), category: "Fun & Games", value: "SKIPPING STONES" },
  { id: uuid(), category: "Fun & Games", value: "HOME POKER SET" },
  { id: uuid(), category: "Fun & Games", value: "KNIGHTS ROOKS AND PAWNS" },
  { id: uuid(), category: "Fun & Games", value: "BATTLESHIP" },
  { id: uuid(), category: "Fun & Games", value: "RIDING AN ELEPHANT" },
  { id: uuid(), category: "Fun & Games", value: "ENJOYING THE GRAT OUTDOORS" },
  { id: uuid(), category: "Fun & Games", value: "PICTIONARY" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING KICKBALL" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING ALONG AT HOME" },
  { id: uuid(), category: "Fun & Games", value: "WATER BALLOON FIGHT" },
  { id: uuid(), category: "Fun & Games", value: "MARTIAL ARTS TOURNAMENT" },
  { id: uuid(), category: "Fun & Games", value: "PAIRS FIGURE SKATING" },
  { id: uuid(), category: "Fun & Games", value: "THUMB WRESTLING" },
  { id: uuid(), category: "Fun & Games", value: "MONOPOLY & MASTERMIND" },
  { id: uuid(), category: "Fun & Games", value: "BUMPER CARS" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING HOUSE" },
  { id: uuid(), category: "Fun & Games", value: "FLYING A KITE" },
  { id: uuid(), category: "Fun & Games", value: "G.I. JOE ACTION FIGURE" },
  { id: uuid(), category: "Fun & Games", value: "SUMO WRESTLING" },
  { id: uuid(), category: "Fun & Games", value: "RIDING A UNICYCLE" },
  { id: uuid(), category: "Fun & Games", value: "SLIDING INTO HOME PLATE" },
  { id: uuid(), category: "Fun & Games", value: "JUMPING ROPE" },
  { id: uuid(), category: "Fun & Games", value: "ROULETTE & BLACKJACK" },
  { id: uuid(), category: "Fun & Games", value: "ARCHERY SHOOT" },
  { id: uuid(), category: "Fun & Games", value: "SPLASHING IN THE WAVES" },
  { id: uuid(), category: "Fun & Games", value: "MINIATURE GOLF" },
  { id: uuid(), category: "Fun & Games", value: "MOUNTAIN CLIMBING" },
  { id: uuid(), category: "Fun & Games", value: "LEARNING HOW TO WINDSURF" },
  { id: uuid(), category: "Fun & Games", value: "THE THRILL OF PARASAILING" },
  { id: uuid(), category: "Fun & Games", value: "RUGBY" },
  { id: uuid(), category: "Fun & Games", value: "BOBBING FOR APPLES" },
  { id: uuid(), category: "Fun & Games", value: "AIR HOCKEY" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "ICE SKATING IN THE MOONLIGHT",
  },
  { id: uuid(), category: "Fun & Games", value: "PLAYGROUND BASKETBALL" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "RIDING THE CYCLONE AT CONEY ISLAND",
  },
  { id: uuid(), category: "Fun & Games", value: "PLAYING STICKBALL" },
  { id: uuid(), category: "Fun & Games", value: "FLASHLIGHT TAG" },
  { id: uuid(), category: "Fun & Games", value: "FOOTBALL PRACTICE" },
  { id: uuid(), category: "Fun & Games", value: "BINGO NIGHT" },
  { id: uuid(), category: "Fun & Games", value: "AFTERNOON SAILING LESSON" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING CATCH" },
  { id: uuid(), category: "Fun & Games", value: "EXTREME SPORTS" },
  { id: uuid(), category: "Fun & Games", value: "GIN RUMMY" },
  { id: uuid(), category: "Fun & Games", value: "CONNECT FOUR" },
  { id: uuid(), category: "Fun & Games", value: "TIC-TAC-TOE" },
  { id: uuid(), category: "Fun & Games", value: "TONKA TRUCKS" },
  { id: uuid(), category: "Fun & Games", value: "DOING A CARTWHEEL" },
  { id: uuid(), category: "Fun & Games", value: "SILLY PUTTY" },
  { id: uuid(), category: "Fun & Games", value: "FIELD HOCKEY" },
  { id: uuid(), category: "Fun & Games", value: "TRACK AND FIELD" },
  { id: uuid(), category: "Fun & Games", value: "GUITAR HERO" },
  { id: uuid(), category: "Fun & Games", value: "TWISTER & CLUE" },
  { id: uuid(), category: "Fun & Games", value: "ROCK PAPER SCISSORS" },
  { id: uuid(), category: "Fun & Games", value: "RACQUETBALL" },
  { id: uuid(), category: "Fun & Games", value: "SHOOTING GALLERY" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING THE LOTTERY" },
  { id: uuid(), category: "Fun & Games", value: "SURFING COMPETITION" },
  { id: uuid(), category: "Fun & Games", value: "SOLITARE" },
  { id: uuid(), category: "Fun & Games", value: "BADMINTON" },
  { id: uuid(), category: "Fun & Games", value: "CAT'S CRADLE" },
  { id: uuid(), category: "Fun & Games", value: "A HIGH BATTING AVERAGE" },
  { id: uuid(), category: "Fun & Games", value: "DRAW POKER" },
  { id: uuid(), category: "Fun & Games", value: "STEALING SECOND BASE" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING FETCH" },
  { id: uuid(), category: "Fun & Games", value: "THRILL RIDES" },
  { id: uuid(), category: "Fun & Games", value: "STREET HOCKEY" },
  { id: uuid(), category: "Fun & Games", value: "CAROUSEL RIDE" },
  { id: uuid(), category: "Fun & Games", value: "TETHERBALL" },
  { id: uuid(), category: "Fun & Games", value: "HOT-AIR BALLOON RIDE" },
  { id: uuid(), category: "Fun & Games", value: "TUG OF WAR" },
  { id: uuid(), category: "Fun & Games", value: "SUMMER SOFTBALL LEAGUE" },
  { id: uuid(), category: "Fun & Games", value: "PAC-MAN & DONKEY KONG" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "WADING IN A FRESHWATER LAGOON",
  },
  { id: uuid(), category: "Fun & Games", value: "KNOCK-KNOCK JOKE" },
  { id: uuid(), category: "Fun & Games", value: "AEROBICS CLASS" },
  { id: uuid(), category: "Fun & Games", value: "SPLASHING IN THE SURF" },
  { id: uuid(), category: "Fun & Games", value: "SWINGING AT A PINATA" },
  { id: uuid(), category: "Fun & Games", value: "LITTLE LEAGUE BASEBALL" },
  { id: uuid(), category: "Fun & Games", value: "BRIDGE TOURNAMENT" },
  { id: uuid(), category: "Fun & Games", value: "HANG GLIDING" },
  { id: uuid(), category: "Fun & Games", value: "RUNNING THE RAPIDS" },
  { id: uuid(), category: "Fun & Games", value: "STEALING SECOND BASE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "TOSSING A FRISBEE ON THE BEACH",
  },
  { id: uuid(), category: "Fun & Games", value: "LACROSSE STICK" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "HIKING, BIKING & HORSEBACK RIDING",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "THE OLYMPIC SPORT OF CURLING",
  },
  { id: uuid(), category: "Fun & Games", value: "FLY-FISHING" },
  { id: uuid(), category: "Fun & Games", value: "FANTASY FOOTBALL LEAUGE" },
  { id: uuid(), category: "Fun & Games", value: "SWIMMING WITH DOLPHINS" },
  { id: uuid(), category: "Fun & Games", value: "OCEAN KAYAKING" },
  { id: uuid(), category: "Fun & Games", value: "PADDLING AN OUTRIGGER CANOE" },
  { id: uuid(), category: "Fun & Games", value: "HITTING THE DOWNHILL SLOPES" },
  { id: uuid(), category: "Fun & Games", value: "BACKCOUNTRY HIKE" },
  { id: uuid(), category: "Fun & Games", value: "ANTE UP & DOUBLE DOWN" },
  { id: uuid(), category: "Fun & Games", value: "MORNING TEE TIME" },
  { id: uuid(), category: "Fun & Games", value: "SQUIRT-GUN FIGHT" },
  { id: uuid(), category: "Fun & Games", value: "SINKING MY TOES IN THE SAND" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "CATCHING SNOWFLAKES ON YOUR TOUNGE",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "GO DIRECTLY TO JAIL DO NOT PASS GO",
  },
  { id: uuid(), category: "Fun & Games", value: "JIGSAW PUZZLE" },
  { id: uuid(), category: "Fun & Games", value: "SLEDDING DOWN A STEEP HILL" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "ZIPPING AROUND THE ISLAND ON A SCOOTER",
  },
  { id: uuid(), category: "Fun & Games", value: "HOUSE OF CARDS" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "LAUGHING OUT LOUD AT LIMERICKS",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "LISTENING TO A MARIACHI BAND DURING DINNER",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "BASKING IN THE WARM SUNSHINE",
  },
  { id: uuid(), category: "Fun & Games", value: "SKIPPING ROPE" },
  { id: uuid(), category: "Fun & Games", value: "STRIKES SPARES AND SPLITS" },
  { id: uuid(), category: "Fun & Games", value: "KNUCKLEBALL" },
  { id: uuid(), category: "Fun & Games", value: "SHIRTS AND SKINS" },
  { id: uuid(), category: "Fun & Games", value: "BASKING ON A PRIVATE BEACH" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "DANCING THE NIGHT AWAY TO A SALSA BEAT",
  },
  { id: uuid(), category: "Fun & Games", value: "PLAYING PING-PONG" },
  { id: uuid(), category: "Fun & Games", value: "ROLLER COASTER" },
  { id: uuid(), category: "Fun & Games", value: "BLOWING BUBBLES" },
  { id: uuid(), category: "Fun & Games", value: "SPINNING TOP" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "BOUNCING AROUND ON A TRAMPOLINE",
  },
  { id: uuid(), category: "Fun & Games", value: "SIT-UPS & PULL-UPS" },
  { id: uuid(), category: "Fun & Games", value: "MONOPOLY MONEY" },
  { id: uuid(), category: "Fun & Games", value: "DOING CARTWHEELS" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SHOOTING DOWN THE WATER SLIDE",
  },
  { id: uuid(), category: "Fun & Games", value: "WORD SEARCH PUZZLES" },
  { id: uuid(), category: "Fun & Games", value: "THE MIDDLE OF NOWHERE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "STREAKING OVER THE OCEAN ON A JET SKI",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "BURYING EACH OTHER IN THE SAND",
  },
  { id: uuid(), category: "Fun & Games", value: "BATHING IN THE GOLDEN SUN" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING PINBALL" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SNORKELING IN CRYSTAL CLEAR WATERS",
  },
  { id: uuid(), category: "Fun & Games", value: "TAKING WINDSURFING LESSONS" },
  { id: uuid(), category: "Fun & Games", value: "SURFING ON THE NORTH SHORE" },
  { id: uuid(), category: "Fun & Games", value: "TRUTH OR DARE" },
  { id: uuid(), category: "Fun & Games", value: "BASEBALL GLOVE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "RECEIVING STAR TREATMENT AT THE SPA",
  },
  { id: uuid(), category: "Fun & Games", value: "A HOLE IN ONE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "HIKING AMONG EXOTIC PLANTS AND ANIMALS",
  },
  { id: uuid(), category: "Fun & Games", value: "SOCCER TOURNAMENT" },
  { id: uuid(), category: "Fun & Games", value: "TAKING A DIP IN THE JACUZZI" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING TWENTY QUESTIONS" },
  { id: uuid(), category: "Fun & Games", value: "SURFING THE BIG WAVES" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SOAKING IN A HOT MINERAL POOL",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "COOLING OFF IN A FRESHWATER POOL",
  },
  { id: uuid(), category: "Fun & Games", value: "EXTRA INNINGS" },
  { id: uuid(), category: "Fun & Games", value: "A BRISK JOG" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "PARASAILING HIGH ABOVE THE WATER",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "DRIFTING ALONG IN A HOT AIR BALLOON",
  },
  { id: uuid(), category: "Fun & Games", value: "GOING FOR IT ON FOURTH DOWN" },
  { id: uuid(), category: "Fun & Games", value: "LIFTING WEIGHTS" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SCUBA DIVING AROUND THE ISLAND",
  },
  { id: uuid(), category: "Fun & Games", value: "AEROBIC EXERCISE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SCORING A LAST-MINUTE TOUCHDOWN",
  },
  { id: uuid(), category: "Fun & Games", value: "SCAVENGER HUNT" },
  { id: uuid(), category: "Fun & Games", value: "PILLOW FIGHT" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "TELLING GHOST STORIES AROUND THE CAMPFIRE",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "PLAYING VOLLEYBALL ON THE BEACH",
  },
  { id: uuid(), category: "Fun & Games", value: "PLAYING BACKGAMMON" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "PLAYING VOLLEYBALL ON THE BEACH",
  },
  { id: uuid(), category: "Fun & Games", value: "PLAYING BACKGAMMON" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "BUILDING A SNOWMAN IN THE BACKYARD",
  },
  { id: uuid(), category: "Fun & Games", value: "PLAY ALONG AT HOME" },
  { id: uuid(), category: "Fun & Games", value: "SNOWBALL FIGHT" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "HIKING IN A TROPICAL RAIN FOREST",
  },
  { id: uuid(), category: "Fun & Games", value: "LEARNING TO DANCE THE HULA" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "MORNING SNORKELING EXCURSION",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "KAYAKING IN THE GREAT NORTHWEST",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "KINGS QUEENS ROOKS BISHOPS KNIGHTS & PAWNS",
  },
  { id: uuid(), category: "Fun & Games", value: "SWINGING ON MONKEY BARS" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "BOUNCING UP AND DOWN ON A TRAMPOLINE",
  },
  { id: uuid(), category: "Fun & Games", value: "ARM WRESTLING" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING A PRANK" },
  { id: uuid(), category: "Fun & Games", value: "STRIKES & SPARES" },
  { id: uuid(), category: "Fun & Games", value: "PITCHING HORSESHOES" },
  { id: uuid(), category: "Fun & Games", value: "ROYAL FLUSH" },
  { id: uuid(), category: "Fun & Games", value: "SLOW-PITCH SOFTBALL" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SIGNING UP FOR SCUBA DIVING LESSONS",
  },
  { id: uuid(), category: "Fun & Games", value: "ICE HOCKEY" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "EIGHT BALL IN THE CORNER POCKET",
  },
  { id: uuid(), category: "Fun & Games", value: "RIDING A MECHANICAL BULL" },
  { id: uuid(), category: "Fun & Games", value: "JUGGLING ACT" },
  { id: uuid(), category: "Fun & Games", value: "PIE-EATING CONTEST" },
  { id: uuid(), category: "Fun & Games", value: "FACE PAINTING" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "TRIPLE WORD SCORE IN SCRABBLE",
  },
  { id: uuid(), category: "Fun & Games", value: "MUSICAL CHAIRS" },
  { id: uuid(), category: "Fun & Games", value: "TRIVIAL PURSUIT" },
  { id: uuid(), category: "Fun & Games", value: "STEALING THIRD BASE" },
  { id: uuid(), category: "Fun & Games", value: "EXCERCISE CLASSES" },
  { id: uuid(), category: "Fun & Games", value: "ARCHERY TARGET" },
  { id: uuid(), category: "Fun & Games", value: "RIDING SIDESADDLE" },
  { id: uuid(), category: "Fun & Games", value: "RIDING THE BIG WAVES" },
  { id: uuid(), category: "Fun & Games", value: "TAP DANCING LESSONS" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "CATCHING A FRISBEE ON THE BEACH",
  },
  { id: uuid(), category: "Fun & Games", value: "HITTING THE SLOPES" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "RAFTING THROUGH THE GRAND CANYON",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "HIKING THE APPALACHIAN TRAIL",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "BACKPACKING THROUGH THE FOREST",
  },
  { id: uuid(), category: "Fun & Games", value: "DEEP-SEA FISHING EXCURSION" },
  { id: uuid(), category: "Fun & Games", value: "SCORING A GOAL" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SCUBA DIVING AMONG TROPICAL FISH",
  },
  { id: uuid(), category: "Fun & Games", value: "HULA DANCING ON THE BEACH" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "BUILDING HOUSES ON BOARDWALK AND PARK PLACE",
  },
  { id: uuid(), category: "Fun & Games", value: "KAYAKING" },
  { id: uuid(), category: "Fun & Games", value: "SPECTATOR SPORT" },
  { id: uuid(), category: "Fun & Games", value: "CAPTURE THE FLAG" },
  { id: uuid(), category: "Fun & Games", value: "PADDLING A CANOE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "BREAKING OPEN A PINATA FILLED WITH CANDY",
  },
  { id: uuid(), category: "Fun & Games", value: "SHOW AND TELL" },
  { id: uuid(), category: "Fun & Games", value: "SPIN THE BOTTLE" },
  { id: uuid(), category: "Fun & Games", value: "SHOOTING HOOPS" },
  { id: uuid(), category: "Fun & Games", value: "RELAY RACE" },
  { id: uuid(), category: "Fun & Games", value: "THROWING A BOOMERANG" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SNORKELING ALONG A BRILLIANT CORAL",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "THRILLING AMUSMENT PARK RIDES",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "CHILLING OUT AT THE INFINITY POOL",
  },
  { id: uuid(), category: "Fun & Games", value: "PLAYING FETCH" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "DANCING TO A STEEL DRUM BAND",
  },
  { id: uuid(), category: "Fun & Games", value: "TRACK MEET" },
  { id: uuid(), category: "Fun & Games", value: "WHEELBARROW RACE" },
  { id: uuid(), category: "Fun & Games", value: "BUILDING SANDCASTLES" },
  { id: uuid(), category: "Fun & Games", value: "MONOPOLY BOARD" },
  { id: uuid(), category: "Fun & Games", value: "AEROBICS CLASS" },
  { id: uuid(), category: "Fun & Games", value: "RIDING A UNICYCLE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "EARLY MORNING SURFING LESSON",
  },
  { id: uuid(), category: "Fun & Games", value: "FIELD HOCKEY" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING KICKBALL" },
  { id: uuid(), category: "Fun & Games", value: "TAG YOU'RE IT" },
  { id: uuid(), category: "Fun & Games", value: "PINBALL MACHINE" },
  { id: uuid(), category: "Fun & Games", value: "SCRABBLE TOURNAMENT" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "CHARTERING A CATAMARAN FOR THE DAY",
  },
  { id: uuid(), category: "Fun & Games", value: "TWENTY QUESTIONS" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "LEAGUE NIGHT AT THE BOWLING ALLEY",
  },
  { id: uuid(), category: "Fun & Games", value: "PLAYING BEACH VOLLEYBALL" },
  { id: uuid(), category: "Fun & Games", value: "TICKLING MY FUNNY BONE" },
  { id: uuid(), category: "Fun & Games", value: "MINIATURE GOLF" },
  { id: uuid(), category: "Fun & Games", value: "HORSEBACK RIDING" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "COOLING OFF IN THE INFINITY POOL",
  },
  { id: uuid(), category: "Fun & Games", value: "FANTASY FOOTBALL" },
  { id: uuid(), category: "Fun & Games", value: "BOBBING FOR APPLES" },
  { id: uuid(), category: "Fun & Games", value: "ROLLER DERBY" },
  { id: uuid(), category: "Fun & Games", value: "FIGURE SKATING" },
  { id: uuid(), category: "Fun & Games", value: "SIMON SAYS" },
  { id: uuid(), category: "Fun & Games", value: "RIDING A CAROUSEL" },
  { id: uuid(), category: "Fun & Games", value: "SCORING A TOUCHDOWN" },
  { id: uuid(), category: "Fun & Games", value: "THROWING SNOWBALLS" },
  { id: uuid(), category: "Fun & Games", value: "CONNECT FOUR" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SPIKING THE BALL IN THE END ZONE",
  },
  { id: uuid(), category: "Fun & Games", value: "THUMB WRESTLING" },
  { id: uuid(), category: "Fun & Games", value: "JUMPING ON A TRAMPOLINE" },
  { id: uuid(), category: "Fun & Games", value: "THROWING DARTS" },
  { id: uuid(), category: "Fun & Games", value: "WAVING THE CHECKERED FLAG" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "THRILLING ROLLER COASTER RIDE",
  },
  { id: uuid(), category: "Fun & Games", value: "SKIPPING ROPE" },
  { id: uuid(), category: "Fun & Games", value: "SWING DANCING" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "DOING THE HULA ON THE DANCE FLOOR",
  },
  { id: uuid(), category: "Fun & Games", value: "FLYING A KITE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "TAKING AN ISLAND TOUR BY CATAMARAN",
  },
  { id: uuid(), category: "Fun & Games", value: "BOARDWALK & PARK PLACE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "HIKING THROUGH THE RAIN FOREST",
  },
  { id: uuid(), category: "Fun & Games", value: "MONOPOLY MONEY" },
  { id: uuid(), category: "Fun & Games", value: "CHECKMATE!" },
  { id: uuid(), category: "Fun & Games", value: "TOSSING A FRISBEE" },
  { id: uuid(), category: "Fun & Games", value: "INDOOR SOCCER" },
  { id: uuid(), category: "Fun & Games", value: "THROWING PAPER AIRPLANES" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING DOMINOES" },
  { id: uuid(), category: "Fun & Games", value: "DOING CARTWHEELS" },
  { id: uuid(), category: "Fun & Games", value: "SPELLING BEE" },
  { id: uuid(), category: "Fun & Games", value: "TWISTER & CLUE" },
  { id: uuid(), category: "Fun & Games", value: "MARTIAL ARTS TOUNAMENT" },
  { id: uuid(), category: "Fun & Games", value: "GET OUT OF JAIL FREE CARD" },
  { id: uuid(), category: "Fun & Games", value: "LEAPFROG" },
  { id: uuid(), category: "Fun & Games", value: "JUMPING IN THE WAVES" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "ROYAL FLUSH FULL HOUSE THREE OF A KIND",
  },
  { id: uuid(), category: "Fun & Games", value: "COLLECTING SEASHELLS" },
  { id: uuid(), category: "Fun & Games", value: "MOUNTAIN BIKING" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "DANCING TO LIVE CALYPSO MUSIC",
  },
  { id: uuid(), category: "Fun & Games", value: "PLAYING CATCH" },
  { id: uuid(), category: "Fun & Games", value: "BATTING CAGES" },
  { id: uuid(), category: "Fun & Games", value: "OPENING KICKOFF" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "CATCHING SOME OF THE GREATEST WAVES EVER",
  },
  { id: uuid(), category: "Fun & Games", value: "SHIRTS AND SKINS" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "THRILL RIDES AND AMAZING ATTRACTIONS",
  },
  { id: uuid(), category: "Fun & Games", value: "HIKING IN THE BACKCOUNTRY" },
  { id: uuid(), category: "Fun & Games", value: "TRIPLE JUMP IN CHECKERS" },
  { id: uuid(), category: "Fun & Games", value: "ROCK PAPER SCISSORS" },
  { id: uuid(), category: "Fun & Games", value: "GROUND RULE DOUBLE" },
  { id: uuid(), category: "Fun & Games", value: "DOING THE TANGO" },
  { id: uuid(), category: "Fun & Games", value: "PIGGYBACK RIDE" },
  { id: uuid(), category: "Fun & Games", value: "SPECTACULAR SCUBA DIVING" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SURFING THE BIGGEST WAVES EVER",
  },
  { id: uuid(), category: "Fun & Games", value: "KICKBOXING" },
  { id: uuid(), category: "Fun & Games", value: "PRIVATE SURFING LESSONS" },
  { id: uuid(), category: "Fun & Games", value: "FLIPS AND CARTWHEELS" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING A PRACTICAL JOKE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SWIMMING IN THE PACIFIC OCEAN",
  },
  { id: uuid(), category: "Fun & Games", value: "FEATURED SOUTHERN LOCALE" },
  { id: uuid(), category: "Fun & Games", value: "PIN THE TAIL ON THE DONKEY" },
  { id: uuid(), category: "Fun & Games", value: "THROWING WATER BALLOONS" },
  { id: uuid(), category: "Fun & Games", value: "FOLLOW THE LEADER" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SWIMMING ALONG A COLORFUL CORAL REEF",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "CRUISING THROUGH JUNGLE CANALS",
  },
  { id: uuid(), category: "Fun & Games", value: "EXCHANGING GIFTS" },
  { id: uuid(), category: "Fun & Games", value: "BADMINTON NET" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "WINDSURFING AROUND THE ISLAND",
  },
  { id: uuid(), category: "Fun & Games", value: "ZOOMING AROUND ON A JET SKI" },
  { id: uuid(), category: "Fun & Games", value: "RIDING A PADDLEBOARD" },
  { id: uuid(), category: "Fun & Games", value: "BUILDING A SNOWMAN" },
  { id: uuid(), category: "Fun & Games", value: "FIRST DOWN AND TEN" },
  { id: uuid(), category: "Fun & Games", value: "PADDLING A TWO-PERSON KAYAK" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING PRANKS" },
  { id: uuid(), category: "Fun & Games", value: "SILLY PUTTY" },
  { id: uuid(), category: "Fun & Games", value: "MOUNTAIN CLIMBING" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SLIPPING AND SLIDING DOWN THE WATER SLIDE",
  },
  { id: uuid(), category: "Fun & Games", value: "PLAYING HOUSE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "WINNING A STUFFED ANIMAL AT A CARNIVAL",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SNORKELING IN CRYSTAL CLEAR WATERS",
  },
  { id: uuid(), category: "Fun & Games", value: "DIGGING MY TOES IN THE SAND" },
  { id: uuid(), category: "Fun & Games", value: "FADEAWAY JUMPER" },
  { id: uuid(), category: "Fun & Games", value: "MUSICAL CHAIRS" },
  { id: uuid(), category: "Fun & Games", value: "SCRABBLE BOARD" },
  { id: uuid(), category: "Fun & Games", value: "PLAYING FETCH IN THE PARK" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "TAKING A DIP IN THE PLUNGE POOL",
  },
  { id: uuid(), category: "Fun & Games", value: "AMUSEMENT PARK RIDES" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "GO DIRECTLY TO JAIL DO NOT PASS GO",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "TRIPLE LETTER SCORE IN SCRABBLE",
  },
  { id: uuid(), category: "Fun & Games", value: "HOUSE OF CARDS" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SWIMMING SNORKELING SCUBA DIVING",
  },
  { id: uuid(), category: "Fun & Games", value: "SQUARE DANCING" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "ROOKS BISHOPS KNIGHTS AND PAWNS",
  },
  { id: uuid(), category: "Fun & Games", value: "RIDING THE PERFECT WAVE" },
  { id: uuid(), category: "Fun & Games", value: "PITCHING HORSESHOES" },
  { id: uuid(), category: "Fun & Games", value: "BAND PRACTICE" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "THROWING A FRISBEE ON THE BEACH",
  },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "SWING YOUR PARTNER ROUND AND ROUND",
  },
  { id: uuid(), category: "Fun & Games", value: "PAC-MAN AND MS. PAC-MAN" },
  { id: uuid(), category: "Fun & Games", value: "COLLECTING BASEBALL CARDS" },
  { id: uuid(), category: "Fun & Games", value: "DRIVING A GOLF CART" },
  {
    id: uuid(),
    category: "Fun & Games",
    value: "ROYAL FLUSH BEATS A FULL HOUSE",
  },
  { id: uuid(), category: "Fun & Games", value: "SPORTING EVENT" },
  { id: uuid(), category: "Fun & Games", value: "BUMPER CARS" },
  { id: uuid(), category: "Fun & Games", value: "TAP DANCING" },
]
export default puzzleList
