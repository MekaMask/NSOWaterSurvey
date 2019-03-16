namespace VarsWebApi.Models {
    export interface SubUnit {
        /**หมายเลขห้อง, ใช้ '-' แทนส่วนกลาง */
        RoomNumber: string;

        Access: SubUnitAccess[];

        /**P1 - ใช้น้ำประปาหรือไม่ */
        HasPlumbing: boolean;
        /**P2.1 - มีมิเตอรน้ำประปาแยกจากส่วนกลางหรือไม่  */
        HasPlumbingMeter: boolean;
        /**P2.2 - ถ้ามเป็นมิเตอร์ของการประปาส่วนภูมิภาค/นครหลวงใช่หรือไม่ */
        IsPlumbingMeterXWA: boolean;
        /**P3 - ใช้น้ำบาดาลหรือไม่ */
        HasGroundWater: boolean;
        /**P4 - มีมิเตอร์น้ำบาดาลแยกจากส่วนกลางหรือไม่ */
        HasGroundWaterMeter: boolean;
    }
}
