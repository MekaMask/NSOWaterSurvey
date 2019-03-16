namespace VarsWebApi.Models {
    /**บ่อบาดาล สำหรับข้อมูลบ่อบาดาลทั้งส่วนตัวและสาธารณะ */
    export interface GroundWaterWell extends WaterConsumptionUsingPumpBase {
        /**
         * ใช้น้้าปริมาณเท่าไรต่อเดือนโดยเฉลี่ย   
         * @remarks  
         * 1.ทราบปริมาณน้้า
         * 2.ไม่ทราบปริมาณน้้าแต่ทราบค่าน้้า
         * 3.ไม่ทราบ
         */
        UsageType: GroundWaterUsage;

        /**ปริมาณน้ำ ลบ.ม./เดือน   */
        CubicMeterPerMonth: number | null;

        /**ไม่ทราบปริมาณน้้าแต่ทราบค่าน้้า  */
        WaterBill: number | null;
    }
}
