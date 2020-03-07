insert into community.categories values (1,"דיונים");
insert into community.categories values (2,"לימודים והשכלה");
insert into community.categories values (3,"תחביבים");
insert into community.categories values (4,"מחשבים ואינטרנט");
insert into community.categories values (5,"תכנות ובניית אתרים");
insert into community.categories values (6,"ספורט");

insert into community.forums values (1, "בפורום דיבורים תוכלו לתקשר עם שאר הקהילה, להכיר משתמשים חדשים ולדון בנושאים שונים.", "דיבורים");
insert into community.forums values (2, "ברוכים הבאים לפורום סקרים! בפורום זה תוכלו לערוך סקרים בנושאים שמעניינים אתכם ולענות על סקרים של משתמשים אחרים.", "סקרים");
insert into community.forums values (3, "ברוכים הבאים לפורום מסביב לעולם! בפורום תוכלו לדון, לבקש עזרה ולהתייעץ בכל הנוגע לחוץ לארץ. תמונות, מקומות יפים, סיקורים, מדריכים, תקריות מעניינות, המלצות, סיפורים ועוד.", "טיולים");
insert into community.forums values (4, "ראיתם חדשות? קראתם עיתון? שמעתם ידיעה אקטואלית? בפורום דיונים ואקטואליה תוכלו לשתף, להביע דעה, לדון, ליידע ולשמוע את דעתכם.אל תשמרו את דעתכם בבטן ובואו להגיב על נושאים במחלוקת בארץ ובעולם. ", "דיונים ואקטואליה");

insert into community.categories_forums values(1, 1);
insert into community.categories_forums values(1, 2);
insert into community.categories_forums values(1, 3);
insert into community.categories_forums values(1, 4);

insert into community.forums values (5, "ברוכים הבאים לפורום סיכומים ועבודות! בפורום זה תוכלו לקבל סיוע מהגולשים בקשיים במציאת סיכום/ הכנת עבודה. כמו כן, תוכלו לפרסם את הסיכום/ העבודה שלכם לעזרת הגולשים.", "סיכומים ועבודות");
insert into community.forums values (6, "ברוכים הבאים לפורום מדעי המחשב ואלקטרוניקה! בפורום זה תוכלו להיוועץ ולשאול בכל הקשור במגמות מדעי המחשב ואלקטרוניקה.", "מדעי המחשב ואלקטרוניקה");
insert into community.forums values (7, "רוכים הבאים לפורום כלכלה ועסקים! בפורום הזה תוכלו לשאול ולברר כל מה שקשור ללימודי כלכלה ומנהל עסקים, ותמצאו בו דיונים מרתקים על כל מה שקורה בעולם העסקי ועל כלכלת ישראל בעבר, הווה ועתיד.", "כלכלה ועסקים");
insert into community.forums values (8, "בפורום זה תוכלו למצוא המון מבחנים הקשורים ב־IQ שלכם ולפרסם אתרי IQ וציונים שקיבלתם. כמו כן, תוכלו לפרסם חידות, לבקש עזרה או ליהנות מפתרון חידות שאחרים פרסמו.", "מבחני IQ וחידות");

insert into community.categories_forums values(2, 5);
insert into community.categories_forums values(2, 6);
insert into community.categories_forums values(2, 7);
insert into community.categories_forums values(2, 8);

insert into community.forums values (9, "ברוכים הבאים אל פורום תחביבים כללי! בפורום זה תוכלו להתייעץ, לדון, לשאול ולפרסם בכל הנוגע לתחביבים שלכם.", "תחביבים - כללי");
insert into community.forums values (10, "עוסקים בפורום קסמים וטריקים בעולם הקסמים - קלפים, מטבעות, טריקים של זריזות ידיים וכו'. כאן תוכלו לרכוש וללמוד את השליטה בקסמים ואת המיומנות שתמיד רציתם, לימוד קסמים ועוד.", "קסמים וטריקים");
insert into community.forums values (11, "הוא מהיר, עצבני וזה לא עוד סרט - זה פורום מוטוריקה ורכב. כתבות, סיקורים על מכוניות, אירועי ספורט מוטורי, בקשות, המלצות, חוות דעת ועוד - הכל כאן! ", "מוטוריקה ורכב");
insert into community.forums values (12, "ברוכים הבאים אל פורום צלילה ודיג! כאן תוכלו לדבר, להתייעץ ולדון בכל הנוגע לדיג ולצלילה כגון ציוד, מקומות מומלצים לדיג, ובאופן כללי בכל הקשור לנושא דיג וצלילה.", "צלילה ודיג");

insert into community.categories_forums values(3, 9);
insert into community.categories_forums values(3, 10);
insert into community.categories_forums values(3, 11);
insert into community.categories_forums values(3, 12);

insert into community.forums values (13, "ברוכים הבאים לפורום תמיכה טכנית - מחשבים! צריכים תמיכה טכנית בנוגע לבעיה או שאלה הקשורה למחשב? הגעתם למקום הנכון!", "תמיכה טכנית");
insert into community.forums values (14, "ברוכים הבאים לפורום עולם התוכנה! בפורום זה יפורסמו חדשות, עדכונים, סקרים, סיקורים, דיונים ושאלות בנושא התוכנה. כאן גם תוכלו לדון או להתייעץ בנוגע לכל תוכנה קיימת וחוקית.", "עולם התוכנה");
insert into community.forums values (15, "ברוכים הבאים לפורום Windows! בפורום זה יפורסמו חדשות, עדכונים, סקרים, סיקורים, דיונים ושאלות בנושא מערכת ההפעלה Windows. כאן גם תוכלו לדון או לקבל תמיכה וייעוץ בנוגע לכל גרסאות מערכות ההפעלה של ווינדוס.", "ווינדוס");
insert into community.forums values (16, "ברוכים הבאים לפורום תוכנות להורדה! בפורום זה תוכלו למצוא מגוון תוכנות להורדה.", "תוכנות להורדה");

insert into community.categories_forums values(4, 13);
insert into community.categories_forums values(4, 14);
insert into community.categories_forums values(4, 15);
insert into community.categories_forums values(4, 16);

insert into community.forums values (17, "פורום זה תוכלו לדון, לשאול ולדבר על כל נושא אשר קשור לקידום אתרים. כאן תוכלו למצוא תשובה מספקת לפתרונות קידום במידות השונות לאתרים קטנים וגדולים כאחד.", "קידום אתרים");
insert into community.forums values (18, "בצד לקוח תוכלו ללמוד את הבסיס לבניית אתרים ועד לרמה מתקדמת. בפורום זה תוכלו למצוא מדריכים, עזרה וכמובן את השפות הבאות: HTML ,JavaScript ,CSS וכו'...", "שפות צד לקוח");
insert into community.forums values (19, "בפורום זה תוכלו לדון, לשאול ולדבר על כל נושא שקשור בשפות צד השרת השונות, כגון PHP, ASP.NET, JSP וכו'... בין היתר, תוכלו לקרוא ולכתוב מדריכים על שפות אלו!", "שפות צד שרת");
insert into community.forums values (20, "בפורום זה תוכלו להיות חלק מקהילת מפתחי האפליקציות בישראל.בפורום זה תוכלו לדון, לפרסם ולשאול שאלות בנושא פיתוח תכנות ועיצוב האפליקציות.", "פיתוח אפליקציות");

insert into community.categories_forums values(5, 17);
insert into community.categories_forums values(5, 18);
insert into community.categories_forums values(5, 19);
insert into community.categories_forums values(5, 20);

insert into community.forums values (21, "ברוכים הבאים לפורום בריאות ותזונה! כאן ניתן לדבר על הרגלי תזונה נכונים, על קבוצות המזון, על פעילויות ספורטיביות שישפרו את אורח חיינו ועל הרגלי שינה נכונים וכו'.", "בריאות ותזונה");
insert into community.forums values (22, "ברוכים הבאים לפורום כושר ופיתוח הגוף, כאן תוכלו להתייעץ לגבי תוכנית הכושר שלכם ולקבל סיוע ממיטב המומחים של הקהילה לגבי בריאות הגוף וכושר גופני.", "כושר ופיתוח גוף");
insert into community.forums values (23, "ברוכים הבאים אל פורום כדורגל! בפורום כדורגל תוכלו לשאול שאלות, לפרסם כתבות ודיונים מעניינים שקשורים לספורט הנפוץ ביותר בעולם כדורגל.", "כדורגל");
insert into community.forums values (24, "ברוכים הבאים לפורום כדורסל! בפורום זה תוכלו לדון/לעזור בכל נושא הקשור לכדורסל: אם זה סיקורי משחקים אישיים/בוגרים, שחקנים, קבוצות ועוד.", "כדורסל");

insert into community.categories_forums values(6, 21);
insert into community.categories_forums values(6, 22);
insert into community.categories_forums values(6, 23);
insert into community.categories_forums values(6, 24);