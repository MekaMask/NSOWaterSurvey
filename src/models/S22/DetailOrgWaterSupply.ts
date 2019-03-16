namespace VarsWebApi.Models {
    export interface DetailOrgWaterSupply {
        /**ชื่อหน่วยงาน  */
        Name: string;
        /**ใช้น้้าผิวดิน (สระน้้า แม่น้้า/ล้าคลอง) หรือไม่   */
        HasSurfaceWater: boolean;
        /**ถ้า “ใช้” ใช้น้้าผิวดินผลิตน้้าประปาโดยเฉลี่ยต่อเดือน ปริมาณเท่าไร   */
        SurfaceWaterPerMonth: number | null;
        /**ใช้น้้าจาก บ่อบาดาล หรือไม่    */
        UseGroundWater: boolean;
        /**ถ้า “ใช้” ใช้น้้าจากบ่อบาดาลกี่บ่อ    */
        GroundWaterCount: number | null;

        /**ใช้น้้าบาดาลผลิตน้้าประปาโดยเฉลี่ยต่อเดือนปริมาณเท่าไร    */
        GroundWaterUsePerMonth: number | null;

        /**น้้าประปาราคาขายหน่วยละเท่าไร  */
        PlumbingPrice: number;

        /**ค่าเช่ามิเตอร์คิดเดือนละเท่าไร   */
        MeterRentalFee: number;

        /**การผลิตน้้าประปา มีระบบการฆ่าเชื้อโรคหรือไม่  */
        Disinfection: DisinfectionMethod;
        /**ระบุการฆ่าเชื้อโรคด้วยวิธีอื่นๆ */
        OtherDisinfection: string;
    }
}
