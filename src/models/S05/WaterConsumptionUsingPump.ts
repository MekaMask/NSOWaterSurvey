namespace VarsWebApi.Models {
    /**การนำน้ำออกมาใช้โดยใช้ปั๊มน้ำ แบบที่ถามปริมาณน้ำก่อน ถ้าไม่ทราบค่อยถามหาปั๊ม */
    export interface WaterConsumptionUsingPump extends WaterConsumptionUsingPumpBase {
        /**ทราบปริมาณน้ำที่นำมาใช้โดยเฉลี่ยต่อเดือนหรือไม่ */
        HasCubicMeterPerMonth: boolean;

        /**ปริมาณน้ำ ลบ.ม./เดือน   */
        CubicMeterPerMonth: number | null;
    }
}
