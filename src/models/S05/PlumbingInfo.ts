namespace VarsWebApi.Models {
    export interface PlumbingInfo {
        /**ใช้หรือไม่ */
        Doing: boolean;

        /**ปัญหาคุณภาพน้ำ */
        QualityProblem: WaterProblem;

        /**ปริมาณน้้าประปาที่ใช้เฉลี่ยเดือนละเท่าไร  */
        PlumbingUsage: PlumbingUsage;
    }
}