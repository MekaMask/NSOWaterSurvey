namespace VarsWebApi.Models
{
    // บ่อน้้าบาดาลส่วนตัว 
    /**ในรอบ 1 ปีที่ผ่านมาใช้น้้าปริมาณเท่าไรต่อเดือนโดยเฉลี่ย  */
    export interface GroundWaterUsage
    {
        /**
         * ในรอบ 1 ปีที่ผ่านมา ใช้น้้าปริมาณเท่าไร ต่อเดือนโดยเฉลี่ย
         * @remarks  
         * 1.ทราบปริมาณน้้า
         * 2.ไม่ทราบปริมาณน้้าแต่ทราบค่าน้้า
         * 3.ไม่ทราบ
         */
        GroundWaterQuantity: GroundWaterQuantity;
        /**ลบ.ม./เดือน   */
        UsageCubicMeters: number;
        /**ไม่ทราบปริมาณน้้าแต่ทราบค่าน้้า  */
        WaterBill: number;
              
    }
    
}
