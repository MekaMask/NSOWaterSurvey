namespace VarsWebApi.Models {
    export interface CrocodileFarming {
        /**
         * ในรอบ 12 เดือนที่ผ่านมาครัวเรือนนี้ท้าการเพาะเลี้ยง เพาะฟัก อนุบาลสัตว์น้้าในพื้นที่น้้าจืดหรือไม่
         * (เฉพาะชนิดนี้)
         */
        Doing: boolean;
        /**ลักษณะการเลี้ยงเป็นบ่อ */
        Depression: boolean;
        /**ลักษณะการเลี้ยงในที่อื่นๆ */
        HasOther: boolean;
        Other: string;
        /**ถ้าเลี้ยงในบ่อ หรือร่องสวน มีจ้านวนบ่อหรือ ร่องสวนรวมเท่าไร  */
        FieldCount: number;
        /**
         * ขนาดบ่อหรือร่องสวนทั้งหมดเท่ากันหรือไม่  
         * @remarks  
         * True - 1. เท่ากัน (ให้ถามขนาดบ่อครั้งเดียว)
         * False - 2. ไม่เท่ากัน (ให้ถามทีละบ่อ)
         */
        FieldsAreSameSize: boolean;

        /**บ่อหรือร่องสวน (ที่ n) -- สอบถามทีละบ่อ */
        Fields: FieldSize[];
        /**จ้านวนที่เลี้ยงในปัจจุบัน (รวมทุกบ่อ/ร่องสวน)  */
        AnimalsCount: number;
        /**การเลี้ยงสัตว์นี้ใช้น้้าจากแหล่งใดบ้าง */
        WaterSources: WaterSources;
    }
}