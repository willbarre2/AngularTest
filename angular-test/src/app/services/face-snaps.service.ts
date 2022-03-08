import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {


    constructor(private http: HttpClient){}

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageURL: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 8,
            location: "Bordeaux"
        },
        {
            id: 2,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createdDate: new Date(),
            snaps: 3
        },
        {
            id: 3,
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            imageURL: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 12,
            location: "la plage"
        }
    ];

    // getAllFaceSnaps(): FaceSnap[]{
    //     return this.faceSnaps;
    // }

    getAllFaceSnaps(): Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    // getFaceSnapById(id: number): FaceSnap {
    //     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    //     if (!faceSnap) {
    //         throw new Error('FaceSnap not found!');
    //     }else{
    //         return faceSnap;
    //     }
    // }

    getFaceSnapById(id: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`);
    }

    // snapFaceSnapsById(id: number, snapType: 'snap' | 'unsnap'): void{
    //     const faceSnap = this.getFaceSnapById(id);
    //     snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
    // }

    snapFaceSnapsById(id: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap>{
        return this.getFaceSnapById(id).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
            })),
            switchMap(updatedFaceSnap => this.http
            .put<FaceSnap>(`http://localhost:3000/facesnaps/${id}`, updatedFaceSnap))
        )
    }


    // addFaceSnap(formValue: { title: string, description: string, imageURL: string, location?: string}): void{
    //     const faceSnap: FaceSnap = {
    //         ...formValue,
    //         createdDate: new Date(),
    //         snaps: 0,
    //         id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    //     };
    //     this.faceSnaps.push(faceSnap);
    // }

    addFaceSnap(formValue: { title: string, description: string, imageURL: string, location?: string}): Observable<FaceSnap>{
        return this.getAllFaceSnaps().pipe(
            // je retrie les face-snaps par ordre croissant d'id dans une copie
            map(facesnaps => [...facesnaps].sort((a: FaceSnap, b: FaceSnap) => a.id - b.id)),
            // je garde le dernier
            map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
            // je le modifie avec les nouvelles valeurs
            map(previousFacesnap => ({
                ...formValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousFacesnap.id + 1
            })),
            // je l'envoie en post au serveur
            switchMap(newFacesnap => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps`, newFacesnap)) 
        );
    }
}
