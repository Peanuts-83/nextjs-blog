---
title: 'Material Design - Angular'
date: '2022-07-31'
tech: 'Angular'
---

[![Material Design demo](/images/material/materialImg.png)](http://ec2-3-128-180-89.us-east-2.compute.amazonaws.com/)
[My Github repository](https://github.com/Peanuts-83/angular_material/tree/main/client)

Discover with a quick *HOW TO* the way to manage Material Design in your Angular projects. This is a short overview of the nice and smooth UI/UX capabilities of this cross-over framework library.

The interest of Material lives in the way you can develop UI/UX very well designed very quick, so you can spend more time on the interresting part of your job, I mean javascript algorythms and high-level functionalities...

And these components are also easily customizable, so it won't look the same as your neighbour ;)

## Easy setup

```bash
ng add @angular/material
```

After install, setup a specific **module** in shared/modules to manage all the required imports for your project. This way you wont load the whole library, but only the components you need.

Because you must import and export the same array of components twice, use a MATERIALS constant for both.

```javascript
// shared/modules/material.module.ts
import { NgModule } from '@angular/core'

import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'


const MATERIALS = [
  MatButtonModule,
  MatButtonToggleModule,
]

@NgModule({
  imports: MATERIALS,
  exports: MATERIALS,
})
export class MaterialModule { }

```

You can then import your material.module.ts in your app.module.ts.

```javascript
// app.module.ts
import { NgModule } from '@angular/core'
import { MaterialModule } from './shared/modules/material.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MaterialModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Import a Material component

Except specific functionalities, you will import them the same way every time:

* Functionality: \<Name> (ex: Button)
* Import JS name: \<Mat[Name]Module> (ex: MatButtonModule)
* Use HTML name: \<mat-[option?]-[Name]-[option?]> (ex: \<mat-button>, \<mat-raised-button>, etc...)


## Options

Some options are generic ones, such as color (basic/primary/accent/warn).<br>
Each components gets specific options, such as FormGroup and formControlName for Input components.

You can see a demo of a few part of the huge ammount of components of this library on [my demo page](http://ec2-3-128-180-89.us-east-2.compute.amazonaws.com/), while the technical explanations live on my Github README file.

[My Github repository](https://github.com/Peanuts-83/angular_material/tree/main/client)

*[For the whole API, check the OFFICIAL MATERIAL website dedicated to Angular https://material.angular.io/](https://material.angular.io/)*
