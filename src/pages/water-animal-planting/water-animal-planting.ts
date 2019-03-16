import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { FishFarmingComponent } from '../../components/fish-farming/fish-farming';
import { FrogFarmingComponent } from '../../components/frog-farming/frog-farming';
import { CrocodileFarmingComponent } from '../../components/crocodile-farming/crocodile-farming';
import { Store } from '@ngrx/store';
import { getHouseHoldSample } from '../../states/household';
import { map } from 'rxjs/operators';
import { HouseHoldState } from '../../states/household/household.reducer';

@IonicPage()
@Component({
  selector: 'page-water-animal-planting',
  templateUrl: 'water-animal-planting.html',
})
export class WaterAnimalPlantingPage {

  @ViewChildren(FishFarmingComponent) private fishFarming: FishFarmingComponent[];
  @ViewChildren(FrogFarmingComponent) private frogFarming: FrogFarmingComponent[];
  @ViewChildren(CrocodileFarmingComponent) private crocodileFarming: CrocodileFarmingComponent[];

  public f: FormGroup;
  private formData$ = this.store.select(getHouseHoldSample).pipe(map(s => s.agriculture.aquaticAnimals));
  private submitRequested: boolean;
  // 
  constructor(public navCtrl: NavController, private store: Store<HouseHoldState>, public navParams: NavParams, public fb: FormBuilder) {
    this.f = this.fb.group({
      "doing": [null, Validators.required],
      "isFish": [false, Validators.required],
      "fish": FishFarmingComponent.CreateFormGroup(fb),
      "isShrimp": [false, Validators.required],
      "shrimp": FishFarmingComponent.CreateFormGroup(fb),
      "isFrog": [false, Validators.required],
      "frog": FrogFarmingComponent.CreateFormGroup(fb),
      "isCrocodile": [false, Validators.required],
      "crocodile": CrocodileFarmingComponent.CreateFormGroup(fb),
      "isSnappingTurtle": [false, Validators.required],
      "snappingTurtle": CrocodileFarmingComponent.CreateFormGroup(fb),
      "isCrab": [false, Validators.required],
      "crab": FishFarmingComponent.CreateFormGroup(fb),
      "isShellFish": [false, Validators.required],
      "shellFish": FishFarmingComponent.CreateFormGroup(fb),
      "isTurtle": [false, Validators.required],
      "turtle": CrocodileFarmingComponent.CreateFormGroup(fb),
      "isReddish": [false, Validators.required],
      "reddish": FishFarmingComponent.CreateFormGroup(fb),
    }, {
        validator: WaterAnimalPlantingPage.checkAnyOrOther()
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterAnimalPlantingPage');
    this.formData$.subscribe(data => this.f.setValue(data));
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.fishFarming.forEach(it => it.submitRequest());
    this.frogFarming.forEach(it => it.submitRequest());
    this.crocodileFarming.forEach(it => it.submitRequest());
  }

  public isValid(name: string): boolean {
    var ctrl = this.f.get(name);
    if (name == 'anycheck') {
      ctrl = this.f;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.touched || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const isFish = c.get('isFish');
      const isShrimp = c.get('isShrimp');
      const isFrog = c.get('isFrog');
      const isSnappingTurtle = c.get('isSnappingTurtle');
      const isCrocodile = c.get('isCrocodile');
      const isCrab = c.get('isCrab');
      const isShellFish = c.get('isShellFish');
      const isTurtle = c.get('isTurtle');
      const isReddish = c.get('isReddish');

      if (!isFish.value && !isShrimp.value && !isFrog.value && !isCrocodile.value && !isCrab.value
        && !isShellFish.value && !isTurtle.value && !isReddish.value && !isSnappingTurtle.value) {

        return { 'anycheck': true };
      }
      return null;
    }
  }
}
