namespace VarsWebApi.Models {
    /**
     * ข้อมูลการเพาะปลูกพืช
     * @typeparam T ข้อมูลการเพาะปลูกเฉพาะสำหรับพืชแต่ละแบบ
     */
    export interface PlantingInfo<T> extends ModelBase {
        /**ในรอบ 12 เดือนที่ผ่านมาครัวเรือนนี้ได้ปลูกพืช xxx หรือไม่ */
        Doing: boolean;

        /**มีพื้นที่ปลูก “xxx” จำนวนกี่แปลง */
        FieldCount: number;

        /**แปลงที่ (แปลงที่ n) -- สอบถามทีละแปลง */
        Fields: T[];
    }
}
