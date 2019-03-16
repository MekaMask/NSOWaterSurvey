namespace VarsWebApi.Models {
    /**H1-X การอนุญาตให้เข้าอาคาร */
    export enum BuildingAccess {
        /**1 มีผู้ให้ข้อมูลให้ความร่วมมือ   */
        HasPersonAndAccept = 1,
        /**2 มีผู้ให้ข้อมูลแต่ไม่ให้ความร่วมมือ   */
        HasPersonNoAccept = 2,
        /**3 ไม่มี/ไม่พบผู้ให้ข้อมูล   */
        NoPerson = 3,
        /**4 บ้าน/อาคารว่างหรือร้าง   */
        Vacancy = 4
    }
}