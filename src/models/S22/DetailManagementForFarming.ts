namespace VarsWebApi.Models {
    export interface DetailManagementForFarming {

        /**ชื่อโครงการ */
        Name: string;

        /**พื้นที่ของโครงการมีกี่ไร่ ใช้ ไร่(Area->Rai) ตารางวา(Area-> SqWa) */
        // TODO:
        Area: Area;

        /**จำนวนครัวเรือนที่เป็นสมาชิกโครงการมีจำนวนเท่าไร  */
        MemberCount: number;

        /**โครงการใช้น้้าผิวดินปริมาณโดยเฉลี่ยเดือนละเท่าไร (ให้รวมทุกพื้นที่ของโครงการ)  */
        AvgSurfaceWaterUse: number;

        /**โครงการมีบ่อน้้าบาดาลจำนวนกี่บ่อ   */
        GroundWaterCount: number;

        /**โครงการใช้น้้าบาดาลปริมาณโดยเฉลี่ยเดือนละเท่าไร (ให้รวมทุกพื้นที่ของโครงการ)   */
        AvgGroundWaterUse: number;
    }
}
