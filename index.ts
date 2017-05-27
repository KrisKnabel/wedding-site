import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


const firebaseConfig = {
  apiKey: "AIzaSyBn34r_hVyzUc5I7MiH_Ee9AEvUq56dHtQ",
    authDomain: "kris-and-kim.firebaseapp.com",
    databaseURL: "https://kris-and-kim.firebaseio.com",
    projectId: "kris-and-kim",
    storageBucket: "kris-and-kim.appspot.com",
    messagingSenderId: "159898231734"
};


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig, 'ng2-todo-app')
  ]
})
export class FirebaseModule {}
