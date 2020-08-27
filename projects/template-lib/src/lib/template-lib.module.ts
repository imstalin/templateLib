import { NgModule } from '@angular/core';
import { TemplateLibComponent } from './template-lib.component';
import { CardComponent } from './card/card.component';
import { DimensionsComponent } from './dimensions/dimensions.component';
import { SliderComponent } from './slider/slider.component';
import { ImagegalleryComponent } from './imagegallery/imagegallery.component';

@NgModule({
  declarations: [
    TemplateLibComponent,
    CardComponent,
    DimensionsComponent,
    SliderComponent,
    ImagegalleryComponent,
  ],
  imports: [],
  exports: [
    TemplateLibComponent,
    CardComponent,
    DimensionsComponent,
    SliderComponent,
    ImagegalleryComponent,
  ],
})
export class TemplateLibModule {}
