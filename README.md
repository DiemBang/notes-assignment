**Inlämningsuppgift: Notes**

Vi bygger ett dokumenthanteringssystem med en relationsdatabas!

**Bakgrund**

Du har fått en kund som vill bygga ett eget system för att skapa digitala dokument och önskar att se en demo på detta.
Kunden vill kunna logga in på sitt system, där se en lista på alla skapade dokument, kunna skapa nya och redigera de som redan finns där. Samt ta bort ett dokument. När kunden tittar på ett skapat dokument så skall det finnas möjlighet att se dokumentet både “live” dvs utan redigeringsläget samt att se dokumentet i redigeringsläge.

**G krav**

Det skall finnas en inloggning, men nivån på säkerhet för prototyp bestämmer du själv (dokumentera hur du har valt att göra). 
Dokument skall skapas och sparas i en MySql databas.
Projektet skall utformas som en headless applikation, dvs med ett frontend projekt och ett API.
För dokument skall det finnas en enkel redigering, där det går att skriva och ändra text. 
Ett dokument skall kunna visas i både redigerings och “vanligt” läge.
Förutom dessa tekniska krav är resten utav arkitekturen upp till dig. 
Alla CRUD operationer skall användas. Create, Read, Update, Delete.

**VG Krav**

Det skall gå att skapa nya användare som kan skapa sina egna dokument. Och enbart se sina skapade dokument. KOLLA INSPELNINGSVIDEO PÅ SLUTET 19 FEB
Det skall finnas en WYSIWYG editorn där det går att ändra både textfärg och bakgrundsfärg i editorn, samt att det skall gå att spara. 
Du skall även bifoga ett enklare dokument som visar hur databasen och dess relationer är konstruerat. KOLLA INSPELNINGSVIDEO PÅ SLUTET: UTDELNING INLÄMNINGSUPPGIFT
 

**Inlämning**

Projektet skall genomföras enligt headless principen men skapa strukturen för projektet i ett repo. Dvs i rooten kommer du ha en mapp som heter tex “frontend” och en mapp som heter “backend”. Dokumentera i readme.md hur projektet startas och är uppbyggt.

Skicka in länken till ert repo.

Bifoga även en databasdump (export) med lite innehåll så att projektet går att testa.
Samt dokumentera användarnamn och lösenord för databasen.