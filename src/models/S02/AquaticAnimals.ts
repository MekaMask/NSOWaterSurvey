namespace VarsWebApi.Models {
    /**การเลี้ยงสัตว์น้ำ */
    export interface AquaticAnimals {
        /**ในรอบ 12 เดือนที่ผ่านมาครัวเรือนนี้ท้าการเพาะเลี้ยง เพาะฟัก อนุบาลสัตว์น้้าในพื้นที่น้้าจืดหรือไม่  */
        Doing: boolean;
        /**ปลา */
        Fish: FishFarming;
        /**กุ้ง */
        Shrimp: FishFarming;
        /**กบ */
        Frog: FrogFarming;
        /**จระเข้ */
        Crocodile: CrocodileFarming;
        /**ตะพาบน้ำ */
        SnappingTurtle: CrocodileFarming;
        /**ปู */
        Crab: FishFarming;
        /**หอย */
        ShellFish: FishFarming;
        /**เต่า */
        Turtle: CrocodileFarming;
        /**ไรแดง */
        Reddish: FishFarming;
        // TODO:ใส่ฟอร์มเพิ่มให้ครบ - (เสร็จแล้ว)
    }
}