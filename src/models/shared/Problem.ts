namespace VarsWebApi.Models {
    /**ปัญหาคุณภาพน้ำ */
    export interface Problem {
        /**ขุ่น/ตะกอน   */
        TurbidWater: boolean;
        /**เค็ม/กร่อย   */
        SaltWater: boolean;
        /**มีกลิ่น */
        Smell: boolean;

        /**คราบมัน */
        FilmOfOil: boolean;

        /**ฝ้าขาว */
        FogWater: boolean;
        /**น้ำกระด้าง */
        HardWater: boolean;

    }
}