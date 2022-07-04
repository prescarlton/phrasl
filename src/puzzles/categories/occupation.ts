import { v4 as uuid } from "uuid"
import { Puzzle } from "../../types/Puzzle"
const puzzleList: Puzzle[] = [
  { id: uuid(), category: "Occupation", value: "SYNDICATED COLUMNIST" },
  { id: uuid(), category: "Occupation", value: "GAME SHOW HOST" },
  { id: uuid(), category: "Occupation", value: "FIRST-GRADE TEACHER" },
  { id: uuid(), category: "Occupation", value: "MAGICIAN'S ASSISTANT" },
  { id: uuid(), category: "Occupation", value: "SHORT-ORDER COOK" },
  { id: uuid(), category: "Occupation", value: "LION TAMER" },
  { id: uuid(), category: "Occupation", value: "CAMPAIGN MANAGER" },
  { id: uuid(), category: "Occupation", value: "ACCOUNT EXECUTIVE" },
  { id: uuid(), category: "Occupation", value: "FEDERAL MEDIATOR" },
  { id: uuid(), category: "Occupation", value: "MAYOR" },
  { id: uuid(), category: "Occupation", value: "TOUR GUIDE" },
  { id: uuid(), category: "Occupation", value: "PRIVATE EYE" },
  { id: uuid(), category: "Occupation", value: "RESEARCH CHEMIST" },
  { id: uuid(), category: "Occupation", value: "COSTUME DESIGNER" },
  { id: uuid(), category: "Occupation", value: "MARKETING CONSULTANT" },
  { id: uuid(), category: "Occupation", value: "NEWS ANCHOR" },
  { id: uuid(), category: "Occupation", value: "NEWSPAPER PUBLISHER" },
  { id: uuid(), category: "Occupation", value: "MILKMAN" },
  {
    id: uuid(),
    category: "Occupation",
    value: "DOCTOR OF VETERINARY MEDICINE",
  },
  { id: uuid(), category: "Occupation", value: "DEPUTY SHERIFF" },
  { id: uuid(), category: "Occupation", value: "UNIVERSITY PRESIDENT" },
  { id: uuid(), category: "Occupation", value: "BASKETBALL REFEREE" },
  { id: uuid(), category: "Occupation", value: "AUTOMOBILE MECHANIC" },
  { id: uuid(), category: "Occupation", value: "MAYOR" },
  { id: uuid(), category: "Occupation", value: "RABBI" },
  { id: uuid(), category: "Occupation", value: "POLITICAL CONSULTANT" },
  { id: uuid(), category: "Occupation", value: "POLICEMAN" },
  { id: uuid(), category: "Occupation", value: "FIRE MARSHAL" },
  { id: uuid(), category: "Occupation", value: "VARSITY FOOTBALL COACH" },
  { id: uuid(), category: "Occupation", value: "SKI INSTURCTOR" },
  { id: uuid(), category: "Occupation", value: "HUMAN RESOURCES MANAGER" },
  { id: uuid(), category: "Occupation", value: "BOOK REVIEWER" },
  { id: uuid(), category: "Occupation", value: "PODIATRIST" },
  { id: uuid(), category: "Occupation", value: "NIGHT WATCHMAN" },
  { id: uuid(), category: "Occupation", value: "ACCOUNTS PAYABLE CLERK" },
  { id: uuid(), category: "Occupation", value: "NUCLEAR PHYSICIST" },
  { id: uuid(), category: "Occupation", value: "UNIVERSITY CHANCELLOR" },
  { id: uuid(), category: "Occupation", value: "PASTRY CHEF" },
  { id: uuid(), category: "Occupation", value: "INTERIOR DESIGNER" },
  { id: uuid(), category: "Occupation", value: "MAGAZINE EDITOR" },
  { id: uuid(), category: "Occupation", value: "INNKEEPER" },
  { id: uuid(), category: "Occupation", value: "BALLET INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "RETAIL STORE MANAGER" },
  { id: uuid(), category: "Occupation", value: "TAILOR" },
  { id: uuid(), category: "Occupation", value: "COMPUTER SOFTWARE ENGINEER" },
  { id: uuid(), category: "Occupation", value: "CABLE TV INSTALLER" },
  { id: uuid(), category: "Occupation", value: "FINANCIAL PLANNER" },
  { id: uuid(), category: "Occupation", value: "NATIONAL PARK RANGER" },
  { id: uuid(), category: "Occupation", value: "BOOKKEEPER" },
  { id: uuid(), category: "Occupation", value: "JOCKEY" },
  { id: uuid(), category: "Occupation", value: "YOGA INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "CRUISE DIRECTOR" },
  { id: uuid(), category: "Occupation", value: "STREET SWEEPER" },
  { id: uuid(), category: "Occupation", value: "SHORT-ORDER COOK" },
  { id: uuid(), category: "Occupation", value: "FREELANCE JOURNALIST" },
  { id: uuid(), category: "Occupation", value: "COMPUTER PROGRAMMER" },
  { id: uuid(), category: "Occupation", value: "POLITICAL CONSULTANT" },
  { id: uuid(), category: "Occupation", value: "FINE ART APPRAISER" },
  { id: uuid(), category: "Occupation", value: "POSTAL WORKER" },
  { id: uuid(), category: "Occupation", value: "BANK LOAN OFFICER" },
  { id: uuid(), category: "Occupation", value: "EXECUTIVE ASSISTANT" },
  { id: uuid(), category: "Occupation", value: "FITNESS EXPERT" },
  { id: uuid(), category: "Occupation", value: "MASSAGE THERAPIST" },
  { id: uuid(), category: "Occupation", value: "COMMERCIAL FISHERMAN" },
  { id: uuid(), category: "Occupation", value: "FLYING INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "AIRLINE CO-PILOT" },
  { id: uuid(), category: "Occupation", value: "TOOL AND DIE MAKER" },
  { id: uuid(), category: "Occupation", value: "LOCAL WEATHERMAN" },
  { id: uuid(), category: "Occupation", value: "MAGAZINE PUBLISHER" },
  { id: uuid(), category: "Occupation", value: "CONCERT PROMOTER" },
  { id: uuid(), category: "Occupation", value: "GAS STATION ATTENDANT" },
  { id: uuid(), category: "Occupation", value: "DEPUTY SHERIFF" },
  { id: uuid(), category: "Occupation", value: "ANTIQUE FURNITURE RESTORER" },
  { id: uuid(), category: "Occupation", value: "SKI LIFT OPERATOR" },
  { id: uuid(), category: "Occupation", value: "TOY STORE OWNER" },
  { id: uuid(), category: "Occupation", value: "CONVENIENCE STORE MANAGER" },
  { id: uuid(), category: "Occupation", value: "FASHION DESIGNER" },
  { id: uuid(), category: "Occupation", value: "ANTIQUE DEALER" },
  { id: uuid(), category: "Occupation", value: "PAYROLL CLERK" },
  { id: uuid(), category: "Occupation", value: "SOFTWARE ENGINEER" },
  { id: uuid(), category: "Occupation", value: "ADVERTISING COPYWRITER" },
  { id: uuid(), category: "Occupation", value: "REAL ESTATE AGENT" },
  { id: uuid(), category: "Occupation", value: "HOSPITAL ORDERLY" },
  { id: uuid(), category: "Occupation", value: "MAGICIAN'S ASSISTANT" },
  { id: uuid(), category: "Occupation", value: "NASCAR DRIVER" },
  { id: uuid(), category: "Occupation", value: "ATTORNEY GENERAL" },
  { id: uuid(), category: "Occupation", value: "TENNIS INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "CHIMNEY SWEEP" },
  { id: uuid(), category: "Occupation", value: "EVENT PLANNER" },
  { id: uuid(), category: "Occupation", value: "BANQUET WAITER" },
  { id: uuid(), category: "Occupation", value: "SIDELINE REPORTER" },
  { id: uuid(), category: "Occupation", value: "PARKING LOT ATTENDANT" },
  { id: uuid(), category: "Occupation", value: "STUNT PILOT" },
  { id: uuid(), category: "Occupation", value: "TRAVEL AGENT" },
  { id: uuid(), category: "Occupation", value: "LIMOUSINE DRIVER" },
  { id: uuid(), category: "Occupation", value: "FINANCIAL ADVISOR" },
  { id: uuid(), category: "Occupation", value: "AIR FORCE RECRUITER" },
  { id: uuid(), category: "Occupation", value: "VIDEO GAME DESIGNER" },
  { id: uuid(), category: "Occupation", value: "PASTRY CHEF" },
  { id: uuid(), category: "Occupation", value: "FINANCIAL ANALYST" },
  { id: uuid(), category: "Occupation", value: "INSURANCE ADJUSTER" },
  { id: uuid(), category: "Occupation", value: "MUSEUM CURATOR" },
  { id: uuid(), category: "Occupation", value: "TAVERN OWNER" },
  { id: uuid(), category: "Occupation", value: "MOUNTED POLICEMAN" },
  { id: uuid(), category: "Occupation", value: "LICENSED DIETICIAN" },
  { id: uuid(), category: "Occupation", value: "DOG GROOMER" },
  { id: uuid(), category: "Occupation", value: "PATENT ATTORNEY" },
  { id: uuid(), category: "Occupation", value: "SAFARI GUIDE" },
  { id: uuid(), category: "Occupation", value: "TREE SURGEON" },
  { id: uuid(), category: "Occupation", value: "EMERGENCY MEDICAL TECHNICIAN" },
  { id: uuid(), category: "Occupation", value: "RESTAURANT HOSTESS" },
  { id: uuid(), category: "Occupation", value: "BLACKJACK DEALER" },
  { id: uuid(), category: "Occupation", value: "ACADEMIC ADVISOR" },
  { id: uuid(), category: "Occupation", value: "TATTOO ARTIST" },
  { id: uuid(), category: "Occupation", value: "CERTIFIED YOGA INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "TV NEWS ANCHOR" },
  { id: uuid(), category: "Occupation", value: "COURTROOM SKETCH ARTIST" },
  { id: uuid(), category: "Occupation", value: "COMPUTER CONSULTANT" },
  { id: uuid(), category: "Occupation", value: "OPEN WATER SCUBA INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "MARKETING MANAGER" },
  { id: uuid(), category: "Occupation", value: "X-RAY TECHNICIAN" },
  { id: uuid(), category: "Occupation", value: "PHYSICAL THERAPIST" },
  {
    id: uuid(),
    category: "Occupation",
    value: "PRIME MINISTER OF NEW ZEALAND",
  },
  { id: uuid(), category: "Occupation", value: "ASSOCIATE PROFESSOR" },
  { id: uuid(), category: "Occupation", value: "EQUIPMENT MANAGER" },
  { id: uuid(), category: "Occupation", value: "FURNITURE DESIGNER" },
  { id: uuid(), category: "Occupation", value: "COLLEGE ADMISSIONS OFFICER" },
  { id: uuid(), category: "Occupation", value: "ASSISTANT PRINCIPAL" },
  { id: uuid(), category: "Occupation", value: "PHYSICAL EDUCATION TEACHER" },
  { id: uuid(), category: "Occupation", value: "PUBLIC HEALTH INSPECTOR" },
  { id: uuid(), category: "Occupation", value: "SHEEP RANCHER" },
  { id: uuid(), category: "Occupation", value: "SNOWPLOW DRIVER" },
  { id: uuid(), category: "Occupation", value: "MASTER CHOCOLATE MAKER" },
  { id: uuid(), category: "Occupation", value: "INNKEEPER" },
  { id: uuid(), category: "Occupation", value: "COSMETIC SURGEON" },
  { id: uuid(), category: "Occupation", value: "STOCKBROKER" },
  { id: uuid(), category: "Occupation", value: "MAKEUP ARTIST" },
  { id: uuid(), category: "Occupation", value: "POLITICAL POLLSTER" },
  { id: uuid(), category: "Occupation", value: "FRY COOK" },
  { id: uuid(), category: "Occupation", value: "PRIVATE TUTOR" },
  { id: uuid(), category: "Occupation", value: "BAGGAGE HANDLER" },
  { id: uuid(), category: "Occupation", value: "TV COMMERCIAL DIRECTOR" },
  { id: uuid(), category: "Occupation", value: "OPTOMETRIST" },
  { id: uuid(), category: "Occupation", value: "GRAPHIC ARTIST" },
  { id: uuid(), category: "Occupation", value: "SINGING WAITER" },
  { id: uuid(), category: "Occupation", value: "WHOLESALE FLORIST" },
  { id: uuid(), category: "Occupation", value: "MERCHANT MARINE" },
  { id: uuid(), category: "Occupation", value: "CHIEF OF SURGERY" },
  { id: uuid(), category: "Occupation", value: "ADVERTISING EXECUTIVE" },
  { id: uuid(), category: "Occupation", value: "SHORT-ORDER COOK" },
  { id: uuid(), category: "Occupation", value: "RANCH MANAGER" },
  { id: uuid(), category: "Occupation", value: "NEWSPAPER COLUMNIST" },
  { id: uuid(), category: "Occupation", value: "CATERING MANAGER" },
  { id: uuid(), category: "Occupation", value: "POLICE DISPATCHER" },
  { id: uuid(), category: "Occupation", value: "LIVE-IN NANNY" },
  { id: uuid(), category: "Occupation", value: "ATHLETIC SHOE DESIGNER" },
  { id: uuid(), category: "Occupation", value: "FOREST RANGER" },
  { id: uuid(), category: "Occupation", value: "ELECTRICAL ENGINEER" },
  { id: uuid(), category: "Occupation", value: "MANICURIST" },
  { id: uuid(), category: "Occupation", value: "UNIVERSITY PRESIDENT" },
  {
    id: uuid(),
    category: "Occupation",
    value: "GENERAL MANAGER OF A PRO SPORTS TEAM",
  },
  { id: uuid(), category: "Occupation", value: "ELEVATOR OPERATOR" },
  { id: uuid(), category: "Occupation", value: "HIGH SCHOOL ART TEACHER" },
  { id: uuid(), category: "Occupation", value: "LETTER CARRIER" },
  { id: uuid(), category: "Occupation", value: "LAB TECHNICIAN" },
  { id: uuid(), category: "Occupation", value: "AEROSPACE ENGINEER" },
  { id: uuid(), category: "Occupation", value: "BASKETBALL COACH" },
  {
    id: uuid(),
    category: "Occupation",
    value: "UNIFORMED VALET PARKING ATTENDANT",
  },
  { id: uuid(), category: "Occupation", value: "OPTICIAN" },
  { id: uuid(), category: "Occupation", value: "CARPET INSTALLER" },
  {
    id: uuid(),
    category: "Occupation",
    value: "ARTISTIC DIRECTOR OF A BALLET COMANY",
  },
  { id: uuid(), category: "Occupation", value: "GRAPHIC DESIGNER" },
  { id: uuid(), category: "Occupation", value: "PEDIACTRIC DENTIST" },
  { id: uuid(), category: "Occupation", value: "DAIRY FARMER" },
  { id: uuid(), category: "Occupation", value: "LONG-HAUL TRUCKER" },
  { id: uuid(), category: "Occupation", value: "UNITED STATES SENATOR" },
  { id: uuid(), category: "Occupation", value: "SUSPENSE NOVELIST" },
  { id: uuid(), category: "Occupation", value: "COMPUTER PROGRAMMER" },
  { id: uuid(), category: "Occupation", value: "TICKET BROKER" },
  { id: uuid(), category: "Occupation", value: "FREELANCE JOURNALIST" },
  { id: uuid(), category: "Occupation", value: "MORTGAGE BROKER" },
  {
    id: uuid(),
    category: "Occupation",
    value: "MANAGING EDITOR OF A WEEKLY MAGAZINE",
  },
  { id: uuid(), category: "Occupation", value: "MECHANICAL ENGINEER" },
  { id: uuid(), category: "Occupation", value: "FURNITURE MAKER" },
  { id: uuid(), category: "Occupation", value: "ORTHOPEDIC SURGEON" },
  { id: uuid(), category: "Occupation", value: "WEDDING COORDINATOR" },
  { id: uuid(), category: "Occupation", value: "DANCE INSTURCTOR" },
  { id: uuid(), category: "Occupation", value: "CONVENIENCE STORE MANAGER" },
  { id: uuid(), category: "Occupation", value: "POLICE LIEUTENANT" },
  { id: uuid(), category: "Occupation", value: "CERTIFIED AUTO MECHANIC" },
  { id: uuid(), category: "Occupation", value: "INDEPENDENT INSURANCE AGENT" },
  { id: uuid(), category: "Occupation", value: "SECURTIY GUARD" },
  { id: uuid(), category: "Occupation", value: "BROADCAST JOURNALIST" },
  { id: uuid(), category: "Occupation", value: "LANDSCAPE ARCHITECT" },
  { id: uuid(), category: "Occupation", value: "FERRY CAPTAIN" },
  { id: uuid(), category: "Occupation", value: "SIGN PAINTER" },
  { id: uuid(), category: "Occupation", value: "FORKLIFT OPERATOR" },
  { id: uuid(), category: "Occupation", value: "EVENT COORDINATOR" },
  { id: uuid(), category: "Occupation", value: "SPEECH THERAPIST" },
  { id: uuid(), category: "Occupation", value: "GROCERY BAGGER" },
  { id: uuid(), category: "Occupation", value: "STRUCTURAL ENGINEER" },
  {
    id: uuid(),
    category: "Occupation",
    value: "PROFESSOR OF EUROPEAN HISTORY",
  },
  { id: uuid(), category: "Occupation", value: "WEBMASTER" },
  { id: uuid(), category: "Occupation", value: "STOCK MARKET ANALYST" },
  { id: uuid(), category: "Occupation", value: "COPY EDITOR" },
  { id: uuid(), category: "Occupation", value: "GENERAL CONTRACTOR" },
  { id: uuid(), category: "Occupation", value: "STADIUM BEER VENDOR" },
  { id: uuid(), category: "Occupation", value: "FOREIGN AMBASSADOR" },
  { id: uuid(), category: "Occupation", value: "MARINE BIOLOGIST" },
  { id: uuid(), category: "Occupation", value: "HORSE TRAINER" },
  { id: uuid(), category: "Occupation", value: "RADIOLOGIST" },
  { id: uuid(), category: "Occupation", value: "COLLEGE PRESIDENT" },
  { id: uuid(), category: "Occupation", value: "FITNESS TRAINER" },
  { id: uuid(), category: "Occupation", value: "SUPERMARKET MANAGER" },
  { id: uuid(), category: "Occupation", value: "BUS DRIVER" },
  { id: uuid(), category: "Occupation", value: "DENTAL HYGENIST" },
  { id: uuid(), category: "Occupation", value: "CERTIFIED PUBLIC ACCOUNTANT" },
  { id: uuid(), category: "Occupation", value: "OFFICE MANAGER" },
  { id: uuid(), category: "Occupation", value: "CHIEF FINANCIAL OFFICE" },
  { id: uuid(), category: "Occupation", value: "CHEMISTRY TEACHER" },
  { id: uuid(), category: "Occupation", value: "COURT BAILIFF" },
  { id: uuid(), category: "Occupation", value: "REAL ESTATE BROKER" },
  { id: uuid(), category: "Occupation", value: "HANDWRITING ANALYST" },
  { id: uuid(), category: "Occupation", value: "CHEMICAL ENGINEER" },
  { id: uuid(), category: "Occupation", value: "ATHLETIC TRAINER" },
  { id: uuid(), category: "Occupation", value: "COMPUTER SYSTEMS ANALYST" },
  { id: uuid(), category: "Occupation", value: "BOOKKEEPER" },
  { id: uuid(), category: "Occupation", value: "COSTUME DESIGNER" },
  { id: uuid(), category: "Occupation", value: "DRAMA CRITIC" },
  { id: uuid(), category: "Occupation", value: "UNITED NATIONS INTERPRETER" },
  { id: uuid(), category: "Occupation", value: "BIKE MESSENGER" },
  { id: uuid(), category: "Occupation", value: "PUBLIC DEFENDER" },
  { id: uuid(), category: "Occupation", value: "MEDICAL RESEARCHER" },
  { id: uuid(), category: "Occupation", value: "CAREER COUNSELOR" },
  { id: uuid(), category: "Occupation", value: "FAMILY THERAPIST" },
  { id: uuid(), category: "Occupation", value: "MEDICAL ASSISTANT" },
  { id: uuid(), category: "Occupation", value: "SHOPPING MALL SECURITY GUARD" },
  { id: uuid(), category: "Occupation", value: "DIRECTOR OF PUBLIC RELATIONS" },
  { id: uuid(), category: "Occupation", value: "REAL ESTATE DEVELOPER" },
  { id: uuid(), category: "Occupation", value: "CHIEF OF POLICE" },
  { id: uuid(), category: "Occupation", value: "HIGH SCHOOL CUSTODIAN" },
  { id: uuid(), category: "Occupation", value: "SALES SUPERVISOR" },
  { id: uuid(), category: "Occupation", value: "MOVIE THEATER MANAGER" },
  { id: uuid(), category: "Occupation", value: "COLLEGE DEAN" },
  {
    id: uuid(),
    category: "Occupation",
    value: "EXECUTIVE VICE PRESIDENT OF A BANK",
  },
  { id: uuid(), category: "Occupation", value: "MYSTERY WRITER" },
  { id: uuid(), category: "Occupation", value: "BALLROOM DANCE INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "INTERIOR DECORATOR" },
  { id: uuid(), category: "Occupation", value: "PAROLE OFFICER" },
  { id: uuid(), category: "Occupation", value: "FISH & GAME WARDEN" },
  { id: uuid(), category: "Occupation", value: "BARTENDER AT A LUAU" },
  { id: uuid(), category: "Occupation", value: "SINGING WAITRESS" },
  { id: uuid(), category: "Occupation", value: "UNITED STATES ATTORNEY" },
  { id: uuid(), category: "Occupation", value: "COMPUTER ANIMATOR" },
  { id: uuid(), category: "Occupation", value: "PHILOSOPHY PROFESSOR" },
  { id: uuid(), category: "Occupation", value: "EVENING NEWS ANCHOR" },
  { id: uuid(), category: "Occupation", value: "EXECUTIVE CHEF" },
  { id: uuid(), category: "Occupation", value: "RESTAURANT MANAGER" },
  { id: uuid(), category: "Occupation", value: "ART MUSEUM CURATOR" },
  { id: uuid(), category: "Occupation", value: "SCUBA INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "MOUNTED POLICEMAN" },
  { id: uuid(), category: "Occupation", value: "SIGN LANGUAGE INTERPRETER" },
  { id: uuid(), category: "Occupation", value: "INSURANCE CLAIMS ADJUSTER" },
  {
    id: uuid(),
    category: "Occupation",
    value: "CONDUCTOR OF A SYMPHONY ORCHESTRA",
  },
  { id: uuid(), category: "Occupation", value: "ANTIQUE DEALER" },
  { id: uuid(), category: "Occupation", value: "ADVERTISING EXECUTIVE" },
  { id: uuid(), category: "Occupation", value: "COMIC BOOK ARTIST" },
  { id: uuid(), category: "Occupation", value: "ELECTRONICS TECHNICIAN" },
  { id: uuid(), category: "Occupation", value: "TAXI DRIVER" },
  { id: uuid(), category: "Occupation", value: "UNIVERSITY ATHLETIC DIRECTOR" },
  { id: uuid(), category: "Occupation", value: "FLIGHT INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "GYMNASTICS COACH" },
  { id: uuid(), category: "Occupation", value: "HELICOPTER PILOT" },
  { id: uuid(), category: "Occupation", value: "CAMPAIGN MANAGER" },
  { id: uuid(), category: "Occupation", value: "BUILDING INSPECTOR" },
  { id: uuid(), category: "Occupation", value: "NETWORK TECHNICIAN" },
  { id: uuid(), category: "Occupation", value: "TRAIN CONDUCTOR" },
  { id: uuid(), category: "Occupation", value: "EVENT PLANNER" },
  { id: uuid(), category: "Occupation", value: "LANDSCAPE DESIGNER" },
  { id: uuid(), category: "Occupation", value: "INVESTMENT BANKER" },
  { id: uuid(), category: "Occupation", value: "SECRET SERVICE AGENT" },
  { id: uuid(), category: "Occupation", value: "FASHION DESIGNER" },
  { id: uuid(), category: "Occupation", value: "ENGLISH PROFESSOR" },
  { id: uuid(), category: "Occupation", value: "MASTER CARPENTER" },
  { id: uuid(), category: "Occupation", value: "SOCIAL STUDIES TEACHER" },
  { id: uuid(), category: "Occupation", value: "RODEO ANNOUNCER" },
  { id: uuid(), category: "Occupation", value: "GAME WARDEN" },
  { id: uuid(), category: "Occupation", value: "HOTEL DOORMAN" },
  { id: uuid(), category: "Occupation", value: "MOTORCYCLE MECHANIC" },
  { id: uuid(), category: "Occupation", value: "PARK RANGER" },
  { id: uuid(), category: "Occupation", value: "FOOD CRITIC" },
  { id: uuid(), category: "Occupation", value: "TRAVEL AGENT" },
  { id: uuid(), category: "Occupation", value: "HIGHWAY PATROL OFFICER" },
  { id: uuid(), category: "Occupation", value: "TOLLBOOTH OPERATOR" },
  { id: uuid(), category: "Occupation", value: "SCHOOL NURSE" },
  { id: uuid(), category: "Occupation", value: "MASTER CHEF" },
  { id: uuid(), category: "Occupation", value: "CATTLE RANCHER" },
  { id: uuid(), category: "Occupation", value: "BIG-LEAGUE UMPIRE" },
  { id: uuid(), category: "Occupation", value: "HOT DOG VENDOR" },
  { id: uuid(), category: "Occupation", value: "AEROBICS INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "TV ANCHOR" },
  { id: uuid(), category: "Occupation", value: "YOGA INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "CAKE DECORATOR" },
  { id: uuid(), category: "Occupation", value: "GOSSIP COLUMNIST" },
  { id: uuid(), category: "Occupation", value: "UNIVERSITY PROFESSOR" },
  { id: uuid(), category: "Occupation", value: "LOCKSMITH" },
  { id: uuid(), category: "Occupation", value: "FLIGHT ATTENDANT" },
  { id: uuid(), category: "Occupation", value: "AUTOMOTIVE ENGINEER" },
  { id: uuid(), category: "Occupation", value: "BIOLOGY TEACHER" },
  { id: uuid(), category: "Occupation", value: "DEPUTY SHERIFF" },
  { id: uuid(), category: "Occupation", value: "AUTOMOTIVE ENGINEER" },
  { id: uuid(), category: "Occupation", value: "BIOLOGY TEACHER" },
  { id: uuid(), category: "Occupation", value: "DEPUTY SHERIFF" },
  { id: uuid(), category: "Occupation", value: "GRAPHIC ARTIST" },
  { id: uuid(), category: "Occupation", value: "ROCKET SCIENTIST" },
  { id: uuid(), category: "Occupation", value: "GOURMET CHEF" },
  { id: uuid(), category: "Occupation", value: "ANIMAL TRAINER" },
  { id: uuid(), category: "Occupation", value: "DISC JOCKEY" },
  { id: uuid(), category: "Occupation", value: "FAMILY PHYSICIAN" },
  { id: uuid(), category: "Occupation", value: "SKI LIFT OPERATOR" },
  { id: uuid(), category: "Occupation", value: "FOREST RANGER" },
  { id: uuid(), category: "Occupation", value: "SINGING WAITER" },
  { id: uuid(), category: "Occupation", value: "LAB TECHNICIAN" },
  { id: uuid(), category: "Occupation", value: "ROMANCE NOVELIST" },
  { id: uuid(), category: "Occupation", value: "DANCE INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "CHARTER BOAT CAPTAIN" },
  { id: uuid(), category: "Occupation", value: "BAGGAGE HANDLER" },
  { id: uuid(), category: "Occupation", value: "PASTRY CHEF" },
  { id: uuid(), category: "Occupation", value: "FREELANCE JOURNALIST" },
  { id: uuid(), category: "Occupation", value: "DISTRICT ATTORNEY" },
  { id: uuid(), category: "Occupation", value: "ASSISTANT PRINCIPAL" },
  { id: uuid(), category: "Occupation", value: "GRAPHIC DESIGNER" },
  { id: uuid(), category: "Occupation", value: "MASSAGE THERAPIST" },
  { id: uuid(), category: "Occupation", value: "ECONOMICS PROFESSOR" },
  { id: uuid(), category: "Occupation", value: "LIMOUSINE DRIVER" },
  { id: uuid(), category: "Occupation", value: "SALES MANAGER" },
  { id: uuid(), category: "Occupation", value: "THEATER USHER" },
  { id: uuid(), category: "Occupation", value: "NEWSPAPER COLUMNIST" },
  { id: uuid(), category: "Occupation", value: "MARTIAL ARTS INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "ORCHESTRA CONDUCTOR" },
  { id: uuid(), category: "Occupation", value: "PORTRAIT PAINTER" },
  { id: uuid(), category: "Occupation", value: "CARTOONIST" },
  { id: uuid(), category: "Occupation", value: "COMMERCIAL FISHERMAN" },
  { id: uuid(), category: "Occupation", value: "CERTIFIED SCUBA INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "CREATIVE DIRECTOR" },
  { id: uuid(), category: "Occupation", value: "COMPUTER SOFTWARE ENGINEER" },
  { id: uuid(), category: "Occupation", value: "WARDROBE DESIGNER" },
  { id: uuid(), category: "Occupation", value: "LOCAL WEATHERMAN" },
  { id: uuid(), category: "Occupation", value: "WEDDING PLANNER" },
  { id: uuid(), category: "Occupation", value: "SHORT-ORDER COOK" },
  { id: uuid(), category: "Occupation", value: "RADIO DISC JOCKEY" },
  { id: uuid(), category: "Occupation", value: "EQUIPMENT MANAGER" },
  { id: uuid(), category: "Occupation", value: "FLIGHT INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "HOUSE PAINTER" },
  { id: uuid(), category: "Occupation", value: "CIVIL ENGINEER" },
  { id: uuid(), category: "Occupation", value: "COMPUTER PROGRAMMER" },
  { id: uuid(), category: "Occupation", value: "HOLLYWOOD STUNTMAN" },
  { id: uuid(), category: "Occupation", value: "CERTIFIED YOGA INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "CHIEF EXECUTIVE OFFICER" },
  { id: uuid(), category: "Occupation", value: "THEATER CRITIC" },
  { id: uuid(), category: "Occupation", value: "INNKEEPER" },
  { id: uuid(), category: "Occupation", value: "PUBLIC RELATIONS SPECIALIST" },
  { id: uuid(), category: "Occupation", value: "COMMERCIAL PILOT" },
  { id: uuid(), category: "Occupation", value: "PERSONAL TRAINER" },
  { id: uuid(), category: "Occupation", value: "SHOPPING MALL SECURITY GUARD" },
  { id: uuid(), category: "Occupation", value: "ANTIQUE DEALER" },
  { id: uuid(), category: "Occupation", value: "UNITED NATIONS TRANSLATOR" },
  { id: uuid(), category: "Occupation", value: "TRAVEL AGENT" },
  { id: uuid(), category: "Occupation", value: "TENNIS COACH" },
  { id: uuid(), category: "Occupation", value: "FOREIGN AMBASSADOR" },
  { id: uuid(), category: "Occupation", value: "TRAVEL WRITER" },
  { id: uuid(), category: "Occupation", value: "PROJECT MANAGER" },
  { id: uuid(), category: "Occupation", value: "EXECUTIVE CHEF" },
  { id: uuid(), category: "Occupation", value: "MAKEUP ARTIST" },
  { id: uuid(), category: "Occupation", value: "SECRET SERVICE AGENT" },
  { id: uuid(), category: "Occupation", value: "HIGH SCHOOL ART TEACHER" },
  { id: uuid(), category: "Occupation", value: "RESTAURANT HOSTESS" },
  { id: uuid(), category: "Occupation", value: "REFRIGERTOR REPAIRMAN" },
  { id: uuid(), category: "Occupation", value: "BROADCAST JOURNALIST" },
  { id: uuid(), category: "Occupation", value: "CERTIFIED PUBLIC ACCOUNTANT" },
  { id: uuid(), category: "Occupation", value: "BANK MANAGER" },
  { id: uuid(), category: "Occupation", value: "HOTEL DOORMAN" },
  { id: uuid(), category: "Occupation", value: "MECHANICAL ENGINEER" },
  { id: uuid(), category: "Occupation", value: "LANDSCAPE ARCHITECT" },
  { id: uuid(), category: "Occupation", value: "STATE TROOPER" },
  { id: uuid(), category: "Occupation", value: "UNITED STATES ATTORNEY" },
  { id: uuid(), category: "Occupation", value: "ELEVATOR OPERATOR" },
  { id: uuid(), category: "Occupation", value: "PARK RANGER" },
  { id: uuid(), category: "Occupation", value: "SYMPHONY ORCHESTRA" },
  { id: uuid(), category: "Occupation", value: "MUSICAL DIRECTOR" },
  { id: uuid(), category: "Occupation", value: "CHEMISTRY TEACHER" },
  { id: uuid(), category: "Occupation", value: "BASEBALL MANAGER" },
  { id: uuid(), category: "Occupation", value: "BALLROOM DANCE INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "BANK TELLER" },
  { id: uuid(), category: "Occupation", value: "LIBRARIAN" },
  { id: uuid(), category: "Occupation", value: "AEROBICS INSTRUCTOR" },
  { id: uuid(), category: "Occupation", value: "FURNITURE MAKER" },
  { id: uuid(), category: "Occupation", value: "RESTAURANT MANAGER" },
  { id: uuid(), category: "Occupation", value: "BASKETBALL REFEREE" },
  { id: uuid(), category: "Occupation", value: "HOT AIR BALLOON PILOT" },
  { id: uuid(), category: "Occupation", value: "COMPUTER SYSTEMS ANALYST" },
  { id: uuid(), category: "Occupation", value: "FAMILY DOCTOR" },
  { id: uuid(), category: "Occupation", value: "DISC JOCKEY" },
  { id: uuid(), category: "Occupation", value: "GOSSIP COLUMNIST" },
  { id: uuid(), category: "Occupation", value: "PHYSICAL THERAPIST" },
  { id: uuid(), category: "Occupation", value: "VIDEO GAME DESIGNER" },
  { id: uuid(), category: "Occupation", value: "CAKE DECORATOR" },
  { id: uuid(), category: "Occupation", value: "PARKING LOT ATTENDANT" },
  { id: uuid(), category: "Occupation", value: "PRIVATE TUTOR" },
  { id: uuid(), category: "Occupation", value: "UNIVERSITY ATHLETIC DIRECTOR" },
  { id: uuid(), category: "Occupation", value: "PASTRY CHEF" },
  { id: uuid(), category: "Occupation", value: "REGISTERED NURSE" },
  { id: uuid(), category: "Occupation", value: "VICE PRINCIPAL" },
  { id: uuid(), category: "Occupation", value: "FOREST RANGER" },
  { id: uuid(), category: "Occupation", value: "BAKER" },
  { id: uuid(), category: "Occupation", value: "CHARTER BOAT CAPTAIN" },
  { id: uuid(), category: "Occupation", value: "MOVIE THEATER MANAGER" },
  { id: uuid(), category: "Occupation", value: "LIMOUSINE DRIVER" },
  { id: uuid(), category: "Occupation", value: "NEWSPAPER COLUMNIST" },
  { id: uuid(), category: "Occupation", value: "ELECTRICAL ENGINEER" },
  { id: uuid(), category: "Occupation", value: "FOOD CRITIC" },
]
export default puzzleList
