import { Component } from '@angular/core';
import { NavController, PopoverController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController,
    public modalCtrl: ModalController) {
    // used for an example of ngFor and navigation
    this.pages = [
      // test push
      { title: 'Zero', component: "ZeroPage" },
      { title: 'Building Test', component: "BuildingTestPage" },
      { title: 'HouseHold Test', component: "HouseHoldTestPage" },
      { title: 'Community Test', component: "CommunityTestPage" },
      { title: 'แบบสอบถามสำมะโนประชากรและเคหะ', component: "PopulationPage" },
      { title: 'Homesสำรวจน้ำ', component: "HomesPage" },
      { title: 'Unit', component: "UnitPage" },
      { title: 'ตอนที่ 1', component: "BuildingInformation1Page" },
      { title: 'ตอนที่ 2', component: "BuidlingInformation2Page" },
      { title: 'ตอนที่ 1 ครัวเรือนอยู่อาศัย', component: "ResidentialPage" },
      { title: 'ตอนที่ 2 การทำการเกษตร ', component: "AgriculturePage" },
      { title: 'ตอนที่ 2.1 ข้าว ', component: "RicePage" },
      { title: 'ตอนที่ 2.2 พืชไร่ ', component: "DryCropPlantingPage" },
      { title: 'ตอนที่ 2.3 ยางพารา', component: "RubberTreePage" },
      { title: 'ตอนที่ 2.4 พืชยืนต้น ไม้ผล สวนป่า', component: "PerennialPlantingPage" },
      { title: 'ตอนที่ 2.5 พืชผัก สมุนไพร', component: "HerbsPlantPage" },
      { title: 'ตอนที่ 2.6 ไม้ดอก ไม้ประดับ การเพาะพันธุ์ไม้ ', component: "FlowerCropPage" },
      { title: 'ตอนที่ 2.7 เพาะเชื้อและปลูกเห็ด', component: "MushroomPage" },
      { title: 'ตอนที่ 2.8 การเลี้ยงสัตว์เพื่อขายหรือใช้งานเกษตร', component: "AnimalFarmPage" },
      { title: 'ตอนที่ 2.9 การเพาะเลี้ยงสัตว์น้ำในพื้นที่น้ำจืด', component: "WaterAnimalPlantingPage" },
      { title: 'ตอนที่ 3 การผลิตสินค้า ', component: "FactorialPage" },
      { title: 'ตอนที่ 4 การค้าและการบริการ', component: "CommercialPage" },
      { title: '5.1 น้้ำประปา ', component: "PlumbingPage" },
      { title: '5.2 น้ำบาดาล ', component: "GroundWaterPage" },
      { title: '5.3 น้ำจากแม่น้ำ/ลำคลอง/แหล่งน้ำสาธารณะ', component: "RiverPage" },
      { title: '5.4 น้ำจากสระน้ำ/หนองน้ำ/บึง ', component: "PoolPage" },
      { title: '5.5 น้ำจากชลประทาน', component: "IrrigationPage" },
      { title: '5.6 การกักเก็บน้ำฝน', component: "RainPage" },
      { title: '5.7 น้ำที่ซื้อมาใช้', component: "BuyingPage" },
      { title: 'ตอนที่ 6 ปัญหาอุทกภัย', component: "DisasterousPage" },
      { title: 'ข้อมูลพื้นฐานส่วนบุคคล', component: "UserPage" },
      { title: 'Disaster', component: "DisasterPage" },
      { title: 'การจัดการน้ำในหมู่บ้านชุมชน', component: "CommunityWaterManagementPage" },
      { title: 'โครงการจัดการน้ำเพื่อการเกษตรชุมชน โดยใช้พื้นที่สาธารณะ', component: "ManagementForFarmingPage" },
    ];
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }
  Unit(){

    const modal = this.modalCtrl.create("DlgUnitPage");
    modal.present();
  }

}
