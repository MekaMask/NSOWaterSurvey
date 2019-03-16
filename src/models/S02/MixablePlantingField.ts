namespace VarsWebApi.Models {
    /**ข้อมูลแปลงเพาะปลูก พืชสมุนไพร ที่ปลูกผสมกับพืชหลักอื่นได้ */
    export interface MixablePlantingField extends GrowingFieldWithNames {
        /**
         * ลักษณะการปลูกเป็นแบบใด
         * @remarks  
         * True - 1. ปลูกเฉพาะ พืชผัก สมุนไพร
         * False - 2. ปลูกแบบปะปนกัน กับพืชชนิดอื่น
         */
        ThisPlantOnly: boolean;

        /**รายชื่อพืชที่ปลูกหลัก (เป็นรหัส) */
        MixedWithPrimaryPlantCode: string;
    }
}
