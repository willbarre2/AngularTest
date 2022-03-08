# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

-------------------------------------------------------------------------------------

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


Observables: 

    interval$!: Observable<number>; créer variable observable
    interval() permet de générer un Observable qui émet des nombres croissants
    subscribe() permet de souscrire à un Observable dans le code TypeScript
    | async souscrit à un Observable pour afficher ses émissions dans le template.

    opérateurs bas niveau: (voir app.component)
        pipe() pour passer les opérateurs
        map() permet de transformer les émissions d'un Observable
        filter()  permet de filtrer les émissions d'un Observable
        tap()  permet d'ajouter des effets secondaires à un Observable


    opérateurs haut niveau: 
        Un Observable haut niveau est un Observable qui souscrit à d'autres Observables.
        L'Observable qui souscrit est appelé l'Observable extérieur, et les Observables qui sont souscrits sont appelés les Observables intérieurs.
        Les opérateurs haut niveau servent à gérer les situations où une nouvelle émission arrive de l'Observable extérieur alors que la souscription précédente à l'Observable intérieur n'a pas encore complété :
            -mergeMap  n'attend pas qu'un Observable intérieur complète pour souscrire au suivant – il assure la mise en parallèle.
            -concatMap  attend que l'Observable intérieur complète avant de souscrire au suivant – il assure la mise en série, même lorsque l'Observable extérieur émet plusieurs fois.
            -exhaustMap  ignore toute nouvelle émission de l'Observable extérieur tant qu'il y a une souscription active à un Observable intérieur.
            -Lorsque  switchMap  reçoit une nouvelle émission de l'Observable extérieur, s'il y a une souscription active à un Observable intérieur, il l'annule et souscrit au suivant.

    Un Observable souscrit qui ne complète pas risque de créer des fuites de mémoire.
    Si un Observable est souscrit avec la méthode subscribe(), 2 possibilités : 
        Si vous connaissez le nombre d'émissions qui vous intéressent, utilisez l'opérateur  take().
        Si vous avez besoin de toutes les émissions durant la vie du component, utilisez le pattern Destroy Subject.
    ngOnDestroy est un lifecycle hook qui est appelé lors de la destruction du component.
    Un Subject est un Observable que l'on peut forcer à émettre avec sa méthodenext().
    Les Observables souscrits avec le pipe  async  sont unsubscribe automatiquement par Angular lors de la destruction du component.


Formulaires: (ajouter FormsModule ds app.module)

    [(ngModel)] two-way binding, lie une variable au centenu d'un input
    (ngSubmit) lie méthode d'envoi de formualaire au button de type submit
    Envoyez le formulaire en entier avec une référence locale à la directive  ngForm  et une méthode qui attend un argument de type  NgForm  – n'oubliez pas d'ajouter des attributs  name  à tous vos  input. Envoi au submit d'un objet avec clefs = names.

    formulaires réactifs: (ajouter ReactiveFormsModule aux imports d'AppModule)

        -Utilisez FormBuilder pour générer un objet de type FormGroup (voir new-face-snap.component)
        -Liez le  form  du template au FormGroup avec  [formGroup], et les  input du formulaire aux contrôles du FormGroup avec  formControlName ;
        -Observez les changements de valeur du formulaire avec son Observable.valueChanges
        -Validators.required  rend un champ du formulaire requis.
        -Validators.pattern  vérifie que le contenu d'un champ correspond à une expression régulière.


HttpClient (ajouter HttpClientModule aux imports d'AppModule et HttpClient ds face-snaps.service)

    Les requêtes HTTP en Angular sont des Observables qui :
        émettent une fois et complètent lors d'une réponse positive ;
        émettent une erreur (et sont donc détruits) lors d'une erreur serveur.

    Les Observables générés par HttpClient envoient leur requête uniquement lorsqu'on souscrit à ces Observables ;

    Souscrire à l'Observable HTTP avec le pipe  async  permet d'afficher facilement les données retournées par un serveur

    Les méthodes  put()  et  post()  de HttpClient prennent l'URL de la requête comme premier argument, et le corps à envoyer comme deuxième argument ;

    Vous créez une requête composée lorsque la réponse d'une requête est utilisée pour en créer une autre ;

    Attention à l'asynchrone !(voir new-face onSubmitForm ) Si une action doit être effectuée après une requête, utilisez des opérateurs comme  tap()  dans le  pipe  de la requête 
    Quand une méthode de service génère une requête, le best practice est de retourner l'Observable et d'y souscrire depuis le component.


        