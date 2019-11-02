import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

//FOR ME
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgModule } from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { HttpClientModule} from  '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
// import { FullCalendarModule } from '@fullcalendar/angular';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { PublicComponent } from './pages/public/public.component';
import { LoginComponent } from './pages/public/login/login.component';
import { ChangePasswordComponent } from './pages/public/change-password/change-password.component';
import { WellcomeComponent } from './pages/public/wellcome/wellcome.component';
import { PrivateComponent } from './pages/private/private.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { UsersComponent } from './pages/private/users/users.component';
import { VentesComponent } from './pages/private/ventes/ventes.component';
import { EntreesComponent } from './pages/private/entrees/entrees.component';
import { SortiesComponent } from './pages/private/sorties/sorties.component';
import { RapportsComponent } from './pages/private/rapports/rapports.component';
import { HistoriquesComponent } from './pages/private/historiques/historiques.component';
import { ProfilComponent } from './pages/private/profil/profil.component';
import { MarchandisesComponent } from './pages/private/marchandises/marchandises.component';
import { CategoriesComponent } from './pages/private/marchandises/categories/categories.component';
import { ProduitsComponent } from './pages/private/marchandises/produits/produits.component';
import { AllComponent } from './pages/private/sorties/all/all.component';
import { DateComponent } from './pages/private/sorties/date/date.component';
import { TodayComponent } from './pages/private/sorties/today/today.component';
import { TodayVenteComponent } from './pages/private/ventes/today-vente/today-vente.component';
import { AllVenteComponent } from './pages/private/ventes/all-vente/all-vente.component';
import { DateVenteComponent } from './pages/private/ventes/date-vente/date-vente.component';
import { AdminFormComponent } from './components/forms/admin-form/admin-form.component';
import { VendeurFormComponent } from './components/forms/vendeur-form/vendeur-form.component';
import { PorteurFormComponent } from './components/forms/porteur-form/porteur-form.component';
import { MagasinierFormComponent } from './components/forms/magasinier-form/magasinier-form.component';
import { CatFormComponent } from './components/forms/cat-form/cat-form.component';
import { ProdFormComponent } from './components/forms/prod-form/prod-form.component';
import { ProdProfilComponent } from './components/profils/prod-profil/prod-profil.component';
import { CatProfilComponent } from './components/profils/cat-profil/cat-profil.component';
import { AdminProfilComponent } from './components/profils/admin-profil/admin-profil.component';
import { VendeurProfilComponent } from './components/profils/vendeur-profil/vendeur-profil.component';
import { MagasinierProfilComponent } from './components/profils/magasinier-profil/magasinier-profil.component';
import { PorteurProfilComponent } from './components/profils/porteur-profil/porteur-profil.component';
import { AdminsComponent } from './pages/private/users/admins/admins.component';
import { VendeursComponent } from './pages/private/users/vendeurs/vendeurs.component';
import { MagasiniersComponent } from './pages/private/users/magasiniers/magasiniers.component';
import { PorteursComponent } from './pages/private/users/porteurs/porteurs.component';
import { FournisseursComponent } from './pages/private/users/fournisseurs/fournisseurs.component';
import { FournisseurProfilComponent } from './components/profils/fournisseur-profil/fournisseur-profil.component';
import { FournisseurFormComponent } from './components/forms/fournisseur-form/fournisseur-form.component';
import { BilanComponent } from './pages/private/rapports/bilan/bilan.component';
import { InventairesComponent } from './pages/private/rapports/inventaires/inventaires.component';
import { StatsComponent } from './pages/private/rapports/stats/stats.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { ChangePasswordFormComponent } from './components/forms/change-password-form/change-password-form.component';
import { LoaderComponent } from './components/utils/loader/loader.component';
import { ByCategoriePipe } from './pipes/by-categorie.pipe';
import { ByTypePipe } from './pipes/by-type.pipe';
import { SearchUserPipe } from './pipes/search-user.pipe';
import { InventaireFormComponent } from './components/forms/inventaire-form/inventaire-form.component';
import { InventaireProfilComponent } from './components/profils/inventaire-profil/inventaire-profil.component';
import { EntreeProfilComponent } from './components/profils/entree-profil/entree-profil.component';
import { SearchOperationPipe } from './pipes/search-operation.pipe';
import { SearchInventairePipe } from './pipes/search-inventaire.pipe';
import { SearchEntityPipe } from './pipes/search-entity.pipe';
import { PasswordFormComponent } from './components/forms/password-form/password-form.component';
import { IdentifiantFormComponent } from './components/forms/identifiant-form/identifiant-form.component';
import { SortieProfilComponent } from './components/profils/sortie-profil/sortie-profil.component';
import { InfosComponent } from './pages/private/profil/infos/infos.component';
import { HistoriqueComponent } from './pages/private/profil/historique/historique.component';
import { ActivitesComponent } from './pages/private/profil/activites/activites.component';
import { UrgencePipe } from './pipes/urgence.pipe';
import { SearchNotificationPipe } from './pipes/search-notification.pipe';
import { SearchEntreePipe } from './pipes/search-entree.pipe';
import { BestSellPipe } from './pipes/best-sell.pipe';
import { WorstSellPipe } from './pipes/worst-sell.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    ChangePasswordComponent,
    WellcomeComponent,
    PrivateComponent,
    DashboardComponent,
    UsersComponent,
    VentesComponent,
    EntreesComponent,
    SortiesComponent,
    RapportsComponent,
    HistoriquesComponent,
    ProfilComponent,
    MarchandisesComponent,
    CategoriesComponent,
    ProduitsComponent,
    AllComponent,
    DateComponent,
    TodayComponent,
    TodayVenteComponent,
    AllVenteComponent,
    DateVenteComponent,
    AdminFormComponent,
    VendeurFormComponent,
    PorteurFormComponent,
    MagasinierFormComponent,
    CatFormComponent,
    ProdFormComponent,
    ProdProfilComponent,
    CatProfilComponent,
    AdminProfilComponent,
    VendeurProfilComponent,
    MagasinierProfilComponent,
    PorteurProfilComponent,
    AdminsComponent,
    VendeursComponent,
    MagasiniersComponent,
    PorteursComponent,
    FournisseursComponent,
    FournisseurProfilComponent,
    FournisseurFormComponent,
    BilanComponent,
    InventairesComponent,
    StatsComponent,
    LoginFormComponent,
    ChangePasswordFormComponent,
    LoaderComponent,
    ByCategoriePipe,
    ByTypePipe,
    SearchUserPipe,
    InventaireFormComponent,
    InventaireProfilComponent,
    EntreeProfilComponent,
    SearchOperationPipe,
    SearchInventairePipe,
    SearchEntityPipe,
    PasswordFormComponent,
    IdentifiantFormComponent,
    SortieProfilComponent,
    InfosComponent,
    HistoriqueComponent,
    ActivitesComponent,
    UrgencePipe,
    SearchNotificationPipe,
    SearchEntreePipe,
    BestSellPipe,
    WorstSellPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    //FOR ME
     BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
