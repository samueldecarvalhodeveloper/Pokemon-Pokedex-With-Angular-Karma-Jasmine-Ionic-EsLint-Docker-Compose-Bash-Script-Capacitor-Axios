import { Component } from "@angular/core";
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: "app-root",
  templateUrl: "app_configuration.component.html",
  styleUrls: ["./app_configuration.component.scss"],
  imports: [IonApp, IonRouterOutlet],
})
class AppConfigurationComponent {}

export default AppConfigurationComponent;
