namespace VarsWebApi.Models {
    export interface WaterConsumptionUsingPumpBase {
        /**ใช้เครื่องสูบน้้าเพื่อสูบน้้าหรือไม่ (ถ้าไม่ใช้ ข้ามไปถามสระถัดไป) */
        HasPump: boolean;

        /**บ่อนี้ใช้เครื่องสูบน้้ากี่เครื่อง */
        PumpCount: number | null;

        /**เครื่องสูบน้้าที่ใช้ */
        Pumps: Pump[];

        /**ใช้น้้าจาก บ่อ / สระ นี้เพื่อท้ากิจกรรมใดบ้างคิดเป็นสัดส่วนเท่าไร */
        WaterActivities: WaterActivity;

        /**ปัญหาคุณภาพน้้า */
        QualityProblem: WaterProblem;
    }
}
