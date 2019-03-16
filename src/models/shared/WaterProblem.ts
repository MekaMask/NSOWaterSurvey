namespace VarsWebApi.Models {
    /**ปัญหาคุณภาพน้้า */
    export interface WaterProblem {
        /**มีปัญหาคุณภาพน้้า หรือไม่ */
        HasProblem: boolean;

        /**ปัญหา */
        Problem: Problem;
    }
}
