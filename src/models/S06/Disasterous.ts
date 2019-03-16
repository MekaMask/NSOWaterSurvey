namespace VarsWebApi.Models {
    /**ปัญหาอุทกภัย */
    // TODO: go
    export interface Disasterous extends ModelBase
    {
        /**ในรอบ 5 ปีที่ผ่านมา (2556-2560) ที่อยู่อาศัยนี้ประสบปัญหาอุทกภัย (น้ำท่วมขัง น้ำรอการระบาย) หรือไม่ */
        Flooded: boolean;

        /**มีปัญหาอุทกภัยรอบ 5 ปีที่ผ่านมา (2556-2560) */
        YearsDisasterous: YearsDisasterous[];
    }
}
