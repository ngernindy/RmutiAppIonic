import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy,Routes,RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Camera} from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { Geolocation } from '@ionic-native/geolocation/ngx';///GPS
import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    CKEditorModule,
    Ng2GoogleChartsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Camera,
    Geolocation,
    FileTransfer,
    File,
    

    
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
