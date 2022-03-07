# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


{{}} string interpolation

[] attribute binding

() evenements

@input() injection de type personalisé (voir model et injection ds face-snap.componeent)
On lie ensuite une valeur à cette propriété depuis le component parent avec l'attribute binding, c'est-à-dire le nom de la propriété entre crochets  []  en passant la valeur entre les guillemets ; ex. : [faceSnap]="mySnap"

? propriétés optionelles (location ds model)

*ngif directive conditionelle
*ngfor="let element of array" directive boucle
[ngStyle] directive ajout de style en ligne (dynamique)
[ngClass] ajout de classe

| uppercase lowercas titlecase  pipe pour modifier texte
date currency voir face-snap.component et single-face


@Injectable() inject un service (store) voir face-snap.service
private userService: UserService  pour l'ajouter au component (ds arguments constructor)

fileType: 'image' | 'video' literal type pour obliger un type définis (voir snapFaceSnapsById ds face-snap.service)

{ path: 'myPath', component: MyComponent } pour ajouter route ds app.routing.module
<router-outlet> là où on veut afficher les routes
<a routerLink=""> pour lier à route
routerLinkActive="classeName" pour mettre une classe quand active
[routerLinkActiveOptions]="{ exact: true }" Ignorez l'activation des routes enfants avec
this.router.navigateByUrl('/') pour naviger sur route en programmatique (ds fichiers TS)
const Id = +this.route.snapshot.params['id'] pour récupéré param de l'URL (+ reconvertis en number).