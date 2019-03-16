namespace VarsWebApi.Models {
    /**ได้รับอนุญาตให้เก็บข้อมูลผู้พักอาศัยในอาคารหรือไม่ */
    export enum UnitAccess {
        /**อนุญาต  */
        Allow = 1,
        /**ไม่อนุญาตแต่ให้ข้อมูล  */
        NotAllowGiveInfo = 2,
        /**ไม่อนุญาตและไม่ให้ข้อมูล */
        NotAllowNoInfo = 3,
    }
}