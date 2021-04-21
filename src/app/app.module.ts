import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { CardoverviewComponent } from './components/cardoverview/cardoverview.component';
import { SearchselectformComponent } from './components/searchselectform/searchselectform.component';
import { DocscComponent } from './components/docsc/docsc.component';
import { ProgressComponent } from './components/progress/progress.component';
import { StatlistComponent } from './components/statlist/statlist.component';
import { CreateappComponent } from './components/createapp/createapp.component';
import { Createapp2Component } from './components/createapp2/createapp2.component';
import { Createapp3Component } from './components/createapp3/createapp3.component';
import { Cardoverview2Component } from './components/cardoverview2/cardoverview2.component';
import { Cardoverview3Component } from './components/cardoverview3/cardoverview3.component';
import { Cardoverview4Component } from './components/cardoverview4/cardoverview4.component';
import { BarlinechartComponent } from './components/barlinechart/barlinechart.component';
import { SignupComponent } from './pages/external/signup/signup.component';
import { TwolinechartComponent } from './components/twolinechart/twolinechart.component';

import { ResetPaswordComponent } from './pages/external/reset-pasword/reset-pasword.component';
import { ErrorPageComponent } from './pages/external/error-page/error-page.component';

import { SigninComponent } from './pages/external/signin/signin.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { SecurityComponent } from './components/security/security.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { GeneralComponent } from './components/general/general.component';
import { PlanComponent } from './components/plan/plan.component';
import { DataPrivacyComponent } from './components/data-privacy/data-privacy.component';
import { NotificationSettingsComponent } from './components/notification-settings/notification-settings.component';
import { HelpComponent } from './pages/help/help.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AccountComponent } from './pages/account/account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    OverviewComponent,
    ChartsComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    CardoverviewComponent,
    SearchselectformComponent,
    DocscComponent,
    ProgressComponent,
    StatlistComponent,
    CreateappComponent,
    Createapp2Component,
    Createapp3Component,
    Cardoverview2Component,
    Cardoverview3Component,
    Cardoverview4Component,
    BarlinechartComponent,
    SignupComponent,
    TwolinechartComponent,
    SigninComponent,
    ResetPaswordComponent,
    HelpComponent,
    NotificationsComponent,
    SettingsComponent,
    AccountComponent,
    NotificationComponent,
    ProfileComponent,
    PreferencesComponent,
    SecurityComponent,
    PaymentMethodComponent,
    GeneralComponent,
    PlanComponent,
    DataPrivacyComponent,
    NotificationSettingsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
