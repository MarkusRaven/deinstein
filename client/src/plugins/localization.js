import Vue from 'vue';
import {createI18n} from 'vue-i18n';

export const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    en: {
      // introsec
      'homeH1': 'Create a tile design for yourself',
      'descHomeIntro': `And that's how it works:Choose your stone, choose your design, enter your Maybe, You order and we deliver.`,
      'toTheShop': 'TO THE SHOP',
      // menu
      'home': 'Home',
      'DeinSteinDesign': 'DeinSteinDesign',
      'tiles': 'Tiles',
      'phSeacrh': 'What are you looking for?',
      // recsec
      'resSecTitle': 'Recommendations for you',
      'mk': 'Modern Kitchens',
      'descMk': 'Light tiles for the kitchen with a beautiful finish for a unique, ultra-modern style.',
      'tk': 'Traditional Kitchens',
      'descTk': 'The aged light tones of the tiles make traditional kitchens a popular choice in country houses.',
      'mB': 'Minimalistic bathrooms',
      'descmB': 'Dark tile tones will make the bathroom interior expensive and emphasize minimalism.',
      'h-tB': 'High-tech bathrooms',
      'descH-tB': 'The gray tones of the tiles will make the shape of the bathroom more strict, clear and concise.',
      'viewAll': 'VIEW ALL',
      // create desing sec
      'creatteDesTitle': 'Create your own tile design',
      'creatteDesDesc': `Creating tiles to fit your size is what we do best-let's show you how to get startedâ€¦`,
      'createtNow': 'CREATE NOW',
      // will be interested
      'wbiTitle': 'You will be interested',
      'wbiItem1Title': 'New tiles in DeinSteinDesign',
      'wbiItem1Desc': 'Check out the new tiles in the DeinSteinDesign assortment.',
      'wbiItem2Title': 'Tiles at affordable prices',
      'wbiItem2Desc': 'See a selection of different tiles at affordable prices.',
      'wbiItem3Title': 'Create a tile design with a cutout for the sink',
      'wbiItem3Desc': 'Create your own tile design with a cutout for the sink with the help of our editor.',
      'readMore': 'READ MORE',
      // footer
     'Navigation': 'Navigation',
     'Home': `Home`,
     'deinsteindesign': 'DeinSteinDesign',
     'KITCHEN': 'Tiles',
     'Copyright': `Copyright Â© 2021 DeinSteinDesign. All rights reserved.`,
     'DatenschutzerklĂ¤rung': 'Privacy Policy',
     'Impressum': 'User Agreement',
     'Connections': `Connections`,
     'Facebook': 'Facebook',
     'Twitter': 'Twitter',
     'Instagram': `Instagram`,
     'Youtube': 'Youtube',
     'Account': 'Account',
     'Your account': `Your account`,
     'Returns Centre': 'Returns Centre',
     'protection': '100 % purchase protection',
     'Help': `Help`,
     // page DeinSteinDesign
     // podmenu
     'home': 'Home',
     'deinsteindesign': `DeinSteinDesign`,
     'HeadingH1': 'Erstellen Dein Stein Design',
     'Subtitle': `At DeinSteinDesign, we pride ourselves on helping customers choose the perfect tile shape for their kitchens, bathrooms, stairs and window sills. With the help of our tile editor, you will create your own tile of the desired size.`,
     // filter  
     'slabs': 'Slabs for',
     'bathroom': 'Bathroom',
     'Kitchen': `Kitchen`,
     'Stairs': 'Stairs',
     'Windowsill': 'Windowsill',
     'Material': `Material`,
     'granite': `Granite`,
     'marble': `Marble`,
     'basalt': `Basalt`,
     'Matcolor': `Material color`,
     'View': 'View all colors',
     // list
     'Basalt3': 'Basalt stein â€œMUSTERâ€?',
     'Shower': `Shower tray silver sparkie granite stone Delivery time 1-3 weeks`,
     'buttonEDITOR': 'STEIN EDITOR',
     'Marbleh3': 'Marble stein â€œMUSTERâ€?',
     'Shower': `Shower tray silver sparkie granite stone Delivery time 1-3 weeks`,
     'buttonEDITOR': 'STEIN EDITOR',
     // page Tiles
     // podmenu
     'home': 'Home',
     'Tiles': `Tiles`,
     'HeadingH1': 'All our tiles',
     'Subtitle': `At DeinSteinDesign, we pride ourselves on helping customers find the perfect tile for their bathrooms. With our inspiring assortment, you will create the bathroom of your dreams.`,
     // filter  
     'Types': 'Types of tiles',
     'Bicotura': 'Bicotura',
     'Monocot': `Monocot`,
     'Porcelain tile': 'Porcelain tile',
     'Cotto': 'Cotto',
     'Cottoforte': `Cottoforte`,
     'Clinker': 'Clinker',
     'Clinker': 'Majolica',
     'Color': 'Tile color',
     'View': 'View all colors',
     'Price': `Price, â‚¬`,
     // list
     'Graniteh3': 'Granite tile â€œMUSTERâ€?',
     'Shower': `Shower tray silver sparkie granite stone Delivery time 1-3 weeks`,
     'permÂ²': 'Price per mÂ²',
     'â‚¬ 75': 'â‚¬ 75',
     'Stockpcs': 'Stock: 320 pcs',
     'buttonEDITOR': 'TILE EDITOR',
     // page DatenschutzerklĂ¤rung
     // header DATENSCHUTZERKLĂ„RUNG + EINLEITUNG
     'DATEN': 'PRIVACY POLICY',
     'EINLEITUNG': `INTRODUCTION`,
     'Mitder ': 'With the following data protection declaration, we, Bakuli GmbH, Am Steinberg 13, 01309 Dresden, would like to inform you about the types of your personal data (hereinafter also referred to as "data") that we process, for what purposes and to what extent. The data protection declaration applies to all processing of personal data carried out by us, both in the context of the provision of our services and in particular on our websites, in mobile applications and within external online presences, such as our social media profiles (hereinafter collectively referred to as "online offer"). The following provisions inform you about the type, scope, duration and purpose of the processing of personal data by us as the responsible provider of this website as well as about the third-party components used by us for optimisation purposes and to increase the quality of use that are relevant to data protection. We have taken numerous technical, contractual and organisational measures to ensure that the applicable data protection regulations are complied with and thus to protect the data managed by us against accidental or intentional manipulation, loss, destruction or against access by unauthorised persons. Nevertheless, please note that Internet-based data transmissions (e.g. communication by e-mail) generally have security vulnerabilities, so that absolute protection cannot be guaranteed. For this reason, every data subject is free to transmit personal data to us by alternative means, for example by telephone. The terms used are not gender-specific.',
     // header VERANTWORTLICHER  
     'VERANTWORTLICHER': 'RESPONSIBLE',
     'GmbH': 'DeinSteinDesign GmbH',
     'Steinberg': `Am Steinberg 13`,
     'Dresden': '01309 Dresden',
     // header VERTRETUNGSBERECHTIGTE PERSONEN
     'PERSONEN': 'AUTHORIZED REPRESENTATIVES',
     'Tina': `Tina Oehler & Linda Winnie Grumbt`,
     'EMail': 'E-Mail: hello@deinsteindesign.de',
     // header ĂœBERSICHT DER VERARBEITUNGEN
     'VERARBEITUNGEN': 'OVERVIEW OF PROCESSING OPERATIONS',
     'Die': 'The following overview summarizes the types of data processed and the purposes of their processing and refers to the data subjects.',
     // header ARTEN DER VERARBEITETEN DATEN
     'ARTENH1': 'TYPES OF DATA PROCESSED',
     'Price': `â€¢ Inventory data (e.g. names, addresses). â€¢ Content data (e.g. entries in online forms). â€¢ Contact details (e.g. e-mail, telephone numbers). * Meta / communication data (e.g. device information, IP addresses). * Usage data (e.g. websites visited, interest in content, access times)`,
     // header KATEGORIEN BETROFFENER PERSONEN
     'KATEGORIENH1': 'CATEGORIES OF DATA SUBJECTS',
     'Kommunikationspartner': 'â€¢ Communication partner. â€¢ Users (e.g. website visitors, users of online services).',
     // header ZWECKE DER VERARBEITUNG
     'ZWECKEH1': 'PURPOSES OF PROCESSING',
     'Bereitstellung': '* Provision of our online offer and user-friendliness. â€¢ Conversion measurement (measuring the effectiveness of marketing measures). â€¢ Direct marketing (e.g. by e-mail or post). â€¢ Interest-based and behavioral marketing. â€¢ Contact requests and communication. â€¢ Profiling (creation of user profiles). â€¢ Remarketing. â€¢ Range measurement (e.g. access statistics, recognition of returning visitors). â€¢ Security arrangements. â€¢ Tracking (e.g. interest-based/behavioral profiling, use of cookies). â€¢ Provision of contractual services and customer service. â€¢ Manage and respond to requests.',
     // header MASSGEBLICHE RECHTSGRUNDLAGEN
     'MASSGEBLICHEH1': 'RELEVANT LEGAL BASES',
     'Folgenden': 'In the following, we inform you of the legal bases of the General Data Protection Regulation (GDPR), on the basis of which we process the personal data. Please note that in addition to the provisions of the GDPR, the national data protection regulations may apply in your or our country of residence and domicile. Should more specific legal bases also be decisive in individual cases, we will inform you of these in the data protection declaration. â€¢ Consent (Art. 6 para. 1 S. 1 lit. a. GDPR) - The data subject has given his or her consent to the processing of personal data concerning him or her for one or more specific purposes â€“ â€¢ Fulfilment of contract and pre-contractual inquiries (Art. 6 para. 1 S. 1 lit. DSGVO) - The processing is necessary for the performance of a contract to which the data subject is a party or to carry out pre-contractual measures at the request of the data subject. â€¢ Legitimate interests (Art. 6 para. 1 S. 1 lit. f. GDPR) - The processing is necessary to safeguard the legitimate interests of the controller or a third party, unless the interests or fundamental rights and freedoms of the data subject, which require the protection of personal data, prevail. National data protection regulations in Germany: In addition to the data protection regulations of the General Data Protection Regulation, national data protection regulations in Germany apply. This includes in particular the Act on the Protection against Misuse of Personal data in Data Processing (Federal Data Protection Act â€“ BDSG). In particular, the BDSG contains special provisions on the right to information, the right to erasure, the right to object, the processing of special categories of personal data, processing for other purposes and transmission as well as automated decision-making in individual cases, including profiling. Furthermore, it regulates data processing for the purposes of the employment relationship (Â§ 26 BDSG), in particular with regard to the establishment, implementation or termination of employment relationships as well as the consent of employees. Furthermore, state data protection laws of the individual federal states may apply.',
     // header SICHERHEITSMASSNAHMEN
     'SICHERH1': 'SECURITY ARRANGEMENTS',
     'Wir': 'We take appropriate technical and organizational measures in accordance with the legal requirements, taking into account the state of the art, the implementation costs and the nature, scope, circumstances and purposes of the processing as well as the different probabilities of occurrence and the extent of the threat to the rights and freedoms of natural persons, to ensure a level of protection appropriate to the risk. The measures include, in particular, ensuring the confidentiality, integrity and availability of data by controlling physical and electronic access to the data as well as the access, input, disclosure, availability and separation of the data concerning them. Furthermore, we have established procedures that ensure the exercise of data subject rights, the deletion of data and reactions to the endangerment of the data. Furthermore, we already take the protection of personal data into account during the development or implementation of our website. Selection of hardware, software and procedures according to the principle of data protection, by technology design and by data protection-friendly presets. Shortening of the IP address: If IP addresses are processed by us or by the service providers and technologies used and the processing of a complete IP address is not necessary, the IP address will be shortened (also referred to as "IP masking"). The last two digits or the last part of the IP address after a period are removed or replaced by placeholders. The purpose of shortening the IP address is to prevent or make it much more difficult to identify a person based on his or her IP address. SSL encryption (https): In order to protect your data transmitted via our online offer, we use SSL encryption. You can recognize such encrypted connections by the prefix https: / / in the address line of your browser.',
     // header ĂœBERMITTLUNG UND OFFENBARUNG VON PERSONENBEZOGENEN DATEN
     'BERMITTLUNGH1': 'TRANSMISSION AND DISCLOSURE OF PERSONAL DATA',
     'Rahmen': 'In the context of our processing of personal data, the data may be transmitted to other bodies, companies, legally independent organisational units or persons or disclosed to them. The recipients of this data may include, for example, payment institutions in the context of payment transactions, service providers commissioned with IT tasks or providers of services and content that are integrated into a website. In such a case, we observe the legal requirements and conclude in particular corresponding contracts or contracts. Agreements that serve to protect your data, with the recipients of your data. Data transfer within the Organization: We may transfer personal data to other entities within our organization or provide you with access to such data. If this disclosure is made for administrative purposes, the disclosure of the data is based on our legitimate business and business interests or takes place if it is necessary to fulfill our contractual obligations or if the consent of the data subject or legal permission exists.',
     // header EINSATZ VON COOKIES
     'EINSATZH1': 'USE OF COOKIES',
     'EINSATZH1': 'As part of our online offer, so-called cookies are used. These are data packets that are exchanged between the server of the online offer and the users browser. These are stored by the respective devices used (PC, notebook, tablet, smartphone, etc.) when using the online offer. In this respect, cookies cannot cause any damage to the devices used. In particular, they do not contain viruses or other malware. Information is stored in the cookies, which results in each case in connection with the specifically used end device. Under no circumstances can we obtain direct knowledge of the identity of the visitor to the website. Cookies are mostly accepted according to the basic settings of the browsers. The browser settings can be set up in such a way that cookies are either not accepted on the devices used or that a special notice is given before a new cookie is created. However, it is pointed out that the deactivation of cookies may mean that not all functions of the online offer can be used in the best possible way. The use of cookies serves to make the use of our online offer more comfortable. For example, session cookies can be used to track whether the visitor has already visited individual pages of the website. After leaving the website, these session cookies are automatically deleted. Temporary cookies are used to improve user-friendliness. They are stored on the visitors device for a temporary period of time. When you visit the website again, it is automatically recognized that the visitor has already called up the page at an earlier time and which entries and settings were made in order not to have to repeat them. Cookies are also used to analyze the views of the online offer for statistical purposes and for the purpose of improving the offer. These cookies make it possible to automatically recognize that a website has already been accessed by the visitor when you visit it again. Here, an automatic deletion of cookies takes place after a specified time. Storage period: If we do not provide you with explicit information about the storage period of permanent cookies (e.g. as part of a so-called cookie opt-in), please assume that the storage period can be up to two years. General information on revocation and objection (opt-out): Depending on whether the processing is based on consent or legal permission, you have the option at any time to revoke your consent or to object to the processing of your data by cookie technologies (collectively referred to as "opt-out"). You can first declare your objection by means of the settings of your browser, e.g. by deactivating the use of cookies (whereby the functionality of our online offer can also be restricted). An objection to the use of cookies for online marketing purposes can also be made by means of a variety of services, especially in the case of tracking, via the websites https://optout.aboutads.info and https://www.youronlinechoices.com / be explained. In addition, you may receive further objection notices in the context of the information on the service providers and cookies used. Processing of cookie data on the basis of consent: We use a procedure for cookie consent management, in the context of which the consent of the users in the use of cookies, or the processing and providers mentioned in the context of the cookie consent management procedure, can be obtained and managed and revoked by the users. In this case, the declaration of consent is stored in order not to have to repeat the query again and to be able to prove the consent in accordance with the legal obligation. The storage can take place on the server side and/or in a cookie (so-called opt-in cookie, or with the help of comparable technologies) in order to be able to assign the consent to a user or his device. Subject to individual information on the providers of cookie management services, the following notes apply: The duration of the storage of consent can be up to two years. In this case, a pseudonymous user identifier is formed and stored with the time of consent, information on the scope of the consent (e.g. which categories of cookies and/or service providers) as well as the browser, system and terminal device used. â€¢ Types of data processed: usage data (e.g. websites visited, interest in content, access times), meta/communication data (e.g. device information, IP addresses). â€¢ Data subjects: Users (e.g. website visitors, users of online services). â€¢ Legal basis: Consent (Art. 6 para. 1 S. 1 lit. a.GDPR), legitimate interests (Art. 6 para. 1 S. 1 lit. f.GDPR).',
     // header EINGESETZTE DIENSTE UND DIENSTEANBIETER
     'EINGESETZTEH1': 'SERVICES AND SERVICE PROVIDERS USED',
     'Borlabs': 'Borlabs Cookie: Our online offer uses Borlabs cookie, which sets a technically necessary cookie to store the cookie consent of a user. Borlabs cookies do not process any personal data. The Borlabs cookie stores the consent given by a user when entering a website. If the user wishes to revoke this consent, he can delete the cookie in his browser. When the website is re-entered/reloaded, the user is asked again for his cookie consent.',
     // page Impressum
     // header IMPRESSUM + Diensteanbieter
     'IMPRESSUMH1': 'MASTHEAD',
     'DienstTitle': 'Diensteanbieter',
     'GmbH': 'DeinSteinDesign GmbH',
     'Steinberg': `Am Steinberg 3`,
     'Dresden': 'D-01309 Dresden',
     // header KontaktmĂ¶glichkeiten
     'KontaktmgH1': `Contact options`,
     'permÂ²': 'E-Mail: hello@deinsteindesign.de Đ?Đ¾Đ½Ñ‚Đ°ĐºÑ‚Đ½Đ°Ñ? Ñ„Đ¾Ñ€Đ¼Đ°: https://deinsteindesign.de',
     // header Vertretungberechtigte
     'VertretungberechtigteH1': `Authorized representatives`,
     'Vertretungs': 'Managing Directors: Tina Oehler and Linda Winnie Grumbt Register court: Amtsgericht Dresden Registration number: HRB 40323 VAT identification number: DE335975861',
     // header Inhaltlich Verantwortliche (o.S.d. Â§ 18 Abs. 2 MStV.):
     'InhaltlichH1': `Responsible for content (o.S.d. Â§ 18 Abs. 2 MStV.):`,
     'Tina': 'Tina Oehler Am Steinberg 3 D-01326 Dresden',
     // header Hinweis Nach Â§ 36 VSBG
     'HinweisH1': `Note After Â§ 36 VSBG`,
     'Die': `The platform for online dispute resolution of the EU Commission can be found at http://ec.europa.eu/consumers/odr We are not obliged to participate in a dispute settlement procedure before a consumer arbitration board and are not prepared in principle.`,
     // header Design, Umsetzung
     'DesignH1': `Design, Implementation`,
     'DesignH1': `Puls13-Strategy and Creation GbR https://puls13.com`,
     // header Marketingberatung
     'MarketingH1': `Marketing consultancy`,
     'Anne': `Anne-Kathrin Liebthal https://www.comigo-marketing.de`,
     // header Fotografie
     'FotografieH1': `Photography`,
     'https': `https://get-shot.de`,
     // page Checkout
     // podmenu
     'home': 'Home',
     'Checkout': `Checkout`,
     // header Billing info
     'BillingH1': 'Billing info',
     'PleaseÑ€2': 'Please enter your billing info',
     'Step': 'Step 1 of 5',
     // data entry
     'First': 'First name',
     'Last': 'Last name',
     'Email': `Email address`,
     'Phone': 'Phone number',
     'Address': `Address`,
     'Town': 'Town / City',
     'Country': `State / Country`,
     'Postal': 'ZIP/Postal code',
     'Ship': 'Ship to a different address?',
     // header Billing method
     'BillH1': 'Billing method',
     'PleaseÑ€2': 'Please choose the delivery',
     'Step': 'Step 2 of 5',
     // header Payment method
     'PaymentH1': 'Payment method',
     'PleaseÑ€2': 'Please enter your payment method',
     'Step': 'Step 3 of 5',
     'Credit': 'Credit card',
     'Card': 'Card number',
     'holder': 'Card holder',
     'Expiration': 'Expiration date',
     'CVC': 'CVC',
     'PayPal': 'PayPal',
     'GooglePay ': 'GooglePay ',
     // header Additional informations
     'Additional': 'Additional informations',
     'Need': 'Need something else? We will make it for you!',
     'Step': 'Step 4 of 5',
     'Order': 'Order notes',
     'Need': 'Need a specific delivery day? Sending a gitf? Letâ€™s say ...',
     // header Confirmation
     'ConfirmationH1': 'Confirmation',
     'Weare': 'We are getting to the end. Just few clicks and your order si ready!',
     'Step': 'Step 5 of 5',
     'Agree': 'I agree with sending an Marketing and newsletter emails. No spam.',
     'With': 'I agree with our terms and conditions and privacy policy.',
     'Completebutt': 'Complete order',
     // header All your data are safe
     'Allyour': `All your data are safe`,
     'Weare': `We are using the most advanced security to provide you the best experience ever.`,
     // page stein editor (Bathroom)
     // menu
     'home': 'Home',
     'DeinSteinDesign': `DeinSteinDesign`,
     'Tiles': `Tiles`,
     'PRINT': `PRINT AND EXPORT`,
     'DeinSteinDesign': `DeinSteinDesign`,
     'CLOSE': `CLOSE EDITOR`,
     // menuleft
     'Bathroom': 'Bathroom',
     'Slab': `Slab size`,
     'Bohrung': `Hole`,
     'Ausschnitt': `Neckline`,
     'Ausklinkung': `Detaching`,
     'Armierung': `Reinforcement`,
     'Kitchen': `Kitchen`,
     'Windowsill': `Windowsill`,
     'Table': `Table`,
     'Stairs': `Stairs`,
     'ZOOM': `ZOOM IN`,
     'ZOOMOUT': `ZOOM OUT`,
     'mm': 'mm',
     // menuright
     'Set': 'Set the slab size',
     '1000mm': `1000 mm = 1 mt`,
     'Width': `Width`,
     'Length': `Length`,
     'APPLY': `APPLY`,
     'Fixing': `Fixing the size`,
     'This': `This parameter allows you to fix the tile size.`,
     'Thecost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     'â‚¬': `â‚¬`,
     'PAY': `TO PAY`,
     // menuright (Bohrung)
     'Set': 'Set the diameter hole',
     '1000mm': `1000 mm = 1 mt`,
     'Diameter': `Diameter`,
     'APPLY': `APPLY`,
     'MORE': `ADD MORE`,
     'Fixingdiameter': `Fixing the diameter`,
     'parameter': `This parameter allows you to fix the diameter of the cutout.`,
     'Cost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     'â‚¬': `â‚¬`,
     'PAY': `TO PAY`,
     // menuright (Ausschnitt)
     'Set': 'Set the size and rounding of the edges Neckline',
     '1000mm': `1000 mm = 1 mt`,
     'Width': `Width`,
     'Length': `Length`,
     'Corner': `Corner`,
     'Crop': `Crop`,
     'APPLY': `APPLY`,
     'MORE': `ADD MORE`,
     'Cost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     'â‚¬': `â‚¬`,
     'PAY': `TO PAY`,
     // menuright (Ausklinkung)
     'Set': 'Set the detaching size',
     '1000mm': `1000 mm = 1 mt`,
     'Side A': `Side A`,
     'Side B': `Side B`,
     'APPLY': `APPLY`,
     'MORE': `ADD MORE`,
     'Fixing size': `Fixing size`,
     'Thisparameter': `This parameter allows you to fix the size of the Ausklinkung.`,
     'Thecost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     'â‚¬': `â‚¬`,
     'PAY': `TO PAY`,
     // menuright (Ausklinkung)
     'Set': 'Set the detaching size',
     '1000mm': `1000 mm = 1 mt`,
     'Side A': `Side A`,
     'Side B': `Side B`,
     'APPLY': `APPLY`,
     'MORE': `ADD MORE`,
     'Fixing size': `Fixing size`,
     'Thisparameter': `This parameter allows you to fix the size of the Ausklinkung.`,
     'Thecost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     'â‚¬': `â‚¬`,
     'PAY': `TO PAY`,
     // menuright (Armierung)
     'Armierung': 'Reinforcement',
     'recomend': `We recommend a reinforcement for cutouts for e.g. the sink and an edge thickness less than 10cm`,
     'cost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     'â‚¬': `â‚¬`,
     'PAY': `TO PAY`,
     // page stein editor (Windowsill)
     // menu
     'home': 'Home',
     'DeinSteinDesign': `DeinSteinDesign`,
     'Tiles': `Tiles`,
     'PRINT': `PRINT AND EXPORT`,
     'DeinSteinDesign': `DeinSteinDesign`,
     'CLOSE': `CLOSE EDITOR`,
     // menuleft
     'Bathroom': 'Bathroom',
     'Kitchen': `Kitchen`,
     'Windowsill': `Windowsill`,
     'Windowsillsize': `Window sill size`,
     'Polierte': `Polished edge`,
     'Ausklinkung': `Detaching`,
     'Armierung': `Reinforcement`,
     'Table': `Table`,
     'Stairs': `Stairs`,
     'ZOOM': `ZOOM IN`,
     'ZOOMOUT': `ZOOM OUT`,
     'mm': 'mm',
     // menuright (Windowsill)
     'Set': 'Set the detaching size',
     '1000mm': `1000 mm = 1 mt`,
     'Width': `Width`,
     'Length': `Length`,
     'APPLY': `APPLY`,
     'Fixing size': `Fixing size`,
     'Thiswind': `This parameter allows you to fix the size of the window sill.`,
     'Thecost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     'â‚¬': `â‚¬`,
     'PAY': `TO PAY`,
     // page stein editor (Table)
     // menu
     'home': 'Home',
     'DeinSteinDesign': `DeinSteinDesign`,
     'Tiles': `Tiles`,
     'PRINT': `PRINT AND EXPORT`,
     'DeinSteinDesign': `DeinSteinDesign`,
     'CLOSE': `CLOSE EDITOR`,
     // menuleft
     'Bathroom': 'Bathroom',
     'Kitchen': `Kitchen`,
     'Windowsill': `Windowsill`,
     'Table': `Table`,
     'Tablesize': `Table size`,
     'Armierung': `Reinforcement`,
     'Stairs': `Stairs`,
     'ZOOM': `ZOOM IN`,
     'ZOOMOUT': `ZOOM OUT`,
     'mm': 'mm',
     // menuright (Table)
     'Settable': 'Set the table size',
     '1000mm': `1000 mm = 1 mt`,
     'Width': `Width`,
     'Length': `Length`,
     'APPLY': `APPLY`,
     'Fixing size': `Fixing size`,
     'Thiswind': `This parameter allows you to fix the size of the window sill.`,
     'Thecost': `The cost is calculated based on all your additions`,
     'Price': `Price`,
     'â‚¬': `â‚¬`,
     'PAY': `TO PAY`,
    },
  
  
    deu: {
      // introsec
      'homeH1': 'Erstellen Sie ein Fliesendesign fĂ¼r sich',
      'descHomeIntro': `Und so funktioniert es:WĂ¤hlen Sie Ihren Stein, wĂ¤hlen Sie Ihr Design, geben Sie Ihren Namen ein, Sie bestellen und wir liefern.`,
      'toTheShop': 'ZUM SHOP',
      // menu
      'home': 'Startseite',
      'DeinSteinDesign': 'DeinSteinDesign',
      'tiles': 'Kacheln',
      'phSeacrh': 'Was sucht ihr?',
      // recsec
      'resSecTitle': 'Empfehlungen fĂ¼r Sie',
      'mk': 'Moderne KĂ¼chen',
      'descMk': 'Leichte Fliesen fĂ¼r die KĂ¼che mit einem schĂ¶nen Finish fĂ¼r einen einzigartigen, hochmodernen Stil.',
      'tk': 'Traditionelle KĂ¼chen',
      'descTk': 'Die gealterten hellen TĂ¶ne der Fliesen machen traditionelle KĂ¼chen zu einer beliebten Wahl in LandhĂ¤usern.',
      'mB': 'Minimalistische Badezimmer',
      'descmB': 'Dunkle FliesentĂ¶ne machen das Badezimmerinnere teuer und betonen den Minimalismus.',
      'h-tB': 'High-tech-Badezimmer',
      'descH-tB': 'Die GrautĂ¶ne der Fliesen machen die Form des Badezimmers strenger, klarer und prĂ¤gnanter.',
      'viewAll': 'ALLE ANZEIGEN',
      // create desing sec
      'creatteDesTitle': 'Erstellen Sie Ihr eigenes Fliesendesign',
      'creatteDesDesc': `Das Erstellen von Kacheln fĂ¼r Ihre GrĂ¶ĂŸe ist das, was wir am besten kĂ¶nnen-wir zeigen Ihnen, wie Sie anfangen kĂ¶nnenâ€¦`,
      'createtNow': 'JETZT ERSTELLEN',
      // will be interested
      'wbiTitle': 'Sie werden interessiert sein',
      'wbiItem1Title': 'Neue Fliesen im DeinSteinDesign',
      'wbiItem1Desc': 'Schauen Sie sich die neuen Fliesen im DeinSteinDesign.',
      'wbiItem2Title': 'Fliesen zu erschwinglichen Preisen',
      'wbiItem2Desc': 'Sehen Sie eine Auswahl verschiedener Stile zu erschwinglichen Preisen.',
      'wbiItem3Title': 'Erstellen Sie ein Fliesendesign mit einem Ausschnitt fĂ¼r die SpĂ¼le',
      'wbiItem3Desc': 'Erstellen Sie mit Hilfe unseres Editors Ihr eigenes Fliesendesign mit einem Ausschnitt fĂ¼r die SpĂ¼le.',
      'readMore': 'LESEN SIE MEHR',
      // footer
     'Navigation': 'Navigation',
     'Home': `Startseite`,
     'deinsteindesign': 'DeinSteinDesign',
     'KITCHEN': 'Kacheln',
     'Copyright': `Copyright Â© 2021 DeinSteinDesign. Alle Rechte vorbehalten.`,
     'DatenschutzerklĂ¤rung': 'DatenschutzerklĂ¤rung',
     'Impressum': 'Impressum',
     'Connections': `Verbindungen`,
     'Facebook': 'Facebook',
     'Twitter': 'Twitter',
     'Instagram': `Instagram`,
     'Youtube': 'Youtube',
     'Account': 'Konto',
     'Your account': `Ihr Konto`,
     'Returns Centre': 'Zentrum fĂ¼r RĂ¼cksendungen',
     'protection': '100 % iger Kaufschutz',
     'Help': `Hilfe`,
     // page DeinSteinDesign
     // podmenu
     'home': 'Startseite',
     'deinsteindesign': `DeinSteinDesign`,
     'HeadingH1': 'Erstellen Dein Stein Design',
     'Subtitle': `Wir von DeinSteinDesign sind stolz darauf, unseren Kunden bei der Auswahl der perfekten Fliesenform fĂ¼r ihre KĂ¼chen, BĂ¤der, Treppen und FensterbĂ¤nke zu helfen. Mit Hilfe unseres Flieseneditors erstellen Sie Ihre eigene Fliese in der gewĂ¼nschten GrĂ¶ĂŸe.`,
     // filter  
     'slabs': 'Platten fĂ¼r',
     'bathroom': 'Bad',
     'Kitchen': `KĂ¼che`,
     'Stairs': 'Treppe',
     'Windowsill': 'Fensterbank',
     'Material': `Material`,
     'granite': `Granit`,
     'marble': `Marmor`,
     'basalt': `Basalt`,
     'Matcolor': `Farbe des Materials`,
     'View': 'Alle Farben anzeigen',
     // list
     'Basalt3': 'Basalt stein â€œMUSTERâ€?',
     'Shower': `Duschwanne Silber Sparkie Granitstein Lieferzeit 1-3 Wochen`,
     'buttonEDITOR': 'STEIN REDAKTION',
     'Marbleh3': 'Marble stone â€œMUSTERâ€?',
     'Shower': `Duschwanne Silber Sparkie Granitstein Lieferzeit 1-3 Wochen`,
     'buttonEDITOR': 'STEIN REDAKTION',
     // page Tiles
     // podmenu
     'home': 'Startseite',
     'Tiles': `Kacheln`,
     'HeadingH1': 'Alle unsere Fliesen',
     'Subtitle': `Wir von DeinSteinDesign sind stolz darauf, unseren Kunden zu helfen, die perfekte Fliese fĂ¼r ihr Badezimmer zu finden. Mit unserem inspirierenden Sortiment werden Sie das Bad Ihrer TrĂ¤ume gestalten.`,
     // filter  
     'Types': 'Arten von Fliesen',
     'Bicotura': 'Bicotura',
     'Monocot': `Monocot`,
     'Porcelain tile': 'Porcelain tile',
     'Cotto': 'Cotto',
     'Cottoforte': `Cottoforte`,
     'Clinker': 'Clinker',
     'Clinker': 'Majolica',
     'Color': 'Farbe der Fliese',
     'View': 'Alle Farben anzeigen',
     'Price': `Preis, â‚¬`,
     // list
     'Graniteh3': 'Granit fliese â€œMUSTERâ€?',
     'Shower': `Duschwanne Silber Sparkie Granitstein Lieferzeit 1-3 Wochen`,
     'permÂ²': 'Preis pro mÂ²',
     'â‚¬ 75': 'â‚¬ 75',
     'Stockpcs': 'Lagerbestand: 320 StĂ¼ck',
     'buttonEDITOR': 'KACHEL REDAKTION',
     // page DatenschutzerklĂ¤rung
     // header DATENSCHUTZERKLĂ„RUNG + EINLEITUNG
     'DATEN': 'DATENSCHUTZERKLĂ„RUNG',
     'EINLEITUNG': `EINLEITUNG`,
     'Mitder ': 'Mit der folgenden DatenschutzerklĂ¤rung mĂ¶chten wir, die Bakuli GmbH, Am Steinberg 13, 01309 Dresden, Sie darĂ¼ber aufklĂ¤ren, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als â€?Datenâ€œ bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die DatenschutzerklĂ¤rung gilt fĂ¼r alle von uns durchgefĂ¼hrten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer OnlineprĂ¤senzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als â€?Onlineangebotâ€œ). Die folgenden Bestimmungen informieren Sie Ă¼ber Art, Umfang, Dauer und Zweck der Verarbeitung personenbezogener Daten durch uns als verantwortlicher Anbieter dieser Website sowie Ă¼ber die von uns zu Optimierungszwecken sowie zur Steigerung der NutzungsqualitĂ¤t eingesetzten, datenschutzrelevanten Fremdkomponenten. Wir haben zahlreiche technische, vertragliche und organisatorische MaĂŸnahmen getroffen, um sicher zu stellen, dass die geltenden datenschutzrechtlichen Vorschriften eingehalten werden und um damit die durch uns verwalteten Daten vor zufĂ¤lliger oder vorsĂ¤tzlicher Manipulation, Verlust, ZerstĂ¶rung oder gegen den Zugriff unberechtigter Personen zu schĂ¼tzen. Bitte beachten Sie dennoch, dass internetbasierte DatenĂ¼bertragungen (z.B. die Kommunikation per E-Mail) grundsĂ¤tzlich SicherheitslĂ¼cken aufweisen, sodass ein absoluter Schutz nicht gewĂ¤hrleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu Ă¼bermitteln. Die verwendeten Begriffe sind nicht geschlechtsspezifisch.',
     // header VERANTWORTLICHER  
     'VERANTWORTLICHER': 'VERANTWORTLICHER',
     'GmbH': 'DeinSteinDesign GmbH',
     'Steinberg': `Am Steinberg 13`,
     'Dresden': '01309 Dresden',
     // header VERTRETUNGSBERECHTIGTE PERSONEN
     'PERSONEN': 'VERTRETUNGSBERECHTIGTE PERSONEN',
     'Tina': `Tina Oehler & Linda Winnie Grumbt`,
     'EMail': 'E-Mail: hello@deinsteindesign.de',
     // header ĂœBERSICHT DER VERARBEITUNGEN
     'VERARBEITUNGEN': 'ĂœBERSICHT DER VERARBEITUNGEN',
     'Die': 'Die nachfolgende Ăœbersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.',
     // header ARTEN DER VERARBEITETEN DATEN
     'ARTENH1': 'ARTEN DER VERARBEITETEN DATEN',
     'Price': `â€¢ Bestandsdaten (z.B. Namen, Adressen). â€¢ Inhaltsdaten (z.B. Eingaben in Onlineformularen). â€¢ Kontaktdaten (z.B. E-Mail, Telefonnummern). â€¢ Meta-/Kommunikationsdaten (z.B. GerĂ¤te-Informationen, IP-Adressen). â€¢ Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)`,
     // header KATEGORIEN BETROFFENER PERSONEN
     'KATEGORIENH1': 'KATEGORIEN BETROFFENER PERSONEN',
     'Kommunikationspartner': 'â€¢ Kommunikationspartner. â€¢ Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).',
     // header ZWECKE DER VERARBEITUNG
     'ZWECKEH1': 'ZWECKE DER VERARBEITUNG',
     'Bereitstellung': 'â€¢ Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit. â€¢ Konversionsmessung (Messung der EffektivitĂ¤t von MarketingmaĂŸnahmen). â€¢ Direktmarketing (z.B. per E-Mail oder postalisch). â€¢ Interessenbasiertes und verhaltensbezogenes Marketing. â€¢ Kontaktanfragen und Kommunikation. â€¢ Profiling (Erstellen von Nutzerprofilen). â€¢ Remarketing. â€¢ Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher). â€¢ SicherheitsmaĂŸnahmen. â€¢ Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies). â€¢ Erbringung vertragliche Leistungen und Kundenservice. â€¢ Verwaltung und Beantwortung von Anfragen.',
     // header MASSGEBLICHE RECHTSGRUNDLAGEN
     'MASSGEBLICHEH1': 'MASSGEBLICHE RECHTSGRUNDLAGEN',
     'Folgenden': 'Im Folgenden teilen wir die Rechtsgrundlagen der Datenschutzgrundverordnung (DSGVO), auf deren Basis wir die personenbezogenen Daten verarbeiten, mit. Bitte beachten Sie, dass zusĂ¤tzlich zu den Regelungen der DSGVO die nationalen Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland gelten kĂ¶nnen. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maĂŸgeblich sein, teilen wir Ihnen diese in der DatenschutzerklĂ¤rung mit. â€¢ Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO) â€“ Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie   betreffenden personenbezogenen Daten fĂ¼r einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben. â€¢ VertragserfĂ¼llung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO) â€“ Die Verarbeitung ist fĂ¼r die ErfĂ¼llung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur DurchfĂ¼hrung vorvertraglicher MaĂŸnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen. â€¢ Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO) â€“ Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, Ă¼berwiegen.  Nationale Datenschutzregelungen in Deutschland: ZusĂ¤tzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehĂ¶rt insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz â€“ BDSG). Das BDSG enthĂ¤lt insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf LĂ¶schung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung fĂ¼r andere Zwecke und zur Ăœbermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschlieĂŸlich Profiling. Des Weiteren regelt es die Datenverarbeitung fĂ¼r Zwecke des BeschĂ¤ftigungsverhĂ¤ltnisses (Â§ 26 BDSG), insbesondere im Hinblick auf die BegrĂ¼ndung, DurchfĂ¼hrung oder Beendigung von BeschĂ¤ftigungsverhĂ¤ltnissen sowie die Einwilligung von BeschĂ¤ftigten. Ferner kĂ¶nnen Landesdatenschutzgesetze der einzelnen BundeslĂ¤nder zur Anwendung gelangen.',
     // header SICHERHEITSMASSNAHMEN
     'SICHERH1': 'SICHERHEITSMASSNAHMEN',
     'Wir': 'Wir treffen nach MaĂŸgabe der gesetzlichen Vorgaben unter BerĂ¼cksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der UmstĂ¤nde und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des AusmaĂŸes der Bedrohung der Rechte und Freiheiten natĂ¼rlicher Personen geeignete technische und organisatorische MaĂŸnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewĂ¤hrleisten. Zu den MaĂŸnahmen gehĂ¶ren insbesondere die Sicherung der Vertraulichkeit, IntegritĂ¤t und VerfĂ¼gbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der VerfĂ¼gbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die LĂ¶schung von Daten und Reaktionen auf die GefĂ¤hrdung der Daten gewĂ¤hrleisten. Ferner berĂ¼cksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen. KĂ¼rzung der IP-Adresse: Sofern IP-Adressen von uns oder von den eingesetzten Dienstleistern und Technologien verarbeitet werden und die Verarbeitung einer vollstĂ¤ndigen IP-Adresse nicht erforderlich ist, wird die IP-Adresse gekĂ¼rzt (auch als â€?IP-Maskingâ€œ bezeichnet). Hierbei werden die letzten beiden Ziffern, bzw. der letzte Teil der IP-Adresse nach einem Punkt entfernt, bzw. durch Platzhalter ersetzt. Mit der KĂ¼rzung der IP-Adresse soll die Identifizierung einer Person anhand ihrer IP-Adresse verhindert oder wesentlich erschwert werden. SSL-VerschlĂ¼sselung (https): Um Ihre via unser Online-Angebot Ă¼bermittelten Daten zu schĂ¼tzen, nutzen wir eine SSL-VerschlĂ¼sselung. Sie erkennen derart verschlĂ¼sselte Verbindungen an dem PrĂ¤fix https:// in der Adresszeile Ihres Browsers.',
     // header ĂœBERMITTLUNG UND OFFENBARUNG VON PERSONENBEZOGENEN DATEN
     'BERMITTLUNGH1': 'ĂœBERMITTLUNG UND OFFENBARUNG VON PERSONENBEZOGENEN DATEN',
     'Rahmen': 'Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbststĂ¤ndige Organisationseinheiten oder Personen Ă¼bermittelt oder sie ihnen gegenĂ¼ber offengelegt werden. Zu den EmpfĂ¤ngern dieser Daten kĂ¶nnen z.B. Zahlungsinstitute im Rahmen von ZahlungsvorgĂ¤ngen, mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehĂ¶ren. In solchen Fall beachten wir die gesetzlichen Vorgaben und schlieĂŸen insbesondere entsprechende VertrĂ¤ge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den EmpfĂ¤ngern Ihrer Daten ab. DatenĂ¼bermittlung innerhalb der Organisation: Wir kĂ¶nnen personenbezogene Daten an andere Stellen innerhalb unserer Organisation Ă¼bermitteln oder ihnen den Zugriff auf diese Daten gewĂ¤hren. Sofern diese Weitergabe zu administrativen Zwecken erfolgt, beruht die Weitergabe der Daten auf unseren berechtigten unternehmerischen und betriebswirtschaftlichen Interessen oder erfolgt, sofern sie ErfĂ¼llung unserer vertragsbezogenen Verpflichtungen erforderlich ist oder wenn eine Einwilligung der Betroffenen oder eine gesetzliche Erlaubnis vorliegt.',
     // header EINSATZ VON COOKIES
     'EINSATZH1': 'EINSATZ VON COOKIES',
     'EINSATZH1': 'Im Rahmen unseres Online-Angebots werden sog. Cookies eingesetzt. Das sind Datenpakete, die zwischen dem Server des Online-Angebots und dem Browser des Nutzers ausgetauscht werden. Diese werden bei der Nutzung des Online-Angebots von den jeweils verwendeten GerĂ¤ten (PC, Notebook, Tablet, Smartphone etc.) gespeichert. Cookies kĂ¶nnen insoweit keine SchĂ¤den auf den verwendeten GerĂ¤ten anrichten. Insbesondere enthalten sie keine Viren oder sonstige Schadsoftware. In den Cookies werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten EndgerĂ¤t ergeben. Wir kĂ¶nnen damit keinesfalls unmittelbar Kenntnis von der IdentitĂ¤t des Besuchers der Webseite erhalten. Cookies werden nach den Grundeinstellungen der Browser grĂ¶ĂŸtenteils akzeptiert. Die Browsereinstellungen kĂ¶nnen so eingerichtet werden, dass Cookies entweder auf den verwendeten GerĂ¤ten nicht akzeptiert werden oder dass jeweils ein besonderer Hinweis erfolgt, bevor ein neuer Cookie angelegt wird. Es wird allerdings darauf hingewiesen, dass die Deaktivierung von Cookies dazu fĂ¼hren kann, dass nicht alle Funktionen des Online-Angebots bestmĂ¶glich genutzt werden kĂ¶nnen. Der Einsatz von Cookies dient dazu, die Nutzung unseres Online-Angebots komfortabler zu gestalten. So kann beispielsweise anhand von Session-Cookies nachvollzogen werden, ob der Besucher einzelne Seiten der Webseite bereits besucht hat. Nach Verlassen der Webseite werden diese Session-Cookies automatisch gelĂ¶scht. Zur Verbesserung der Benutzerfreundlichkeit werden temporĂ¤re Cookies eingesetzt. Sie werden fĂ¼r einen vorĂ¼bergehenden Zeitraum auf dem GerĂ¤t des Besuchers gespeichert. Bei erneutem Besuch der Webseite wird automatisch erkannt, dass der Besucher die Seite bereits zu einem frĂ¼heren Zeitpunkt aufgerufen hat und welche Eingaben und Einstellungen dabei vorgenommen wurden, um diese nicht wiederholen zu mĂ¼ssen. Der Einsatz von Cookies erfolgt auĂŸerdem, um die Aufrufe des Online-Angebots zu statistischen Zwecken und zum Zwecke der Verbesserung des Angebotes zu analysieren. Diese Cookies ermĂ¶glichen es, bei einem erneuten Besuch automatisch zu erkennen, dass eine Website bereits zuvor vom Besucher aufgerufen wurde. Hier erfolgt nach einer jeweils festgelegten Zeit eine automatische LĂ¶schung der Cookies. Speicherdauer: Sofern wir Ihnen keine expliziten Angaben zur Speicherdauer von permanenten Cookies mitteilen (z. B. im Rahmen eines sog. Cookie-Opt-Ins), gehen Sie bitte davon aus, dass die Speicherdauer bis zu zwei Jahre betragen kann. Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): AbhĂ¤ngig davon, ob die Verarbeitung auf Grundlage einer Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die MĂ¶glichkeit, eine erteilte Einwilligung zu widerrufen oder der Verarbeitung Ihrer Daten durch Cookie-Technologien zu widersprechen (zusammenfassend als â€?Opt-Outâ€œ bezeichnet). Sie kĂ¶nnen Ihren Widerspruch zunĂ¤chst mittels der Einstellungen Ihres Browsers erklĂ¤ren, z.B., indem Sie die Nutzung von Cookies deaktivieren (wobei hierdurch auch die FunktionsfĂ¤higkeit unseres Onlineangebotes eingeschrĂ¤nkt werden kann). Ein Widerspruch gegen den Einsatz von Cookies zu Zwecken des Onlinemarketings kann auch mittels einer Vielzahl von Diensten, vor allem im Fall des Trackings, Ă¼ber die Webseiten https://optout.aboutads.info und https://www.youronlinechoices.com/ erklĂ¤rt werden. Daneben kĂ¶nnen Sie weitere Widerspruchshinweise im Rahmen der Angaben zu den eingesetzten Dienstleistern und Cookies erhalten. Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von Cookies, bzw. der im Rahmen des Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen und Anbieter eingeholt sowie von den Nutzern verwaltet und widerrufen werden kĂ¶nnen. Hierbei wird die EinwilligungserklĂ¤rung gespeichert, um deren Abfrage nicht erneut wiederholen zum mĂ¼ssen und die Einwilligung entsprechend der gesetzlichen Verpflichtung nachweisen zu kĂ¶nnen. Die Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien) erfolgen, um die Einwilligung einem Nutzer, bzw. dessen GerĂ¤t zuordnen zu kĂ¶nnen. Vorbehaltlich individueller Angaben zu den Anbietern von Cookie-Management-Diensten, gelten die folgenden Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu zwei Jahren betragen. Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem Zeitpunkt der Einwilligung, Angaben zur Reichweite der Einwilligung (z. B. welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem Browser, System und verwendeten EndgerĂ¤t gespeichert. â€¢ Verarbeitete Datenarten: Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. GerĂ¤te-Informationen, IP-Adressen). â€¢ Betroffene Personen: Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten). â€¢ Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).',
     // header EINGESETZTE DIENSTE UND DIENSTEANBIETER
     'EINGESETZTEH1': 'EINGESETZTE DIENSTE UND DIENSTEANBIETER',
     'Borlabs': 'Borlabs Cookie: Unser Onlineangebot verwendet Borlabs Cookie, das ein technisch notwendiges Cookie setzt, die Cookie-Einwilligungen eines Nutzers zu speichern. Borlabs Cookies verarbeiten keinerlei personenbezogenen Daten. Im Borlabs Cookie wird die Einwilligungen gespeichert, die ein Nutzer beim Betreten einer Website gegeben hat. MĂ¶chte der Nutzer diese Einwilligungen widerrufen, kann er das Cookie in seinem Browser lĂ¶schen. Wenn die Website neu betreten/neu geladen wird, wird der Nutzer erneut nach seiner Cookie-Einwilligung gefragt.',
     // page Impressum
     // header IMPRESSUM + Diensteanbieter
     'IMPRESSUMH1': 'IMPRESSUM',
     'DienstTitle': 'Diensteanbieter',
     'GmbH': 'DeinSteinDesign GmbH',
     'Steinberg': `Am Steinberg 3`,
     'Dresden': 'D-01309 Dresden',
     // header KontaktmĂ¶glichkeiten
     'KontaktmgH1': `KontaktmĂ¶glichkeiten`,
     'permÂ²': 'E-Mail: hello@deinsteindesign.de Đ?Đ¾Đ½Ñ‚Đ°ĐºÑ‚Đ½Đ°Ñ? Ñ„Đ¾Ñ€Đ¼Đ°: https://deinsteindesign.de',
     // header Vertretungberechtigte
     'VertretungberechtigteH1': `Vertretungberechtigte`,
     'Vertretungs': 'Vertretungsberechtigte GeschĂ¤ftsfĂ¼hrer: Tina Oehler und Linda Winnie Grumbt Registergericht: Amtsgericht Dresden Registernummer: HRB 40323 Umsatzsteueridentifikationsnummer: DE335975861',
     // header Inhaltlich Verantwortliche (o.S.d. Â§ 18 Abs. 2 MStV.):
     'InhaltlichH1': `Inhaltlich Verantwortliche (o.S.d. Â§ 18 Abs. 2 MStV.):`,
     'Tina': 'Tina Oehler Am Steinberg 3 D-01326 Dresden',
     // header Hinweis Nach Â§ 36 VSBG
     'HinweisH1': `Hinweis Nach Â§ 36 VSBG`,
     'Die': `Die Plattform zur Online-Streitbeilegung der EU-Kommission finden Sie unter http://ec.europa.eu/consumers/odr Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nicht verpflichtet und grundsĂ¤tzlich nicht bereit.`,
     // header Design, Umsetzung
     'DesignH1': `Design, Umsetzung`,
     'DesignH1': `Puls13-Strategy and Creation GbR https://puls13.com`,
     // header Marketingberatung
     'MarketingH1': `Marketingberatung`,
     'Anne': `Anne-Kathrin Liebthal https://www.comigo-marketing.de`,
     // header Fotografie
     'FotografieH1': `Fotografie`,
     'https': `https://get-shot.de`,
     // page Checkout
     // podmenu
     'home': 'Startseite',
     'Checkout': `Kasse`,
     // header Billing info
     'BillingH1': 'Informationen zur Rechnungsstellung',
     'PleaseÑ€2': 'Bitte geben Sie Ihre Rechnungsdaten ein',
     'Step': 'Schritt 1 von 5',
     // data entry
     'First': 'Vornamen',
     'Last': 'Nachname',
     'Email': `E-Mail Adresse`,
     'Phone': 'Rufnummer',
     'Address': `Adresse`,
     'Town': 'Stadt / Ortschaft',
     'Country': `Staat / Land`,
     'Postal': 'ZIP/Postleitzahl',
     'Ship': 'Versand an eine andere Adresse?',
     // header Billing method
     'BillH1': 'Methode der Rechnungsstellung',
     'PleaseÑ€2': 'Bitte wĂ¤hlen Sie die Lieferung',
     'Step': 'Schritt 2 von 5',
     // header Payment method
     'PaymentH1': 'Zahlungsmethode',
     'PleaseÑ€2': 'Bitte geben Sie Ihre Zahlungsmethode ein',
     'Step': 'Schritt 3 von 5',
     'Credit': 'Kreditkarte',
     'Card': 'Kartennummer',
     'holder': 'Kartenhalter',
     'Expiration': 'Verfallsdatum',
     'CVC': 'CVC',
     'PayPal': 'PayPal',
     'GooglePay ': 'GooglePay ',
     // header Additional informations
     'Additional': 'ZusĂ¤tzliche Informationen',
     'Need': 'Sie brauchen etwas anderes? Wir machen es fĂ¼r Sie!',
     'Step': 'Schritt 4 von 5',
     'Order': 'Hinweise zur Bestellung',
     'Need': 'BenĂ¶tigen Sie einen bestimmten Liefertag? Ein Gitf verschicken? Sagen wir ...',
     // header Confirmation
     'ConfirmationH1': 'Konfirmation',
     'Weare': 'Wir sind am Ende angelangt. Nur noch wenige Klicks und Ihre Bestellung ist fertig!',
     'Step': 'Schritt 5 von 5',
     'Agree': 'Ich bin damit einverstanden, Marketing- und Newsletter-E-Mails zu versenden. Kein Spam.',
     'With': 'Ich bin mit unseren Allgemeinen GeschĂ¤ftsbedingungen und der DatenschutzerklĂ¤rung einverstanden.',
     'Completebutt': 'Bestellen',
     // header All your data are safe
     'Allyour': `Alle Ihre Daten sind sicher`,
     'Weare': `Wir verwenden die fortschrittlichste Sicherheit, um Ihnen die beste Erfahrung aller Zeiten zu bieten.`,
    },
  
    ru: {
      // introsec
      'homeH1': 'Đ¡Đ¾Đ·Đ´Đ°Đ¹Ñ‚Đµ Đ´Đ¸Đ·Đ°Đ¹Đ½ Đ¿Đ»Đ¸Ñ‚ĐºĐ¸ Đ´Đ»Ñ? Ñ?ĐµĐ±Ñ?',
      'descHomeIntro': `Đ˜ Đ²Đ¾Ñ‚ ĐºĐ°Đº Ñ?Ñ‚Đ¾ Ñ€Đ°Đ±Đ¾Ñ‚Đ°ĐµÑ‚: Đ’Ñ‹Đ±ĐµÑ€Đ¸Ñ‚Đµ Ñ?Đ²Đ¾Đ¹ ĐºĐ°Đ¼ĐµĐ½ÑŒ, Đ²Ñ‹Đ±ĐµÑ€Đ¸Ñ‚Đµ Ñ?Đ²Đ¾Đ¹ Đ´Đ¸Đ·Đ°Đ¹Đ½, Đ²Đ²ĐµĐ´Đ¸Ñ‚Đµ Ñ?Đ²Đ¾Đ¹ Đ²Đ°Ñ€Đ¸Đ°Đ½Ñ‚, Đ’Ñ‹ Đ·Đ°ĐºĐ°Đ·Ñ‹Đ²Đ°ĐµÑ‚Đµ, Đ¸ Đ¼Ñ‹ Đ´Đ¾Ñ?Ñ‚Đ°Đ²Đ»Ñ?ĐµĐ¼.`,
      'toTheShop': 'Đ’ ĐœĐ?Đ“Đ?Đ—Đ˜Đ?',
      // menu
      'home': 'Đ“Đ»Đ°Đ²Đ½Đ°Ñ?',
      'DeinSteinDesign': 'Đ”Đ¸Đ·Đ°Đ¹Đ½ ĐºĐ°Đ¼Đ½Ñ?',
      'tiles': 'ĐŸĐ»Đ¸Ñ‚ĐºĐ¸',
      'phSeacrh': 'Đ§Ñ‚Đ¾ Đ²Ñ‹ Đ¸Ñ‰Đ¸Ñ‚Đµ?',
      // recsec
      'resSecTitle': 'Đ ĐµĐºĐ¾Đ¼ĐµĐ½Đ´Đ°Ñ†Đ¸Đ¸ Đ´Đ»Ñ? Đ²Đ°Ñ?',
      'mk': 'Đ¡Đ¾Đ²Ñ€ĐµĐ¼ĐµĐ½Đ½Ñ‹Đµ Đ?ÑƒÑ…Đ½Đ¸',
      'descMk': 'Đ¡Đ²ĐµÑ‚Đ»Đ°Ñ? Đ¿Đ»Đ¸Ñ‚ĐºĐ° Đ´Đ»Ñ? ĐºÑƒÑ…Đ½Đ¸ Ñ? ĐºÑ€Đ°Ñ?Đ¸Đ²Đ¾Đ¹ Đ¾Ñ‚Đ´ĐµĐ»ĐºĐ¾Đ¹ Đ² ÑƒĐ½Đ¸ĐºĐ°Đ»ÑŒĐ½Đ¾Đ¼, ÑƒĐ»ÑŒÑ‚Ñ€Đ°Ñ?Đ¾Đ²Ñ€ĐµĐ¼ĐµĐ½Đ½Đ¾Đ¼ Ñ?Ñ‚Đ¸Đ»Đµ.',
      'tk': 'Đ¢Ñ€Đ°Đ´Đ¸Ñ†Đ¸Đ¾Đ½Đ½Ñ‹Đµ Đ?ÑƒÑ…Đ½Đ¸',
      'descTk': 'Đ’Ñ‹Đ´ĐµÑ€Đ¶Đ°Đ½Đ½Ñ‹Đµ Ñ?Đ²ĐµÑ‚Đ»Ñ‹Đµ Ñ‚Đ¾Đ½Đ° Đ¿Đ»Đ¸Ñ‚ĐºĐ¸ Đ´ĐµĐ»Đ°Ñ?Ñ‚ Ñ‚Ñ€Đ°Đ´Đ¸Ñ†Đ¸Đ¾Đ½Đ½Ñ‹Đµ ĐºÑƒÑ…Đ½Đ¸ Đ¿Đ¾Đ¿ÑƒĐ»Ñ?Ñ€Đ½Ñ‹Đ¼ Đ²Ñ‹Đ±Đ¾Ñ€Đ¾Đ¼ Đ² Đ·Đ°Đ³Đ¾Ñ€Đ¾Đ´Đ½Ñ‹Ñ… Đ´Đ¾Đ¼Đ°Ñ….',
      'mB': 'Đ’Đ°Đ½Đ½Ñ‹Đµ ĐºĐ¾Đ¼Đ½Đ°Ñ‚Ñ‹ Đ² Đ¼Đ¸Đ½Đ¸Đ¼Đ°Đ»Đ¸Ñ?Ñ‚Đ¸Ñ‡Đ½Đ¾Đ¼ Ñ?Ñ‚Đ¸Đ»Đµ',
      'descmB': 'Đ¢ĐµĐ¼Đ½Ñ‹Đµ Ñ‚Đ¾Đ½Đ° Đ¿Đ»Đ¸Ñ‚ĐºĐ¸ Ñ?Đ´ĐµĐ»Đ°Ñ?Ñ‚ Đ¸Đ½Ñ‚ĐµÑ€ÑŒĐµÑ€ Đ²Đ°Đ½Đ½Đ¾Đ¹ ĐºĐ¾Đ¼Đ½Đ°Ñ‚Ñ‹ Đ´Đ¾Ñ€Đ¾Đ³Đ¸Đ¼ Đ¸ Đ¿Đ¾Đ´Ñ‡ĐµÑ€ĐºĐ½ÑƒÑ‚ Đ¼Đ¸Đ½Đ¸Đ¼Đ°Đ»Đ¸Đ·Đ¼.',
      'h-tB': 'Đ’Ñ‹Ñ?Đ¾ĐºĐ¾Ñ‚ĐµÑ…Đ½Đ¾Đ»Đ¾Đ³Đ¸Ñ‡Đ½Ñ‹Đµ Đ²Đ°Đ½Đ½Ñ‹Đµ ĐºĐ¾Đ¼Đ½Đ°Ñ‚Ñ‹',
      'descH-tB': 'Đ¡ĐµÑ€Ñ‹Đµ Ñ‚Đ¾Đ½Đ° Đ¿Đ»Đ¸Ñ‚ĐºĐ¸ Ñ?Đ´ĐµĐ»Đ°Ñ?Ñ‚ Ñ„Đ¾Ñ€Đ¼Ñƒ Đ²Đ°Đ½Đ½Đ¾Đ¹ ĐºĐ¾Đ¼Đ½Đ°Ñ‚Ñ‹ Đ±Đ¾Đ»ĐµĐµ Ñ?Ñ‚Ñ€Đ¾Đ³Đ¾Đ¹, Ñ‡ĐµÑ‚ĐºĐ¾Đ¹ Đ¸ Đ»Đ°ĐºĐ¾Đ½Đ¸Ñ‡Đ½Đ¾Đ¹.',
      'viewAll': 'ĐŸĐ Đ?Đ¡ĐœĐ?Đ¢Đ Đ•Đ¢Đ¬ Đ’Đ¡Đ•',
      // create desing sec
      'creatteDesTitle': 'Đ¡Đ¾Đ·Đ´Đ°Đ¹Ñ‚Đµ Ñ?Đ²Đ¾Đ¹ Ñ?Đ¾Đ±Ñ?Ñ‚Đ²ĐµĐ½Đ½Ñ‹Đ¹ Đ´Đ¸Đ·Đ°Đ¹Đ½ Đ¿Đ»Đ¸Ñ‚ĐºĐ¸',
      'creatteDesDesc': `Đ¡Đ¾Đ·Đ´Đ°Đ½Đ¸Đµ Đ¿Đ»Đ¸Ñ‚Đ¾Đº Đ¿Đ¾ Đ²Đ°ÑˆĐµĐ¼Ñƒ Ñ€Đ°Đ·Đ¼ĐµÑ€Ñƒ - Ñ?Ñ‚Đ¾ Ñ‚Đ¾, Ñ‡Ñ‚Đ¾ Đ¼Ñ‹ Đ´ĐµĐ»Đ°ĐµĐ¼ Đ»ÑƒÑ‡ÑˆĐµ Đ²Ñ?ĐµĐ³Đ¾ - Đ´Đ°Đ²Đ°Đ¹Ñ‚Đµ Đ¿Đ¾ĐºĐ°Đ¶ĐµĐ¼ Đ²Đ°Đ¼, ĐºĐ°Đº Đ½Đ°Ñ‡Đ°Ñ‚ÑŒâ€¦`,
      'createtNow': 'Đ¡Đ?Đ—Đ”Đ?Đ¢Đ¬ Đ¡Đ•Đ™Đ§Đ?Đ¡',
      // will be interested
      'wbiTitle': 'Đ’Đ°Đ¼ Đ±ÑƒĐ´ĐµÑ‚ Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ½Đ¾',
      'wbiItem1Title': 'Đ?Đ¾Đ²Ñ‹Đµ Đ¿Đ»Đ¸Ñ‚ĐºĐ¸ Đ² DeinSteinDesign',
      'wbiItem1Desc': 'Đ?Đ·Đ½Đ°ĐºĐ¾Đ¼ÑŒÑ‚ĐµÑ?ÑŒ Ñ? Đ½Đ¾Đ²Ñ‹Đ¼Đ¸ Đ¿Đ»Đ¸Ñ‚ĐºĐ°Đ¼Đ¸ Đ² Đ°Ñ?Ñ?Đ¾Ñ€Ñ‚Đ¸Đ¼ĐµĐ½Ñ‚Đµ Đ² DeinSteinDesign',
      'wbiItem2Title': 'ĐŸĐ»Đ¸Ñ‚ĐºĐ° Đ¿Đ¾ Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿Đ½Ñ‹Đ¼ Ñ†ĐµĐ½Đ°Đ¼',
      'wbiItem2Desc': 'ĐŸĐ¾Ñ?Đ¼Đ¾Ñ‚Ñ€Đ¸Ñ‚Đµ Đ¿Đ¾Đ´Đ±Đ¾Ñ€ĐºÑƒ Ñ€Đ°Đ·Đ»Đ¸Ñ‡Đ½Ñ‹Ñ… Ñ?Ñ‚Đ¸Đ»ĐµĐ¹ Đ¿Đ¾ Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿Đ½Ñ‹Đ¼ Ñ†ĐµĐ½Đ°Đ¼.',
      'wbiItem3Title': 'Đ¡Đ¾Đ·Đ´Đ°Đ¹Ñ‚Đµ Đ´Đ¸Đ·Đ°Đ¹Đ½ Đ¿Đ»Đ¸Ñ‚ĐºĐ¸ Ñ? Đ²Ñ‹Ñ€ĐµĐ·Đ¾Đ¼ Đ´Đ»Ñ? Ñ€Đ°ĐºĐ¾Đ²Đ¸Đ½Ñ‹',
      'wbiItem3Desc': 'Đ¡Đ¾Đ·Đ´Đ°Đ¹Ñ‚Đµ Ñ?Đ²Đ¾Đ¹ Ñ?Đ¾Đ±Ñ?Ñ‚Đ²ĐµĐ½Đ½Ñ‹Đ¹ Đ´Đ¸Đ·Đ°Đ¹Đ½ Đ¿Đ»Đ¸Ñ‚ĐºĐ¸ Ñ? Đ²Ñ‹Ñ€ĐµĐ·Đ¾Đ¼ Đ´Đ»Ñ? Ñ€Đ°ĐºĐ¾Đ²Đ¸Đ½Ñ‹ Ñ? Đ¿Đ¾Đ¼Đ¾Ñ‰ÑŒÑ? Đ½Đ°ÑˆĐµĐ³Đ¾ Ñ€ĐµĐ´Đ°ĐºÑ‚Đ¾Ñ€Đ°.',
      'readMore': 'ĐŸĐ?Đ”Đ Đ?Đ‘Đ?Đ•Đ•',
      'wbiItem4Title': 'Đ?Đ°Ñ‚ÑƒÑ€Đ°Đ»ÑŒĐ½Ñ‹Đ¹ Đ³Ñ€Đ°Đ½Đ¸Ñ‚ Đ¿Đ¾ Đ¿Ñ€Đ¸Đ²Đ»ĐµĐºĐ°Ñ‚ĐµĐ»ÑŒĐ½Ñ‹Đ¼ Ñ†ĐµĐ½Đ°Đ¼',
      'wbiItem4Desc': 'Đ”Đ¾Ñ?Ñ‚ÑƒĐ¿Đ½Ñ‹ Ñ‚ĐµÑ€Đ¼Đ¾Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚Đ°Đ½Đ½Ñ‹Đµ Đ³Ñ€Đ°Đ½Đ¸Ñ‚Đ½Ñ‹Đµ Đ¿Đ»Đ¸Ñ‚Ñ‹, ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đµ Đ¸Đ¼ĐµÑ?Ñ‚ Đ½ĐµĐ¾Đ³Ñ€Đ°Đ½Đ¸Ñ‡ĐµĐ½Đ½Ñ‹Đµ Đ²Đ¾Đ·Đ¼Đ¾Đ¶Đ½Đ¾Ñ?Ñ‚Đ¸ Đ´Đ»Ñ? Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Ñ?.',
      'wbiItem5Title': 'ĐœÑ€Đ°Đ¼Đ¾Ñ€Đ½Ñ‹Đµ Đ¾Đ±Đ»Đ¸Ñ†Đ¾Đ²Đ¾Ñ‡Đ½Ñ‹Đµ Đ¿Đ»Đ¸Ñ‚Ñ‹',
      'wbiItem5Desc': 'Đ’ ĐºĐ°Ñ‚Đ°Đ»Đ¾Đ³Đµ Đ²Ñ‹ Đ¼Đ¾Đ¶ĐµÑ‚Đµ Đ²Ñ‹Đ±Ñ€Đ°Ñ‚ÑŒ Đ¿Đ»Đ¸Ñ‚Ñ‹ Ñ? Ñ€Đ°Đ·Đ»Đ¸Ñ‡Đ½Đ¾Đ¹ Đ¿Đ¾Đ²ĐµÑ€Ñ…Đ½Đ¾Ñ?Ñ‚ÑŒÑ? Đ² Đ·Đ°Đ²Đ¸Ñ?Đ¸Đ¼Đ¾Ñ?Ñ‚Đ¸ Đ¾Ñ‚ Ñ?Đ¿Đ¾Ñ?Đ¾Đ±Đ° Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ¸.',
     // footer
     'Navigation': 'Đ?Đ°Đ²Đ¸Đ³Đ°Ñ†Đ¸Ñ?',
     'Home': `Đ“Đ»Đ°Đ²Đ½Đ°Ñ?`,
     'deinsteindesign': 'Đ”Đ¸Đ·Đ°Đ¹Đ½ ĐºĐ°Đ¼Đ½Ñ?',
     'KITCHEN': 'ĐŸĐ»Đ¸Ñ‚ĐºĐ¸',
     'Copyright': `Copyright Â© 2021 DeinSteinDesign. Đ’Ñ?Đµ Đ¿Ñ€Đ°Đ²Đ° Đ·Đ°Ñ‰Đ¸Ñ‰ĐµĐ½Ñ‹.`,
     'DatenschutzerklĂ¤rung': 'ĐŸĐ¾Đ»Đ¸Ñ‚Đ¸ĐºĐ° ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸',
     'Impressum': 'ĐŸĐ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»ÑŒÑ?ĐºĐ¾Đµ Ñ?Đ¾Đ³Đ»Đ°ÑˆĐµĐ½Đ¸Đµ',
     'Connections': `Đ¡Đ¾Ñ†.Ñ?ĐµÑ‚Đ¸`,
     'Facebook': 'Facebook',
     'Twitter': 'Twitter',
     'Instagram': `Instagram`,
     'Youtube': 'Youtube',
     'Account': 'Đ?ĐºĐºĐ°ÑƒĐ½Ñ‚',
     'Your account': `Đ’Đ°Ñˆ Đ°ĐºĐºĐ°ÑƒĐ½Ñ‚`,
     'Returns Centre': 'Đ¦ĐµĐ½Ñ‚Ñ€ Đ²Đ¾Đ·Đ²Ñ€Đ°Ñ‚Đ°',
     'protection': '100% Đ·Đ°Ñ‰Đ¸Ñ‚Đ° Đ¿Đ¾ĐºÑƒĐ¿Đ¾Đº',
     'Help': `ĐŸĐ¾Đ¼Đ¾Ñ‰ÑŒ`,
     // page DeinSteinDesign
     // podmenu
     'home': 'Đ“Đ»Đ°Đ²Đ½Đ°Ñ?',
     'deinsteindesign': `Đ”Đ¸Đ·Đ°Đ¹Đ½ ĐºĐ°Đ¼Đ½Ñ?`,
     'HeadingH1': 'Đ¡Đ¾Đ·Đ´Đ°Đ¹Ñ‚Đµ Ñ?Đ²Đ¾Đ¹ ĐºĐ°Đ¼ĐµĐ½Đ½Ñ‹Đ¹ Đ´Đ¸Đ·Đ°Đ¹Đ½',
     'Subtitle': `Đ’ DeinSteinDesign Đ¼Ñ‹ Đ³Đ¾Ñ€Đ´Đ¸Đ¼Ñ?Ñ? Ñ‚ĐµĐ¼, Ñ‡Ñ‚Đ¾ Đ¿Đ¾Đ¼Đ¾Đ³Đ°ĐµĐ¼ ĐºĐ»Đ¸ĐµĐ½Ñ‚Đ°Đ¼ Đ²Ñ‹Đ±Ñ€Đ°Ñ‚ÑŒ Đ¸Đ´ĐµĐ°Đ»ÑŒĐ½ÑƒÑ? Ñ„Đ¾Ñ€Đ¼Ñƒ ĐºĐ°Đ¼Đ½Ñ? Đ´Đ»Ñ? Đ¸Ñ… ĐºÑƒÑ…Đ¾Đ½ÑŒ, Đ²Đ°Đ½Đ½Ñ‹Ñ… ĐºĐ¾Đ¼Đ½Đ°Ñ‚, Đ»ĐµÑ?Ñ‚Đ½Đ¸Ñ† Đ¸ Đ¿Đ¾Đ´Đ¾ĐºĐ¾Đ½Đ½Đ¸ĐºĐ¾Đ². Đ¡ Đ¿Đ¾Đ¼Đ¾Ñ‰ÑŒÑ? Đ½Đ°ÑˆĐµĐ³Đ¾ Ñ€ĐµĐ´Đ°ĐºÑ‚Đ¾Ñ€Đ° ĐºĐ°Đ¼Đ½Ñ? Đ²Ñ‹ Ñ?Đ¾Đ·Đ´Đ°Đ´Đ¸Ñ‚Đµ Ñ„Đ¾Ñ€Đ¼Ñƒ ĐºĐ°Đ¼Đ½Ñ? Đ´Đ»Ñ? Ñ?ĐµĐ±Ñ?.`,
     // filter  
     'slabs': 'Đ?Đ°Đ¼ĐµĐ½ÑŒ Đ´Đ»Ñ?',
     'bathroom': 'Đ’Đ°Đ½Đ½Đ°Ñ?',
     'Kitchen': `Đ?ÑƒÑ…Đ½Ñ?`,
     'Stairs': 'Đ›ĐµÑ?Ñ‚Đ½Đ¸Ñ†Đ°',
     'Windowsill': 'ĐŸĐ¾Đ´Đ¾ĐºĐ¾Đ½Đ½Đ¸Đº',
     'Material': `ĐœĐ°Ñ‚ĐµÑ€Đ¸Đ°Đ»`,
     'View': 'ĐŸÑ€Đ¾Ñ?Đ¼Đ¾Ñ‚Ñ€ĐµÑ‚ÑŒ Đ²Ñ?Đµ Ñ†Đ²ĐµÑ‚Đ°',
     // list
     'Basalt3': 'Đ‘Đ°Đ·Đ°Đ»ÑŒĐ½Ñ‹Đ¹ ĐºĐ°Đ¼ĐµĐ½ÑŒ â€œMUSTERâ€?',
     'Shower': `Đ?Đ°Đ¼ĐµĐ½ÑŒ Đ±Đ°Đ·Đ°Đ»ÑŒÑ‚ Đ´Đ»Ñ? Đ´ÑƒÑˆĐ° Ñ?ĐµÑ€ĐµĐ±Ñ€Đ¸Ñ?Ñ‚Ñ‹Đ¹ Đ±Đ»ĐµÑ?Ñ‚Ñ?Ñ‰Đ¸Đ¹. Đ¡Ñ€Đ¾Đº Đ¿Đ¾Ñ?Ñ‚Đ°Đ²ĐºĐ¸ 1-3 Đ½ĐµĐ´ĐµĐ»Đ¸`,
     'buttonEDITOR': 'Đ ĐµĐ´Đ°ĐºÑ‚Đ¾Ñ€ ĐºĐ°Đ¼Đ½Ñ?',
     'Marbleh3': 'ĐœÑ€Đ°Đ¼Đ¾Ñ€Đ½Ñ‹Đ¹ ĐºĐ°Đ¼ĐµĐ½ÑŒ â€œMUSTERâ€?',
     'Shower': `ĐœÑ€Đ°Đ¼Đ¾Ñ€Đ½Ñ‹Đ¹ ĐºĐ°Đ¼ĐµĐ½ÑŒ Đ´Đ»Ñ? Đ´ÑƒÑˆĐ° Ñ?ĐµÑ€ĐµĐ±Ñ€Đ¸Ñ?Ñ‚Ñ‹Đ¹ Đ±Đ»ĐµÑ?Ñ‚Ñ?Ñ‰Đ¸Đ¹. Đ¡Ñ€Đ¾Đº Đ¿Đ¾Ñ?Ñ‚Đ°Đ²ĐºĐ¸ 1-3 Đ½ĐµĐ´ĐµĐ»Đ¸`,
     'buttonEDITOR': 'Đ ĐµĐ´Đ°ĐºÑ‚Đ¾Ñ€ ĐºĐ°Đ¼Đ½Ñ?',
     // page Tiles
     // podmenu
     'home': 'Đ“Đ»Đ°Đ²Đ½Đ°Ñ?',
     'Tiles': `ĐŸĐ»Đ¸Ñ‚ĐºĐ°`,
     'HeadingH1': 'Đ’Ñ?Đµ Đ½Đ°ÑˆĐ¸ Đ¿Đ»Đ¸Ñ‚ĐºĐ¸',
     'Subtitle': `Đ’ DeinSteinDesign Đ¼Ñ‹ Đ³Đ¾Ñ€Đ´Đ¸Đ¼Ñ?Ñ? Ñ‚ĐµĐ¼, Ñ‡Ñ‚Đ¾ Đ¿Đ¾Đ¼Đ¾Đ³Đ°ĐµĐ¼ ĐºĐ»Đ¸ĐµĐ½Ñ‚Đ°Đ¼ Đ½Đ°Đ¹Ñ‚Đ¸ Đ¸Đ´ĐµĐ°Đ»ÑŒĐ½ÑƒÑ? Đ¿Đ»Đ¸Ñ‚ĐºÑƒ Đ´Đ»Ñ? Ñ?Đ²Đ¾Đ¸Ñ… Đ²Đ°Đ½Đ½Ñ‹Ñ… ĐºĐ¾Đ¼Đ½Đ°Ñ‚. Đ¡ Đ½Đ°ÑˆĐ¸Đ¼ Đ²Đ´Đ¾Ñ…Đ½Đ¾Đ²Đ»Ñ?Ñ?Ñ‰Đ¸Đ¼ Đ°Ñ?Ñ?Đ¾Ñ€Ñ‚Đ¸Đ¼ĐµĐ½Ñ‚Đ¾Đ¼ Đ²Ñ‹ Ñ?Đ¾Đ·Đ´Đ°Đ´Đ¸Ñ‚Đµ Đ²Đ°Đ½Đ½ÑƒÑ? ĐºĐ¾Đ¼Đ½Đ°Ñ‚Ñƒ Ñ?Đ²Đ¾ĐµĐ¹ Đ¼ĐµÑ‡Ñ‚Ñ‹.`,
     // filter  
     'Types': 'Đ¢Đ¸Đ¿Ñ‹ Đ¿Đ»Đ¸Ñ‚Đ¾Đº',
     'Bicotura': 'Bicotura',
     'Monocot': `Monocot`,
     'Porcelain tile': 'Porcelain tile',
     'Cotto': 'Cotto',
     'Cottoforte': `Cottoforte`,
     'Clinker': 'Clinker',
     'Clinker': 'Majolica',
     'Color': 'Đ¦Đ²ĐµÑ‚ Đ¿Đ»Đ¸Ñ‚ĐºĐ¸',
     'View': 'ĐŸÑ€Đ¾Ñ?Đ¼Đ¾Ñ‚Ñ€ĐµÑ‚ÑŒ Đ²Ñ?Đµ Ñ†Đ²ĐµÑ‚Đ°',
     'Price': `Đ¦ĐµĐ½Đ°, â‚½`,
     // list
     'Graniteh3': 'Đ“Ñ€Đ°Đ½Đ¸Ñ‚Đ½Đ°Ñ? Đ¿Đ»Đ¸Ñ‚ĐºĐ° â€œMUSTERâ€?',
     'Shower': `Đ“Ñ€Đ°Đ½Đ¸Ñ‚Đ½Đ°Ñ? Đ¿Đ»Đ¸Ñ‚ĐºĐ°  Đ´Đ»Ñ? Đ´ÑƒÑˆĐ° Ñ?ĐµÑ€ĐµĐ±Ñ€Đ¸Ñ?Ñ‚Đ°Ñ?, Đ±Đ»ĐµÑ?Ñ‚Ñ?Ñ‰Đ°Ñ?. Đ¡Ñ€Đ¾Đº Đ¿Đ¾Ñ?Ñ‚Đ°Đ²ĐºĐ¸ 1-3 Đ½ĐµĐ´ĐµĐ»Đ¸`,
     'permÂ²': 'Đ¦ĐµĐ½Đ° Đ·Đ° Đ¼Â²',
     'â‚¬ 75': 'â‚½ 6 750',
     'Stockpcs': 'Đ?Ñ?Ñ‚Đ°Đ»Đ¾Ñ?ÑŒ: 320 ÑˆÑ‚.',
     'buttonEDITOR': 'Đ ĐµĐ´Đ°ĐºÑ‚Đ¾Ñ€ Đ¿Đ»Đ¸Ñ‚ĐºĐ¸',
     // page DatenschutzerklĂ¤rung
     // header DATENSCHUTZERKLĂ„RUNG + EINLEITUNG
     'DATEN': 'ĐŸĐ?Đ›Đ˜Đ¢Đ˜Đ?Đ? Đ?Đ?Đ?Đ¤Đ˜Đ”Đ•Đ?Đ¦Đ˜Đ?Đ›Đ¬Đ?Đ?Đ¡Đ¢Đ˜',
     'EINLEITUNG': `Đ’Đ’Đ•Đ”Đ•Đ?Đ˜Đ•`,
     'Mitder ': 'Đ˜Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒÑ? Ñ?Đ»ĐµĐ´ÑƒÑ?Ñ‰ÑƒÑ? Đ¿Đ¾Đ»Đ¸Ñ‚Đ¸ĐºÑƒ ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸, Đ¼Ñ‹, DeinSteinDesign, ĐŸĐ¾ Đ°Đ´Ñ€ĐµÑ?Ñƒ Steinberg 13, 01309 Đ”Ñ€ĐµĐ·Đ´ĐµĐ½, Ñ…Đ¾Ñ‚ĐµĐ»Đ¸ Đ±Ñ‹ Đ¿Ñ€Đ¾Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ¸Ñ€Đ¾Đ²Đ°Ñ‚ÑŒ Đ²Đ°Ñ? Đ¾ Ñ‚Đ¾Đ¼, ĐºĐ°ĐºĐ¸Đµ Ñ‚Đ¸Đ¿Ñ‹ Đ²Đ°ÑˆĐ¸Ñ… Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ… (Ñ‚Đ°ĐºĐ¶Đµ ĐºÑ€Đ°Ñ‚ĐºĐ¾ Đ½Đ°Đ·Ñ‹Đ²Đ°ĐµĐ¼Ñ‹Đµ â€?Đ”Đ°Đ½Đ½Ñ‹Đ¼Đ¸â€œ Đ½Đ¸Đ¶Đµ) Đ¼Ñ‹ Đ¾Đ±Ñ€Đ°Đ±Đ°Ñ‚Ñ‹Đ²Đ°ĐµĐ¼ Đ´Đ»Ñ? ĐºĐ°ĐºĐ¸Ñ… Ñ†ĐµĐ»ĐµĐ¹ Đ¸ Đ² ĐºĐ°ĐºĐ¾Đ¼ Đ¾Đ±Ñ?ĐµĐ¼Đµ. ĐŸĐ¾Đ»Đ¸Ñ‚Đ¸ĐºĐ° ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸ Đ¿Ñ€Đ¸Đ¼ĐµĐ½Ñ?ĐµÑ‚Ñ?Ñ? ĐºĐ¾ Đ²Ñ?ĐµĐ¹ Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐµ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ…, ĐºĐ¾Ñ‚Đ¾Ñ€ÑƒÑ? Đ¼Ñ‹ Đ¾Ñ?ÑƒÑ‰ĐµÑ?Ñ‚Đ²Đ»Ñ?ĐµĐ¼, ĐºĐ°Đº Đ² Ñ€Đ°Đ¼ĐºĐ°Ñ… Đ¿Ñ€ĐµĐ´Đ¾Ñ?Ñ‚Đ°Đ²Đ»ĐµĐ½Đ¸Ñ? Đ½Đ°ÑˆĐ¸Ñ… ÑƒÑ?Đ»ÑƒĐ³, Ñ‚Đ°Đº Đ¸, Đ² Ñ‡Đ°Ñ?Ñ‚Đ½Đ¾Ñ?Ñ‚Đ¸, Đ½Đ° Đ½Đ°ÑˆĐ¸Ñ… Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Đ°Ñ…, Đ² Đ¼Đ¾Đ±Đ¸Đ»ÑŒĐ½Ñ‹Ñ… Đ¿Ñ€Đ¸Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ?Ñ… Đ¸ Đ² Ñ€Đ°Đ¼ĐºĐ°Ñ… Đ²Đ½ĐµÑˆĐ½Đ¸Ñ… Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµÑ?Ñ?Đ¸Đ½Đ³Đ¾Đ², Ñ‚Đ°ĐºĐ¸Ñ… ĐºĐ°Đº Đ½Đ°ÑˆĐ¸ Đ¿Ñ€Đ¾Ñ„Đ¸Đ»Đ¸ Đ² Ñ?Đ¾Ñ†Đ¸Đ°Đ»ÑŒĐ½Ñ‹Ñ… Ñ?ĐµÑ‚Ñ?Ñ… (Đ´Đ°Đ»ĐµĐµ Đ¿Đ¾Đ´Ñ‹Ñ‚Đ¾Đ¶Đ¸Đ¼, Ñ‡Ñ‚Đ¾ Đ½Đ°Đ·Ñ‹Đ²Đ°ĐµÑ‚Ñ?Ñ? "Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Đµ"). Đ’ Ñ?Đ»ĐµĐ´ÑƒÑ?Ñ‰Đ¸Ñ… Đ¿Đ¾Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ?Ñ… Đ²Ñ‹ ÑƒĐ·Đ½Đ°ĐµÑ‚Đµ Đ¾ Ñ…Đ°Ñ€Đ°ĐºÑ‚ĐµÑ€Đµ, Đ¾Đ±Ñ?ĐµĐ¼Đµ, Đ¿Ñ€Đ¾Đ´Đ¾Đ»Đ¶Đ¸Ñ‚ĐµĐ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸ Đ¸ Ñ†ĐµĐ»Đ¸ Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ¸ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ½Đ°Đ¼Đ¸ ĐºĐ°Đº Đ¾Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²ĐµĐ½Đ½Ñ‹Đ¼ Đ¿Đ¾Ñ?Ñ‚Đ°Đ²Ñ‰Đ¸ĐºĐ¾Đ¼ Đ´Đ°Đ½Đ½Đ¾Đ³Đ¾ Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Đ°, Đ° Ñ‚Đ°ĐºĐ¶Đµ Đ¾ Ñ?Ñ‚Đ¾Ñ€Đ¾Đ½Đ½Đ¸Ñ… ĐºĐ¾Đ¼Đ¿Đ¾Đ½ĐµĐ½Ñ‚Đ°Ñ…, Ñ?Đ²Ñ?Đ·Đ°Đ½Đ½Ñ‹Ñ… Ñ? ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚ÑŒÑ?, ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đµ Đ¼Ñ‹ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµĐ¼ Đ² Ñ†ĐµĐ»Ñ?Ñ… Đ¾Đ¿Ñ‚Đ¸Đ¼Đ¸Đ·Đ°Ñ†Đ¸Đ¸ Đ¸ Đ¿Đ¾Đ²Ñ‹ÑˆĐµĐ½Đ¸Ñ? ĐºĐ°Ñ‡ĐµÑ?Ñ‚Đ²Đ° Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Ñ?. ĐœÑ‹ Đ¿Ñ€Đ¸Đ½Ñ?Đ»Đ¸ Đ¼Đ½Đ¾Đ³Đ¾Ñ‡Đ¸Ñ?Đ»ĐµĐ½Đ½Ñ‹Đµ Ñ‚ĐµÑ…Đ½Đ¸Ñ‡ĐµÑ?ĐºĐ¸Đµ, Đ´Đ¾Đ³Đ¾Đ²Đ¾Ñ€Đ½Ñ‹Đµ Đ¸ Đ¾Ñ€Đ³Đ°Đ½Đ¸Đ·Đ°Ñ†Đ¸Đ¾Đ½Đ½Ñ‹Đµ Đ¼ĐµÑ€Ñ‹ Đ´Đ»Ñ? Đ¾Đ±ĐµÑ?Đ¿ĐµÑ‡ĐµĐ½Đ¸Ñ? Ñ?Đ¾Đ±Đ»Ñ?Đ´ĐµĐ½Đ¸Ñ? Đ¿Ñ€Đ¸Đ¼ĐµĐ½Đ¸Đ¼Ñ‹Ñ… Đ¿Ñ€Đ°Đ²Đ¸Đ» ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸ Đ¸, Ñ‚Đ°ĐºĐ¸Đ¼ Đ¾Đ±Ñ€Đ°Đ·Đ¾Đ¼, Đ´Đ»Ñ? Đ·Đ°Ñ‰Đ¸Ñ‚Ñ‹ Đ´Đ°Đ½Đ½Ñ‹Ñ…, ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đ¼Đ¸ Đ¼Ñ‹ ÑƒĐ¿Ñ€Đ°Đ²Đ»Ñ?ĐµĐ¼, Đ¾Ñ‚ Ñ?Đ»ÑƒÑ‡Đ°Đ¹Đ½Ñ‹Ñ… Đ¸Đ»Đ¸ Đ¿Ñ€ĐµĐ´Đ½Đ°Đ¼ĐµÑ€ĐµĐ½Đ½Ñ‹Ñ… Đ¼Đ°Đ½Đ¸Đ¿ÑƒĐ»Ñ?Ñ†Đ¸Đ¹, Đ¿Đ¾Ñ‚ĐµÑ€Đ¸, ÑƒĐ½Đ¸Ñ‡Ñ‚Đ¾Đ¶ĐµĐ½Đ¸Ñ? Đ¸Đ»Đ¸ Đ¾Ñ‚ Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿Đ° Đ½ĐµÑ?Đ°Đ½ĐºÑ†Đ¸Đ¾Đ½Đ¸Ñ€Đ¾Đ²Đ°Đ½Đ½Ñ‹Ñ… Đ»Đ¸Ñ†. Đ¢ĐµĐ¼ Đ½Đµ Đ¼ĐµĐ½ĐµĐµ, Đ¾Đ±Ñ€Đ°Ñ‚Đ¸Ñ‚Đµ Đ²Đ½Đ¸Đ¼Đ°Đ½Đ¸Đµ, Ñ‡Ñ‚Đ¾ Đ¿ĐµÑ€ĐµĐ´Đ°Ñ‡Đ° Đ´Đ°Đ½Đ½Ñ‹Ñ… Ñ‡ĐµÑ€ĐµĐ· Đ˜Đ½Ñ‚ĐµÑ€Đ½ĐµÑ‚ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Ñ?Đ²Ñ?Đ·ÑŒ Đ¿Đ¾ Ñ?Đ»ĐµĐºÑ‚Ñ€Đ¾Đ½Đ½Đ¾Đ¹ Đ¿Đ¾Ñ‡Ñ‚Đµ) Đ² Đ¾Ñ?Đ½Đ¾Đ²Đ½Đ¾Đ¼ Đ¸Đ¼ĐµĐµÑ‚ ÑƒÑ?Đ·Đ²Đ¸Đ¼Đ¾Ñ?Ñ‚Đ¸, Đ¿Đ¾Ñ?Ñ‚Đ¾Đ¼Ñƒ Đ°Đ±Ñ?Đ¾Đ»Ñ?Ñ‚Đ½Đ°Ñ? Đ·Đ°Ñ‰Đ¸Ñ‚Đ° Đ½Đµ Đ¼Đ¾Đ¶ĐµÑ‚ Đ±Ñ‹Ñ‚ÑŒ Đ³Đ°Ñ€Đ°Đ½Ñ‚Đ¸Ñ€Đ¾Đ²Đ°Đ½Đ°. ĐŸĐ¾ Ñ?Ñ‚Đ¾Đ¹ Đ¿Ñ€Đ¸Ñ‡Đ¸Đ½Đµ Đ»Ñ?Đ±Đ¾Đµ Đ·Đ°Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ²Đ°Đ½Đ½Đ¾Đµ Đ»Đ¸Ñ†Đ¾ Đ¼Đ¾Đ¶ĐµÑ‚ Ñ‚Đ°ĐºĐ¶Đµ Ñ?Đ²Đ¾Đ±Đ¾Đ´Đ½Đ¾ Đ¿ĐµÑ€ĐµĐ´Đ°Đ²Đ°Ñ‚ÑŒ Đ½Đ°Đ¼ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Đµ Đ´Đ°Đ½Đ½Ñ‹Đµ Đ°Đ»ÑŒÑ‚ĐµÑ€Đ½Đ°Ñ‚Đ¸Đ²Đ½Ñ‹Đ¼Đ¸ Ñ?Đ¿Đ¾Ñ?Đ¾Đ±Đ°Đ¼Đ¸, Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¿Đ¾ Ñ‚ĐµĐ»ĐµÑ„Đ¾Đ½Ñƒ. Đ˜Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµĐ¼Ñ‹Đµ Ñ‚ĐµÑ€Đ¼Đ¸Đ½Ñ‹ Đ½Đµ Đ·Đ°Đ²Đ¸Ñ?Ñ?Ñ‚ Đ¾Ñ‚ Đ¿Đ¾Đ»Đ°.',
     // header VERANTWORTLICHER  
     'VERANTWORTLICHER': 'Đ?Đ¢Đ’Đ•Đ¢Đ¡Đ¢Đ’Đ•Đ?Đ?Đ?Đ¡Đ¢Đ¬',
     'GmbH': 'Đ?Đ?Đ? DeinSteinDesign',
     'Steinberg': `Đ£Đ»Đ¸Ñ†Đ° Steinberg 13`,
     'Dresden': '01309 Dresden',
     // header VERTRETUNGSBERECHTIGTE PERSONEN
     'PERSONEN': 'Đ£ĐŸĐ?Đ›Đ?Đ?ĐœĐ?Đ§Đ•Đ?Đ?Đ«Đ• ĐŸĐ Đ•Đ”Đ¡Đ¢Đ?Đ’Đ˜Đ¢Đ•Đ›Đ˜',
     'Tina': `Tina Oehler & Linda Winnie Grumbt`,
     'EMail': 'E-Mail: hello@deinsteindesign.de',
     // header ĂœBERSICHT DER VERARBEITUNGEN
     'VERARBEITUNGEN': 'Đ?Đ‘Đ—Đ?Đ  Đ?Đ‘Đ Đ?Đ‘Đ?Đ¢Đ?Đ˜',
     'Die': 'Đ’ Đ¿Ñ€Đ¸Đ²ĐµĐ´ĐµĐ½Đ½Đ¾Đ¼ Đ½Đ¸Đ¶Đµ Đ¾Đ±Đ·Đ¾Ñ€Đµ Ñ?ÑƒĐ¼Đ¼Đ¸Ñ€ÑƒÑ?Ñ‚Ñ?Ñ? Ñ‚Đ¸Đ¿Ñ‹ Đ¾Đ±Ñ€Đ°Đ±Đ°Ñ‚Ñ‹Đ²Đ°ĐµĐ¼Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ¸ Ñ†ĐµĐ»Đ¸ Đ¸Ñ… Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ¸, Đ° Ñ‚Đ°ĐºĐ¶Đµ ÑƒĐºĐ°Đ·Ñ‹Đ²Đ°Ñ?Ñ‚Ñ?Ñ? Đ·Đ°Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ²Đ°Đ½Đ½Ñ‹Đµ Đ»Đ¸Ñ†Đ°.',
     // header ARTEN DER VERARBEITETEN DATEN
     'ARTENH1': 'Đ¢Đ˜ĐŸĐ« Đ?Đ‘Đ Đ?Đ‘Đ?Đ¢Đ«Đ’Đ?Đ•ĐœĐ«Đ¥ Đ”Đ?Đ?Đ?Đ«Đ¥',
     'Price': `â€¢ Đ”Đ°Đ½Đ½Ñ‹Đµ Đ¾ Đ·Đ°Đ¿Đ°Ñ?Đ°Ñ… (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¸Đ¼ĐµĐ½Đ°, Đ°Đ´Ñ€ĐµÑ?Đ°). â€¢ Đ”Đ°Đ½Đ½Ñ‹Đµ ĐºĐ¾Đ½Ñ‚ĐµĐ½Ñ‚Đ° (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ²Ñ…Đ¾Đ´Đ½Ñ‹Đµ Đ´Đ°Đ½Đ½Ñ‹Đµ Đ² Đ¾Đ½Đ»Đ°Đ¹Đ½-Ñ„Đ¾Ñ€Đ¼Đ°Ñ…). â€¢ Đ?Đ¾Đ½Ñ‚Đ°ĐºÑ‚Đ½Ñ‹Đµ Đ´Đ°Đ½Đ½Ñ‹Đµ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Ñ?Đ»ĐµĐºÑ‚Ñ€Đ¾Đ½Đ½Đ°Ñ? Đ¿Đ¾Ñ‡Ñ‚Đ°, Đ½Đ¾Đ¼ĐµÑ€Đ° Ñ‚ĐµĐ»ĐµÑ„Đ¾Đ½Đ¾Đ²). â€¢ ĐœĐµÑ‚Đ° - / ĐºĐ¾Đ¼Đ¼ÑƒĐ½Đ¸ĐºĐ°Ñ†Đ¸Đ¾Đ½Đ½Ñ‹Đµ Đ´Đ°Đ½Đ½Ñ‹Đµ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Ñ? Đ¾Đ± ÑƒÑ?Ñ‚Ñ€Đ¾Đ¹Ñ?Ñ‚Đ²Đµ, IP-Đ°Đ´Ñ€ĐµÑ?Đ°). â€¢ Đ”Đ°Đ½Đ½Ñ‹Đµ Đ¾Đ± Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Đ¸ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¿Đ¾Ñ?ĐµÑ‰ĐµĐ½Đ½Ñ‹Đµ Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Ñ‹, Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ? Đº ĐºĐ¾Đ½Ñ‚ĐµĐ½Ñ‚Ñƒ, Đ²Ñ€ĐµĐ¼Ñ? Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿Đ°)`,
     // header KATEGORIEN BETROFFENER PERSONEN
     'KATEGORIENH1': 'Đ?Đ?Đ¢Đ•Đ“Đ?Đ Đ˜Đ˜ Đ—Đ?Đ¢Đ Đ?Đ?Đ£Đ¢Đ«Đ¥ Đ›Đ®Đ”Đ•Đ™',
     'Kommunikationspartner': 'â€¢ ĐŸĐ°Ñ€Ñ‚Đ½ĐµÑ€Ñ‹ Đ¿Đ¾ Đ¾Đ±Ñ‰ĐµĐ½Đ¸Ñ?. â€¢ ĐŸĐ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»Đ¸ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¿Đ¾Ñ?ĐµÑ‚Đ¸Ñ‚ĐµĐ»Đ¸ Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Đ°, Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»Đ¸ Đ¾Đ½Đ»Đ°Đ¹Đ½-Ñ?ĐµÑ€Đ²Đ¸Ñ?Đ¾Đ²).',
     // header ZWECKE DER VERARBEITUNG
     'ZWECKEH1': 'Đ¦Đ•Đ›Đ˜ Đ?Đ‘Đ Đ?Đ‘Đ?Đ¢Đ?Đ˜',
     'Bereitstellung': 'â€¢ ĐŸÑ€ĐµĐ´Đ¾Ñ?Ñ‚Đ°Đ²Đ»ĐµĐ½Đ¸Đµ Đ½Đ°ÑˆĐµĐ³Đ¾ Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ? Đ¸ ÑƒĐ´Đ¾Đ±Ñ?Ñ‚Đ²Đ¾ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Ñ?. â€¢ Đ˜Đ·Đ¼ĐµÑ€ĐµĐ½Đ¸Đµ ĐºĐ¾Đ½Đ²ĐµÑ€Ñ?Đ¸Đ¸ (Đ¸Đ·Đ¼ĐµÑ€ĐµĐ½Đ¸Đµ Ñ?Ñ„Ñ„ĐµĐºÑ‚Đ¸Đ²Đ½Đ¾Ñ?Ñ‚Đ¸ Đ¼Đ°Ñ€ĐºĐµÑ‚Đ¸Đ½Đ³Đ¾Đ²Ñ‹Ñ… Đ´ĐµĐ¹Ñ?Ñ‚Đ²Đ¸Đ¹). â€¢ ĐŸÑ€Ñ?Đ¼Đ¾Đ¹ Đ¼Đ°Ñ€ĐºĐµÑ‚Đ¸Đ½Đ³ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¿Đ¾ Ñ?Đ»ĐµĐºÑ‚Ñ€Đ¾Đ½Đ½Đ¾Đ¹ Đ¿Đ¾Ñ‡Ñ‚Đµ Đ¸Đ»Đ¸ Đ¿Đ¾ Đ¿Đ¾Ñ‡Ñ‚Đµ). â€¢ ĐœĐ°Ñ€ĐºĐµÑ‚Đ¸Đ½Đ³ Đ½Đ° Đ¾Ñ?Đ½Đ¾Đ²Đµ Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ² Đ¸ Đ¿Đ¾Đ²ĐµĐ´ĐµĐ½Đ¸Ñ?. â€¢ Đ—Đ°Đ¿Ñ€Đ¾Ñ?Ñ‹ Đ½Đ° ĐºĐ¾Đ½Ñ‚Đ°ĐºÑ‚Ñ‹ Đ¸ Đ¾Đ±Ñ‰ĐµĐ½Đ¸Đµ. * ĐŸÑ€Đ¾Ñ„Đ¸Đ»Đ¸Ñ€Đ¾Đ²Đ°Đ½Đ¸Đµ (Ñ?Đ¾Đ·Đ´Đ°Đ½Đ¸Đµ Đ¿Ñ€Đ¾Ñ„Đ¸Đ»ĐµĐ¹ Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»ĐµĐ¹). * Đ ĐµĐ¼Đ°Ñ€ĐºĐµÑ‚Đ¸Đ½Đ³ â€¢ â€¢ Đ˜Đ·Đ¼ĐµÑ€ĐµĐ½Đ¸Đµ Đ´Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Ñ?Ñ‚Đ°Ñ‚Đ¸Ñ?Ñ‚Đ¸ĐºĐ° Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿Đ°, Đ¾Đ±Đ½Đ°Ñ€ÑƒĐ¶ĐµĐ½Đ¸Đµ Đ¿Đ¾Đ²Ñ‚Đ¾Ñ€Ñ?Ñ?Ñ‰Đ¸Ñ…Ñ?Ñ? Đ¿Đ¾Ñ?ĐµÑ‚Đ¸Ñ‚ĐµĐ»ĐµĐ¹). â€¢ ĐœĐµÑ€Ñ‹ Đ±ĐµĐ·Đ¾Đ¿Đ°Ñ?Đ½Đ¾Ñ?Ñ‚Đ¸. * Đ?Ñ‚Ñ?Đ»ĐµĐ¶Đ¸Đ²Đ°Đ½Đ¸Đµ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¿Ñ€Đ¾Ñ„Đ¸Đ»Đ¸Ñ€Đ¾Đ²Đ°Đ½Đ¸Đµ Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ²/Đ¿Đ¾Đ²ĐµĐ´ĐµĐ½Đ¸Ñ?, Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Đµ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie). â€¢ ĐŸÑ€ĐµĐ´Đ¾Ñ?Ñ‚Đ°Đ²Đ»ĐµĐ½Đ¸Đµ Đ´Đ¾Đ³Đ¾Đ²Đ¾Ñ€Đ½Ñ‹Ñ… ÑƒÑ?Đ»ÑƒĐ³ Đ¸ Đ¾Đ±Ñ?Đ»ÑƒĐ¶Đ¸Đ²Đ°Đ½Đ¸Đµ ĐºĐ»Đ¸ĐµĐ½Ñ‚Đ¾Đ². â€¢ Đ£Đ¿Ñ€Đ°Đ²Đ»ĐµĐ½Đ¸Đµ Đ¸ Đ¾Ñ‚Đ²ĐµÑ‚ Đ½Đ° Đ·Đ°Đ¿Ñ€Đ¾Ñ?Ñ‹.',
     // header MASSGEBLICHE RECHTSGRUNDLAGEN
     'MASSGEBLICHEH1': 'ĐœĐ?Đ¡Đ¡Đ?Đ’Đ«Đ• ĐŸĐ Đ?Đ’Đ?Đ’Đ«Đ• Đ?Đ¡Đ?Đ?Đ’Đ«',
     'Folgenden': 'Đ?Đ¸Đ¶Đµ Đ¼Ñ‹ Ñ?Đ¾Đ¾Đ±Ñ‰Đ°ĐµĐ¼ Đ¿Ñ€Đ°Đ²Đ¾Đ²Ñ‹Đµ Đ¾Ñ?Đ½Đ¾Đ²Ñ‹ Đ?Ñ?Đ½Đ¾Đ²Đ½Đ¾Đ³Đ¾ Đ¿Đ¾Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ? Đ¾ Đ·Đ°Ñ‰Đ¸Ñ‚Đµ Đ´Đ°Đ½Đ½Ñ‹Ñ… (GDPR), Đ½Đ° Đ¾Ñ?Đ½Đ¾Đ²Đµ ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Ñ… Đ¼Ñ‹ Đ¾Đ±Ñ€Đ°Đ±Đ°Ñ‚Ñ‹Đ²Đ°ĐµĐ¼ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Đµ Đ´Đ°Đ½Đ½Ñ‹Đµ. ĐŸĐ¾Đ¶Đ°Đ»ÑƒĐ¹Ñ?Ñ‚Đ°, Đ¾Đ±Ñ€Đ°Ñ‚Đ¸Ñ‚Đµ Đ²Đ½Đ¸Đ¼Đ°Đ½Đ¸Đµ, Ñ‡Ñ‚Đ¾ Đ² Đ´Đ¾Đ¿Đ¾Đ»Đ½ĐµĐ½Đ¸Đµ Đº Đ¿Ñ€Đ°Đ²Đ¸Đ»Đ°Đ¼ GDPR Đ½Đ°Ñ†Đ¸Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Đµ Đ¿Ñ€Đ°Đ²Đ¸Đ»Đ° ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸ Đ¼Đ¾Đ³ÑƒÑ‚ Đ¿Ñ€Đ¸Đ¼ĐµĐ½Ñ?Ñ‚ÑŒÑ?Ñ? Đ² Đ²Đ°ÑˆĐµĐ¹ Đ¸Đ»Đ¸ Đ½Đ°ÑˆĐµĐ¹ Ñ?Ñ‚Ñ€Đ°Đ½Đµ Đ¿Ñ€Đ¾Đ¶Đ¸Đ²Đ°Đ½Đ¸Ñ? Đ¸ Đ¿Ñ€Đ¾Đ¶Đ¸Đ²Đ°Đ½Đ¸Ñ?. Đ?Ñ€Đ¾Đ¼Đµ Ñ‚Đ¾Đ³Đ¾, Đ² Đ¾Ñ‚Đ´ĐµĐ»ÑŒĐ½Ñ‹Ñ… Ñ?Đ»ÑƒÑ‡Đ°Ñ?Ñ…, ĐµÑ?Đ»Đ¸ Đ±Đ¾Đ»ĐµĐµ Ñ?Đ¿ĐµÑ†Đ¸Đ°Đ»ÑŒĐ½Ñ‹Đµ Đ¿Ñ€Đ°Đ²Đ¾Đ²Ñ‹Đµ Đ¾Ñ?Đ½Đ¾Đ²Ñ‹ Đ¸Đ¼ĐµÑ?Ñ‚ Ñ€ĐµÑˆĐ°Ñ?Ñ‰ĐµĐµ Đ·Đ½Đ°Ñ‡ĐµĐ½Đ¸Đµ, Đ¼Ñ‹ Ñ?Đ¾Đ¾Đ±Ñ‰Đ¸Đ¼ Đ²Đ°Đ¼ Đ¾Đ± Ñ?Ñ‚Đ¾Đ¼ Đ² ĐŸĐ¾Đ»Đ¸Ñ‚Đ¸ĐºĐµ ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸. â€¢ Đ¡Đ¾Đ³Đ»Đ°Ñ?Đ¸Đµ (Ñ?Ñ‚Đ°Ñ‚ÑŒÑ? 6 Đ°Đ±Ñ?. 1 Ñ?Ñ‚Ñ€. 1 Đ»Đ¸Ñ‚. a. GDPR) - Đ—Đ°Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ²Đ°Đ½Đ½Đ¾Đµ Đ»Đ¸Ñ†Đ¾ Đ´Đ°Đ»Đ¾ Ñ?Đ²Đ¾Đµ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Đµ Đ½Đ° Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºÑƒ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ…, ĐºĐ°Ñ?Đ°Ñ?Ñ‰Đ¸Ñ…Ñ?Ñ? Đ²Đ°Ñ?, Đ´Đ»Ñ? ĐºĐ¾Đ½ĐºÑ€ĐµÑ‚Đ½Đ¾Đ¹ Ñ†ĐµĐ»Đ¸ Đ¸Đ»Đ¸ Đ½ĐµÑ?ĐºĐ¾Đ»ÑŒĐºĐ¸Ñ… ĐºĐ¾Đ½ĐºÑ€ĐµÑ‚Đ½Ñ‹Ñ… Ñ†ĐµĐ»ĐµĐ¹. â€¢ Đ’Ñ‹Đ¿Đ¾Đ»Đ½ĐµĐ½Đ¸Đµ ĐºĐ¾Đ½Ñ‚Ñ€Đ°ĐºÑ‚Đ¾Đ² Đ¸ Đ¿Ñ€ĐµĐ´Đ²Đ°Ñ€Đ¸Ñ‚ĐµĐ»ÑŒĐ½Ñ‹Đµ Đ·Đ°Đ¿Ñ€Đ¾Ñ?Ñ‹ (Ñ?Ñ‚Đ°Ñ‚ÑŒÑ? 6 Đ°Đ±Ñ?. 1 Ñ?. 1 Đ»Đ¸Ñ‚. b.GDPR) â€“ Đ?Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ° Đ½ĐµĐ¾Đ±Ñ…Đ¾Đ´Đ¸Đ¼Đ° Đ´Đ»Ñ? Đ²Ñ‹Đ¿Đ¾Đ»Đ½ĐµĐ½Đ¸Ñ? ĐºĐ¾Đ½Ñ‚Ñ€Đ°ĐºÑ‚Đ°, Ñ?Ñ‚Đ¾Ñ€Đ¾Đ½Đ¾Đ¹ ĐºĐ¾Ñ‚Đ¾Ñ€Đ¾Đ³Đ¾ Ñ?Đ²Đ»Ñ?ĐµÑ‚Ñ?Ñ? Đ·Đ°Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ²Đ°Đ½Đ½Đ¾Đµ Đ»Đ¸Ñ†Đ¾, Đ¸Đ»Đ¸ Đ´Đ»Ñ? Đ²Ñ‹Đ¿Đ¾Đ»Đ½ĐµĐ½Đ¸Ñ? Đ¿Ñ€ĐµĐ´Đ²Đ°Ñ€Đ¸Ñ‚ĐµĐ»ÑŒĐ½Ñ‹Ñ… Đ´Đ¾Đ³Đ¾Đ²Đ¾Ñ€Đ½Ñ‹Ñ… Đ´ĐµĐ¹Ñ?Ñ‚Đ²Đ¸Đ¹, ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đµ Đ¿Ñ€Đ¾Đ¸Đ·Đ²Đ¾Đ´Ñ?Ñ‚Ñ?Ñ? Đ¿Đ¾ Đ·Đ°Đ¿Ñ€Đ¾Ñ?Ñƒ Đ·Đ°Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ²Đ°Đ½Đ½Đ¾Đ³Đ¾ Đ»Đ¸Ñ†Đ°. * Đ—Đ°ĐºĐ¾Đ½Đ½Ñ‹Đµ Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Ñ‹ (Ñ?Ñ‚Đ°Ñ‚ÑŒÑ? 6 Đ¿. 1 Ñ?Ñ‚. 1 Đ»Đ¸Ñ‚. f. GDPR) â€“ Đ?Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ° Đ½ĐµĐ¾Đ±Ñ…Đ¾Đ´Đ¸Đ¼Đ° Đ´Đ»Ñ? Đ·Đ°Ñ‰Đ¸Ñ‚Ñ‹ Đ·Đ°ĐºĐ¾Đ½Đ½Ñ‹Ñ… Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ² Đ¾Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²ĐµĐ½Đ½Đ¾Đ³Đ¾ Đ»Đ¸Ñ†Đ° Đ¸Đ»Đ¸ Ñ‚Ñ€ĐµÑ‚ÑŒĐµĐ¹ Ñ?Ñ‚Đ¾Ñ€Đ¾Đ½Ñ‹, ĐµÑ?Đ»Đ¸ Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Ñ‹ Đ¸Đ»Đ¸ Đ¾Ñ?Đ½Đ¾Đ²Đ½Ñ‹Đµ Đ¿Ñ€Đ°Đ²Đ° Đ¸ Đ¾Ñ?Đ½Đ¾Đ²Đ½Ñ‹Đµ Ñ?Đ²Đ¾Đ±Đ¾Đ´Ñ‹ Đ·Đ°Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ²Đ°Đ½Đ½Đ¾Đ³Đ¾ Đ»Đ¸Ñ†Đ°, Ñ‚Ñ€ĐµĐ±ÑƒÑ?Ñ‰Đ¸Đµ Đ·Đ°Ñ‰Đ¸Ñ‚Ñ‹ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ…, Đ½Đµ Đ¿ĐµÑ€ĐµĐ²ĐµÑˆĐ¸Đ²Đ°Ñ?Ñ‚. Đ“ĐµÑ€Đ¼Đ°Đ½Đ¸Ñ? Đ“ĐµÑ€Đ¼Đ°Đ½Đ¸Ñ?: Đ’ Đ´Đ¾Đ¿Đ¾Đ»Đ½ĐµĐ½Đ¸Đµ Đº Đ?Ñ?Đ½Đ¾Đ²Đ½Ñ‹Đ¼ Đ¿Ñ€Đ°Đ²Đ¸Đ»Đ°Đ¼ Đ·Đ°Ñ‰Đ¸Ñ‚Ñ‹ Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ² Đ“ĐµÑ€Đ¼Đ°Đ½Đ¸Đ¸ Đ¿Ñ€Đ¸Đ¼ĐµĐ½Ñ?Ñ?Ñ‚Ñ?Ñ? Đ½Đ°Ñ†Đ¸Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Đµ Đ¿Ñ€Đ°Đ²Đ¸Đ»Đ° Đ·Đ°Ñ‰Đ¸Ñ‚Ñ‹ Đ´Đ°Đ½Đ½Ñ‹Ñ…. Đ­Ñ‚Đ¾, Đ² Ñ‡Đ°Ñ?Ñ‚Đ½Đ¾Ñ?Ñ‚Đ¸, Đ²ĐºĐ»Ñ?Ñ‡Đ°ĐµÑ‚ Đ² Ñ?ĐµĐ±Ñ? Đ—Đ°ĐºĐ¾Đ½ Đ¾ Đ·Đ°Ñ‰Đ¸Ñ‚Đµ Đ¾Ñ‚ Đ½ĐµĐ¿Ñ€Đ°Đ²Đ¸Đ»ÑŒĐ½Đ¾Đ³Đ¾ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Ñ? Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ¿Ñ€Đ¸ Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐµ Đ´Đ°Đ½Đ½Ñ‹Ñ… (Đ¤ĐµĐ´ĐµÑ€Đ°Đ»ÑŒĐ½Ñ‹Đ¹ Đ·Đ°ĐºĐ¾Đ½ Đ¾ Đ·Đ°Ñ‰Đ¸Ñ‚Đµ Đ´Đ°Đ½Đ½Ñ‹Ñ… â€“ BDSG). Đ’ Ñ‡Đ°Ñ?Ñ‚Đ½Đ¾Ñ?Ñ‚Đ¸, BDSG Ñ?Đ¾Đ´ĐµÑ€Đ¶Đ¸Ñ‚ Ñ?Đ¿ĐµÑ†Đ¸Đ°Đ»ÑŒĐ½Ñ‹Đµ Đ¿Ñ€Đ°Đ²Đ¸Đ»Đ° Đ¾ Đ¿Ñ€Đ°Đ²Đµ Đ½Đ° Đ¿Đ¾Đ»ÑƒÑ‡ĐµĐ½Đ¸Đµ Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Đ¸, Đ¿Ñ€Đ°Đ²Đµ Đ½Đ° ÑƒĐ´Đ°Đ»ĐµĐ½Đ¸Đµ, Đ¿Ñ€Đ°Đ²Đµ Đ½Đ° Đ²Đ¾Đ·Ñ€Đ°Đ¶ĐµĐ½Đ¸Đµ, Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐµ Đ¾Ñ?Đ¾Đ±Ñ‹Ñ… ĐºĐ°Ñ‚ĐµĐ³Đ¾Ñ€Đ¸Đ¹ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ…, Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐµ Đ´Đ»Ñ? Đ´Ñ€ÑƒĐ³Đ¸Ñ… Ñ†ĐµĐ»ĐµĐ¹ Đ¸ Đ¿ĐµÑ€ĐµĐ´Đ°Ñ‡Đµ, Đ° Ñ‚Đ°ĐºĐ¶Đµ Đ°Đ²Ñ‚Đ¾Đ¼Đ°Ñ‚Đ¸Đ·Đ¸Ñ€Đ¾Đ²Đ°Đ½Đ½Đ¾Đ¼ Đ¿Ñ€Đ¸Đ½Ñ?Ñ‚Đ¸Đ¸ Ñ€ĐµÑˆĐµĐ½Đ¸Đ¹ Đ² Đ¾Ñ‚Đ´ĐµĐ»ÑŒĐ½Ñ‹Ñ… Ñ?Đ»ÑƒÑ‡Đ°Ñ?Ñ…, Đ²ĐºĐ»Ñ?Ñ‡Đ°Ñ? Đ¿Ñ€Đ¾Ñ„Đ¸Đ»Đ¸Ñ€Đ¾Đ²Đ°Đ½Đ¸Đµ. Đ?Ñ€Đ¾Đ¼Đµ Ñ‚Đ¾Đ³Đ¾, Đ¾Đ½ Ñ€ĐµĐ³ÑƒĐ»Đ¸Ñ€ÑƒĐµÑ‚ Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºÑƒ Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ´Đ»Ñ? Ñ†ĐµĐ»ĐµĐ¹ Ñ‚Ñ€ÑƒĐ´Đ¾Đ²Ñ‹Ñ… Đ¾Ñ‚Đ½Đ¾ÑˆĐµĐ½Đ¸Đ¹ (Â§ 26 BDSG), Đ¾Ñ?Đ¾Đ±ĐµĐ½Đ½Đ¾ Đ² Đ¾Ñ‚Đ½Đ¾ÑˆĐµĐ½Đ¸Đ¸ Đ¾Đ±Đ¾Ñ?Đ½Đ¾Đ²Đ°Đ½Đ¸Ñ?, Đ¾Ñ?ÑƒÑ‰ĐµÑ?Ñ‚Đ²Đ»ĐµĐ½Đ¸Ñ? Đ¸Đ»Đ¸ Đ¿Ñ€ĐµĐºÑ€Đ°Ñ‰ĐµĐ½Đ¸Ñ? Ñ‚Ñ€ÑƒĐ´Đ¾Đ²Ñ‹Ñ… Đ¾Ñ‚Đ½Đ¾ÑˆĐµĐ½Đ¸Đ¹, Đ° Ñ‚Đ°ĐºĐ¶Đµ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Ñ? Ñ?Đ¾Ñ‚Ñ€ÑƒĐ´Đ½Đ¸ĐºĐ¾Đ². Đ?Ñ€Đ¾Đ¼Đµ Ñ‚Đ¾Đ³Đ¾, Đ¼Đ¾Đ³ÑƒÑ‚ Đ¿Ñ€Đ¸Đ¼ĐµĐ½Ñ?Ñ‚ÑŒÑ?Ñ? Đ·Đ°ĐºĐ¾Đ½Ñ‹ Đ¾ Đ·Đ°Ñ‰Đ¸Ñ‚Đµ Đ´Đ°Đ½Đ½Ñ‹Ñ… ÑˆÑ‚Đ°Ñ‚Đ° ĐºĐ°Đ¶Đ´Đ¾Đ³Đ¾ ÑˆÑ‚Đ°Ñ‚Đ°.',
     // header SICHERHEITSMASSNAHMEN
     'SICHERH1': 'ĐœĐ•Đ Đ« Đ‘Đ•Đ—Đ?ĐŸĐ?Đ¡Đ?Đ?Đ¡Đ¢Đ˜',
     'Wir': 'ĐœÑ‹ Đ¿Ñ€Đ¸Đ½Đ¸Đ¼Đ°ĐµĐ¼ Ñ?Đ¾Đ¾Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²ÑƒÑ?Ñ‰Đ¸Đµ Ñ‚ĐµÑ…Đ½Đ¸Ñ‡ĐµÑ?ĐºĐ¸Đµ Đ¸ Đ¾Ñ€Đ³Đ°Đ½Đ¸Đ·Đ°Ñ†Đ¸Đ¾Đ½Đ½Ñ‹Đµ Đ¼ĐµÑ€Ñ‹ Đ² Ñ?Đ¾Đ¾Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²Đ¸Đ¸ Ñ? Ñ‚Ñ€ĐµĐ±Đ¾Đ²Đ°Đ½Đ¸Ñ?Đ¼Đ¸ Đ·Đ°ĐºĐ¾Đ½Đ¾Đ´Đ°Ñ‚ĐµĐ»ÑŒÑ?Ñ‚Đ²Đ° Ñ? ÑƒÑ‡ĐµÑ‚Đ¾Đ¼ ÑƒÑ€Đ¾Đ²Đ½Ñ? Ñ‚ĐµÑ…Đ½Đ¸ĐºĐ¸, Đ·Đ°Ñ‚Ñ€Đ°Ñ‚ Đ½Đ° Đ²Đ½ĐµĐ´Ñ€ĐµĐ½Đ¸Đµ Đ¸ Ñ…Đ°Ñ€Đ°ĐºÑ‚ĐµÑ€Đ°, Đ¾Đ±Ñ?ĐµĐ¼Đ°, Đ¾Đ±Ñ?Ñ‚Đ¾Ñ?Ñ‚ĐµĐ»ÑŒÑ?Ñ‚Đ² Đ¸ Ñ†ĐµĐ»ĐµĐ¹ Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ¸, Đ° Ñ‚Đ°ĐºĐ¶Đµ Ñ€Đ°Đ·Đ»Đ¸Ñ‡Đ½Ñ‹Ñ… Đ²ĐµÑ€Đ¾Ñ?Ñ‚Đ½Đ¾Ñ?Ñ‚ĐµĐ¹ Đ²Ñ…Đ¾Đ´Đ° Đ¸ Ñ?Ñ‚ĐµĐ¿ĐµĐ½Đ¸ ÑƒĐ³Ñ€Đ¾Đ·Ñ‹ Đ¿Ñ€Đ°Đ²Đ°Đ¼ Đ¸ Ñ?Đ²Đ¾Đ±Đ¾Đ´Đ°Đ¼ Ñ„Đ¸Đ·Đ¸Ñ‡ĐµÑ?ĐºĐ¸Ñ… Đ»Đ¸Ñ†, Ñ‡Ñ‚Đ¾Đ±Ñ‹ Đ¾Đ±ĐµÑ?Đ¿ĐµÑ‡Đ¸Ñ‚ÑŒ ÑƒÑ€Đ¾Đ²ĐµĐ½ÑŒ Đ·Đ°Ñ‰Đ¸Ñ‚Ñ‹, Ñ?Đ¾Đ¾Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²ÑƒÑ?Ñ‰Đ¸Đ¹ Ñ€Đ¸Ñ?ĐºÑƒ. ĐœĐµÑ€Ñ‹ Đ²ĐºĐ»Ñ?Ñ‡Đ°Ñ?Ñ‚, Đ² Ñ‡Đ°Ñ?Ñ‚Đ½Đ¾Ñ?Ñ‚Đ¸, Đ¾Đ±ĐµÑ?Đ¿ĐµÑ‡ĐµĐ½Đ¸Đµ ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸, Ñ†ĐµĐ»Đ¾Ñ?Ñ‚Đ½Đ¾Ñ?Ñ‚Đ¸ Đ¸ Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿Đ½Đ¾Ñ?Ñ‚Đ¸ Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ¿ÑƒÑ‚ĐµĐ¼ ĐºĐ¾Đ½Ñ‚Ñ€Đ¾Đ»Ñ? Ñ„Đ¸Đ·Đ¸Ñ‡ĐµÑ?ĐºĐ¾Đ³Đ¾ Đ¸ Ñ?Đ»ĐµĐºÑ‚Ñ€Đ¾Đ½Đ½Đ¾Đ³Đ¾ Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿Đ° Đº Đ´Đ°Đ½Đ½Ñ‹Đ¼, Đ° Ñ‚Đ°ĐºĐ¶Đµ Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿Đ°, Đ²Đ²Đ¾Đ´Đ°, Đ¿ĐµÑ€ĐµĐ´Đ°Ñ‡Đ¸, Đ¾Đ±ĐµÑ?Đ¿ĐµÑ‡ĐµĐ½Đ¸Ñ? Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿Đ½Đ¾Ñ?Ñ‚Đ¸ Đ¸ Đ¸Ñ… Ñ€Đ°Đ·Đ´ĐµĐ»ĐµĐ½Đ¸Ñ?. Đ?Ñ€Đ¾Đ¼Đµ Ñ‚Đ¾Đ³Đ¾, Đ¼Ñ‹ Ñ?Đ¾Đ·Đ´Đ°Đ»Đ¸ Đ¿Ñ€Đ¾Ñ†ĐµĐ´ÑƒÑ€Ñ‹, ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đµ Đ¾Đ±ĐµÑ?Đ¿ĐµÑ‡Đ¸Đ²Đ°Ñ?Ñ‚ Ñ?Đ¾Đ±Đ»Ñ?Đ´ĐµĐ½Đ¸Đµ Đ·Đ°Ñ‚Ñ€Đ¾Đ½ÑƒÑ‚Ñ‹Ñ… Đ¿Ñ€Đ°Đ², ÑƒĐ´Đ°Đ»ĐµĐ½Đ¸Đµ Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ¸ Ñ€ĐµĐ°Đ³Đ¸Ñ€Đ¾Đ²Đ°Đ½Đ¸Đµ Đ½Đ° ÑƒĐ³Ñ€Đ¾Đ·Ñƒ Đ´Đ°Đ½Đ½Ñ‹Ñ…. Đ?Ñ€Đ¾Đ¼Đµ Ñ‚Đ¾Đ³Đ¾, Đ¼Ñ‹ ÑƒÑ‡Đ¸Ñ‚Ñ‹Đ²Đ°ĐµĐ¼ Đ·Đ°Ñ‰Đ¸Ñ‚Ñƒ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ… ÑƒĐ¶Đµ Đ¿Ñ€Đ¸ Ñ€Đ°Đ·Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐµ Đ¸Đ»Đ¸ Ñ€Đ°Đ·Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐµ. Đ’Ñ‹Đ±Đ¾Ñ€ Đ¾Đ±Đ¾Ñ€ÑƒĐ´Đ¾Đ²Đ°Đ½Đ¸Ñ?, Đ¿Ñ€Đ¾Đ³Ñ€Đ°Đ¼Đ¼Đ½Đ¾Đ³Đ¾ Đ¾Đ±ĐµÑ?Đ¿ĐµÑ‡ĐµĐ½Đ¸Ñ? Đ¸ Đ¿Ñ€Đ¾Ñ†ĐµĐ´ÑƒÑ€ Đ² Ñ?Đ¾Đ¾Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²Đ¸Đ¸ Ñ? Đ¿Ñ€Đ¸Đ½Ñ†Đ¸Đ¿Đ¾Đ¼ ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸, Ñ? Đ¿Đ¾Đ¼Đ¾Ñ‰ÑŒÑ? Ñ‚ĐµÑ…Đ½Đ¸Ñ‡ĐµÑ?ĐºĐ¾Đ³Đ¾ Đ´Đ¸Đ·Đ°Đ¹Đ½Đ° Đ¸ Ñ? Đ¿Đ¾Đ¼Đ¾Ñ‰ÑŒÑ? Đ¿Ñ€ĐµĐ´ÑƒÑ?Ñ‚Đ°Đ½Đ¾Đ²Đ¾Đº, Đ´Ñ€ÑƒĐ¶ĐµÑ?Ñ‚Đ²ĐµĐ½Đ½Ñ‹Ñ… Đº ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸. Đ¡Đ¾ĐºÑ€Đ°Ñ‰ĐµĐ½Đ¸Đµ IP-Đ°Đ´Ñ€ĐµÑ?Đ°: ĐµÑ?Đ»Đ¸ IP-Đ°Đ´Ñ€ĐµÑ?Đ° Đ¾Đ±Ñ€Đ°Đ±Đ°Ñ‚Ñ‹Đ²Đ°Ñ?Ñ‚Ñ?Ñ? Đ½Đ°Đ¼Đ¸ Đ¸Đ»Đ¸ Đ¿Đ¾Ñ?Ñ‚Đ°Đ²Ñ‰Đ¸ĐºĐ°Đ¼Đ¸ ÑƒÑ?Đ»ÑƒĐ³ Đ¸ Ñ‚ĐµÑ…Đ½Đ¾Đ»Đ¾Đ³Đ¸Ñ?Đ¼Đ¸, ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đµ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒÑ?Ñ‚Ñ?Ñ?, Đ¸ Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ° Đ¿Đ¾Đ»Đ½Đ¾Đ³Đ¾ IP-Đ°Đ´Ñ€ĐµÑ?Đ° Đ½Đµ Ñ‚Ñ€ĐµĐ±ÑƒĐµÑ‚Ñ?Ñ?, IP-Đ°Đ´Ñ€ĐµÑ? Ñ?Đ¾ĐºÑ€Đ°Ñ‰Đ°ĐµÑ‚Ñ?Ñ? (Ñ‚Đ°ĐºĐ¶Đµ Đ¸Đ·Đ²ĐµÑ?Ñ‚Đ½Ñ‹Đ¹ ĐºĐ°Đºâ€œ Đ¼Đ°Ñ?ĐºĐ¸Ñ€Đ¾Đ²ĐºĐ° IP"). ĐŸÑ€Đ¸ Ñ?Ñ‚Đ¾Đ¼ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒÑ?Ñ‚Ñ?Ñ? Đ¿Đ¾Ñ?Đ»ĐµĐ´Đ½Đ¸Đµ Đ´Đ²Đµ Ñ†Đ¸Ñ„Ñ€Ñ‹, Đ¸Đ»Đ¸ Đ¿Đ¾Ñ?Đ»ĐµĐ´Đ½Đ¸Đµ Đ´Đ²Đµ Ñ†Đ¸Ñ„Ñ€Ñ‹. Đ¿Đ¾Ñ?Đ»ĐµĐ´Đ½Ñ?Ñ? Ñ‡Đ°Ñ?Ñ‚ÑŒ IP-Đ°Đ´Ñ€ĐµÑ?Đ° ÑƒĐ´Đ°Đ»Ñ?ĐµÑ‚Ñ?Ñ? Đ¿Đ¾Ñ?Đ»Đµ Ñ‚Đ¾Ñ‡ĐºĐ¸ Đ¸Đ»Đ¸ Đ·Đ°Đ¼ĐµĐ½Ñ?ĐµÑ‚Ñ?Ñ? Đ·Đ°Đ¿Đ¾Đ»Đ½Đ¸Ñ‚ĐµĐ»Ñ?Đ¼Đ¸. Đ¡Đ¾ĐºÑ€Đ°Ñ‰ĐµĐ½Đ¸Đµ IP-Đ°Đ´Ñ€ĐµÑ?Đ° Đ¿Ñ€Đ¸Đ·Đ²Đ°Đ½Đ¾ Đ¿Ñ€ĐµĐ´Đ¾Ñ‚Đ²Ñ€Đ°Ñ‚Đ¸Ñ‚ÑŒ Đ¸Đ»Đ¸ Đ·Đ½Đ°Ñ‡Đ¸Ñ‚ĐµĐ»ÑŒĐ½Đ¾ Đ·Đ°Ñ‚Ñ€ÑƒĐ´Đ½Đ¸Ñ‚ÑŒ Đ¸Đ´ĐµĐ½Ñ‚Đ¸Ñ„Đ¸ĐºĐ°Ñ†Đ¸Ñ? Ñ‡ĐµĐ»Đ¾Đ²ĐµĐºĐ° Đ¿Đ¾ ĐµĐ³Đ¾ IP-Đ°Đ´Ñ€ĐµÑ?Ñƒ. Đ¨Đ¸Ñ„Ñ€Đ¾Đ²Đ°Đ½Đ¸Đµ SSL (https): Đ§Ñ‚Đ¾Đ±Ñ‹ Đ·Đ°Ñ‰Đ¸Ñ‚Đ¸Ñ‚ÑŒ Đ²Đ°ÑˆĐ¸ Đ´Đ°Đ½Đ½Ñ‹Đµ, Đ¿ĐµÑ€ĐµĐ´Đ°Đ²Đ°ĐµĐ¼Ñ‹Đµ Ñ‡ĐµÑ€ĐµĐ· Đ½Đ°ÑˆĐµ Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Đµ, Đ¼Ñ‹ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµĐ¼ ÑˆĐ¸Ñ„Ñ€Đ¾Đ²Đ°Đ½Đ¸Đµ SSL. Đ’Ñ‹ Đ¾Đ±Đ½Đ°Ñ€ÑƒĐ¶Đ¸Đ²Đ°ĐµÑ‚Đµ Ñ‚Đ°ĐºĐ¸Đµ Đ·Đ°ÑˆĐ¸Ñ„Ñ€Đ¾Đ²Đ°Đ½Đ½Ñ‹Đµ Ñ?Đ¾ĐµĐ´Đ¸Đ½ĐµĐ½Đ¸Ñ? Đ¿Đ¾ Đ¿Ñ€ĐµÑ„Đ¸ĐºÑ?Ñƒ https:// Đ² Đ°Đ´Ñ€ĐµÑ?Đ½Đ¾Đ¹ Ñ?Ñ‚Ñ€Đ¾ĐºĐµ Đ²Đ°ÑˆĐµĐ³Đ¾ Đ±Ñ€Đ°ÑƒĐ·ĐµÑ€Đ°.',
     // header ĂœBERMITTLUNG UND OFFENBARUNG VON PERSONENBEZOGENEN DATEN
     'BERMITTLUNGH1': 'ĐŸĐ•Đ Đ•Đ”Đ?Đ§Đ? Đ˜ Đ Đ?Đ¡Đ?Đ Đ«Đ¢Đ˜Đ• ĐŸĐ•Đ Đ¡Đ?Đ?Đ?Đ›Đ¬Đ?Đ«Đ¥ Đ”Đ?Đ?Đ?Đ«Đ¥',
     'Rahmen': 'Đ’ Ñ€Đ°Đ¼ĐºĐ°Ñ… Đ½Đ°ÑˆĐµĐ¹ Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ¸ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Đµ Đ¼Đ¾Đ³ÑƒÑ‚ Đ¿ĐµÑ€ĐµĐ´Đ°Đ²Đ°Ñ‚ÑŒÑ?Ñ? Đ´Ñ€ÑƒĐ³Đ¸Đ¼ Đ¾Ñ€Đ³Đ°Đ½Đ°Đ¼, ĐºĐ¾Đ¼Đ¿Đ°Đ½Đ¸Ñ?Đ¼, Ñ?Ñ€Đ¸Đ´Đ¸Ñ‡ĐµÑ?ĐºĐ¸ Ñ?Đ°Đ¼Đ¾Ñ?Ñ‚Đ¾Ñ?Ñ‚ĐµĐ»ÑŒĐ½Ñ‹Đ¼ Đ¾Ñ€Đ³Đ°Đ½Đ¸Đ·Đ°Ñ†Đ¸Ñ?Đ¼ Đ¸Đ»Đ¸ Đ»Đ¸Ñ†Đ°Đ¼ Đ¸Đ»Đ¸ Ñ€Đ°Ñ?ĐºÑ€Ñ‹Đ²Đ°Ñ‚ÑŒÑ?Ñ? Đ²Đ°Đ¼. ĐŸĐ¾Đ»ÑƒÑ‡Đ°Ñ‚ĐµĐ»Ñ?Đ¼Đ¸ Ñ?Ñ‚Đ¸Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ¼Đ¾Đ³ÑƒÑ‚ Đ±Ñ‹Ñ‚ÑŒ, Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¿Đ»Đ°Ñ‚ĐµĐ¶Đ½Ñ‹Đµ ÑƒÑ‡Ñ€ĐµĐ¶Đ´ĐµĐ½Đ¸Ñ? Đ² Ñ€Đ°Đ¼ĐºĐ°Ñ… Đ¿Đ»Đ°Ñ‚ĐµĐ¶Đ½Ñ‹Ñ… Đ¾Đ¿ĐµÑ€Đ°Ñ†Đ¸Đ¹, Đ¿Đ¾Ñ?Ñ‚Đ°Đ²Ñ‰Đ¸ĐºĐ¸ ÑƒÑ?Đ»ÑƒĐ³, Đ¿Đ¾Ñ€ÑƒÑ‡ĐµĐ½Đ½Ñ‹Đµ Đ˜Đ¢-Đ·Đ°Đ´Đ°Ñ‡Đ°Đ¼, Đ¸Đ»Đ¸ Đ¿Đ¾Ñ?Ñ‚Đ°Đ²Ñ‰Đ¸ĐºĐ¸ ÑƒÑ?Đ»ÑƒĐ³ Đ¸ ĐºĐ¾Đ½Ñ‚ĐµĐ½Ñ‚Đ°, Đ¿Đ¾Đ´ĐºĐ»Ñ?Ñ‡ĐµĐ½Đ½Ñ‹Ñ… Đº Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Ñƒ. Đ’ Ñ‚Đ°ĐºĐ¾Đ¼ Ñ?Đ»ÑƒÑ‡Đ°Đµ Đ¼Ñ‹ Ñ?Đ¾Đ±Đ»Ñ?Đ´Đ°ĐµĐ¼ Ñ‚Ñ€ĐµĐ±Đ¾Đ²Đ°Đ½Đ¸Ñ? Đ·Đ°ĐºĐ¾Đ½Đ¾Đ´Đ°Ñ‚ĐµĐ»ÑŒÑ?Ñ‚Đ²Đ° Đ¸, Đ² Ñ‡Đ°Ñ?Ñ‚Đ½Đ¾Ñ?Ñ‚Đ¸, Đ·Đ°ĐºĐ»Ñ?Ñ‡Đ°ĐµĐ¼ Ñ?Đ¾Đ¾Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²ÑƒÑ?Ñ‰Đ¸Đµ ĐºĐ¾Đ½Ñ‚Ñ€Đ°ĐºÑ‚Ñ‹ Đ¸Đ»Đ¸ ĐºĐ¾Đ½Ñ‚Ñ€Đ°ĐºÑ‚Ñ‹. Đ¡Đ¾Đ³Đ»Đ°ÑˆĐµĐ½Đ¸Ñ?, Đ¿Ñ€ĐµĐ´Đ½Đ°Đ·Đ½Đ°Ñ‡ĐµĐ½Đ½Ñ‹Đµ Đ´Đ»Ñ? Đ·Đ°Ñ‰Đ¸Ñ‚Ñ‹ Đ²Đ°ÑˆĐ¸Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ…, Đ·Đ°ĐºĐ»Ñ?Ñ‡Đ°Ñ?Ñ‚Ñ?Ñ? Ñ? Đ¿Đ¾Đ»ÑƒÑ‡Đ°Ñ‚ĐµĐ»Ñ?Đ¼Đ¸ Đ²Đ°ÑˆĐ¸Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ…. ĐŸĐµÑ€ĐµĐ´Đ°Ñ‡Đ° Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ²Đ½ÑƒÑ‚Ñ€Đ¸ Đ¾Ñ€Đ³Đ°Đ½Đ¸Đ·Đ°Ñ†Đ¸Đ¸: ĐœÑ‹ Đ¼Đ¾Đ¶ĐµĐ¼ Đ¿ĐµÑ€ĐµĐ´Đ°Đ²Đ°Ñ‚ÑŒ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Đµ Đ´Đ°Đ½Đ½Ñ‹Đµ Đ´Ñ€ÑƒĐ³Đ¸Đ¼ Đ¾Ñ€Đ³Đ°Đ½Đ°Đ¼ Đ² Đ½Đ°ÑˆĐµĐ¹ Đ¾Ñ€Đ³Đ°Đ½Đ¸Đ·Đ°Ñ†Đ¸Đ¸ Đ¸Đ»Đ¸ Đ¿Ñ€ĐµĐ´Đ¾Ñ?Ñ‚Đ°Đ²Đ»Ñ?Ñ‚ÑŒ Đ²Đ°Đ¼ Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿ Đº Ñ?Ñ‚Đ¸Đ¼ Đ´Đ°Đ½Đ½Ñ‹Đ¼. Đ•Ñ?Đ»Đ¸ Ñ‚Đ°ĐºĐ°Ñ? Đ¿ĐµÑ€ĐµĐ´Đ°Ñ‡Đ° Đ¾Ñ?ÑƒÑ‰ĐµÑ?Ñ‚Đ²Đ»Ñ?ĐµÑ‚Ñ?Ñ? Đ² Đ°Đ´Đ¼Đ¸Đ½Đ¸Ñ?Ñ‚Ñ€Đ°Ñ‚Đ¸Đ²Đ½Ñ‹Ñ… Ñ†ĐµĐ»Ñ?Ñ…, Đ¿ĐµÑ€ĐµĐ´Đ°Ñ‡Đ° Đ´Đ°Đ½Đ½Ñ‹Ñ… Đ¾Ñ?Đ½Đ¾Đ²Đ°Đ½Đ° Đ½Đ° Đ½Đ°ÑˆĐ¸Ñ… Đ·Đ°ĐºĐ¾Đ½Đ½Ñ‹Ñ… Đ´ĐµĐ»Đ¾Đ²Ñ‹Ñ… Đ¸ Đ´ĐµĐ»Đ¾Đ²Ñ‹Ñ… Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ°Ñ… Đ¸Đ»Đ¸ Đ¿Ñ€Đ¾Đ¸Ñ?Ñ…Đ¾Đ´Đ¸Ñ‚ Đ¿Ñ€Đ¸ ÑƒÑ?Đ»Đ¾Đ²Đ¸Đ¸ Đ²Ñ‹Đ¿Đ¾Đ»Đ½ĐµĐ½Đ¸Ñ? Đ½Đ°ÑˆĐ¸Ñ… Đ¾Đ±Ñ?Đ·Đ°Ñ‚ĐµĐ»ÑŒÑ?Ñ‚Đ², Ñ?Đ²Ñ?Đ·Đ°Đ½Đ½Ñ‹Ñ… Ñ? ĐºĐ¾Đ½Ñ‚Ñ€Đ°ĐºÑ‚Đ¾Đ¼, Đ¸Đ»Đ¸ Đ¿Ñ€Đ¸ Đ½Đ°Đ»Đ¸Ñ‡Đ¸Đ¸ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Ñ? Đ·Đ°Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ²Đ°Đ½Đ½Ñ‹Ñ… Ñ?Ñ‚Đ¾Ñ€Đ¾Đ½ Đ¸Đ»Đ¸ Ñ?Ñ€Đ¸Đ´Đ¸Ñ‡ĐµÑ?ĐºĐ¾Đ³Đ¾ Ñ€Đ°Đ·Ñ€ĐµÑˆĐµĐ½Đ¸Ñ?.',
     // header EINSATZ VON COOKIES
     'EINSATZH1': 'Đ˜Đ¡ĐŸĐ?Đ›Đ¬Đ—Đ?Đ’Đ?Đ?Đ˜Đ• Đ¤Đ?Đ™Đ›Đ?Đ’ COOKIE',
     'EINSATZH1': 'Đ’ Ñ€Đ°Đ¼ĐºĐ°Ñ… Đ½Đ°ÑˆĐµĐ³Đ¾ Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ? Ñ‚Đ°Đº Đ½Đ°Đ·Ñ‹Đ²Đ°ĐµĐ¼Ñ‹Đµ. Đ?ÑƒĐºĐ¸ Ñ€Đ°Đ·Đ²ĐµÑ€Đ½ÑƒÑ‚Ñ‹. Đ­Ñ‚Đ¾ Đ¿Đ°ĐºĐµÑ‚Ñ‹ Đ´Đ°Đ½Đ½Ñ‹Ñ…, ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đµ Đ¾Đ±Đ¼ĐµĐ½Đ¸Đ²Đ°Ñ?Ñ‚Ñ?Ñ? Đ¼ĐµĐ¶Đ´Ñƒ Ñ?ĐµÑ€Đ²ĐµÑ€Đ¾Đ¼ Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ? Đ¸ Đ±Ñ€Đ°ÑƒĐ·ĐµÑ€Đ¾Đ¼ Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»Ñ?. Đ?Đ½Đ¸ Ñ?Đ¾Ñ…Ñ€Đ°Đ½Ñ?Ñ?Ñ‚Ñ?Ñ? Đ¿Ñ€Đ¸ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Đ¸ Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ? Ñ? Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµĐ¼Ñ‹Ñ… ÑƒÑ?Ñ‚Ñ€Đ¾Đ¹Ñ?Ñ‚Đ² (ĐŸĐ?, Đ½Đ¾ÑƒÑ‚Đ±ÑƒĐºĐ°, Đ¿Đ»Đ°Đ½ÑˆĐµÑ‚Đ°, Ñ?Đ¼Đ°Ñ€Ñ‚Ñ„Đ¾Đ½Đ° Đ¸ Ñ‚. Đ”.). Đ¤Đ°Đ¹Đ»Ñ‹ cookie Đ½Đµ Đ¼Đ¾Đ³ÑƒÑ‚ Đ½Đ°Đ½ĐµÑ?Ñ‚Đ¸ ÑƒÑ‰ĐµÑ€Đ± Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµĐ¼Ñ‹Đ¼ ÑƒÑ?Ñ‚Ñ€Đ¾Đ¹Ñ?Ñ‚Đ²Đ°Đ¼ Đ² Ñ‚Đ¾Đ¹ Ñ?Ñ‚ĐµĐ¿ĐµĐ½Đ¸, Đ² ĐºĐ¾Ñ‚Đ¾Ñ€Đ¾Đ¹ Đ¾Đ½Đ¸ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒÑ?Ñ‚Ñ?Ñ?. Đ’ Ñ‡Đ°Ñ?Ñ‚Đ½Đ¾Ñ?Ñ‚Đ¸, Đ¾Đ½Đ¸ Đ½Đµ Ñ?Đ¾Đ´ĐµÑ€Đ¶Đ°Ñ‚ Đ²Đ¸Ñ€ÑƒÑ?Đ¾Đ² Đ¸Đ»Đ¸ Đ´Ñ€ÑƒĐ³Đ¸Ñ… Đ²Ñ€ĐµĐ´Đ¾Đ½Đ¾Ñ?Đ½Ñ‹Ñ… Đ¿Ñ€Đ¾Đ³Ñ€Đ°Đ¼Đ¼. Đ¤Đ°Đ¹Đ»Ñ‹ cookie Ñ…Ñ€Đ°Đ½Ñ?Ñ‚ Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Ñ?, ĐºĐ¾Ñ‚Đ¾Ñ€Đ°Ñ? Đ²Đ¾Đ·Đ½Đ¸ĐºĐ°ĐµÑ‚ Đ² Ñ?Đ²Ñ?Đ·Đ¸ Ñ? ĐºĐ¾Đ½ĐºÑ€ĐµÑ‚Đ½Ñ‹Đ¼ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµĐ¼Ñ‹Đ¼ ÑƒÑ?Ñ‚Ñ€Đ¾Đ¹Ñ?Ñ‚Đ²Đ¾Đ¼. Đ­Ñ‚Đ¾ Đ½Đ¸ Đ² ĐºĐ¾ĐµĐ¼ Ñ?Đ»ÑƒÑ‡Đ°Đµ Đ½Đµ Đ¿Đ¾Đ·Đ²Đ¾Đ»Ñ?ĐµÑ‚ Đ½Đ°Đ¼ Đ¿Đ¾Đ»ÑƒÑ‡Đ¸Ñ‚ÑŒ Đ½ĐµĐ¿Đ¾Ñ?Ñ€ĐµĐ´Ñ?Ñ‚Đ²ĐµĐ½Đ½Đ¾Đµ Đ¿Ñ€ĐµĐ´Ñ?Ñ‚Đ°Đ²Đ»ĐµĐ½Đ¸Đµ Đ¾ Đ»Đ¸Ñ‡Đ½Đ¾Ñ?Ñ‚Đ¸ Đ¿Đ¾Ñ?ĐµÑ‚Đ¸Ñ‚ĐµĐ»Ñ? Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Đ°. Đ¤Đ°Đ¹Đ»Ñ‹ cookie Đ² Đ¾Ñ?Đ½Đ¾Đ²Đ½Đ¾Đ¼ Đ¿Ñ€Đ¸Đ½Đ¸Đ¼Đ°Ñ?Ñ‚Ñ?Ñ? Đ² Ñ?Đ¾Đ¾Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²Đ¸Đ¸ Ñ? Đ¾Ñ?Đ½Đ¾Đ²Đ½Ñ‹Đ¼Đ¸ Đ½Đ°Ñ?Ñ‚Ñ€Đ¾Đ¹ĐºĐ°Đ¼Đ¸ Đ±Ñ€Đ°ÑƒĐ·ĐµÑ€Đ¾Đ². Đ?Đ°Ñ?Ñ‚Ñ€Đ¾Đ¹ĐºĐ¸ Đ±Ñ€Đ°ÑƒĐ·ĐµÑ€Đ° Đ¼Đ¾Đ¶Đ½Đ¾ Đ½Đ°Ñ?Ñ‚Ñ€Đ¾Đ¸Ñ‚ÑŒ Ñ‚Đ°Đº, Ñ‡Ñ‚Đ¾Đ±Ñ‹ Ñ„Đ°Đ¹Đ»Ñ‹ cookie Đ»Đ¸Đ±Đ¾ Đ½Đµ Đ¿Ñ€Đ¸Đ½Đ¸Đ¼Đ°Đ»Đ¸Ñ?ÑŒ Đ½Đ° Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµĐ¼Ñ‹Ñ… ÑƒÑ?Ñ‚Ñ€Đ¾Đ¹Ñ?Ñ‚Đ²Đ°Ñ…, Đ»Đ¸Đ±Đ¾ Ñ‡Ñ‚Đ¾Đ±Ñ‹ ĐºĐ°Đ¶Đ´Đ¾Đµ Đ¾Ñ‚Đ´ĐµĐ»ÑŒĐ½Đ¾Đµ ÑƒĐ²ĐµĐ´Đ¾Đ¼Đ»ĐµĐ½Đ¸Đµ Đ±Ñ‹Đ»Đ¾ Ñ?Đ´ĐµĐ»Đ°Đ½Đ¾ Đ´Đ¾ Ñ?Đ¾Đ·Đ´Đ°Đ½Đ¸Ñ? Đ½Đ¾Đ²Đ¾Đ³Đ¾ Ñ„Đ°Đ¹Đ»Đ° cookie. Đ¢ĐµĐ¼ Đ½Đµ Đ¼ĐµĐ½ĐµĐµ, Ñ?Đ»ĐµĐ´ÑƒĐµÑ‚ Đ¾Ñ‚Đ¼ĐµÑ‚Đ¸Ñ‚ÑŒ, Ñ‡Ñ‚Đ¾ Đ¾Ñ‚ĐºĐ»Ñ?Ñ‡ĐµĐ½Đ¸Đµ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie Đ¼Đ¾Đ¶ĐµÑ‚ Đ¿Ñ€Đ¸Đ²ĐµÑ?Ñ‚Đ¸ Đº Ñ‚Đ¾Đ¼Ñƒ, Ñ‡Ñ‚Đ¾ Đ½Đµ Đ²Ñ?Đµ Ñ„ÑƒĐ½ĐºÑ†Đ¸Đ¸ Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ? Đ±ÑƒĐ´ÑƒÑ‚ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Ñ‹ Đ½Đ°Đ¸Đ»ÑƒÑ‡ÑˆĐ¸Đ¼ Đ¾Đ±Ñ€Đ°Đ·Đ¾Đ¼. Đ˜Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Đµ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie Ñ?Đ»ÑƒĐ¶Đ¸Ñ‚ Đ´Đ»Ñ? Ñ‚Đ¾Đ³Đ¾, Ñ‡Ñ‚Đ¾Đ±Ñ‹ Ñ?Đ´ĐµĐ»Đ°Ñ‚ÑŒ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Đµ Đ½Đ°ÑˆĐµĐ³Đ¾ Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ? Đ±Đ¾Đ»ĐµĐµ ÑƒĐ´Đ¾Đ±Đ½Ñ‹Đ¼. Đ?Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Ñ?ĐµĐ°Đ½Ñ?Đ¾Đ²Ñ‹Đµ Ñ„Đ°Đ¹Đ»Ñ‹ cookie Đ¼Đ¾Đ³ÑƒÑ‚ Đ±Ñ‹Ñ‚ÑŒ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Ñ‹ Đ´Đ»Ñ? Đ¾Đ¿Ñ€ĐµĐ´ĐµĐ»ĐµĐ½Đ¸Ñ? Ñ‚Đ¾Đ³Đ¾, Đ¿Đ¾Ñ?ĐµÑ‚Đ¸Đ» Đ»Đ¸ Đ¿Đ¾Ñ?ĐµÑ‚Đ¸Ñ‚ĐµĐ»ÑŒ Đ¾Ñ‚Đ´ĐµĐ»ÑŒĐ½Ñ‹Đµ Ñ?Ñ‚Ñ€Đ°Đ½Đ¸Ñ†Ñ‹ Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Đ°. ĐŸĐ¾Ñ?Đ»Đµ Đ²Ñ‹Ñ…Đ¾Đ´Đ° Ñ? Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Đ° Ñ?Ñ‚Đ¸ Ñ?ĐµĐ°Đ½Ñ?Đ¾Đ²Ñ‹Đµ Ñ„Đ°Đ¹Đ»Ñ‹ cookie Đ°Đ²Ñ‚Đ¾Đ¼Đ°Ñ‚Đ¸Ñ‡ĐµÑ?ĐºĐ¸ ÑƒĐ´Đ°Đ»Ñ?Ñ?Ñ‚Ñ?Ñ?. Đ’Ñ€ĐµĐ¼ĐµĐ½Đ½Ñ‹Đµ Ñ„Đ°Đ¹Đ»Ñ‹ cookie Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒÑ?Ñ‚Ñ?Ñ? Đ´Đ»Ñ? ÑƒĐ»ÑƒÑ‡ÑˆĐµĐ½Đ¸Ñ? ÑƒĐ´Đ¾Đ±Ñ?Ñ‚Đ²Đ° Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Ñ?. Đ?Đ½Đ¸ Ñ…Ñ€Đ°Đ½Ñ?Ñ‚Ñ?Ñ? Đ½Đ° ÑƒÑ?Ñ‚Ñ€Đ¾Đ¹Ñ?Ñ‚Đ²Đµ Đ¿Đ¾Ñ?ĐµÑ‚Đ¸Ñ‚ĐµĐ»Ñ? Đ² Ñ‚ĐµÑ‡ĐµĐ½Đ¸Đµ Đ²Ñ€ĐµĐ¼ĐµĐ½Đ½Đ¾Đ³Đ¾ Đ¿ĐµÑ€Đ¸Đ¾Đ´Đ° Đ²Ñ€ĐµĐ¼ĐµĐ½Đ¸. ĐŸÑ€Đ¸ Đ¿Đ¾Đ²Ñ‚Đ¾Ñ€Đ½Đ¾Đ¼ Đ¿Đ¾Ñ?ĐµÑ‰ĐµĐ½Đ¸Đ¸ Đ²ĐµĐ±-Ñ?Ñ‚Ñ€Đ°Đ½Đ¸Ñ†Ñ‹ Đ°Đ²Ñ‚Đ¾Đ¼Đ°Ñ‚Đ¸Ñ‡ĐµÑ?ĐºĐ¸ Đ¾Đ±Đ½Đ°Ñ€ÑƒĐ¶Đ¸Đ²Đ°ĐµÑ‚Ñ?Ñ?, Ñ‡Ñ‚Đ¾ Đ¿Đ¾Ñ?ĐµÑ‚Đ¸Ñ‚ĐµĐ»ÑŒ ÑƒĐ¶Đµ Đ¿Đ¾Ñ?ĐµÑ‰Đ°Đ» Ñ?Ñ‚Ñ€Đ°Đ½Đ¸Ñ†Ñƒ Đ² Đ±Đ¾Đ»ĐµĐµ Ñ€Đ°Đ½Đ½ĐµĐµ Đ²Ñ€ĐµĐ¼Ñ? Đ¸ ĐºĐ°ĐºĐ¸Đµ Đ²Ñ…Đ¾Đ´Ñ‹ Đ¸ Đ½Đ°Ñ?Ñ‚Ñ€Đ¾Đ¹ĐºĐ¸ Đ±Ñ‹Đ»Đ¸ Ñ?Đ´ĐµĐ»Đ°Đ½Ñ‹ Đ¿Ñ€Đ¸ Ñ?Ñ‚Đ¾Đ¼, Ñ‡Ñ‚Đ¾Đ±Ñ‹ Đ½Đµ Đ¿Đ¾Đ²Ñ‚Đ¾Ñ€Ñ?Ñ‚ÑŒ Đ¸Ñ…. Đ¤Đ°Đ¹Đ»Ñ‹ cookie Ñ‚Đ°ĐºĐ¶Đµ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒÑ?Ñ‚Ñ?Ñ? Đ´Đ»Ñ? Đ°Đ½Đ°Đ»Đ¸Đ·Đ° Đ¿Ñ€Đ¾Ñ?Đ¼Đ¾Ñ‚Ñ€Đ¾Đ² Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ? Đ² Ñ?Ñ‚Đ°Ñ‚Đ¸Ñ?Ñ‚Đ¸Ñ‡ĐµÑ?ĐºĐ¸Ñ… Ñ†ĐµĐ»Ñ?Ñ… Đ¸ Đ´Đ»Ñ? ÑƒĐ»ÑƒÑ‡ÑˆĐµĐ½Đ¸Ñ? Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ?. Đ­Ñ‚Đ¸ Ñ„Đ°Đ¹Đ»Ñ‹ cookie Đ¿Đ¾Đ·Đ²Đ¾Đ»Ñ?Ñ?Ñ‚ Đ°Đ²Ñ‚Đ¾Đ¼Đ°Ñ‚Đ¸Ñ‡ĐµÑ?ĐºĐ¸ Ñ€Đ°Ñ?Đ¿Đ¾Đ·Đ½Đ°Đ²Đ°Ñ‚ÑŒ, Ñ‡Ñ‚Đ¾ Đ¿Đ¾Ñ?ĐµÑ‚Đ¸Ñ‚ĐµĐ»ÑŒ Ñ€Đ°Đ½ĐµĐµ Đ¿Đ¾Ñ?ĐµÑ‰Đ°Đ» Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚ Đ¿Ñ€Đ¸ Đ¿Đ¾Đ²Ñ‚Đ¾Ñ€Đ½Đ¾Đ¼ Đ¿Đ¾Ñ?ĐµÑ‰ĐµĐ½Đ¸Đ¸. Đ—Đ´ĐµÑ?ÑŒ Đ¿Ñ€Đ¾Đ¸Ñ?Ñ…Đ¾Đ´Đ¸Ñ‚ Đ°Đ²Ñ‚Đ¾Đ¼Đ°Ñ‚Đ¸Ñ‡ĐµÑ?ĐºĐ¾Đµ ÑƒĐ´Đ°Đ»ĐµĐ½Đ¸Đµ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie Đ¿Đ¾ Đ¸Ñ?Ñ‚ĐµÑ‡ĐµĐ½Đ¸Đ¸ Đ¾Đ¿Ñ€ĐµĐ´ĐµĐ»ĐµĐ½Đ½Đ¾Đ³Đ¾ Đ²Ñ€ĐµĐ¼ĐµĐ½Đ¸. ĐŸÑ€Đ¾Đ´Đ¾Đ»Đ¶Đ¸Ñ‚ĐµĐ»ÑŒĐ½Đ¾Ñ?Ñ‚ÑŒ Ñ…Ñ€Đ°Đ½ĐµĐ½Đ¸Ñ?: ĐµÑ?Đ»Đ¸ Đ¼Ñ‹ Đ½Đµ Đ¿Ñ€ĐµĐ´Đ¾Ñ?Ñ‚Đ°Đ²Đ¸Đ¼ Đ²Đ°Đ¼ Ñ?Đ²Đ½ÑƒÑ? Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Ñ? Đ¾ Đ¿Ñ€Đ¾Đ´Đ¾Đ»Đ¶Đ¸Ñ‚ĐµĐ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸ Ñ…Ñ€Đ°Đ½ĐµĐ½Đ¸Ñ? Đ¿Đ¾Ñ?Ñ‚Đ¾Ñ?Đ½Đ½Ñ‹Ñ… Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ² Ñ€Đ°Đ¼ĐºĐ°Ñ… Ñ‚Đ°Đº Đ½Đ°Đ·Ñ‹Đ²Đ°ĐµĐ¼Đ¾Đ³Đ¾ Ñ„Đ°Đ¹Đ»Đ° cookie). Đ?Ñ‚ĐºĐ°Đ· Đ¾Ñ‚ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie), Đ¿Đ¾Đ¶Đ°Đ»ÑƒĐ¹Ñ?Ñ‚Đ°, Đ¿Ñ€ĐµĐ´Đ¿Đ¾Đ»Đ¾Đ¶Đ¸Ñ‚Đµ, Ñ‡Ñ‚Đ¾ Ñ?Ñ€Đ¾Đº Ñ…Ñ€Đ°Đ½ĐµĐ½Đ¸Ñ? Đ¼Đ¾Đ¶ĐµÑ‚ Ñ?Đ¾Ñ?Ñ‚Đ°Đ²Đ»Ñ?Ñ‚ÑŒ Đ´Đ¾ Đ´Đ²ÑƒÑ… Đ»ĐµÑ‚. Đ?Đ±Ñ‰Đ¸Đµ ÑƒĐºĐ°Đ·Đ°Đ½Đ¸Ñ? Đ¿Đ¾ Đ¾Ñ‚Đ·Ñ‹Đ²Ñƒ Đ¸ Đ²Đ¾Đ·Ñ€Đ°Đ¶ĐµĐ½Đ¸Ñ? (Đ¾Ñ‚ĐºĐ°Đ·): Đ’ Đ·Đ°Đ²Đ¸Ñ?Đ¸Đ¼Đ¾Ñ?Ñ‚Đ¸ Đ¾Ñ‚ Ñ‚Đ¾Đ³Đ¾, Đ¾Ñ?ÑƒÑ‰ĐµÑ?Ñ‚Đ²Đ»Ñ?ĐµÑ‚Ñ?Ñ? Đ»Đ¸ Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ° Đ½Đ° Đ¾Ñ?Đ½Đ¾Đ²Đµ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Ñ? Đ¸Đ»Đ¸ Ñ€Đ°Đ·Ñ€ĐµÑˆĐµĐ½Đ¸Ñ? Đ·Đ°ĐºĐ¾Đ½Đ°, Ñƒ Đ²Đ°Ñ? Đ²Ñ?ĐµĐ³Đ´Đ° ĐµÑ?Ñ‚ÑŒ Đ²Đ¾Đ·Đ¼Đ¾Đ¶Đ½Đ¾Ñ?Ñ‚ÑŒ Đ¾Ñ‚Đ¾Đ·Đ²Đ°Ñ‚ÑŒ Đ¿Ñ€ĐµĐ´Đ¾Ñ?Ñ‚Đ°Đ²Đ»ĐµĐ½Đ½Đ¾Đµ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Đµ Đ¸Đ»Đ¸ Đ¾Ñ‚ĐºĐ°Đ·Đ°Ñ‚ÑŒÑ?Ñ? Đ¾Ñ‚ Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ¸ Đ²Đ°ÑˆĐ¸Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ… Ñ? Đ¿Đ¾Đ¼Đ¾Ñ‰ÑŒÑ? Ñ‚ĐµÑ…Đ½Đ¾Đ»Đ¾Đ³Đ¸Đ¹ cookie (Đ² Ñ?Đ¾Đ²Đ¾ĐºÑƒĐ¿Đ½Đ¾Ñ?Ñ‚Đ¸ Đ½Đ°Đ·Ñ‹Đ²Đ°ĐµĐ¼Ñ‹Ñ… â€?Đ¾Ñ‚ĐºĐ°Đ·Đ¾Đ¼â€œ). Đ¡Đ½Đ°Ñ‡Đ°Đ»Đ° Đ²Ñ‹ Đ¼Đ¾Đ¶ĐµÑ‚Đµ Đ¾Đ±Ñ?Ñ?Ñ?Đ½Đ¸Ñ‚ÑŒ Ñ?Đ²Đ¾Đµ Đ½ĐµÑ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Đµ Ñ? Đ¿Đ¾Đ¼Đ¾Ñ‰ÑŒÑ? Đ½Đ°Ñ?Ñ‚Ñ€Đ¾ĐµĐº Ñ?Đ²Đ¾ĐµĐ³Đ¾ Đ±Ñ€Đ°ÑƒĐ·ĐµÑ€Đ°, Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¾Ñ‚ĐºĐ»Ñ?Ñ‡Đ¸Đ² Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Đµ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie (Ñ‡Ñ‚Đ¾ Ñ‚Đ°ĐºĐ¶Đµ Đ¼Đ¾Đ¶ĐµÑ‚ Đ¾Đ³Ñ€Đ°Đ½Đ¸Ñ‡Đ¸Ñ‚ÑŒ Ñ€Đ°Đ±Đ¾Ñ‚Đ¾Ñ?Đ¿Đ¾Ñ?Đ¾Đ±Đ½Đ¾Ñ?Ñ‚ÑŒ Đ½Đ°ÑˆĐµĐ³Đ¾ Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ?). ĐŸÑ€Đ¾Ñ‚Đ¸Đ²Đ¾Ñ€ĐµÑ‡Đ¸Đµ Ñ? Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸ĐµĐ¼ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie Đ² Ñ†ĐµĐ»Ñ?Ñ… Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¼Đ°Ñ€ĐºĐµÑ‚Đ¸Đ½Đ³Đ° Ñ‚Đ°ĐºĐ¶Đµ Đ¼Đ¾Đ¶ĐµÑ‚ Đ²Đ¾Đ·Đ½Đ¸ĐºĐ½ÑƒÑ‚ÑŒ Ñ? Đ¿Đ¾Đ¼Đ¾Ñ‰ÑŒÑ? Ñ€Đ°Đ·Đ»Đ¸Ñ‡Đ½Ñ‹Ñ… ÑƒÑ?Đ»ÑƒĐ³, Đ¾Ñ?Đ¾Đ±ĐµĐ½Đ½Đ¾ Đ² Ñ?Đ»ÑƒÑ‡Đ°Đµ Đ¾Ñ‚Ñ?Đ»ĐµĐ¶Đ¸Đ²Đ°Đ½Đ¸Ñ?, Ñ‡ĐµÑ€ĐµĐ· Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Ñ‹ https://optout.aboutads.info Đ¸ https://www.youronlinechoices.com / Đ±Ñ‹Ñ‚ÑŒ Đ¾Đ±Ñ?Ñ?Ñ?Đ½ĐµĐ½Đ½Ñ‹Đ¼. Đ?Ñ€Đ¾Đ¼Đµ Ñ‚Đ¾Đ³Đ¾, Đ²Ñ‹ Đ¼Đ¾Đ¶ĐµÑ‚Đµ Đ¿Đ¾Đ»ÑƒÑ‡Đ¸Ñ‚ÑŒ Đ´Đ¾Đ¿Đ¾Đ»Đ½Đ¸Ñ‚ĐµĐ»ÑŒĐ½Ñ‹Đµ Đ²Đ¾Đ·Ñ€Đ°Đ¶ĐµĐ½Đ¸Ñ? Đ² Ñ?Đ¾Đ¾Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²Đ¸Đ¸ Ñ? Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸ĐµĐ¹ Đ¾ Đ¿Đ¾Ñ?Ñ‚Đ°Đ²Ñ‰Đ¸ĐºĐ°Ñ… ÑƒÑ?Đ»ÑƒĐ³ Đ¸ Ñ„Đ°Đ¹Đ»Đ°Ñ… cookie, ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đµ Đ²Ñ‹ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµÑ‚Đµ. Đ?Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ° Đ´Đ°Đ½Đ½Ñ‹Ñ… cookie Đ½Đ° Đ¾Ñ?Đ½Đ¾Đ²Đµ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Ñ?: ĐœÑ‹ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµĐ¼ Đ¿Ñ€Đ¾Ñ†ĐµĐ´ÑƒÑ€Ñƒ ÑƒĐ¿Ñ€Đ°Đ²Đ»ĐµĐ½Đ¸Ñ? Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸ĐµĐ¼ cookie, Đ² Ñ€Đ°Đ¼ĐºĐ°Ñ… ĐºĐ¾Ñ‚Đ¾Ñ€Đ¾Đ¹ Đ¿Đ¾Đ´Ñ‚Đ²ĐµÑ€Đ¶Đ´Đ°ĐµÑ‚Ñ?Ñ? Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Đµ Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»ĐµĐ¹ Đ½Đ° Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Đµ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie Đ¸Đ»Đ¸ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie. Đ¾Đ±Ñ€Đ°Đ±Đ¾Ñ‚ĐºĐ¸ Đ¸ Đ¿Đ¾Ñ?Ñ‚Đ°Đ²Ñ‰Đ¸ĐºĐ¸, ÑƒĐ¿Đ¾Đ¼Ñ?Đ½ÑƒÑ‚Ñ‹Đµ Đ² Ñ€Đ°Đ¼ĐºĐ°Ñ… Đ¿Ñ€Đ¾Ñ†ĐµĐ´ÑƒÑ€Ñ‹ ÑƒĐ¿Ñ€Đ°Đ²Đ»ĐµĐ½Đ¸Ñ? Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸ĐµĐ¼ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie, Đ¼Đ¾Đ³ÑƒÑ‚ Đ±Ñ‹Ñ‚ÑŒ Đ¿Đ¾Đ»ÑƒÑ‡ĐµĐ½Ñ‹, Đ° Ñ‚Đ°ĐºĐ¶Đµ ÑƒĐ¿Ñ€Đ°Đ²Đ»Ñ?Ñ‚ÑŒÑ?Ñ? Đ¸ Đ¾Ñ‚Đ¼ĐµĐ½ĐµĐ½Ñ‹ Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»Ñ?Đ¼Đ¸. ĐŸÑ€Đ¸ Ñ?Ñ‚Đ¾Đ¼ Đ·Đ°Ñ?Đ²Đ»ĐµĐ½Đ¸Đµ Đ¾ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Đ¸ Ñ?Đ¾Ñ…Ñ€Đ°Đ½Ñ?ĐµÑ‚Ñ?Ñ?, Ñ‡Ñ‚Đ¾Đ±Ñ‹ Đ½Đµ Đ¿Đ¾Đ²Ñ‚Đ¾Ñ€Ñ?Ñ‚ÑŒ ĐµĐ³Đ¾ Đ·Đ°Đ¿Ñ€Đ¾Ñ? Ñ?Đ½Đ¾Đ²Đ° Đ´Đ»Ñ? Đ½ĐµĐ¾Đ±Ñ…Đ¾Đ´Đ¸Đ¼Đ¾Ñ?Ñ‚Đ¸ Đ¸ Đ½Đµ Đ¸Đ¼ĐµÑ‚ÑŒ Đ²Đ¾Đ·Đ¼Đ¾Đ¶Đ½Đ¾Ñ?Ñ‚Đ¸ Đ´Đ¾ĐºĐ°Đ·Đ°Ñ‚ÑŒ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Đµ Đ² Ñ?Đ¾Đ¾Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²Đ¸Đ¸ Ñ? Ñ?Ñ€Đ¸Đ´Đ¸Ñ‡ĐµÑ?ĐºĐ¸Đ¼Đ¸ Đ¾Đ±Ñ?Đ·Đ°Ñ‚ĐµĐ»ÑŒÑ?Ñ‚Đ²Đ°Đ¼Đ¸. Đ¥Ñ€Đ°Đ½ĐµĐ½Đ¸Đµ Đ¼Đ¾Đ¶ĐµÑ‚ Đ¾Ñ?ÑƒÑ‰ĐµÑ?Ñ‚Đ²Đ»Ñ?Ñ‚ÑŒÑ?Ñ? Đ½Đ° Ñ?Ñ‚Đ¾Ñ€Đ¾Đ½Đµ Ñ?ĐµÑ€Đ²ĐµÑ€Đ° Đ¸/Đ¸Đ»Đ¸ Đ² Ñ„Đ°Đ¹Đ»Đµ cookie (Ñ‚Đ°Đº Đ½Đ°Đ·Ñ‹Đ²Đ°ĐµĐ¼Đ¾Đ¼ Ñ„Đ°Đ¹Đ»Đµ cookie, Đ¸Đ»Đ¸ Ñ? Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸ĐµĐ¼ Ñ?Đ¾Đ¿Đ¾Ñ?Ñ‚Đ°Đ²Đ¸Đ¼Ñ‹Ñ… Ñ‚ĐµÑ…Đ½Đ¾Đ»Đ¾Đ³Đ¸Đ¹), Ñ‡Ñ‚Đ¾Đ±Ñ‹ Đ¸Đ¼ĐµÑ‚ÑŒ Đ²Đ¾Đ·Đ¼Đ¾Đ¶Đ½Đ¾Ñ?Ñ‚ÑŒ Ñ?Đ¾Đ¿Đ¾Ñ?Ñ‚Đ°Đ²Đ¸Ñ‚ÑŒ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Đµ Ñ? Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»ĐµĐ¼ Đ¸Đ»Đ¸ ĐµĐ³Đ¾ ÑƒÑ?Ñ‚Ñ€Đ¾Đ¹Ñ?Ñ‚Đ²Đ¾Đ¼. ĐŸÑ€Đ¸ ÑƒÑ?Đ»Đ¾Đ²Đ¸Đ¸ Đ¸Đ½Đ´Đ¸Đ²Đ¸Đ´ÑƒĐ°Đ»ÑŒĐ½Đ¾Đ¹ Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Đ¸ Đ¾ Đ¿Đ¾Ñ?Ñ‚Đ°Đ²Ñ‰Đ¸ĐºĐ°Ñ… ÑƒÑ?Đ»ÑƒĐ³ Đ¿Đ¾ ÑƒĐ¿Ñ€Đ°Đ²Đ»ĐµĐ½Đ¸Ñ? Ñ„Đ°Đ¹Đ»Đ°Đ¼Đ¸ cookie Đ¿Ñ€Đ¸Đ¼ĐµĐ½Ñ?Ñ?Ñ‚Ñ?Ñ? Ñ?Đ»ĐµĐ´ÑƒÑ?Ñ‰Đ¸Đµ ÑƒĐºĐ°Đ·Đ°Đ½Đ¸Ñ?: Đ¡Ñ€Đ¾Đº Ñ…Ñ€Đ°Đ½ĐµĐ½Đ¸Ñ? Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Ñ? Đ¼Đ¾Đ¶ĐµÑ‚ Ñ?Đ¾Ñ?Ñ‚Đ°Đ²Đ»Ñ?Ñ‚ÑŒ Đ´Đ¾ Đ´Đ²ÑƒÑ… Đ»ĐµÑ‚. ĐŸÑ€Đ¸ Ñ?Ñ‚Đ¾Đ¼ Ñ„Đ¾Ñ€Đ¼Đ¸Ñ€ÑƒĐµÑ‚Ñ?Ñ? Đ¿Ñ?ĐµĐ²Đ´Đ¾Đ½Đ¸Đ¼Đ½Ñ‹Đ¹ Đ¸Đ´ĐµĐ½Ñ‚Đ¸Ñ„Đ¸ĐºĐ°Ñ‚Đ¾Ñ€ Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»Ñ? Đ¸ Ñ?Đ¾Ñ…Ñ€Đ°Đ½Ñ?ĐµÑ‚Ñ?Ñ? Ñ? ÑƒĐºĐ°Đ·Đ°Đ½Đ¸ĐµĐ¼ Đ´Đ°Ñ‚Ñ‹ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Ñ?, Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Đ¸ Đ¾ Đ¾Ñ…Đ²Đ°Ñ‚Đµ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Ñ? (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, ĐºĐ°ĐºĐ¸Đµ ĐºĐ°Ñ‚ĐµĐ³Đ¾Ñ€Đ¸Đ¸ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie Đ¸/Đ¸Đ»Đ¸ Đ¿Đ¾Ñ?Ñ‚Đ°Đ²Ñ‰Đ¸ĐºĐ¾Đ² ÑƒÑ?Đ»ÑƒĐ³), Đ° Ñ‚Đ°ĐºĐ¶Đµ Đ±Ñ€Đ°ÑƒĐ·ĐµÑ€Đ°, Ñ?Đ¸Ñ?Ñ‚ĐµĐ¼Ñ‹ Đ¸ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµĐ¼Đ¾Đ³Đ¾ ÑƒÑ?Ñ‚Ñ€Đ¾Đ¹Ñ?Ñ‚Đ²Đ°. â€¢ Đ¢Đ¸Đ¿Ñ‹ Đ¾Đ±Ñ€Đ°Đ±Đ°Ñ‚Ñ‹Đ²Đ°ĐµĐ¼Ñ‹Ñ… Đ´Đ°Đ½Đ½Ñ‹Ñ…: Đ´Đ°Đ½Đ½Ñ‹Đµ Đ¾Đ± Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Đ½Đ¸Đ¸ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¿Đ¾Ñ?ĐµÑ‰ĐµĐ½Đ½Ñ‹Đµ Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Ñ‹, Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ? Đº ĐºĐ¾Đ½Ñ‚ĐµĐ½Ñ‚Ñƒ, Đ²Ñ€ĐµĐ¼Ñ? Đ´Đ¾Ñ?Ñ‚ÑƒĐ¿Đ°), Đ¼ĐµÑ‚Đ°-/ĐºĐ¾Đ¼Đ¼ÑƒĐ½Đ¸ĐºĐ°Ñ†Đ¸Đ¾Đ½Đ½Ñ‹Đµ Đ´Đ°Đ½Đ½Ñ‹Đµ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Ñ? Đ¾Đ± ÑƒÑ?Ñ‚Ñ€Đ¾Đ¹Ñ?Ñ‚Đ²Đµ, IP-Đ°Đ´Ñ€ĐµÑ?Đ°). â€¢ Đ—Đ°Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Đ¾Đ²Đ°Đ½Đ½Ñ‹Đµ Đ»Đ¸Ñ†Đ°: Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»Đ¸ (Đ½Đ°Đ¿Ñ€Đ¸Đ¼ĐµÑ€, Đ¿Đ¾Ñ?ĐµÑ‚Đ¸Ñ‚ĐµĐ»Đ¸ Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Đ°, Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»Đ¸ Đ¾Đ½Đ»Đ°Đ¹Đ½-Ñ?ĐµÑ€Đ²Đ¸Ñ?Đ¾Đ²). â€¢ ĐŸÑ€Đ°Đ²Đ¾Đ²Ñ‹Đµ Đ¾Ñ?Đ½Đ¾Đ²Ñ‹: Đ¡Đ¾Đ³Đ»Đ°Ñ?Đ¸Đµ (Ñ?Ñ‚. 6 Đ°Đ±Ñ?. 1 Ñ?Ñ‚. 1 Đ»Đ¸Ñ‚. a. GDPR), Đ—Đ°ĐºĐ¾Đ½Đ½Ñ‹Đµ Đ¸Đ½Ñ‚ĐµÑ€ĐµÑ?Ñ‹ (Ñ?Ñ‚. 6 Đ°Đ±Ñ?. 1 Ñ?Ñ‚. 1 Đ»Đ¸Ñ‚. f.GDPR).',
     // header EINGESETZTE DIENSTE UND DIENSTEANBIETER
     'EINGESETZTEH1': 'Đ˜Đ¡ĐŸĐ?Đ›Đ¬Đ—Đ£Đ•ĐœĐ«Đ• Đ£Đ¡Đ›Đ£Đ“Đ˜ Đ˜ ĐŸĐ?Đ¡Đ¢Đ?Đ’Đ©Đ˜Đ?Đ˜ Đ£Đ¡Đ›Đ£Đ“',
     'Borlabs': 'Cookie Borlabs: Đ’ Đ½Đ°ÑˆĐµĐ¼ Đ¾Đ½Đ»Đ°Đ¹Đ½-Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¸Đ¸ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµÑ‚Ñ?Ñ? cookie Borlabs, ĐºĐ¾Ñ‚Đ¾Ñ€Ñ‹Đ¹ ÑƒÑ?Ñ‚Đ°Đ½Đ°Đ²Đ»Đ¸Đ²Đ°ĐµÑ‚ Ñ‚ĐµÑ…Đ½Đ¸Ñ‡ĐµÑ?ĐºĐ¸ Đ½ĐµĐ¾Đ±Ñ…Đ¾Đ´Đ¸Đ¼Ñ‹Đ¹ Ñ„Đ°Đ¹Đ» cookie Đ´Đ»Ñ? Ñ…Ñ€Đ°Đ½ĐµĐ½Đ¸Ñ? Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Ñ? Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»Ñ? Đ½Đ° cookie. Borlabs Ñ„Đ°Đ¹Đ»Ñ‹ cookie, Đ¾Đ±Ñ€Đ°Đ±Đ°Ñ‚Ñ‹Đ²Đ°ĐµĐ¼ Đ¿ĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Đµ Đ´Đ°Đ½Đ½Ñ‹Đµ. Đ’ Ñ„Đ°Đ¹Đ»Đµ cookie Borlabs Ñ…Ñ€Đ°Đ½Ñ?Ñ‚Ñ?Ñ? Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Ñ?, Đ¿Ñ€ĐµĐ´Đ¾Ñ?Ñ‚Đ°Đ²Đ»ĐµĐ½Đ½Ñ‹Đµ Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»ĐµĐ¼ Đ¿Ñ€Đ¸ Đ²Ñ…Đ¾Đ´Đµ Đ½Đ° Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚. Đ•Ñ?Đ»Đ¸ Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»ÑŒ Ñ…Đ¾Ñ‡ĐµÑ‚ Đ¾Ñ‚Đ¾Đ·Đ²Đ°Ñ‚ÑŒ Ñ?Ñ‚Đ¾ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Đµ, Đ¾Đ½ Đ¼Đ¾Đ¶ĐµÑ‚ ÑƒĐ´Đ°Đ»Đ¸Ñ‚ÑŒ Ñ„Đ°Đ¹Đ» cookie Đ² Ñ?Đ²Đ¾ĐµĐ¼ Đ±Ñ€Đ°ÑƒĐ·ĐµÑ€Đµ. ĐŸÑ€Đ¸ Đ¿Đ¾Đ²Ñ‚Đ¾Ñ€Đ½Đ¾Đ¼ Đ²Ñ…Đ¾Đ´Đµ/Đ¿ĐµÑ€ĐµĐ·Đ°Đ³Ñ€ÑƒĐ·ĐºĐµ Đ²ĐµĐ±-Ñ?Đ°Đ¹Ñ‚Đ° Đ¿Đ¾Đ»ÑŒĐ·Đ¾Đ²Đ°Ñ‚ĐµĐ»Ñ? Ñ?Đ½Đ¾Đ²Đ° Đ±ÑƒĐ´ĐµÑ‚ Đ¿Ñ€ĐµĐ´Đ»Đ¾Đ¶ĐµĐ½Đ¾ Đ¿Đ¾Đ»ÑƒÑ‡Đ¸Ñ‚ÑŒ Ñ?Đ¾Đ³Đ»Đ°Ñ?Đ¸Đµ Đ½Đ° Đ¿Đ¾Đ»ÑƒÑ‡ĐµĐ½Đ¸Đµ Ñ„Đ°Đ¹Đ»Đ¾Đ² cookie.',
     // page Impressum
     // header IMPRESSUM + Diensteanbieter
     'IMPRESSUMH1': 'ĐŸĐµÑ€Ñ?Đ¾Đ½Đ°Đ»ÑŒĐ½Ñ‹Đµ Đ´Đ°Đ½Đ½Ñ‹Đµ',
     'GmbH': 'Đ?Đ?Đ? DeinSteinDesign',
     'Steinberg': `Đ£Đ»Đ¸Ñ†Đ° Steinberg 13`,
     'Dresden': '01309 Dresden',
     // header KontaktmĂ¶glichkeiten
     'KontaktmgH1': `Đ’Đ¾Đ·Đ¼Đ¾Đ¶Đ½Đ¾Ñ?Ñ‚Đ¸ ĐºĐ¾Đ½Ñ‚Đ°ĐºÑ‚Đ°`,
     'permÂ²': 'E-Mail: hello@deinsteindesign.de Đ?Đ¾Đ½Ñ‚Đ°ĐºÑ‚Đ½Đ°Ñ? Ñ„Đ¾Ñ€Đ¼Đ°: https://deinsteindesign.de',
     // header Vertretungberechtigte
     'VertretungberechtigteH1': `Đ£Đ¿Đ¾Đ»Đ½Đ¾Đ¼Đ¾Ñ‡ĐµĐ½Đ½Ñ‹Đµ Đ¿Đ¾ Đ¿Ñ€ĐµĐ´Ñ?Ñ‚Đ°Đ²Đ»ĐµĐ½Đ¸Ñ?`,
     'Vertretungs': 'Đ˜Ñ?Đ¿Đ¾Đ»Đ½Đ¸Ñ‚ĐµĐ»ÑŒĐ½Ñ‹Đµ Đ´Đ¸Ñ€ĐµĐºÑ‚Đ¾Ñ€Đ°, ÑƒĐ¿Đ¾Đ»Đ½Đ¾Đ¼Đ¾Ñ‡ĐµĐ½Đ½Ñ‹Đµ Đ¿Ñ€ĐµĐ´Ñ?Ñ‚Đ°Đ²Đ¸Ñ‚ĐµĐ»ÑŒÑ?Ñ‚Đ²Đ¾Đ¼: Tina Oehler Đ¸ Linda Winnie Grumbt Đ²Đ¾Ñ€Ñ‡Đ°Ñ‚ Đ¡ÑƒĐ´ Đ¿Đ¾ Ñ€ĐµĐµÑ?Ñ‚Ñ€Ñƒ: Amtsgericht Dresden Đ ĐµĐ³Đ¸Ñ?Ñ‚Ñ€Đ°Ñ†Đ¸Đ¾Đ½Đ½Ñ‹Đ¹ Đ½Đ¾Đ¼ĐµÑ€: HRB 40323 Đ˜Đ´ĐµĐ½Ñ‚Đ¸Ñ„Đ¸ĐºĐ°Ñ†Đ¸Đ¾Đ½Đ½Ñ‹Đ¹ Đ½Đ¾Đ¼ĐµÑ€ Đ½Đ°Đ»Đ¾Đ³Đ° Ñ? Đ¿Ñ€Đ¾Đ´Đ°Đ¶: DE335975861',
     // header Inhaltlich Verantwortliche (o.S.d. Â§ 18 Abs. 2 MStV.):
     'InhaltlichH1': `Đ?Ñ‚Đ²ĐµÑ‚Ñ?Ñ‚Đ²ĐµĐ½Đ½Ñ‹Đµ Đ·Đ° Ñ?Đ¾Đ´ĐµÑ€Đ¶Đ°Đ½Đ¸Đµ (o.S.d. Â§ 18 Abs. 2 MStV.):`,
     'Tina': 'Tina Oehler Đ£Đ»Đ¸Ñ†Đ° Steinberg 3 D-01326 Dresden',
     // header Hinweis Nach Â§ 36 VSBG
     'HinweisH1': `ĐŸÑ€Đ¸Đ¼ĐµÑ‡Đ°Đ½Đ¸Đµ Đ¿Đ¾Ñ?Đ»Đµ Â§ 36 VSBG`,
     'Die': `Đ’Ñ‹ Đ¼Đ¾Đ¶ĐµÑ‚Đµ Đ½Đ°Đ¹Ñ‚Đ¸ Đ¿Đ»Đ°Ñ‚Ñ„Đ¾Ñ€Đ¼Ñƒ Đ´Đ»Ñ? Đ¾Đ½Đ»Đ°Đ¹Đ½-Ñ€Đ°Đ·Ñ€ĐµÑˆĐµĐ½Đ¸Ñ? Ñ?Đ¿Đ¾Ñ€Đ¾Đ² Đ•Đ²Ñ€Đ¾ĐºĐ¾Đ¼Đ¸Ñ?Ñ?Đ¸Đ¸ Đ¿Đ¾ Đ°Đ´Ñ€ĐµÑ?Ñƒ http://ec.europa.eu/consumers/odr ĐœÑ‹ Đ½Đµ Đ¾Đ±Ñ?Đ·Đ°Đ½Ñ‹ Đ¸ Đ² Đ¿Ñ€Đ¸Đ½Ñ†Đ¸Đ¿Đµ Đ½Đµ Đ³Đ¾Ñ‚Đ¾Đ²Ñ‹ ÑƒÑ‡Đ°Ñ?Ñ‚Đ²Đ¾Đ²Đ°Ñ‚ÑŒ Đ² Đ¿Ñ€Đ¾Ñ†ĐµĐ´ÑƒÑ€Đµ Ñ€Đ°Đ·Ñ€ĐµÑˆĐµĐ½Đ¸Ñ? Ñ?Đ¿Đ¾Ñ€Đ¾Đ² Đ² Đ°Ñ€Đ±Đ¸Ñ‚Ñ€Đ°Đ¶Đ½Đ¾Đ¼ Ñ†ĐµĐ½Ñ‚Ñ€Đµ Đ´Đ»Ñ? Đ¿Đ¾Ñ‚Ñ€ĐµĐ±Đ¸Ñ‚ĐµĐ»ĐµĐ¹.`,
     // header Design, Umsetzung
     'DesignH1': `Đ”Đ¸Đ·Đ°Đ¹Đ½, Ñ€ĐµĐ°Đ»Đ¸Đ·Đ°Ñ†Đ¸Ñ?`,
     'DesignH1': `Puls13 â€“ Ñ?Ñ‚Ñ€Đ°Ñ‚ĐµĐ³Đ¸Ñ? Đ¸ Ñ?Đ¾Đ·Đ´Đ°Đ½Đ¸Ñ? Đ?Đ?Đ?`,
     // header Marketingberatung
     'MarketingH1': `ĐœĐ°Ñ€ĐºĐµÑ‚Đ¸Đ½Đ³Đ¾Đ²Ñ‹Đµ ĐºĐ¾Đ½Ñ?ÑƒĐ»ÑŒÑ‚Đ°Ñ†Đ¸Đ¸`,
     'Anne': `Anne-Kathrin Liebthal https://www.comigo-marketing.de`,
     // header Fotografie
     'FotografieH1': `Đ¤Đ¾Ñ‚Đ¾Đ³Ñ€Đ°Ñ„Đ¸Đ¸`,
     'https': `https://get-shot.de`,
     // page Checkout
     // podmenu
     'home': 'Đ“Đ»Đ°Đ²Đ½Đ°Ñ?',
     'Checkout': `Đ?Đ¿Đ»Đ°Ñ‚Đ°`,
     // header Billing info
     'BillingH1': 'Đ˜Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Ñ? Đ¾Đ± Đ¾Đ¿Đ»Đ°Ñ‚Đµ',
     'PleaseÑ€2': 'ĐŸĐ¾Đ¶Đ°Đ»ÑƒĐ¹Ñ?Ñ‚Đ°, Đ²Đ²ĐµĐ´Đ¸Ñ‚Đµ Ñ?Đ²Đ¾Đ¸ Đ¿Đ»Đ°Ñ‚ĐµĐ¶Đ½Ñ‹Đµ Đ´Đ°Đ½Đ½Ñ‹Đµ',
     'Step': 'Đ¨Đ°Đ³ 1 Đ¸Đ· 5',
     // data entry
     'First': 'Đ˜Đ¼Ñ?',
     'Last': 'Đ¤Đ°Đ¼Đ¸Đ»Đ¸Ñ?',
     'Email': `Email`,
     'Phone': 'Đ?Đ¾Đ¼ĐµÑ€ Ñ‚ĐµĐ»ĐµÑ„Đ¾Đ½Đ°',
     'Address': `Đ?Đ´Ñ€ĐµÑ?`,
     'Town': 'Đ“Đ¾Ñ€Đ¾Đ´',
     'Country': `Đ¡Ñ‚Ñ€Đ°Đ½Đ°`,
     'Postal': 'ĐŸĐ¾Ñ‡Ñ‚Đ¾Đ²Ñ‹Đ¹ Đ¸Đ½Đ´ĐµĐºÑ?',
     'Ship': 'Đ?Ñ‚Đ¿Ñ€Đ°Đ²Đ¸Ñ‚ÑŒ Đ¿Đ¾ Đ´Ñ€ÑƒĐ³Đ¾Đ¼Ñƒ Đ°Đ´Ñ€ĐµÑ?Ñƒ?',
     // header Billing method
     'BillH1': 'Đ’Đ°Ñ€Đ¸Đ°Đ½Ñ‚ Đ´Đ¾Ñ?Ñ‚Đ°Đ²ĐºĐ¸',
     'PleaseÑ€2': 'ĐŸĐ¾Đ¶Đ°Đ»ÑƒĐ¹Ñ?Ñ‚Đ°, Đ²Ñ‹Đ±ĐµÑ€Đ¸Ñ‚Đµ Đ´Đ¾Ñ?Ñ‚Đ°Đ²ĐºÑƒ',
     'Step': 'Đ¨Đ°Đ³ 2 Đ¸Đ· 5',
     // header Payment method
     'PaymentH1': 'Đ¡Đ¿Đ¾Ñ?Đ¾Đ± Đ¾Đ¿Đ»Đ°Ñ‚Ñ‹',
     'PleaseÑ€2': 'ĐŸĐ¾Đ¶Đ°Đ»ÑƒĐ¹Ñ?Ñ‚Đ°, Đ²Đ²ĐµĐ´Đ¸Ñ‚Đµ Ñ?Đ²Đ¾Đ¹ Ñ?Đ¿Đ¾Ñ?Đ¾Đ± Đ¾Đ¿Đ»Đ°Ñ‚Ñ‹',
     'Step': 'Đ¨Đ°Đ³ 3 Đ¸Đ· 5',
     'Credit': 'Đ?Ñ€ĐµĐ´Đ¸Ñ‚Đ½Đ°Ñ? ĐºĐ°Ñ€Ñ‚Đ°',
     'Card': 'Đ?Đ¾Đ¼ĐµÑ€ ĐºĐ°Ñ€Ñ‚Ñ‹',
     'holder': 'Đ’Đ»Đ°Đ´ĐµĐ»ĐµÑ† ĐºĐ°Ñ€Ñ‚Ñ‹',
     'Expiration': 'Đ¡Ñ€Đ¾Đº Đ³Đ¾Đ´Đ½Đ¾Ñ?Ñ‚Đ¸',
     'PayPal': 'PayPal',
     'GooglePay ': 'GooglePay ',
     // header Additional informations
     'Additional': 'Đ”Đ¾Đ¿Đ¾Đ»Đ½Đ¸Ñ‚ĐµĐ»ÑŒĐ½Đ°Ñ? Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Ñ?',
     'Need': 'Đ?ÑƒĐ¶Đ½Đ¾ Ñ‡Ñ‚Đ¾-Ñ‚Đ¾ ĐµÑ‰Đµ? ĐœÑ‹ Ñ?Đ´ĐµĐ»Đ°ĐµĐ¼ Ñ?Ñ‚Đ¾ Đ´Đ»Ñ? Đ²Đ°Ñ?!',
     'Step': 'Đ¨Đ°Đ³ 4 Đ¸Đ· 5',
     'Order': 'ĐŸÑ€Đ¸Đ¼ĐµÑ‡Đ°Đ½Đ¸Ñ? Đº Đ·Đ°ĐºĐ°Đ·Ñƒ',
     'Need': 'Đ’Đ°Đ¼ Đ½ÑƒĐ¶ĐµĐ½ ĐºĐ¾Đ½ĐºÑ€ĐµÑ‚Đ½Ñ‹Đ¹ Đ´ĐµĐ½ÑŒ Đ´Đ¾Ñ?Ñ‚Đ°Đ²ĐºĐ¸? ĐŸĐ¾Ñ?Ñ‹Đ»Đ°ĐµÑ‚Đµ Đ¿Đ¾Đ´Đ°Ñ€Đ¾Đº? Đ?Đ°Đ¿Đ¸ÑˆĐ¸Ñ‚Đµ Đ½Đ°Đ¼...',
     // header Confirmation
     'ConfirmationH1': 'ĐŸĐ¾Đ´Ñ‚Đ²ĐµÑ€Đ¶Đ´ĐµĐ½Đ¸Đµ',
     'Weare': 'ĐœÑ‹ Đ¿Đ¾Đ´Ñ…Đ¾Đ´Đ¸Đ¼ Đº ĐºĐ¾Đ½Ñ†Ñƒ. Đ’Ñ?ĐµĐ³Đ¾ Đ½ĐµÑ?ĐºĐ¾Đ»ÑŒĐºĐ¾ ĐºĐ»Đ¸ĐºĐ¾Đ² Đ¸ Đ²Đ°Ñˆ Đ·Đ°ĐºĐ°Đ· Đ³Đ¾Ñ‚Đ¾Đ²!',
     'Step': 'Đ¨Đ°Đ³ 5 Đ¸Đ· 5',
     'Agree': 'Đ¯ Ñ?Đ¾Đ³Đ»Đ°Ñ?ĐµĐ½ Ñ? Đ¾Ñ‚Đ¿Ñ€Đ°Đ²ĐºĐ¾Đ¹ Đ¼Đ°Ñ€ĐºĐµÑ‚Đ¸Đ½Đ³Đ¾Đ²Ñ‹Ñ… Đ¸ Đ¸Đ½Ñ„Đ¾Ñ€Đ¼Đ°Ñ†Đ¸Đ¾Đ½Đ½Ñ‹Ñ… Đ¿Đ¸Ñ?ĐµĐ¼. Đ?Đ¸ĐºĐ°ĐºĐ¾Đ³Đ¾ Ñ?Đ¿Đ°Đ¼Đ°.',
     'With': 'Đ¯ Ñ?Đ¾Đ³Đ»Đ°Ñ?ĐµĐ½ Ñ? ÑƒÑ?Đ»Đ¾Đ²Đ¸Ñ?Đ¼Đ¸, Đ¿Đ¾Đ»Đ¾Đ¶ĐµĐ½Đ¸Ñ?Đ¼Đ¸ Đ¸ Đ¿Đ¾Đ»Đ¸Ñ‚Đ¸ĐºĐ¾Đ¹ ĐºĐ¾Đ½Ñ„Đ¸Đ´ĐµĐ½Ñ†Đ¸Đ°Đ»ÑŒĐ½Đ¾Ñ?Ñ‚Đ¸.',
     'Completebutt': 'Đ—Đ°Đ²ĐµÑ€ÑˆĐ¸Ñ‚ÑŒ Đ·Đ°ĐºĐ°Đ·',
     // header All your data are safe
     'Allyour': `Đ’Ñ?Đµ Đ²Đ°ÑˆĐ¸ Đ´Đ°Đ½Đ½Ñ‹Đµ Đ² Đ±ĐµĐ·Đ¾Đ¿Đ°Ñ?Đ½Đ¾Ñ?Ñ‚Đ¸`,
     'Weare': `ĐœÑ‹ Đ¸Ñ?Đ¿Đ¾Đ»ÑŒĐ·ÑƒĐµĐ¼ Ñ?Đ°Đ¼Ñ‹Đµ Ñ?Đ¾Đ²Ñ€ĐµĐ¼ĐµĐ½Đ½Ñ‹Đµ Ñ?Ñ€ĐµĐ´Ñ?Ñ‚Đ²Đ° Đ±ĐµĐ·Đ¾Đ¿Đ°Ñ?Đ½Đ¾Ñ?Ñ‚Đ¸, Ñ‡Ñ‚Đ¾Đ±Ñ‹ Đ¿Ñ€ĐµĐ´Đ¾Ñ?Ñ‚Đ°Đ²Đ¸Ñ‚ÑŒ Đ²Đ°Đ¼ Đ½Đ°Đ¸Đ»ÑƒÑ‡ÑˆĐ¸Đµ Đ²Đ¿ĐµÑ‡Đ°Ñ‚Đ»ĐµĐ½Đ¸Ñ?.`,
    }
  } 
})
export default i18n