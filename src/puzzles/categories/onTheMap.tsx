import { v4 as uuid } from "uuid"
import { Puzzle } from "../../types/Puzzle"

const puzzleList: Puzzle[] = [
  { id: uuid(), category: "On the Map", value: "EASTERN EUROPE" },
  { id: uuid(), category: "On the Map", value: "WICHITA" },
  { id: uuid(), category: "On the Map", value: "SHENANDOAH RIVER" },
  { id: uuid(), category: "On the Map", value: "THE POTOMAC RIVER" },
  { id: uuid(), category: "On the Map", value: "BERLIN GERMANY" },
  { id: uuid(), category: "On the Map", value: "HELSINKI FINLAND" },
  { id: uuid(), category: "On the Map", value: "GULF OF CALIFORNIA" },
  {
    id: uuid(),
    category: "On the Map",
    value: "CAPE COD NATIONAL SEASHORE",
  },
  { id: uuid(), category: "On the Map", value: "SAGINAW" },
  { id: uuid(), category: "On the Map", value: "MOJAVE DESERT" },
  { id: uuid(), category: "On the Map", value: "BOWLING GREEN KETUCKY" },
  { id: uuid(), category: "On the Map", value: "THE CHARLES RIVER" },
  { id: uuid(), category: "On the Map", value: "HAMBURG" },
  { id: uuid(), category: "On the Map", value: "FARGO NORTH DAKOTA" },
  { id: uuid(), category: "On the Map", value: "SAN ANTONIO" },
  { id: uuid(), category: "On the Map", value: "SHREVEPORT LOUISIANA" },
  { id: uuid(), category: "On the Map", value: "URUGUAY" },
  { id: uuid(), category: "On the Map", value: "BRUSSELS BELGIUM" },
  {
    id: uuid(),
    category: "On the Map",
    value: "THE CONTINENT OF ANTARCTICA",
  },
  { id: uuid(), category: "On the Map", value: "GUADALAJARA" },
  { id: uuid(), category: "On the Map", value: "THE RIO GRANDE VALLEY" },
  { id: uuid(), category: "On the Map", value: "OKLAHOMA CITY" },
  { id: uuid(), category: "On the Map", value: "TROPIC OF CAPRICORN" },
  { id: uuid(), category: "On the Map", value: "FORT LAUDERDALE" },
  { id: uuid(), category: "On the Map", value: "THE SOUTH POLE" },
  { id: uuid(), category: "On the Map", value: "OSHKOSH" },
  { id: uuid(), category: "On the Map", value: "TUPELO MISSISSIPPI" },
  { id: uuid(), category: "On the Map", value: "VANCOUVER ISLAND" },
  { id: uuid(), category: "On the Map", value: "THE ITALIAN ALPS" },
  { id: uuid(), category: "On the Map", value: "GRAND RAPIDS MICHIGAN" },
  { id: uuid(), category: "On the Map", value: "LAKE HAVASU" },
  { id: uuid(), category: "On the Map", value: "HOBOKEN" },
  { id: uuid(), category: "On the Map", value: "THE YUKON TERRITORY" },
  { id: uuid(), category: "On the Map", value: "ATHENS GREECE" },
  { id: uuid(), category: "On the Map", value: "BALTIMORE MARYLAND" },
  { id: uuid(), category: "On the Map", value: "CONCORD NEW HAMPSHIRE" },
  { id: uuid(), category: "On the Map", value: "THE SOUTH CHINA SEA" },
  {
    id: uuid(),
    category: "On the Map",
    value: "ST. THOMAS UNITED STATES VIRGIN ISLANDS",
  },
  { id: uuid(), category: "On the Map", value: "IOWA CITY" },
  { id: uuid(), category: "On the Map", value: "EDMONTON" },
  { id: uuid(), category: "On the Map", value: "THE WEST INDIES" },
  { id: uuid(), category: "On the Map", value: "PARK CITY UTAH" },
  { id: uuid(), category: "On the Map", value: "MOUNT BALDY" },
  { id: uuid(), category: "On the Map", value: "FLORIDA KEYS" },
  { id: uuid(), category: "On the Map", value: "SOUTHEAST ASIA" },
  {
    id: uuid(),
    category: "On the Map",
    value: "CHAMPAGNE REGION OF FRANCE",
  },
  { id: uuid(), category: "On the Map", value: "KANSAS CITY MISSOURI" },
  { id: uuid(), category: "On the Map", value: "ISLAND OF MALTA" },
  { id: uuid(), category: "On the Map", value: "THE ANDES MOUNTAINS" },
  { id: uuid(), category: "On the Map", value: "DENVER COLORADO" },
  {
    id: uuid(),
    category: "On the Map",
    value: "PORTLAND OREGON & PORTLAND MAINE",
  },
  { id: uuid(), category: "On the Map", value: "THE ATLANTIC COAST" },
  { id: uuid(), category: "On the Map", value: "BLUE RIDGE MOUNTAINS" },
  { id: uuid(), category: "On the Map", value: "MISSOULA MONTANA" },
  { id: uuid(), category: "On the Map", value: "KNOXVILLE TENNESSEE" },
  { id: uuid(), category: "On the Map", value: "SAN JUAN PUERTO RICO" },
  { id: uuid(), category: "On the Map", value: "ATLANTA GEORGIA" },
  { id: uuid(), category: "On the Map", value: "CHESAPEAKE BAY" },
  { id: uuid(), category: "On the Map", value: "LAUGHLIN NEVADA" },
  {
    id: uuid(),
    category: "On the Map",
    value: "THE GRAND CANAL IN VENICE",
  },
  { id: uuid(), category: "On the Map", value: "BANGLADESH" },
  { id: uuid(), category: "On the Map", value: "REPUBLIC OF IRELAND" },
  { id: uuid(), category: "On the Map", value: "GULF OF ALASKA" },
  { id: uuid(), category: "On the Map", value: "TACOMA WASHINGTON" },
  { id: uuid(), category: "On the Map", value: "TELLURIDE COLORADO" },
  { id: uuid(), category: "On the Map", value: "DULUTH" },
  { id: uuid(), category: "On the Map", value: "RAPID CITY SOUTH DAKOTA" },
  { id: uuid(), category: "On the Map", value: "WEST VIRGINIA" },
  { id: uuid(), category: "On the Map", value: "BOISE IDAHO" },
  { id: uuid(), category: "On the Map", value: "AMSTERDAM" },
  { id: uuid(), category: "On the Map", value: "TORONTO ONTARIO CANADA" },
  { id: uuid(), category: "On the Map", value: "KALAMAZOO MICHIGAN" },
  { id: uuid(), category: "On the Map", value: "CLEARWATER FLORIDA" },
  { id: uuid(), category: "On the Map", value: "MOUNT VESUVIUS" },
  { id: uuid(), category: "On the Map", value: "OMAHA NEBRASKA" },
  { id: uuid(), category: "On the Map", value: "KITTY HAWK" },
  {
    id: uuid(),
    category: "On the Map",
    value: "THE SIERRA NEVADA MOUNTAINS",
  },
  { id: uuid(), category: "On the Map", value: "PEORIA ILLINOIS" },
  { id: uuid(), category: "On the Map", value: "STILLWATER OKLAHOMA" },
  { id: uuid(), category: "On the Map", value: "CASPER WYOMING" },
  { id: uuid(), category: "On the Map", value: "THE AMAZON & NILE RIVERS" },
  { id: uuid(), category: "On the Map", value: "THE UNITED KINGDOM" },
  { id: uuid(), category: "On the Map", value: "CATALINA ISLAND" },
  { id: uuid(), category: "On the Map", value: "THE BAJA PENINSULA" },
  { id: uuid(), category: "On the Map", value: "THE CANADIAN ROCKIES" },
  { id: uuid(), category: "On the Map", value: "PENSACOLA FLORIDA" },
  { id: uuid(), category: "On the Map", value: "THE GREAT LAKES" },
  { id: uuid(), category: "On the Map", value: "MISSISSIPPI RIVER" },
  { id: uuid(), category: "On the Map", value: "THE GALAPAGOS ISLANDS" },
  { id: uuid(), category: "On the Map", value: "ORANGE COUNTY CALIFORNIA" },
  { id: uuid(), category: "On the Map", value: "MINNEAPOLIS MINNESOTA" },
  { id: uuid(), category: "On the Map", value: "CHARLOTTE NORTH CAROLINA" },
]
export default puzzleList