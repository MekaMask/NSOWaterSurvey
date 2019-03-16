namespace VarsWebApi.Models {
    /**2.1 ข้าว */
    export interface RicePlant {
        /**ในรอบ 12 เดือนที่ผ่านมาครัวเรือนนี้ได้ปลูกข้าวเองหรือไม่ */
        Doing: boolean;

        /**“ปลูกข้าว” มีแปลงนาจ้านวนกี่แปลง */
        FieldCount: number;

        /**แปลงนา (แปลงที่ n) -- สอบถามทีละแปลง */
        Fields: RicePlantingField[];
    }
}