'use strict';

var R6MLangTermsHebrew = (function(R6MLangTerms, undefined) {
  var name = 'he',
    terms = {
      general: {
        pageTitleSelectMap: 'בחר מפה',
        cameraViewCaption: '{floorName} מבט מצלמות',
        menu: 'תפריט',
        about: 'אודות',
        languageHeader: 'שפה',
        optionsHeader: 'אפשרויות',
        labelLosOpacity: 'אטימות קו הראיה של המצלמות',
        labelPercent: '{int} %',
        labelLosDefault: 'ברירת מחדל',
        labelLos105: 'הא?',
        labelLos110: 'מגוחך!',
        labelRoomLabelStyle: 'סגנון תוויות',
        labelNumberFloorsToDisplay: 'מספר הקומות להצגה',
        lockPanning: 'הקבלת פאן',
        lockZooming: 'הקבלת זום',
        fullScreen: 'מסך מלא',
        enableScreenshots: 'אפשר צילום מסך',
        contributions: 'תרומות',
        supportSiteNote: 'אנא שקלו להביע את תמיכתם על ידי תרומה קטנה :).',
        donateImg: 'https://www.paypalobjects.com/he_IL/i/btn/btn_donate_LG.gif'
      },
      sessions: {
        button: ''
      },
      roomLabelStyles: {
        Dark: 'כהה',
        Light: 'בהיר (ברירת מחדל)',
        DarkAndLarge: 'כהה וגדול',
        LightAndLarge: 'בהיר וגדול',
        DarkAndSmall: 'כהה וקטן',
        LightAndSmall: 'בהיר וקטן',
        DisplayNone: 'הסתרה'
      },
      floorDisplayOptions: {
        one: '1 - מלא',
        two: '2 - חצוי',
        four: '3 - שבכה'
      },
      selectMaps: {
        selectAMap: 'בחר מפה',
        homeLink: 'בחר מפה'
      },
      compass: {
        letterN: 'צ',
        letterE: 'מז',
        letterS: 'ד',
        letterW: 'מע'
      },
      floorNames: {
        basement: { full: 'מרתף', short: 'B' },
        firstFloor: { full: 'קומת קרקע', short: '1' },
        secondFloor: { full: 'קומה שנייה', short: '2' },
        thirdFloor: { full: 'קומה שלישית', short: '3' },
        fourthFloor: { full: 'קומה רביעית', short: '4' },
        roof: { full: 'גג', short: 'R' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: 'פצצה',
        hostageShort: 'H',
        hostage: 'בן ערובה',
        secureShort: 'S',
        secure: 'אבטוח',
        showAll: 'הצג הכל'
      },
      legend: {
        breakableWalls: 'קירות שבירים',
        breakableFloorTraps: 'צוהר רצפה שביר',
        ceilingHatches: 'צוהר תקרה',
        lineOfSightWalls: 'קירות חצי משוריינים',
        lineOfSightFloors: 'רצפות חצי משוריינות',
        droneTunnels: 'מנהרות רל"ט',
        objectives: 'מטרה',
        insertionPoints: 'נקודות חדירה',
        securityCameras: 'מצלמות אבטחה',
        skylights: 'אשנב',
        onFloorAboveOrBelow: 'בקומה התחתונה או העליונה',
        cameraLineOfSight: 'קו הראייה של המצלמות',
        ladders: 'סולמות'
      },
      spawnPoints: {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        e: 'E'
      },
      stats: {
        title: 'סטטיסטיקות - R6Maps.com',
        titleBeta: 'סטטיסטיקות בטא - R6Maps.com',
        headerMain: 'סטטיסטיקות',
        headerMainBeta: 'סטטיסטיקות בטא - R6Maps.com',
        headerFilters: 'מסננים',
        headerMap: 'נתוני מפה',
        headerOperators: 'אופרטורים',
        headerAboutAndOptions: 'אודות / אפשרויות',
        headerWinReasons: 'סיבות לניצחון',
        labelSeason: 'עונה',
        labelPlatform: 'פלטפורמה',
        labelMap: 'מפה',
        labelGameMode: 'סוג',
        labelObjectiveLocation: 'מיקום',
        allOption: 'הכל',
        seasonWithNumber: 'עונה {0}',
        objectiveRoomDivider: '/',
        ellipsis: '...',
        loadButtonText: 'טען נתונים',
        averageRoundLength: 'משך סיבוב ממוצע',
        numberSeconds: '{num} שניות',
        totalRoundsPlayed: 'מספר הסיבוב ששוחקו',
        numberRounds: '{num} סיבובים',
        tableHeaderAttackers: 'תוקפים',
        tableHeaderAttackersSingular: 'תוקף',
        tableHeaderDefenders: 'מגנים',
        tableHeaderDefendersSingular: 'מגן',
        tableHeaderName: 'שם',
        tableHeaderPickRate: 'שיעור בחירה',
        tableHeaderWinRate: 'שיעור ניצחון',
        tableHeaderSurvivalRate: 'שיעור הישרדות',
        tableHeaderKillsPerDeath: 'הריגות:מיתות',
        tableHeaderKillsPerRound: 'הריגות:סיבוב',
        tableHeaderTotalRounds: 'סך כל הסיבובים',
        tableHeaderAllRanks: 'כל הדרגות',
        tableNoteHeader: 'הערות:',
        tableNotePickRate: 'שיעורי הבחירה ע"י דרגה הם משוערים ומבוססים על המספר היחסי של הסיבובים ששוחקו.',
        tableNoteHeaders: 'יש ללחוץ על הכותרות בשביל התרשימים ועל תת הכותרות בשביל לסדר אותם.',
        tableNoteWarningText: 'טקסט כתום נועד כדי לסמן מידע פחות אמין שמבוסס על סיבובים מעטים ששוחקו.',
        tableFewRoundsNote: 'פחות אמין (מעט סיבובים שוחקו)',
        averagesAndTotals: 'בממוצע/סה"כ',
        percentageFormat: '{num}%',
        instructions: 'בחר אפשרויות סינון ולחץ על \'טען נתונים\' כדי להמשיך.',
        noResults: 'לא נמצאו תוצאות, נסה להתאים את הסננים מחדש או לנסות במועד מאוחר יותר.',
        error: 'ישנה תקלה בטעינת הנתונים, אנא נסה מאוחר יותר.',
        chartHeader: '{stat} ל {role}',
        loadedInfoLine1AllPlatforms: 'מציג נתונים ל{season} על כל הפלטפורמות',
        loadedInfoLine1SinglePlatform: 'מציג נתונים ל{season} על {platform}',
        loadedInfoLine2AllMapsAllModes: 'כל המפות | כל הסוגים',
        loadedInfoLine2SingleMapAllModes: '{map} | כל הסוגים',
        loadedInfoLine2AllMapsSingleMode: 'כל המפות | {mode}',
        loadedInfoLine2SingleMapSingleModeAllLocations: '{map} | {mode} | כל המקומות',
        loadedInfoLine2SingleMapSingleModeSingleLocation: '{map} | {mode} | {location}',
        aboutLinksHeader: 'קישורים',
        aboutR6MapsHome: 'R6Maps.com דף הבית',
        aboutR6MapsAbout: 'R6Maps.com אודות',
        aboutBasedOnUbisoft: 'סדרת הצצות המידע של Ubisoft',
        winRatesForMap: 'שיעורי זכייה עבור {maps}',
        detailedStatsLink: 'ראה נתונים מפורטים'
      },
      statsRoundWinReasons: {
        allTeamsDead: 'כל הצוותים נהרגו',
        attackersEliminated: 'צוות האויב נהרג',
        attackersKilledHostage: 'בן הערובה נהרג',
        attackersSurrendered: 'כניעה',
        bombDeactivated_OneBomb: 'פצצה נוטרלה',
        bombExploded: 'פצצה התפוצצה',
        defendersEliminated: 'צוות האויב נהרג',
        defendersKilledHostage: 'בן הערובה נהרג',
        defendersSurrendered: 'כניעה',
        defuserDeactivated: 'המנטרל הושבת',
        hostageExtracted: 'בן הערובה חולץ',
        noEnemies: 'אין אויבים',
        objectiveCaptured: 'המטרה אובטחה',
        objectiveProtected: 'המטרה מוגנת',
        timeExpired: 'הזמן פג'
      },
      ranks: {
        unranked: 'חסר דרגה',
        copper: 'נחושת',
        bronze: 'ברונזה',
        silver: 'כסף',
        gold: 'זהב',
        platinum: 'פלטינום',
        diamond: 'יהלום'
      },
      platforms: {
        pc: 'PC',
        xboxone: 'XBOX One',
        ps4: 'PS4'
      },
      seasons: {
        1: 'קרח שחור',
        2: 'קו עפר',
        3: 'גשם הגולגולת',
        4: 'עורב אדום',
        5: 'פגז קטיפה',
        6: 'מבצע בריאות',
        7: 'סחלב הדמים',
        8: 'רעש לבן',
        9: 'מבצע כימרה'
      },
      operators: {
        ash: 'אש',
        bandit: 'בנדיט',
        blackbeard: 'בלאק-בירד',
        blitz: 'בליץ',
        buck: 'באק',
        capitao: 'קפיטאו',
        castle: 'קסל',
        caveira: 'קברה',
        doc: 'דוק',
        echo: 'אקו',
        ela: 'אלה',
        frost: 'פרוסט',
        fuze: 'פיוז',
        gignRecruit: 'טירון GIGN',
        glaz: 'גלאז',
        gsg9Recruit: 'טירון GSG9',
        hibana: 'היבאנה',
        iq: 'איי-קיו',
        jackal: "ג'אקאל",
        jager: "ג'ייגאר",
        kapkan: 'קפקאן',
        lesion: "ליז'יון",
        mira: 'מירה',
        montagne: 'מונטאניה',
        mute: 'מיוט',
        pulse: 'פולס',
        rook: 'רוק',
        sasRecruit: 'טירון SAS',
        sledge: "סלדג'",
        smoke: 'סמוק',
        spetsnazRecruit: 'טירון Spetsnaz',
        swatRecruit: 'טירון SWAT',
        tachanka: "לורד טאצ'אנקה",
        thatcher: "ת'אטצ'ר",
        thermite: "ת'רמייט",
        twitch: "טוויצ'",
        valkyrie: 'וולקרי',
        ying: 'יינג'
      },
      mapNames: {
        bank: 'בנק',
        bartlett: 'אוניברסיטת ברלט',
        border: 'גבול',
        chalet: 'בקתה',
        club: 'מועדון',
        coastline: 'קו חוף',
        consulate: 'קונסוליה',
        favela: 'פבלה',
        hereford: 'הרפורד',
        house: 'בית',
        kanal: 'תעלה',
        kafe: 'קפה דוסטוייבסקי',
        oregon: 'אורגון',
        plane: 'מטוס',
        skyscraper: 'גורד שחקים',
        themepark: 'פארק שעשועים',
        tower: 'מגדל',
        yacht: 'יאכטה'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: 'שדרה',
          spawnBackAlley: 'סמטה אחורית',
          printerRoom: 'חדר מדפסת',
          parkingLot: 'מגרש חנייה',
          boulevard: 'שדרה',
          jewelryFront: 'חזית תכשיטים',
          plaza: 'פלזה',
          mainEntrance: 'כניסה ראשית',
          garageRamp: 'רמפת</br>מוסך',
          exteriorParking: 'חנייה חיצונית',
          garageRoof: 'גג</br>המוסך',
          alleyAccess: 'גישת סמטה',
          backAlleyRooftop: 'סמטה אחורית</br>גג',
          backAlley: 'סמטה אחורית',
          highRoof: 'גג גבוה',
          lowRoof: 'גג נמוך',
          vault: 'כספת',
          goldVault: 'כספת</br>זהב',
          serverRoomStairs: 'מדרגות חדר שרתים',
          serverRoom: 'חדר שרתים',
          CCTVRoom: 'חדר</br>מצלמות',
          loadingDock: 'רציף טעינה',
          secureHallway: 'מסדרון</br>בטוח',
          sewer: 'ביוב',
          lockers: 'לוקרים',
          vaultLobby: 'לובי הכספת',
          vaultEntrance: 'כניסה</br>לכספת',
          mainStairway: 'מדרגות</br>ראשיות',
          bankGarage: 'חניית הבנק',
          elevators: 'מעליות',
          tellersOffice: 'משרד</br>פקידים',
          archives: 'ארכיון',
          tellers: 'פקידים',
          loanOffice: 'משרד הלוואות',
          officeHallway: 'מסדרון משרדים',
          skylightStairwell: 'צוהר</br>מדרגות',
          lobby: 'לובי הכספת',
          openArea: 'אזור פתוח',
          staffRoom: 'חדר צוות',
          electricalRoom: 'חדר</br>חשמל',
          adminOffice: 'חדר מנהל',
          ATMs: 'כספומטים',
          executiveHallway: 'מסדרון מנהלים',
          frontDesk: 'שולחן</br>קדמי',
          executiveLounge: 'סלון מנהלים',
          CEOOffice: 'משרד</br>מנכ"ל',
          janitorCloset: 'ארון שירות',
          hallway: 'מסדרון',
          terrace: 'מרפסת',
          stockTradingRoom: 'חדר</br>מסחר</br>במניות',
          conferenceRoom: 'חדר</br>וועידות'
        },
        bartlett: {
          archwayHall: 'היכל הקשתות',
          backAlley: 'סמטה אחורית',
          bathroom: 'חדר</br>מקלחת',
          campusField: 'שדה קמפוס',
          classroom: 'כיתה',
          coatRoom: 'חדר</br>מעילים',
          compassHallway: 'מסדרון המצפן',
          courtyard: 'חצר',
          centralHallway: 'מסדרון ראשי',
          diningRoom: 'חדר אוכל',
          eastBalcony: 'מרפסת מזרחית</br>(לא מוצגת)',
          eastCorridor: 'מסדרות</br>מזרחי',
          eastStairs: 'מדרגות</br>מזרחיות',
          festival: 'פסטיבל',
          frontEntrance: 'כניסה קדמית',
          frontOffice: 'משרד</br>קדמי',
          frontPatio: 'מבואה קדמית',
          gardenPass: 'מעבר</br>מדשאה',
          kitchen: 'מטבח',
          lobby: 'לובי',
          lounge: 'טרקלין',
          lowerLibrary: 'ספריה</br>תחתונה',
          mainGate: 'שער</br>ראשי',
          mainOffice: 'משרד ראשי',
          modelHall: 'מסדרון מודלים',
          pantry: 'מזווה',
          parking: 'חניון',
          pianoRoom: 'חדר פסנתר',
          readingRoom: 'חדר קריאה',
          roof: 'גג',
          rowingMuseum: 'מוזיאון</br>חתירה',
          serviceRoom: 'חדר</br>שירות',
          terrace: 'מרפסת',
          trophyRoom: 'חדר גביעים',
          upperLibrary: 'ספריה</br>עליונה',
          vistaHallway: 'חדר</br>נוף',
          westBalcony: 'מרפסת מערבית</br>(לא מוצגת)',
          westCorridor: 'מסדרון </br> מערבי'
        },
        border: {
          armoryLockers: 'לוקרים</br>נשקייה',
          tellers: 'פקידים',
          ventilationRoom: 'חדר</br>אוורור',
          exitHallway: 'מסדרון </br> יציאה',
          supplyCorridor: 'מסדרון</br>אספקה',
          detention: 'מעצר',
          customsInspection: 'פיקוח מכס',
          customsDesk: 'שולחן</br>מכס',
          centralStairs: 'מדרגות מרכזיות',
          serverRoom: 'חדר שרתים',
          supplyRoom: 'חדר אספקה',
          workshop: 'סדנה',
          mainLobby: 'לובי</br>ראשי',
          bathroom: 'שירותים',
          waitingRoom: 'חדר</br>המתנה',
          eastStairs: 'מדרגות</br>מזרחיות',
          passportCheck: 'בדיקת</br>דרכונים',
          archives: 'אריכון',
          offices: 'משרדים',
          officesHallway: 'מסדרון משרדים',
          fountain: 'מזרקה',
          mainHallway: 'מסדרון</br>ראשי',
          armoryDesk: 'שולחן</br>נשקייה',
          securityRoom: 'חדר</br>אבטחה',
          breakRoom: 'חדר הפסקה',
          spawnEastVehicleEntrance: 'כניסת רכבים מזרחית',
          spawnValley: 'עמק',
          spawnWestVehicleExit: 'כניסת רכבים מערבית',
          westTower: 'מגדל</br>מזרחי',
          pedestrianExit: 'יציאת הולכי רגל',
          valley: 'עמק',
          parkingLotEntrance: 'כניסת</br>חניון',
          parkingLot: 'חניון',
          westRoad: 'רחוב מזרחי',
          vehicleCustoms: 'מכס רכבי',
          crashScene: 'זירת התאונה',
          eastRoad: 'רחוב מזחרי',
          pedestrianEntrance: 'כניסת</br>הולכי רגל',
          pedestrianCustoms: 'מכס הולכי</br>רגל',
          watchTower: 'מגדל שמירה',
          eastAlley: 'סמטה מזרחית',
          parkingLotAlley: 'סמטת</br>מגרש</br>חנייה',
          northBalcony: 'מרפסת צפונית',
          eastBalcony: 'מרפסת</br>מזרחית',
          westBalcony: 'מרפסת</br>מערבית',
          southBalcony: 'מרפסת דרומית',
          roof: 'גג'
        },
        coastline: {
          aquarium: 'אקווריום',
          backAlley: 'סמטה</br>אחורית',
          balcony: 'מרפסת (לא מוצגת)',
          bathroom: 'שירותים',
          billiardsRoom: 'חדר ביליארד',
          blueBar: 'בר כחול',
          cantina: 'קנטינה',
          courtyard: 'חצר',
          djBooth: 'תא DJ (לא מוצג)',
          garageRoof: 'גג חניון',
          hallOfFame: 'היכל התהילה',
          hallway: 'מסדרון',
          hookahDeck: 'דק נרגילות',
          hookahLounge: 'טרקלין נרגילות',
          kitchen: 'מטבח',
          mainEntrance: 'כניסה </br> ראשית',
          mainLobby: 'לובי </br> ראשי',
          northStairs: 'מדרגות</br>צפוניות',
          office: 'משרד',
          penthouse: 'פנטהאוס',
          pool: 'בריכה',
          poolEntrance: 'כניסת בריכה',
          poolSide: 'צד בריכה',
          rooftop: 'גג',
          ruins: 'חורבות',
          securityRoom: 'חדר</br>אבטחה',
          serviceEntrance: 'כניסת</br>שירות',
          southHallway: 'מסדרון דרומי',
          southPromenade: 'טיילת דרומית',
          southStairs: 'מדרגות</br>דרומיות',
          sunriseBar: 'בר זריחה',
          sunRoom: 'חדר שמש',
          theater: 'תאטרון',
          terrace: 'מרפסת',
          toilets: 'אסלות',
          vipLounge: 'טרקלין אח"מים',
          walkway: 'שביל'
        },
        chalet: {
          spawnFrontYard: 'חצר קדמית',
          spawnCampfire: 'מדורה',
          spawnCliffside: 'צוק',
          spawnLakeside: 'שפת האגם',
          libraryStairs: 'מדרגות</br>ספרייה',
          snowmobileGarageCorridor: 'מסדרון לחניית</br>רכב השלג',
          snowmobileGarage: 'חניון</br>רכב שלג',
          greatRoomStairs: 'מדרגות</br>חדר</br>ענק',
          storageRoom: 'חדר</br>אחסון',
          wineCellar: 'מרתף</br>יין',
          wineStock: 'מלאי</br>יין',
          basementHallway: 'מסדרון</br>מרתף',
          backyardStairs: 'מדרגות</br>חצר</br>אחורית',
          mainStairs: 'מדרגות</br>ראשיות',
          mainGarage: 'מוסך</br>ראשי',
          garageEntrance: 'כניסה</br>לחניה',
          westEntrance: 'כניסה</br>מערבית',
          gamingRoomHallway: 'מסדרון</br>חדר</br>גיימינג',
          gamingRoom: 'חדר</br>גיימינג',
          bar: 'בר',
          greatRoom: 'חדר ענק',
          diningRoom: 'חדר אוכל',
          mainEntrance: 'כניסה</br>ראשית',
          trophyRoom: 'חדר גביעים',
          kitchenHallway: 'מסדרון</br>מטבח',
          kitchen: 'מטבח',
          libraryHallway: 'מסדרון ספריה',
          libraryEntrance: 'כניסת</br>ספריה',
          library: 'ספריה',
          bedroomTerrace: 'מרפסת</br>חדר שינה',
          fireplaceHallway: 'מרפסת</br>אח',
          bedroomHallway: 'מסדרון</br>חדר שינה',
          masterBathroom: 'מקלחת</br>ראשית',
          masterBedroom: 'חדר שינה ראשי',
          office: 'משרד',
          woodenTrail: 'שביל</br>עץ',
          campfireWood: 'עץ למדורה',
          backyard: 'חצר אחורית',
          gazeebo: 'ביתן',
          cliffsideStairs: 'מדרגות</br>צוק',
          cliffsideWoods: 'יער הצוק',
          backyardPatio: 'מבואת חצר אחורית',
          officeBalcony: 'מרפסת</br>משרד',
          helipadTrail: 'שביל</br>למנחת</br>מסוקים',
          helipad: 'מנחת מסוקים',
          frontYardPatio: 'מבואת חצר</br>קדמית',
          frontYard: 'חצר קדמית',
          bathroomBalcony: 'מרפסת</br>שירותים',
          libraryBalcony: 'מרפסת</br>ספריה',
          bedroomBalcony: 'מרפסת</br>חדר שינה',
          snowmobiles: 'רכבי שלג'
        },
        club: {
          spawnMainEntrance: 'כניסה ראשית',
          spawnShippingDocks: 'מעגן משלוח',
          spawnWarehouse: 'מחסן',
          spawnConstructionSite: 'אתר בנייה',
          easternSubroof: 'תת-גג</br>מזרחי',
          constructionSite: 'אתר</br>בנייה',
          container: 'מכולה',
          graffitiArea: 'אזור גרפיטי',
          recreationArea: 'אזור</br>נופש',
          junkyard: 'גרוטאות',
          VIPParking: 'חניית אח"מים',
          mainGate: 'שער ראשי',
          parking: 'חניון',
          kennels: 'מלונות',
          trash: 'אשפה',
          centralSubroof: 'תת-גג</br>מרכזי',
          easternRoof: 'גג מזרחי',
          centralRoof: 'גג</br>ראשי',
          westernRoof: 'גג מערבי',
          balcony: 'מרפסת',
          escapeTunnel: 'מנהרת</br>מילוט',
          arsenalRoom: 'מחסן</br>נשק',
          basementHallway: 'מסדרון מרתף',
          memorialRoom: 'חדר הנצחה',
          utilityRoom: 'חדר שירות',
          oilPit: 'בור שמן',
          centralStairs: 'מדרגות</br>ראשיות',
          church: 'כנסייה',
          frontPorch: 'מרפסת קדמית',
          garage: 'מוסך',
          lobby: 'לובי',
          stockRoom: 'חדר המלאי',
          garageStorage: 'מחסן</br>חניה',
          lounge: 'טרקלין',
          bar: 'בר',
          centralHallway: 'מסדרון ראשי',
          kitchen: 'מטבח',
          kitchenEntrance: 'כניסת</br>מטבח',
          westernHallway: 'מסדרון</br>מערבי',
          stripClub: 'מועדון חשפנות',
          junkyardEntrance: 'כניסת</br>גרוטאות',
          sideEntrance: 'כניסה צדדית',
          changingRoom: 'חדר</br>החלפה',
          bedroom: 'חדר שינה',
          bathroom: 'שירותים',
          bedroomHallway: 'מסדרון חדר שינה',
          logisticOffice: 'משרד</br>לוגיסטיקה',
          gym: 'מכון כושר',
          secretStash: 'סליק</br>סודי',
          CCTVRoom: 'חדר מצלמות',
          cashRoom: 'חדר</br>כסף',
          easternStairs: 'מדרגות</br>מזרחיות'
        },
        consulate: {
          spawnRiotBarricade: 'מחסום מהומות',
          spawnPoliceLine: 'משטרה',
          spawnGasStation: 'תחנת דלק',
          spawnSideEntrance: 'כניסה צדדית',
          exitStairs: 'מדרגות</br>יציאה',
          garage: 'מוסך',
          basementCorridor: 'מסדרון מרתף',
          securityRoom: 'חדר אבטחה',
          cafeteria: 'קפיטריה',
          mainStairs: 'מדרגות ראשיות',
          lockerHallway: 'מסדרון</br>לוקרים',
          serviceStairs: 'מדרגות</br>שירות',
          electricRoom: 'חדר</br>חשמל',
          storageRoom: 'מחסן',
          archives: 'ארכיון',
          archivesCorridor: 'מסדרון</br>ארכיון',
          pressRoom: 'חדר</br>עיתונאים',
          westCorridor: 'מסדרון מערבי',
          publicBathroom: 'שירותים</br>ציבוריים',
          antechamber: 'חדר כושר',
          lobby: 'לובי',
          eastCorridor: 'מסדרון</br>מזרחי',
          tellers: 'פקידים',
          visaOffice: 'משרד ויזות',
          visaEntrance: 'כניסת</br>ויזות',
          frontDoor: 'דלת</br>קדמית',
          balcony: 'מרפסת',
          copyRoom: 'חדר צילום',
          cabinet: 'ארון',
          administrationOffice: 'משרד ממשלתי',
          breakRoom: 'חדר</br>הפסקה',
          frontOffice: 'משרד קדמי',
          meetingRoom: 'חדר</br>פגישות',
          hallway: 'מסדרון',
          consulFrontDesk: 'דלפק</br>קונסולה</br>ראשי',
          privateBathroom: 'שירותים</br>פרטיים',
          waitingRoom: 'חדר</br>המתנה',
          consulateOffice: 'משרד</br>קונסולה',
          garageWay: 'דרך מוסך',
          courtyard: 'חצר',
          backCourtyard: 'חצר אחורית',
          sideEntrance: 'כניסה צדדית',
          dumpster: 'פח זבל',
          parking: 'חניון',
          gardens: 'גנים',
          fountain: 'מזרקה',
          emergencyExit: 'יציאת</br>חירום',
          garageRoof: 'גג</br>מוסך',
          memorialGarden: 'גן זיכרון',
          policeLine: 'משטרה',
          riotBarracade: 'מחסום מהומות',
          eastFrontYard: 'חצר קדמית מזרחית',
          westFrontYard: 'חצר קדמית מערבית',
          frontAlley: 'סמטה קדמית',
          buildingRoof: 'גג הבניין'
        },
        favela: {
          packagingRoom: 'חדר</br>אריזה',
          footballApartment: 'דירת</br>כדורגל',
          armoryRoom: 'נשקייה',
          auntsApartment: 'דירת</br>הדודה',
          auntsBedroom: 'חדר השינה</br>של הדודה',
          growRoom: 'חדר</br>גידול',
          bikersApartment: 'דירת</br>אופנוענים',
          methLab: "מעבדת מת'",
          footballBedroom: 'חדר</br>שינה</br>כדורגלנים',
          footballOffice: 'משרד</br>כדורגל',
          bikersBedroom: 'חדר השינה</br>של האופנוענים',
          backStairs: 'מדרגות</br>אחוריות',
          auntsHall: 'אולם הדודה',
          kidsRoom: 'חדר ילדים',
          mainStairs: 'מדרגות</br>ראשיות',
          stairHall: 'מדרגות</br>אולם',
          roof: 'גג',
          laundryRoom: 'חדר</br>כביסה',
          vaultRoom: 'כספת',
          bikersGarage: 'מוסך</br>אופנוענים',
          backAlley: 'סמטה אחורית',
          schoolAlley: 'סמטת בית ספר',
          footballPitch: 'מגרש כדורגל',
          market: 'שוק',
          marketAlley: 'סמטת</br>שוק',
          schoolRooftops: 'גג</br>בית ספר',
          street: 'רחוב',
          rooftops: 'גגות',
          courtyard: 'חצר',
          accessAlley: 'סמטת גישה',
          shop: 'חנות</br>(לא מוצגת)',
          marketRooftops: 'גגות</br>שוק'
        },
        hereford: {
          shootingRange: 'מטווח',
          mainStairs: 'מדרגות</br>ראשיות',
          garage: 'מוסך',
          kitchen: 'מטבח',
          diningRoom: 'חדר</br>אוכל',
          masterBedroom: 'חדר שינה ראשי',
          laundryRoom: 'חדר</br>כביסה',
          bathroom: 'שירותים',
          workshop: 'סדנה',
          rooftop: 'גג'
        },
        house: {
          spawnConstructionSite: 'אתר בנייה',
          spawnRiverDocks: 'נמל נהר',
          spawnAPCArea: 'כניסת רכב משוריין',
          spawnSideStreet: 'רחוב צדדי',
          depot: 'מחסן',
          trainingRoom: 'חדר ',
          kitchenStairs: 'מדרגות<br/>מטבח',
          sideStairs: 'מדרגות<br/>צדדיות',
          laundryRoom: 'חדר<br/>כביסה',
          garage: 'מוסך',
          livingRoom: 'סלון',
          backEntrance: 'כיסה אחורית',
          lobby: 'לובי',
          kitchen: 'מטבח',
          office: 'משרד',
          diningRoom: 'חדר<br/>אוכל',
          workshop: 'סדנה',
          kidsBedroom: 'חדר<br/>ילדים',
          upperHallway: 'מסדרון<br/>עליון',
          lobbyStairs: 'מדרגות<br/>כניסה',
          walkIn: 'חדר ארונות',
          masterBedroom: 'חדר שינה ראשי',
          bathroom: 'שירותים',
          sideStreet: 'רחוב<br/>צדדי',
          garageEntrance: 'כניסת<br/>מוסך',
          garden: 'גינה',
          backAlley: 'סמטה אחורית',
          patio: 'מבואה',
          jacuzzi: "ג'קוזי",
          basementStairs: 'מדרגות<br/>מרתף',
          treehouseAlley: 'סמטת<br/>בית עץ',
          frontYard: 'חצר קדמית',
          frontStreet: 'רחוב קדמי',
          frontPorch: 'מרפסת כניסה<br/>קדמית',
          backPorch: 'מרפסת כניסה<br/>אחורית',
          backPorchTop: 'מרפסת אחורית<br/>עליונה',
          frontPorchTop: 'מרפסת אחורית<br/>תחתונה',
          rooftop: 'גג'
        },
        kanal: {
          floatingDock: 'נמל צף',
          sailboats: 'סירות מפרש',
          constructionSite: 'אתר בנייה',
          pipes: 'צנרת',
          lockerRoom: 'לוקרים',
          archives: 'ארכיון',
          lounge: 'סלון',
          modelRoom: 'חדר מודלים',
          securityRoom: 'חדר<br/>אבטחה',
          projectorRoom: 'חדר<br/>מקרן',
          kitchen: 'מטבח',
          controlRoom: 'חדר<br/>בקרה',
          controlRoomHallway: 'מסדרון חדר בקרה',
          serverRoom: 'חדר<br/>שרתים',
          lockGate: 'שער ספינות',
          quayContainers: 'מכולות רציף',
          lockGateTunnel: 'מנהרת<br/>שער<br/>ספינות',
          constructionEntrance: 'כניסת<br/>אתר<br/>בנייה',
          parkingAlley: 'מעבר לחניות',
          parkingEntrance: 'כניסה<br/>לחניון',
          middleRoad: 'רחוב<br/>אמצעי',
          forkliftAlley: 'סמטת<br/>מלגזונים',
          frontLawn: 'חצר קדמית',
          coastGuardRoof: 'גג<br/>משמר<br/>החוף',
          balcony: 'מרפסת',
          parking: 'חניון'
        },
        kafe: {
          riverDocks: 'רציפי הנהר',
          christmasMarket: 'שוק חג המולד',
          park: 'פארק',
          laundryRoom: 'חדר<br/>כביסה',
          bakery: 'מאפיה',
          diningRoom: 'חדר אוכל',
          museumEntrance: 'כניסה<br/>למוזיאון',
          miningRoom: 'חדר כריה',
          trainMuseum: 'מוזיאון רכבות',
          mainCorridor: 'מסדרון<br/>ראשי',
          readingRoomCorridor: 'מסדרון חדר קריאה',
          readingRoom: 'חדר קריאה',
          fireplaceHall: 'אולם אח',
          cigarShop: 'חנות סיגרים',
          cigarLounge: 'סלון סיגרים',
          bar: 'בר',
          barBackstore: 'בר<br/>אחסון',
          washrooms: 'שירותים',
          cocktailLounge: 'אזור<br/>קוקטיילים',
          cocktailLoungeEntrance: 'כניסת<br/>אזור<br/>קוקטיילים',
          westMainStreet: 'מערב רחוב ראשי',
          mainStreet: 'רחוב ראשי',
          eastMainStreet: 'מזרח רחוב ראשי',
          bakeryParking: 'חניית<br/>המאפיה',
          bakeryRoof: 'גג<br/>המאפיה',
          cafeRoofTop: 'גג<br/>בית הקפה',
          terrace: 'מרפסת',
          backAlley: 'סמטה אחורית',
          garage: 'מוסך'
        },
        oregon: {
          spawnJunkyard: 'חצר גרוטאות',
          spawnStreet: 'רחוב',
          spawnConstructionSite: 'אתר בנייה',
          towerStairs: 'מדרגות מגדל',
          boilerRoom: 'חדר<br/>דודי<br/>חימום',
          electricRoom: 'חדר<br/>חשמל',
          bunkerEntrance: 'כניסה<br/>לבונקר',
          bunker: 'בונקר',
          basementCorridor: 'מסדרון<br/>מרתף',
          supplyRoom: 'חדר<br/>אספקה',
          laundryRoom: 'חדר כביסה',
          laundryStorage: 'מחסן<br/>כביסה',
          laundryStairs: 'מדרגות<br/>חדר<br/>כביסה',
          office: 'משרד',
          diningHall: 'חדר<br/>אוכל',
          diningHallCorridor: 'מסדרון חדר אוכל',
          showers: 'מקלחות',
          kitchen: 'מטבח',
          bathroom: 'שירותים',
          dormStairs: 'מדרגות מעונות',
          pantry: 'מזווה',
          bathroomCorridor: 'מסדרון שירותים',
          classroom: 'כיתה',
          lobby: 'לובי',
          mainStairs: 'מדרגות<br/>ראשיות',
          meetingHall: 'חדר פגישות',
          rearStage: 'במה אחורית',
          garage: 'מוסך',
          officeStorage: 'מחסן<br/>משרד',
          kidsDorm: 'מעונות<br/>ילדים',
          dormMainHall: 'מעבר<br/>ראשי<br/>למעונות',
          smallDorms: 'מעונות<br/>קטנים',
          armoryCorridor: 'מסדרון<br/>נשקייה',
          masterBedroom: 'חדר<br/>שינה<br/>ראשי',
          armory: 'נשקייה',
          walkIn: 'חדר ארונות',
          attic: 'עליית גג',
          watchTower: 'מגדל שמירה',
          busYard: 'חצר אוטובוסים',
          junkyard: 'חצר גרוטאות',
          farmlands: 'שדה חקלאי',
          shootingRange: 'מטווח',
          constructionSite: 'אתר בנייה',
          parking: 'חניון',
          mainEntrance: 'כניסה ראשית',
          street: 'רחוב',
          balcony: 'מרפסת',
          diningHallRoof: 'גג<br/>חדר<br/>אוכל',
          officeRoof: 'גג משרד',
          meetingHallEntrance: 'כניסה לחדר<br/>פגישות',
          garageRoof: 'גג מוסך',
          dormsRoof: 'גג<br/>מעונות',
          meetingHallRoof: 'גג<br/>חדר<br/>פגישות',
          supplyCloset: 'ארון<br/>ציוד'
        },
        plane: {
          spawnOfficialEntrance: 'כניסה רשמית',
          spawnReporterEntrance: 'כניסת כתבים',
          spawnServiceEntrance: 'כניסת שירות',
          pressBathroom: 'שרות.',
          meetingRoom: 'חדר<br/>פגישות',
          frontHallway: 'פרוזדור קדמי',
          executiveOffice: 'משרד<br/>מנהלי',
          mainEntrance: 'כניסה ראשית',
          frontStairs: 'מדרגות קדמיות',
          pantry: 'מזווה',
          kitchen: 'מטבח',
          executiveHallway: 'מסדרון מנהלים',
          executiveBedroom: 'שירותי<br/>מנהלים',
          changeRoom: 'חדר<br/>החפלה',
          laund: 'כביסה',
          frontServiceEntrance: 'כניסת שירות<br/>קדמית',
          rightWing: 'כנף ימנית',
          backServiceEntrance: 'כניסת שירות<br/>אחורית',
          reporterEntrance: 'כניסת כתבים',
          leftWing: 'כנף שמאלית',
          staffSection: 'אזור צוות',
          securityRoom: 'חדר<br/>אבטחה',
          pressSectionA: 'אזור<br/>כתבים א',
          pressSectionB: 'אזור<br/>כתבים ב',
          backStairs: 'מדרגות אחוריות',
          cargoHold: 'אחזקת מטען',
          serviceCorridor: 'מסדרון שירות',
          storage: 'אחסון',
          luggageHold: 'אחסון מזוודות',
          firstAidStation: 'אזור עזרה ראשונה',
          cargoFrontEntrance: 'כניסת מטען<br/>קדמית',
          cockpitStairs: 'מדרגות תא הטייס',
          cabinStaff: 'צוות קבינה',
          radioCabin: 'תא רדיו',
          cabin: 'תא הטייס',
          caterer: 'קייטרינג',
          serverRoomA: 'חדר שרתים א',
          serverRoomB: 'חדר שרתים ב',
          technicalSeating: 'מושב טכנאים',
          ladderRoom: 'חדר<br/>סולם'
        },
        skyscraper: {
          helipad: 'מנחת מסוקים',
          tower: 'מגדל',
          ventilationUnits: 'יחדות אוורור',
          kitchen: 'מטבח',
          pantry: 'מזווה',
          deliveryRoom: 'חדר משלוחים',
          houseLobby: 'לובי הבית',
          houseEntrance: 'כניסה<br/>לבית',
          mainEntrance: 'כניסה<br/>ראשית',
          reception: 'קבלה',
          bedroom: 'חדר שינה',
          closet: 'ארון',
          bathroom: 'שירותים',
          houseStairs: 'מדרגות<br/>בית',
          restaurant: 'מסעדה',
          toilet: 'שירותים',
          bbq: 'ברביקיו',
          backHallway: 'מסדרון אחורי',
          mainStairs: 'מדרגות<br/>ראשיות',
          geishaRoom: 'חדר<br/>גיישה',
          hallway: 'מסדרון',
          karaoke: 'קריוקי',
          teaRoom: 'חדר תה',
          taiko: 'טאיקו',
          terrace: 'מרפסת',
          backStairs: 'מדרגות<br/>אחוריות',
          houseBalcony: 'מרפסת<br/>הבית',
          exhibition: 'תערוכה',
          lounge: 'טרקלין',
          workOffice: 'משרד',
          clearance: 'מרווח',
          peacefullTree: 'עץ<br/>שקט',
          contemplationGarden: 'גינת<br/>הסתכלות',
          westGarden: 'גינה<br/>מערבית',
          bridge: 'גשר',
          gazeebo: 'ביתן',
          restBalcony: 'מרפסת<br/>מסעדה',
          northGarden: 'גינה<br/>צפונית',
          eastGarden: 'גינה<br/>מזרחית',
          sandGarden: 'גינת<br/>חול',
          sidePath: 'מעבר<br/>צדדי',
          sideStairs: 'מדרגות<br/>צדדיות',
          dragonStatue: 'פסל<br/>דרקון',
          coveredWalkway: 'מעבר<br/>מוצל'
        },
        themepark: {
          arcadeEntrance: 'כניסת<br/>משחקיה',
          arcadeStairs: 'מדרגות משחקיה',
          arcadeToilet: 'שירותי<br/>משחקיה',
          barrelRoom: 'חדר<br/>חביות',
          backAlley: 'סמטה אחורית',
          bumperCars: 'מכוניות<br/>מתנגשות',
          bunk: 'דרגשים',
          cafe: 'בית קפה',
          cafeCorridor: 'מסדרון בית קפה',
          cafeTerrace: 'מרפסת<br/>בית קפה',
          cashStash: 'מאגר<br/>שטרות',
          controlRoom: 'חדר<br/>בקרה',
          dayCare: 'צהרון',
          guestInfo: 'מידע<br/>לאורחים',
          initiationRoom: 'חדר<br/>קבלה',
          jointCorridor: 'מסדרון<br/>משותף',
          lockerRoom: 'חדר<br/>לוקרים',
          mainEntrance: 'כניסה ראשית',
          office: 'משרד',
          palms: 'עצים',
          roboCircuit: 'בקרת רובוטים',
          sweetShop: 'חנות<br/>ממתקים',
          teacups: 'כוסות',
          upperArcade: 'משחקיה<br/>עליונה',
          village: 'כפר'
        },
        tower: {
          northRoof: 'גג צפוני',
          northRoofNotShown: 'גג צפוני<br/>(לא מוצג)',
          southRoof: 'גג דרומי',
          southRoofNotShown: 'גג דרומי<br/>(לא מוצג)',
          roofAccess: 'גישת<br/>גג',
          northRappel: 'סנפליג צפוני',
          southRappel: 'סנפלינג דרומי',
          mezzanine: 'קומת שירות ביניים',
          ventilation: 'אוורור',
          centerAtrium: 'אטריום<br/>מרכזי',
          infoBooth: 'דלפק מידע',
          eastAtrium: 'אטריום<br/>מזרחי',
          westAtrium: 'אטריום<br/>מערבי',
          eastBalcony: 'מרפסת<br/>מזרחית',
          westBalcony: 'מרפסת<br/>מערבית',
          galleryMain: 'גלריה<br/>ראשית',
          mediaCenter: 'מרכז<br/>מדיה',
          galleryAnnex: 'גלריה צידית',
          giftShop: 'חנות<br/>מזכרות',
          exhibitRoom: 'חדר<br/>התערוכה',
          lanternRoom: 'חדר<br/>מנורות',
          elevator: 'מעלית',
          officesHallway: 'מסדרון משרדים',
          exhibitHallway: 'מסדרון תערוכה',
          offices: 'משרדים',
          companyReception: 'קבלה של<br/>החברה',
          supplyRoom: 'חדר<br/>אספקה',
          meetingRoom: 'חדר<br/>פגישות',
          ceoOffice: 'משרד<br/>המנכ"ל',
          bathroom: 'שירותים',
          serverRoom: 'חדר<br/>שרתים',
          northStairs: 'מדרגות צפוניות',
          westStairs: 'מדרגות<br/>מערביות',
          eastStairs: 'מדרגות<br/>מזרחיות',
          mainReception: 'קבלה<br/>ראשית',
          centerHallway: 'מסדרון<br/>ראשי',
          teaRoom: 'חדר תה',
          lounge: 'טרקלין',
          bar: 'בר',
          kitchen: 'מטבח',
          restaurant: 'מסעדה',
          birdRoom: 'חדר<br/>ציפורים',
          restaurantReception: 'קבלה של<br/>המסעדה',
          restaurantHallway: 'מסדרון מסעדה',
          barHallway: 'מסדרון בר',
          westObservatory: 'מצפה<br/>מערבי',
          bonsaiRoom: 'חדר<br/>בונסאי',
          traditionalHall: 'היכל מסורתי',
          gameRoom: 'חדר<br/>משחקים',
          eastObservatory: 'מצפה<br/>מזרחי',
          fountain: 'מזרקה',
          northAirDuct: 'תעלת אוורור<br/>צפונית',
          eastAirDuct: 'תעלת אוורור<br/>מזרחית',
          westAirDuct: 'תעלת אוורור<br/>מערבית'
        },
        yacht: {
          spawnSubmarine: 'צוללת',
          spawnZodiak: 'זודיאק',
          spawnSnowMobile: 'רכבי שלג',
          mapsRoom: 'חדר מפות',
          cockpit: 'גשר הפיקוד',
          cockpitHallway: 'מסדרון לגשר',
          captainsOffice: 'משרד<br/>הקפטן',
          cockpitBalcony: 'מרפסת<br/>הגשר',
          topDeckStairs: 'מדרגות<br/>סיפון<br/>עליון',
          helipadEntrance: 'כניסת<br/>מנחת<br/>מסוקים',
          helipad: 'מנחת מסוקים',
          spaDeck: 'סיפון<br/>ספא',
          eastDeck: 'סיפון מזרחי',
          westDeck: 'סיפון מערבי',
          frontDeck: 'סיפון<br/>קדמי',
          masterBedroom: 'חדר<br/>שינה<br/>ראשי',
          casino: 'קסינו',
          pokerRoom: 'חדר<br/>פוקר',
          bathroom: 'שירותים',
          bedroomHallway: 'מסדרון חדר שינה',
          casinoHallway: 'מסדרון קסינו',
          globeHallway: 'מסדרון<br/>גלובוס',
          lounge: 'טרקלין',
          cafeteria: 'קפיטריה',
          engine: 'מנוע',
          backEntrance: 'כניסה<br/>אחורית',
          rearDeck: 'סיפון<br/>אחורי',
          serverRoom: 'חדר<br/>שרתים',
          engineStorage: 'אחסון<br/>מנועים',
          engineControl: 'בקרת<br/>מנועים',
          backStairs: 'מדרגות<br/>אחוריות',
          emergencyExit: 'יציאת<br/>חירום',
          engineHallway: 'מסדרון מנועים',
          frontStairs: 'מדרגות<br/>קדמיות',
          kitchen: 'מטבח',
          staffDormitory: 'מעונות<br/>צוות',
          westBalcony: 'מרפסת מערבית',
          eastBalcony: 'מרפסת מזרחית',
          kitchenHallway: 'מסדרון מטבח',
          kitchenStairs: 'מדרגות מטבח',
          kitchenPantry: 'מזווה<br/>מטבח',
          infirmary: 'מרפאה',
          borealSubRoom: 'חדר תת<br/>קרקעי',
          cafeteriaHallway: 'מסדרון קפיטריה',
          engineUtility: 'שירות<br/>מנועים',
          submarine: 'צוללת',
          westGlacier: 'קרחון מערבי',
          eastHullBreach: 'פרצה<br/>מזרחית',
          eastGlacier: 'קרחון מזרחי',
          frozenRiver: 'נהר קפוא',
          zodiac: 'זודיאק',
          westHullBreach: 'פרצה<br/>מערבית',
          kingOfTheWorld: 'מלך העולם',
          roof: 'גג',
          anchorName: 'עוגן',
          aklarkSubEntrance: 'כניסה תחתית'
        }
      }
    };

  R6MLangTerms.registerLanguage(name, terms, 'RTL');

  return  {
    name: name,
    terms: terms
  };
})(R6MLangTerms);
