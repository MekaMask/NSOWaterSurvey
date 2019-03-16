namespace VarsWebApi.Models {
    export interface YearsDisasterous {

        /**ปีที่เกิดอุทกภัย 2556-2560 */
        Year: number;

        /**FloodAmount - จำนวนครั้งที่เกิดอุทกภัย */
        Count: number;

        /**ระยะเวลาที่เกิดน้ำท่วม  (โดยเฉลี่ย : จำนวนวัน) */
        AvgDay: number;

        /**
         * ระยะเวลาที่เกิดน้ำท่วม  (โดยเฉลี่ย : จำนวนชั่วโมง)
         * ม่ีค่า 1-23
         */
        AvgHour: number;

        /**ระดับความสูงของน้ำท่วม (ซม.) */
        WaterHeightCm: number;
    }
}