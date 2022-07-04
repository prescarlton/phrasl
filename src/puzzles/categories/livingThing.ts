import { v4 as uuid } from "uuid"
import { Puzzle } from "../../types/Puzzle"
const puzzleList: Puzzle[] = [
  { id: uuid(), category: "Living Thing", value: "A CLUCKING HEN" },
  { id: uuid(), category: "Living Thing", value: "GIANT PANDA" },
  { id: uuid(), category: "Living Thing", value: "DESERT COYOTE" },
  { id: uuid(), category: "Living Thing", value: "GOLDEN EAGLE" },
  { id: uuid(), category: "Living Thing", value: "DOGWOOD TREE" },
  { id: uuid(), category: "Living Thing", value: "FRISKY CAT" },
  { id: uuid(), category: "Living Thing", value: "THE FAMILY DOG" },
  { id: uuid(), category: "Living Thing", value: "SHETLAND SHEEPDOG" },
  { id: uuid(), category: "Living Thing", value: "POMEGRANATE TREE" },
  { id: uuid(), category: "Living Thing", value: "KOMODO DRAGON" },
  { id: uuid(), category: "Living Thing", value: "FRENCH POODLE" },
  { id: uuid(), category: "Living Thing", value: "BORDER COLLIE" },
  { id: uuid(), category: "Living Thing", value: "JUNIPER TREE" },
  { id: uuid(), category: "Living Thing", value: "OLD ENGLISH SHEEPDOG" },
  { id: uuid(), category: "Living Thing", value: "PRICKLY PEAR CACTUS" },
  { id: uuid(), category: "Living Thing", value: "HAMMERHEAD SHARK" },
  { id: uuid(), category: "Living Thing", value: "JAGUAR" },
  { id: uuid(), category: "Living Thing", value: "VIPER" },
  { id: uuid(), category: "Living Thing", value: "LAUGHING HYENA" },
  { id: uuid(), category: "Living Thing", value: "BABOON" },
  { id: uuid(), category: "Living Thing", value: "WILD BOAR" },
  { id: uuid(), category: "Living Thing", value: "A CHARGING BULL" },
  { id: uuid(), category: "Living Thing", value: "AFRICAN VIOLET" },
  { id: uuid(), category: "Living Thing", value: "SPRINGER SPANIEL" },
  { id: uuid(), category: "Living Thing", value: "STRIPED SKUNK" },
  { id: uuid(), category: "Living Thing", value: "GREAT BLUE HERON" },
  { id: uuid(), category: "Living Thing", value: "POLO PONY" },
  { id: uuid(), category: "Living Thing", value: "MONARCH BUTTERFLY" },
  { id: uuid(), category: "Living Thing", value: "KING COBRA" },
  { id: uuid(), category: "Living Thing", value: "GRAPEFRUIT TREE" },
  { id: uuid(), category: "Living Thing", value: "VENUS FLYTRAP" },
  { id: uuid(), category: "Living Thing", value: "RACEHORSE SMARTY JONES" },
  { id: uuid(), category: "Living Thing", value: "WHITE BENGAL TIGER CLUB" },
  { id: uuid(), category: "Living Thing", value: "CALICO CAT" },
  { id: uuid(), category: "Living Thing", value: "BIRCH TREE" },
  { id: uuid(), category: "Living Thing", value: "ITALIAN CYPRESS" },
  { id: uuid(), category: "Living Thing", value: "A HIBERNATING BEAR" },
  { id: uuid(), category: "Living Thing", value: "CARIBOU" },
  { id: uuid(), category: "Living Thing", value: "ARABIAN HORSE" },
  { id: uuid(), category: "Living Thing", value: "AUSTRALIAN SHEPHERD" },
  { id: uuid(), category: "Living Thing", value: "LARGEMOUTH BASS" },
  { id: uuid(), category: "Living Thing", value: "A PET GOLDFISH" },
  { id: uuid(), category: "Living Thing", value: "BLUE WHALE" },
  { id: uuid(), category: "Living Thing", value: "YELLOW LABRADOR RETRIEVER" },
  { id: uuid(), category: "Living Thing", value: "COTTONWOOD TREE" },
  {
    id: uuid(),
    category: "Living Thing",
    value: "WEST HIGHLAND WHITE TERRIER",
  },
  { id: uuid(), category: "Living Thing", value: "WATER MOCCASIN" },
  { id: uuid(), category: "Living Thing", value: "ENDANGERED SPECIES" },
  { id: uuid(), category: "Living Thing", value: "GIRAFFE" },
  { id: uuid(), category: "Living Thing", value: "MINIATURE SCHNAUZER" },
  { id: uuid(), category: "Living Thing", value: "LILY OF THE VALLEY" },
  { id: uuid(), category: "Living Thing", value: "PEACH TREE" },
  { id: uuid(), category: "Living Thing", value: "SPIDER PLANT" },
  { id: uuid(), category: "Living Thing", value: "JACK RUSSELL TERRIER" },
  { id: uuid(), category: "Living Thing", value: "AMERICAN ALLIGATOR" },
  { id: uuid(), category: "Living Thing", value: "WILD DINGO" },
  { id: uuid(), category: "Living Thing", value: "RED-TAILED HAWK" },
  { id: uuid(), category: "Living Thing", value: "WHOOPING CRANE" },
  { id: uuid(), category: "Living Thing", value: "GRIZZLY CUB" },
  { id: uuid(), category: "Living Thing", value: "LOTUS BLOSSOM" },
  { id: uuid(), category: "Living Thing", value: "SPOTTED OWL" },
  { id: uuid(), category: "Living Thing", value: "BOA CONSTRICTOR" },
  { id: uuid(), category: "Living Thing", value: "DAFFODIL" },
  { id: uuid(), category: "Living Thing", value: "GARTER SNAKE" },
  { id: uuid(), category: "Living Thing", value: "FAWN" },
  { id: uuid(), category: "Living Thing", value: "GIANT OCTOPUS" },
  { id: uuid(), category: "Living Thing", value: "MOCKINGBIRD" },
  { id: uuid(), category: "Living Thing", value: "CALIFORNIA CONDOR" },
  { id: uuid(), category: "Living Thing", value: "CHINOOK SALMON" },
  { id: uuid(), category: "Living Thing", value: "MULBERRY TREE" },
  { id: uuid(), category: "Living Thing", value: "AUSTRALIAN CATTLE DOG" },
  { id: uuid(), category: "Living Thing", value: "BARRACUDA" },
  { id: uuid(), category: "Living Thing", value: "BLACK-EYED SUSAN" },
  { id: uuid(), category: "Living Thing", value: "HERMIT CRAB" },
  { id: uuid(), category: "Living Thing", value: "MEADOWLARK" },
  { id: uuid(), category: "Living Thing", value: "SKUNK" },
  { id: uuid(), category: "Living Thing", value: "TIGER SHARK" },
  { id: uuid(), category: "Living Thing", value: "BLOODHOUND" },
  { id: uuid(), category: "Living Thing", value: "GIANT CLAM" },
  { id: uuid(), category: "Living Thing", value: "HALIBUT" },
  { id: uuid(), category: "Living Thing", value: "A DOG CHASING ITS TAIL" },
  { id: uuid(), category: "Living Thing", value: "PALOMINO HORSE" },
  { id: uuid(), category: "Living Thing", value: "SNOWY OWL" },
  { id: uuid(), category: "Living Thing", value: "ENGLINSH LAVENDER" },
  { id: uuid(), category: "Living Thing", value: "WATCHDOG" },
  { id: uuid(), category: "Living Thing", value: "PRAYING MANTIS" },
  { id: uuid(), category: "Living Thing", value: "SNOW LEOPARD" },
  { id: uuid(), category: "Living Thing", value: "TIMBER WOLF" },
  { id: uuid(), category: "Living Thing", value: "A CUDDLY PET CHIHUAHUA" },
  { id: uuid(), category: "Living Thing", value: "BABY'S BREATH" },
  { id: uuid(), category: "Living Thing", value: "SANDPIPER" },
  { id: uuid(), category: "Living Thing", value: "RHINOCEROS" },
  { id: uuid(), category: "Living Thing", value: "HEIFER" },
  { id: uuid(), category: "Living Thing", value: "FRENCH POODLE" },
  { id: uuid(), category: "Living Thing", value: "HOUSEFLY" },
  { id: uuid(), category: "Living Thing", value: "BASSET HOUND" },
  { id: uuid(), category: "Living Thing", value: "SCOTTISH TERRIER" },
  { id: uuid(), category: "Living Thing", value: "BOSTON TERRIER" },
  { id: uuid(), category: "Living Thing", value: "HUMMINGBIRD" },
  { id: uuid(), category: "Living Thing", value: "FLAMINGO" },
  { id: uuid(), category: "Living Thing", value: "FLORIDA PANTHER" },
  { id: uuid(), category: "Living Thing", value: "SNAKE IN THE GRASS" },
  { id: uuid(), category: "Living Thing", value: "COLORADO BLUE SPRUCE" },
  { id: uuid(), category: "Living Thing", value: "AMERICAN BEAUTY ROSE" },
  { id: uuid(), category: "Living Thing", value: "POMERANIAN" },
  { id: uuid(), category: "Living Thing", value: "GERANIUM" },
  { id: uuid(), category: "Living Thing", value: "ASIAN ELEPHANT" },
  { id: uuid(), category: "Living Thing", value: "WILD STALLION" },
  { id: uuid(), category: "Living Thing", value: "HOWLER MONKEY" },
  { id: uuid(), category: "Living Thing", value: "GYPSY MOTH" },
  { id: uuid(), category: "Living Thing", value: "BULLFROG" },
  { id: uuid(), category: "Living Thing", value: "GREAT WHITE SHARK" },
  { id: uuid(), category: "Living Thing", value: "DOBERMAN PINSCHER" },
  { id: uuid(), category: "Living Thing", value: "BALD EAGLE" },
  { id: uuid(), category: "Living Thing", value: "COCKER SPANIEL" },
  { id: uuid(), category: "Living Thing", value: "QUEEN BEE" },
  { id: uuid(), category: "Living Thing", value: "GERMAN SHEPARD" },
  { id: uuid(), category: "Living Thing", value: "MALLARD DUCK" },
  { id: uuid(), category: "Living Thing", value: "DADDY LONGLEGS" },
  { id: uuid(), category: "Living Thing", value: "YELLOW CANARY" },
  { id: uuid(), category: "Living Thing", value: "RUNT OF THE LITTER" },
  { id: uuid(), category: "Living Thing", value: "AFRICAN ELEPHANT" },
  { id: uuid(), category: "Living Thing", value: "MORNING GLORY" },
  { id: uuid(), category: "Living Thing", value: "IRISH SETTER" },
  { id: uuid(), category: "Living Thing", value: "CHIMPANZEE" },
  { id: uuid(), category: "Living Thing", value: "SCOTCH PINE" },
  { id: uuid(), category: "Living Thing", value: "SNAPPING TURTLE" },
  { id: uuid(), category: "Living Thing", value: "FICUS" },
  { id: uuid(), category: "Living Thing", value: "SHETLAND SHEEPDOG" },
  { id: uuid(), category: "Living Thing", value: "GREAT HORNED OWL" },
  { id: uuid(), category: "Living Thing", value: "TALKING PARROT" },
  { id: uuid(), category: "Living Thing", value: "WHEATEN TERRIER" },
  { id: uuid(), category: "Living Thing", value: "ARMADILLO" },
  { id: uuid(), category: "Living Thing", value: "ROADRUNNER" },
  { id: uuid(), category: "Living Thing", value: "HONEYSUCKLE" },
  { id: uuid(), category: "Living Thing", value: "BUCKING BRONCO" },
  { id: uuid(), category: "Living Thing", value: "PUREBRED POODLE" },
  { id: uuid(), category: "Living Thing", value: "JACKRABBIT" },
  { id: uuid(), category: "Living Thing", value: "HEDGEHOG" },
  { id: uuid(), category: "Living Thing", value: "ROTTWEILER" },
  { id: uuid(), category: "Living Thing", value: "MINIATURE POODLE" },
  { id: uuid(), category: "Living Thing", value: "GRASSHOPPER" },
  { id: uuid(), category: "Living Thing", value: "WOODPECKER" },
  { id: uuid(), category: "Living Thing", value: "STEELHEAD TROUT" },
  { id: uuid(), category: "Living Thing", value: "PET PARAKEET" },
  { id: uuid(), category: "Living Thing", value: "STANDARD POODLE" },
  { id: uuid(), category: "Living Thing", value: "BLACK LABRADOR RETRIEVER" },
  { id: uuid(), category: "Living Thing", value: "HORNED LIZARD" },
  { id: uuid(), category: "Living Thing", value: "TURKEY VULTURE" },
  { id: uuid(), category: "Living Thing", value: "ITALIAN GREYHOUND" },
  {
    id: uuid(),
    category: "Living Thing",
    value: "A PARROT PERCHED ON A PIRATE'S SHOULDER",
  },
  { id: uuid(), category: "Living Thing", value: "ENGLISH SPRINGER SPANIEL" },
  { id: uuid(), category: "Living Thing", value: "BORDER COLLIE" },
  { id: uuid(), category: "Living Thing", value: "MIGHTY OAK" },
  {
    id: uuid(),
    category: "Living Thing",
    value: "PANDA CUB BORN IN CAPTIVITY",
  },
  { id: uuid(), category: "Living Thing", value: "FIELD MOUSE" },
  { id: uuid(), category: "Living Thing", value: "KENTUCKY BLUEGRASS" },
  { id: uuid(), category: "Living Thing", value: "A BIRD BUILDING A NEST" },
  { id: uuid(), category: "Living Thing", value: "LABRADOODLE" },
  { id: uuid(), category: "Living Thing", value: "LADYBUG" },
  { id: uuid(), category: "Living Thing", value: "A CLUCKING HEN" },
  { id: uuid(), category: "Living Thing", value: "PLAYFUL SCOTTISH TERRIER" },
  { id: uuid(), category: "Living Thing", value: "LAUGHING HYENA" },
  { id: uuid(), category: "Living Thing", value: "BEARDED COLLIE" },
  {
    id: uuid(),
    category: "Living Thing",
    value: "BASSET HOUND ASLEEP BY THE FOOT OF THE BED",
  },
  { id: uuid(), category: "Living Thing", value: "DOGWOOD TREE" },
  { id: uuid(), category: "Living Thing", value: "KING CRAB" },
  { id: uuid(), category: "Living Thing", value: "JELLYFISH" },
  { id: uuid(), category: "Living Thing", value: "CHEETAH CUB" },
  { id: uuid(), category: "Living Thing", value: "SPOTTED OWL" },
  { id: uuid(), category: "Living Thing", value: "STANDARD SCHNAUZER" },
  { id: uuid(), category: "Living Thing", value: "PINK DAISY" },
  { id: uuid(), category: "Living Thing", value: "MAN'S BEST FRIEND" },
  { id: uuid(), category: "Living Thing", value: "MOTHER HEN" },
  { id: uuid(), category: "Living Thing", value: "GREAT DANE" },
  { id: uuid(), category: "Living Thing", value: "SYCAMORE TREE" },
  { id: uuid(), category: "Living Thing", value: "JUNIPER TREE" },
  { id: uuid(), category: "Living Thing", value: "POTTED PLANT" },
  { id: uuid(), category: "Living Thing", value: "OLD ENGLISH SHEEPDOG" },
  { id: uuid(), category: "Living Thing", value: "HOWLING WOLF" },
  {
    id: uuid(),
    category: "Living Thing",
    value: "A LITTLE KITTEN PLAYING WITH A BALL OF STRING",
  },
  { id: uuid(), category: "Living Thing", value: "HARBOR SEAL" },
  { id: uuid(), category: "Living Thing", value: "CHAMPION RACEHORSE" },
  { id: uuid(), category: "Living Thing", value: "LILY OF THE VALLEY" },
  { id: uuid(), category: "Living Thing", value: "ORCHID PLANT" },
  { id: uuid(), category: "Living Thing", value: "BENGAL TIGER" },
  { id: uuid(), category: "Living Thing", value: "BRITTANY SPANIEL" },
  { id: uuid(), category: "Living Thing", value: "DESERT CACTUS" },
  {
    id: uuid(),
    category: "Living Thing",
    value: "CHOCOLATE LABRADOR RETRIEVER",
  },
  { id: uuid(), category: "Living Thing", value: "BLACK-EYED SUSAN" },
  { id: uuid(), category: "Living Thing", value: "TOY FOX TERRIER" },
  { id: uuid(), category: "Living Thing", value: "MAPLE LEAF" },
  { id: uuid(), category: "Living Thing", value: "INCHWORM" },
  { id: uuid(), category: "Living Thing", value: "BLACK WIDOW SPIDER" },
  { id: uuid(), category: "Living Thing", value: "DUCK-BILLED PLATYPUS" },
  { id: uuid(), category: "Living Thing", value: "KODIAK BEAR" },
  { id: uuid(), category: "Living Thing", value: "YOUNG PUP" },
  { id: uuid(), category: "Living Thing", value: "BLUE WHALE" },
  { id: uuid(), category: "Living Thing", value: "REACHING FOR THE STARS" },
  { id: uuid(), category: "Living Thing", value: "LEOPARD SHARK" },
  { id: uuid(), category: "Living Thing", value: "HORSESHOE CRAB" },
  { id: uuid(), category: "Living Thing", value: "EUCALYPTUS TREE" },
  { id: uuid(), category: "Living Thing", value: "MORAY EEL" },
  { id: uuid(), category: "Living Thing", value: "WHITE PELICAN" },
  { id: uuid(), category: "Living Thing", value: "SPOTTED LEOPARD" },
  { id: uuid(), category: "Living Thing", value: "TAZMANIAN DEVIL" },
  { id: uuid(), category: "Living Thing", value: "RED-TAILED HAWK" },
  { id: uuid(), category: "Living Thing", value: "SIBERIAN HUSKY" },
  { id: uuid(), category: "Living Thing", value: "GIANT SQUID" },
  { id: uuid(), category: "Living Thing", value: "GOLDEN RETRIEVER" },
  { id: uuid(), category: "Living Thing", value: "BIGHORN SHEEP" },
  { id: uuid(), category: "Living Thing", value: "MOUNTAIN BLUEBIRD" },
  { id: uuid(), category: "Living Thing", value: "MULBERRY TREE" },
  { id: uuid(), category: "Living Thing", value: "LABRADOR RETRIEVER" },
  { id: uuid(), category: "Living Thing", value: "FLYING SQUIRREL" },
  { id: uuid(), category: "Living Thing", value: "RAINBOW TROUT" },
  { id: uuid(), category: "Living Thing", value: "JACK RUSSELL TERRIER" },
  { id: uuid(), category: "Living Thing", value: "GIANT TARANTULA" },
  { id: uuid(), category: "Living Thing", value: "KOMODO DRAGON" },
  { id: uuid(), category: "Living Thing", value: "CARRIER PIGEON" },
  { id: uuid(), category: "Living Thing", value: "FRENCH POODLE" },
  { id: uuid(), category: "Living Thing", value: "CARRIER PIGEON" },
  { id: uuid(), category: "Living Thing", value: "FRENCH POODLE" },
  { id: uuid(), category: "Living Thing", value: "BASSET HOUND" },
  { id: uuid(), category: "Living Thing", value: "WILDFLOWERS" },
  { id: uuid(), category: "Living Thing", value: "EMPEROR PENGUIN" },
  { id: uuid(), category: "Living Thing", value: "WHOOPING CRANE" },
  { id: uuid(), category: "Living Thing", value: "A HIBERNATING BEAR" },
  { id: uuid(), category: "Living Thing", value: "TIMBER WOLF" },
  { id: uuid(), category: "Living Thing", value: "SAINT BERNARD" },
  { id: uuid(), category: "Living Thing", value: "IRISH SETTER" },
  { id: uuid(), category: "Living Thing", value: "BLUE IGUANA" },
  { id: uuid(), category: "Living Thing", value: "LARGEMOUTH BAGS" },
  { id: uuid(), category: "Living Thing", value: "HUMPBACK WHALE" },
  { id: uuid(), category: "Living Thing", value: "PEACH TREE" },
  { id: uuid(), category: "Living Thing", value: "SPRINGER SPANIEL" },
  { id: uuid(), category: "Living Thing", value: "PRICKLY PEAR CACTUS" },
  { id: uuid(), category: "Living Thing", value: "TIGER SHARK" },
  { id: uuid(), category: "Living Thing", value: "QUARTER HORSE" },
  { id: uuid(), category: "Living Thing", value: "GRIZZLY BEAR" },
  { id: uuid(), category: "Living Thing", value: "DOUGLAS FIR TREE" },
  { id: uuid(), category: "Living Thing", value: "TALKING PARROT" },
  { id: uuid(), category: "Living Thing", value: "WILD MUSTANG" },
  { id: uuid(), category: "Living Thing", value: "BLACK CAT" },
  { id: uuid(), category: "Living Thing", value: "GREAT HORNED OWL" },
  { id: uuid(), category: "Living Thing", value: "BABY KOALA" },
  { id: uuid(), category: "Living Thing", value: "RED SQUIRREL" },
  { id: uuid(), category: "Living Thing", value: "WOODPECKER" },
  { id: uuid(), category: "Living Thing", value: "MALLARD DUCK" },
  { id: uuid(), category: "Living Thing", value: "PET HAMSTER" },
  { id: uuid(), category: "Living Thing", value: "BALD EAGLE" },
  { id: uuid(), category: "Living Thing", value: "PALOMINO HORSE" },
  { id: uuid(), category: "Living Thing", value: "ALASKAN SALMON" },
  { id: uuid(), category: "Living Thing", value: "PINK ORCHID" },
  { id: uuid(), category: "Living Thing", value: "HONEYSUCKLE" },
  { id: uuid(), category: "Living Thing", value: "JACKRABBIT" },
  { id: uuid(), category: "Living Thing", value: "SCOTTISH TERRIER" },
  { id: uuid(), category: "Living Thing", value: "MAN'S BEST FRIEND" },
  { id: uuid(), category: "Living Thing", value: "ENGLISH SPRINGER SPANIEL" },
  { id: uuid(), category: "Living Thing", value: "WHITE CARNATIONS" },
  { id: uuid(), category: "Living Thing", value: "BROWN PELICAN" },
  { id: uuid(), category: "Living Thing", value: "SYCAMORE TREE" },
  {
    id: uuid(),
    category: "Living Thing",
    value: "CHOCOLATE LABRADOR RETRIEVER",
  },
  { id: uuid(), category: "Living Thing", value: "BAMBOO PLANT" },
  { id: uuid(), category: "Living Thing", value: "YOUNG CALF" },
  { id: uuid(), category: "Living Thing", value: "ARMADILLO" },
  { id: uuid(), category: "Living Thing", value: "WHALE SHARK" },
  { id: uuid(), category: "Living Thing", value: "COCKER SPANIEL" },
  { id: uuid(), category: "Living Thing", value: "SNOW LEOPARD" },
  { id: uuid(), category: "Living Thing", value: "A DOG CHASING ITS TAIL" },
  { id: uuid(), category: "Living Thing", value: "HORSESHOE CRAB" },
  { id: uuid(), category: "Living Thing", value: "OLD ENGLISH SHEEPDOG" },
  { id: uuid(), category: "Living Thing", value: "BOSTON TERRIER" },
  { id: uuid(), category: "Living Thing", value: "BLACK-EYED SUSAN" },
  { id: uuid(), category: "Living Thing", value: "BEARDED COLLIE" },
  { id: uuid(), category: "Living Thing", value: "DESERT COYOTE" },
  { id: uuid(), category: "Living Thing", value: "MOUNTAIN BLUEBIRD" },
  { id: uuid(), category: "Living Thing", value: "GRIZZLY BEAR CUB" },
  { id: uuid(), category: "Living Thing", value: "PREYING MANTIS" },
  { id: uuid(), category: "Living Thing", value: "FLORIDA PANTHER" },
  { id: uuid(), category: "Living Thing", value: "ENGLISH BULLDOG" },
  { id: uuid(), category: "Living Thing", value: "WATCHDOG" },
  { id: uuid(), category: "Living Thing", value: "PLAYFUL GREAT DANE" },
  { id: uuid(), category: "Living Thing", value: "MOUNTAIN LION" },
  { id: uuid(), category: "Living Thing", value: "SPOTTED OWL" },
  { id: uuid(), category: "Living Thing", value: "SAINT BERNARD" },
  { id: uuid(), category: "Living Thing", value: "MULBERRY TREE" },
  { id: uuid(), category: "Living Thing", value: "GRAPEFRUIT TREE" },
  { id: uuid(), category: "Living Thing", value: "RAINBOW TROUT" },
  { id: uuid(), category: "Living Thing", value: "BORDER COLLIE" },
  { id: uuid(), category: "Living Thing", value: "TIMBER WOLF" },
  { id: uuid(), category: "Living Thing", value: "IRISH SETTER" },
  { id: uuid(), category: "Living Thing", value: "POLAR BEAR CUB" },
  { id: uuid(), category: "Living Thing", value: "GOLDEN RETRIEVER" },
  { id: uuid(), category: "Living Thing", value: "PET CHIHUAHUA" },
  { id: uuid(), category: "Living Thing", value: "A PIRATE'S PARROT" },
  {
    id: uuid(),
    category: "Living Thing",
    value: "A KITTEN PLAYING WITH A BALL OF STRING",
  },
  { id: uuid(), category: "Living Thing", value: "SHRUBBERY" },
  { id: uuid(), category: "Living Thing", value: "SPRINGER SPANIEL" },
  { id: uuid(), category: "Living Thing", value: "BASSET HOUND" },
  { id: uuid(), category: "Living Thing", value: "SNAPPING TURTLE" },
  { id: uuid(), category: "Living Thing", value: "GRIZZLY BEAR" },
  { id: uuid(), category: "Living Thing", value: "SIBERIAN HUSKY" },
  { id: uuid(), category: "Living Thing", value: "WOODPECKER" },
  { id: uuid(), category: "Living Thing", value: "YOUNG CUB" },
  {
    id: uuid(),
    category: "Living Thing",
    value: "A PALM TREE SWAYING IN THE BREEZE",
  },
]
export default puzzleList
