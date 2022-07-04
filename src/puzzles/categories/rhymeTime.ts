import { v4 as uuid } from "uuid"
import { Puzzle } from "../../types/Puzzle"
const puzzleList: Puzzle[] = [
  { id: uuid(), category: "Rhyme Time", value: "FINE WINE" },
  { id: uuid(), category: "Rhyme Time", value: "SNEAK PEEK" },
  { id: uuid(), category: "Rhyme Time", value: "BLACK BACKPACK" },
  { id: uuid(), category: "Rhyme Time", value: "WINE AND DINE" },
  { id: uuid(), category: "Rhyme Time", value: "FUN IN THE SUN" },
  { id: uuid(), category: "Rhyme Time", value: "SEE YOU LATER ALLIGATOR" },
  { id: uuid(), category: "Rhyme Time", value: "SON OF A GUN" },
  { id: uuid(), category: "Rhyme Time", value: "PUT THE PEDAL TO THE METAL" },
  { id: uuid(), category: "Rhyme Time", value: "OKEY-DOKEY" },
  { id: uuid(), category: "Rhyme Time", value: "PRIME TIME" },
  { id: uuid(), category: "Rhyme Time", value: "A FINE LINE" },
  { id: uuid(), category: "Rhyme Time", value: "TONIGHT'S THE NIGHT" },
  { id: uuid(), category: "Rhyme Time", value: "WEAR AND TEAR" },
  { id: uuid(), category: "Rhyme Time", value: "LAFFY TAFFY" },
  { id: uuid(), category: "Rhyme Time", value: "A WHALE OF A TALE" },
  { id: uuid(), category: "Rhyme Time", value: "EVEN-STEVEN" },
  { id: uuid(), category: "Rhyme Time", value: "SWATCH WATCH" },
  { id: uuid(), category: "Rhyme Time", value: "READY FREDDY" },
  { id: uuid(), category: "Rhyme Time", value: "PHONEY BALONEY" },
  { id: uuid(), category: "Rhyme Time", value: "ONE TWO BUCKLE MY SHOE" },
  { id: uuid(), category: "Rhyme Time", value: "WHEELING AND DEALING" },
  { id: uuid(), category: "Rhyme Time", value: "A BLAST FROM THE PAST" },
  { id: uuid(), category: "Rhyme Time", value: "A TON OF FUN" },
  { id: uuid(), category: "Rhyme Time", value: "SNUG AS A BUG IN A RUG" },
  { id: uuid(), category: "Rhyme Time", value: "HASTE MAKES WASTE" },
  { id: uuid(), category: "Rhyme Time", value: "SURROUND SOUND" },
  { id: uuid(), category: "Rhyme Time", value: "ROUGH STUFF" },
  { id: uuid(), category: "Rhyme Time", value: "HOCUS-POCUS" },
  { id: uuid(), category: "Rhyme Time", value: "ANTS IN YOUR PANTS" },
  { id: uuid(), category: "Rhyme Time", value: "PEEKABOO I SEE YOU" },
  { id: uuid(), category: "Rhyme Time", value: "WHEEL AND DEAL" },
  { id: uuid(), category: "Rhyme Time", value: "MADE IN THE SHADE" },
  { id: uuid(), category: "Rhyme Time", value: "CREATURE FEATURE" },
  { id: uuid(), category: "Rhyme Time", value: "HOW NOW BROWN COW" },
  { id: uuid(), category: "Rhyme Time", value: "OODLES OF NOODLES" },
  { id: uuid(), category: "Rhyme Time", value: "SEE YOU LATER ALLIGATOR" },
  { id: uuid(), category: "Rhyme Time", value: "HOKEY POKEY" },
  { id: uuid(), category: "Rhyme Time", value: "BLESS THIS MESS" },
  { id: uuid(), category: "Rhyme Time", value: "THRILLS AND CHILLS" },
  { id: uuid(), category: "Rhyme Time", value: "SHAKE 'N BAKE" },
  { id: uuid(), category: "Rhyme Time", value: "PARTY HEARTY" },
  { id: uuid(), category: "Rhyme Time", value: "THE MOTION OF THE OCEAN" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "APRIL SHOWERS BRING MAY FLOWERS",
  },
  { id: uuid(), category: "Rhyme Time", value: "GO WITH THE FLOW" },
  { id: uuid(), category: "Rhyme Time", value: "PRIMA BALLERINA" },
  { id: uuid(), category: "Rhyme Time", value: "PETER PETER PUMPKIN EATER" },
  { id: uuid(), category: "Rhyme Time", value: "NEAR AND DEAR" },
  { id: uuid(), category: "Rhyme Time", value: "HUBBA BUBBA" },
  { id: uuid(), category: "Rhyme Time", value: "I WOULD IF I COULD" },
  { id: uuid(), category: "Rhyme Time", value: "MADE THE GRADE" },
  { id: uuid(), category: "Rhyme Time", value: "THE FUN HAS JUST BEGUN" },
  { id: uuid(), category: "Rhyme Time", value: "STAR LIGHT STAR BRIGHT" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "CHANGES IN LATITUDES CHANGES IN ATTITUDES",
  },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "DIFFERENT STROKES FOR DIFFERENT FOLKS",
  },
  { id: uuid(), category: "Rhyme Time", value: "IN IT TO WIN IT" },
  { id: uuid(), category: "Rhyme Time", value: "PIE IN THE SKY" },
  { id: uuid(), category: "Rhyme Time", value: "THE JET SET" },
  { id: uuid(), category: "Rhyme Time", value: "HOT SPOT" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "I SCREAM YOU SCREAM WE ALL SCREAM FOR ICE CREAM",
  },
  { id: uuid(), category: "Rhyme Time", value: "CRUNCH 'N MUNCH" },
  { id: uuid(), category: "Rhyme Time", value: "TOUGH ENOUGH" },
  { id: uuid(), category: "Rhyme Time", value: "BAHAMA MAMA" },
  { id: uuid(), category: "Rhyme Time", value: "DROP THE TOP" },
  { id: uuid(), category: "Rhyme Time", value: "BEST OF THE WEST" },
  { id: uuid(), category: "Rhyme Time", value: "TURN THAT FROWN UPSIDE DOWN" },
  { id: uuid(), category: "Rhyme Time", value: "CHILLY WILLY" },
  { id: uuid(), category: "Rhyme Time", value: "WEAR AND TEAR" },
  { id: uuid(), category: "Rhyme Time", value: "FROM ZERO TO HERO" },
  { id: uuid(), category: "Rhyme Time", value: "BLING-BLING" },
  { id: uuid(), category: "Rhyme Time", value: "BACK ON TRACK" },
  { id: uuid(), category: "Rhyme Time", value: "DRESS TO IMPRESS" },
  { id: uuid(), category: "Rhyme Time", value: "THE DREAM TEAM" },
  { id: uuid(), category: "Rhyme Time", value: "HONEY BUNNY" },
  { id: uuid(), category: "Rhyme Time", value: "SURF AND TURF" },
  { id: uuid(), category: "Rhyme Time", value: "FAIR AND SQUARE" },
  { id: uuid(), category: "Rhyme Time", value: "MILLIONS & BILLIONS" },
  { id: uuid(), category: "Rhyme Time", value: "HOITY-TOITY" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "I'M LOOKING OVER A FOUR-LEAF CLOVER",
  },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "FRIOS CHEETOS DORITOS & TOSTITOS",
  },
  { id: uuid(), category: "Rhyme Time", value: "SNEAK A PEEK" },
  { id: uuid(), category: "Rhyme Time", value: "METER READER" },
  { id: uuid(), category: "Rhyme Time", value: "FIVE SIX PICK UP STICKS" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "AN APPLE A DAY KEEPS THE DOCTOR AWAY",
  },
  { id: uuid(), category: "Rhyme Time", value: "ROOTIN' TOOTIN'" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "BIRDS OF A FEATHER FLOCK TOGETHER",
  },
  { id: uuid(), category: "Rhyme Time", value: "WHATEVER FLOATS YOUR BOAT" },
  { id: uuid(), category: "Rhyme Time", value: "TWICE THE PRICE" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "RAIN RAIN GO AWAY COME AGAIN SOME OTHER DAY",
  },
  { id: uuid(), category: "Rhyme Time", value: "MASTER OF DISASTER" },
  { id: uuid(), category: "Rhyme Time", value: "LIAR LIAR PANTS ON FIRE" },
  { id: uuid(), category: "Rhyme Time", value: "IN LIKE FLYNN" },
  { id: uuid(), category: "Rhyme Time", value: "HEART-SMART" },
  { id: uuid(), category: "Rhyme Time", value: "TWICE AS NICE" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "FINDERS KEEPERS LOSERS WEEPERS",
  },
  { id: uuid(), category: "Rhyme Time", value: "DADS & GRADS" },
  { id: uuid(), category: "Rhyme Time", value: "CLAIM TO FAME" },
  { id: uuid(), category: "Rhyme Time", value: "NAME OF THE GAME" },
  { id: uuid(), category: "Rhyme Time", value: "MIGHT MAKES RIGHT" },
  { id: uuid(), category: "Rhyme Time", value: "HOW LOW CAN YOU GO?" },
  { id: uuid(), category: "Rhyme Time", value: "FOUR ON THE FLOOR" },
  { id: uuid(), category: "Rhyme Time", value: "CELLAR DWELLER" },
  { id: uuid(), category: "Rhyme Time", value: "OUT AND ABOUT" },
  { id: uuid(), category: "Rhyme Time", value: "BY HOOK OR BY CROOK" },
  { id: uuid(), category: "Rhyme Time", value: "PUT THE PEDAL TO THE METAL" },
  { id: uuid(), category: "Rhyme Time", value: "STUDY BUDDY" },
  { id: uuid(), category: "Rhyme Time", value: "BE LIKE MIKE" },
  { id: uuid(), category: "Rhyme Time", value: "STEER CLEAR" },
  { id: uuid(), category: "Rhyme Time", value: "YUMMY IN MY TUMMY" },
  { id: uuid(), category: "Rhyme Time", value: "LOOSE AS A GOOSE" },
  { id: uuid(), category: "Rhyme Time", value: "SINGLE AND READY TO MINGLE" },
  { id: uuid(), category: "Rhyme Time", value: "HUMPTY DUMPTY" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "GOOD NIGHT SLEEP TIGHT DON'T LET THE BEDBUGS BITE",
  },
  { id: uuid(), category: "Rhyme Time", value: "MAYBE BABY" },
  { id: uuid(), category: "Rhyme Time", value: "SHOP TILL YOU DROP" },
  { id: uuid(), category: "Rhyme Time", value: "HODGEPODGE" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "A FRIEND IN NEED IS A FRIEND INDEED",
  },
  { id: uuid(), category: "Rhyme Time", value: "NEWS YOU CAN USE" },
  { id: uuid(), category: "Rhyme Time", value: "WILD CHILD" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "THE TOWN SO NICE THEY NAMED IT TWICE",
  },
  { id: uuid(), category: "Rhyme Time", value: "ROUGH AND TOUGH" },
  { id: uuid(), category: "Rhyme Time", value: "WILLY-NILLY" },
  { id: uuid(), category: "Rhyme Time", value: "NUTRITIOUS AND DELICIOUS" },
  { id: uuid(), category: "Rhyme Time", value: "CHICK FLICK" },
  { id: uuid(), category: "Rhyme Time", value: "MARY MARY QUITE CONTRARY" },
  { id: uuid(), category: "Rhyme Time", value: "NO PAIN NO GAIN" },
  { id: uuid(), category: "Rhyme Time", value: "GROUND ROUND" },
  { id: uuid(), category: "Rhyme Time", value: "MUMBO JUMBO" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "DO YOU EARS HANG LOW DO THEY WADDLE TO AND FRO",
  },
  { id: uuid(), category: "Rhyme Time", value: "HERKY-JERKY" },
  { id: uuid(), category: "Rhyme Time", value: "HUSTLE & BUSTLE" },
  { id: uuid(), category: "Rhyme Time", value: "FUDDY-DUDDY" },
  { id: uuid(), category: "Rhyme Time", value: "SKY-HIGH" },
  { id: uuid(), category: "Rhyme Time", value: "SUPER-DUPER" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "HICKORY DICKORY DOCK THE MOUSE RAN UP THE CLOCK",
  },
  { id: uuid(), category: "Rhyme Time", value: "THE BLAME GAME" },
  { id: uuid(), category: "Rhyme Time", value: "HIKING & BIKING" },
  { id: uuid(), category: "Rhyme Time", value: "ITTY-BITTY" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "OLD MOTHER HUBBARD WENT TO THE CUPBOARD",
  },
  { id: uuid(), category: "Rhyme Time", value: "SNEAK PEEK" },
  { id: uuid(), category: "Rhyme Time", value: "SON OF A GUN" },
  { id: uuid(), category: "Rhyme Time", value: "ROLY-POLY" },
  { id: uuid(), category: "Rhyme Time", value: "CHROME DOME" },
  { id: uuid(), category: "Rhyme Time", value: "NAMBY-PAMBY" },
  { id: uuid(), category: "Rhyme Time", value: "HASTE MAKES WASTE" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "THE RAIN IN SPAIN STAYS MAINLY IN THE PLAIN",
  },
  { id: uuid(), category: "Rhyme Time", value: "JEEPERS CREEPERS" },
  { id: uuid(), category: "Rhyme Time", value: "CHEAT SHEET" },
  { id: uuid(), category: "Rhyme Time", value: "FIGHT NIGHT" },
  { id: uuid(), category: "Rhyme Time", value: "THINK PINK" },
  { id: uuid(), category: "Rhyme Time", value: "MILES OF SMILES" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "HEY DIDDLE DIDDLE THE CAT AND THE FIDDLE",
  },
  { id: uuid(), category: "Rhyme Time", value: "FAIR SHARE" },
  { id: uuid(), category: "Rhyme Time", value: "HENNY PENNY" },
  { id: uuid(), category: "Rhyme Time", value: "SNAIL MAIL" },
  { id: uuid(), category: "Rhyme Time", value: "NIGHT-LIGHT" },
  { id: uuid(), category: "Rhyme Time", value: "WINING AND DINING" },
  { id: uuid(), category: "Rhyme Time", value: "A TON OF FUN" },
  { id: uuid(), category: "Rhyme Time", value: "SLIM AND TRIM" },
  { id: uuid(), category: "Rhyme Time", value: "DOUBLE TROUBLE" },
  { id: uuid(), category: "Rhyme Time", value: "REFUSE TO LOSE" },
  { id: uuid(), category: "Rhyme Time", value: "THE PHRASE THAT PAYS" },
  { id: uuid(), category: "Rhyme Time", value: "MEAL DEAL" },
  { id: uuid(), category: "Rhyme Time", value: "HURLY-BURLY" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "OH GIVE ME A HOME WHERE THE BUFFALO ROAM",
  },
  { id: uuid(), category: "Rhyme Time", value: "NO MUSS NO FUSS" },
  { id: uuid(), category: "Rhyme Time", value: "ABRACADABRA" },
  { id: uuid(), category: "Rhyme Time", value: "LOVEY-DOVEY" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "I'M LATE I'M LATE FOR A VERY IMPORTANT DATE",
  },
  { id: uuid(), category: "Rhyme Time", value: "GEORGIE PORGIE" },
  { id: uuid(), category: "Rhyme Time", value: "OOEY-GOOEY" },
  { id: uuid(), category: "Rhyme Time", value: "USE IT OR LOSE IT" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "THE BUTCHER THE BAKER THE CANDLESTICK MAKER",
  },
  { id: uuid(), category: "Rhyme Time", value: "BEST DRESSED" },
  { id: uuid(), category: "Rhyme Time", value: "WORK SMARTER NOT HARDER" },
  { id: uuid(), category: "Rhyme Time", value: "MUST-SEE TV" },
  { id: uuid(), category: "Rhyme Time", value: "TOUGH STUFF" },
  { id: uuid(), category: "Rhyme Time", value: "TOUGH STUFF" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "APRIL SHOWERS BRING MAY FLOWERS",
  },
  { id: uuid(), category: "Rhyme Time", value: "EVEN-STEVEN" },
  { id: uuid(), category: "Rhyme Time", value: "A LITTLE PEP IN YOUR STEP" },
  { id: uuid(), category: "Rhyme Time", value: "KNICK-KNACK PADDYWHACK" },
  { id: uuid(), category: "Rhyme Time", value: "HOCUS POCUS" },
  { id: uuid(), category: "Rhyme Time", value: "SNACK PACK" },
  { id: uuid(), category: "Rhyme Time", value: "THE NAME GAME" },
  { id: uuid(), category: "Rhyme Time", value: "LESS MESS" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "ALONG CAME A SPIDER AND SAT DOWN BESIDE HER",
  },
  { id: uuid(), category: "Rhyme Time", value: "SEE YOU LATER ALLIGATOR" },
  { id: uuid(), category: "Rhyme Time", value: "HANDY-DANDY" },
  { id: uuid(), category: "Rhyme Time", value: "SPACE CASE" },
  { id: uuid(), category: "Rhyme Time", value: "YOU SNOOZE YOU LOSE" },
  { id: uuid(), category: "Rhyme Time", value: "NEAR AND DEAR" },
  { id: uuid(), category: "Rhyme Time", value: "THAT TAKES THE CAKE" },
  { id: uuid(), category: "Rhyme Time", value: "OKEY-DOKEY" },
  { id: uuid(), category: "Rhyme Time", value: "WEAR AND TEAR" },
  { id: uuid(), category: "Rhyme Time", value: "A WHALE OF A TALE" },
  { id: uuid(), category: "Rhyme Time", value: "BACK ON TRACK" },
  { id: uuid(), category: "Rhyme Time", value: "ZIP YOUR LIP" },
  { id: uuid(), category: "Rhyme Time", value: "THRILLS AND CHILLS" },
  { id: uuid(), category: "Rhyme Time", value: "WHAT'S HOT AND WHAT'S NOT" },
  { id: uuid(), category: "Rhyme Time", value: "TWICE AS NICE" },
  { id: uuid(), category: "Rhyme Time", value: "SNUG AS A BUG" },
  { id: uuid(), category: "Rhyme Time", value: "BLESS THIS MESS" },
  { id: uuid(), category: "Rhyme Time", value: "SUPER-DUPER" },
  { id: uuid(), category: "Rhyme Time", value: "BE THERE OR BE SQUARE" },
  { id: uuid(), category: "Rhyme Time", value: "THE MOTION OF THE OCEAN" },
  { id: uuid(), category: "Rhyme Time", value: "CHIP AND DIP" },
  { id: uuid(), category: "Rhyme Time", value: "BEST OF THE REST" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "I LIKE IT I LOVE IT I WANT SOME MORE OR IT",
  },
  { id: uuid(), category: "Rhyme Time", value: "GOOD GOLLY MISS MOLLY" },
  { id: uuid(), category: "Rhyme Time", value: "EYE IN THE SKY" },
  { id: uuid(), category: "Rhyme Time", value: "TRUE-BLUE" },
  { id: uuid(), category: "Rhyme Time", value: "A FRIEND TO THE END" },
  { id: uuid(), category: "Rhyme Time", value: "SWISS MISS" },
  { id: uuid(), category: "Rhyme Time", value: "FROM MILD TO WILD" },
  { id: uuid(), category: "Rhyme Time", value: "SPRING FLING" },
  { id: uuid(), category: "Rhyme Time", value: "SNACK SHACK" },
  { id: uuid(), category: "Rhyme Time", value: "IN IT TO WIN IT" },
  { id: uuid(), category: "Rhyme Time", value: "FROM WORST TO FIRST" },
  { id: uuid(), category: "Rhyme Time", value: "TOUGH ENOUGH" },
  { id: uuid(), category: "Rhyme Time", value: "FUN IN THE SUN" },
  { id: uuid(), category: "Rhyme Time", value: "ONE TWO BUCKLE MY SHOE" },
  { id: uuid(), category: "Rhyme Time", value: "LEAN AND MEAN" },
  { id: uuid(), category: "Rhyme Time", value: "CLAIM TO FAME" },
  { id: uuid(), category: "Rhyme Time", value: "FINE WINE" },
  { id: uuid(), category: "Rhyme Time", value: "FINDER BINDER" },
  { id: uuid(), category: "Rhyme Time", value: "FLAVOR SAVER" },
  { id: uuid(), category: "Rhyme Time", value: "THRILLS & SPILLS" },
  { id: uuid(), category: "Rhyme Time", value: "SPICE & DICE" },
  { id: uuid(), category: "Rhyme Time", value: "PHONEY BALONEY" },
  { id: uuid(), category: "Rhyme Time", value: "GREAT DEBATE" },
  { id: uuid(), category: "Rhyme Time", value: "GO WITH THE FLOW" },
  { id: uuid(), category: "Rhyme Time", value: "PETER PETER PUMPKIN EATER" },
  { id: uuid(), category: "Rhyme Time", value: "THE NAME OF THE GAME" },
  { id: uuid(), category: "Rhyme Time", value: "HIGHWAYS AND BYWAYS" },
  { id: uuid(), category: "Rhyme Time", value: "GAL PAL" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "BIRDS OF A FEATHER FLOCK TOGETHER",
  },
  { id: uuid(), category: "Rhyme Time", value: "WALKING AND TALKING" },
  { id: uuid(), category: "Rhyme Time", value: "FAIR & SQUARE" },
  { id: uuid(), category: "Rhyme Time", value: "HEALTH & WEALTH" },
  { id: uuid(), category: "Rhyme Time", value: "DRESS FOR SUCCESS" },
  { id: uuid(), category: "Rhyme Time", value: "THE REAL DEAL" },
  { id: uuid(), category: "Rhyme Time", value: "SWEET TREAT" },
  { id: uuid(), category: "Rhyme Time", value: "I BEFORE E EXCEPT AFTER C" },
  { id: uuid(), category: "Rhyme Time", value: "MELLOW YELLOW" },
  { id: uuid(), category: "Rhyme Time", value: "TOGETHER FOREVER" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "OFTEN IMITATED NEVER DUPLICATED",
  },
  { id: uuid(), category: "Rhyme Time", value: "A BLAST FROM THE PAST" },
  { id: uuid(), category: "Rhyme Time", value: "PARTY HEARTY" },
  { id: uuid(), category: "Rhyme Time", value: "HOT TO TROT" },
  { id: uuid(), category: "Rhyme Time", value: "PASSING FOR FASHION" },
  { id: uuid(), category: "Rhyme Time", value: "SMART START" },
  { id: uuid(), category: "Rhyme Time", value: "WHEEL AND DEAL" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "APRIL SHOWERS BRING MAY FLOWERS",
  },
  { id: uuid(), category: "Rhyme Time", value: "FLOWER POWER" },
  { id: uuid(), category: "Rhyme Time", value: "READY FREDDY" },
  { id: uuid(), category: "Rhyme Time", value: "SAME NAME" },
  { id: uuid(), category: "Rhyme Time", value: "PEEKABOO I SEE YOU" },
  { id: uuid(), category: "Rhyme Time", value: "WINE AND DINE" },
  { id: uuid(), category: "Rhyme Time", value: "FROM ZERO TO HERO" },
  { id: uuid(), category: "Rhyme Time", value: "THE MAN WITH THE PLAN" },
  { id: uuid(), category: "Rhyme Time", value: "HIKING AND BIKING" },
  { id: uuid(), category: "Rhyme Time", value: "CREATURE FEATURE" },
  { id: uuid(), category: "Rhyme Time", value: "BLAME GAME" },
  { id: uuid(), category: "Rhyme Time", value: "CLEVER ENDEAVOR" },
  { id: uuid(), category: "Rhyme Time", value: "TONIGHT IS THE NIGHT" },
  { id: uuid(), category: "Rhyme Time", value: "DREAM TEAM" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "TALK THE TALK AND WALK THE WALK",
  },
  { id: uuid(), category: "Rhyme Time", value: "TONIGHT IS THE NIGHT" },
  { id: uuid(), category: "Rhyme Time", value: "DREAM TEAM" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "TALK THE TALK AND WALK THE WALK",
  },
  { id: uuid(), category: "Rhyme Time", value: "OUT AND ABOUT" },
  { id: uuid(), category: "Rhyme Time", value: "THE HOST WITH THE MOST" },
  { id: uuid(), category: "Rhyme Time", value: "PIE IN THE SKY" },
  { id: uuid(), category: "Rhyme Time", value: "SNAIL MAIL" },
  { id: uuid(), category: "Rhyme Time", value: "NUTRITIOUS AND DELICIOUS" },
  { id: uuid(), category: "Rhyme Time", value: "SOMEDAY SOMEWAY" },
  { id: uuid(), category: "Rhyme Time", value: "DEEP SLEEP" },
  { id: uuid(), category: "Rhyme Time", value: "LOUD CROWD" },
  { id: uuid(), category: "Rhyme Time", value: "EAGER BEAVER" },
  { id: uuid(), category: "Rhyme Time", value: "HANKY-PANKY" },
  { id: uuid(), category: "Rhyme Time", value: "YUMMY IN MY TUMMY" },
  { id: uuid(), category: "Rhyme Time", value: "LIAR LIAR PANTS ON FIRE" },
  { id: uuid(), category: "Rhyme Time", value: "I WOULD IF I COULD" },
  { id: uuid(), category: "Rhyme Time", value: "HASTE MAKES WASTE" },
  { id: uuid(), category: "Rhyme Time", value: "LOUD & PROUD" },
  { id: uuid(), category: "Rhyme Time", value: "DRESS TO IMPRESS" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "I SCREAM YOU SCREAM WE ALL SCREAM FOR ICE CREAM",
  },
  { id: uuid(), category: "Rhyme Time", value: "WILD CHILD" },
  { id: uuid(), category: "Rhyme Time", value: "PUT THE PEDAL TO THE METAL" },
  { id: uuid(), category: "Rhyme Time", value: "A HINT OF MINT" },
  { id: uuid(), category: "Rhyme Time", value: "STUDY BUDDY" },
  { id: uuid(), category: "Rhyme Time", value: "IT'S MY WAY OR THE HIGHWAY" },
  { id: uuid(), category: "Rhyme Time", value: "DOUBLE TROUBLE" },
  { id: uuid(), category: "Rhyme Time", value: "ABRACADABRA" },
  { id: uuid(), category: "Rhyme Time", value: "THE FUN HAS JUST BEGUN" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "I'M LOOKING OVER A FOUR-LEAF CLOVER",
  },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "THE TOWN SO NICE THEY NAMED IT TWICE",
  },
  { id: uuid(), category: "Rhyme Time", value: "SHOP TILL YOU DROP" },
  { id: uuid(), category: "Rhyme Time", value: "LESS STRESS" },
  { id: uuid(), category: "Rhyme Time", value: "TAKE A BREAK" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "A WONDERFUL WAY TO START THE DAY",
  },
  { id: uuid(), category: "Rhyme Time", value: "SWEETS & TREATS" },
  { id: uuid(), category: "Rhyme Time", value: "MUMBO JUMBO" },
  { id: uuid(), category: "Rhyme Time", value: "AN OLDIE BUT GOODIE" },
  { id: uuid(), category: "Rhyme Time", value: "JEEPERS CREEPERS" },
  { id: uuid(), category: "Rhyme Time", value: "FRIGHT NIGHT" },
  { id: uuid(), category: "Rhyme Time", value: "SNEAK PEEK" },
  { id: uuid(), category: "Rhyme Time", value: "MILLIONS & BILLIONS" },
  { id: uuid(), category: "Rhyme Time", value: "DESTINATION RELAXATION" },
  { id: uuid(), category: "Rhyme Time", value: "SPIN TO WIN" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "SUGAR AND SPICE AND EVERYTHING NICE",
  },
  { id: uuid(), category: "Rhyme Time", value: "WHEELING AND DEALING" },
  { id: uuid(), category: "Rhyme Time", value: "NO MUSS NO FUSS" },
  { id: uuid(), category: "Rhyme Time", value: "PLAY OF THE DAY" },
  { id: uuid(), category: "Rhyme Time", value: "LOVEY-DOVEY" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "RAIN RAIN GO AWAY COME AGAIN ANOTHER DAY",
  },
  { id: uuid(), category: "Rhyme Time", value: "LEGAL EAGLE" },
  { id: uuid(), category: "Rhyme Time", value: "CHALK TALK" },
  { id: uuid(), category: "Rhyme Time", value: "STAY AND PLAY" },
  { id: uuid(), category: "Rhyme Time", value: "MY WAY OR THE HIGHWAY" },
  { id: uuid(), category: "Rhyme Time", value: "SMITTEN WITH MY KITTEN" },
  { id: uuid(), category: "Rhyme Time", value: "TWICE AS NICE" },
  { id: uuid(), category: "Rhyme Time", value: "CLAIM TO FAME" },
  { id: uuid(), category: "Rhyme Time", value: "SEE YOU LATER ALLIGATOR" },
  { id: uuid(), category: "Rhyme Time", value: "HONEY BUNNY" },
  { id: uuid(), category: "Rhyme Time", value: "BEAT THE HEAT" },
  { id: uuid(), category: "Rhyme Time", value: "LAS VEGAS WEDDING CHAPEL" },
  { id: uuid(), category: "Rhyme Time", value: "TOUGH STUFF" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "HEY DIDDLE DIDDLE THE CAT AND THE FIDDLE",
  },
  { id: uuid(), category: "Rhyme Time", value: "LOOSE AS A GOOSE" },
  { id: uuid(), category: "Rhyme Time", value: "GO WITH THE FLOW" },
  { id: uuid(), category: "Rhyme Time", value: "WHAT'S HOT AND WHAT'S NOT" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "PUT A LITTLE PEP IN YOUR STEP",
  },
  { id: uuid(), category: "Rhyme Time", value: "SUPER-DUPER" },
  { id: uuid(), category: "Rhyme Time", value: "THE REAL DEAL" },
  { id: uuid(), category: "Rhyme Time", value: "FROM WORST TO FIRST" },
  { id: uuid(), category: "Rhyme Time", value: "THRILLS AND CHILLS" },
  { id: uuid(), category: "Rhyme Time", value: "VERY VERY SCARY" },
  { id: uuid(), category: "Rhyme Time", value: "GOOD NIGHT SLEEP TIGHT" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "FINDERS KEEPERS LOSERS WEEPERS",
  },
  { id: uuid(), category: "Rhyme Time", value: "SNUG AS A BUG IN A RUG" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "THREE LITTLE KITTENS THEY LOST THEIR MITTENS",
  },
  { id: uuid(), category: "Rhyme Time", value: "FUN IN THE SUN" },
  { id: uuid(), category: "Rhyme Time", value: "NICE PRICE" },
  { id: uuid(), category: "Rhyme Time", value: "PETER PETER PUMPKIN EATER" },
  { id: uuid(), category: "Rhyme Time", value: "BACK ON TRACK" },
  { id: uuid(), category: "Rhyme Time", value: "THE NAME OF THE GAME" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "THE RAIN IN SPAIN STAYS MAINLY IN THE PLAIN",
  },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "CHANGES IN LATITUDES CHANGES IN ATTITUDES",
  },
  { id: uuid(), category: "Rhyme Time", value: "FLAVOR SAVER" },
  { id: uuid(), category: "Rhyme Time", value: "THE MOTION OF THE OCEAN" },
  { id: uuid(), category: "Rhyme Time", value: "TOGETHER FOREVER" },
  { id: uuid(), category: "Rhyme Time", value: "YES NO MAYBE SO" },
  { id: uuid(), category: "Rhyme Time", value: "NEAR AND DEAR" },
  { id: uuid(), category: "Rhyme Time", value: "TURN THAT FROWN UPSIDE DOWN" },
  { id: uuid(), category: "Rhyme Time", value: "FAIR AND SQUARE" },
  { id: uuid(), category: "Rhyme Time", value: "A FRIEND TO THE END" },
  { id: uuid(), category: "Rhyme Time", value: "MILES OF SMILES" },
  { id: uuid(), category: "Rhyme Time", value: "PARTY HEARTY" },
  { id: uuid(), category: "Rhyme Time", value: "YOU SNOOZE YOU LOSE" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "HICKORY DICKORY DOCK THE MOUSE RAN UP THE CLOCK",
  },
  { id: uuid(), category: "Rhyme Time", value: "DRESS FOR SUCCESS" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "APRIL SHOWERS BRING MAY FLOWERS",
  },
  { id: uuid(), category: "Rhyme Time", value: "A BLAST FROM THE PAST" },
  { id: uuid(), category: "Rhyme Time", value: "PASSION FOR FASHION" },
  { id: uuid(), category: "Rhyme Time", value: "BE THERE OR BE SQUARE" },
  { id: uuid(), category: "Rhyme Time", value: "PHONEY BALONEY" },
  { id: uuid(), category: "Rhyme Time", value: "HOT TO TROT" },
  { id: uuid(), category: "Rhyme Time", value: "ONE TWO BUCKLE MY SHOE" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "AN APPLE A DAY KEEPS THE DOCTOR AWAY",
  },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "TALKING THE TALK AND WALKING THE WALK",
  },
  { id: uuid(), category: "Rhyme Time", value: "DELICIOUS AND NUTRITIOUS" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "BIRDS OF A FEATHER FLOCK TOGETHER",
  },
  { id: uuid(), category: "Rhyme Time", value: "HOCUS-POCUS" },
  { id: uuid(), category: "Rhyme Time", value: "FENDER BENDER" },
  { id: uuid(), category: "Rhyme Time", value: "HERE THERE AND EVERYWHERE" },
  { id: uuid(), category: "Rhyme Time", value: "HASTE MAKES WASTE" },
  { id: uuid(), category: "Rhyme Time", value: "COULD'VE WOULD'VE SHOULD'VE" },
  { id: uuid(), category: "Rhyme Time", value: "THE MAN WITH THE PLAN" },
  { id: uuid(), category: "Rhyme Time", value: "DEEP SLEEP" },
  { id: uuid(), category: "Rhyme Time", value: "HOLLY JOLLY" },
  { id: uuid(), category: "Rhyme Time", value: "THE BLAME GAME" },
  { id: uuid(), category: "Rhyme Time", value: "DRESS TO IMPRESS" },
  { id: uuid(), category: "Rhyme Time", value: "BLESS THIS MESS" },
  { id: uuid(), category: "Rhyme Time", value: "FIVE SIX PICK UP STICKS" },
  { id: uuid(), category: "Rhyme Time", value: "PUT THE PEDAL TO THE MEDAL" },
  { id: uuid(), category: "Rhyme Time", value: "THE DREAM TEAM" },
  { id: uuid(), category: "Rhyme Time", value: "WILD CHILD" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "COUNTING SHEEP TO FALL ASLEEP",
  },
  { id: uuid(), category: "Rhyme Time", value: "IT'S MY WAY OR THE HIGHWAY" },
  { id: uuid(), category: "Rhyme Time", value: "THE FUN HAS ALREADY BEGUN" },
  { id: uuid(), category: "Rhyme Time", value: "STAR LIGHT STAR BRIGHT" },
  { id: uuid(), category: "Rhyme Time", value: "SWEETS AND TREATS" },
  { id: uuid(), category: "Rhyme Time", value: "BAHAMA MAMA" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "I'M LOOKING OVER A FOUR-LEAF CLOVER",
  },
  { id: uuid(), category: "Rhyme Time", value: "PACK A SNACK" },
  { id: uuid(), category: "Rhyme Time", value: "SPRING FLING" },
  { id: uuid(), category: "Rhyme Time", value: "ABRACADABRA" },
  { id: uuid(), category: "Rhyme Time", value: "SNEAK PEEK" },
  { id: uuid(), category: "Rhyme Time", value: "EVEN STEVEN" },
  { id: uuid(), category: "Rhyme Time", value: "FAIR SHARE" },
  {
    id: uuid(),
    category: "Rhyme Time",
    value: "WE\u2019VE GOT IT MADE IN THE SHADE",
  },
  { id: uuid(), category: "Rhyme Time", value: "DESTINATION RELAXATION" },
  { id: uuid(), category: "Rhyme Time", value: "I HATE TO WAIT" },
]
export default puzzleList