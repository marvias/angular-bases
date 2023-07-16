import { NgModule } from "@angular/core";
import { CounterComponent } from "./componets/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
