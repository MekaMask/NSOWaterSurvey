namespace VarsWebApi.Models {
    export interface FrogFarming {
        /**
         * ในรอบ 12 เดือนที่ผ่านมาครัวเรือนนี้ท้าการเพาะเลี้ยง เพาะฟัก อนุบาลสัตว์น้้าในพื้นที่น้้าจืดหรือไม่
         * (เฉพาะชนิดนี้)
         */
        Doing: boolean;
        /**ลักษณะการเลี้ยงเป็นบ่อ */
        Depression: boolean;
        /**ลักษณะการเลี้ยงเป็นกระชัง */
        Stew: boolean;
        /**ลักษณะการเลี้ยงในที่อื่นๆ */
        HasOther: boolean;
        Other: string;
        /**จ้านวนกบที่เลี้ยงเฉลี่ยต่อเดือน เดือนละกี่ตัว */
        AnimalsCount: number;
        /**การเลี้ยงสัตว์นี้ใช้น้้าจากแหล่งใดบ้าง */
        WaterSources: WaterSources;
    }
}