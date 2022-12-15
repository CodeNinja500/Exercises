import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {UserFormComponent} from './components/user-form/user-form.component';
import {CreateJobComponent} from './components/create-job/create-job.component';
import {CartComponent} from './components/cart/cart.component';
import {FormControlsComponent} from './components/form-controls/form-controls.component';
import {NewCartComponent} from './components/new-cart/new-cart.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {ExNineOneComponent} from './components/ex-nine-one/ex-nine-one.component';
import {ExNineThreeComponent} from './components/ex-nine-three/ex-nine-three.component';
import {PaginatorDoubleFeComponent} from './components/paginator-double-fe/paginator-double-fe.component';
import {PaginatorSingleBeComponent} from './components/paginator-single-be/paginator-single-be.component';
import {CryptoAutocompliteFeComponent} from './components/crypto-autocomplite-fe/crypto-autocomplite-fe.component';
import {SearchOnButtonComponent} from './components/search-on-button/search-on-button.component';
import {SearchOnTypingComponent} from './components/search-on-typing/search-on-typing.component';
import {UserFormComponentModule} from './components/user-form/user-form.component-module';
import {UsersServiceModule} from './services/users.service-module';
import {CreateJobComponentModule} from './components/create-job/create-job.component-module';
import {JobsServiceModule} from './services/jobs.service-module';
import {CartComponentModule} from './components/cart/cart.component-module';
import {CartServiceModule} from './services/cart.service-module';
import {FormControlsComponentModule} from './components/form-controls/form-controls.component-module';
import {NewCartComponentModule} from './components/new-cart/new-cart.component-module';
import {PaginatorComponentModule} from './components/paginator/paginator.component-module';
import {FakeStoreApiServiceModule} from './services/fake-store-api.service-module';
import {ExNineOneComponentModule} from './components/ex-nine-one/ex-nine-one.component-module';
import {ExNineThreeComponentModule} from './components/ex-nine-three/ex-nine-three.component-module';
import {PaginatorDoubleFeComponentModule} from './components/paginator-double-fe/paginator-double-fe.component-module';
import {PaginatorSingleBeComponentModule} from './components/paginator-single-be/paginator-single-be.component-module';
import {
  CryptoAutocompliteFeComponentModule
} from './components/crypto-autocomplite-fe/crypto-autocomplite-fe.component-module';
import {CryptosServiceModule} from './services/cryptos.service-module';
import {SearchOnButtonComponentModule} from './components/search-on-button/search-on-button.component-module';
import {SearchOnTypingComponentModule} from './components/search-on-typing/search-on-typing.component-module';
import {ProductsServiceModule} from "./services/products.service-module";

@NgModule({
  imports: [RouterModule.forRoot([{path: 'create-user-with-role', component: UserFormComponent}, {
    path: 'create-job',
    component: CreateJobComponent
  }, {path: ':id/cart', component: CartComponent}, {
    path: 'form-array',
    component: FormControlsComponent
  }, {path: ':id/new-cart', component: NewCartComponent}, {
    path: 'paginator',
    component: PaginatorComponent
  }, {path: 'ex-nine-one', component: ExNineOneComponent}, {
    path: 'ex-nine-three',
    component: ExNineThreeComponent
  }, {path: 'paginator-double-fe', component: PaginatorDoubleFeComponent}, {
    path: 'paginator-single-be',
    component: PaginatorSingleBeComponent
  }, {path: 'crypto-autocomplite-fe', component: CryptoAutocompliteFeComponent}, {
    path: 'search-on-button',
    component: SearchOnButtonComponent
  }, {
    path: 'search-on-typing',
    component: SearchOnTypingComponent
  }]), UserFormComponentModule, UsersServiceModule, CreateJobComponentModule, JobsServiceModule, CartComponentModule, CartServiceModule, FormControlsComponentModule, NewCartComponentModule, PaginatorComponentModule, FakeStoreApiServiceModule, MatDatepickerModule, ExNineOneComponentModule, ExNineThreeComponentModule, PaginatorDoubleFeComponentModule, PaginatorSingleBeComponentModule, CryptoAutocompliteFeComponentModule, CryptosServiceModule, SearchOnButtonComponentModule, SearchOnTypingComponentModule, ProductsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
