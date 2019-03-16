namespace VarsWebApi.Models {
    export interface WaterResourceBase<T>
       // where T: WaterConsumptionUsingPumpBase
    {
        /**มีบ่อน้้าบาดาลส่วนตัว / สาธารณะ หรือไม่ */
        Doing: boolean;

        /**ในรอบ 12 เดือนที่ผ่านมา มีบ่อน้้าบาดาลที่ใช้อยู่กี่บ่อ / สระ */
        WaterResourceCount: number;

        // TODO: enum (ใช้ class ร่วมกับคนอื่นด้วยเลยทำ class ของตัวเอง)
        /**ข้อมูลทีละ บ่อ / สระ */
        WaterResources: T[];
    }
}
